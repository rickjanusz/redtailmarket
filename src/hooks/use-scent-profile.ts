import { useEffect, useState } from "react";

import type { BumblinScent } from "@/lib/bumblin-bee";
import { dominantTag, recommend, recordView, signalStrength } from "@/lib/scent-affinity";

export type ScentProfile = {
  /** What to render. Falls back to `fallback` until the profile is worth trusting. */
  scents: BumblinScent[];
  /** The tag these picks represent, for the heading. */
  tag: string | null;
  /** `tag`, capitalised for display. Season tags are lower case in Shopify. */
  tagLabel: string;
  /** True once picks come from the session profile rather than the fallback. */
  personalised: boolean;
};

export type UseScentProfileOptions = {
  /** Record this scent handle as viewed. Omit on pages that are not a product. */
  view?: string;
  /** Handle to keep out of the results — usually the page you are on. */
  exclude?: string | null;
  /** Server-rendered picks. Also the pre-hydration render, so SSR stays stable. */
  fallback: BumblinScent[];
  /** Tag the fallback represents. */
  fallbackTag?: string | null;
  limit?: number;
  /** Interactions required before personalising. Below this the profile is noise. */
  minSignal?: number;
};

/**
 * Session-profile-aware recommendations, shared by every page that suggests
 * scents.
 *
 * Renders `fallback` on the server and on the first client paint — identical
 * markup, so there is no hydration mismatch — then swaps in profile-driven
 * picks once the shopper has given us enough signal. Storage access is
 * sessionStorage-backed and fails soft, so a private window simply never
 * personalises rather than erroring.
 */
export function useScentProfile({
  view,
  exclude = null,
  fallback,
  fallbackTag = null,
  limit = 4,
  minSignal = 3,
}: UseScentProfileOptions): ScentProfile {
  const [scents, setScents] = useState<BumblinScent[]>(fallback);
  const [tag, setTag] = useState<string | null>(fallbackTag);
  const [personalised, setPersonalised] = useState(false);

  useEffect(() => {
    if (view) recordView(view);

    if (signalStrength() < minSignal) {
      setScents(fallback);
      setTag(fallbackTag);
      setPersonalised(false);
      return;
    }

    const picks = recommend(exclude, limit);
    // Two is the floor worth showing; below that the fallback is a better grid.
    if (picks.length >= 2) {
      setScents(picks);
      setTag(dominantTag() ?? fallbackTag);
      setPersonalised(true);
    } else {
      setScents(fallback);
      setTag(fallbackTag);
      setPersonalised(false);
    }
    // `fallback` is a fresh array each render, so keying on the identifiers
    // keeps this from looping.
  }, [view, exclude, fallbackTag, limit, minSignal]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    scents,
    tag,
    tagLabel: tag ? tag.charAt(0).toUpperCase() + tag.slice(1) : "",
    personalised,
  };
}
