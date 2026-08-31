// GENERATED FILE — do not edit by hand.
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
  /** Units sold in Square over the last 365 days. */
  unitsSold: number;
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
  /** Units sold in Square over the last 365 days, summed across sizes. */
  unitsSold: number;
  sizes: BumblinSize[];
};

/** Shopify CDN supports on-the-fly resizing via a width param. */
export function img(url: string, width: number): string {
  if (!url) return url;
  const u = new URL(url);
  u.searchParams.set("width", String(width));
  return u.toString();
}

export const bumblinScents: BumblinScent[] = [
  {
    "scent": "Absinthe & Santal",
    "handle": "absinthe-and-santal",
    "unitsSold": 42,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Clean / Ozonic",
      "fall",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Coconut, Blackberry, Cedar & Musk",
    "description": "A magical brew for me and you. Fall under the spell of anise, coconut milk & eucalyptus with this fantastical foil. While flames burn bright, visions of coconut, sandalwood, blackberry and basil will excite the senses. When the light goes out, effects of cedar, fennel, dark musk and amber settle. Simply enchanting.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "W5MJJURMZRYICMWS7PTWCRSN",
        "sku": "B593607",
        "unitsSold": 11,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "KAWKAMJUD5T7FSROUHA5UKGX",
        "sku": "2795565",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "ULTTDYQ3WMKH45H6HUKET3BT",
        "sku": "548404N",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "CXGVLJEFWZVCYGQJAYSY5ZRF",
        "sku": "554956S",
        "unitsSold": 16,
        "images": []
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "F2ZDBHKBE6WMDAUOLDP4BQC6",
        "sku": "Y746076",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/48_absinthe_santal2.jpg?v=1753879952"
        ]
      }
    ]
  },
  {
    "scent": "American Pie",
    "handle": "american-pie",
    "unitsSold": 31,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "fall",
      "Gourmand",
      "spring",
      "summer",
      "winter"
    ],
    "notes": "Apples & Maple Bourbon",
    "description": "This mouthwatering, intoxicating scent starts with top notes of apple, cinnamon, and a hint of orange. Coconut and butter are the heart of this fragrance, while rich, sweet maple and vanilla finish off this irresistible baked apple dessert. Slice yourself a piece of this American pie.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "POEFHI6MVE2DLPATNTCZTRPH",
        "sku": "W603208",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_american_pie.jpg?v=1753879820"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "RRRRDTHULMTNBECVDYUGRBFR",
        "sku": "J664365",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_American_Pie.jpg?v=1753879824"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "JU7GBGCG6WX3YEPXHRDBYCAJ",
        "sku": "X232097",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_american_pie.jpg?v=1753879852"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "7YVB6R7GM26UHKBRBDQ5BBFY",
        "sku": "240921J",
        "unitsSold": 14,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_american_pie.jpg?v=1753879768"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "WWY3GYQSVRR6NGGFWMFHW7Y2",
        "sku": "363954G",
        "unitsSold": 2,
        "images": []
      }
    ]
  },
  {
    "scent": "Apothecary",
    "handle": "apothecary",
    "unitsSold": 4,
    "tags": [
      "Earthy",
      "fall",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Leather, Vanilla & Cinnamon",
    "description": "This enchanting fragrance conjures the feeling of an old potion store. We start with a teakwood aroma on the top that gives way to the heart of this cedar and leather dominant candle. Earthy sandalwood, dark musk, vetiver and patchouli sit on the bottom of this woody scent.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "HLE3PZDLS3FTA57TT4S6R4CD",
        "sku": "4551974",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_apothecary.jpg?v=1753879821"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "Y6BPBUJTXA7DF6HAH3BZYMQO",
        "sku": "4605055",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Apothecary.jpg?v=1753879825"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "2RPGAIGYJFVGQ7XZVSIPZONC",
        "sku": "544119E",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_apothecary.jpg?v=1753879853"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "42TCW6BUDARTTN7YEA7QBQSF",
        "sku": "8061964",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_apothecary.jpg?v=1753879768"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "SNJVIE3IEU6IWLWUZCMYPNWJ",
        "sku": "200935G",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Bamboo Forest",
    "handle": "bamboo-forest",
    "unitsSold": 10,
    "tags": [
      "Clean / Ozonic",
      "Earthy",
      "Floral",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Bamboo, Aloe, Chrysanthemum & Moss",
    "description": "Hike the trails of Bamboo Forest with this green woodsy scent. Top notes of aloe, agave, and lime transform into chrysanthemum, green leaves and bamboo at the center of this aura. After extinguish patchouli, amber, and moss bring calm and peace to your space.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "RF5VGNXZWFDPLDM23NHYYXVJ",
        "sku": "534421Q",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_bamboo_forest.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "FNPVNXALC6LEOXNUCV5VTQNJ",
        "sku": "202229D",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Bamboo_Forest.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "3FPOSZKKEOCW7HOU5HKRF5FC",
        "sku": "Y446114",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_bamboo_forest.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "TTGZPSWL37DTZJD67AWVZEF2",
        "sku": "8322862",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_bamboo_forest.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "LRYV4S7ECSBLCBH725KSQSAJ",
        "sku": "8123436",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "Bats in the Belfry",
    "handle": "bats-in-the-belfry",
    "unitsSold": 8,
    "tags": [
      "best seller",
      "Earthy",
      "fall",
      "Floral",
      "summer",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Oakmoss, Amber, Tonka & Oud",
    "description": "You. Are. Not. CRAZY. This captivating scent begins with hints of orange, grapefruit, and an infusion of sage that enhance the natural earthy quality. Lavender lends a soft floral and herbal touch to the heart of this scent, while oakmoss, amber, and tonka round out the base for a beautiful, deep lingering effect.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "4U7EOMVXO2I2EQ7D3UH67HMH",
        "sku": "5541751",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_bats_in_the_belfry.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "EUJNJTJY4RUSTICDE6YGTORI",
        "sku": "D464937",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Bats_in_the_Belfry.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "UHW7VTQDCH5HINIAT3CTSPCA",
        "sku": "B592782",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_bats_in_the_belfry.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "3HMAVSZQLH55WYS25KW6VCCM",
        "sku": "885287F",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_bats_2-Camera_2.png?v=1778004585",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_bats_in_the_belfry.jpg?v=1778004578"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "X3XSWKP6WCYZU6BL5R7CQBJG",
        "sku": "551575P",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Bee Mine",
    "handle": "bee-mine",
    "unitsSold": 13,
    "tags": [
      "Citrus / Berry",
      "Earthy",
      "Gourmand",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "BlackBerry, Honey, Vanilla, and Patchouli",
    "description": "Let your passion burn bright with this intoxicating scent. Top notes of saffron and apple will have you swooning. At the heart of this fragrance are blackberry, vanilla and honey while anise, amber and patchouli linger in the air at the end. Get ready to fall head over heels for this fragrance.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "ZYG464GO4G5MOFUTY4G7S7M7",
        "sku": "9284103",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_bee_mine.jpg?v=1778004452",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_1_Image_0010.jpg?v=1778002816"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "7SDKP5L5XLMUMBO2ZCMCKQSU",
        "sku": "V673131",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Bee_Mine.jpg?v=1778004466",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_1_Image_0010.jpg?v=1778002816"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "GLWT33EZ4OYLA2JN6IBILUSQ",
        "sku": "654330X",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_bee_mine.jpg?v=1778004494",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_1_Image_0010.jpg?v=1778002816"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "WITHZ6OZOOSQ2TSTSF4ZY7HZ",
        "sku": "7922709",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_bee_mine.jpg?v=1778004580",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_1_Image_0010.jpg?v=1778002816"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "SFLUPT44G36FMTS5SZAR6LJQ",
        "sku": "2986733",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_1_Image_0010.jpg?v=1778002816"
        ]
      }
    ]
  },
  {
    "scent": "Bewitched",
    "handle": "bewitched",
    "unitsSold": 11,
    "tags": [
      "Earthy",
      "fall",
      "Gourmand",
      "Woody / Evergreen"
    ],
    "notes": "Fresh Firewood, Pine Sprig, Molasses & Fig",
    "description": "Transport your senses to a whimsical world with top notes of redwood, fig, sea salt, and caramelized sugar. As the enchanting aroma unfolds, immerse yourself in middle notes of pine sprigs, cedar, molasses, and green floral. Finally, the captivating experience lingers with base notes of tonka, vanilla bean, and the essence of fresh cut firewood. Hocus Pocus!",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "HKTPRST5RJSEDR6DAPPVQQCT",
        "sku": "504086Z",
        "unitsSold": 1,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "U4H5DNRWMHIQR57SRHUOV4YS",
        "sku": "824451R",
        "unitsSold": 4,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "NAVWTAUJBWZAAYA44IA3LOPO",
        "sku": "M052716",
        "unitsSold": 2,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "PQIDM2ZBDZQTCN5HPQDBQXDT",
        "sku": "924394D",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_bewitched.jpg?v=1778004548"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "TFPM5BLBLVQFKKZQPRREZ4KW",
        "sku": "7271004",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Black Tie",
    "handle": "black-tie",
    "unitsSold": 19,
    "tags": [
      "Citrus / Berry",
      "Earthy",
      "fall",
      "Floral",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Citrus, Violet, Vanilla & Palo Santo",
    "description": "Like the perfect suitor, this fragrance arrives formally attired with leading notes of buttercream, citrus and cardamom. At its heart, vanilla, palo santo and violet blend with a hint of cologne to draw you closer in. Finished beautifully with bourbon, sugar, wood and amber to linger long after you’ve said good night.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "GSJEW353BDGPRTWHTBIJGXEQ",
        "sku": "C762341",
        "unitsSold": 9,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/3oz_black_tie_f4f3f78e-43c7-40f4-8ff9-0bf0b3abdd88.jpg?v=1778006554"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "H3GLRUV5MPGEEBI3W7HWPCIB",
        "sku": "J762540",
        "unitsSold": 1,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "ALYUK2ZX6TMRZ76W4TXAV6VO",
        "sku": "7044956",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/8oz_black_tie.jpg?v=1778006540"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "VV3XRN4TFA66REGAGTVS5MEQ",
        "sku": "L884341",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14oz_black_tie_545a9800-804a-4906-bdd3-c4965bfd9c85.jpg?v=1778006554"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "T2NB5ZM74YPYE4K7WDHQWCDS",
        "sku": "9826915",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/48_blacktie2_b2c2d9d3-ec3f-40bb-9078-6b0c1e131b3a.jpg?v=1778004541"
        ]
      }
    ]
  },
  {
    "scent": "Black Violet and Saffron",
    "handle": "black-violet-and-saffron",
    "unitsSold": 14,
    "tags": [
      "Earthy",
      "Floral",
      "spring",
      "summer"
    ],
    "notes": "Bergamot, Violet, Saffron & Vetiver",
    "description": "Magic happens when the deepest of violets and the richest of saffrons combine. Bergamot and accompanying impressions of geranium will ensnare your senses as this aura ignites. Slip into a hypnotic trance as beats of violet, rose and raspberry dance while soft notes of leather, saffron and vetiver tarry long after. This mystical fragrance will have you spell bound.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "LBPPAG747PAYDQ3LKEJOTRSS",
        "sku": "Y479768",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_black_violet_and_soffron.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "SJRK5UYZ4YVLVJOZXBY3IJXO",
        "sku": "W307241",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Black_Violet_Saffron.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "6V6PNDQQ7QIYN4QO6XVUWELQ",
        "sku": "925172F",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_black_violet_saffron.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "REKXEI3D4CCCFZ2QSWKEVSM7",
        "sku": "6541085",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_black_violet_and_saffron.jpg?v=1778004580"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "UVWDXW5KSHAS4E3ZCU6C4RJ6",
        "sku": "592386S",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "BOoOoo...Berry",
    "handle": "booberry",
    "unitsSold": 5,
    "tags": [
      "Citrus / Berry",
      "fall",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Berries, Cypress & Pine",
    "description": "Haunting scents of apple and citrus are your first take with a hint of eucalyptus and mint. At the heart of this ghostly foil is berries, cypress and pine. And then finally, this scaretastic fragrance winds down with subtle lasting undertones of pecan, cedar, vanilla and butter. Don’t be scared...",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "EPQEQOZ7MXBVBGHOV3O7N36F",
        "sku": "162718X",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_boo_berry.jpg?v=1778004454"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "C3EYX6CNO5ZCJX7UZTPBNQ2J",
        "sku": "N492314",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Boo_Berry.jpg?v=1778004464"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "NVT46XG5PCK3O6MO7SWXWLYR",
        "sku": "K806270",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_boo_berry.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "KLURVR326VVHYWXCEM4C6E2A",
        "sku": "284592N",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_booBerry2.png?v=1753914664",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_boo_berry.jpg?v=1778004580"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "KJANKAVX2S3VOCQSBXN5G7VI",
        "sku": "X958714",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "By the Fireside",
    "handle": "by-the-fireside",
    "unitsSold": 5,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Clean / Ozonic",
      "fall",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Camphor, Peppermint, Marine, Cedar & Smoke",
    "description": "A haunting glow that summons the eerie charm of a midnight campfire. Sharp saffron and peppermint cut through the night air, while sandalwood, clove, and cedar crackle with smoky mystery. Amber, patchouli, and dark musk ground the scent in ghostly warmth.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": null,
        "sku": null,
        "unitsSold": 0,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "65DJGFSGPSVDAHQZ2U32UCTC",
        "sku": "9000126",
        "unitsSold": 2,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": null,
        "sku": null,
        "unitsSold": 0,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": null,
        "sku": null,
        "unitsSold": 0,
        "images": []
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "NQJZIEEVCQL66KVXBYFFGOOJ",
        "sku": "Q944203",
        "unitsSold": 3,
        "images": []
      }
    ]
  },
  {
    "scent": "Cabin in the Woods",
    "handle": "cabin-in-the-woods",
    "unitsSold": 53,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Earthy",
      "fall",
      "Floral",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Leather, Jasmine, Cedar & Patchouli",
    "description": "Capture the warmth and comfort of a forest cabin with fresh pine, rich cedar, and a smoky wood finish. Perfect for creating a snug, fireside atmosphere.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "A5R6LVJKTOM4HZCVU44JD3GM",
        "sku": "L287601",
        "unitsSold": 13,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_cabin_in_the_woods.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "BODK6QHDT6CLZ5SAA4M7DMU5",
        "sku": "8218651",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Cabin_in_the_Woods.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "QD3HNOA4WSTUB3O7KNPELNAK",
        "sku": "459750G",
        "unitsSold": 13,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_cabin_in_the_woods.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "ZVKVJKJ25QKB2BFHTKTWAOFS",
        "sku": "664295H",
        "unitsSold": 19,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_cabin_in_the_woods.jpg?v=1778004578"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "62ZCEO6G34ZGXTPNV62OJISZ",
        "sku": "Cabitw",
        "unitsSold": 4,
        "images": []
      }
    ]
  },
  {
    "scent": "Candied Heart",
    "handle": "candied-heart",
    "unitsSold": 8,
    "tags": [
      "Citrus / Berry",
      "Gourmand",
      "spring",
      "Woody / Evergreen"
    ],
    "notes": "Raspberry, Cinnamon, Balsam and Vanilla",
    "description": "The heart crystalizes and candies in this fantastical foil with whispers of raspberry, strawberry and black currant drawing you in. Cinnamon, sugar and freesia will capture your heart in the middle while balsam, pine, vanilla and light musk will shatter any preconceived notion of sweet scents. Get your hammer.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "T75POZCY6SHV6IYGNPKH4AKA",
        "sku": "906552S",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_candied_heart.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "T3FXG6TY2V6YR6NZ4ISYI6FH",
        "sku": "345730L",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Candied_Heart.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "LI77AZUNUYKSU4R6CMIQDPGU",
        "sku": "616282G",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_candied_heart.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "VJ4M4X3Z4KRWZIVBXWT6UEEY",
        "sku": "760904H",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_candied_heart.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "NMNAPL4NHLDKPLYRELY2LHHZ",
        "sku": "Q948186",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Charmed",
    "handle": "charmed",
    "unitsSold": 14,
    "tags": [
      "Earthy",
      "fall",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Mahogany, Linen, Cedar Leaf & Vanilla",
    "description": "Clear evidence of a charmed life was discovered within this aura. Exhilarating notes of linen and almond are most persuasive on top. At the heart, this intoxicating foil beats notes of amaretto, mahogany and amber. When extinguished, musk, cedar leaf, sandalwood and tonka bean seal it with a kiss.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "KBK2NQKRH6IGDQRXR5EXAOKF",
        "sku": "A264113",
        "unitsSold": 4,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "2L3BW5B5X6YEYNAGUAQJKES3",
        "sku": "G405086",
        "unitsSold": 4,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "AQ5HRGZMO5HVYWE3BCGOEKHA",
        "sku": "X572870",
        "unitsSold": 1,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "D2FLYFWDQWTSU5VAJKJXYGMA",
        "sku": "X248095",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_charmed.jpg?v=1778004548"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "PGO4ZVSDCI5TILYEBCERT55S",
        "sku": "841815Z",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Cinnamon Broom",
    "handle": "cinnamon-broom",
    "unitsSold": 48,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "fall",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Hot Cinnamon",
    "description": "The holiday tradition of a cinnamon broom in the heart of your home lives on in this timeless fragrance. Top notes of eucalyptus, orange peel and ginger with core notes of cinnamon and clove coming through in the middle. Pine, fir, sugar and wood aromas finish off this classic scent.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "YSKUNZTKT7KGUHEG53UFDRZA",
        "sku": "Z095684",
        "unitsSold": 15,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_cinnamon_broom.jpg?v=1778004452"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "UKUIKYPVV7BUAXLOSDNUFKYA",
        "sku": "1525512",
        "unitsSold": 12,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Cinnamon_Broom.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "WPXZKC7BWIJJ46PPROBZ6LZG",
        "sku": "W697283",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_cinnamon_broom.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "IOJM7GSPSOJAZGNVIVNUFARW",
        "sku": "D465975",
        "unitsSold": 12,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_cinnamon_broom.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "DBRRRLAUOQ6WQOFCKDU2AWCU",
        "sku": "L904438",
        "unitsSold": 2,
        "images": []
      }
    ]
  },
  {
    "scent": "Citrus & Sage",
    "handle": "citrus-and-sage",
    "unitsSold": 39,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Earthy",
      "fall",
      "Gourmand",
      "spring",
      "summer",
      "winter"
    ],
    "notes": "Grapefruit, Orange, Lemon Peel & Sage",
    "description": "Citrus takes on a new life in this fragrant foil. Rays of grapefruit, orange peel, lemon peel, eucalyptus and pine emit at open. After lighting, green leaves, mandarin, pomegranate, rosemary and green floral harmoniously blend together to create this special scent. On extinction, remnants of vetiver, sage and cedar will leave their mark. Delicious.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "ZQ3QMP3KV5IAWAABPOVBW7IY",
        "sku": "651175G",
        "unitsSold": 14,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/3oz_citrus_sage_9a7fb9c7-faeb-46fe-8df6-652223a6f1f9.jpg?v=1778006554"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "TPU7OZHIPGHMMH55N7UGXNGH",
        "sku": "Q164549",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "44R2Y7LGQLQQM6NW5W24XDR6",
        "sku": "842766V",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/8oz_citrus_sage.jpg?v=1778006540"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "KQNYXC57XCKGMAVR46A2GRTI",
        "sku": "P604045",
        "unitsSold": 11,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14oz_citrus_sage_ea0e027a-846f-4dfc-a9a4-e5af1e5b34d0.jpg?v=1778006554"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "M535FMFBWXYXXY5CELBLTGCD",
        "sku": "2613532",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/48_citrus_sage2.jpg?v=1778004542"
        ]
      }
    ]
  },
  {
    "scent": "Clementine",
    "handle": "clementine",
    "unitsSold": 49,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Gourmand",
      "spring",
      "summer"
    ],
    "notes": "Orange Peel, Clementine, Mandarin & Sugar",
    "description": "Brace yourselves for a sweet citrus explosion. Juicy orange and lemon peel top notes open up to a heart of bright, zesty citrus. Agave nectar enhances the natural sweetness of grapefruit, mandarin, and tangerine. At the end, a hint of lime and peach rounds out this tropical fruit eruption. Each sold separately.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "FJOWJ2BK2SWFRFGSGDWLEBSX",
        "sku": "795463Y",
        "unitsSold": 15,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14ozClementine_205d897e-b85f-492d-84ac-478063813129.jpg?v=1778002844"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "PRGCTPLDARCUEKRZFJO2HRTD",
        "sku": "Z140620",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14ozClementine_205d897e-b85f-492d-84ac-478063813129.jpg?v=1778002844"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "F746IEGYCQJTC3VRBXXKZ73R",
        "sku": "952998R",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14ozClementine_205d897e-b85f-492d-84ac-478063813129.jpg?v=1778002844"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "FFDEU53I5YEZTZINAZT55KQM",
        "sku": "163684N",
        "unitsSold": 16,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14ozClementine_205d897e-b85f-492d-84ac-478063813129.jpg?v=1778002844"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "DENC6RP2SI5MLC5WQICFFV5S",
        "sku": "5645859",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14ozClementine_205d897e-b85f-492d-84ac-478063813129.jpg?v=1778002844"
        ]
      }
    ]
  },
  {
    "scent": "Coal Fire Farm",
    "handle": "coal-fire-farm",
    "unitsSold": 13,
    "tags": [
      "Citrus / Berry",
      "Earthy",
      "fall",
      "Gourmand",
      "winter"
    ],
    "notes": "Cinnamon Sugar Buttercream, Honey & Pumpkin",
    "description": "Capture the comfort of a vintage farmhouse with this captivating aura. A rustic blend of tart citrus and warm spices of nutmeg, ginger topped off with cinnamon sugar butter-cream on top. In the middle– pumpkin spices of clove and cream and honey. At extinguish, a light and airy base of white tea, jasmine and a hint of pie crust for a unique and appealing finish. Gather here.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "IYK6ELZWFVBEYZB4XHEQNT3S",
        "sku": "4273853",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": null,
        "sku": null,
        "unitsSold": 0,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "XS2VGZS3FKLBYGVIFRRJS4OP",
        "sku": "E561682",
        "unitsSold": 3,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "RJ7NI3FLBZQQPVWOKMS4UFJW",
        "sku": "4390449",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_coal_fire_farm.jpg?v=1778004548"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": null,
        "sku": null,
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Coffee House",
    "handle": "coffee-house",
    "unitsSold": 38,
    "tags": [
      "fall",
      "Gourmand",
      "winter"
    ],
    "notes": "Fresh Coffee, Cream & Sugar",
    "description": "Enjoy the warmth of fresh brewed coffee and handmade creations with this comforting, familiar fragrance. Top notes of just-ground coffee beans start this scent off strong, while a touch of sugar and cream add the perfect amount of sweetness to your home.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "WMDMNIMAVJCU5NWYMVFHSHFY",
        "sku": "M308816",
        "unitsSold": 16,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_coffee_house.jpg?v=1778004454",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_2_Image_0012.jpg?v=1778002849"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "QWV7XQSHSSJ26LMRHT3TAC7E",
        "sku": "B507623",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Coffee_House.jpg?v=1778004465",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_2_Image_0012.jpg?v=1778002849"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "KUCIGAFB3IEVTKOKYYP737SC",
        "sku": "1690691",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_coffee_house.jpg?v=1778004494",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_2_Image_0012.jpg?v=1778002849"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "GVDX5LKKV4NUZVJBZMA3GSBV",
        "sku": "3617311",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_coffee_house.jpg?v=1778004579",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_2_Image_0012.jpg?v=1778002849"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "IJFMUBBBAMNF2QSAPXFGWAVB",
        "sku": "Z764750",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_2_Image_0012.jpg?v=1778002849"
        ]
      }
    ]
  },
  {
    "scent": "Cookie Jar",
    "handle": "cookie-jar",
    "unitsSold": 12,
    "tags": [
      "fall",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Vanilla, Ginger & Spice",
    "description": "A tasty treat and familiar scent that has surely crossed the path of all who walk this earth. Cookies are a year-round classic and in keeping with the tradition of these light and delicious edibles, our cookie jar fragrance has notes of sugar, cinnamon, honey, ginger, clove and butter, rounded out with a smooth base of creamy vanilla.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "X4W7CZNW36IHNCJGXMRKVIRZ",
        "sku": "P640819",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_cookie_jar.jpg?v=1778004452"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "U3LASRG6FO2UEYC6YHFJ5Q4L",
        "sku": "N651715",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Cookie_Jar.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "UP73GKKLYGGDIOWOJTLTN2SX",
        "sku": "L957324",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_cookie_jar.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "FLZZWSNN2NBFFX2WLSYXH4RT",
        "sku": "R134021",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_cookie_jar.jpg?v=1778004580"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "JZUHINQXT2OSJD37JNOHMYVL",
        "sku": "L617442",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Cottage Holiday",
    "handle": "cottage-holiday",
    "unitsSold": 31,
    "tags": [
      "Citrus / Berry",
      "fall",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Juniper, Citrus & Berries",
    "description": "Winding up the seaside trails of Oregon, taking in the blend of fresh evergreens and fruits with a cooling camphor and coriander. Airy ozone is also at the top with a hint of citrus. Middle notes of deep red berry, amaris and sandalwood balance the woody pine and juniper notes. The fresh evergreen notes are reinforced by musk, eucalyptus, fir needle, and cedar leaf.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "NLYHWO76ZKZNV6XMJ2BQRWD3",
        "sku": "6817909",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_cottage_holiday.jpg?v=1778004454"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "KYNBS6LYLBA2RWMSI26BGS3E",
        "sku": "4131703",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Cottage_Holiday.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "VOI2WMTBCBXGT4LGSK7PH6RO",
        "sku": "Y641099",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_cottage_holiday.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "MJHSATGM26L44S5K3N22N36L",
        "sku": "F007394",
        "unitsSold": 11,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_Cottage_Holiday-Camera_2.png?v=1778004586",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_cottage_holiday.jpg?v=1778004578"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "SBZ53OXIGVXS67EYSXLBKYKQ",
        "sku": "346325V",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Crewhouse",
    "handle": "crewhouse",
    "unitsSold": 84,
    "tags": [
      "best seller",
      "Clean / Ozonic",
      "Earthy",
      "fall",
      "Gourmand",
      "spring",
      "summer",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Marine, White Eucalyptus, Sea Salt & Whiskey",
    "description": "The crew awaits within this intoxicatingly fresh foil. Let your senses go wild as notes of marine, citrus, palm and aloe waft about on top. In the stretch, notes of lavender, eucalyptus, oak, leather and patchouli take lead. At the finish, cedar, sea salt, vanilla and whiskey will win over the room after the oars are down. Hands on, rowers.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "QMYAW6T66TUA7HQ6XZLM2UF7",
        "sku": "M399038",
        "unitsSold": 14,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/3oz_crewhouse_2625f8bc-e041-4cfd-945b-00ac18a5a819.jpg?v=1778006555"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "AGSLXL5KUPSMFYW3GABZEQSX",
        "sku": "C729395",
        "unitsSold": 7,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "LRSFZ7XFZN5GUOL4FFDJABGR",
        "sku": "929081X",
        "unitsSold": 12,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/8oz_crewhouse_b8fdcded-e57a-4f47-9462-536245be16fd.jpg?v=1778006554"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "LDBOBH5DYIGJBDUXDZ6VEQFO",
        "sku": "7463570",
        "unitsSold": 46,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14oz_crewhouse_dba7a7e7-07a4-4191-8cfd-3fc3dabe9611.jpg?v=1778006554"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "EBR3CMC5QFIMBYRHTAIB7QWW",
        "sku": "L350038",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/48_crewhouse2.jpg?v=1778004542"
        ]
      }
    ]
  },
  {
    "scent": "Cucumber Water & Melon",
    "handle": "cucumber-water-and-melon",
    "unitsSold": 28,
    "tags": [
      "Citrus / Berry",
      "Clean / Ozonic",
      "Earthy",
      "Gourmand",
      "spring",
      "summer"
    ],
    "notes": "Cucumber, Honeydew, Ozone & Lime",
    "description": "Embrace mind, body and spirit with this invigorating experience. Ozone is the first impression giving way to a hint of lime. Honeydew melon, cantaloupe and cucumber fortify and underscore its nourishing namesake. Let aloe, bamboo and powder create positive energy as your senses take in all that is healthy and good.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "MG6MN3CZ6XBGPP264IU67BZM",
        "sku": "837018M",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_cucumber_water_and_melon.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "5NY3NYPS3ADPT753RPN6HJGX",
        "sku": "147224G",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Cucumber_Water_Melon.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "ZZSDVWZW4FNZPCW7R7CKDDB6",
        "sku": "M873166",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_cucumber_water_melon.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "HTRAH3FPCWCA3GLZWWQBSXKL",
        "sku": "6405373",
        "unitsSold": 11,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_cucumber_water_and_melon.jpg?v=1778004580"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "FJ5IDYMDN75IOACBPQN4TR3B",
        "sku": "287465C",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Dapper Trappings",
    "handle": "dapper-trappings",
    "unitsSold": 8,
    "tags": [
      "Earthy",
      "fall",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Leather & Cashmere",
    "description": "Accent your home in leather and cashmere with this luxe scent. Top notes of bergamot, saffron and powder tip their hat while ylang ylang, lavender and incense fit like a glove in the middle. Leather, amber and musk finish this tapestry with refinement. Step in to luxury.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "ZECWCQMK4AGJZ75IHASBLDFD",
        "sku": "900191B",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_dapper_trappings.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "N7X7RG6V6UPN7A66FMNZ24ZM",
        "sku": "T141188",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Dapper_Trappings.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "SWHIQ5RODK5S5BYZXBKUGN37",
        "sku": "383328C",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_dapper_trappings.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "UPOPNVLELUB54KZT2FVO5XCD",
        "sku": "A007032",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_dapper_trappings.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "HBTEIEHVFRUPPZ2HXTSHL22I",
        "sku": "325933L",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Deck the Halls",
    "handle": "deck-the-halls",
    "unitsSold": 50,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Pine, Sugar, Wood & Cinnamon",
    "description": "The all familiar holiday song comes alive in this yuletide fragrance. Top notes of eucalyptus, orange peel and ginger play center stage with core notes of cinnamon and clove coming through in the middle. Pine, fir, sugar and wood aromas finish off this classic scent. Let the choir sing.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "SWX4B56ZPLDGHOEOK5XUDA6A",
        "sku": "V527169",
        "unitsSold": 18,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_deck_the_halls.jpg?v=1778004454"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "4R4RMQRIRXHVYUILW2VZ32FF",
        "sku": "4612164",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Deck_the_Halls.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "VM75CSKB3KD3G3LWI5WBW5L6",
        "sku": "M320578",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_deck_the_halls.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "HSPL56MTR5IG7Q4PY5K2QFS4",
        "sku": "470688K",
        "unitsSold": 17,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_Deck_the_halls-Camera_2.png?v=1778004586",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_deck_the_halls.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "SIWWK7DHYB3PKPF3USGISPT3",
        "sku": "719656S",
        "unitsSold": 3,
        "images": []
      }
    ]
  },
  {
    "scent": "Desert Bloom",
    "handle": "desert-bloom",
    "unitsSold": 9,
    "tags": [
      "Citrus / Berry",
      "Clean / Ozonic",
      "Earthy",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Rosemary, Sage, Palo Santo & Bamboo",
    "description": "Known for it’s healing powers, burning Palo Santo is an ancient tradition used to reduce stress, agitation and calm the mind and body. Discover eucalyptus, aloe and citrus on the top notes to induce calm while rosemary, bamboo and Palo Santo help you navigate back to center. Find yourself reinvigorated at the end with the fresh foils of cedar, sage and sandalwood. Namaste.a",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "IGB6XTMWH3LUU5KKWVISMTHM",
        "sku": "934969M",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_desert_bloom.jpg?v=1778004455"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "L4B4DSOSBD4IQEUWADJQ62TV",
        "sku": "W042635",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Desert_Bloom.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "PODLIQKRRJMPGGT4T7FX7FVU",
        "sku": "962955W",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_desert_bloom.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "HZEPHGEESWSXKH6TEHNSNNK2",
        "sku": "492587G",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_desert_bloom.jpg?v=1778004578"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "M3I2EHLEIRF35MPIURJS3PIP",
        "sku": "Q538399",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Dragon's Breath",
    "handle": "dragons-breath",
    "unitsSold": 16,
    "tags": [
      "Earthy",
      "fall",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Eucalyptus, Fire, Smoke, Vanilla & Patchouli",
    "description": "Watch as the dragon curls around its treasure, crunching peppermint leaves and eucalyptus in this fiery scent. With a mighty breath, it exhales sandalwood and patchouli from the embers, mingling with the warmth of cedar. Smoke and incense swirl in amber flames—a tale whispered in fire and ash.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "BQPCGRXWQDRTU3KM2R53T6E3",
        "sku": "415588D",
        "unitsSold": 4,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "2RVDRQECWZBDRBLISGVQHJNM",
        "sku": "Q665428",
        "unitsSold": 3,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "NKJCTZZXKU3A2ES5Q6WVU42Z",
        "sku": "W168796",
        "unitsSold": 2,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "VN4R3GV7I7SOCYRULJO2LZLH",
        "sku": "H940170",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_dragons_breath.jpg?v=1778004547"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "AO4NU2ZT5VQ4AKGALK7Y3MDL",
        "sku": "6052755",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "Dressed in White",
    "handle": "dressed-in-white",
    "unitsSold": 13,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Earthy",
      "fall",
      "Gourmand",
      "spring",
      "summer",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "White Oak, White Cedar, Leather & Vanilla",
    "description": "The perfect day is dressed in white oak and white cedar enchanting elegant and rustic memories. Opening notes of palm, aloe and bergamot take their lead and while the flame flickers oak, leather, patchouli and camphor will abound. Finish the special day with hints of smoke, vanilla, whiskey, amber and cedar that will settle as a reminder. No RSVP required.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "PMGAKRMDJY5UX6RSOIP4CPUM",
        "sku": "W479715",
        "unitsSold": 4,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "VRZBKYS6GC7JIGQHPGKK7EAL",
        "sku": "9277687",
        "unitsSold": 0,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "DNGJGBLT6M4KOIG5UCX3G2DG",
        "sku": "P013101",
        "unitsSold": 3,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "ZU37YV6B6JNVLMJFGDTN5TLO",
        "sku": "354536T",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14oz_dressed_in_white.jpg?v=1778002868"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "YLT54BSRSQFJ5ZWVYNHE5T66",
        "sku": "671413W",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/48_dressedinwhite2.jpg?v=1778004541"
        ]
      }
    ]
  },
  {
    "scent": "Driftwood & Cotton",
    "handle": "driftwood-and-cotton",
    "unitsSold": 29,
    "tags": [
      "Citrus / Berry",
      "Clean / Ozonic",
      "Floral",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Cotton Blossom, Sea Salt, Ozone & Sandalwood",
    "description": "Down by the sea, you will find peace for thee. Citrus, ozone, lemon, and cotton blossom are released into the atmosphere before sea salt, jasmine and linen crash down on the rocks by the pier. Cedar, violet, light musk, powder and sandalwood mist over you and settle in to the sand. Let's go.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "TZOHZIEGV5KR4QNTQGE5LEYM",
        "sku": "289411R",
        "unitsSold": 9,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_driftwood_and_cotton.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "YLFZGAUM36MQ2ZMUNC267D4W",
        "sku": "N137702",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Driftwood_Cotton.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "XA4LGEU5Z3WH4LENLEZOFMIB",
        "sku": "C523568",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_driftwood_cotton.jpg?v=1778004495",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_driftwood_cotton_seaside.jpg?v=1778004489"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "MKFCQFEYQTGLTLLSNEIENH3U",
        "sku": "T008160",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_driftwood_and_cotton_seaside.jpg?v=1753984803",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_driftwood_and_cotton.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "QEY4L2GDAHICCCLBKI64DT72",
        "sku": "1261513",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "Earth & Air",
    "handle": "earth-and-air",
    "unitsSold": 15,
    "tags": [
      "Citrus / Berry",
      "Clean / Ozonic",
      "Earthy",
      "Floral",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Citrus, Ozone, Coriander, Amyris & Cedar",
    "description": "Earth and Air signs unite in this elemental collision. Citrus, ozone and coriander commingle on the top of this heavenly scent while sea salt, jasmine and amyris make their presence known throughout the burn. Cedar, violet, light musk, dark musk and sandalwood linger at the end. Taurus / Virgo / Capricorn / Gemini / Libra / Aquarius",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "GIZFURXZRQRV5SZWR4EZ43TJ",
        "sku": "K821183",
        "unitsSold": 8,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_earth_and_air.jpg?v=1778004451"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "C6SQAMRNHGCF5RFA36MKRXWN",
        "sku": "7492934",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Earth_Air.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "C5A6EPWULOPGHIPQWFEL2GBH",
        "sku": "6907186",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_earth_air.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "TR62VE6YIYWVKBNUCDK6LQQB",
        "sku": "L202907",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_earth_and_air.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "QHZWCJROLY7FBT5GX2QYOLQP",
        "sku": "5659889",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Edgewood Manor",
    "handle": "edgewood-manor",
    "unitsSold": 11,
    "tags": [
      "Earthy",
      "fall",
      "spring",
      "summer",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Redwood, Pine, Cedar & Fresh Firewood",
    "description": "Our signature fragrance fills our hearts and our humble home. Delicate top notes of pine sprigs and fresh cut firewood spring forward to welcome you in while redwood and cedar greet you with warm salutations as the aura blooms. Tonka bean and the slightest hint of vanilla round out this woodsy bouquet as we settle in. Welcome home.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "CYVY3ALQJHODWLVHPWMEF74N",
        "sku": "R947008",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_edgewood_manor.jpg?v=1778004431"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "NNYMZDOJRHAFXBX6QOMZ5H7X",
        "sku": "H661653",
        "unitsSold": 2,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "YPZ4DJFGNJSMBH3OUEQAK4J3",
        "sku": "V555603",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_edgewood_manor.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "G3KX7EGM7A5EBIGSSNZOIF5W",
        "sku": "Z014377",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_edgewood_manor.jpg?v=1778004564"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "PACVCBXEQ25FAJL23KEQPX5H",
        "sku": "7023779",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Eucalyptus & Jade",
    "handle": "eucalyptus-and-jade",
    "unitsSold": 9,
    "tags": [
      "best seller",
      "Clean / Ozonic",
      "Earthy",
      "Floral",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Eucalyptus, Peppermint, Agave & Amber",
    "description": "Capture the complex and clean vibe of this handcrafted apothecary item. Top notes of aloe, peppermint, eucalyptus and ozone are your first take on open. Middle notes of green leaves, cedar, sandalwood and patchouli activate while the flame burns bright. And, at the end– patchouli, musks, and amber finish the scent beautifully.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "4QKVT5VTNZVYUCYITLSEBZP7",
        "sku": "8056656",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_euclyptus_and_jade.jpg?v=1778004415"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "B26IPGTZUJIB2W7KVDXQRU7I",
        "sku": "3922821",
        "unitsSold": 0,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "AMWTZNBQROL3BB2IU3YKODF4",
        "sku": "2611053",
        "unitsSold": 2,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "4PTTG3CH6YWBWUBIXVZH5JP4",
        "sku": "K215620",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_eucalyptus_and_jade.jpg?v=1778004547"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "OBMS6Z6ZGZX6KKQ5KB7Z6NTM",
        "sku": "760493S",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/48_eucalyptus_jade2.jpg?v=1778004542"
        ]
      }
    ]
  },
  {
    "scent": "Evergreen",
    "handle": "evergreen",
    "unitsSold": 24,
    "tags": [
      "Citrus / Berry",
      "Earthy",
      "fall",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Sage, Pine, Juniper & Rosemary",
    "description": "Re-energize and purify your space with this mystic scent. Pine, citrus, ozone and camphor burn bright on top as you begin the cleanse. Rosemary, green floral, pine and cherry blossom work quickly to expel negative energies while cedar, sage and juniper settle in to reinvigorate your domain with positive energies.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "TNEN45XL5GH4YR2WA6ZMLXOA",
        "sku": "3368595",
        "unitsSold": 8,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "F6NUZNU4AKR7QRJNLFRNTVD5",
        "sku": "H523993",
        "unitsSold": 1,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "D2MIJDKBZJW4G7VEG6XW3KQ7",
        "sku": "806606D",
        "unitsSold": 10,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "75GRDQBS4PXDFMF3VKSO7PYJ",
        "sku": "119494Q",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_ever_green.jpg?v=1753914670"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "INTA5E45INFUTPWQJAEN7JUY",
        "sku": "719560E",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Farmhouse Kitchen",
    "handle": "farmhouse-kitchen",
    "unitsSold": 20,
    "tags": [
      "fall",
      "Gourmand",
      "winter"
    ],
    "notes": "Maple Syrup, Butter & Baked Treats",
    "description": "The smells of the homestead are alive in this down home fragrance. The scent starts with notes of butter and orange peel, then blends in harmoniously complex notes of caramel, maple, buttercream and cake. A familiar, pecan aroma lingers in the air and smells just like home. This gourmand fragrance will fill any space with the comforting aromas of family and tradition.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "2UYLZOQTVHAZRXNXYWV52ICW",
        "sku": "784472M",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_farmhouse_kitchen.jpg?v=1778004454",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_4_Image_0007.jpg?v=1778002880"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "M37GTF3LTBOCJLVEX747FJGT",
        "sku": "Z033770",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Farmhouse_Kitchen.jpg?v=1778004465",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_4_Image_0007.jpg?v=1778002880"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "6PUDNRKNGNRCL2HH44UX5PPP",
        "sku": "772729F",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_farmhouse_kitchen.jpg?v=1778004495",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_4_Image_0007.jpg?v=1778002880"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "HNN6AQDHE3TUPXR65TBMSKVR",
        "sku": "Z117749",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_farmhouse_kitchen.jpg?v=1778004579",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_4_Image_0007.jpg?v=1778002880"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "HP24LLE5JHXXFAGBYJKRD7C2",
        "sku": "5801678",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_4_Image_0007.jpg?v=1778002880"
        ]
      }
    ]
  },
  {
    "scent": "Fig & Ginger",
    "handle": "fig-and-ginger",
    "unitsSold": 14,
    "tags": [
      "Gourmand",
      "Woody / Evergreen"
    ],
    "notes": "Fig, Ginger, Cinnamon, Clove & Ozone",
    "description": "Look no further for a classically spiced fig that will enchant you. On open, top notes of ginger and ozone will tickle your fancy. At burn time– middle notes of cinnamon, almond, nutmeg, clove and fig come together seamlessly to create this amazing aura. When the light dims, notes of wood, molasses and sugar will last long after extinguish. Let’s dance.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "XRINVW53LLNLWX4VWO3DRVTQ",
        "sku": "788672H",
        "unitsSold": 8,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "MLEYNELTZRRQU7OEJW6GWG2V",
        "sku": "X774356",
        "unitsSold": 0,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "5UPTMWDYTA7HTT45X7VN7VB5",
        "sku": "449075G",
        "unitsSold": 2,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "BTDZQH6T5UV3CQSAKS6V4X3Y",
        "sku": "S518175",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_fig_and_ginger.jpg?v=1778004547"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "U5ZYXLS6GJWU6SB4OZBPBGOJ",
        "sku": "127871K",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "Fire & Water",
    "handle": "fire-and-water",
    "unitsSold": 8,
    "tags": [
      "Citrus / Berry",
      "Earthy",
      "fall",
      "Floral",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Lily of the Valley, Rose, Smoke, & Clove",
    "description": "Fire and Water signs unite in this elemental collision. Saffron, lemon peel and bergamot commingle on the top of this heavenly scent while lily of the valley, rose, sandalwood and cedar make their presence known throughout the burn. Ozone, amber, smoke, dark musk and vetiver linger at the end. Aries / Leo / Sagittarius / Cancer / Pisces / Scorpio",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "KORZA2EMS6R4OSV7YUJLULOP",
        "sku": "H278769",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_fire_and_water.jpg?v=1778004454"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "H5TZAHXZXHN5WJXKPA3WODIT",
        "sku": "967527N",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Fire_Water.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "TLPDAJCYCXALAW4PHNEGTJ5I",
        "sku": "V050083",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_fire_water.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "IXKI23ADMSJOUWVFALSOCDXE",
        "sku": "660407M",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_fire_and_water.jpg?v=1778004578"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "MMKGB2KHTVWMFLXBBCRC5CXM",
        "sku": "429908M",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "First Avenue",
    "handle": "first-avenue",
    "unitsSold": 14,
    "tags": [
      "best seller",
      "Earthy",
      "Floral",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Lavender, Powder, Patchouli & Light Musk",
    "description": "A fresh bouquet of citrus introduces an iconic floral duo in this exciting scent fit for a prince. Citrus, bergamot and ozone take lead in this fresh foil while patchouli and leather accentuate the lavender and jasmine notes at the heart. Cedar, powder, amber and dark musk kiss the floral and citrus notes at the end. Let's go crazy.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "NR53KHZ27HJD5C5FH4Q4PIEU",
        "sku": "954030C",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_first_avenue.jpg?v=1778004454"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "EGUV7XTMJEDQYSSZOQYD6TNS",
        "sku": "929663G",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_First_Avenue.jpg?v=1778004464"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "ENPENSSVY47WLX3GXR3UKZZ4",
        "sku": "P953039",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_first_avenue.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "EAV3TPPIDP6DSUI6TNT5IJWV",
        "sku": "F040666",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_first_avenue.jpg?v=1778002886"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "KQ3SP22RR56CUEHGV36C76IT",
        "sku": "1400585",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "Frosty Night",
    "handle": "frosty-night",
    "unitsSold": 285,
    "tags": [
      "best seller",
      "Clean / Ozonic",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Frasier Fir",
    "description": "The winter chill is in the air tonight—warm up with this favorite woodsy scent. Bright citrus top notes blend with earthy undertones and a fresh fir balsam core. Cozy and comforting, it’s perfect for holiday ambience or peaceful winter evenings by the fire.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "372MZV77C2FZJWQVLMN2LDRQ",
        "sku": "2942278",
        "unitsSold": 55,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_frosty_night.jpg?v=1778004452",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/frostynight.jpg?v=1778002888"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "FXSZQE6VYX7DV2M6D7QGABQU",
        "sku": "E760674",
        "unitsSold": 64,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Frosty_Night.jpg?v=1778004465",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/frostynight.jpg?v=1778002888"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "CCQXHBLCDF3HJ23DWJ4YQU5A",
        "sku": "Z631294",
        "unitsSold": 56,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_frosty_night.jpg?v=1778004495",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/frostynight.jpg?v=1778002888"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "34WKPOJ7F72CP7H3WQYZP6C7",
        "sku": "793402K",
        "unitsSold": 98,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_Frosty_Night-Camera_2.png?v=1778004586",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_frosty_night.jpg?v=1778004579",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/frostynight.jpg?v=1778002888"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "MIZA6D7N6LA47JG4O2YIJKZ7",
        "sku": "731865F",
        "unitsSold": 12,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/frostynight.jpg?v=1778002888"
        ]
      }
    ]
  },
  {
    "scent": "Hallowed",
    "handle": "hallowed",
    "unitsSold": 32,
    "tags": [
      "fall",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Cinnamon Bark, Vanilla Bean & Hint of Fire",
    "description": "Embark on a spellbinding journey with this captivating fragrance. Cinnamon bark, linen, and saffron enchant at first light, while sandalwood and clove weave a mysterious heart. A lingering base of wood, vanilla, and a whisper of smoke completes the magic.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "PLE7NJAZFYHOYRG2HDONU6RL",
        "sku": "280608C",
        "unitsSold": 9,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14ozHallowed-Camera2.png?v=1778008225"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "744OSVNAANF7GHO5KY5S3BWR",
        "sku": "410651Z",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14ozHallowed-Camera2.png?v=1778008225"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "2HS4AVEES7LJYERBPXCKHJ2R",
        "sku": "M611819",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14ozHallowed-Camera2.png?v=1778008225"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "5P4EQLP4SXSCG3VVKG22W2PH",
        "sku": "6772571",
        "unitsSold": 13,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14ozHallowed-Camera2.png?v=1778008225"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "HBHJER7I6OLBVMQPVHYJERNO",
        "sku": "6588872",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14ozHallowed-Camera2.png?v=1778008225"
        ]
      }
    ]
  },
  {
    "scent": "Hanzel & Gretyl",
    "handle": "hanzel-gretyl",
    "unitsSold": 11,
    "tags": [
      "fall",
      "Gourmand",
      "winter"
    ],
    "notes": "Gingerbread",
    "description": "Legend has it, all who light this candle will be swept into the warm embrace of ginger and nostalgic holiday spices. Cinnamon, nutmeg, and clove dance at the heart, with a hint of almond for an unexpected twist. Rich molasses and sweet sugar wrap the blend in irresistible warmth—no oven required.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "MQXIMDGJQAK3LMXDTQRPCZGH",
        "sku": "W138740",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_hanzel_and_gretyl.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "4KU6PV6LXBLWOUS5A2UVKIQT",
        "sku": "5020419",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Hanzel_Gretyl.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "7XJXNZZ64UPBLJPW55KJTWJ4",
        "sku": "863677H",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_hanzel_gretyl.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "GAFFWQADIV5NCMUXJZBQP3HE",
        "sku": "1801727",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_hanzel_and_gretyl.jpg?v=1778004580"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "TDHT22P7T4IGDN6C6XL4S6RT",
        "sku": "P485205",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Harvest Table",
    "handle": "harvest-table",
    "unitsSold": 10,
    "tags": [
      "Citrus / Berry",
      "fall",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Green Leaves, Apples, Berries and Sandalwood",
    "description": "Wrap yourself in the smell of autumn air with this warm, inviting fragrance. Cinnamon, citrus, and chrysanthemum open the scent, followed by apple, vanilla, berries, and green leaves. A grounding finish of patchouli, cedarwood, vetiver, and sandalwood lingers long after the flame goes out.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "EHFJ4MQ6XLX4NNUOVKF4B5AG",
        "sku": "8426139",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_harvest_table.jpg?v=1778004452"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "GY23ACHSB7ZMSLQ5PCQBQEW5",
        "sku": "7318061",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Harvest_Table.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "VTXYNCMQIHVH6JBUIT5FKLNZ",
        "sku": "8483404",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_harvest_table.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "LF5WKZ42LPFPZKABULNWB3BX",
        "sku": "T544223",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_harvest_table.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "7OSMLROJGZMRIJ7O5UVUTGGI",
        "sku": "939394D",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Haunting",
    "handle": "haunting",
    "unitsSold": 29,
    "tags": [
      "Earthy",
      "fall",
      "Woody / Evergreen"
    ],
    "notes": "Mahogany, Teak-wood, Cedar & Smoke",
    "description": "Your soul will be etched with this enchanting blend evermore. Almond, leather, and mahogany open the scent, while coconut, teak-wood, and tobacco leaves smolder in the heart. Cedar, white musk, wood, and patchouli linger in the afterlife.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "N2YW4GASIBHVKJEZWLI3RM2X",
        "sku": "1521587",
        "unitsSold": 13,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_haunting.jpg?v=1778004413"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "OBTROK7VMRWR4EL4SWR4GVBF",
        "sku": "B466967",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Haunting.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "H6U337PE3B6R3NPTINGWI5SB",
        "sku": "464869Y",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_haunting.jpg?v=1778004482"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "5VR5RZ2PJVYQX7XKBNXC7RRD",
        "sku": "468536V",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_haunting.jpg?v=1778004543",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_Haunting2-Camera_2.png?v=1778004585"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "Y4ZOVGVAIEC2YIGMHAAP5ELV",
        "sku": "K206268",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/48_haunting3.jpg?v=1778004541"
        ]
      }
    ]
  },
  {
    "scent": "Hearth & Home",
    "handle": "hearth-and-home",
    "unitsSold": 32,
    "tags": [
      "fall",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "White Pumpkin, Clove, Vanilla & Patchouli",
    "description": "A comforting blend of fresh pine and rich cedar, wrapped in warm cinnamon and clove. Brings the cozy feeling of gathering around the fire into any space.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "DSUGQJDONSQCKRGBDH4SANLZ",
        "sku": "654600N",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_hearth_and_home.jpg?v=1778004452"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "KYXQYZA3O2DGR4FZYDQDQKJU",
        "sku": "K798032",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Hearth_Home.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "SUSNPT5R65NKGHY66LXDWM75",
        "sku": "495665W",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_hearth_home.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "SRWHY63QKIWWKUPHW66FG4IQ",
        "sku": "261861W",
        "unitsSold": 15,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_hearth_and_home.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "POHTS3TLB6VSZPKWDCNTFDDJ",
        "sku": "681477Z",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Heirloom",
    "handle": "heirloom",
    "unitsSold": 21,
    "tags": [
      "Earthy",
      "Floral",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Lavender, Bergamot, Tonka Bean & Oud",
    "description": "Imagine sun drenched summers in the meadow reminiscent of shifting lavender in the breeze. Top notes of bergamot, citrus, amaretto and powder are your first impressions while lavender, balsam and tonka bean are the heart of this classic floral. At the end– cedar, powder, eucalyptus and oud truly capture the feeling of an heirloom.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "PWTUWAMCAJYMD6EFOPFW4DJT",
        "sku": "G956042",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_heirloom.jpg?v=1778004454"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "3FA3BN5DGBFNAWFGMLETCTY6",
        "sku": "6991371",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Heirloom.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "OVQEPY66O3XZBCDW3HRNSBJ5",
        "sku": "7907899",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_heirloom.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "AO24HISLJNNZOQSGBNF6NIMG",
        "sku": "824637X",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_heirloom.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "XP4BLIK2QD4NOLE33CZYITYQ",
        "sku": "8805612",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Holiday Traditions",
    "handle": "holiday-traditions",
    "unitsSold": 15,
    "tags": [
      "Citrus / Berry",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Orange, Cranberry, Cinnamon & White Cake",
    "description": "",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": null,
        "sku": null,
        "unitsSold": 0,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "56JLS6LM35LHT26WXHLPXFGN",
        "sku": "7451677",
        "unitsSold": 1,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "K4RIFUS7AR63X4DCANA6RJ23",
        "sku": "220153P",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "LY72C67BFRMVYTUFMCGUHUOY",
        "sku": "X705018",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "AXKV4VUEAXXTYBGCR4FATTQV",
        "sku": "R005926",
        "unitsSold": 2,
        "images": []
      }
    ]
  },
  {
    "scent": "Houndstooth",
    "handle": "houndstooth",
    "unitsSold": 17,
    "tags": [
      "Citrus / Berry",
      "fall",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Ozone, Vetiver, Clove, Cedar, Lavender and Vanilla",
    "description": "Tally-Ho! Bouquets of ozone and camphor with traces of pineapple, nutmeg and cinnamon evoke feelings of a well appointed English manor. Lavender, bamboo and clove collide in the middle to accentuate its understated elegance. Flourishes of cedar, amber, dark musk, vetiver and vanilla float about in the settling. Don your tweed, mount up and make ready for the hunt.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "S5277653TXSLQT22DZH4NH3F",
        "sku": "V224898",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_houndstooth.jpg?v=1778004452"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "PPRJTEVOHNWZUMKQJYUGJRWC",
        "sku": "548332J",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Houndstooth.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "6XMFBVVTQDFDJRXPJ2LW7JAC",
        "sku": "4698814",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_houndstooth.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "I52LFO62HYMOIRW4XFIYPCAO",
        "sku": "S443510",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_houndstooth.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "IEVJ5WE4GT2QFSDYDZOKM2AB",
        "sku": "K595422",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Iced Pine",
    "handle": "iced-pine",
    "unitsSold": 49,
    "tags": [
      "Citrus / Berry",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Evergreen, Fir, Cedar & Vanilla.",
    "description": "This crisp fragrance begins with cypress, lemon peel, and linen for a frozen breeze. It moves into a heart of evergreen and cedar, deepened by smoky jasmine and a hint of amaretto. At the end, fir balsam and moss accentuate the woods, while vanilla and praline soften the sharp needles for an enchanting finish. Cozy, comforting, and perfect for a snowy night. Stay frosty.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "5OPLY5QGCM7YL77V7KODUCS2",
        "sku": "7708274",
        "unitsSold": 24,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "KLM76CP33CNYBY4X6JSAU6JA",
        "sku": "X132802",
        "unitsSold": 4,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "WD7VL7EUZJ2UONWWNOVRXXR7",
        "sku": "6887969",
        "unitsSold": 9,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "JDHILEZ6DYGJCOXICQE2UIVA",
        "sku": "5590485",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14oz_Iced_Pine-Camera_2.png?v=1778007707"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "SVFLFZFIEKJBOFDJHEJVW4I7",
        "sku": "6495646",
        "unitsSold": 2,
        "images": []
      }
    ]
  },
  {
    "scent": "Indigo Blue",
    "handle": "indigo-blue",
    "unitsSold": 7,
    "tags": [
      "Earthy",
      "fall",
      "Floral",
      "spring",
      "summer",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Lavender, Cedar, Sandalwood & Incense",
    "description": "This alluring foil wafts over the bluest of seas as flames flicker in the salty night. Lavender drifts through the air, soft against the crackle of burning cedar and the wispy curl of incense. Saffron lingers on the breeze, warm and golden, as the crew mates huddle close, swapping tales of lost treasure. The ocean is endless, the fire burns low, and adventure waits on the horizon.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "MN74BFIONNYE23TJ6VC5WBA5",
        "sku": "J505755",
        "unitsSold": 2,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "CZJNZNEXORIICICE75KL6N5I",
        "sku": "8441178",
        "unitsSold": 1,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "L3NVQR3QN4BSUTLNJA63AOIT",
        "sku": "764932b",
        "unitsSold": 1,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "FLMS2OX2GOIM7B66VV5AEIHJ",
        "sku": "122743C",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_indigo_blue.jpg?v=1778004548"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "SOMO4RGZQ7D4N475NTQFXKE5",
        "sku": "F731157",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "Jack O'Lantern",
    "handle": "jack-o-lantern",
    "unitsSold": 67,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "fall",
      "Gourmand",
      "winter"
    ],
    "notes": "",
    "description": "The All Hallows Eve celebration is underway with this enchanting fragrance. The scent starts with notes of butter and orange peel, then blends in accords of scrumptious caramel, maple, and pumpkin. A nutty, pecan aroma lingers on the dry down. This gourmand fragrance will fill any space with the delicious scents of the season.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "IVJ2YCD7NLXGBOPS6BYAINIY",
        "sku": "7897641",
        "unitsSold": 25,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_jack_o_lantern.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "ONULQ2IPXZUBMU2NMMA374CU",
        "sku": "M523062",
        "unitsSold": 12,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "6U2ON5N7NUALEJBIRJXYWNCS",
        "sku": "467053V",
        "unitsSold": 8,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "JJTXW3QU2JWQDBNCR32Y7TWB",
        "sku": "D512336",
        "unitsSold": 20,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_jack-o-lantern_2.png?v=1753990932",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_jack_o_lantern.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "IIQK5H2PUHBCUHZPESTJN5JM",
        "sku": "E890374",
        "unitsSold": 2,
        "images": []
      }
    ]
  },
  {
    "scent": "Lavender Locks",
    "handle": "lavender-locks",
    "unitsSold": 36,
    "tags": [
      "best seller",
      "Earthy",
      "Floral",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Lavender, Violet, Cardamom, Powder, & Wood",
    "description": "Classic scents meet a unique blend of wood and spice to create an outstanding floral foil. Fresh notes of citrus, bergamot and cardamom open up this fragrance while lavender and violet make a statement in the middle. Cedar, eucalyptus, powder and wood soften the floral notes for an absolutely stunning take on a floral blend.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "3VFYB5NPD7OBD6MVFNKTO63E",
        "sku": "5082568",
        "unitsSold": 17,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_lavender_locks.jpg?v=1778004452"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "C6RXIXVQNJ2HXETHAJ7BQ4X3",
        "sku": "835991E",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Lavender_Locks.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "ZIRZ4AOCIZRRCA4MOOTNC3JU",
        "sku": "721263E",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_lavender_locks.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "XEFFH5FTLZGSIRMG6HPJV3PI",
        "sku": "W755804",
        "unitsSold": 12,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_lavender_locks.jpg?v=1778004580"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "UQBQIADFZTXLPMTD25HBWOZW",
        "sku": "C028743",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "Lemon Chai",
    "handle": "lemon-chai",
    "unitsSold": 51,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Earthy",
      "Gourmand",
      "spring",
      "summer"
    ],
    "notes": "Lemon, Sugar, Bergamot, Ginger & White Tea",
    "description": "A coffee house favorite, this lemon forward tea does not disappoint. Lemon peel, sugar and mandarin serve up dreamy citrus notes straight away. In the middle, lemongrass, lemon verbena, bergamot and ginger stay true to the opening notes and benzoin, light musk, white tea and jasmine are featured for the duration.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "T5TY5BARWAKD47PGX5KQ7TAI",
        "sku": "548186N",
        "unitsSold": 15,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_lemon_chai.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "7N4FGDIHI3DADCIBZFOVP5XK",
        "sku": "L827297",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Lemon_Chai.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "L6WTE52QTXHEMKRBB2S2RP5Y",
        "sku": "5964418",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_lemon_chai.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "SQWIFEDRCOJRUQD4X2AU2MGP",
        "sku": "996140P",
        "unitsSold": 15,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_lemon_chai.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "SHGTD3FMR3MGC7F5GXYKTE27",
        "sku": "3270162",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "Lilac Bloom",
    "handle": "lilac-bloom",
    "unitsSold": 36,
    "tags": [
      "best seller",
      "Clean / Ozonic",
      "Earthy",
      "Floral",
      "spring",
      "Woody / Evergreen"
    ],
    "notes": "Lilac, Honeysuckle, Powder, Amyris",
    "description": "A whisper of spring, fresh and new. Let nature’s charm sweep over you with the crisp touch of green leaves to awaken the senses. As the flame flickers, delicate blooms of lilac, lily of the valley, and honeysuckle dance through the air, weaving a dreamy floral spell. When the glow fades, soft notes of powder and warm amyris linger like a gentle breeze. Purely enchanting.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "TMCCQHTXJZGQWXGEPZ2FM7TI",
        "sku": "296219P",
        "unitsSold": 14,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "MA546OXCMMD2OO5ID3N5CGID",
        "sku": "R249073",
        "unitsSold": 0,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "LEMZYFBNWX3TZRGMY2VWPONK",
        "sku": "799253J",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "AV5ZSPSMWRUZ7VAJKIZZUNOQ",
        "sku": "9863931",
        "unitsSold": 14,
        "images": []
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "QSUIKS2VCVP526PP4TE5AESD",
        "sku": "M108946",
        "unitsSold": 2,
        "images": []
      }
    ]
  },
  {
    "scent": "Love Letter",
    "handle": "love-letter",
    "unitsSold": 23,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Clean / Ozonic",
      "Gourmand",
      "spring"
    ],
    "notes": "Lemon Peel, Green Leaves, Ozone & Wood",
    "description": "Confessions of love, this fresh foil will bring you to rapture. Lemon peel, ozone and freesia whisper sweet nothings while cherry blossom, green leaves and lemon verbena burn brightly. Benzoin, light musk and wood soften the citrus notes for a harmonious pairing. Get ready to swoon. Each sold separately.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "GUQOOGOF6FZLV3KWAN6BBSEB",
        "sku": "L097285",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/3oz_Love_Letter.png?v=1753934967"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "B5HLH5Q23NSI3GZUBDOP7PVG",
        "sku": "9626128",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Love_Letter.png?v=1753934974"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "2MH2O6JBIB5LLYNFHYIEKBQG",
        "sku": "715826Z",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/8_Love_Letter.jpg?v=1778006490",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_Love_Letter.png?v=1753934989"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "B7P4EUUC2DNYHSZQB6LM6PXE",
        "sku": "K445360",
        "unitsSold": 8,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_Love_Letter.jpg?v=1778006490"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "3ABNS2HBJA6TFKGYPHIFG37C",
        "sku": "442769L",
        "unitsSold": 2,
        "images": []
      }
    ]
  },
  {
    "scent": "Low Tide",
    "handle": "low-tide",
    "unitsSold": 18,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Clean / Ozonic",
      "Earthy",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Rose, Lime, Lemon Verbena, Ozone & Coconut",
    "description": "Down by the sea strolling the boardwalk, green leaves, mandarin and lime rush in while lily of the valley, rose and lemon verbena quell the waves. Sandalwood, ozone, coconut and wood soften the citrus and floral notes for a well-balanced oceanic fragrance. Have some fun. Green Leaves, Mandarin, Lime Lily of the Valley,",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "J5OVB55W4ZA6EZCP36GKONE6",
        "sku": "564321S",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_low_tide.jpg?v=1778004452"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "HX6UOPE44HKL6DRUJATGP5LT",
        "sku": "826492X",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Low_Tide.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "WBCXY5CGOT4ZKOCIRDT7VFBR",
        "sku": "H260043",
        "unitsSold": 8,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_low_tide.jpg?v=1778004495",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_low_tide_seaside.jpg?v=1778004487"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "KKTQAKV2XLG6YG4HV2IZZW66",
        "sku": "269184K",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_low_tide.jpg?v=1778004580",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_low_tide_seaside.jpg?v=1778004568"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "IS72O3XMLKLANQASZHWRUNI6",
        "sku": "2491105",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Magnolia & Rose",
    "handle": "magnolia-and-rose",
    "unitsSold": 12,
    "tags": [
      "Floral",
      "spring",
      "Woody / Evergreen"
    ],
    "notes": "Magnolia, Cherry Blossom, Rose & Sandalwood",
    "description": "The bloom of beautiful white magnolia flowers are the mark of Spring. Top notes of magnolia, cherry blossom and ozone abound while the heart beats with cherry and rose. Sandalwood and tonka bean round out this ever aural floral.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "OZWZHA6FFANL2P52RIROV43D",
        "sku": "605931W",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_magnolia_and_rose.jpg?v=1778004451"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "5EHKDTS4KXMDNTI4HBXNU4Y4",
        "sku": "5420624",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Magnolia_Rose.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "AU7LPQXBXQPYFT47JXFVZMH5",
        "sku": "9042134",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_magnolia_rose.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "KK7PHVWZGE345VDXJRZSZAPN",
        "sku": "S533700",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_magnolia_and_rose.jpg?v=1778004580"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "E6CJLHKICYMDFIKINBV7TNSP",
        "sku": "337208G",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Mango Road",
    "handle": "mango-road",
    "unitsSold": 34,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Earthy",
      "fall",
      "Gourmand",
      "spring",
      "summer",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Orange, Pine, Mango & Cedarwood",
    "description": "A tropical escape in a candle—ripe mango and papaya meet zesty citrus for a scent that’s bursting with sunshine.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "6LOUZKDDYH7PAJFKJRXXPKEF",
        "sku": "Y861562",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_mango_road.jpg?v=1778004452"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "4KQ474IN4O6YL7STA5RYEAEW",
        "sku": "8626728",
        "unitsSold": 9,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Mango_Road.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "QQM2GFKSVGZX4UMCPVH6JJUQ",
        "sku": "S022383",
        "unitsSold": 9,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_mango_road.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "6LXAH3H5PWOXMXWTSJYHBH7O",
        "sku": "253595J",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_mango_road.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "OMES7UIHCSKIWSYAJQUTA6A2",
        "sku": "T244374",
        "unitsSold": 4,
        "images": []
      }
    ]
  },
  {
    "scent": "Mistletoe Kisses",
    "handle": "mistletoe-kisses",
    "unitsSold": 31,
    "tags": [
      "best seller",
      "Earthy",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Mistletoe",
    "description": "Fall in love under the mistletoe. This perfectly woodsy holiday fragrance will find itself enjoyed any time of the year by wood scent lovers. On the top are invigorating eucalyptus and camphor notes, while middle notes dance with pine and fir and are reinforced by a touch of spiced clove. Cedarwood and patchouli at the bottom stay long after with this cheery scent.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "UUNBOJFIKGM2QY2L6JBWAVDU",
        "sku": "945659P",
        "unitsSold": 13,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_mistletoe_kisses.jpg?v=1778004454"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "PBSMQX34IGAGONRZZNNWTBMX",
        "sku": "446314K",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Mistletoe_Kisses.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "KZHAUICU6CNNUS4S4GB24UYK",
        "sku": "6635891",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_mistletoe_kisses.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "24AOV27665OJBYOA74O2BPSP",
        "sku": "Y744826",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_mistletoe_kisses.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "VCTRF4UZMDFPJEJDJV6ZP3MN",
        "sku": "V051761",
        "unitsSold": 2,
        "images": []
      }
    ]
  },
  {
    "scent": "Mount Rainier",
    "handle": "mount-rainier",
    "unitsSold": 16,
    "tags": [
      "Clean / Ozonic",
      "Earthy",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Ozone, Cedar, Juniper, Bourbon & Vanilla",
    "description": "Inspired by the mountain air, this fragrance combines crisp pine and ozone with bright citrus and earthy moss. A grounding base of cedar and light musk completes this invigorating scent.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "I5PL3WQA6MBIC4GXHIWCRK2T",
        "sku": "857324Y",
        "unitsSold": 3,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "SPEQHGC5HJKG6VORJM5CKXTP",
        "sku": "X311903",
        "unitsSold": 3,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "762CP7VLMES7IWEV73XR5F6L",
        "sku": "178458G",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "MDYHUVA7UMN2OVVSIE525RL5",
        "sku": "967448Q",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_mount_rainier.jpg?v=1778004548"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "5REIK4ZPKSJVCPSUP3VGK76V",
        "sku": "9148864",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Noir Blanc",
    "handle": "noir-blanc",
    "unitsSold": 17,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Earthy",
      "Floral",
      "Gourmand",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Champagne, Peach, Amber & Dark Musk",
    "description": "A bold yet balanced blend of bright bergamot, bubbly champagne, smooth musk, earthy patchouli, and warm amber. Perfect for creating a refined, contemporary atmosphere in any space.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "5FJDQ22BTKGWEPJ4MCIG7JZY",
        "sku": "W942308",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_noir_blanc.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "5VJBKYV3M224BV3KJCOEQLBA",
        "sku": "5114514",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Noir_Blanc.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "N2NYVFRXAN2XAJMSDCYNHOBX",
        "sku": "5911126",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_noir_blanc.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "34EI3QB3YGZKGY4S65HP2OH3",
        "sku": "M007771",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_noir_blanc.jpg?v=1778004578"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "P5Q73LOGM5W2WV6DMZJC6M7X",
        "sku": "6366935",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Oak & Moss",
    "handle": "oak-and-moss",
    "unitsSold": 35,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Clean / Ozonic",
      "Earthy",
      "fall",
      "spring",
      "summer",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Oak, Pineapple, Marine, Bourbon & Moss",
    "description": "Take a magical walk through the whispering trees as the foils of fresh aloe and salt-kissed air guide you down a winding path. Deeper in, oak, moss and lavender twine through the forest, their warmth drawing you closer. Then—golden light spills from a cottage window, where smoky cedar and sweet vanilla dance through the night. Come into the warmth of the light.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "MGMZELVO3MGQ7HPCX25LDLGE",
        "sku": "1094911",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/oak_moss.jpg?v=1778002942"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "5L43ZQQI65XWLFT47NVD47JV",
        "sku": "B765003",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/oak_moss.jpg?v=1778002942"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "KFFY3H7IWGXHBN7CMMSQFI4U",
        "sku": "354227S",
        "unitsSold": 10,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/oak_moss.jpg?v=1778002942"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "2BEAOO7I47AKJ5MGOV4MJZQF",
        "sku": "8002035",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_oak_and_moss.jpg?v=1778004547",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/oak_moss.jpg?v=1778002942"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "TPQLAYP2RJZ27KU6QZAZHQ6Y",
        "sku": "9550170",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/oak_moss.jpg?v=1778002942"
        ]
      }
    ]
  },
  {
    "scent": "Palo Santo & Patchouli",
    "handle": "palo-santo-and-patchouli",
    "unitsSold": 32,
    "tags": [
      "Citrus / Berry",
      "Earthy",
      "fall",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Palo Santo, Patchouli, Cardamom & Wood",
    "description": "A rich, earthy blend of sacred palo santo and warm patchouli, balanced by smooth sandalwood and a hint of clove. Creates a grounding, meditative atmosphere for your space.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "C7KS4MQLJUISH2KP4W2W4S4C",
        "sku": "Z945163",
        "unitsSold": 14,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "A3AODVMPOJNMDXGSMXRRISZL",
        "sku": "V572050",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "ZNQ765M54NFJB326PGKMVE65",
        "sku": "443808G",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/8_Palo_Santo_Patchouli.jpg?v=1778006490"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "QKWFWRF2XBSXTVY3775M5FT5",
        "sku": "811630S",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_Palo_Santo_Patchouli.jpg?v=1778006490"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "CMG6LZUZFXRX6SNP5XLUGCBG",
        "sku": "447970L",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Peppermint Trail",
    "handle": "peppermint-trail",
    "unitsSold": 9,
    "tags": [
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Peppermint, Eucalyptus, Buttercream, Cake & Vanilla",
    "description": "A crisp and invigorating holiday blend of cool peppermint and fresh eucalyptus. Spicy clove adds warmth, while creamy vanilla rounds out this festive, candy cane–inspired scent.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "E42HEO7ZSMNPWMDDKL4ZPH7C",
        "sku": "9441092",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_peppermint_trail.jpg?v=1778004454",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_7_Image_0009.jpg?v=1778002946"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "D73V5KIWC2PTZG5CQO3JTFFU",
        "sku": "Q926341",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Peppermint_Trail.jpg?v=1778004465",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_7_Image_0009.jpg?v=1778002946"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "66TNLDSXU4SBOG55SH4HPPCD",
        "sku": "811697S",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_peppermint_trail.jpg?v=1778004495",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_7_Image_0009.jpg?v=1778002946"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "G7B53FFUKUU4WDYYC423TSQ3",
        "sku": "322941M",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_peppermint_trail.jpg?v=1778004579",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_7_Image_0009.jpg?v=1778002946"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "PMR5HRWE2ZY3D4TPQ4N77ENE",
        "sku": "N317252",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_7_Image_0009.jpg?v=1778002946"
        ]
      }
    ]
  },
  {
    "scent": "Pumpkin Chai",
    "handle": "pumpkin-chai",
    "unitsSold": 9,
    "tags": [
      "Citrus / Berry",
      "Earthy",
      "fall",
      "Gourmand"
    ],
    "notes": "White Pumpkin, Chai Tea & Warm Spices",
    "description": "A warm and inviting autumn blend of spiced pumpkin, sweet vanilla, and creamy chai. Cinnamon and nutmeg swirl together for a fragrance that feels like a cozy fall afternoon in a cup.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "6LHJNNKVNKVARQRV32XGVBCT",
        "sku": "132245D",
        "unitsSold": 4,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": null,
        "sku": null,
        "unitsSold": 0,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "PRFNB57M7I4SQ27JNIXT3QYG",
        "sku": "9202913",
        "unitsSold": 2,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "XHOE2XWKUEB2B5PHIZIL6GIH",
        "sku": "2003802",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_pumpkin_chai.jpg?v=1778004548"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": null,
        "sku": null,
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Rainbow Sherbet",
    "handle": "rainbow-sherbet",
    "unitsSold": 15,
    "tags": [
      "Citrus / Berry",
      "Gourmand",
      "summer"
    ],
    "notes": "Grapefruit, Blood Orange, Cream & Vanilla",
    "description": "A playful, fruity blend of zesty lime, juicy raspberry, and sweet orange. Sugar crystals add a candy-like finish for a scent that’s as colorful and fun as a summer treat.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "E3PNDM3CMT4JUDQSJ7U7U537",
        "sku": "808775N",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_rainbow_sherbet.jpg?v=1778004453",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_7_Image_0005.jpg?v=1778002951"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "TQPLCV52W4Q2RGOC26WR567A",
        "sku": "641595P",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Rainbow_Sherbet.jpg?v=1778004465",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_7_Image_0005.jpg?v=1778002951"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "JOYE5RY7B76WKM2YZWXFHKH3",
        "sku": "R323038",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_rainbow_sherbet.jpg?v=1778004495",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_7_Image_0005.jpg?v=1778002951"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "ETKGSKP2J6BW4OB6VE673SXM",
        "sku": "2988838",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_rainbow_sherbet.jpg?v=1778004580",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_7_Image_0005.jpg?v=1778002951"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "L3QHHY4LMHUM2XQAEZMR773Z",
        "sku": "833711S",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/bumblin_bee_catalog_022422_Page_7_Image_0005.jpg?v=1778002951"
        ]
      }
    ]
  },
  {
    "scent": "Rainy Afternoon",
    "handle": "rainy-afternoon",
    "unitsSold": 24,
    "tags": [
      "best seller",
      "Clean / Ozonic",
      "Earthy",
      "fall",
      "Floral",
      "spring",
      "summer"
    ],
    "notes": "Lilly, Rose, Sandalwood & Ozone",
    "description": "Sink back into your favorite cozy chair and enjoy this rainy day fragrance. This is an exquisite white floral bouquet of lily and rose petals. Hints of airy ozone and sandalwood round out this fresh foil. The ethereal lushness of this scent is a must-have for any candle enthusiast.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "7LOYMTFO3ZHH3DJGZOZEWPYF",
        "sku": "9501047",
        "unitsSold": 13,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_rainy_afternoon.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "QHC4G6ZIKEKGLN2J5LKQMKOO",
        "sku": "6223721",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Rainy_Afternoon.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "OPW6QZCRBK6FESGR7WNHLXUL",
        "sku": "988331X",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_rainy_afternoon.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "KZZIT2MXG65N6CLSW7PXOMTF",
        "sku": "6824240",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_rainy_afternoon.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "LDHSAGMKU3GUQQW5XT7ZFTNJ",
        "sku": "Z136013",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Sand & Sea",
    "handle": "sand-and-sea",
    "unitsSold": 24,
    "tags": [
      "best seller",
      "Clean / Ozonic",
      "Earthy",
      "Floral",
      "summer"
    ],
    "notes": "Jasmine, Violet, Sea Salt & Amber",
    "description": "Transport yourself to the shoreline with bright citrus and airy ozone notes. Sea salt and soft jasmine create a refreshing ocean breeze experience, while a hint of sandalwood anchors the scent in warmth.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "6AEDRTMCZ5ZWX2755V23SHFC",
        "sku": "H527708",
        "unitsSold": 8,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_sand_and_sea.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "K5GI5K7VVGSGJPB73KYYDCWA",
        "sku": "379371Y",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Sand_Sea.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "VNFEBZXT7JFY4YLUFEOVFX4N",
        "sku": "5435674",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_sand_sea.jpg?v=1778004495",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_sand_sea_seaside.jpg?v=1778004487"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "MIORP5WWYPDG3QOPO54KP62K",
        "sku": "5808096",
        "unitsSold": 8,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_sand_and_sea_seaside.jpg?v=1778004565",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_sand_and_sea.jpg?v=1778004578"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "MQEMTAUO7VDUCDLH57X54V6Q",
        "sku": "P995511",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Sea Witch",
    "handle": "sea-witch",
    "unitsSold": 31,
    "tags": [
      "Clean / Ozonic",
      "Earthy",
      "Floral",
      "spring",
      "summer"
    ],
    "notes": "Plumeria, Citrus, Jasmine, Ozone & Cedar",
    "description": "Dive into a fresh, mysterious coastal blend of crisp sea salt, airy ozone, and cooling eucalyptus. Herbal sage and soft musk create an enchanting finish that lingers.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "LYAGRRU4OYYAPMDJ2JGCTTTV",
        "sku": "G864950",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "NCYPJ7LUN7AOKHOPWOUHAR3C",
        "sku": "P630399",
        "unitsSold": 4,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "MEWBTU5ROQPANXQPDGG5IZMW",
        "sku": "A891947",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_sea_witch_seaside.jpg?v=1778004487"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "5Y3VLNUQQ6UJ3WG3EANRG3GD",
        "sku": "875803E",
        "unitsSold": 13,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_sea_witch_seaside.jpg?v=1778004569"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "O3QCAYT6I3BJ7OYYZNMWYHVO",
        "sku": "W732825",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "Snickerdoodle",
    "handle": "snickerdoodle",
    "unitsSold": 6,
    "tags": [
      "fall",
      "Gourmand",
      "winter"
    ],
    "notes": "Vanilla, Cinnamon, Sugar, Wood & Caramel",
    "description": "Fill your home with the nostalgic aroma of fresh-baked snickerdoodle cookies. Warm cinnamon sugar blends with creamy vanilla and buttery goodness for the ultimate sweet comfort scent.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "2JBUJUBRMGIOZE4C4I2OYHHW",
        "sku": "A812755",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_snickerdoodle.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "5PLOOMOI27C2HSIQKLKYDGSV",
        "sku": "585203L",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Snickerdoodle.jpg?v=1778004465"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "FUKSNHHCXLETF32PEPW74PPI",
        "sku": "E739634",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_snickerdoodle.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "A6AP2RV67RHY5D4NM33VGHWB",
        "sku": "5300347",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_snickerdoodle.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "RO3GRKBJM2HQNZDBPG5MK5DL",
        "sku": "455994F",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Sugared Pumpkin Fig",
    "handle": "sugared-pumpkin-fig",
    "unitsSold": 21,
    "tags": [
      "Earthy",
      "fall",
      "Gourmand",
      "winter"
    ],
    "notes": "Pumpkin, Fig, Cinnamon & Brown Sugar",
    "description": "This magical blend of sugared fig and pumpkin will draw you in for a day made of comfort. Top notes of fig, sea salt, caramelized sugar and cinnamon weave together to enchant you. At the heart, pumpkin, clove and brown sugar beat strong. And when extinguished, bottom notes of pie crust, vanilla, dark musk, and amber will fill the room with warmth and magic.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "V4S4LD2DJCW6Z7JNWPRUVMF5",
        "sku": "490337D",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_sugared_pumpkin_fig.jpg?v=1778004414"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "ELXQQAKG52F4O46NGBI7GNEF",
        "sku": "N072224",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Sugared_Pumpkin_Fig.jpg?v=1778004457"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "AEB2PP3M3P3Q2MMXMM4Y7BDL",
        "sku": "1829454",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_sugared_pumpkin_fig.jpg?v=1778004482"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "XIYMAW5YLRFTUOBLMOLQTJE5",
        "sku": "155812Z",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_sugared_pumpkin_and_fig.jpg?v=1778004542"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "6WNCYWN3V5FPXA6MGGPX6PKP",
        "sku": "3815511",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/48_sugared_pumpkin_fig3.jpg?v=1778004542"
        ]
      }
    ]
  },
  {
    "scent": "Taffy Apple",
    "handle": "taffy-apple",
    "unitsSold": 38,
    "tags": [
      "Citrus / Berry",
      "fall",
      "Gourmand",
      "summer",
      "winter"
    ],
    "notes": "Apple, Cinnamon, Clove & Pie Crust",
    "description": "Bring the warmth of grandma’s kitchen into your home. Crisp apple blends with sweet cinnamon and spicy clove, all wrapped in the buttery comfort of flaky pie crust. A heartwarming, nostalgic scent that makes every day feel like a holiday.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "QT4DOPAEP664YXWXVXZTK76V",
        "sku": "L962265",
        "unitsSold": 13,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_taffy_apple.jpg?v=1778004454"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "VDB6LSPBOQNH3YBPBRNXJ62I",
        "sku": "P901819",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Taffy_Apple.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "IAONMCB4KPP5MU6GNVC4ZN5D",
        "sku": "S515008",
        "unitsSold": 9,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_taffy_apple.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "Q5RMXES47IGMOVLTCJKLXYX7",
        "sku": "1330182",
        "unitsSold": 11,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_taffy_apple.jpg?v=1778004580"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "IY5GGGZ75R55G2OKTUZO4GPA",
        "sku": "R050198",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Toffee Coffee",
    "handle": "toffee-coffee",
    "unitsSold": 29,
    "tags": [
      "fall",
      "Gourmand",
      "winter"
    ],
    "notes": "Fresh Coffee, Cream, Maple & Caramel",
    "description": "Rich and inviting, this autumn favorite starts with fresh ground coffee, butter, and a hint of orange peel. Sweet caramel and buttery maple melt into a creamy coffee and nutty pecan finish for a scent that feels like home.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "F5RN7KBILUJYQYCUNBPLJIEQ",
        "sku": "T262857",
        "unitsSold": 12,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_toffee_coffee.jpg?v=1778004454"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "L3F5N6A3MC4XU5X32S4QRADD",
        "sku": "M407424",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Toffee_Coffee.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "QMOZLSM5R4UOZQG7SZWUYSD3",
        "sku": "Y109391",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_toffee_coffee.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "CPLUSYSGJNHV4BWGBMCLF5ID",
        "sku": "258806X",
        "unitsSold": 7,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_toffee_coffee.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "NB7NUPD5SF2XHND2USBDDBYL",
        "sku": "S705279",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "Top Drawer",
    "handle": "top-drawer",
    "unitsSold": 16,
    "tags": [
      "Earthy",
      "fall",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Bergamot, Leather, Sandalwood & Patchouli",
    "description": "A refined and invigorating fragrance that opens with lemon peel, bergamot, and fresh eucalyptus. The heart reveals rich teakwood and aromatic spices, finishing with a smooth blend of sandalwood and musk for lasting elegance.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "C7YGIJOVR7LER7OIXJKWTESC",
        "sku": "G990162",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_top_drawer.jpg?v=1778004452"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "CRJLGQ6XG4ZAQOIZOG3KIFHX",
        "sku": "M680771",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Top_Drawer.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "QHORBQANZBQCRYNUMN4HLPMN",
        "sku": "995845F",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_top_drawer.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "YEZG4T44CZZQICHAKV4B7FY5",
        "sku": "N975394",
        "unitsSold": 6,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_top_drawer.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "OZFN3LFAG5W55HBMRFWOXUFO",
        "sku": "Q366560",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Vanilla Latte",
    "handle": "vanilla-latte",
    "unitsSold": 13,
    "tags": [
      "fall",
      "Gourmand",
      "winter"
    ],
    "notes": "Vanilla, Honey, Cake, Cream & Coffee",
    "description": "This bistro staple commands your attention like just-poured latte art. Vanilla bean sugar, coffee and cream swirl into honey, vanilla and homemade fresh baked creations ready for you to enjoy. The familiar scents of vanilla, coffee and cream intermingle and stay present long after the cup has emptied. Delish.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "SG7PIRZRDZQGKJ2UZCL4UXAC",
        "sku": "6356679",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_vanilla_latte.jpg?v=1778004453"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "KY2DMHDRJKOG6CFVVCG3JIFW",
        "sku": "L146636",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Vanilla_Latte.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "COBNK5A253KXOKRGTYXVHXRW",
        "sku": "8377749",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_vanilla_latte.jpg?v=1778004494"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "6JATYOOMJPDB42YY7Z7IXE2G",
        "sku": "K702007",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_vanilla_latte.jpg?v=1778004579"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "ISNAIUXU7OMZ6HJRZ5I7CJRD",
        "sku": "L273501",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "Whispering Embers",
    "handle": "whispering-embers",
    "unitsSold": 6,
    "tags": [
      "Citrus / Berry",
      "Earthy",
      "fall",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "Lemon Peel, Bergamot, Sandalwood, Clove & Cedar",
    "description": "A beautiful fiery fragrance blending bright citrus with warm, smoky woods. Lemon peel and bergamot awaken the senses, while sandalwood, clove, and cedar form a glowing heart. Amber, dark musk, vetiver, and smoke linger long after the flame fades.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "23OODQYIUN2XPVXSUVLK7LIG",
        "sku": "2929025",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_whispering_embers.jpg?v=1778004454"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "3HPSAENXKGFTUH43IH53S3AT",
        "sku": "H438585",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Whispering_Embers.jpg?v=1778004466"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "56E4STH566TK4FH77BTHNMX6",
        "sku": "7015872",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_whispering_embers.jpg?v=1778004495"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "MD7PNRWMVDXDQTMTZ2DL57BJ",
        "sku": "9235949",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_whispering_embers.jpg?v=1778004580"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "66AMYIJB4P6WKO2LJJPG35VY",
        "sku": "992965W",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "White Cedar & Cactus",
    "handle": "white-cedar-and-cactus",
    "unitsSold": 12,
    "tags": [
      "Clean / Ozonic",
      "Earthy",
      "Floral",
      "spring",
      "summer",
      "Woody / Evergreen"
    ],
    "notes": "Cactus Flower, White Cedar & Agave",
    "description": "A modern, fresh blend of cactus flower and white cedar, accented by juicy agave and light florals. Crisp yet soft, this scent brings a clean energy to any space.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "RFDYDR4TNWA375YDBKFNKVBY",
        "sku": "8943790",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/3oz_white_cedar_cactus_257ec045-ddc0-4d91-bb17-b94ea1e8df4d.jpg?v=1778006554"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "BF32GG3NJOS63WP4QWQ6CIFU",
        "sku": "618772M",
        "unitsSold": 1,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "RBCRVZEBS6GXCCHKOTAH4F3L",
        "sku": "B590340",
        "unitsSold": 4,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/8oz_whiecedar_cactus.jpg?v=1778007178"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "FLWK5EK27IPJT42BMKVZLU52",
        "sku": "8627947",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14oz_whitecedar_cactus.jpg?v=1778006836"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "XRLNNNEVANV3KUUHRPLEUZAS",
        "sku": "700622S",
        "unitsSold": 0,
        "images": []
      }
    ]
  },
  {
    "scent": "White Cranberry",
    "handle": "white-cranberry",
    "unitsSold": 23,
    "tags": [
      "Citrus / Berry",
      "Clean / Ozonic",
      "Earthy",
      "fall",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "White Oak, Cranberry, Fir, Pine & Vanilla",
    "description": "A glowing aura that whispers of honored traditions. Palm, aloe, and red currant open the scent like starlit tendrils, while oak, leather, patchouli, cranberry, and green leaves weave an earthy heart. Smoke, vanilla, whiskey, and fir root the blend in a magical holiday glow.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "ZJZOJM53FJWP2XSBY7BXADGQ",
        "sku": "R225458",
        "unitsSold": 3,
        "images": []
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "MHTCIR7SBRICWSXFTM557KQC",
        "sku": "1927469",
        "unitsSold": 3,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "EKDBSXDNBHLDHU4INX23JRPV",
        "sku": "772478K",
        "unitsSold": 10,
        "images": []
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "J6I53XH5K3W5LHMHC2MW4UIQ",
        "sku": "B001917",
        "unitsSold": 6,
        "images": []
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "WYNQ5KM5Q5X6GGWFWFUEYOPD",
        "sku": "J851633",
        "unitsSold": 1,
        "images": []
      }
    ]
  },
  {
    "scent": "White Fig",
    "handle": "white-fig",
    "unitsSold": 9,
    "tags": [
      "best seller",
      "Citrus / Berry",
      "Clean / Ozonic",
      "Earthy",
      "fall",
      "Gourmand",
      "winter",
      "Woody / Evergreen"
    ],
    "notes": "White Birch, Fig, Vanilla, Bourbon & Wood",
    "description": "A refined fragrance blending sweet fig with fresh green leaves, delicate jasmine, white birch and a subtle musk. Light, airy, and effortlessly sophisticated.",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "FJSXCTOCWIQYSQMEFLYLTJEI",
        "sku": "2093467",
        "unitsSold": 1,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/3oz_whitefig.jpg?v=1778006836"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "AGEBBI5KHZS7H6YUJEW7GTM2",
        "sku": "200984Q",
        "unitsSold": 1,
        "images": []
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "DV3HTXQHTFZQ55YHKMXTAQZU",
        "sku": "221994S",
        "unitsSold": 5,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/8_White_Fig.jpg?v=1778006490"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "L6HH7PXJOWWIYMHZ3DP6EDTP",
        "sku": "A644056",
        "unitsSold": 2,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14oz_whitecedar_cactus.jpg?v=1778006836"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "ZHJ54RSHY2MWIHJYQUWRFTGH",
        "sku": "764530W",
        "unitsSold": 0,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/48_whitefig2.jpg?v=1753914679"
        ]
      }
    ]
  },
  {
    "scent": "Witching Hour",
    "handle": "witching-hour",
    "unitsSold": 79,
    "tags": [
      "Earthy",
      "fall",
      "Woody / Evergreen"
    ],
    "notes": "Citrus, Jasmine, Amber, Tonka & Cypress",
    "description": "An enchanting midnight blend of bright citrus, floral jasmine, and fresh cypress. Warm woodsy notes and a hint of leather give way to deep amber, tonka, moss, and fir for a fragrance that lingers long after the clock strikes twelve",
    "sizes": [
      {
        "size": "melt3oz",
        "label": "3oz Wax Melt",
        "price": "7.00",
        "squareVariationId": "6BIICEUBE2NNTNZ7BLMZCSWG",
        "sku": "2326074",
        "unitsSold": 15,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/melt_witching_hour.jpg?v=1778004452",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/witchinghourbg.jpg?v=1754001941"
        ]
      },
      {
        "size": "oz4",
        "label": "4oz Mason Jar Candle",
        "price": "12.50",
        "squareVariationId": "2FKSKVEXILATF26TBO7DG77R",
        "sku": "855830X",
        "unitsSold": 15,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/4oz_Witching_Hour.jpg?v=1778004466",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/witchinghourbg.jpg?v=1754001941"
        ]
      },
      {
        "size": "oz7",
        "label": "7oz Mason Jar Candle",
        "price": "17.50",
        "squareVariationId": "H2PZRDMWOGT7M4BSPBFV7MZI",
        "sku": "957097R",
        "unitsSold": 18,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/7oz_short_witching_hour.jpg?v=1778004495",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/witchinghourbg.jpg?v=1754001941"
        ]
      },
      {
        "size": "oz14",
        "label": "14oz Mason Jar Candle",
        "price": "25.00",
        "squareVariationId": "RQYZUPZE7HEJBR535LWTM46N",
        "sku": "3106548",
        "unitsSold": 28,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_witching_hour_2.png?v=1753914681",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/14_witching_hour.jpg?v=1778004578",
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/witchinghourbg.jpg?v=1754001941"
        ]
      },
      {
        "size": "oz48",
        "label": "48oz Triple Wick Candle",
        "price": "65.00",
        "squareVariationId": "AI56FGB3WEMI6FHMNTHQMIZO",
        "sku": "402185Y",
        "unitsSold": 3,
        "images": [
          "https://cdn.shopify.com/s/files/1/0765/4503/2430/files/witchinghourbg.jpg?v=1754001941"
        ]
      }
    ]
  }
];

/** Sizes in ascending order, for filter controls. */
export const sizeOptions: { key: BumblinSizeKey; label: string; short: string }[] = [
  { key: "melt3oz", label: "3oz Wax Melt", short: "3oz Melts" },
  { key: "oz4", label: "4oz Mason Jar Candle", short: "4oz" },
  { key: "oz7", label: "7oz Mason Jar Candle", short: "7oz" },
  { key: "oz14", label: "14oz Mason Jar Candle", short: "14oz" },
  { key: "oz48", label: "48oz Triple Wick Candle", short: "48oz" },
];

/** Is this size actually carried in Square (i.e. really stocked)? */
export function carriesSize(s: BumblinScent, key: BumblinSizeKey): boolean {
  const row = s.sizes.find((v) => v.size === key);
  return Boolean(row && row.squareVariationId);
}

export const scentTags: string[] = Array.from(
  new Set(bumblinScents.flatMap((s) => s.tags)),
).sort();

export function scentBySlug(handle: string): BumblinScent | undefined {
  return bumblinScents.find((s) => s.handle === handle);
}

/**
 * Genuine best sellers, ranked by Square sales — NOT Shopify's "best seller"
 * tag, which is only about half accurate (6 of the real top 20 are untagged).
 */
export function topSellers(limit = 4, opts: { withImage?: boolean } = {}): BumblinScent[] {
  const list = opts.withImage === false
    ? [...bumblinScents]
    : bumblinScents.filter((s) => s.sizes.some((v) => v.images.length > 0));
  return list.sort((a, b) => b.unitsSold - a.unitsSold).slice(0, limit);
}

export const seasonTags = ["spring", "summer", "fall", "winter"] as const;

/**
 * The tag that best expresses what the shopper is here for.
 *
 * A scent carrying exactly ONE season is unambiguously seasonal (18 of 78 are),
 * and that is the strongest statement of intent we have — someone reading
 * Witching Hour is shopping autumn. Otherwise fall back to the scent family
 * that fewest others share, so the group stays tight rather than matching on
 * something as broad as "Woody / Evergreen" (56 of 78 carry it).
 */
export function definingTag(s: BumblinScent): string | null {
  const seasons = s.tags.filter((t) => (seasonTags as readonly string[]).includes(t));
  if (seasons.length === 1) return seasons[0] ?? null;

  const counts = new Map<string, number>();
  for (const t of scentTags) {
    counts.set(t, bumblinScents.filter((x) => x.tags.includes(t)).length);
  }
  const families = s.tags.filter(
    (t) => t !== "best seller" && !(seasonTags as readonly string[]).includes(t),
  );
  const pool = families.length ? families : s.tags.filter((t) => t !== "best seller");
  if (!pool.length) return null;
  return pool.sort((a, b) => (counts.get(a) ?? 0) - (counts.get(b) ?? 0))[0] ?? null;
}

/** Scents sharing a tag, most-sold first. */
export function scentsByTag(tag: string, exclude?: string, limit = 4): BumblinScent[] {
  return bumblinScents
    .filter((s) => s.tags.includes(tag) && s.handle !== exclude)
    .sort((a, b) => b.unitsSold - a.unitsSold)
    .slice(0, limit);
}

/** Sizes that have at least one image — what we can responsibly show today. */
export function sellableSizes(s: BumblinScent): BumblinSize[] {
  return s.sizes.filter((v) => v.images.length > 0);
}
