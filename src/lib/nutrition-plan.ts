import type {
  Allergy,
  DietaryPreference,
  Region,
  AhaarProfile,
} from "@/lib/profile";

export type MealSlot =
  | "breakfast"
  | "midMorning"
  | "lunch"
  | "eveningSnack"
  | "dinner";

export type Dosha = "Vata" | "Pitta" | "Kapha";

export interface MealItem {
  name: string;
  hindi: string;
  description: string;
  benefit: string;
  diets: DietaryPreference[];
  allergens: Exclude<Allergy, "none" | "other">[];
}

export interface MealSection {
  slot: MealSlot;
  title: string;
  hindi: string;
  item: MealItem;
}

export const mealSlotLabels: Record<
  MealSlot,
  { title: string; hindi: string }
> = {
  breakfast: {
    title: "Breakfast",
    hindi: "नाश्ता",
  },
  midMorning: {
    title: "Mid-morning / School Snack",
    hindi: "मध्य-सुबह का नाश्ता",
  },
  lunch: {
    title: "Lunch",
    hindi: "दोपहर का भोजन",
  },
  eveningSnack: {
    title: "Evening Snack",
    hindi: "शाम का नाश्ता",
  },
  dinner: {
    title: "Dinner",
    hindi: "रात का भोजन",
  },
};

const ALL_DIETS: DietaryPreference[] = [
  "vegetarian",
  "non-vegetarian",
  "eggetarian",
];

const EGG_DIETS: DietaryPreference[] = [
  "non-vegetarian",
  "eggetarian",
];

const NONVEG_ONLY: DietaryPreference[] = ["non-vegetarian"];

type RegionMenu = Record<MealSlot, MealItem[]>;

/* =========================================================
   NORTH INDIA
========================================================= */

const north: RegionMenu = {
  breakfast: [
    {
      name: "Stuffed Paratha with Curd",
      hindi: "परांठा और दही",
      description:
        "Whole-wheat paratha stuffed with vegetables, served with curd.",
      benefit:
        "Whole grains plus curd give steady energy, protein and calcium.",
      diets: ALL_DIETS,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Bajra Roti with Vegetable Bhurji",
      hindi: "बाजरे की रोटी और सब्ज़ी भुर्जी",
      description:
        "Millet flatbread with a lightly spiced vegetable scramble.",
      benefit:
        "Iron-rich millet with vegetables supports growth and energy.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  midMorning: [
    {
      name: "Roasted Chana & Seasonal Fruit",
      hindi: "भुना चना और मौसमी फल",
      description:
        "A small handful of roasted chana with any seasonal fruit.",
      benefit:
        "Plant protein with fibre keeps you full between classes.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  lunch: [
    {
      name: "Roti, Dal and Sarson Saag",
      hindi: "रोटी, दाल और सरसों का साग",
      description:
        "Whole-wheat roti with dal and a leafy mustard-greens sabzi.",
      benefit:
        "Grain plus dal makes a complete protein; greens add iron and vitamin A.",
      diets: ALL_DIETS,
      allergens: ["gluten"],
    },
    {
      name: "Rice, Rajma and Salad",
      hindi: "चावल, राजमा और सलाद",
      description:
        "Rajma curry with rice and a fresh salad.",
      benefit:
        "Legumes provide protein, fibre and slow-release carbohydrates.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Roti with Chicken Curry and Salad",
      hindi: "रोटी, चिकन करी और सलाद",
      description:
        "Home-style chicken curry with roti and salad.",
      benefit:
        "Lean animal protein supports muscle growth and iron intake.",
      diets: NONVEG_ONLY,
      allergens: ["gluten"],
    },
  ],

  eveningSnack: [
    {
      name: "Chana Chaat",
      hindi: "चना चाट",
      description:
        "Boiled chana with onion, tomato, lemon and light spices.",
      benefit:
        "A filling snack with protein, fibre and vitamin C.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Boiled Egg with Lemon and Pepper",
      hindi: "उबला अंडा",
      description:
        "A simple boiled egg seasoned with lemon and black pepper.",
      benefit:
        "High-quality protein and vitamin B12 in a quick snack.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Khichdi with Ghee and Vegetables",
      hindi: "खिचड़ी, घी और सब्ज़ी",
      description:
        "Light moong dal khichdi with seasonal vegetables.",
      benefit:
        "Easy to digest at night while still providing protein.",
      diets: ALL_DIETS,
      allergens: ["dairy"],
    },
    {
      name: "Phulka with Mixed Vegetable Sabzi",
      hindi: "फुल्का और मिली-जुली सब्ज़ी",
      description:
        "Soft phulka with a lightly spiced mixed vegetable sabzi.",
      benefit:
        "Balanced, light dinner with fibre and micronutrients.",
      diets: ALL_DIETS,
      allergens: ["gluten"],
    },
  ],
};

/* =========================================================
   SOUTH INDIA
========================================================= */

const south: RegionMenu = {
  breakfast: [
    {
      name: "Idli with Sambar",
      hindi: "इडली और सांभर",
      description:
        "Steamed fermented rice cakes with lentil sambar.",
      benefit:
        "Fermented, easy to digest, and dal adds protein.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Ragi Dosa with Chutney",
      hindi: "रागी डोसा और चटनी",
      description:
        "Finger-millet dosa served with coconut or tomato chutney.",
      benefit:
        "Ragi is a strong plant source of calcium for growing bones.",
      diets: ALL_DIETS,
      allergens: ["nuts"],
    },
  ],

  midMorning: [
    {
      name: "Buttermilk and Banana",
      hindi: "छाछ और केला",
      description:
        "A glass of spiced buttermilk with a banana.",
      benefit:
        "Hydrating, with potassium and gut-friendly bacteria.",
      diets: ALL_DIETS,
      allergens: ["dairy"],
    },
    {
      name: "Steamed Sundal",
      hindi: "सुंडल",
      description:
        "Boiled legumes tempered with curry leaves and coconut.",
      benefit:
        "Plant protein and fibre in a light mid-morning snack.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  lunch: [
    {
      name: "Rice with Sambar and Poriyal",
      hindi: "चावल, सांभर और पोरियल",
      description:
        "Rice with lentil sambar and a dry vegetable poriyal.",
      benefit:
        "Rice plus dal forms complete protein; vegetables add micronutrients.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Rice with Fish Curry and Poriyal",
      hindi: "चावल, मछली करी और पोरियल",
      description:
        "Light coastal-style fish curry with rice and vegetables.",
      benefit:
        "Fish provides protein and omega-3 fats.",
      diets: NONVEG_ONLY,
      allergens: [],
    },
  ],

  eveningSnack: [
    {
      name: "Ragi Malt",
      hindi: "रागी माल्ट",
      description:
        "Warm finger-millet drink, lightly sweetened.",
      benefit:
        "Calcium and iron in an easy-to-drink form.",
      diets: ALL_DIETS,
      allergens: ["dairy"],
    },
    {
      name: "Steamed Kozhukattai",
      hindi: "कोझुक्कट्टई",
      description:
        "Steamed rice dumplings with a light filling.",
      benefit:
        "Steamed instead of fried, so lower in added fat.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Rasam Rice with Vegetables",
      hindi: "रसम चावल और सब्ज़ी",
      description:
        "Light rasam with rice and a simple vegetable side.",
      benefit:
        "Light on the stomach with warming spices for digestion.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Adai with Avial",
      hindi: "अडै और अवियल",
      description:
        "Mixed-lentil pancake with a mixed vegetable curry.",
      benefit:
        "High plant protein with a variety of vegetables.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],
};

/* =========================================================
   EAST INDIA
========================================================= */

const east: RegionMenu = {
  breakfast: [
    {
      name: "Chira (Poha) with Curd and Fruit",
      hindi: "चिड़ा, दही और फल",
      description:
        "Flattened rice with curd and seasonal fruit.",
      benefit:
        "Light carbohydrates with protein and calcium from curd.",
      diets: ALL_DIETS,
      allergens: ["dairy"],
    },
    {
      name: "Vegetable Ghugni",
      hindi: "घुगनी",
      description:
        "Spiced white peas curry, often eaten with puffed rice.",
      benefit:
        "Legume protein and fibre for a filling start.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  midMorning: [
    {
      name: "Muri with Roasted Peanuts",
      hindi: "मुड़ी और मूंगफली",
      description:
        "Puffed rice tossed with roasted peanuts and mustard oil.",
      benefit:
        "Light snack with a little protein and healthy fat.",
      diets: ALL_DIETS,
      allergens: ["nuts"],
    },
    {
      name: "Seasonal Fruit",
      hindi: "मौसमी फल",
      description:
        "Any fresh seasonal fruit available locally.",
      benefit:
        "Fibre, vitamins and natural hydration.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  lunch: [
    {
      name: "Rice with Dal and Shukto",
      hindi: "भात, दाल और शुक्तो",
      description:
        "Rice with dal and a mixed vegetable shukto.",
      benefit:
        "Balanced grain-and-dal plate with plenty of vegetables.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Rice with Rohu Fish Curry",
      hindi: "भात और रोहू माछेर झोल",
      description:
        "Light fish curry with rice and a vegetable side.",
      benefit:
        "Fish gives protein and omega-3 fats for growth.",
      diets: NONVEG_ONLY,
      allergens: [],
    },
  ],

  eveningSnack: [
    {
      name: "Chhena or Paneer Cubes",
      hindi: "छेना",
      description:
        "Fresh soft cheese cubes with a pinch of black pepper.",
      benefit:
        "Protein and calcium in a small portion.",
      diets: ALL_DIETS,
      allergens: ["dairy"],
    },
    {
      name: "Roasted Chana and Jaggery",
      hindi: "भुना चना और गुड़",
      description:
        "Roasted gram with a small piece of jaggery.",
      benefit:
        "Iron and protein, a traditional after-school snack.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Rice with Light Dal and Aloo Posto",
      hindi: "भात, दाल और आलू पोस्तो",
      description:
        "Simple dal with rice and a mild potato preparation.",
      benefit:
        "Light, comforting dinner with plant protein.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Vegetable Khichuri",
      hindi: "सब्ज़ी खिचुड़ी",
      description:
        "Rice and moong dal cooked together with vegetables.",
      benefit:
        "One-pot balanced meal that is easy to digest.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],
};

/* =========================================================
   WEST INDIA
========================================================= */

const west: RegionMenu = {
  breakfast: [
    {
      name: "Thepla with Curd",
      hindi: "थेपला और दही",
      description:
        "Methi thepla made from whole wheat, served with curd.",
      benefit:
        "Whole grains and fenugreek greens with protein from curd.",
      diets: ALL_DIETS,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Vegetable Poha",
      hindi: "सब्ज़ी पोहा",
      description:
        "Flattened rice with peas, carrots and curry leaves.",
      benefit:
        "Quick, light carbohydrates with vegetables and iron.",
      diets: ALL_DIETS,
      allergens: ["nuts"],
    },
  ],

  midMorning: [
    {
      name: "Sprouts Salad",
      hindi: "अंकुरित सलाद",
      description:
        "Moong sprouts with lemon, onion and tomato.",
      benefit:
        "Sprouting improves protein and mineral availability.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  lunch: [
    {
      name: "Jowar Bhakri with Usal",
      hindi: "ज्वार भाकरी और उसळ",
      description:
        "Millet flatbread with a sprouted legume curry.",
      benefit:
        "Millets plus legumes give sustained energy and protein.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Bhakri with Egg Curry",
      hindi: "भाकरी और अंडा करी",
      description:
        "Home-style egg curry with millet flatbread.",
      benefit:
        "Eggs are a complete protein with vitamin B12.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],

  eveningSnack: [
    {
      name: "Steamed Dhokla",
      hindi: "ढोकला",
      description:
        "Fermented gram-flour cake, steamed not fried.",
      benefit:
        "Light, fermented and protein-rich from besan.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Kokum Sherbet with Roasted Chana",
      hindi: "कोकम शरबत और भुना चना",
      description:
        "A cooling drink with a small portion of roasted gram.",
      benefit:
        "Hydration plus a little plant protein.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Varan Bhaat with Sabzi",
      hindi: "वरण भात और सब्ज़ी",
      description:
        "Simple dal with rice and a seasonal vegetable.",
      benefit:
        "Light and balanced with grain, dal and vegetables.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Bajra Roti with Vegetable Curry",
      hindi: "बाजरे की रोटी और सब्ज़ी",
      description:
        "Millet flatbread with a mildly spiced vegetable curry.",
      benefit:
        "Iron-rich millet keeps dinner light yet filling.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],
};

/* =========================================================
   NORTH-EAST INDIA
========================================================= */

const northeast: RegionMenu = {
  breakfast: [
    {
      name: "Rice with Boiled Vegetables",
      hindi: "चावल और उबली सब्ज़ी",
      description:
        "Steamed rice with lightly boiled seasonal vegetables.",
      benefit:
        "Simple, low-oil start with fibre and vitamins.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Black Rice Porridge",
      hindi: "काले चावल की खीर",
      description:
        "Warm porridge made from nutrient-rich black rice.",
      benefit:
        "Whole grain with antioxidants and slow-release energy.",
      diets: ALL_DIETS,
      allergens: ["dairy"],
    },
  ],

  midMorning: [
    {
      name: "Seasonal Fruit and Roasted Seeds",
      hindi: "मौसमी फल और बीज",
      description:
        "Local seasonal fruit with a spoon of roasted seeds.",
      benefit:
        "Vitamins with a little healthy fat and protein.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  lunch: [
    {
      name: "Rice with Dal and Bamboo Shoot Curry",
      hindi: "चावल, दाल और बांस की सब्ज़ी",
      description:
        "Rice and dal with a traditional bamboo shoot vegetable.",
      benefit:
        "Grain and dal together give complete protein and fibre.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Rice with Steamed Fish and Greens",
      hindi: "चावल, भाप में मछली और साग",
      description:
        "Steamed fish with rice and local leafy greens.",
      benefit:
        "Lean protein with iron-rich greens, cooked with little oil.",
      diets: NONVEG_ONLY,
      allergens: [],
    },
  ],

  eveningSnack: [
    {
      name: "Roasted Soybeans or Peanuts",
      hindi: "भुना सोयाबीन या मूंगफली",
      description:
        "A small portion of roasted local legumes.",
      benefit:
        "Protein-rich snack that keeps hunger away till dinner.",
      diets: ALL_DIETS,
      allergens: ["soy", "nuts"],
    },
    {
      name: "Steamed Corn",
      hindi: "उबला भुट्टा",
      description:
        "Fresh steamed corn with lemon and pepper.",
      benefit:
        "Whole grain with fibre and a light energy boost.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Light Vegetable Stew with Rice",
      hindi: "हल्का सब्ज़ी स्टू और चावल",
      description:
        "Boiled seasonal vegetable stew served with rice.",
      benefit:
        "Low-oil, easy-to-digest dinner rich in vegetables.",
      diets: ALL_DIETS,
      allergens: [],
    },
    {
      name: "Dal with Rice and Greens",
      hindi: "दाल, चावल और साग",
      description:
        "Simple dal and rice with a side of local greens.",
      benefit:
        "Balanced plant protein with iron and folate.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],
};

/* =========================================================
   GENERIC INDIA
========================================================= */

const generic: RegionMenu = {
  breakfast: [
    {
      name: "Vegetable Upma",
      hindi: "सब्ज़ी उपमा",
      description:
        "Semolina cooked with vegetables and curry leaves.",
      benefit:
        "Warm, filling breakfast with fibre and vegetables.",
      diets: ALL_DIETS,
      allergens: ["gluten"],
    },
    {
      name: "Moong Dal Chilla",
      hindi: "मूंग दाल चीला",
      description:
        "Savoury lentil pancake with chopped vegetables.",
      benefit:
        "High plant protein to start the day.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  midMorning: [
    {
      name: "Seasonal Fruit",
      hindi: "मौसमी फल",
      description:
        "Any fresh fruit available in your area.",
      benefit:
        "Fibre, vitamins and natural sugars for quick energy.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  lunch: [
    {
      name: "Roti, Dal, Sabzi and Salad",
      hindi: "रोटी, दाल, सब्ज़ी और सलाद",
      description:
        "A classic balanced Indian thali-style plate.",
      benefit:
        "Grain, dal and vegetables together cover most daily needs.",
      diets: ALL_DIETS,
      allergens: ["gluten"],
    },
    {
      name: "Rice, Dal, Sabzi and Salad",
      hindi: "चावल, दाल, सब्ज़ी और सलाद",
      description:
        "Rice-based balanced plate with dal and vegetables.",
      benefit:
        "Complete protein from rice and dal with plenty of fibre.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  eveningSnack: [
    {
      name: "Roasted Chana and Murmura",
      hindi: "भुना चना और मुरमुरा",
      description:
        "Light roasted mix instead of fried snacks.",
      benefit:
        "Protein and fibre with very little added oil.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Moong Dal Khichdi",
      hindi: "मूंग दाल खिचड़ी",
      description:
        "One-pot rice and lentil meal with vegetables.",
      benefit:
        "Balanced and easy to digest before sleep.",
      diets: ALL_DIETS,
      allergens: [],
    },
  ],
};

const regionMenus: Record<Region, RegionMenu> = {
  north,
  south,
  east,
  west,
  northeast,
};

const slots: MealSlot[] = [
  "breakfast",
  "midMorning",
  "lunch",
  "eveningSnack",
  "dinner",
];

/* =========================================================
   FILTERING
========================================================= */

function matchesDiet(
  item: MealItem,
  diet?: DietaryPreference,
): boolean {
  if (!diet) return item.diets.includes("vegetarian");

  return item.diets.includes(diet);
}

function conflictsWithAllergies(
  item: MealItem,
  allergies: Allergy[],
): boolean {
  return item.allergens.some((a) => allergies.includes(a));
}

/* =========================================================
   DOSHA PERSONALIZATION
========================================================= */

/**
 * This scoring system is based on the traditional Ayurvedic framing
 * already used throughout the Ahaar Amrit app.
 *
 * It is used as a wellness-personalization layer, not as medical advice.
 *
 * Vata:
 * - prefers warm, nourishing, grounding and comforting foods
 *
 * Pitta:
 * - prefers balanced, hydrating and cooling choices
 *
 * Kapha:
 * - prefers lighter, energizing and varied choices
 */

const doshaKeywords: Record<
  Dosha,
  {
    preferred: string[];
    avoid: string[];
  }
> = {
  Vata: {
    preferred: [
      "warm",
      "khichdi",
      "porridge",
      "curd",
      "ghee",
      "rice",
      "dal",
      "cooked",
      "stew",
      "soft",
      "nourishing",
      "comforting",
      "banana",
      "paratha",
      "roti",
    ],
    avoid: [
      "raw",
      "salad",
      "sprouts",
      "roasted",
      "puffed",
      "very light",
      "steamed",
    ],
  },

  Pitta: {
    preferred: [
      "cooling",
      "hydrating",
      "buttermilk",
      "coconut",
      "fruit",
      "salad",
      "rice",
      "vegetable",
      "curd",
      "kokum",
      "fresh",
      "steamed",
      "light",
    ],
    avoid: [
      "spicy",
      "pepper",
      "chilli",
      "mustard",
      "fried",
      "very hot",
    ],
  },

  Kapha: {
    preferred: [
      "light",
      "steamed",
      "roasted",
      "sprouts",
      "salad",
      "vegetable",
      "millet",
      "ragi",
      "chana",
      "sundal",
      "fruit",
      "energizing",
      "fresh",
    ],
    avoid: [
      "heavy",
      "ghee",
      "cream",
      "fried",
      "sweet",
      "very rich",
      "khichdi",
      "porridge",
    ],
  },
};

function getMealSearchText(item: MealItem): string {
  return [
    item.name,
    item.description,
    item.benefit,
  ]
    .join(" ")
    .toLowerCase();
}

function getDoshaScore(
  item: MealItem,
  dosha?: Dosha,
): number {
  if (!dosha) return 0;

  const rules = doshaKeywords[dosha];
  const text = getMealSearchText(item);

  let score = 0;

  for (const keyword of rules.preferred) {
    if (text.includes(keyword)) {
      score += 3;
    }
  }

  for (const keyword of rules.avoid) {
    if (text.includes(keyword)) {
      score -= 2;
    }
  }

  return score;
}

/**
 * Selects the best meal while respecting:
 * 1. Dietary preference
 * 2. Allergy restrictions
 * 3. Ayurvedic Dosha personalization
 *
 * Region remains the primary source of meals.
 * Generic meals are used as additional fallback options.
 */
function selectBestMeal(
  candidates: MealItem[],
  dosha?: Dosha,
): MealItem | undefined {
  if (candidates.length === 0) return undefined;

  if (!dosha) {
    return candidates[0];
  }

  return [...candidates].sort((a, b) => {
    const scoreA = getDoshaScore(a, dosha);
    const scoreB = getDoshaScore(b, dosha);

    return scoreB - scoreA;
  })[0];
}

/* =========================================================
   BUILD PERSONALIZED PLAN
========================================================= */

export function buildNutritionPlan(
  profile: AhaarProfile,
): MealSection[] {
  const menu = profile.region
    ? regionMenus[profile.region]
    : generic;

  const allergies = profile.allergies.filter(
    (a) => a !== "none" && a !== "other",
  );

  const dosha = profile.dosha as Dosha | undefined;

  return slots.map((slot) => {
    /*
     * Region-specific meals are placed first.
     * Generic meals are fallback options.
     */
    const candidates = [
      ...menu[slot],
      ...generic[slot],
    ].filter((item) =>
      matchesDiet(item, profile.dietaryPreference),
    );

    /*
     * Remove meals containing known allergens.
     */
    const safe = candidates.filter(
      (item) =>
        !conflictsWithAllergies(item, allergies),
    );

    /*
     * Dosha now influences which safe meal is selected.
     */
    const item =
      selectBestMeal(safe, dosha) ??
      selectBestMeal(candidates, dosha) ??
      generic[slot][0];

    return {
      slot,
      ...mealSlotLabels[slot],
      item,
    };
  });
}

/* =========================================================
   PERSONALIZATION NOTES
========================================================= */

export function planFocusNotes(
  profile: AhaarProfile,
): string[] {
  const notes: string[] = [];

  if (
    profile.ageGroup === "13-15" ||
    profile.ageGroup === "16-18"
  ) {
    notes.push(
      "Teen years need extra calcium, iron and protein — include dal, curd or millets daily.",
    );
  } else {
    notes.push(
      "Keep portions balanced across grains, dal or protein, vegetables and fruit.",
    );
  }

  if (profile.goals.includes("balanced-diet")) {
    notes.push(
      "Aim for a grain + protein + vegetable combination in every main meal.",
    );
  }

  if (profile.goals.includes("everyday-habits")) {
    notes.push(
      "Eat at roughly the same times daily and drink water through the day.",
    );
  }

  if (profile.goals.includes("discover-indian-foods")) {
    notes.push(
      "Try one new traditional or seasonal Indian dish each week.",
    );
  }

  if (profile.goals.includes("ayurvedic-wellness")) {
    notes.push(
      "Prefer freshly cooked, warm meals and avoid eating very late at night.",
    );
  }

  /*
   * Dosha-specific educational notes.
   */
  if (profile.dosha === "Vata") {
    notes.push(
      "Your plan includes more grounding and nourishing choices inspired by traditional Vata principles.",
    );
  }

  if (profile.dosha === "Pitta") {
    notes.push(
      "Your plan emphasizes balanced and hydrating choices inspired by traditional Pitta principles.",
    );
  }

  if (profile.dosha === "Kapha") {
    notes.push(
      "Your plan emphasizes lighter and more energizing choices inspired by traditional Kapha principles.",
    );
  }

  return notes;
}

/* =========================================================
   DISCLAIMERS
========================================================= */

export const ALLERGY_NOTE =
  "Allergy information is used as a preference input in this early version. Always check ingredients and labels, and consult a qualified professional for serious allergies.";

export const AYURVEDA_DISCLAIMER =
  "Ayurvedic insights are provided for educational and wellness purposes and are not a medical diagnosis.";
