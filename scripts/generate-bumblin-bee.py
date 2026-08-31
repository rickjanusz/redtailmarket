"""Generate src/lib/bumblin-bee.ts from Shopify content + Square variation ids.

Shopify: product = scent, variants = sizes. Images live on the product, but the
FILENAME encodes the size, so we bucket them by prefix.
Square: item = size line, variation = scent. We join on (size, scent) to carry
the Square variation id, so price and stock stay Square's job.
"""
import html
import json
import os
import re
import urllib.parse
import urllib.request
import difflib

TOOL = "/Users/RedTailMarket/.claude/projects/-Users-RedTailMarket-Projects-redtail-market/b538cba8-fd9a-4916-a100-799b957d5d3f/tool-results"
PAGES = [
    os.path.join(TOOL, "mcp-claude_ai_Shopify-graphql_query-1788212366192.txt"),
    os.path.join(TOOL, "mcp-claude_ai_Shopify-graphql_query-1788212390744.txt"),
]
OUT = "/Users/RedTailMarket/Projects/redtail-market/src/lib/bumblin-bee.ts"

MELT, OZ4, OZ7, OZ14, OZ48 = "melt3oz", "oz4", "oz7", "oz14", "oz48"
SIZE_ORDER = [MELT, OZ4, OZ7, OZ14, OZ48]
SIZE_LABEL = {
    MELT: "3oz Wax Melt",
    OZ4: "4oz Mason Jar Candle",
    OZ7: "7oz Mason Jar Candle",
    OZ14: "14oz Mason Jar Candle",
    OZ48: "48oz Triple Wick Candle",
}
SQUARE_ITEM = {
    MELT: "Bumblin Bee, 3oz Wax Melt",
    OZ4: "Bumblin Bee, 4oz Mason Jar Candle",
    OZ7: "Bumblin Bee, 7oz Mason Jar Candle",
    OZ14: "Bumblin Bee, 14oz Mason Jar Candle",
    OZ48: "Bumblin Bee, 48oz Apothecary Jar Candle",
}
# Shopify variant title -> our size key
VARIANT_SIZE = {
    "3oz wax melts": MELT,
    "4oz mason jar candle": OZ4,
    "7oz mason jar candle": OZ7,
    "14oz mason jar candle": OZ14,
    "48oz triple wick candle": OZ48,
}
# filename prefix -> size. Order matters (7oz_short before 7oz).
FILE_SIZE = [
    (re.compile(r"^melt[_-]", re.I), MELT),
    (re.compile(r"^3\s*oz[_-]", re.I), MELT),
    (re.compile(r"^4\s*oz[_-]", re.I), OZ4),
    (re.compile(r"^7\s*oz[_-]short[_-]", re.I), OZ7),
    (re.compile(r"^8\s*oz[_-]", re.I), OZ7),
    (re.compile(r"^8[_-]", re.I), OZ7),
    (re.compile(r"^7\s*oz[_-]", re.I), OZ7),
    (re.compile(r"^14\s*oz[_-]", re.I), OZ14),
    (re.compile(r"^14[_-]", re.I), OZ14),
    (re.compile(r"^48[_-]", re.I), OZ48),
]
PLACEHOLDER = re.compile(r"placeholder", re.I)


def tag_strip(s):
    s = re.sub(r"<br\s*/?>", " ", s or "")
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    return " ".join(s.split())


def notes_of(desc_html):
    """The <h3> line is the scent-note list (e.g. 'Lavender, Violet, Cardamom')."""
    m = re.search(r"<h3[^>]*>(.*?)</h3>", desc_html or "", re.S | re.I)
    n = tag_strip(m.group(1)) if m else ""
    return "" if n.lower().startswith("triple scented") else n


def body_of(desc_html):
    ps = re.findall(r"<p[^>]*>(.*?)</p>", desc_html or "", re.S | re.I)
    for p in ps:
        t = tag_strip(p)
        if len(t) > 40:
            return t
    return tag_strip(re.sub(r"<h[34][^>]*>.*?</h[34]>", "", desc_html or "", flags=re.S | re.I))


def basename(url):
    return urllib.parse.unquote(os.path.basename(urllib.parse.urlparse(url).path))


def size_of_file(url):
    b = basename(url)
    for rx, s in FILE_SIZE:
        if rx.match(b):
            return s
    return None


# ---------- load Shopify ----------
products = []
for p in PAGES:
    with open(p) as fh:
        products.extend(json.load(fh)["data"]["products"]["nodes"])
print(f"shopify products loaded: {len(products)}")

# ---------- load Square variation ids ----------
env = {}
for line in open("/Users/RedTailMarket/Projects/redtail-market/.env"):
    line = line.strip()
    if line and not line.startswith("#") and "=" in line:
        k, _, v = line.partition("=")
        env[k.strip()] = v.strip().strip("'\"")
H = {"Authorization": f"Bearer {env['SQUARE_ACCESS_TOKEN']}", "Square-Version": "2025-01-23"}


def sq_items():
    out, c, pg = [], None, 0
    while True:
        q = {"types": "ITEM"}
        if c:
            q["cursor"] = c
        rq = urllib.request.Request(
            "https://connect.squareup.com/v2/catalog/list?" + urllib.parse.urlencode(q), headers=H)
        with urllib.request.urlopen(rq, timeout=60) as r:
            d = json.loads(r.read())
        out.extend(d.get("objects", []))
        c = d.get("cursor")
        pg += 1
        if not c or pg > 40:
            break
    return out


def norm(s):
    return re.sub(r"[^a-z0-9]+", "", (s or "").lower().replace("&", "and"))


SQ_ALIAS = {"boooooberry": "booooberry"}  # Square 'BOooOo...Berry' vs Shopify 'BOoOoo...Berry'
square = {}
for it in sq_items():
    d = it.get("item_data", {})
    nm = d.get("name") or ""
    size = next((k for k, v in SQUARE_ITEM.items() if v == nm), None)
    if not size:
        continue
    for v in d.get("variations", []):
        vd = v.get("item_variation_data", {}) or {}
        vn = vd.get("name") or ""
        if not vn or vn.lower() in ("regular", "variable"):
            continue
        k = norm(vn)
        square[(size, SQ_ALIAS.get(k, k))] = {"id": v["id"], "sku": vd.get("sku"), "name": vn}
print(f"square bumblin bee variations indexed: {len(square)}")

# ---------- build ----------
out, stats = [], {"sizes": 0, "with_img": 0, "sq_linked": 0, "no_img": 0}
unlinked = []
sq_keys_by_size = {}
for (sz, k) in square:
    sq_keys_by_size.setdefault(sz, []).append(k)

for p in products:
    variants = p.get("variants", {}).get("nodes", [])
    if not any(v["title"].lower() in VARIANT_SIZE for v in variants):
        continue  # accessories etc, not a scent
    media = [m["preview"]["image"]["url"] for m in p.get("media", {}).get("nodes", [])
             if m.get("preview", {}).get("image", {}).get("url")]
    real = [u for u in media if not PLACEHOLDER.search(basename(u))]
    by_size = {}
    for u in real:
        s = size_of_file(u)
        if s:
            by_size.setdefault(s, []).append(u)
    generic = [u for u in real if size_of_file(u) is None]

    scent = p["title"]
    nk = norm(scent)
    sizes = []
    for v in variants:
        sk = VARIANT_SIZE.get(v["title"].lower())
        if not sk:
            continue
        imgs = by_size.get(sk, []) + generic
        sq = square.get((sk, nk))
        if sq is None:
            cand = difflib.get_close_matches(nk, sq_keys_by_size.get(sk, []), n=1, cutoff=0.87)
            if cand:
                sq = square[(sk, cand[0])]
        if sq is None:
            unlinked.append(f"{scent} / {SIZE_LABEL[sk]}")
        stats["sizes"] += 1
        stats["with_img"] += 1 if imgs else 0
        stats["no_img"] += 0 if imgs else 1
        stats["sq_linked"] += 1 if sq else 0
        sizes.append({
            "size": sk, "label": SIZE_LABEL[sk], "price": v["price"],
            "squareVariationId": sq["id"] if sq else None,
            "sku": (sq or {}).get("sku"),
            "images": imgs[:4],
        })
    sizes.sort(key=lambda s: SIZE_ORDER.index(s["size"]))
    out.append({
        "scent": scent, "handle": p["handle"],
        "tags": [t for t in p.get("tags", [])],
        "notes": notes_of(p.get("descriptionHtml")),
        "description": body_of(p.get("descriptionHtml")),
        "sizes": sizes,
    })

out.sort(key=lambda x: x["scent"].lower())
print(f"\nscents: {len(out)}")
print(f"size rows: {stats['sizes']}  with image: {stats['with_img']}  "
      f"no image: {stats['no_img']}  linked to Square: {stats['sq_linked']}")
if unlinked:
    print(f"\nNOT linked to a Square variation ({len(unlinked)}):")
    for u in unlinked[:20]:
        print("   ", u)
    if len(unlinked) > 20:
        print(f"    … and {len(unlinked)-20} more")

ts = '''// GENERATED FILE — do not edit by hand.
// Source: Bumblin Bee Shopify store (content) + Square catalog (variation ids).
// Regenerate with the script in the project scratchpad.
//
// Shopify is the source for imagery, descriptions and scent tags.
// Square remains the source of truth for PRICE and STOCK at checkout — the
// prices below are Shopify's list prices, shown only until the Square catalog
// is wired in. Never treat them as authoritative.

export type BumblinSizeKey = "melt3oz" | "oz4" | "oz7" | "oz14" | "oz48";

export type BumblinSize = {
  size: BumblinSizeKey;
  label: string;
  price: string;
  /** Square variation id — the join key for live price and stock. */
  squareVariationId: string | null;
  sku: string | null;
  /** Shopify CDN urls, most size-appropriate first. May be empty. */
  images: string[];
};

export type BumblinScent = {
  scent: string;
  handle: string;
  tags: string[];
  /** Scent-note line, e.g. "Lavender, Violet, Cardamom, Powder & Wood". */
  notes: string;
  description: string;
  sizes: BumblinSize[];
};

/** Shopify CDN supports on-the-fly resizing via a width param. */
export function img(url: string, width: number): string {
  if (!url) return url;
  const u = new URL(url);
  u.searchParams.set("width", String(width));
  return u.toString();
}

export const bumblinScents: BumblinScent[] = ''' + json.dumps(out, indent=2, ensure_ascii=False) + ''';

export const scentTags: string[] = Array.from(
  new Set(bumblinScents.flatMap((s) => s.tags)),
).sort();

export function scentBySlug(handle: string): BumblinScent | undefined {
  return bumblinScents.find((s) => s.handle === handle);
}

/** Sizes that have at least one image — what we can responsibly show today. */
export function sellableSizes(s: BumblinScent): BumblinSize[] {
  return s.sizes.filter((v) => v.images.length > 0);
}
'''
with open(OUT, "w") as fh:
    fh.write(ts)
print(f"\nwrote {OUT} ({len(ts)/1024:.0f} KB)")
