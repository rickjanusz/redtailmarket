import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { bumblinScents, scentTags } from "@/lib/bumblin-bee";

/**
 * Local tag editor.
 *
 * The Shopify tags are broadly wrong — `winter` sits on 62% of scents and
 * `Woody / Evergreen` on 72% — which makes every tag-driven filter and
 * recommendation weak. This page exists to fix them by hand.
 *
 * Edits are saved to `data/tag-overrides.json`, which the generator applies on
 * top of the Shopify tags. Shopify itself is never written to.
 */

type Overrides = Record<string, string[]>;

const OVERRIDES_PATH = "data/tag-overrides.json";

const loadOverrides = createServerFn({ method: "GET" }).handler(
  async (): Promise<Overrides> => {
    if (!import.meta.env.DEV) return {};
    const { readFile } = await import("node:fs/promises");
    try {
      return JSON.parse(await readFile(OVERRIDES_PATH, "utf8")) as Overrides;
    } catch {
      return {};
    }
  },
);

const saveOverrides = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as Overrides)
  .handler(async ({ data }): Promise<{ ok: boolean; message: string }> => {
    // Writing to the repo is a local-development affordance only. It must never
    // be reachable from a deployed build, which has no filesystem anyway.
    if (!import.meta.env.DEV) {
      return { ok: false, message: "Editing is only available in local dev." };
    }
    const { mkdir, writeFile } = await import("node:fs/promises");
    await mkdir("data", { recursive: true });
    await writeFile(OVERRIDES_PATH, JSON.stringify(data, null, 2) + "\n", "utf8");
    return {
      ok: true,
      message: `Saved ${Object.keys(data).length} edited scents to ${OVERRIDES_PATH}. Re-run scripts/generate-bumblin-bee.py to apply.`,
    };
  });

export const Route = createFileRoute("/admin/tags")({
  loader: () => loadOverrides(),
  head: () => ({ meta: [{ title: "Tag editor | Redtail Market" }] }),
  component: TagEditor,
});

const SEASONS = ["spring", "summer", "fall", "winter"];

function TagEditor() {
  const saved = Route.useLoaderData();

  // Start from the generated tags, then layer any saved overrides on top.
  const initial = useMemo(() => {
    const m: Record<string, Set<string>> = {};
    for (const s of bumblinScents) {
      m[s.handle] = new Set(saved[s.handle] ?? s.tags);
    }
    return m;
  }, [saved]);

  const [state, setState] = useState<Record<string, Set<string>>>(initial);
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [mode, setMode] = useState<"has" | "lacks">("has");
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const original = useMemo(() => {
    const m: Record<string, Set<string>> = {};
    for (const s of bumblinScents) m[s.handle] = new Set(s.tags);
    return m;
  }, []);

  const toggle = (handle: string, tag: string) => {
    setState((prev) => {
      const next = new Set(prev[handle] ?? []);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return { ...prev, [handle]: next };
    });
    setStatus(null);
  };

  const changed = useMemo(
    () =>
      bumblinScents.filter((s) => {
        const a = [...(state[s.handle] ?? [])].sort().join("|");
        const b = [...(original[s.handle] ?? [])].sort().join("|");
        return a !== b;
      }),
    [state, original],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const t of scentTags) c[t] = 0;
    for (const s of bumblinScents) {
      for (const t of state[s.handle] ?? []) c[t] = (c[t] ?? 0) + 1;
    }
    return c;
  }, [state]);

  const dirtyHandles = useMemo(
    () => new Set(changed.map((c) => c.handle)),
    [changed],
  );

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return bumblinScents.filter((s) => {
      if (q) {
        const hit =
          s.scent.toLowerCase().includes(q) ||
          s.notes.toLowerCase().includes(q) ||
          s.noteList.some((n) => n.includes(q));
        if (!hit) return false;
      }
      if (!tagFilter) return true;
      // Rows you have already edited stay put even once they stop matching, so
      // unticking a tag does not make the row vanish out from under the cursor.
      if (dirtyHandles.has(s.handle)) return true;
      const has = state[s.handle]?.has(tagFilter) ?? false;
      return mode === "has" ? has : !has;
    });
  }, [query, tagFilter, mode, state, dirtyHandles]);

  async function onSave() {
    setBusy(true);
    setStatus(null);
    try {
      // Persist every scent, not just the edited ones, so the file is a complete
      // snapshot and a later Shopify change cannot silently reintroduce a tag.
      const payload: Overrides = {};
      for (const s of bumblinScents) {
        payload[s.handle] = [...(state[s.handle] ?? [])].sort();
      }
      const res = await saveOverrides({ data: payload });
      setStatus(res.message);
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Save failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-[110rem] px-5 py-14">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
            Local tools
          </p>
          <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">Scent tag editor</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Tick the tags that are actually true for each scent. Saves to{" "}
            <code className="text-accent">data/tag-overrides.json</code>, which the
            generator layers over the Shopify tags — your Shopify store is never
            written to.
          </p>

          {/* Live counts: watch the over-applied tags come down as you fix them */}
          <div className="mt-8 flex flex-wrap gap-2 border-y border-border py-4">
            {scentTags.map((t) => {
              const n = counts[t] ?? 0;
              const pct = Math.round((100 * n) / bumblinScents.length);
              const heavy = pct >= 50;
              return (
                <span
                  key={t}
                  title={heavy ? "On half the catalogue — barely discriminates" : ""}
                  className={`border px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.18em] ${
                    heavy
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {t} <span className="opacity-60">{n}</span>{" "}
                  <span className="opacity-40">{pct}%</span>
                </span>
              );
            })}
          </div>

          {/* Filter to one tag at a time — the practical way to work down an
              over-applied tag like winter (62% of the catalogue). */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground/70">
              Filter
            </span>
            <button
              type="button"
              onClick={() => setTagFilter(null)}
              className={`border px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.18em] transition-colors ${
                tagFilter === null
                  ? "border-accent text-accent"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              All scents
            </button>
            {scentTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTagFilter(t === tagFilter ? null : t)}
                className={`border px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.18em] transition-colors ${
                  t === tagFilter
                    ? "border-accent text-accent"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {t} <span className="opacity-50">{counts[t] ?? 0}</span>
              </button>
            ))}
            {tagFilter ? (
              <div className="ml-2 flex items-center gap-1">
                {(["has", "lacks"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    className={`border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] transition-colors ${
                      mode === m
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {m === "has" ? `has ${tagFilter}` : `missing ${tagFilter}`}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter scents by name or note…"
              className="min-w-[16rem] flex-1 border border-border bg-card px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            />
            <span className="text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
              {rows.length} shown · {changed.length} changed
            </span>
            <button
              type="button"
              onClick={onSave}
              disabled={busy}
              className="bg-primary px-7 py-3 text-[0.75rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ember disabled:opacity-50"
            >
              {busy ? "Saving…" : "Save overrides"}
            </button>
          </div>
          {status ? (
            <p className="mt-3 text-sm text-accent">{status}</p>
          ) : null}

          {/* Grid */}
          <div className="mt-8 max-h-[72vh] overflow-auto border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {/* Corner cell pins on both axes, so it must outrank both. */}
                  <th className="sticky left-0 top-0 z-30 border-b border-border bg-card px-4 py-3 text-left text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Scent
                  </th>
                  {scentTags.map((t) => {
                    const n = counts[t] ?? 0;
                    return (
                      <th
                        key={t}
                        className={`sticky top-0 z-20 border-b border-border bg-card px-2 py-3 text-center text-[0.6rem] uppercase tracking-[0.12em] ${
                          SEASONS.includes(t) ? "text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {t.replace(" / ", "/")}
                        <span className="mt-1 block text-[0.6rem] font-normal opacity-50">
                          {n}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((s) => {
                  const dirty = changed.some((c) => c.handle === s.handle);
                  return (
                    <tr
                      key={s.handle}
                      className={`border-t border-border ${dirty ? "bg-secondary/40" : ""}`}
                    >
                      <td
                        className={`sticky left-0 z-10 px-4 py-2 ${
                          dirty ? "bg-[oklch(0.24_0.012_42)]" : "bg-background"
                        }`}
                      >
                        <span className="block text-foreground">{s.scent}</span>
                        <span className="block text-[0.66rem] text-muted-foreground">
                          {s.notes || s.noteList.slice(0, 4).join(", ")}
                        </span>
                      </td>
                      {scentTags.map((t) => (
                        <td key={t} className="px-2 py-2 text-center">
                          <input
                            type="checkbox"
                            aria-label={`${s.scent}: ${t}`}
                            checked={state[s.handle]?.has(t) ?? false}
                            onChange={() => toggle(s.handle, t)}
                            className="h-4 w-4 accent-[var(--accent)]"
                          />
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {!rows.length ? (
            <p className="mt-10 text-center text-sm text-muted-foreground">
              No scents match that filter.
            </p>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
