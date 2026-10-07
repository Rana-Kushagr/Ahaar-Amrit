import { createFileRoute } from "@tanstack/react-router";
import { PageWallpaper } from "@/components/PageWallpaper";
import { useState } from "react";
import { 
  ChefHat, Search, Sparkles, MapPin, Sun, Zap, 
  Coffee, Briefcase, RefreshCw, ArrowRight, Clock, Flame, X, Utensils
} from "lucide-react";

// ==========================================
// DATA: CATEGORIES & CURATED RECIPES
// ==========================================

const CATEGORIES = [
  { id: "regional", title: "Regional Recipes", icon: MapPin, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { id: "seasonal", title: "Seasonal Foods", icon: Sun, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  { id: "quick", title: "Quick Student Meals", icon: Zap, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  { id: "breakfast", title: "Breakfast Ideas", icon: Coffee, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { id: "tiffin", title: "Tiffin Ideas", icon: Briefcase, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
  { id: "swaps", title: "Healthy Swaps", icon: RefreshCw, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
];

const FEATURED_RECIPES = [
  // --- 1. QUICK STUDENT MEALS ---
  {
    id: 1,
    title: "10-Min Masala Oats",
    category: "Quick Student Meals",
    time: "10 mins",
    type: "Vata Balancing",
    desc: "A warm, spiced bowl of oats packed with seasonal veggies. Perfect for a quick hostel dinner.",
    tags: ["High Fiber", "Warm"],
    ingredients: [
      "1/2 cup Rolled Oats",
      "1/4 cup Mixed Veggies (Carrots, Peas, Beans)",
      "1/2 tsp Cumin Seeds (Jeera)",
      "1/4 tsp Turmeric & a pinch of Garam Masala",
      "1 tsp Ghee or Mustard Oil",
      "Salt to taste"
    ],
    steps: [
      "Heat ghee/oil in a pan and add cumin seeds until they splutter.",
      "Add the chopped veggies and sauté for 2-3 minutes on medium heat.",
      "Stir in the turmeric, garam masala, and salt.",
      "Add the oats and pour in 1.5 cups of water.",
      "Let it simmer for 5-7 minutes until the mixture thickens.",
      "Garnish with fresh coriander and serve hot!"
    ]
  },
  {
    id: 2,
    title: "One-Pot Veggie Khichdi",
    category: "Quick Student Meals",
    time: "20 mins",
    type: "Tridoshic",
    desc: "The ultimate Ayurvedic comfort food. Rice and lentils cooked together in one pot for easy cleanup.",
    tags: ["Comfort Food", "Protein"],
    ingredients: [
      "1/2 cup Rice & 1/2 cup Moong Dal (washed)",
      "1/2 cup chopped veggies (Potato, Carrot, Beans)",
      "1 tsp Ghee",
      "1/2 tsp Cumin seeds & a pinch of Asafoetida (Hing)",
      "1/2 tsp Turmeric",
      "Salt to taste"
    ],
    steps: [
      "Heat ghee in a pressure cooker or deep pot. Add cumin and hing.",
      "Add veggies and sauté for a minute.",
      "Add the washed rice and dal, turmeric, and salt.",
      "Add 3 to 4 cups of water (depending on how soupy you want it).",
      "Cook for 3-4 whistles in a pressure cooker (or 15 mins in a covered pot).",
      "Serve warm with a dollop of extra ghee!"
    ]
  },
  {
    id: 3,
    title: "Microwave Mug Poha",
    category: "Quick Student Meals",
    time: "5 mins",
    type: "Kapha Balancing",
    desc: "No stove? No problem. A quick, savory flattened-rice meal made entirely in a microwave.",
    tags: ["No Stove", "Hostel Friendly"],
    ingredients: [
      "1 cup Thick Poha (Flattened rice)",
      "2 tbsp Roasted Peanuts",
      "1/4 chopped Onion",
      "1/4 tsp Turmeric, Salt, and Sugar",
      "1 tsp Oil",
      "A squeeze of Lemon"
    ],
    steps: [
      "Wash the poha in a strainer until soft, drain water completely.",
      "In a large microwave-safe mug, mix the oil, onions, peanuts, turmeric, and salt.",
      "Microwave for 1 minute to soften the onions.",
      "Add the softened poha to the mug, mix well gently.",
      "Microwave for 1 more minute.",
      "Add lemon juice, mix, and eat straight from the mug!"
    ]
  },

  // --- 2. HEALTHY SWAPS ---
  {
    id: 4,
    title: "Roasted Makhana Bhel",
    category: "Healthy Swaps",
    time: "5 mins",
    type: "Tridoshic",
    desc: "Swap your fried chips for this crunchy, spiced fox-nut mix. Rich in calcium and antioxidants.",
    tags: ["Snack", "Low Calorie"],
    ingredients: [
      "2 cups Makhana (Fox Nuts)",
      "1 tsp Ghee",
      "1/2 chopped Onion & 1/2 chopped Tomato",
      "1 Green Chili (finely chopped)",
      "1/2 tsp Chaat Masala",
      "A squeeze of fresh Lemon juice"
    ],
    steps: [
      "Heat ghee in a pan and roast the makhana on low heat until they are super crunchy (about 4 mins).",
      "Transfer the roasted makhana to a mixing bowl.",
      "Add the chopped onions, tomatoes, and green chilies.",
      "Sprinkle chaat masala and salt.",
      "Squeeze lemon juice, toss everything together quickly, and eat immediately!"
    ]
  },
  {
    id: 5,
    title: "Baked Sweet Potato Wedges",
    category: "Healthy Swaps",
    time: "30 mins",
    type: "Vata Balancing",
    desc: "Swap deep-fried French fries for these nutrient-dense, baked sweet potato wedges.",
    tags: ["High Vitamin A", "Baked"],
    ingredients: [
      "2 medium Sweet Potatoes",
      "1 tbsp Olive Oil or melted Ghee",
      "1/2 tsp Black Pepper",
      "1/2 tsp Roasted Cumin Powder",
      "Pink Himalayan Salt to taste"
    ],
    steps: [
      "Preheat your oven or air-fryer to 200°C (400°F).",
      "Wash the sweet potatoes thoroughly and cut them into long wedges (keep the skin on for fiber!).",
      "Toss the wedges in a bowl with oil, pepper, cumin, and salt.",
      "Spread evenly on a baking tray.",
      "Bake for 20-25 minutes, flipping halfway, until crispy on the outside and soft inside."
    ]
  },
  {
    id: 6,
    title: "Cucumber Ribbon Pasta",
    category: "Healthy Swaps",
    time: "10 mins",
    type: "Kapha Balancing",
    desc: "Swap heavy refined-flour pasta for refreshing cucumber ribbons in a light yogurt-herb sauce.",
    tags: ["Low Carb", "Cooling"],
    ingredients: [
      "2 large Cucumbers",
      "3 tbsp thick Greek Yogurt or Hung Curd",
      "1 clove Garlic (minced)",
      "Fresh Mint or Coriander leaves",
      "Salt and Pepper to taste"
    ],
    steps: [
      "Use a vegetable peeler to slice the cucumbers lengthwise into long 'ribbons' (stop when you reach the watery seeds).",
      "In a bowl, mix the yogurt, minced garlic, herbs, salt, and pepper to create a creamy sauce.",
      "Toss the cucumber ribbons in the yogurt sauce.",
      "Serve immediately as a refreshing, hydrating summer meal!"
    ]
  },

  // --- 3. BREAKFAST IDEAS ---
  {
    id: 7,
    title: "Moong Dal Chilla",
    category: "Breakfast Ideas",
    time: "15 mins",
    type: "Pitta Balancing",
    desc: "Savory lentil pancakes. High in protein to keep you focused during long study hours.",
    tags: ["Protein Rich", "Gluten-Free"],
    ingredients: [
      "1 cup Yellow Moong Dal (soaked overnight or for 2 hours)",
      "1 inch piece of Ginger & 1 Green Chili",
      "1/4 tsp Turmeric & Salt to taste",
      "Ghee for cooking"
    ],
    steps: [
      "Drain the soaked moong dal and blend it with ginger, chili, and a splash of water to form a smooth batter.",
      "Add turmeric and salt, and mix well.",
      "Heat a flat pan (tawa) and lightly grease it with ghee.",
      "Pour a ladle of batter and spread it outward in a circular motion to make a thin pancake.",
      "Cook for 2 minutes on medium heat, flip, and cook the other side.",
      "Serve hot with green chutney!"
    ]
  },
  {
    id: 8,
    title: "Sweet Ragi Porridge",
    category: "Breakfast Ideas",
    time: "10 mins",
    type: "Vata Balancing",
    desc: "A warm, calcium-rich porridge made from finger millet. Excellent for bone health and sustained energy.",
    tags: ["Calcium", "Sweet"],
    ingredients: [
      "3 tbsp Ragi (Finger Millet) Flour",
      "1.5 cups Milk (Dairy or Plant-based)",
      "1 tbsp Jaggery powder",
      "1/4 tsp Cardamom powder",
      "Almonds or Walnuts for topping"
    ],
    steps: [
      "In a pan, mix the ragi flour and milk thoroughly before turning on the heat to prevent lumps.",
      "Turn on medium heat and stir continuously for 5-7 minutes until it thickens.",
      "Turn off the heat and stir in the jaggery and cardamom powder.",
      "Pour into a bowl, top with chopped nuts, and enjoy warm."
    ]
  },
  {
    id: 9,
    title: "Upma with Veggies",
    category: "Breakfast Ideas",
    time: "15 mins",
    type: "Tridoshic",
    desc: "A savory semolina porridge packed with vegetables and tempered with curry leaves.",
    tags: ["Filling", "Traditional"],
    ingredients: [
      "1/2 cup Suji (Semolina/Rava)",
      "1/4 cup finely chopped veggies (Carrots, Peas)",
      "1 tsp Mustard seeds & a few Curry leaves",
      "1 Green Chili",
      "1 tbsp Oil or Ghee",
      "1.5 cups hot water & Salt to taste"
    ],
    steps: [
      "Dry roast the suji in a pan for 3-4 minutes until it smells nutty, then set aside.",
      "In the same pan, heat oil. Add mustard seeds, curry leaves, and green chili.",
      "Add veggies and sauté for 2 minutes.",
      "Carefully pour in the hot water and add salt. Let it boil.",
      "Slowly pour in the roasted suji while stirring continuously to avoid lumps.",
      "Cover and cook for 2 minutes on low heat until fluffy."
    ]
  },

  // --- 4. REGIONAL RECIPES ---
  {
    id: 10,
    title: "Kashmiri Kahwa",
    category: "Regional Recipes",
    time: "15 mins",
    type: "Kapha Balancing",
    desc: "A traditional green tea preparation from North India infused with saffron, cardamom, and almonds.",
    tags: ["Immunity", "Beverage"],
    ingredients: [
      "2 cups Water",
      "1 tsp Kashmiri Green Tea leaves",
      "2 crushed Cardamom pods & 1 small Cinnamon stick",
      "3-4 strands of Saffron",
      "1 tbsp crushed Almonds",
      "Honey to taste"
    ],
    steps: [
      "Boil water in a pan with cardamom, cinnamon, and saffron. Let it simmer for 3-4 minutes.",
      "Turn off the heat, add the green tea leaves, and cover for 2 minutes to steep.",
      "Strain the tea into cups.",
      "Add crushed almonds and honey to each cup.",
      "Serve hot to soothe the throat and boost digestion."
    ]
  },
  {
    id: 11,
    title: "Kerala Olan",
    category: "Regional Recipes",
    time: "25 mins",
    type: "Pitta Balancing",
    desc: "A mild, soothing South Indian stew made with ash gourd, black-eyed peas, and coconut milk.",
    tags: ["Cooling", "Vegan"],
    ingredients: [
      "1 cup Ash Gourd (Winter Melon) cubed",
      "1/2 cup cooked Black-eyed Peas (Lobia)",
      "2 Green Chilies slit",
      "1 cup thick Coconut Milk",
      "1 tsp Coconut Oil & Curry leaves",
      "Salt to taste"
    ],
    steps: [
      "Cook the ash gourd cubes and green chilies in a pan with a little water and salt until soft.",
      "Add the pre-cooked black-eyed peas to the pan.",
      "Pour in the thick coconut milk and warm it gently on low heat (do not boil, or the milk will split).",
      "Turn off the heat.",
      "Drizzle fresh coconut oil over the top and garnish with curry leaves. Serve with rice."
    ]
  },
  {
    id: 12,
    title: "Gujarati Dal Dhokli",
    category: "Regional Recipes",
    time: "40 mins",
    type: "Vata Balancing",
    desc: "Whole wheat spiced dumplings simmered in a sweet, spicy, and tangy lentil soup from West India.",
    tags: ["One-Pot", "Protein"],
    ingredients: [
      "For Dal: 1/2 cup Toor Dal (boiled), Peanuts, Kokum or Lemon, Jaggery, Turmeric",
      "For Dhokli: 1 cup Whole Wheat flour, Ajwain, Turmeric, Oil, Salt",
      "Tempering: Ghee, Mustard seeds, Curry leaves"
    ],
    steps: [
      "Knead the wheat flour with spices, oil, and water into a firm dough. Roll into flatbreads and cut into diamond shapes (Dhokli).",
      "In a pot, bring the boiled dal to a rolling boil. Add peanuts, kokum (for tang), jaggery (for sweetness), and salt.",
      "Drop the wheat diamond pieces (Dhokli) one by one into the boiling dal.",
      "Simmer for 15 minutes until the dough pieces are cooked and float to the top.",
      "Prepare a tempering of ghee, mustard seeds, and curry leaves, and pour over the dish. Serve hot!"
    ]
  },

  // --- 5. SEASONAL FOODS ---
  {
    id: 13,
    title: "Summer Aam Panna Cooler",
    category: "Seasonal Foods",
    time: "20 mins",
    type: "Pitta Balancing",
    desc: "A cooling summer drink made from raw green mangoes and mint. Perfect for preventing heatstroke.",
    tags: ["Hydration", "Cooling"],
    ingredients: [
      "1 Raw Green Mango",
      "A handful of fresh Mint leaves",
      "1 tsp Roasted Cumin powder",
      "Black Salt (Kala Namak) to taste",
      "Jaggery or Mishri to sweeten"
    ],
    steps: [
      "Boil or pressure cook the raw mango until soft.",
      "Let it cool, peel the skin, and extract all the soft pulp.",
      "In a blender, combine the mango pulp, mint leaves, cumin powder, black salt, and jaggery with a little water.",
      "Blend to a smooth paste (this is your concentrate).",
      "To serve, mix 2-3 tablespoons of concentrate in a glass of chilled water and stir well."
    ]
  },
  {
    id: 14,
    title: "Winter Carrot Halwa (No Sugar)",
    category: "Seasonal Foods",
    time: "40 mins",
    type: "Vata Balancing",
    desc: "A healthy take on the classic winter dessert, using red seasonal carrots and jaggery.",
    tags: ["Sweet", "Warming"],
    ingredients: [
      "3 cups Grated Red Carrots",
      "2 cups Milk",
      "2 tbsp Ghee",
      "1/2 cup Jaggery powder",
      "Almonds, Cashews, and Cardamom powder"
    ],
    steps: [
      "Heat ghee in a heavy-bottomed pan and roast the grated carrots for 5 minutes.",
      "Add the milk and let it cook on medium heat, stirring occasionally, until the milk completely evaporates and the carrots are soft.",
      "Stir in the jaggery powder and cook for another 5 minutes until it caramelizes slightly.",
      "Add cardamom powder and chopped nuts. Serve warm!"
    ]
  },
  {
    id: 15,
    title: "Monsoon Corn & Spinach Soup",
    category: "Seasonal Foods",
    time: "15 mins",
    type: "Kapha Balancing",
    desc: "A light, warm, and peppery soup to boost immunity and clear congestion during the rainy season.",
    tags: ["Immunity", "Light Dinner"],
    ingredients: [
      "1/2 cup Sweet Corn kernels (crushed slightly)",
      "1 cup chopped Spinach leaves",
      "1 tsp Ginger-Garlic paste",
      "1/2 tsp Black Pepper powder",
      "1 tsp Oil or Butter",
      "Salt to taste"
    ],
    steps: [
      "Heat oil in a pot and sauté ginger-garlic paste until fragrant.",
      "Add the crushed corn and sauté for a minute.",
      "Pour in 2 cups of water and bring to a boil.",
      "Add the chopped spinach, salt, and black pepper. Simmer for 3-4 minutes.",
      "Serve hot in a mug to warm up on a rainy evening."
    ]
  },

  // --- 6. TIFFIN IDEAS ---
  {
    id: 16,
    title: "Lemon Peanut Rice",
    category: "Tiffin Ideas",
    time: "15 mins",
    type: "Pitta Balancing",
    desc: "Tangy, zesty rice that stays fresh for hours in a lunchbox. Packed with peanuts for crunch and protein.",
    tags: ["Lunchbox", "Travel Friendly"],
    ingredients: [
      "2 cups Cooked Rice (cooled)",
      "2 tbsp Roasted Peanuts",
      "Juice of 1 large Lemon",
      "1 tsp Mustard seeds & Curry leaves",
      "1/2 tsp Turmeric & Salt to taste",
      "1 tbsp Oil"
    ],
    steps: [
      "Heat oil in a pan. Add mustard seeds and let them splutter.",
      "Add curry leaves, turmeric, and peanuts. Sauté for 30 seconds.",
      "Turn off the heat completely (important so the lemon doesn't turn bitter).",
      "Add the lemon juice, salt, and cooked rice.",
      "Mix gently until the rice takes on a beautiful yellow color. Pack when cooled!"
    ]
  },
  {
    id: 17,
    title: "Beetroot & Mint Paratha",
    category: "Tiffin Ideas",
    time: "25 mins",
    type: "Tridoshic",
    desc: "Vibrant pink flatbreads packed with iron. They stay incredibly soft in a tiffin box and don't need a side dish.",
    tags: ["Iron Rich", "No Mess"],
    ingredients: [
      "1 cup Whole Wheat Flour",
      "1/2 cup Grated Beetroot (raw or boiled)",
      "1 tbsp finely chopped Mint leaves",
      "1/2 tsp Carom seeds (Ajwain) & Salt",
      "Ghee for cooking"
    ],
    steps: [
      "In a large bowl, mix the flour, grated beetroot, mint, ajwain, and salt.",
      "Add water slowly and knead into a soft dough (the moisture from the beetroots means you need very little water).",
      "Pinch a small ball of dough and roll it out into a flat circle.",
      "Cook on a hot tawa, flipping and applying a few drops of ghee on both sides until cooked.",
      "Roll it up or fold it into your tiffin box!"
    ]
  },
  {
    id: 18,
    title: "Paneer & Veggie Kathi Roll",
    category: "Tiffin Ideas",
    time: "20 mins",
    type: "Vata Balancing",
    desc: "A protein-packed wrap that is easy to eat on the go between college classes.",
    tags: ["High Protein", "Grab & Go"],
    ingredients: [
      "2 Whole Wheat Roti/Chapati",
      "1/2 cup Paneer cubes",
      "1/2 cup thinly sliced Bell Peppers and Onions",
      "1 tsp Chaat Masala & pinch of Turmeric",
      "Mint Chutney as a spread"
    ],
    steps: [
      "In a pan with a little oil, sauté the onions, bell peppers, and paneer with turmeric and chaat masala for 5 minutes.",
      "Lay out a roti and spread a thin layer of mint chutney over it.",
      "Place the paneer-veggie mixture in a line down the center.",
      "Fold the bottom up, then roll the sides tightly to create a wrap.",
      "Wrap the bottom half in foil or parchment paper to hold it together in the tiffin."
    ]
  }
];

// ==========================================
// ROUTER EXPORT
// ==========================================
export const Route = createFileRoute("/recipe-studio")({
  head: () => ({ meta: [
    { title: "Recipe Studio — Ahaar Amrit" },
    { name: "description", content: "Explore Indian recipes and kitchen inspiration for everyday meals." },
    { property: "og:title", content: "Recipe Studio — Ahaar Amrit" },
    { property: "og:description", content: "Explore Indian recipes and kitchen inspiration for everyday meals." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: RecipeStudioPage,
});

type GeneratedRecipe = {
  title: string;
  desc: string;
  ingredients: string[];
  steps: string[];
};

function RecipeStudioPage() {
  const [ingredients, setIngredients] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<GeneratedRecipe | null>(null);
  
  const [activeCategory, setActiveCategory] = useState("quick");
  const [selectedRecipe, setSelectedRecipe] = useState<typeof FEATURED_RECIPES[0] | null>(null);

  const [generationError, setGenerationError] = useState<string | null>(null);

  // Ayur AI recipe generation
  const handleGenerate = async () => {
    if (!ingredients.trim() || isGenerating) return;
    setIsGenerating(true);
    setGeneratedRecipe(null);
    setGenerationError(null);

    try {
      const response = await fetch("/api/ayur", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content:
                `I have these ingredients in my kitchen: ${ingredients}. ` +
                `Create ONE quick, healthy Indian recipe a teenager can cook. ` +
                `Reply with ONLY raw JSON (no markdown, no code fences) in exactly this shape: ` +
                `{"title": string, "desc": string, "ingredients": string[], "steps": string[]}. ` +
                `Keep desc under 30 words, 4-8 ingredients, 4-6 steps.`,
            },
          ],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Ayur AI could not respond right now.");
      }

      const raw: string = data?.reply ?? data?.message ?? data?.content ?? "";
      const match = raw.match(/\{[\s\S]*\}/);
      if (!match) throw new Error("Ayur AI sent an unexpected response. Please try again.");

      const parsed = JSON.parse(match[0]) as Partial<GeneratedRecipe>;
      setGeneratedRecipe({
        title: parsed.title?.trim() || "Kitchen Magic Bowl",
        desc: parsed.desc?.trim() || "A quick, wholesome meal from what you already have.",
        ingredients: Array.isArray(parsed.ingredients) ? parsed.ingredients.map(String) : [],
        steps: Array.isArray(parsed.steps) ? parsed.steps.map(String) : [],
      });
    } catch (error) {
      setGenerationError(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  // Filter recipes based on the active category
  const displayedRecipes = FEATURED_RECIPES.filter(r => r.category === CATEGORIES.find(c => c.id === activeCategory)?.title);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative isolate">
      <PageWallpaper variant="nutrition" />
      
      
      {/* ==========================================
          RECIPE DETAILS MODAL OVERLAY
      ========================================== */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl rounded-[2rem] backdrop-blur-md border border-emerald-500/40 bg-emerald-950/45 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh]">
            
            {/* Modal Header Image Area */}
            <div className="h-32 w-full bg-gradient-to-r from-emerald-900 to-black relative flex items-center px-8 border-b border-white/10">
              <button 
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/15 transition-all"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div>
                <div className="flex gap-2 mb-2">
                  <span className="bg-orange-500/20 text-orange-400 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-orange-500/20">
                    <Clock className="h-3 w-3 inline mr-1" /> {selectedRecipe.time}
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-400 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <Flame className="h-3 w-3 inline mr-1" /> {selectedRecipe.type}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                  {selectedRecipe.title}
                </h2>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1">
              <p className="text-emerald-100/80 mb-8 italic border-l-2 border-emerald-500 pl-4">
                {selectedRecipe.desc}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Ingredients List */}
                <div className="bg-black/15 rounded-3xl backdrop-blur-md p-5 border border-white/5">
                  <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2">
                    <Utensils className="h-5 w-5" /> Materials Required
                  </h3>
                  <ul className="space-y-3">
                    {selectedRecipe.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-start gap-3 text-emerald-50/90 text-sm">
                        <span className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions List */}
                <div className="bg-black/15 rounded-3xl backdrop-blur-md p-5 border border-white/5">
                  <h3 className="text-lg font-bold text-orange-300 mb-4 flex items-center gap-2">
                    <ChefHat className="h-5 w-5" /> How to make it
                  </h3>
                  <ol className="space-y-4">
                    {selectedRecipe.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-emerald-50/90 text-sm">
                        <span className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5 shadow-md">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-black/10 text-center">
               <button onClick={() => setSelectedRecipe(null)} className="text-emerald-400 text-sm font-bold hover:text-emerald-300">Close Recipe</button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          MAIN PAGE CONTENT
      ========================================== */}
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-orange-900/40 rounded-2xl mb-4 border border-orange-500/30 shadow-lg">
            <ChefHat className="h-8 w-8 text-orange-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">
            Ahaar <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Recipe Studio</span>
          </h1>
          <p className="text-emerald-200/80 max-w-2xl mx-auto text-sm sm:text-base">
            Build meals from what you have, discover healthy hostel swaps, and explore Ayurvedic cooking tailored for students.
          </p>
        </div>

        {/* Top Section: What's in my kitchen? */}
        <div className="mb-10 relative overflow-hidden rounded-[2.5rem] border border-emerald-500/30 bg-gradient-to-br from-emerald-950/35 to-black/40 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2 flex items-center justify-center gap-2">
              <Search className="h-6 w-6 text-emerald-400" /> What's in your kitchen?
            </h2>
            <p className="text-emerald-200/70 text-sm mb-6">
              Enter 2-3 ingredients you have right now, and Ayur AI will generate a quick, healthy recipe for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="e.g., Rice, Dal, Tomatoes..."
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  className="w-full rounded-2xl backdrop-blur-md border border-white/20 bg-black/10 px-5 py-4 text-white placeholder:text-white/30 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-all"
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
              </div>
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !ingredients.trim()}
                className={`
                  flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold transition-all duration-300
                  ${isGenerating || !ingredients.trim() 
                    ? "bg-emerald-900/25 text-emerald-500 cursor-not-allowed" 
                    : "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:scale-[1.02]"
                  }
                `}
              >
                {isGenerating ? (
                  <RefreshCw className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" /> Cook Magic
                  </>
                )}
              </button>
            </div>

            {generationError && (
              <div className="mt-6 rounded-2xl backdrop-blur-md border border-amber-500/40 bg-amber-950/20 px-5 py-4 text-sm text-amber-200">
                {generationError}
              </div>
            )}

            {/* Generated Output Display */}
            {generatedRecipe && (
              <div className="mt-8 text-left bg-black/10 border border-emerald-500/30 p-6 rounded-3xl backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-500 shadow-inner">
                <div className="flex items-center gap-2 mb-2">
                   <Sparkles className="h-5 w-5 text-amber-400" />
                   <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                     {generatedRecipe.title}
                   </h3>
                </div>
                <p className="text-emerald-100/70 text-sm mb-6">{generatedRecipe.desc}</p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-emerald-400 mb-3 border-b border-white/10 pb-1 flex items-center gap-2">
                      <Utensils className="h-4 w-4" /> Materials Required
                    </h4>
                    <ul className="space-y-2">
                      {generatedRecipe.ingredients.map((ing, i) => (
                        <li key={i} className="text-white/80 text-sm flex items-start gap-2">
                          <span className="text-emerald-500 mt-0.5">•</span> {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-orange-400 mb-3 border-b border-white/10 pb-1 flex items-center gap-2">
                      <ChefHat className="h-4 w-4" /> How to make
                    </h4>
                    <ol className="space-y-3">
                      {generatedRecipe.steps.map((step, i) => (
                        <li key={i} className="text-white/80 text-sm flex items-start gap-2">
                          <span className="font-bold text-orange-500 shrink-0">{i+1}.</span> 
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-white mb-4">Explore Collections</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex flex-col items-center justify-center p-4 rounded-3xl border transition-all duration-300
                  ${activeCategory === cat.id 
                    ? `${cat.bg} ${cat.border} ring-1 ring-inset ring-${cat.color.split('-')[1]}-500/50 scale-[1.02]` 
                    : "bg-black/15 border-white/10 hover:bg-white/5"
                  }
                `}
              >
                <cat.icon className={`h-8 w-8 mb-3 ${cat.color}`} />
                <span className={`text-xs font-bold text-center ${activeCategory === cat.id ? "text-white" : "text-white/70"}`}>
                  {cat.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Feed (Filtered by Category) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">
              {CATEGORIES.find(c => c.id === activeCategory)?.title || "Discover"}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedRecipes.map((recipe) => (
              <div 
                key={recipe.id} 
                onClick={() => setSelectedRecipe(recipe)}
                className="group relative overflow-hidden rounded-[2rem] backdrop-blur-md bg-emerald-950/25 border border-white/10 p-1 hover:border-emerald-500/50 hover:bg-emerald-900/20 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
              >
                
                {/* Image Placeholder */}
                <div className="h-40 w-full rounded-[1.8rem] bg-gradient-to-br from-black/60 to-emerald-900/60 flex items-center justify-center overflow-hidden relative">
                   <ChefHat className="h-12 w-12 text-white/10 absolute group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
                   
                   {/* Tags */}
                   <div className="absolute top-3 left-3 flex gap-2">
                     <span className="bg-black/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                       <Clock className="h-3 w-3 text-emerald-400" /> {recipe.time}
                     </span>
                   </div>
                </div>

                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-wider text-orange-400 font-bold mb-2 block">
                    {recipe.category}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {recipe.title}
                  </h4>
                  <p className="text-sm text-emerald-100/60 line-clamp-2 mb-4">
                    {recipe.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-200/80 bg-emerald-900/25 px-2 py-1 rounded-lg">
                      <Flame className="h-3 w-3 text-amber-500" /> {recipe.type}
                    </span>
                    <button className="h-8 w-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
