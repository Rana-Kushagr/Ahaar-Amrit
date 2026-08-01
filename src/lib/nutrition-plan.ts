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
      name: "Paneer Stuffed Paratha with Curd",
      hindi: "पनीर परांठा और दही",
      description: "Whole-wheat paratha generously stuffed with spiced paneer, served with fresh mint curd.",
      benefit: "Excellent combination of complex carbs and high-quality dairy protein for sustained morning energy.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Egg Kheema with Buttered Pav",
      hindi: "अंडा कीमा और पाव",
      description: "Spicy, minced boiled egg masala served with lightly toasted pav.",
      benefit: "A protein-packed start that keeps you full and focused through morning classes.",
      diets: EGG_DIETS,
      allergens: ["gluten"],
    },
    {
      name: "Chicken Tikka Paratha Roll",
      hindi: "चिकन टिक्का परांठा रोल",
      description: "Tender chicken tikka pieces wrapped in a flaky whole-wheat paratha with mint chutney.",
      benefit: "High-protein, satisfying breakfast that is delicious and rich in iron.",
      diets: NONVEG_DIETS,
      allergens: ["gluten", "dairy"],
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
    {
      name: "Boiled Egg Chaat",
      hindi: "अंडा चाट",
      description: "Sliced boiled eggs tossed with onions, tomatoes, green chilies, and chaat masala.",
      benefit: "Quick, tasty protein boost to prevent the mid-morning slump.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],

  lunch: [
    {
      name: "Chole Masala with Jeera Rice and Raita",
      hindi: "छोले, जीरा राइस और रायता",
      description: "Authentic Punjabi chickpea curry served with cumin-tempered rice and cooling cucumber raita.",
      benefit: "A perfect complete protein profile from legumes and dairy, rich in fiber.",
      diets: VEGETARIAN,
      allergens: ["dairy"],
    },
    {
      name: "Butter Chicken with Garlic Naan",
      hindi: "बटर चिकन और गार्लिक नान",
      description: "Classic creamy tomato chicken curry served with soft, garlic-infused whole wheat naan.",
      benefit: "A satisfying, culturally rich meal providing heavy protein and energy.",
      diets: NONVEG_DIETS,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Mutton Rogan Josh with Roti",
      hindi: "मटन रोगन जोश और रोटी",
      description: "Tender pieces of mutton slow-cooked in aromatic Kashmiri spices, served with soft phulkas.",
      benefit: "Red meat provides highly bioavailable iron and essential B12 for growth.",
      diets: NONVEG_DIETS,
      allergens: ["gluten", "dairy"],
    },
  ],

  eveningSnack: [
    {
      name: "Aloo Tikki Chaat",
      hindi: "आलू टिक्की चाट",
      description: "Shallow-fried potato patties topped with sweet yogurt, tamarind, and mint chutney.",
      benefit: "A delicious energy-replenishing snack after a long school day.",
      diets: VEGETARIAN,
      allergens: ["dairy"],
    },
    {
      name: "Chicken Seekh Kebab",
      hindi: "चिकन सीख कबाब",
      description: "Juicy, spiced minced chicken kebabs grilled to perfection.",
      benefit: "Pure lean protein to aid muscle recovery and growth without heavy carbs.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Palak Paneer with Missi Roti",
      hindi: "पालक पनीर और मिस्सी रोटी",
      description: "Cottage cheese cubes in a smooth, spiced spinach gravy, served with gram flour flatbread.",
      benefit: "Incredibly nutrient-dense: iron from spinach, protein from paneer, and fiber from besan.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Egg Curry with Jeera Rice",
      hindi: "अंडा करी और जीरा राइस",
      description: "Hard-boiled eggs simmered in a rich tomato-onion gravy, served with fragrant cumin rice.",
      benefit: "Light enough for dinner but packed with essential amino acids.",
      diets: EGG_DIETS,
      allergens: [],
    },
    {
      name: "Tandoori Chicken with Mint Salad",
      hindi: "तंदूरी चिकन और पुदीना सलाद",
      description: "Yogurt and spice-marinated chicken roasted perfectly, served with fresh greens.",
      benefit: "High protein, low carb dinner that is easy to digest before sleep.",
      diets: NONVEG_DIETS,
      allergens: ["dairy"],
    },
  ],
};


/* =========================================================
   SOUTH INDIA
========================================================= */

const south: RegionMenu = {
  breakfast: [
    {
      name: "Masala Dosa with Coconut Chutney",
      hindi: "मसाला डोसा और नारियल चटनी",
      description: "Crispy fermented crepe stuffed with spiced potato mash, served with fresh coconut chutney.",
      benefit: "Fermented batter is excellent for gut health and provides easily digestible energy.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Mutta Roast (Egg Roast) with Appam",
      hindi: "अंडा रोस्ट और अप्पम",
      description: "Spicy Kerala-style onion and tomato egg roast served with lacy, soft rice hoppers.",
      benefit: "A brilliant combination of light carbs and high-quality egg protein.",
      diets: EGG_DIETS,
      allergens: [],
    },
    {
      name: "Chicken Chettinad with Parotta",
      hindi: "चेट्टीनाड चिकन और परोट्टा",
      description: "Fiery, pepper-rich chicken curry from Tamil Nadu, served with flaky layered parotta.",
      benefit: "Spices aid metabolism and digestion, while chicken provides robust protein.",
      diets: NONVEG_DIETS,
      allergens: ["gluten"],
    },
  ],

  midMorning: [
    {
      name: "Mini Podi Idlis",
      hindi: "पोडी इडली",
      description: "Bite-sized idlis tossed in ghee and spicy lentil powder (gunpowder).",
      benefit: "Easy to pack for school, offering steady energy and lentil protein.",
      diets: VEGETARIAN,
      allergens: ["dairy"],
    },
    {
      name: "Boiled Egg with Pepper",
      hindi: "काली मिर्च के साथ उबला अंडा",
      description: "Simple boiled egg dusted with freshly ground black pepper.",
      benefit: "Quick brain-boosting protein for mid-day focus.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],

  lunch: [
    {
      name: "Bisi Bele Bath with Boondi",
      hindi: "बिसी बेले भात",
      description: "A wholesome Karnataka specialty: rice, lentils, and mixed vegetables cooked together in special spices.",
      benefit: "The ultimate balanced one-pot meal, rich in fiber, vitamins, and protein.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Andhra Fish Pulusu with Rice",
      hindi: "आंध्र फिश पुलुसु और चावल",
      description: "Tangy and spicy tamarind-based fish curry served with steamed rice.",
      benefit: "Fish is the best source of Omega-3 fatty acids, crucial for student brain development.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
    {
      name: "Chicken Biryani with Raita",
      hindi: "चिकन बिरयानी और रायता",
      description: "Aromatic basmati rice cooked with tender chicken pieces and whole spices.",
      benefit: "A deeply satisfying meal providing heavy carbs for energy and chicken for muscle repair.",
      diets: NONVEG_DIETS,
      allergens: ["dairy"],
    },
  ],

  eveningSnack: [
    {
      name: "Medu Vada with Sambar",
      hindi: "मेदु वड़ा और सांभर",
      description: "Crispy deep-fried lentil donuts dipped in vegetable-rich sambar.",
      benefit: "Urad dal provides a great vegetarian protein punch after school.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Chicken 65",
      hindi: "चिकन 65",
      description: "Spicy, deep-fried bite-sized chicken pieces marinated in yogurt and curry leaves.",
      benefit: "A protein-heavy, culturally iconic snack that satisfies cravings.",
      diets: NONVEG_DIETS,
      allergens: ["dairy"],
    },
  ],

  dinner: [
    {
      name: "Lemon Rice with Potato Fry",
      hindi: "लेमन राइस और आलू फ्राई",
      description: "Tangy peanut-tempered lemon rice paired with a light, spiced potato roast.",
      benefit: "Vitamin C from lemon aids iron absorption; a comforting, light dinner.",
      diets: VEGETARIAN,
      allergens: ["nuts"],
    },
    {
      name: "Kerala Malabar Prawn Curry with Rice",
      hindi: "मालाबार झींगा करी और चावल",
      description: "Juicy prawns simmered in a mild coconut milk gravy.",
      benefit: "Prawns are rich in zinc and iodine, while coconut milk provides healthy fats.",
      diets: NONVEG_DIETS,
      allergens: ["shellfish"],
    },
  ],
};


/* =========================================================
   EAST INDIA
========================================================= */

const east: RegionMenu = {
  breakfast: [
    {
      name: "Luchi with Cholar Dal",
      hindi: "लूची और छोलार दाल",
      description: "Deep-fried puffed bread served with slightly sweet and spicy Bengal gram dal.",
      benefit: "A festive, high-energy start to the day with good protein from the dal.",
      diets: VEGETARIAN,
      allergens: ["gluten"],
    },
    {
      name: "Dim Kosha (Egg Curry) with Paratha",
      hindi: "डिम कोशा और परांठा",
      description: "Bengali-style rich, caramelized onion and egg curry served with flaky paratha.",
      benefit: "High energy and protein to keep you satiated for hours.",
      diets: EGG_DIETS,
      allergens: ["gluten"],
    },
  ],

  midMorning: [
    {
      name: "Jhal Muri",
      hindi: "झाल मुड़ी",
      description: "Puffed rice tossed with mustard oil, chopped onions, green chilies, and roasted peanuts.",
      benefit: "A very light, digestion-friendly snack with a crunch.",
      diets: VEGETARIAN,
      allergens: ["nuts"],
    },
    {
      name: "Egg Kati Roll",
      hindi: "अंडा काठी रोल",
      description: "A thin paratha wrapped around a freshly beaten egg, onions, and tangy sauce.",
      benefit: "Perfectly portable school snack balancing carbs and protein.",
      diets: EGG_DIETS,
      allergens: ["gluten"],
    },
  ],

  lunch: [
    {
      name: "Khichuri with Begun Bhaja",
      hindi: "खिचुड़ी और बैंगन भाजा",
      description: "Roasted moong dal and rice porridge served with thick, fried eggplant slices.",
      benefit: "The ultimate comfort food; very easy to digest with a complete amino acid profile.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Shorshe Maach (Mustard Fish) with Rice",
      hindi: "शोर्षे माछ और चावल",
      description: "Fresh river fish cooked in a pungent mustard paste, served with steamed white rice.",
      benefit: "Mustard aids digestion, and fish provides unparalleled Omega-3s and lean protein.",
      diets: NONVEG_DIETS,
      allergens: ["fish"],
    },
    {
      name: "Kosha Mangsho with Pulao",
      hindi: "कोशा मांगशो और पुलाव",
      description: "Slow-cooked, dark, and spicy mutton dry curry served with sweet yellow pulao.",
      benefit: "A rich, calorie-dense meal providing massive amounts of iron and B-vitamins.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
  ],

  eveningSnack: [
    {
      name: "Mishti Doi & Roshogolla",
      hindi: "मिष्टी दोई और रसगुल्ला",
      description: "Traditional sweetened yogurt paired with a spongy cottage cheese ball.",
      benefit: "A quick sugar and calcium boost for late afternoon energy.",
      diets: VEGETARIAN,
      allergens: ["dairy"],
    },
    {
      name: "Chicken Pakora",
      hindi: "चिकन पकोड़ा",
      description: "Bite-sized chicken marinated in spices and gram flour, deep-fried until crispy.",
      benefit: "High protein, deeply satisfying crunch after a long day.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Dalma with Rice",
      hindi: "दालमा और चावल",
      description: "Odia specialty of lentils cooked with a variety of nutritious vegetables like pumpkin and plantain.",
      benefit: "Extremely nutrient-dense, providing every essential vitamin in one light bowl.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Chicken Rezala with Roti",
      hindi: "चिकन रेज़ाला और रोटी",
      description: "Aromatic, white chicken curry made with yogurt, poppy seeds, and mild spices.",
      benefit: "Mild on the stomach for dinner, yet rich in protein and soothing dairy.",
      diets: NONVEG_DIETS,
      allergens: ["gluten", "dairy", "nuts"],
    },
  ],
};


/* =========================================================
   WEST INDIA
========================================================= */

const west: RegionMenu = {
  breakfast: [
    {
      name: "Misal Pav",
      hindi: "मिसल पाव",
      description: "Spicy sprouted moth bean curry topped with farsan, served with soft pav.",
      benefit: "Sprouts are incredibly high in bioavailable protein, fiber, and vitamins.",
      diets: VEGETARIAN,
      allergens: ["gluten"],
    },
    {
      name: "Anda Bhurji Pav",
      hindi: "अंडा भुर्जी पाव",
      description: "Mumbai-style scrambled eggs cooked with tomatoes, onions, and pav bhaji masala.",
      benefit: "A fiery, protein-heavy start to kickstart metabolism.",
      diets: EGG_DIETS,
      allergens: ["gluten"],
    },
    {
      name: "Keema Ghotala with Pav",
      hindi: "कीमा घोटाला और पाव",
      description: "Minced mutton cooked with scrambled eggs in rich spices, served with buttered bread.",
      benefit: "The ultimate power breakfast for intense physical or mental days.",
      diets: NONVEG_DIETS,
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
    {
      name: "Boiled Egg",
      hindi: "उबला अंडा",
      description: "A simple boiled egg for a protein-rich snack.",
      benefit: "High-quality protein and vitamin B12.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],

  lunch: [
    {
      name: "Gujarati Kadhi and Khichdi",
      hindi: "गुजराती कढ़ी और खिचड़ी",
      description: "Sweet and sour yogurt-based curry served with comforting rice and dal khichdi.",
      benefit: "Very cooling for the body, excellent for gut health and digestion.",
      diets: VEGETARIAN,
      allergens: ["dairy"],
    },
    {
      name: "Goan Fish Curry with Rice",
      hindi: "गोअन फिश करी और चावल",
      description: "Tangy, coconut-based fish curry flavored with kokum, served with unpolished rice.",
      benefit: "Provides lean protein, healthy coconut fats, and Omega-3s.",
      diets: NONVEG_DIETS,
      allergens: ["fish"],
    },
    {
      name: "Malvani Chicken Curry with Bhakri",
      hindi: "मालवणी चिकन और भाकरी",
      description: "Intensely flavored coastal chicken curry served with hearty rice flour or millet flatbread.",
      benefit: "Gluten-free carbs paired with high-quality poultry protein.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
  ],

  eveningSnack: [
    {
      name: "Healthy Pav Bhaji (Less Butter)",
      hindi: "पाव भाजी",
      description: "Mashed mixed vegetables in a tomato base, served with toasted whole-wheat pav.",
      benefit: "A great way to consume a massive amount of hidden vegetables.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Chicken Frankie",
      hindi: "चिकन फ्रेंकी",
      description: "Mumbai-style street wrap filled with spiced chicken and vinegar onions.",
      benefit: "A heavy, satisfying snack that feels like a treat but delivers protein.",
      diets: NONVEG_DIETS,
      allergens: ["gluten"],
    },
  ],

  dinner: [
    {
      name: "Puran Poli with Katachi Amti",
      hindi: "पूरन पोली और कटाची आमटी",
      description: "Sweet lentil stuffed flatbread served with a spicy, thin lentil soup.",
      benefit: "Comforting balance of sweet and spicy, rich in complex carbohydrates.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Egg Curry with Bajra Roti",
      hindi: "अंडा करी और बाजरे की रोटी",
      description: "Spicy egg masala served with iron-rich pearl millet flatbread.",
      benefit: "Millet aids in slow digestion, keeping you full through the night.",
      diets: EGG_DIETS,
      allergens: [],
    },
    {
      name: "Chicken Sukka with Neer Dosa",
      hindi: "चिकन सुक्का और नीर डोसा",
      description: "Dry roasted coconut chicken served with incredibly thin, lace-like rice crepes.",
      benefit: "Light on the stomach but completely satisfies protein requirements.",
      diets: NONVEG_DIETS,
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
      name: "Veg Thukpa",
      hindi: "वेज थुक्पा",
      description: "Hearty Tibetan-style noodle soup packed with cabbage, carrots, and beans.",
      benefit: "Hydrating, warming, and loaded with vitamins from fresh vegetables.",
      diets: VEGETARIAN,
      allergens: ["gluten"],
    },
    {
      name: "Egg Thukpa",
      hindi: "अंडा थुक्पा",
      description: "Noodle soup loaded with vegetables and sliced boiled eggs.",
      benefit: "Adds a solid protein punch to a warming, hydrating breakfast.",
      diets: EGG_DIETS,
      allergens: ["gluten"],
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
    {
      name: "Chicken Momo",
      hindi: "चिकन मोमो",
      description: "Steamed dumplings filled with juicy minced chicken.",
      benefit: "A clean, steamed protein snack perfect for school breaks.",
      diets: NONVEG_DIETS,
      allergens: ["gluten"],
    },
  ],

  lunch: [
    {
      name: "Aloo Pitika with Dal and Rice",
      hindi: "आलू पिटिका, दाल और चावल",
      description: "Assamese comfort food: mashed potatoes with mustard oil and onions, alongside dal and rice.",
      benefit: "Mustard oil provides healthy fats, while dal and rice form a complete protein.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Masor Tenga (Sour Fish Curry) with Rice",
      hindi: "मासोर टेंगा और चावल",
      description: "A signature light and sour Assamese fish curry made with tomatoes or elephant apple.",
      benefit: "Extremely light on the stomach, highly digestive, and rich in lean fish protein.",
      diets: NONVEG_DIETS,
      allergens: ["fish"],
    },
    {
      name: "Smoked Pork/Chicken with Bamboo Shoot",
      hindi: "बैम्बू शूट चिकन",
      description: "Traditional tribal curry cooking meat with earthy, fermented bamboo shoots.",
      benefit: "Fermented bamboo shoots are excellent for the gut; meat provides high protein.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
  ],

  eveningSnack: [
    {
      name: "Roasted Soybeans (Bhutte)",
      hindi: "भुना सोयाबीन",
      description: "Crunchy, dry-roasted local soybeans.",
      benefit: "One of the highest plant-based protein snacks available.",
      diets: VEGETARIAN,
      allergens: ["soy"],
    },
    {
      name: "Boiled Egg with Chilis",
      hindi: "उबला अंडा",
      description: "Boiled egg served with local herbs and a pinch of salt.",
      benefit: "Fast, efficient protein delivery.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],

  dinner: [
    {
      name: "Eromba (Veg adaptation) with Rice",
      hindi: "एरोंबा और चावल",
      description: "Manipuri dish of boiled vegetables and bamboo shoot mashed together.",
      benefit: "Very low in calories and oil, high in fiber and micronutrients.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Chicken Curry with Local Greens (Lai Patta)",
      hindi: "चिकन और लाई पत्ता",
      description: "Chicken simmered with nutritious mustard greens.",
      benefit: "Greens provide massive amounts of iron and calcium, paired with chicken protein.",
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
      name: "Vegetable Poha",
      hindi: "सब्ज़ी पोहा",
      description: "Flattened rice cooked with turmeric, peanuts, and peas.",
      benefit: "Light, iron-rich, and gives a quick energy boost.",
      diets: VEGETARIAN,
      allergens: ["nuts"],
    },
    {
      name: "Egg Sandwich",
      hindi: "अंडा सैंडविच",
      description: "Boiled or scrambled egg layered with veggies in whole-wheat bread.",
      benefit: "Convenient mix of complex carbs and protein.",
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
    {
      name: "Boiled Egg",
      hindi: "उबला अंडा",
      description: "A simple boiled egg.",
      benefit: "High-quality protein on the go.",
      diets: EGG_DIETS,
      allergens: [],
    },
  ],
  lunch: [
    {
      name: "Roti, Dal Tadka, and Salad",
      hindi: "रोटी, दाल तड़का और सलाद",
      description: "Classic Indian meal with yellow lentils and fresh greens.",
      benefit: "The gold standard for balanced daily nutrition.",
      diets: VEGETARIAN,
      allergens: ["gluten", "dairy"],
    },
    {
      name: "Chicken Curry with Rice",
      hindi: "चिकन करी और चावल",
      description: "Home-style chicken curry served with steamed rice.",
      benefit: "Excellent macro balance for growing students.",
      diets: NONVEG_DIETS,
      allergens: [],
    },
  ],
  eveningSnack: [
    {
      name: "Roasted Chana",
      hindi: "भुना चना",
      description: "Dry roasted chickpeas.",
      benefit: "High fiber and plant protein.",
      diets: VEGETARIAN,
      allergens: [],
    },
  ],
  dinner: [
    {
      name: "Moong Dal Khichdi",
      hindi: "मूंग दाल खिचड़ी",
      description: "One-pot rice and lentil meal with light spices.",
      benefit: "Extremely easy to digest before sleep.",
      diets: VEGETARIAN,
      allergens: [],
    },
    {
      name: "Fish Curry with Rice",
      hindi: "मछली करी और चावल",
      description: "Light fish curry with seasonal vegetables.",
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
    if (item.diets.includes("non-vegetarian")) return 100;
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
      "Eat at roughly the same times daily and drink water through the day.",
    );
  }

  if (profile.goals.includes("discover-indian-foods")) {
    notes.push(
      "Try one new traditional or seasonal Indian dish each week from your region.",
    );
  }

  if (profile.goals.includes("ayurvedic-wellness")) {
    notes.push(
      "Prefer freshly cooked, warm meals and avoid eating very late at night.",
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
