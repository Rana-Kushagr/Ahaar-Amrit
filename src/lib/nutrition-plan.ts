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

export interface MealItem {
  name: string;
  hindi: string;
  description: string;
  benefit: string;

  /** Dietary preferences this meal is suitable for. */
  diets: DietaryPreference[];

  /** Allergens present in the meal. */
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
    title: "Breakfast (Heavy)",
    hindi: "पौष्टिक नाश्ता",
  },
  midMorning: {
    title: "Mid-morning / School Snack",
    hindi: "मध्य-सुबह का नाश्ता",
  },
  lunch: {
    title: "Lunch (Main Meal)",
    hindi: "दोपहर का भोजन",
  },
  eveningSnack: {
    title: "Evening Snack",
    hindi: "शाम का नाश्ता",
  },
  dinner: {
    title: "Dinner (Light)",
    hindi: "हल्का रात का भोजन",
  },
};


/* =========================================================
   DIET GROUPS
========================================================= */

const VEGETARIAN: DietaryPreference[] = ["vegetarian"];
const EGG_DIETS: DietaryPreference[] = ["eggetarian", "non-vegetarian"];
const NONVEG_DIETS: DietaryPreference[] = ["non-vegetarian"];


/* =========================================================
   REGION MENU TYPE
========================================================= */

type RegionMenu = Record<MealSlot, MealItem[]>;


/* =========================================================
   NORTH INDIA
========================================================= */

const north: RegionMenu = {
  breakfast: [
    {
      name: "Aloo & Paneer Stuffed Paratha with Curd",
      hindi: "आलू-पनीर परांठा और दही",
      description: "Heavy, whole-wheat paratha generously stuffed with spiced potatoes and paneer, served with fresh mint curd.",
      benefit: "Complex carbs and dairy protein provide sustained energy for the first half of the day.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Masala Omelette with Veg Poha",
      hindi: "मसाला ऑमलेट और पोहा",
      description: "A perfect Veg-Egg combo: Fluffy Indian-style omelette served alongside vegetable poha.",
      benefit: "High-protein eggs combined with iron-rich flattened rice.",
      diets: EGG_DIETS,
      allergens: ["nuts"],
    },
  ],

  midMorning: [
    {
      name: "Roasted Makhana & Almonds",
      hindi: "भुना मखाना और बादाम",
      description: "Crunchy fox nuts roasted in a touch of ghee, paired with almonds.",
      benefit: "Light on the stomach but rich in calcium and healthy fats for brain function.",
      diets: VEGETARIAN,
      allergens: ["dairy", "nuts"],
    },
  ],

  lunch: [
    {
      name: "Punjabi Veg Thali",
      hindi: "पंजाबी वेज थाली",
      description: "A heavy, balanced plate: Dal Makhani, Paneer Sabzi, mixed Veg, Roti, and Jeera Rice.",
      benefit: "A complete plant-based amino acid profile with heavy energy for the afternoon.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Chicken Curry Thali (Veg + NonVeg Combo)",
      hindi: "चिकन करी थाली",
      description: "A heavy, balanced plate: Home-style Chicken Curry, Yellow Dal, Aloo Gobi (Veg), Roti, and Rice.",
      benefit: "Combines lean meat protein with fiber-rich lentils and vegetables for a complete diet.",
      diets: NONVEG_DIETS,
      allergens: ["gluten"],
    },
  ],

  eveningSnack: [
    {
      name: "Roasted Chana & Jaggery",
      hindi: "भुना चना और गुड़",
      description: "A classic Indian snack of dry roasted gram and a small piece of jaggery.",
      benefit: "Provides an instant iron and protein boost without feeling heavy.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Boiled Egg Chaat",
      hindi: "अंडा चाट",
      description: "Sliced boiled eggs tossed with onions, tomatoes, green chilies, and chaat masala.",
      benefit: "Quick, tasty protein boost to prevent the mid-afternoon slump.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Light Moong Dal Khichdi with Lauki",
      hindi: "मूंग दाल खिचड़ी और लौकी",
      description: "Very light, watery rice and lentil porridge cooked with bottle gourd.",
      benefit: "Extremely easy on the digestive system before sleep.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Clear Chicken Soup with Steamed Veg & Roti",
      hindi: "चिकन सूप और रोटी",
      description: "A light, soothing chicken and vegetable broth served with a single thin roti.",
      benefit: "Provides essential protein for overnight recovery without heavy calories.",
      diets: NONVEG_DIETS,
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
      name: "Ghee Roast Masala Dosa with Sambar",
      hindi: "मसाला डोसा और सांभर",
      description: "Heavy, crispy fermented crepe stuffed with potato mash, served with lentil-rich sambar.",
      benefit: "Fermented batter is excellent for gut health and provides easily digestible morning energy.",
      diets: VEGETARIAN,
      allergens: ["dairy"],
    },
    {
      name: "Appam with Egg Roast & Veg Stew",
      hindi: "अप्पम, अंडा रोस्ट और वेज स्टू",
      description: "A Veg-Egg combo: Spicy onion egg roast and mild coconut vegetable stew with soft rice hoppers.",
      benefit: "A brilliant combination of light carbs, vegetables, and high-quality egg protein.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],

  midMorning: [
    {
      name: "Mini Podi Idlis",
      hindi: "पोडी इडली",
      description: "Bite-sized idlis tossed in a little ghee and spicy lentil powder.",
      benefit: "Easy to pack for school, offering steady energy and lentil protein.",
      diets: VEGETARIAN,
      allergens: ["dairy"],
    },
  ],

  lunch: [
    {
      name: "South Indian Meals (Veg Thali)",
      hindi: "साउथ इंडियन मील",
      description: "A heavy lunch: Rice, Sambar, Rasam, Cabbage Poriyal, Kootu, and Curd.",
      benefit: "The ultimate balanced one-pot meal, rich in fiber, vitamins, and probiotics.",
      diets: VEGETARIAN,
      allergens: ["dairy"],
    },
    {
      name: "Andhra Fish Pulusu Thali (Veg + NonVeg)",
      hindi: "फिश पुलुसु थाली",
      description: "Tangy fish curry served alongside Tomato Pappu (Dal), Beans Poriyal (Veg), and Rice.",
      benefit: "Fish provides Omega-3s, while dal and vegetables ensure high dietary fiber.",
      diets: NONVEG_DIETS,
      allergens: ["fish"],
    },
  ],

  eveningSnack: [
    {
      name: "Steamed Sundal & Banana",
      hindi: "सुंडल और केला",
      description: "Boiled chickpeas tempered with mustard seeds and curry leaves, alongside a banana.",
      benefit: "Pure plant protein and potassium for after-school energy.",
      diets: VEGETARIAN,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Lemon Rice with Light Cucumber Salad",
      hindi: "लेमन राइस और सलाद",
      description: "A small portion of tangy peanut-tempered lemon rice paired with a cooling salad.",
      benefit: "Vitamin C from lemon aids digestion; a comforting, light dinner.",
      diets: VEGETARIAN,
      allergens: ["nuts"],
    },
    {
      name: "Light Pepper Chicken Rasam with Rice",
      hindi: "चिकन रसम और चावल",
      description: "A thin, spicy, digestive chicken and pepper broth served with a small portion of rice.",
      benefit: "Pepper aids digestion while the thin broth ensures the stomach isn't overloaded at night.",
      diets: NONVEG_DIETS,
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
      name: "Luchi with Cholar Dal & Aloo Dum",
      hindi: "लूची, छोलार दाल और आलू दम",
      description: "Deep-fried puffed bread served with sweet Bengal gram dal and spiced potatoes.",
      benefit: "A heavy, high-energy start to the day with good protein from the dal.",
      diets: VEGETARIAN,
      allergens: ["gluten"],
    },
    {
      name: "Egg Kati Roll with Veg Sabzi Inside",
      hindi: "अंडा काठी रोल",
      description: "A Veg-Egg combo: A paratha wrapped around a freshly beaten egg, onions, and mixed veggies.",
      benefit: "Perfectly portable and heavy enough to prevent hunger during early classes.",
      diets: EGG_DIETS,
      allergens: ["gluten"],
    },
  ],

  midMorning: [
    {
      name: "Seasonal Fruit Bowl",
      hindi: "मौसमी फल",
      description: "A mix of fresh, local, seasonal fruits.",
      benefit: "Natural sugars and vitamins for a quick brain boost.",
      diets: VEGETARIAN,
      allergens: [],
    },
  ],

  lunch: [
    {
      name: "Bengali Veg Thali",
      hindi: "बंगाली वेज थाली",
      description: "A heavy plate: Steamed Rice, Shukto (mixed veg), Masoor Dal, and Aloo Posto.",
      benefit: "A beautifully balanced thali providing complex carbs and plant proteins.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Maacher Jhol Thali (Veg + NonVeg Combo)",
      hindi: "माछेर झोल थाली",
      description: "Light mustard fish curry served alongside Masoor Dal, Begun Bhaja (Eggplant), and Rice.",
      benefit: "Combines the lean protein of river fish with the fiber of vegetables and lentils.",
      diets: NONVEG_DIETS,
      allergens: ["fish"],
    },
  ],

  eveningSnack: [
    {
      name: "Jhal Muri",
      hindi: "झाल मुड़ी",
      description: "Puffed rice tossed with mustard oil, chopped onions, green chilies, and peanuts.",
      benefit: "A very light, digestion-friendly snack with a satisfying crunch.",
      diets: VEGETARIAN,
      allergens: ["nuts"],
    },
  ],

  dinner: [
    {
      name: "Vegetable Khichuri with Papad",
      hindi: "सब्ज़ी खिचुड़ी और पापड़",
      description: "A very soft, light mix of roasted moong dal, rice, and vegetables.",
      benefit: "The ultimate comfort food; very easy to digest before bed.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Light Chicken Stew with Papaya & Rice",
      hindi: "चिकन स्टू और चावल",
      description: "A very mild, watery stew made with chicken, raw papaya, and carrots, served with rice.",
      benefit: "Papaya contains enzymes that aid digestion, making this a perfect light meat dinner.",
      diets: NONVEG_DIETS,
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
      name: "Misal Pav with Curd",
      hindi: "मिसल पाव और दही",
      description: "Heavy, spicy sprouted moth bean curry topped with farsan, served with soft pav and cooling curd.",
      benefit: "Sprouts are incredibly high in bioavailable protein, fiber, and vitamins.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Anda Bhurji with Thepla & Veggies",
      hindi: "अंडा भुर्जी और थेपला",
      description: "A Veg-Egg combo: Spicy scrambled eggs served alongside methi (fenugreek) thepla.",
      benefit: "A heavy, fiery, protein-heavy start to kickstart metabolism.",
      diets: EGG_DIETS,
      allergens: ["gluten"],
    },
  ],

  midMorning: [
    {
      name: "Khandvi",
      hindi: "खांडवी",
      description: "Soft, rolled bite-sized snacks made from gram flour and yogurt, tempered with mustard seeds.",
      benefit: "Light, steamed, and provides protein from besan and probiotics from yogurt.",
      diets: VEGETARIAN,
      allergens: ["dairy"],
    },
  ],

  lunch: [
    {
      name: "Gujarati Veg Thali",
      hindi: "गुजराती थाली",
      description: "Sweet and sour Kadhi, Dal Khichdi, Shaak (Veg Curry), and Roti.",
      benefit: "Very cooling for the body, excellent for gut health and providing heavy, sustained energy.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Malvani Chicken Thali (Veg + NonVeg Combo)",
      hindi: "मालवणी चिकन थाली",
      description: "Intensely flavored coastal chicken curry served with Sprouts Usal (Veg), Bhakri, and Rice.",
      benefit: "Gluten-free carbs paired with high-quality poultry protein and sprout fiber.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
  ],

  eveningSnack: [
    {
      name: "Healthy Pav Bhaji (Less Butter)",
      hindi: "पाव भाजी",
      description: "Mashed mixed vegetables in a tomato base, served with a toasted whole-wheat pav.",
      benefit: "A great way to consume a massive amount of hidden vegetables.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Boiled Egg",
      hindi: "उबला अंडा",
      description: "A simple boiled egg with salt and pepper.",
      benefit: "Quick brain-boosting protein for evening studies.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Varan Bhaat with Green Sabzi",
      hindi: "वरण भात और हरी सब्ज़ी",
      description: "Very light, simple plain dal (varan) over rice with a side of seasonal green vegetables.",
      benefit: "Light and balanced, providing essential amino acids without straining the stomach.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Patra ni Machhi (Steamed Fish) with Light Dal",
      hindi: "भाप में मछली और दाल",
      description: "Fish steamed in banana leaves with mild chutney, served with light dal and rice.",
      benefit: "Steaming eliminates oil, making it an incredibly light and healthy dinner.",
      diets: NONVEG_DIETS,
      allergens: ["fish"],
    },
  ],
};


/* =========================================================
   NORTH-EAST INDIA
========================================================= */

const northeast: RegionMenu = {
  breakfast: [
    {
      name: "Heavy Veg Thukpa with Paneer/Tofu",
      hindi: "वेज थुक्पा और पनीर",
      description: "Hearty Tibetan-style noodle soup packed with cabbage, carrots, beans, and paneer cubes.",
      benefit: "Hydrating, warming, and loaded with heavy carbs and vitamins to start the day.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Egg & Veg Fried Rice",
      hindi: "अंडा और वेज फ्राइड राइस",
      description: "A Veg-Egg combo: Lightly oiled rice tossed with eggs, greens, and local vegetables.",
      benefit: "Adds a solid protein punch to a heavy, carb-rich breakfast.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],

  midMorning: [
    {
      name: "Steamed Momo (Veg)",
      hindi: "वेज मोमो",
      description: "Steamed dumplings filled with finely chopped cabbage, carrots, and onions.",
      benefit: "Zero-oil snack that provides light carbs and vegetable fiber.",
      diets: VEGETARIAN,
      allergens: ["gluten"],
    },
  ],

  lunch: [
    {
      name: "Assamese Veg Thali",
      hindi: "असमिया वेज थाली",
      description: "Aloo Pitika (mashed potatoes), Bamboo Shoot Dal, Local Greens, and Rice.",
      benefit: "Mustard oil provides healthy fats, while dal and rice form a complete protein.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Tribal Smoked Pork/Chicken Thali (Veg + NonVeg)",
      hindi: "स्मोक्ड चिकन थाली",
      description: "Smoked meat cooked with bamboo shoots, served with Yellow Lentils, Boiled Greens (Lai Patta), and Rice.",
      benefit: "Fermented bamboo shoots are excellent for the gut; meat provides high protein alongside veg fiber.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
  ],

  eveningSnack: [
    {
      name: "Boiled Sweet Potato & Roasted Soybeans",
      hindi: "शकरकंद और सोयाबीन",
      description: "A filling combination of local boiled sweet potato and crunchy dry-roasted soybeans.",
      benefit: "High in complex carbs and plant-based protein.",
      diets: VEGETARIAN,
      allergens: ["soy"],
    },
  ],

  dinner: [
    {
      name: "Light Vegetable Stew with Rice",
      hindi: "सब्ज़ी स्टू और चावल",
      description: "A very watery, light stew of boiled seasonal vegetables served with a small portion of rice.",
      benefit: "Low-oil, easy-to-digest dinner rich in vegetables.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Boiled Chicken & Veg Clear Soup with Rice",
      hindi: "चिकन सूप और चावल",
      description: "A minimal-spice, clear broth containing boiled chicken, ginger, and greens with rice.",
      benefit: "Extremely light on the digestive tract while providing necessary night-time protein.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
  ],
};


/* =========================================================
   GENERIC / OTHER REGION
========================================================= */

const generic: RegionMenu = {
  breakfast: [
    {
      name: "Heavy Vegetable Upma",
      hindi: "सब्ज़ी उपमा",
      description: "Semolina cooked with peanuts, carrots, peas, and curry leaves.",
      benefit: "Warm, heavy breakfast with fiber and vegetables to start the day.",
      diets: VEGETARIAN,
      allergens: ["gluten", "nuts"],
    },
    {
      name: "Egg Sandwich with Side Veggies",
      hindi: "अंडा सैंडविच",
      description: "Boiled or scrambled egg layered in whole-wheat bread, served with a side of cucumber and tomato.",
      benefit: "Convenient mix of complex carbs, fiber, and protein.",
      diets: EGG_DIETS,
      allergens: ["gluten"],
    },
  ],
  midMorning: [
    {
      name: "Mixed Fruit Bowl",
      hindi: "फलों का सलाद",
      description: "A bowl of seasonal fresh fruits.",
      benefit: "Provides natural hydration and vitamins.",
      diets: VEGETARIAN,
      allergens: [],
    },
  ],
  lunch: [
    {
      name: "Roti, Dal Tadka, Sabzi and Salad",
      hindi: "रोटी, दाल तड़का, सब्ज़ी और सलाद",
      description: "Classic heavy Indian meal with yellow lentils, dry veg curry, and fresh greens.",
      benefit: "The gold standard for balanced daily nutrition.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Chicken Curry with Dal and Rice (Combo)",
      hindi: "चिकन करी, दाल और चावल",
      description: "Home-style chicken curry served with a side of yellow dal and steamed rice.",
      benefit: "Excellent macro balance combining meat protein with plant fiber.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
  ],
  eveningSnack: [
    {
      name: "Roasted Chana",
      hindi: "भुना चना",
      description: "Dry roasted chickpeas.",
      benefit: "High fiber and plant protein, loved by vegetarians and non-vegetarians alike.",
      diets: VEGETARIAN,
      allergens: [],
    },
  ],
  dinner: [
    {
      name: "Light Moong Dal Khichdi",
      hindi: "मूंग दाल खिचड़ी",
      description: "One-pot rice and lentil meal with light spices.",
      benefit: "Extremely easy to digest before sleep.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Light Fish Curry with Rice",
      hindi: "मछली करी और चावल",
      description: "A thin, light fish curry with seasonal vegetables.",
      benefit: "Omega-3 rich dinner that is light on the stomach.",
      diets: NONVEG_DIETS,
      allergens: ["fish"],
    },
  ],
};


/* =========================================================
   REGION MAP
========================================================= */

const regionMenus: Record<Region, RegionMenu> = {
  north,
  south,
  east,
  west,
  northeast,
};


/* =========================================================
   MEAL SLOTS
========================================================= */

const slots: MealSlot[] = [
  "breakfast",
  "midMorning",
  "lunch",
  "eveningSnack",
  "dinner",
];


/* =========================================================
   DIET MATCHING
========================================================= */

function matchesDiet(
  item: MealItem,
  diet?: DietaryPreference,
): boolean {
  if (!diet) {
    return item.diets.includes("vegetarian");
  }

  if (diet === "vegetarian") {
    return item.diets.includes("vegetarian");
  }

  if (diet === "eggetarian") {
    return (
      item.diets.includes("vegetarian") ||
      item.diets.includes("eggetarian")
    );
  }

  if (diet === "non-vegetarian") {
    return (
      item.diets.includes("vegetarian") ||
      item.diets.includes("eggetarian") ||
      item.diets.includes("non-vegetarian")
    );
  }

  return false;
}


/* =========================================================
   DIET PRIORITY
========================================================= */

function dietPriority(
  item: MealItem,
  diet?: DietaryPreference,
): number {
  if (!diet) {
    return 0;
  }

  if (diet === "vegetarian") {
    return item.diets.includes("vegetarian") ? 100 : -1;
  }

  if (diet === "eggetarian") {
    if (item.diets.includes("eggetarian")) return 100;
    if (item.diets.includes("vegetarian")) return 50;
    return -1;
  }

  if (diet === "non-vegetarian") {
    // Highly prioritizes meals explicitly designed for non-veg combos
    if (item.diets.includes("non-vegetarian")) return 100;
    
    // If no non-veg specific meal exists in this slot (like snacks), 
    // it smoothly falls back to Egg or Veg snacks!
    if (item.diets.includes("eggetarian")) return 75;
    if (item.diets.includes("vegetarian")) return 50;
    return -1;
  }

  return 0;
}


/* =========================================================
   ALLERGY FILTER
========================================================= */

function conflictsWithAllergies(
  item: MealItem,
  allergies: Allergy[],
): boolean {
  return item.allergens.some((a) =>
    allergies.includes(a),
  );
}


/* =========================================================
   BUILD NUTRITION PLAN
========================================================= */

export function buildNutritionPlan(
  profile: AhaarProfile,
): MealSection[] {
  const menu = profile.region
    ? regionMenus[profile.region]
    : generic;

  const allergies = profile.allergies.filter(
    (a) =>
      a !== "none" &&
      a !== "other",
  );

  return slots.map((slot) => {
    const candidates = [
      ...menu[slot],
      ...generic[slot],
    ].filter((item) =>
      matchesDiet(
        item,
        profile.dietaryPreference,
      ),
    );

    const safeCandidates = candidates.filter(
      (item) =>
        !conflictsWithAllergies(
          item,
          allergies,
        ),
    );

    const ranked = safeCandidates.sort(
      (a, b) =>
        dietPriority(
          b,
          profile.dietaryPreference,
        ) -
        dietPriority(
          a,
          profile.dietaryPreference,
        ),
    );

    const item =
      ranked[0] ??
      safeCandidates[0] ??
      candidates[0] ??
      generic[slot][0];

    return {
      slot,
      ...mealSlotLabels[slot],
      item,
    };
  });
}


/* =========================================================
   PLAN FOCUS NOTES
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
      "Teen years need extra calcium, iron and protein — include dal, curd, or lean meats daily.",
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
      "Eat at roughly the same times daily and drink water through the day. Keep dinner light.",
    );
  }

  if (profile.goals.includes("discover-indian-foods")) {
    notes.push(
      "Try one new traditional or seasonal Indian dish each week from your region.",
    );
  }

  if (profile.goals.includes("ayurvedic-wellness")) {
    notes.push(
      "Prefer freshly cooked, warm meals. Have a heavier lunch and a very light dinner.",
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
