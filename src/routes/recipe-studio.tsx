import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  ChefHat, Search, Sparkles, MapPin, Sun, Zap, 
  Coffee, Briefcase, RefreshCw, ArrowRight, Clock, Flame, X, Utensils
} from "lucide-react";

// ==========================================
// MOCK DATA (NOW WITH INGREDIENTS & STEPS)
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
      "Squeeze lemon juice over the top, toss everything together quickly, and eat immediately so it stays crunchy!"
    ]
  },
  {
    id: 3,
    title: "Moong Dal Chilla",
    category: "Breakfast Ideas",
    time: "15 mins",
    type: "Pitta Balancing",
    desc: "Savory lentil pancakes. High in protein to keep you focused during long study hours.",
    tags: ["Protein Rich", "Gluten-Free"],
    ingredients: [
      "1 cup Yellow Moong Dal (soaked overnight or for 2 hours)",
      "1 inch piece of Ginger",
      "1 Green Chili",
      "1/4 tsp Turmeric",
      "Salt to taste",
      "Ghee for cooking"
    ],
    steps: [
      "Drain the soaked moong dal and blend it with ginger, green chili, and a splash of water to form a smooth batter.",
      "Transfer to a bowl, add turmeric and salt, and mix well.",
      "Heat a flat pan (tawa) and lightly grease it with ghee.",
      "Pour a ladle of batter into the center and spread it outward in a circular motion to make a thin pancake.",
      "Cook for 2 minutes on medium heat until the edges lift, then flip and cook the other side.",
      "Serve hot with green chutney or yogurt!"
    ]
  }
];

// ==========================================
// ROUTER EXPORT
// ==========================================
export const Route = createFileRoute("/recipe-studio")({
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

  // Simulated AI Generation Logic
  const handleGenerate = () => {
    if (!ingredients.trim()) return;
    setIsGenerating(true);
    setGeneratedRecipe(null); // Clear previous result
    
    // Simulate a 1.5s delay to mimic an API call
    setTimeout(() => {
      setIsGenerating(false);
      
      const userIngredients = ingredients.split(',').map(i => i.trim()).filter(i => i);
      
      setGeneratedRecipe({
        title: "Kitchen Magic Bowl",
        desc: "A quick, wholesome meal utilizing exactly what you have on hand, balanced with basic pantry spices.",
        ingredients: [
          ...userIngredients,
          "1 tsp Ghee or cooking oil",
          "Basic spices (Salt, Turmeric, Cumin)",
          "Splash of water as needed"
        ],
        steps: [
          "Wash and prep all your main ingredients.",
          "Heat ghee in a pan over medium heat and add cumin seeds.",
          `Add your ${userIngredients[0] || 'ingredients'} and toss well with a pinch of turmeric.`,
          "Cover and cook until tender, stirring occasionally.",
          "Season with salt and serve warm. Great for quick digestion!"
        ]
      });
      // Don't clear input, so user knows what they searched!
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative">
      
      {/* ==========================================
          RECIPE DETAILS MODAL OVERLAY
      ========================================== */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl rounded-[2rem] border border-emerald-500/40 bg-emerald-950/90 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh]">
            
            {/* Modal Header Image Area */}
            <div className="h-32 w-full bg-gradient-to-r from-emerald-900 to-black relative flex items-center px-8 border-b border-white/10">
              <button 
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/40 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
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
                <div className="bg-black/30 rounded-3xl p-5 border border-white/5">
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
                <div className="bg-black/30 rounded-3xl p-5 border border-white/5">
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
            <div className="p-4 border-t border-white/10 bg-black/40 text-center">
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
        <div className="mb-10 relative overflow-hidden rounded-[2.5rem] border border-emerald-500/30 bg-gradient-to-br from-emerald-950/80 to-black/80 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
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
                  className="w-full rounded-2xl border border-white/20 bg-black/40 px-5 py-4 text-white placeholder:text-white/30 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-all"
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
              </div>
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !ingredients.trim()}
                className={`
                  flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold transition-all duration-300
                  ${isGenerating || !ingredients.trim() 
                    ? "bg-emerald-900/50 text-emerald-500 cursor-not-allowed" 
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

            {/* Generated Output Display */}
            {generatedRecipe && (
              <div className="mt-8 text-left bg-black/40 border border-emerald-500/30 p-6 rounded-3xl animate-in fade-in slide-in-from-top-4 duration-500 shadow-inner">
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
                    : "bg-black/30 border-white/10 hover:bg-white/5"
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
            {FEATURED_RECIPES.map((recipe) => (
              <div 
                key={recipe.id} 
                onClick={() => setSelectedRecipe(recipe)}
                className="group relative overflow-hidden rounded-[2rem] bg-emerald-950/40 border border-white/10 p-1 hover:border-emerald-500/50 hover:bg-emerald-900/40 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
              >
                
                {/* Image Placeholder */}
                <div className="h-40 w-full rounded-[1.8rem] bg-gradient-to-br from-black/60 to-emerald-900/60 flex items-center justify-center overflow-hidden relative">
                   <ChefHat className="h-12 w-12 text-white/10 absolute group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />
                   
                   {/* Tags */}
                   <div className="absolute top-3 left-3 flex gap-2">
                     <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
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
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-200/80 bg-emerald-900/50 px-2 py-1 rounded-lg">
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
