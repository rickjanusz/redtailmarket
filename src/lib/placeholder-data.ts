export type PlaceholderMaker = {
  slug: string;
  name: string;
  craft: string;
  hometown: string;
  bio: string;
};

export type PlaceholderProduct = {
  slug: string;
  name: string;
  price: string;
  makerSlug: string;
  category: string;
};

export const categories = [
  "Candles & Melts",
  "Reclaimed Wood Signs",
  "Reclaimed Wood Boards",
  "Primitive Decor",
  "Soft Goods",
  "Pottery",
] as const;

export const makers: PlaceholderMaker[] = [
  { slug: "maker-one", name: "Maker Name", craft: "Hand-poured candles", hometown: "Frankfort, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-two", name: "Maker Name", craft: "Reclaimed wood signs", hometown: "Mokena, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-three", name: "Maker Name", craft: "Cutting & charcuterie boards", hometown: "Joliet, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-four", name: "Maker Name", craft: "Wheel-thrown pottery", hometown: "New Lenox, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-five", name: "Maker Name", craft: "Primitive decor", hometown: "Manhattan, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-six", name: "Maker Name", craft: "Stitched soft goods", hometown: "Tinley Park, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-seven", name: "Maker Name", craft: "Salvaged tin & metalwork", hometown: "Peotone, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-eight", name: "Maker Name", craft: "Barn wood furniture", hometown: "Monee, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-nine", name: "Maker Name", craft: "Hand-dipped soaps", hometown: "Orland Park, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-ten", name: "Maker Name", craft: "Vintage-style textiles", hometown: "Lockport, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-eleven", name: "Maker Name", craft: "Wreaths & dried florals", hometown: "Homer Glen, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
  { slug: "maker-twelve", name: "Maker Name", craft: "Small-batch pantry goods", hometown: "Frankfort, IL", bio: "Maker bio placeholder — a few sentences about this artisan, their workshop and the materials they work with." },
];

export const products: PlaceholderProduct[] = Array.from({ length: 12 }).map((_, i) => ({
  slug: `product-${i + 1}`,
  name: "Product Name",
  price: "$00.00",
  makerSlug: makers[i % makers.length]!.slug,
  category: categories[i % categories.length]!,
}));

export function getMaker(slug: string) {
  return makers.find((m) => m.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
