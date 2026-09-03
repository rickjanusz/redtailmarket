#!/usr/bin/env python3
"""One-shot: build src/lib/makers.ts from the old Square Online site's copy.

The old site is being retired, so this runs once to lift its maker write-ups and
photos into the new codebase. After that `src/lib/makers.ts` is HAND-MAINTAINED —
do not re-run this expecting it to pick up edits.

Source: window.__BOOTSTRAP_STATE__ on https://www.redtailmarket.com/makers
"""
import json
import os
import re

S = ("/private/tmp/claude-502/-Users-RedTailMarket-Projects-redtail-market/"
     "b538cba8-fd9a-4916-a100-799b957d5d3f")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "src", "lib", "makers.ts")

# Maker -> the Square ITEM(s) their products sit under.
# Not 1:1: several makers share the "Artisan Jewelry" item, and Oak Hill Studio
# and Hearthside are split across items by season.
SQUARE_ITEMS = {
    "Daybreak Crafts": ["Daybreak Crafts"],
    "Melissa Z. Monroe Pottery": ["Melissa Monroe"],
    "Maryanne's Memories": ["Maryanne’s Memories"],
    "Papernickety": ["PAPERnickety"],
    "Oak Hill Studio": ["Oak Hill Studio, Misc", "Oak Hill Studio, Christmas",
                        "Oak Hill Studio, Fall", "Oak Hill Studio, Spring/Love",
                        "Oak Hill Studio, Summer", "Oak Hill Studio, Misc 2"],
    "Earth Rugs": ["Earth Rugs", "Earth Rug Coaster"],
    "Dr. Squatch": ["Dr. Squatch"],
    "Kathy's Blooming Creations": ["Kathy's Bloomin' Creations"],
    "Vintage Addiction": ["Vintage Addiction"],
    "Marchello Art": ["Artisan Jewelry"],
    "Twisted Wares": ["Twisted Wares"],
    "Vickie Jean's Creations": ["Vicky Jean's"],
    "Cheeky Things Designs": ["Cheeky Things Designs"],
    "K&K Interiors": ["K&K"],
    "Irvin's Tinware": ["Irvins Country Tinware"],
    "Farmer Dan's Honey": ["Farmer Dan’s Honey"],
    "The Hearthside Collection": ["Hearthside Collection", "Hearthside Collection 2",
                                  "Hearthside Collection Fall", "Hearthside Candles"],
    "The Homestead Collection": ["Homestead Collection"],
    "Paine Products": ["Paine's"],
    "Down on the Farm": ["Down on the Farm"],
    "Bumblin Bee Candle": ["Bumblin Bee, 14oz Mason Jar Candle",
                           "Bumblin Bee, 7oz Mason Jar Candle",
                           "Bumblin Bee, 4oz Mason Jar Candle",
                           "Bumblin Bee, 3oz Wax Melt",
                           "Bumblin Bee, 48oz Apothecary Jar Candle",
                           "Bumblin Bee Accessories"],
}
# Hometowns the blurb never states — supplied by the owner. These win over
# whatever the text parser finds.
HOMETOWN_OVERRIDE = {
    "Daybreak Crafts": "New Lenox, Illinois",   # owner, 2026-09-03
    # Region only — no city known (owner, 2026-09-03). Kept deliberately vague
    # rather than inventing a town.
    "Down on the Farm": "Southern Illinois",
    # Owner said "Ontario, CA" (2026-09-03), read as Ontario, California — it is
    # consistent with their confirming this maker as US-made. If they meant
    # Ontario, Canada, the "Made in the USA" badge below must come off too.
    "Vintage Addiction": "Ontario, California",
    "Irvin's Tinware": "Mount Pleasant Mills, Pennsylvania",  # owner, 2026-09-03
}

# Country-of-origin, per maker. "usa" = made here. "usa-finished" = produced
# abroad but finished here, which must NOT be called "Made in the USA" (an
# FTC-regulated claim needing all-or-virtually-all domestic content).
# None = not established yet; the badge is simply omitted.
ORIGIN_OVERRIDE = {
    # jute grown and hand-woven in Bangladesh, hand-painted at the Arkansas HQ
    # and in studios across the US (owner, 2026-09-01)
    "Earth Rugs": "usa-finished",
    # label reads "Hand-poured in Illinois"
    "Bumblin Bee Candle": "usa",
    # These five state no location in their own copy, so the automatic rule
    # cannot infer one. Confirmed US-made by the owner (2026-09-03).
    "Daybreak Crafts": "usa",
    "Down on the Farm": "usa",
    "Irvin's Tinware": "usa",
    "Twisted Wares": "usa",
    "Vintage Addiction": "usa",
}

# Square items holding more than one maker — a maker page must NOT claim all of it.
SHARED_ITEMS = {"Artisan Jewelry"}
# Our own house brand rather than an independent maker.
HOUSE = {"Bumblin Bee Candle"}

# Places show up in several shapes: "from Mokena, Illinois", "in Lowell Indiana"
# (no comma), "from Chicago" (bare city). Try richest form first.
STATES = (r"Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|"
          r"Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|"
          r"Louisiana|Maine|ME|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|"
          r"Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|"
          r"New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|"
          r"Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|"
          r"Virginia|Washington|West Virginia|Wisconsin|Wyoming")
CITY = r"[A-Z][A-Za-z.\-]+(?:\s+[A-Z][A-Za-z.\-]+){0,2}"
LEAD = r"(?:from|out of|based (?:in|out of)|hailing from|located in|residing(?: in)?|in)\s+"
TOWN_PATTERNS = [
    re.compile(LEAD + rf"({CITY},\s*(?:{STATES}))"),   # "Mokena, Illinois"
    re.compile(LEAD + rf"({CITY}\s+(?:{STATES}))"),    # "Lowell Indiana"
    re.compile(LEAD + rf"((?:{STATES}))\b"),           # "Michigan"
    re.compile(LEAD + r"(Chicago|Frankfort)\b"),        # bare, well-known cities
]


def find_town(text):
    for rx in TOWN_PATTERNS:
        m = rx.search(text)
        if m:
            return " ".join(m.group(1).split())
    return None


def slugify(s):
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", s.lower())).strip("-")


makers = json.load(open(f"{S}/site_makers.json"))
rows, recruit = [], None
for m in makers:
    name = m["name"].strip()
    if not name:
        continue
    if "Next Maker" in name:
        recruit = {"title": name, "body": m["body"],
                   "photo": slugify(name) + ".jpg"}
        continue
    town = HOMETOWN_OVERRIDE.get(name) or find_town(m["body"])
    rows.append({
        "slug": slugify(name),
        "name": name,
        "hometown": town,
        "blurb": m["body"],
        "photo": slugify(name) + ".jpg",
        "squareItems": SQUARE_ITEMS.get(name, []),
        # Default: a maker naming a US location in their own copy is US-made.
        # Anything unestablished stays None rather than being guessed at.
        "origin": ORIGIN_OVERRIDE.get(name, "usa" if town else None),
        "shared": any(i in SHARED_ITEMS for i in SQUARE_ITEMS.get(name, [])),
        "house": name in HOUSE,
    })

rows.sort(key=lambda r: r["name"].lower())
imports, entries = [], []
for r in rows:
    var = "img" + re.sub(r"[^A-Za-z0-9]", "", r["name"])
    imports.append(f'import {var} from "@/assets/makers/{r["photo"]}";')
    entries.append(
        "  {\n"
        f'    slug: {json.dumps(r["slug"])},\n'
        f'    name: {json.dumps(r["name"])},\n'
        f'    hometown: {json.dumps(r["hometown"])},\n'
        f'    blurb: {json.dumps(r["blurb"])},\n'
        f"    photo: {var},\n"
        f'    origin: {json.dumps(r["origin"])},\n'
        f'    squareItems: {json.dumps(r["squareItems"])},\n'
        f'    shared: {"true" if r["shared"] else "false"},\n'
        f'    house: {"true" if r["house"] else "false"},\n'
        "  },"
    )

recruit_var = "imgRecruit"
imports.append(f'import {recruit_var} from "@/assets/makers/{recruit["photo"]}";')

ts = f'''/**
 * Maker profiles.
 *
 * Lifted once from the old Square Online site (its /makers page) when that site
 * was retired — see scripts/build-makers.py. **This file is now hand-maintained.**
 * Re-running the script would overwrite edits.
 *
 * `squareItems` maps a maker to the Square ITEM(s) their products sit under. It
 * is deliberately NOT one-to-one:
 *   - several makers share one item (Artisan Jewelry) — those carry `shared`,
 *     so a maker page must not claim the whole item's products as theirs;
 *   - one maker can span several items (Oak Hill Studio is split by season,
 *     Hearthside across four).
 */
{chr(10).join(imports)}

export type Maker = {{
  slug: string;
  name: string;
  /** Parsed from the blurb; null when it does not state one. */
  hometown: string | null;
  blurb: string;
  photo: string;
  /**
   * "usa" — made here, safe to badge "Made in the USA".
   * "usa-finished" — produced abroad, finished here. Must NOT be badged
   *   "Made in the USA": that is an FTC-regulated claim requiring all or
   *   virtually all domestic content.
   * null — not established; show nothing.
   */
  origin: "usa" | "usa-finished" | null;
  /** Square ITEM names holding this maker's products. May be empty. */
  squareItems: string[];
  /** True when a listed item also holds OTHER makers' products. */
  shared: boolean;
  /** Our own brand rather than an independent maker. */
  house: boolean;
}};

export const makers: Maker[] = [
{chr(10).join(entries)}
];

/**
 * Badge text for a maker's origin, or null to show nothing.
 *
 * "usa-finished" deliberately does NOT say "Made in the USA" — that is an
 * FTC-regulated claim requiring all or virtually all domestic content, which
 * goods produced abroad and finished here do not meet.
 */
export function originLabel(m: Maker): string | null {{
  if (m.origin === "usa") return "Made in the USA";
  if (m.origin === "usa-finished") return "Hand-finished in the USA";
  return null;
}}

export function makerBySlug(slug: string): Maker | undefined {{
  return makers.find((m) => m.slug === slug);
}}

/** Independent makers only — excludes our house brand. */
export const independentMakers: Maker[] = makers.filter((m) => !m.house);

/** Become-a-vendor callout, also lifted from the old site. */
export const becomeAMaker = {{
  title: {json.dumps(recruit["title"])},
  body: {json.dumps(recruit["body"])},
  photo: {recruit_var},
}};
'''

with open(OUT, "w") as fh:
    fh.write(ts)
print(f"wrote {OUT}")
print(f"makers: {len(rows)}  (house: {sum(1 for r in rows if r['house'])}, "
      f"shared-item: {sum(1 for r in rows if r['shared'])})")
print(f"with a hometown parsed: {sum(1 for r in rows if r['hometown'])}/{len(rows)}")
for r in rows:
    print(f"   {r['name']:<28} {str(r['hometown'] or '-'):<24} "
          f"{len(r['squareItems'])} square item(s)")
