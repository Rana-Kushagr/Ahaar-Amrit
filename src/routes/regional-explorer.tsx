import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Compass, Leaf, BookOpen, Utensils, 
  Sprout, ChevronRight, MapPin
} from "lucide-react";

// ==========================================
// DATA: REGIONAL NUTRITION KNOWLEDGE & MAP PATHS
// ==========================================

const REGIONS = [
  {
    id: "north",
    name: "North India",
    tagline: "The Land of Winter Warmth & Rich Grains",
    color: "from-orange-500 to-red-600",
    mapColor: "fill-orange-500",
    path: "M 70 30 L 85 10 L 100 15 L 115 40 L 105 60 L 85 80 L 60 60 Z",
    traditionalFoods: ["Makki (Maize)", "Wheat", "Mustard Greens (Sarson)", "Desi Ghee", "Paneer"],
    localIngredients: ["Makhana (Fox Nuts)", "Almonds", "Saffron", "Rajma (Kidney Beans)"],
    healthyDishes: ["Sarson ka Saag (Rich in Iron & Calcium)", "Missi Roti (Besan & Wheat blend)", "Bajra Khichdi"],
    medicinalPlants: ["Ashwagandha (Stress relief)", "Mulethi (Licorice for throat)", "Tulsi"],
    culturalKnowledge: "Due to harsh winters, Northern diets historically focus on 'Ushna' (warming) foods and heavy grains to maintain body heat and build strength."
  },
  {
    id: "west",
    name: "West India",
    tagline: "The Ancient Millet & Desert Oasis",
    color: "from-amber-400 to-orange-500",
    mapColor: "fill-amber-400",
    path: "M 60 60 L 85 80 L 90 120 L 60 140 L 30 130 L 15 100 L 35 75 Z",
    traditionalFoods: ["Jowar (Sorghum)", "Bajra (Pearl Millet)", "Peanuts", "Jaggery"],
    localIngredients: ["Amla (Gooseberry)", "Sesame Seeds", "Besan (Gram Flour)"],
    healthyDishes: ["Dhokla (Steamed & fermented)", "Thalipeeth (Multi-grain flatbread)", "Undhiyu (Winter root vegetables)"],
    medicinalPlants: ["Neem (Skin & blood purifier)", "Guggul", "Shatavari"],
    culturalKnowledge: "Adapted to arid climates, Western Indian diets beautifully utilize hardy millets and lentils. The traditional Gujarati Thali is perfectly balanced for all six Ayurvedic tastes (Shadrasa)."
  },
  {
    id: "south",
    name: "South India",
    tagline: "The Coastal Spice & Fermentation Hub",
    color: "from-emerald-500 to-teal-600",
    mapColor: "fill-emerald-500",
    path: "M 60 140 L 90 120 L 110 135 L 120 160 L 90 220 L 70 220 L 50 180 Z",
    traditionalFoods: ["Red Matta Rice", "Coconut", "Tamarind", "Curry Leaves", "Lentils"],
    localIngredients: ["Moringa (Drumsticks)", "Black Pepper", "Cardamom", "Kokum"],
    healthyDishes: ["Idli & Dosa (Fermented for gut health)", "Avial (Mixed veg with coconut)", "Rasam (Digestive soup)"],
    medicinalPlants: ["Brahmi (Brain tonic)", "Aloe Vera", "Curry Leaves (Iron rich)"],
    culturalKnowledge: "South Indian cuisine relies heavily on fermentation, which pre-digests food and creates probiotics, perfectly suited for the hot and humid climate."
  },
  {
    id: "east",
    name: "East India",
    tagline: "The River Delta of Digestion",
    color: "from-blue-400 to-indigo-600",
    mapColor: "fill-blue-500",
    path: "M 85 80 L 105 60 L 135 65 L 150 85 L 140 125 L 110 135 L 90 120 Z",
    traditionalFoods: ["Rice", "Mustard Oil", "Panch Phoron (5-spice blend)", "Fish", "Poppy Seeds"],
    localIngredients: ["Pointed Gourd (Parwal)", "Bamboo Shoot", "Raw Banana"],
    healthyDishes: ["Shukto (Bitter stew to start meals)", "Dalma (Lentils with veggies)", "Macher Jhol (Light fish stew)"],
    medicinalPlants: ["Kalmegh (Liver health)", "Turmeric", "Long Pepper (Pippali)"],
    culturalKnowledge: "Meals in the East often start with something bitter (like Shukto) to activate digestive juices, a core Ayurvedic practice for strong Agni (digestion)."
  },
  {
    id: "northeast",
    name: "North-East India",
    tagline: "The Herbal & Steamed Haven",
    color: "from-green-500 to-emerald-700",
    mapColor: "fill-green-500",
    path: "M 135 65 L 150 85 L 170 100 L 195 105 L 210 75 L 190 60 L 160 80 Z",
    traditionalFoods: ["Black Rice", "Fermented Soybeans", "Bamboo Shoots", "Bhut Jolokia"],
    localIngredients: ["Fiddlehead Ferns", "Perilla Seeds", "Roselle Leaves"],
    healthyDishes: ["Iromba (Veggie mash)", "Apong (Rice beverage)", "Smoked Bamboo Stew"],
    medicinalPlants: ["Gotu Kola", "Lakadong Turmeric (High Curcumin)", "Ginger"],
    culturalKnowledge: "The North-East relies on steaming and fermenting rather than heavy frying. This preserves the maximum nutritional value of their incredibly diverse local flora."
  }
];

// ==========================================
// ROUTER EXPORT
// ==========================================
export const Route = createFileRoute("/regional-explorer")({
  component: RegionalExplorerPage,
});

function RegionalExplorerPage() {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/ayurveda-hero-bg.png')" }}
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/10" aria-hidden />
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-900/50 rounded-2xl mb-4 border border-emerald-500/30 shadow-lg">
            <Compass className="h-8 w-8 text-amber-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">
            Regional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Nutrition Explorer</span>
          </h1>
          <p className="text-emerald-200/80 max-w-2xl mx-auto">
            Discover the traditional foods, medicinal plants, and cultural wisdom from different corners of India.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left Column: Interactive Map & List (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Interactive Custom Map */}
            <div className="bg-emerald-950/60 p-6 rounded-3xl border border-emerald-500/30 backdrop-blur-xl shadow-xl flex flex-col items-center">
              <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4 w-full flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Interactive Map
              </h3>
              
              <div className="w-full max-w-[220px] aspect-square relative">
                <svg 
                  viewBox="0 0 225 240" 
                  className="w-full h-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                >
                  {REGIONS.map((region) => {
                    const isActive = activeRegion.id === region.id;
                    return (
                      <path 
                        key={region.id}
                        d={region.path}
                        className={`
                          cursor-pointer transition-all duration-300
                          ${isActive ? region.mapColor : "fill-white/10 hover:fill-white/25"}
                        `}
                        stroke={isActive ? "#ffffff" : "rgba(255,255,255,0.3)"}
                        strokeWidth={isActive ? "2.5" : "1"}
                        strokeLinejoin="round"
                        onClick={() => setActiveRegion(region)}
                      />
                    );
                  })}
                </svg>
              </div>
              <p className="text-xs text-emerald-200/50 mt-4 italic">Tap a region on the map</p>
            </div>

            {/* Region Selection List */}
            <div className="bg-emerald-950/60 p-5 rounded-3xl border border-emerald-500/30 backdrop-blur-xl shadow-xl">
              <div className="flex flex-col gap-2">
                {REGIONS.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegion(region)}
                    className={`
                      relative overflow-hidden flex items-center justify-between p-4 rounded-2xl transition-all duration-300
                      ${activeRegion.id === region.id 
                        ? `bg-gradient-to-r ${region.color} shadow-lg scale-[1.02] border-none` 
                        : "bg-black/20 border border-white/10 hover:bg-black/40 text-emerald-100/70"
                      }
                    `}
                  >
                    <div className="flex flex-col items-start z-10">
                      <span className={`font-bold text-base ${activeRegion.id === region.id ? "text-white" : ""}`}>
                        {region.name}
                      </span>
                    </div>
                    {activeRegion.id === region.id && (
                      <ChevronRight className="h-5 w-5 text-white/80 z-10" />
                    )}
                    {activeRegion.id === region.id && (
                      <div className="absolute right-0 top-0 w-24 h-full bg-white/20 blur-2xl rounded-full translate-x-10" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Data Cards (Col Span 8) */}
          <div className="lg:col-span-8">
            <div className="bg-emerald-950/60 p-6 sm:p-8 rounded-[2.5rem] border border-emerald-500/30 backdrop-blur-xl shadow-2xl h-full transition-all duration-500">
              
              {/* Region Header */}
              <div className="mb-8 border-b border-white/10 pb-6">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 transition-colors">
                  {activeRegion.name}
                </h2>
                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${activeRegion.color} font-medium text-lg`}>
                  {activeRegion.tagline}
                </p>
              </div>

              {/* Grid of Information */}
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Cultural Knowledge (Full Width) */}
                <div className="sm:col-span-2 bg-black/30 p-5 rounded-3xl border border-white/5">
                  <h4 className="flex items-center gap-2 text-amber-300 font-bold mb-3">
                    <BookOpen className="h-5 w-5" /> Cultural Food Knowledge
                  </h4>
                  <p className="text-emerald-50/80 leading-relaxed text-sm sm:text-base">
                    {activeRegion.culturalKnowledge}
                  </p>
                </div>

                {/* Traditional Foods */}
                <div className="bg-black/30 p-5 rounded-3xl border border-white/5 hover:bg-black/40 transition-colors">
                  <h4 className="flex items-center gap-2 text-emerald-400 font-bold mb-3">
                    <WheatIcon className="h-5 w-5" /> Traditional Foods
                  </h4>
                  <ul className="space-y-2">
                    {activeRegion.traditionalFoods.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-emerald-100/70">
                        <span className="text-emerald-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Healthy Dishes */}
                <div className="bg-black/30 p-5 rounded-3xl border border-white/5 hover:bg-black/40 transition-colors">
                  <h4 className="flex items-center gap-2 text-orange-400 font-bold mb-3">
                    <Utensils className="h-5 w-5" /> Healthy Dishes
                  </h4>
                  <ul className="space-y-2">
                    {activeRegion.healthyDishes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-emerald-100/70">
                        <span className="text-orange-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Local Ingredients */}
                <div className="bg-black/30 p-5 rounded-3xl border border-white/5 hover:bg-black/40 transition-colors">
                  <h4 className="flex items-center gap-2 text-blue-400 font-bold mb-3">
                    <Sprout className="h-5 w-5" /> Local Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeRegion.localIngredients.map((item, idx) => (
                      <span key={idx} className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Medicinal Plants */}
                <div className="bg-black/30 p-5 rounded-3xl border border-white/5 hover:bg-black/40 transition-colors">
                  <h4 className="flex items-center gap-2 text-purple-400 font-bold mb-3">
                    <Leaf className="h-5 w-5" /> Medicinal Plants
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeRegion.medicinalPlants.map((item, idx) => (
                      <span key={idx} className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-xs font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Custom icon for wheat/grains
function WheatIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22 22 2" />
      <path d="M12.9 8.1 9 12a3 3 0 0 0-4.2 4.2l-1.4 1.4a1 1 0 0 0 1.4 1.4l1.4-1.4A3 3 0 0 0 10.4 22l3.9-3.9" />
      <path d="M15.9 5.1 12 9a3 3 0 0 0-4.2 4.2" />
      <path d="M18.9 2.1 15 6a3 3 0 0 0-4.2 4.2" />
      <path d="M18.9 11.9 15 15.8a3 3 0 0 0-4.2 4.2" />
    </svg>
  );
}
