/**
 * Session-scoped scent affinity.
 *
 * Every scent a shopper opens, and every filter chip they press, adds weight to
 * the tags involved. Recommendations then rank on the accumulated profile
 * instead of only the page you happen to be on — so if the fall suggestions do
 * not land and the next click is a Gourmand scent, the profile follows.
 *
 * Everything lives in this browser's sessionStorage. Nothing is sent anywhere,
 * and it is gone when the tab closes. Every access is wrapped: private windows
 * and blocked-storage settings throw on read, and must not take the page down.
 */
import { bumblinScents, scentTags, seasonTags, type BumblinScent } from "@/lib/bumblin-bee";

const KEY = "rtm.scent-affinity.v1";
const MAX = 24;

/** An explicit filter choice says more than an incidental page view. */
const VIEW_WEIGHT = 1;
const TAG_WEIGHT = 2.5;

type Store = {
  /** Scent handles, most recent first. */
  views: string[];
  /** Tags chosen explicitly via a filter chip, most recent first. */
  tags: string[];
};

const EMPTY: Store = { views: [], tags: [] };

function read(): Store {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Store>;
    return {
      views: Array.isArray(parsed.views) ? parsed.views.slice(0, MAX) : [],
      tags: Array.isArray(parsed.tags) ? parsed.tags.slice(0, MAX) : [],
    };
  } catch {
    return EMPTY;
  }
}

function write(next: Store): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* private mode or storage disabled — affinity simply does not persist */
  }
}

function unshiftUnique(list: string[], value: string): string[] {
  return [value, ...list.filter((v) => v !== value)].slice(0, MAX);
}

export function recordView(handle: string): void {
  const s = read();
  write({ ...s, views: unshiftUnique(s.views, handle) });
}

export function recordTag(tag: string): void {
  const s = read();
  write({ ...s, tags: unshiftUnique(s.tags, tag) });
}

export function viewedHandles(): string[] {
  return read().views;
}

/** Recency-decayed weight per tag across everything seen this session. */
export function tagWeights(): Map<string, number> {
  const { views, tags } = read();
  const w = new Map<string, number>();
  const add = (tag: string, amount: number) => w.set(tag, (w.get(tag) ?? 0) + amount);

  views.forEach((handle, i) => {
    const scent = bumblinScents.find((s) => s.handle === handle);
    if (!scent) return;
    const decay = 1 / (1 + i * 0.5); // the most recent view counts most
    for (const t of scent.tags) {
      if (t !== "best seller") add(t, VIEW_WEIGHT * decay);
    }
  });

  tags.forEach((t, i) => add(t, TAG_WEIGHT * (1 / (1 + i * 0.5))));
  return w;
}

/** How many scents carry each tag — used to prefer the more specific one. */
const tagRarity = new Map<string, number>(
  scentTags.map((t) => [t, bumblinScents.filter((s) => s.tags.includes(t)).length]),
);

const isSeason = (t: string) => (seasonTags as readonly string[]).includes(t);

/**
 * The tag carrying the most accumulated weight.
 *
 * Ties are broken the same way `definingTag` breaks them — season first, then
 * the rarer tag — so the heading does not flip between the server render and
 * the personalised one when weights happen to be level.
 */
export function dominantTag(): string | null {
  const w = tagWeights();
  if (!w.size) return null;
  return (
    [...w.entries()]
      .sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        if (isSeason(a[0]) !== isSeason(b[0])) return isSeason(a[0]) ? -1 : 1;
        return (tagRarity.get(a[0]) ?? 0) - (tagRarity.get(b[0]) ?? 0);
      })[0]?.[0] ?? null
  );
}

/** How much signal we have. Below 2 views the profile is not worth trusting. */
export function signalStrength(): number {
  return read().views.length + read().tags.length;
}

/**
 * Scents ranked against the session profile.
 *
 * Scores are divided by sqrt(tag count) so a scent tagged with everything does
 * not automatically win, and ties break on real Square sales.
 * Returns [] when there is not enough signal, so callers can fall back.
 */
export function recommend(excludeHandle: string | null, limit = 4): BumblinScent[] {
  const w = tagWeights();
  if (!w.size) return [];
  const seen = new Set(read().views);

  return bumblinScents
    .filter((s) => s.handle !== excludeHandle && !seen.has(s.handle))
    .map((s) => {
      const raw = s.tags.reduce((sum, t) => sum + (w.get(t) ?? 0), 0);
      return { s, score: raw / Math.sqrt(Math.max(s.tags.length, 1)) };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.s.unitsSold - a.s.unitsSold)
    .slice(0, limit)
    .map((x) => x.s);
}
