import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  GraduationCap, Sparkles, Trophy, CheckCircle2, 
  ArrowRight, RotateCcw, BookOpen, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWallpaper } from "@/components/PageWallpaper";

// ==========================================
// DATA: 6 ACADEMY LEVELS & LESSONS
// ==========================================

const ACADEMY_LEVELS = [
  {
    id: 1,
    level: 1,
    title: "What is a Balanced Meal?",
    desc: "Master the basics of nutrition, macronutrients, and the plate method.",
    badge: "Nutrition Novice",
    points: 50,
    content: [
      "A balanced meal provides your body with the right proportions of energy, building blocks, and regulating nutrients.",
      "In Ayurveda and modern science alike, a healthy plate combines carbohydrates, proteins, healthy fats, and fiber-rich micronutrients.",
      "Instead of focusing on restriction, a balanced meal focuses on diversity—including all six Ayurvedic tastes (Shadrasa: Sweet, Sour, Salty, Pungent, Bitter, Astringent)."
    ],
    quiz: {
      question: "Which of the following best describes a balanced meal?",
      options: [
        "Eating only salads for every meal",
        "A mix of carbohydrates, proteins, fats, and diverse micronutrients",
        "Eating as much protein as possible and skipping carbs",
        "Eating only sweet foods for quick energy"
      ],
      correctIndex: 1
    }
  },
  {
    id: 2,
    level: 2,
    title: "Indian Seasonal Foods",
    desc: "Learn why eating local and seasonal (Ritucharya) keeps your immunity strong.",
    badge: "Seasonal Seeker",
    points: 60,
    content: [
      "Ayurveda teaches 'Ritucharya'—the practice of aligning your diet with the changing seasons.",
      "Nature naturally provides cooling foods (like mangoes and cucumbers) in the scorching summers, and warming, grounding foods (like roots and sesame) in winter.",
      "Eating seasonally ensures maximum nutrient density and supports your local ecosystem and farmers."
    ],
    quiz: {
      question: "What is 'Ritucharya' in Ayurveda?",
      options: [
        "Sleeping for 8 hours a day",
        "Aligning your diet and lifestyle with the changing seasons",
        "A strict fasting ritual",
        "Exercising only during sunrise"
      ],
      correctIndex: 1
    }
  },
  {
    id: 3,
    level: 3,
    title: "Understanding Doshas",
    desc: "Explore Vata, Pitta, and Kapha—the fundamental mind-body constitutional types.",
    badge: "Dosha Whisperer",
    points: 75,
    content: [
      "According to Ayurveda, everything in nature is composed of five elements, which combine into three biological forces or Doshas: Vata (Air & Space), Pitta (Fire & Water), and Kapha (Earth & Water).",
      "Vata governs movement and creativity; Pitta governs digestion and metabolism; Kapha governs structure and stability.",
      "Balancing your dosha through food helps prevent lethargy, stress, and digestive issues."
    ],
    quiz: {
      question: "Which elements make up the Pitta dosha?",
      options: [
        "Air and Space",
        "Earth and Water",
        "Fire and Water",
        "Space and Earth"
      ],
      correctIndex: 2
    }
  },
  {
    id: 4,
    level: 4,
    title: "Reading Food Labels",
    desc: "Decode hidden sugars, artificial additives, and ingredient lists like a pro.",
    badge: "Label Detective",
    points: 75,
    content: [
      "Ingredients are listed in descending order by weight. If sugar or high-fructose corn syrup is one of the first three ingredients, it's a major component.",
      "Watch out for hidden sugars under alternative names like maltodextrin, dextrose, and cane juice crystals.",
      "The shorter and more recognizable the ingredient list, the closer the food is to its natural form."
    ],
    quiz: {
      question: "How are ingredients listed on packaged food labels?",
      options: [
        "In alphabetical order",
        "In descending order by weight",
        "Randomly by the manufacturer",
        "In order of nutritional value from best to worst"
      ],
      correctIndex: 1
    }
  },
  {
    id: 5,
    level: 5,
    title: "Traditional Indian Grains",
    desc: "Rediscover ancient super-grains like Ragi, Jowar, Bajra, and Amaranth.",
    badge: "Ancient Grain Guru",
    points: 90,
    content: [
      "Before refined wheat and white rice took over, Indian diets relied heavily on climate-resilient ancient grains known as Millets (Shree Anna).",
      "Ragi (Finger Millet) is exceptionally rich in calcium; Jowar (Sorghum) is gluten-free and rich in fiber; Bajra (Pearl Millet) is packed with iron and warming energy.",
      "These grains require less water to grow, making them superstars for both personal and planetary health."
    ],
    quiz: {
      question: "Which millet is exceptionally high in natural calcium?",
      options: [
        "Wheat",
        "Ragi (Finger Millet)",
        "White Rice",
        "Refined Maida"
      ],
      correctIndex: 1
    }
  },
  {
    id: 6,
    level: 6,
    title: "Food and Sustainability",
    desc: "Understand carbon footprints, food waste, and sustainable eating habits.",
    badge: "Eco-Ahaar Champion",
    points: 100,
    content: [
      "Sustainable eating means choosing foods that healthful for your body while placing minimal strain on natural resources.",
      "Reducing food waste, composting organic scraps, and buying locally grown produce drastically lowers your carbon footprint.",
      "Eating plant-forward, seasonal meals preserves biodiversity and conserves precious water supplies."
    ],
    quiz: {
      question: "What is a key benefit of choosing locally grown, seasonal foods?",
      options: [
        "It increases plastic packaging waste",
        "It lowers carbon footprint and supports local ecosystems",
        "It requires long-distance international shipping",
        "It ensures foods are grown out of season"
      ],
      correctIndex: 1
    }
  }
];

// ==========================================
// ROUTER EXPORT
// ==========================================
export const Route = createFileRoute("/ahaar-academy")({
  component: AhaarAcademyPage,
});

function AhaarAcademyPage() {
  // Persistent user state via localStorage
  const [completedLevels, setCompletedLevels] = useState<number[]>(() => {
    const saved = localStorage.getItem("ahaar_academy_completed");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [points, setPoints] = useState<number>(() => {
    const saved = localStorage.getItem("ahaar_academy_points");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [activeLevelId, setActiveLevelId] = useState<number | null>(null);
  const [mode, setMode] = useState<"learn" | "quiz">("learn");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [successCelebration, setSuccessCelebration] = useState<{ title: string; points: number; badge: string } | null>(null);

  useEffect(() => {
    localStorage.setItem("ahaar_academy_completed", JSON.stringify(completedLevels));
    localStorage.setItem("ahaar_academy_points", points.toString());
  }, [completedLevels, points]);

  const activeLevelData = ACADEMY_LEVELS.find(l => l.id === activeLevelId);

  const handleStartLesson = (id: number) => {
    setActiveLevelId(id);
    setMode("learn");
    setSelectedOption(null);
    setQuizSubmitted(false);
  };

  const handleQuizSubmit = () => {
    if (selectedOption === null || !activeLevelData) return;
    setQuizSubmitted(true);

    if (selectedOption === activeLevelData.quiz.correctIndex) {
      // Correct!
      if (!completedLevels.includes(activeLevelData.id)) {
        setCompletedLevels([...completedLevels, activeLevelData.id]);
        setPoints(p => p + activeLevelData.points);
      }
      setSuccessCelebration({
        title: activeLevelData.title,
        points: activeLevelData.points,
        badge: activeLevelData.badge
      });
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative isolate">
      <PageWallpaper />
      
      
      {/* ==========================================
          SUCCESS MODAL CELEBRATION
      ========================================== */}
      {successCelebration && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-sm rounded-[2.5rem] backdrop-blur-md border-2 border-amber-500 bg-amber-950/95 p-8 text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="h-20 w-20 rounded-full bg-amber-500/20 mx-auto flex items-center justify-center mb-4 border border-amber-500/40 animate-bounce">
              <Trophy className="h-10 w-10 text-amber-400" />
            </div>
            
            <h2 className="text-2xl font-display font-black text-amber-300 uppercase tracking-wide mb-1">
              Lesson Complete!
            </h2>
            <p className="text-white/80 text-sm mb-4">
              You mastered <span className="font-bold text-white">"{successCelebration.title}"</span>
            </p>

            <div className="bg-black/10 rounded-2xl backdrop-blur-md p-4 border border-amber-500/30 mb-6 flex flex-col gap-2">
              <div className="flex items-center justify-center gap-1.5 text-amber-300 font-bold text-base">
                <Sparkles className="h-5 w-5 fill-amber-300" />
                <span>+{successCelebration.points} Amrit Points</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-orange-300 font-bold text-sm">
                <Award className="h-4 w-4" />
                <span>Unlocked Badge: {successCelebration.badge}</span>
              </div>
            </div>

            <Button 
              onClick={() => {
                setSuccessCelebration(null);
                setActiveLevelId(null);
              }}
              className="w-full rounded-xl py-6 font-bold text-lg bg-amber-500 text-amber-950 hover:bg-amber-400 shadow-lg"
            >
              Continue Learning
            </Button>
          </div>
        </div>
      )}

      {/* ==========================================
          ACTIVE LESSON / QUIZ VIEW
      ========================================== */}
      {activeLevelData && !successCelebration ? (
        <div className="mx-auto w-full max-w-3xl rounded-[2.5rem] border border-emerald-500/30 bg-emerald-950/35 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-300">
          
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 bg-emerald-900/25 px-3 py-1 rounded-full border border-emerald-500/30">
              Level {activeLevelData.level} of 6
            </span>
            <button 
              onClick={() => setActiveLevelId(null)}
              className="text-white/60 hover:text-white text-sm font-semibold"
            >
              ✕ Exit Lesson
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex gap-2 mb-6 bg-black/10 p-1.5 rounded-2xl backdrop-blur-md border border-white/10">
            <button 
              onClick={() => setMode("learn")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${mode === "learn" ? "bg-emerald-500 text-white shadow-md" : "text-white/60 hover:text-white"}`}
            >
              📖 1. Read & Learn
            </button>
            <button 
              onClick={() => setMode("quiz")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${mode === "quiz" ? "bg-emerald-500 text-white shadow-md" : "text-white/60 hover:text-white"}`}
            >
              ✍️ 2. Take Quiz
            </button>
          </div>

          {mode === "learn" ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {activeLevelData.title}
              </h2>
              
              <div className="space-y-4 text-emerald-100/90 text-base leading-relaxed bg-black/15 p-6 rounded-3xl backdrop-blur-md border border-white/5">
                {activeLevelData.content.map((paragraph, idx) => (
                  <p key={idx} className="flex gap-3">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{paragraph}</span>
                  </p>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <Button 
                  onClick={() => setMode("quiz")}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold px-8 py-6 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                >
                  Ready for Quiz <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                Knowledge Check
              </h2>
              
              <div className="bg-black/15 p-6 rounded-3xl backdrop-blur-md border border-white/5">
                <p className="text-lg font-semibold text-white mb-6">
                  {activeLevelData.quiz.question}
                </p>

                <div className="space-y-3">
                  {activeLevelData.quiz.options.map((option, idx) => {
                    let btnStyle = "bg-white/5 border-white/10 text-white/90 hover:bg-white/10";
                    if (quizSubmitted) {
                      if (idx === activeLevelData.quiz.correctIndex) {
                        btnStyle = "bg-emerald-500/30 border-emerald-500 text-emerald-200 font-bold";
                      } else if (idx === selectedOption) {
                        btnStyle = "bg-red-500/30 border-red-500 text-red-200 line-through";
                      }
                    } else if (selectedOption === idx) {
                      btnStyle = "bg-emerald-500 text-white border-emerald-400 shadow-md";
                    }

                    return (
                      <button
                        key={idx}
                        disabled={quizSubmitted}
                        onClick={() => setSelectedOption(idx)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span className="text-sm sm:text-base">{option}</span>
                        <span className="text-xs font-bold opacity-60">0{idx + 1}</span>
                      </button>
                    );
                  })}
                </div>

                {quizSubmitted && selectedOption !== activeLevelData.quiz.correctIndex && (
                  <div className="mt-6 p-4 rounded-2xl bg-red-950/50 border border-red-500/30 text-red-300 text-sm flex items-center justify-between">
                    <span>Incorrect! Review the lesson material and try again.</span>
                    <button 
                      onClick={() => { setQuizSubmitted(false); setSelectedOption(null); }}
                      className="flex items-center gap-1 font-bold underline"
                    >
                      <RotateCcw className="h-4 w-4" /> Retry
                    </button>
                  </div>
                )}
              </div>

              {!quizSubmitted && (
                <div className="flex justify-between pt-4">
                  <Button 
                    variant="ghost"
                    onClick={() => setMode("learn")}
                    className="text-white/70 hover:text-white"
                  >
                    Back to Lesson
                  </Button>
                  <Button 
                    onClick={handleQuizSubmit}
                    disabled={selectedOption === null}
                    className={`font-bold px-8 py-6 rounded-2xl shadow-lg ${selectedOption === null ? "bg-white/10 text-white/30 cursor-not-allowed" : "bg-emerald-500 text-white hover:bg-emerald-400"}`}
                  >
                    Submit Answer
                  </Button>
                </div>
              )}
            </div>
          )}

        </div>
      ) : (
        // ==========================================
        // ACADEMY DASHBOARD VIEW
        // ==========================================
        <div className="mx-auto w-full max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-emerald-900/25 rounded-2xl backdrop-blur-md mb-4 border border-emerald-500/30 shadow-lg">
              <GraduationCap className="h-8 w-8 text-emerald-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-emerald-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                My Ahaar Academia
              </span>
            </h1>
            <p className="text-emerald-200/80 max-w-2xl mx-auto text-sm sm:text-base">
              Interactive short lessons on nutrition, seasonal foods, and Ayurveda. Learn, test your knowledge, and earn badges!
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
            <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-emerald-950/30 p-4 shadow-inner backdrop-blur-xl">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xl">
                <Sparkles className="h-6 w-6 fill-amber-300" />
                <span>{points}</span>
              </div>
              <span className="text-xs font-medium text-emerald-200/70">Academia Points</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-emerald-950/30 p-4 shadow-inner backdrop-blur-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xl">
                <Trophy className="h-6 w-6" />
                <span>{completedLevels.length} / 6</span>
              </div>
              <span className="text-xs font-medium text-emerald-200/70">Levels Completed</span>
            </div>
          </div>

          {/* Levels Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMY_LEVELS.map((lvl) => {
              const isDone = completedLevels.includes(lvl.id);
              return (
                <div 
                  key={lvl.id}
                  className={`
                    relative overflow-hidden rounded-[2.5rem] border p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl shadow-xl
                    ${isDone 
                      ? "bg-emerald-950/35 border-emerald-500/50 shadow-emerald-500/10" 
                      : "bg-emerald-950/25 border-white/10 hover:border-emerald-500/30 hover:bg-emerald-900/15"
                    }
                  `}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${isDone ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : "bg-white/5 text-white/70 border-white/10"}`}>
                        Level {lvl.level}
                      </span>
                      {isDone && (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Completed
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {lvl.title}
                    </h3>
                    <p className="text-sm text-emerald-100/70 mb-6 leading-relaxed">
                      {lvl.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4 pt-4 border-t border-white/10 text-xs">
                      <span className="text-amber-300 font-semibold flex items-center gap-1">
                        <Sparkles className="h-3.5 w-3.5" /> +{lvl.points} Pts
                      </span>
                      <span className="text-orange-300 font-semibold flex items-center gap-1">
                        <Award className="h-3.5 w-3.5" /> {lvl.badge}
                      </span>
                    </div>

                    <Button
                      onClick={() => handleStartLesson(lvl.id)}
                      className={`
                        w-full rounded-2xl py-5 font-bold transition-all shadow-md flex items-center justify-center gap-2
                        ${isDone 
                          ? "bg-emerald-900/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-900/15" 
                          : "bg-emerald-500 text-white hover:bg-emerald-400"
                        }
                      `}
                    >
                      <BookOpen className="h-4 w-4" /> {isDone ? "Review Lesson" : "Start Lesson"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
}
