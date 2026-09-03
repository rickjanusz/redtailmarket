/**
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
import imgBumblinBeeCandle from "@/assets/makers/bumblin-bee-candle.jpg";
import imgCheekyThingsDesigns from "@/assets/makers/cheeky-things-designs.jpg";
import imgDaybreakCrafts from "@/assets/makers/daybreak-crafts.jpg";
import imgDownontheFarm from "@/assets/makers/down-on-the-farm.jpg";
import imgDrSquatch from "@/assets/makers/dr-squatch.jpg";
import imgEarthRugs from "@/assets/makers/earth-rugs.jpg";
import imgFarmerDansHoney from "@/assets/makers/farmer-dan-s-honey.jpg";
import imgIrvinsTinware from "@/assets/makers/irvin-s-tinware.jpg";
import imgKKInteriors from "@/assets/makers/k-k-interiors.jpg";
import imgKathysBloomingCreations from "@/assets/makers/kathy-s-blooming-creations.jpg";
import imgMarchelloArt from "@/assets/makers/marchello-art.jpg";
import imgMaryannesMemories from "@/assets/makers/maryanne-s-memories.jpg";
import imgMelissaZMonroePottery from "@/assets/makers/melissa-z-monroe-pottery.jpg";
import imgOakHillStudio from "@/assets/makers/oak-hill-studio.jpg";
import imgPaineProducts from "@/assets/makers/paine-products.jpg";
import imgPapernickety from "@/assets/makers/papernickety.jpg";
import imgTheHearthsideCollection from "@/assets/makers/the-hearthside-collection.jpg";
import imgTheHomesteadCollection from "@/assets/makers/the-homestead-collection.jpg";
import imgTwistedWares from "@/assets/makers/twisted-wares.jpg";
import imgVickieJeansCreations from "@/assets/makers/vickie-jean-s-creations.jpg";
import imgVintageAddiction from "@/assets/makers/vintage-addiction.jpg";
import imgRecruit from "@/assets/makers/are-you-our-next-maker.jpg";

export type Maker = {
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
};

export const makers: Maker[] = [
  {
    slug: "bumblin-bee-candle",
    name: "Bumblin Bee Candle",
    hometown: null,
    blurb: "At Redtail Market, we pride ourselves on using only the finest ingredients for our Bumblin Bee Candles. Our fragrant wax goods are crafted with 100% soy waxes and premium fragrance oils made from essential oils and other non-toxic components. We source all of our ingredients from reputable American farms and oil houses because we believe in quality above all else. Our candles are paraffin-free, phthalate-free, and completely safe for both your home environment and personal health. We wouldn't sell a candle that we wouldn't burn in our own homes.",
    photo: imgBumblinBeeCandle,
    origin: "usa",
    squareItems: ["Bumblin Bee, 14oz Mason Jar Candle", "Bumblin Bee, 7oz Mason Jar Candle", "Bumblin Bee, 4oz Mason Jar Candle", "Bumblin Bee, 3oz Wax Melt", "Bumblin Bee, 48oz Apothecary Jar Candle", "Bumblin Bee Accessories"],
    shared: false,
    house: true,
  },
  {
    slug: "cheeky-things-designs",
    name: "Cheeky Things Designs",
    hometown: "Chicago",
    blurb: "Redtail Market proudly presents Cheeky Things Designs, the brainchild of face painter Randi Nacaratto from Chicago. With her exceptional talent, she has transformed ordinary rocks into fascinating works of art featuring whimsical and religious themes. Don't miss out on these playful creations that pay homage to TV shows, cartoons, and classic sayings.",
    photo: imgCheekyThingsDesigns,
    origin: "usa",
    squareItems: ["Cheeky Things Designs"],
    shared: false,
    house: false,
  },
  {
    slug: "daybreak-crafts",
    name: "Daybreak Crafts",
    hometown: null,
    blurb: "Explore the stunning 3D paper shadowboxes created by Terry Yaconi of Daybreak Crafts. With intricate layers meticulously assembled, these pieces bring depth and enchantment to every home. The perfect gift for every season, holiday, or special occasion. She always keeps us stocked with a wide array of designs to choose from. Terry's craftsmanship and dedication knows no bounds.",
    photo: imgDaybreakCrafts,
    origin: "usa",
    squareItems: ["Daybreak Crafts"],
    shared: false,
    house: false,
  },
  {
    slug: "down-on-the-farm",
    name: "Down on the Farm",
    hometown: null,
    blurb: "Indulge in the rustic charm of this family's handcrafted art. Each piece is meticulously cut and painted by the family residing Down on the Farm in scenic southern Indiana. Their unique artistic creations are crafted using scrap lumber from homestead projects and reclaimed wood from defunct buildings across the farm. If you appreciate true craftsmanship with an artists' touch, this is for you.",
    photo: imgDownontheFarm,
    origin: "usa",
    squareItems: ["Down on the Farm"],
    shared: false,
    house: false,
  },
  {
    slug: "dr-squatch",
    name: "Dr. Squatch",
    hometown: "Marina Del Rey, California",
    blurb: "Redtail Market offers a carefully curated selection of Dr. Squatch natural products. With a commitment to Mother Nature, all the Dr's products are made with 98-100% natural ingredients. They steer clear of harmful substances often found in generic personal care items and are formulated specifically for men. And\u2013 the best part of all is...every Dr. Squatch product is made right in Marina Del Rey, California.",
    photo: imgDrSquatch,
    origin: "usa",
    squareItems: ["Dr. Squatch"],
    shared: false,
    house: false,
  },
  {
    slug: "earth-rugs",
    name: "Earth Rugs",
    hometown: "Arkansas",
    blurb: "Discover our extensive collection of Earth Rugs, meticulously crafted from organic jute grown in the fertile delta soil of Bangladesh. The natural jute fiber is carefully woven into rugs or transformed into yarn, which is then dyed in vibrant hues and sun-dried to achieve an authentic touch. These rugs are exceptionally durable, eco-friendly, and sustainably produced, leaving minimal carbon footprints. Each rug is individually hand-printed in Arkansas using their exclusive stenciling technique to ensure a unique style that truly makes a statement.",
    photo: imgEarthRugs,
    origin: "usa-finished",
    squareItems: ["Earth Rugs", "Earth Rug Coaster"],
    shared: false,
    house: false,
  },
  {
    slug: "farmer-dan-s-honey",
    name: "Farmer Dan's Honey",
    hometown: "White Pigeon, Michigan",
    blurb: "The hardworking honeybees of Farmer Dan's Honey, headquartered in White Pigeon, Michigan, have been diligently collecting nectar from wildflowers at their apiaries throughout Michigan and Indiana since the 90s. Their raw and unfiltered honey preserves its natural goodness, offering a genuine, wholesome, and mouthwatering product. At Redtail Market, we are committed to bringing you healthy, raw and unfiltered honey made at some of the best apiaries in the country. Our promise\u2013 you won't be disappointed.",
    photo: imgFarmerDansHoney,
    origin: "usa",
    squareItems: ["Farmer Dan\u2019s Honey"],
    shared: false,
    house: false,
  },
  {
    slug: "irvin-s-tinware",
    name: "Irvin's Tinware",
    hometown: null,
    blurb: "In 1960, Irvin Hoover, a talented craftsman and designer known for his birdhouses, was inspired by a local merchant to recreate an antique tin-pierced lantern. At the age of sixteen, using an old stovepipe as his materials, young Irvin crafted his first piece. It quickly became a hit and led to the establishment of Irvin's Craft Shop. Today, that shop is known as Irvin's Tinware\u2014a testament to the enduring craftsmanship that began with a simple lantern.",
    photo: imgIrvinsTinware,
    origin: "usa",
    squareItems: ["Irvins Country Tinware"],
    shared: false,
    house: false,
  },
  {
    slug: "k-k-interiors",
    name: "K&K Interiors",
    hometown: "Sandusky, Ohio",
    blurb: "At Redtail Market, we proudly showcase the timeless design of K&K Interiors from Sandusky, Ohio. Explore our collection of K&K's Arrows & Arrow Replacements and bring your farmhouse fantasy to life with these whimsical pieces. Whether it's seasonal decor or a touch of modern farmhouse you seek, these hanging gems are the perfect match.",
    photo: imgKKInteriors,
    origin: "usa",
    squareItems: ["K&K"],
    shared: false,
    house: false,
  },
  {
    slug: "kathy-s-blooming-creations",
    name: "Kathy's Blooming Creations",
    hometown: "Burlington, Wisconsin",
    blurb: "Experience the charm of Kathy's Blooming Creations, a unique local artisan out of Burlington, Wisconsin. Their skilled craftsmen specialize in creating rustic decor using metal and reclaimed wood. Add warmth and character to your home with their designer pieces including metal and reclaimed wood birds, candles, horses, or distressed cloches. You can't go wrong.",
    photo: imgKathysBloomingCreations,
    origin: "usa",
    squareItems: ["Kathy's Bloomin' Creations"],
    shared: false,
    house: false,
  },
  {
    slug: "marchello-art",
    name: "Marchello Art",
    hometown: "Michigan",
    blurb: "Discover the impeccable craftsmanship of Marchello Art. John Marchello, a local artist from Michigan, embarked on his artistic journey in 2009, inspired by his father's legacy of transforming silverware into art. Together, they have honed their tools and techniques to create breathtaking designs that pay homage to the unique history of each piece. By challenging the culture of disposability, John strives to create exquisite jewelry that embodies values of reducing and reusing.",
    photo: imgMarchelloArt,
    origin: "usa",
    squareItems: ["Artisan Jewelry"],
    shared: true,
    house: false,
  },
  {
    slug: "maryanne-s-memories",
    name: "Maryanne's Memories",
    hometown: "Lowell Indiana",
    blurb: "Individually handcrafted by Maryanne Tighe in Lowell Indiana, our fully posable memory bears are a heartfelt way to honor and remember loved ones who have passed. These unique keepsakes are created using shirts you provide, ensuring each bear carries special meaning and personal connection.",
    photo: imgMaryannesMemories,
    origin: "usa",
    squareItems: ["Maryanne\u2019s Memories"],
    shared: false,
    house: false,
  },
  {
    slug: "melissa-z-monroe-pottery",
    name: "Melissa Z. Monroe Pottery",
    hometown: "Mokena, Illinois",
    blurb: "Discover the exquisite pottery of Melissa Z. Monroe, a local artisan hailing from Mokena, Illinois. With exceptional craftsmanship and attention to detail, Melissa's pottery has garnered recognition from acclaimed chef Rick Bayless. From his renowned Chicago restaurants to establishments nationwide, her elegant dishes grace tables with sophistication. Not only acclaimed for her dinnerware, Melissa is also making a name for herself in upscale areas like the Hamptons and the North Shore with her stunning vases. Wow.",
    photo: imgMelissaZMonroePottery,
    origin: "usa",
    squareItems: ["Melissa Monroe"],
    shared: false,
    house: false,
  },
  {
    slug: "oak-hill-studio",
    name: "Oak Hill Studio",
    hometown: "Reynolds, Indiana",
    blurb: "Discover the artistry of Oak Hill Studio - a family-owned business based in Reynolds, Indiana. They offer an exquisite collection of engraved and painted wood signs that range from heartwarming to humorous. Find the perfect sign for any space, big or small.",
    photo: imgOakHillStudio,
    origin: "usa",
    squareItems: ["Oak Hill Studio, Misc", "Oak Hill Studio, Christmas", "Oak Hill Studio, Fall", "Oak Hill Studio, Spring/Love", "Oak Hill Studio, Summer", "Oak Hill Studio, Misc 2"],
    shared: false,
    house: false,
  },
  {
    slug: "paine-products",
    name: "Paine Products",
    hometown: "Auburn, ME",
    blurb: "Redtail Market is proud to offer Paine Products \u2013 a family-owned business in Auburn, ME since 1931. Their all-natural balsam, pinon pine, and cedar incense are made with locally sourced materials. Using a simple process of grinding and drying balsam branches, their incense is made without any added chemicals. Experience the pure and sustainable fragrance of Paine Products at Redtail Market.",
    photo: imgPaineProducts,
    origin: "usa",
    squareItems: ["Paine's"],
    shared: false,
    house: false,
  },
  {
    slug: "papernickety",
    name: "Papernickety",
    hometown: "Beecher, Indiana",
    blurb: "Explore the artistry of Jane Siefker from Beecher, Indiana. With meticulous hand-rolled paper, she crafts mesmerizing crosses, wall art, and jewelry. Every piece is made with love using newspaper or magazines and coated for a light touch of water resistance.",
    photo: imgPapernickety,
    origin: "usa",
    squareItems: ["PAPERnickety"],
    shared: false,
    house: false,
  },
  {
    slug: "the-hearthside-collection",
    name: "The Hearthside Collection",
    hometown: "Groveport, Ohio",
    blurb: "We are happy to have The Hearthside Collection, a family-owned company out of Groveport, Ohio, at Redtail Market. From timer taper battery operated wax candles and wooden wares to primitive metal and tin items, we are sure you will find something special for your home. As decorating trends have come and gone, The Hearthside Collection is for exacting consumers who have passion for decorating their homes with primitive, rustic and timeless decor.",
    photo: imgTheHearthsideCollection,
    origin: "usa",
    squareItems: ["Hearthside Collection", "Hearthside Collection 2", "Hearthside Collection Fall", "Hearthside Candles"],
    shared: false,
    house: false,
  },
  {
    slug: "the-homestead-collection",
    name: "The Homestead Collection",
    hometown: "Findlay, Ohio",
    blurb: "Discover The Homestead Collection at Redtail Market. Handcrafted with reclaimed wood and vintage fasteners and nails, these charming products are created by a family-owned business in Findlay, Ohio. Experience the rustic charm of our seasonal items including adorable decor such as birdhouses, rabbits, home accents, and vintage trays.",
    photo: imgTheHomesteadCollection,
    origin: "usa",
    squareItems: ["Homestead Collection"],
    shared: false,
    house: false,
  },
  {
    slug: "twisted-wares",
    name: "Twisted Wares",
    hometown: null,
    blurb: "In the midst of the 2008 recession, Twisted Wares emerged as a ray of hope. Missy, the creative force behind it all, turned adversity into opportunity. The turning point? A simple request for \"the wrong red\" tea towels in 2014. Fueled by determination and sauce(r)y humor, she transformed those towels into instant bestsellers. Since then, Twisted Wares has become synonymous with functional products that pack a punch. Our adultish party collection adds character to any get together, bar or home while sparking conversations and brightening up your day.",
    photo: imgTwistedWares,
    origin: "usa",
    squareItems: ["Twisted Wares"],
    shared: false,
    house: false,
  },
  {
    slug: "vickie-jean-s-creations",
    name: "Vickie Jean's Creations",
    hometown: "Plover, Wisconsin",
    blurb: "Explore the beautiful country home decor of Vickie Jean's Creations located in Plover, Wisconsin. Each hand-dipped candle glow light bulb with a soft-tip or real flicker candle is a one-of-a-kind creation that adds personality to any space. Whether you use them for mantle-piece arrangements, nightlights, or lamps, these bulbs and candles emit a gentle natural glow that brings cozy country charm to your home.",
    photo: imgVickieJeansCreations,
    origin: "usa",
    squareItems: ["Vicky Jean's"],
    shared: false,
    house: false,
  },
  {
    slug: "vintage-addiction",
    name: "Vintage Addiction",
    hometown: null,
    blurb: "Our Vintage Addiction collection is a heartfelt tribute and reminder of the sacrifices made by military veterans. Crafted from genuine used military tents, these recycled bags carry an authentic story. Every bag showcases unique imperfections, stains, and colors that add character, reflecting each soldier's shelter-seeking experience in training fields or combat zones. Keep them in your heart and on your shoulder.",
    photo: imgVintageAddiction,
    origin: "usa",
    squareItems: ["Vintage Addiction"],
    shared: false,
    house: false,
  },
];

/**
 * Badge text for a maker's origin, or null to show nothing.
 *
 * "usa-finished" deliberately does NOT say "Made in the USA" — that is an
 * FTC-regulated claim requiring all or virtually all domestic content, which
 * goods produced abroad and finished here do not meet.
 */
export function originLabel(m: Maker): string | null {
  if (m.origin === "usa") return "Made in the USA";
  if (m.origin === "usa-finished") return "Hand-finished in the USA";
  return null;
}

export function makerBySlug(slug: string): Maker | undefined {
  return makers.find((m) => m.slug === slug);
}

/** Independent makers only — excludes our house brand. */
export const independentMakers: Maker[] = makers.filter((m) => !m.house);

/** Become-a-vendor callout, also lifted from the old site. */
export const becomeAMaker = {
  title: "Are You Our Next Maker?",
  body: "IT'S A VIBE. At Redtail Market, we curate a collection of primitive and handmade rustic goods that exude a unique vibe. We proudly collaborate with artisans who share our sense of style. While we prioritize partnering with established businesses, we also appreciate the passion and dedication of driven hobbyists. Do you make rustic decor, jewelry or other items?\ufeff We want to hear from you.",
  photo: imgRecruit,
};
