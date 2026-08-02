import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  ChefHat, Search, Sparkles, MapPin, Sun, Zap, 
  Coffee, Briefcase, RefreshCw, ArrowRight, Clock, Flame
} from "lucide-react";

// ==========================================
// MOCK DATA
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
  },
  {
    id: 2,
    title: "Roasted Makhana Bhel",
    category: "Healthy Swaps",
    time: "5 mins",
    type: "Tridoshic",
    desc: "Swap your fried chips for this crunchy, spiced fox-nut mix. Rich in calcium and antioxidants.",
    tags: ["Snack", "Low Calorie"],
  },
  {
    id: 3,
    title: "Moong Dal Chilla",
    category: "Breakfast Ideas",
    time: "15 mins",
    type: "Pitta Balancing",
    desc: "Savory lentil pancakes. High in protein to keep you focused during long study hours.",
    tags: ["Protein Rich", "Gluten-Free"],
  }
];

// ==========================================
// ROUTER EXPORT
// ==========================================
export const Route = createFileRoute("/recipe-studio")({
  component: RecipeStudioPage,
});

function RecipeStudioPage() {
  const [ingredients, setIngredients] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeCategory, setActiveCategory] = useState("quick");

  const handleGenerate = () => {
    if (!ingredients.trim()) return;
    setIsGenerating(true);
    // Mock API call delay
    setTimeout(() => {
      setIsGenerating(false);
      setIngredients("");
      // In the future, this is where you'd set the AI-generated recipe state
      alert("AI Recipe Generation would appear here!");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
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
            <button className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_RECIPES.map((recipe) => (
              <div key={recipe.id} className="group relative overflow-hidden rounded-[2rem] bg-emerald-950/40 border border-white/10 p-1 hover:border-emerald-500/30 transition-all duration-300">
                
                {/* Image Placeholder (using gradient for now) */}
                <div className="h-40 w-full rounded-[1.8rem] bg-gradient-to-br from-black/60 to-emerald-900/60 flex items-center justify-center overflow-hidden relative">
                   <ChefHat className="h-12 w-12 text-white/10 absolute" />
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
                    <button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors group/btn">
                      <ArrowRight className="h-4 w-4 text-white group-hover/btn:text-white" />
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
