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
import {
  bumblinScents,
  noteWeight,
  scentTags,
  seasonTags,
  type BumblinScent,
} from "@/lib/bumblin-bee";

const KEY = "rtm.scent-affinity.v1";
const MAX = 24;

/** An explicit filter choice says more than an incidental page view. */
const VIEW_WEIGHT = 1;
const TAG_WEIGHT = 2.5;
const NOTE_WEIGHT = 3;

type Store = {
  /** Scent handles, most recent first. */
  views: string[];
  /** Tags chosen explicitly via a filter chip, most recent first. */
  tags: string[];
  /** Fragrance notes clicked explicitly, most recent first. */
  notes: string[];
};

const EMPTY: Store = { views: [], tags: [], notes: [] };

function read(): Store {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Store>;
    return {
      views: Array.isArray(parsed.views) ? parsed.views.slice(0, MAX) : [],
      tags: Array.isArray(parsed.tags) ? parsed.tags.slice(0, MAX) : [],
      notes: Array.isArray(parsed.notes) ? parsed.notes.slice(0, MAX) : [],
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

/** A shopper clicking a note ("show me more jasmine") is the strongest signal. */
export function recordNote(note: string): void {
  const s = read();
  write({ ...s, notes: unshiftUnique(s.notes, note) });
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

/**
 * Accumulated interest per fragrance note.
 *
 * Notes discriminate far better than the six broad tags — "Woody / Evergreen"
 * covers 56 of 78 scents, whereas "lily of the valley" covers 3 — so each note
 * is scaled by its rarity as well as by recency.
 */
export function noteWeights(): Map<string, number> {
  const { views, notes } = read();
  const w = new Map<string, number>();
  const add = (n: string, amount: number) =>
    w.set(n, (w.get(n) ?? 0) + amount * noteWeight(n));

  views.forEach((handle, i) => {
    const scent = bumblinScents.find((s) => s.handle === handle);
    if (!scent) return;
    const decay = 1 / (1 + i * 0.5);
    for (const n of scent.noteList) add(n, VIEW_WEIGHT * decay);
  });
  notes.forEach((n, i) => add(n, NOTE_WEIGHT * (1 / (1 + i * 0.5))));
  return w;
}

/**
 * The note driving the session, if one clearly is — used for headings like
 * "More scents with Jasmine". Requires enough other scents to actually show,
 * so a one-off note such as "frasier fir" (1 scent) never becomes a heading.
 */
export function dominantNote(minOthers = 3): string | null {
  const w = noteWeights();
  if (!w.size) return null;
  for (const [note] of [...w.entries()].sort((a, b) => b[1] - a[1])) {
    if (bumblinScents.filter((s) => s.noteList.includes(note)).length > minOthers) {
      return note;
    }
  }
  return null;
}

/** How much signal we have. Below 2 views the profile is not worth trusting. */
export function signalStrength(): number {
  const s = read();
  return s.views.length + s.tags.length + s.notes.length;
}

/**
 * Scents ranked against the session profile.
 *
 * Scores are divided by sqrt(tag count) so a scent tagged with everything does
 * not automatically win, and ties break on real Square sales.
 * Returns [] when there is not enough signal, so callers can fall back.
 */
export function recommend(excludeHandle: string | null, limit = 4): BumblinScent[] {
  const notes = noteWeights();
  const tags = tagWeights();
  if (!notes.size && !tags.size) return [];
  const seen = new Set(read().views);

  return bumblinScents
    .filter((s) => s.handle !== excludeHandle && !seen.has(s.handle))
    .map((s) => {
      // Notes lead: they say what the shopper actually likes. Tags stay as a
      // weaker backstop for scents whose notes we extracted little from.
      const noteScore =
        s.noteList.reduce((sum, n) => sum + (notes.get(n) ?? 0), 0) /
        Math.sqrt(Math.max(s.noteList.length, 1));
      const tagScore =
        s.tags.reduce((sum, t) => sum + (tags.get(t) ?? 0), 0) /
        Math.sqrt(Math.max(s.tags.length, 1));
      return { s, score: noteScore * 2 + tagScore };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.s.unitsSold - a.s.unitsSold)
    .slice(0, limit)
    .map((x) => x.s);
}
