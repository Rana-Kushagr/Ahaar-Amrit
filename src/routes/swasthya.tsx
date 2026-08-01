import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowLeft,
  Flame,
  AlertTriangle,
  ShieldAlert,
  Skull,
  CheckCircle2,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const title = "Swasthya & Junk Food Reality — Ahaar Amrit";
const description =
  "Exposing the hidden truth of junk foods: Fats, Sodium, Sugar, and their impact on teen skin, height, weight, and overall looks.";

export const Route = createFileRoute("/swasthya")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SwasthyaPage,
});

// =====================================================
// 10 DETAILED JUNK FOODS DATA
// =====================================================
const junkFoods = [
  {
    name: "🍔 Burgers & Cheeseburgers",
    nutrients: [
      { label: "Saturated Fats", value: "20g+", color: "text-amber-400" },
      { label: "Sodium (Salt)", value: "1000mg", color: "text-amber-400" },
      { label: "Refined Flour (Bun)", value: "High", color: "text-red-400" },
      { label: "Protein Quality", value: "Processed", color: "text-red-400" },
    ],
    effects: "Causes rapid insulin spikes from the maida bun, signaling glands to produce excess sebum.",
    longTerm: "Leads to severe acne breakouts, sluggishness, and stubborn belly fat.",
  },
  {
    name: "🍕 Pizza",
    nutrients: [
      { label: "Cheese / Trans Fats", value: "Extremely High", color: "text-red-400" },
      { label: "Sodium (Salt)", value: "1500mg+", color: "text-amber-400" },
      { label: "Empty Carbs", value: "60g+", color: "text-amber-400" },
      { label: "Dietary Fiber", value: "< 2g", color: "text-red-400" },
    ],
    effects: "Excess sodium traps water under the skin, leading to immediate face bloating and puffy eyes.",
    longTerm: "Causes chronic gut issues, oily skin, and unwanted obesity in teens.",
  },
  {
    name: "🍜 Instant Noodles",
    nutrients: [
      { label: "Sodium & MSG", value: "Toxic Levels", color: "text-red-400" },
      { label: "Palm Oil (Fried)", value: "15g+", color: "text-amber-400" },
      { label: "Refined Wheat", value: "100%", color: "text-red-400" },
      { label: "Essential Vitamins", value: "0%", color: "text-red-400" },
    ],
    effects: "Coated in wax and deep-fried in palm oil; impossible to digest quickly, killing gut bacteria.",
    longTerm: "Results in severe bloating, dark circles, and long-term metabolic damage.",
  },
  {
    name: "🌶️ Chowmein & Chilli Potato",
    nutrients: [
      { label: "Reused Oil / Fats", value: "25g+", color: "text-red-400" },
      { label: "Glycemic Index", value: "Very High", color: "text-amber-400" },
      { label: "Ajinomoto (MSG)", value: "High", color: "text-red-400" },
      { label: "Fiber & Protein", value: "Almost 0g", color: "text-red-400" },
    ],
    effects: "High glycemic index forces the body to store all consumed calories instantly as fat.",
    longTerm: "Hormonal imbalances, stubborn facial acne, and lower belly fat accumulation.",
  },
  {
    name: "🍫 Chocolates & Candy Bars",
    nutrients: [
      { label: "Added Sugars", value: "30g+", color: "text-red-400" },
      { label: "Corn Syrup", value: "High", color: "text-red-400" },
      { label: "Artificial Flavors", value: "High", color: "text-amber-400" },
      { label: "Real Cocoa", value: "Very Low", color: "text-amber-400" },
    ],
    effects: "Creates a massive 30-minute sugar rush followed by a severe energy crash and brain fog.",
    longTerm: "Causes rapid tooth decay, premature skin dullness (glycation), and mood swings.",
  },
  {
    name: "🍩 Doughnuts & Pastries",
    nutrients: [
      { label: "Deep-Fried Fats", value: "20g+", color: "text-red-400" },
      { label: "Refined Sugar", value: "25g+", color: "text-red-400" },
      { label: "Maida", value: "High", color: "text-amber-400" },
      { label: "Nutritional Value", value: "Zero", color: "text-red-400" },
    ],
    effects: "The combination of deep-frying and high sugar causes massive inflammation in the body.",
    longTerm: "Drastically increases the risk of teen obesity, lethargy, and dull, aging skin.",
  },
  {
    name: "🥤 Carbonated Soft Drinks",
    nutrients: [
      { label: "Added Sugar", value: "40g (10 tsp!)", color: "text-red-400" },
      { label: "Phosphoric Acid", value: "High", color: "text-red-400" },
      { label: "Empty Calories", value: "150+", color: "text-amber-400" },
      { label: "Hydration", value: "Dehydrating", color: "text-amber-400" },
    ],
    effects: "Phosphoric acid blocks calcium absorption during your most crucial growth years.",
    longTerm: "Permanently stunts height potential, erodes dental enamel, and causes sudden weight gain.",
  },
  {
    name: "⚡ Energy Drinks",
    nutrients: [
      { label: "Caffeine", value: "Extreme", color: "text-red-400" },
      { label: "Taurine & Guarana", value: "High", color: "text-amber-400" },
      { label: "Artificial Sweeteners", value: "Toxic", color: "text-red-400" },
      { label: "Sugar", value: "30g+", color: "text-amber-400" },
    ],
    effects: "Overstimulates the nervous system, causing heart palpitations, anxiety, and jitters.",
    longTerm: "Severe sleep disruption, dark circles under eyes, and chronic exam stress/brain fog.",
  },
  {
    name: "🧋 Flavoured Milks & Shakes",
    nutrients: [
      { label: "Hidden Sugars", value: "35g+", color: "text-red-400" },
      { label: "Saturated Dairy Fat", value: "High", color: "text-amber-400" },
      { label: "Artificial Colors", value: "High", color: "text-red-400" },
      { label: "Real Fruit", value: "0%", color: "text-amber-400" },
    ],
    effects: "Thick, sugar-loaded dairy heavily triggers sebum production in teenage skin.",
    longTerm: "Leads to cystic acne, lactose-induced bloating, and sluggish digestion.",
  },
  {
    name: "🍗 Fried Chicken & Fries",
    nutrients: [
      { label: "Trans Fats", value: "Dangerous", color: "text-red-400" },
      { label: "Acrylamide (Toxins)", value: "High", color: "text-red-400" },
      { label: "Sodium", value: "1200mg+", color: "text-amber-400" },
      { label: "Cholesterol", value: "High", color: "text-amber-400" },
    ],
    effects: "Deep frying creates acrylamides, which are highly inflammatory and toxic to the skin.",
    longTerm: "Greasy skin, poor heart health stamina for sports, and overall bodily inflammation.",
  },
];


function SwasthyaPage() {
  // =====================================================
  // STREAK TRACKER LOGIC
  // =====================================================
  const [streak, setStreak] = useState(0);
  const [loggedToday, setLoggedToday] = useState(false);
  const [failedToday, setFailedToday] = useState(false);

  useEffect(() => {
    const savedStreak = localStorage.getItem("ahaar_junk_streak");
    const lastLoggedDate = localStorage.getItem("ahaar_last_logged_date");
    const lastFailedDate = localStorage.getItem("ahaar_last_failed_date");
    const today = new Date().toDateString();

    if (savedStreak) {
      setStreak(parseInt(savedStreak));
    }

    if (lastLoggedDate === today) {
      setLoggedToday(true);
    }

    if (lastFailedDate === today) {
      setFailedToday(true);
    }
  }, []);

  const handleLogDay = () => {
    if (!loggedToday && !failedToday) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setLoggedToday(true);
      
      const today = new Date().toDateString();
      localStorage.setItem("ahaar_junk_streak", newStreak.toString());
      localStorage.setItem("ahaar_last_logged_date", today);
    }
  };

  const handleFailDay = () => {
    const today = new Date().toDateString();
    setStreak(0);
    setLoggedToday(false);
    setFailedToday(true);
    
    localStorage.setItem("ahaar_junk_streak", "0");
    localStorage.setItem("ahaar_last_failed_date", today);
    // Remove logged date if they change their mind and fail
    localStorage.removeItem("ahaar_last_logged_date"); 
  };


  // =====================================================
  // INFINITE ROULETTE CAROUSEL LOGIC
  // =====================================================
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // We duplicate the array to create a seamless infinite loop illusion
  const extendedItems = [...junkFoods, ...junkFoods, ...junkFoods];
  const realLength = junkFoods.length;
  const offsetIndex = realLength; // Start at the middle duplicate

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - startX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (dragOffset > 50) {
      handlePrev();
    } else if (dragOffset < -50) {
      handleNext();
    }
    setDragOffset(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % realLength);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + realLength) % realLength);
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-36">

      {/* =====================================================
          100% CRYSTAL CLEAR BACKGROUND
      ===================================================== */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-emerald-950/40" />
      </div>

      <div className="relative mx-auto max-w-5xl space-y-10">

        {/* =====================================================
            BACK BUTTON (GLASS UI)
        ===================================================== */}
        <Link
          to="/dashboard"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-emerald-950/60
            px-4
            py-2
            text-sm
            text-emerald-50
            shadow-lg
            backdrop-blur-md
            transition-all
            hover:-translate-x-1
            hover:bg-emerald-900/80
          "
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>


        {/* =====================================================
            HERO HEADER (PREMIUM GLASS UI)
        ===================================================== */}
        <header
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            border
            border-white/20
            bg-emerald-950/40
            p-8
            text-center
            shadow-2xl
            backdrop-blur-xl
            backdrop-saturate-150
            sm:p-12
          "
        >
          <div className="relative mb-5 flex justify-center">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-emerald-500/30
                border
                border-emerald-400/40
                shadow-[0_15px_40px_rgba(16,185,129,0.2)]
              "
            >
              <Sparkles className="h-8 w-8 text-emerald-300" />
            </div>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-emerald-50 sm:text-5xl">
            Swasthya & <span className="text-amber-400">Junk Reality</span>
          </h1>

          <p className="mt-3 font-hindi text-base text-emerald-200/90">
            जंक फ़ूड का कड़वा सच: आपकी सुंदरता, हाइट और एनर्जी पर असर
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-emerald-100/90 sm:text-base">
            Exposing what fast food actually contains and how it secretly affects your skin, body shape, growth, and confidence.
          </p>
        </header>

        {/* =====================================================
            STREAK TRACKER WIDGET
        ===================================================== */}
        <section className="rounded-[2rem] border border-white/20 bg-black/40 p-8 text-center backdrop-blur-xl shadow-xl space-y-4 hover:border-emerald-400/50 transition-all">
          <h2 className="font-display text-2xl font-bold text-emerald-50 drop-shadow-md">
            My Junk-Free Streak
          </h2>
          <p className="font-hindi text-sm text-emerald-100 drop-shadow-md">
            Build discipline. Keep your skin clear and energy high!
          </p>

          <div className="flex items-center justify-center gap-4 py-4">
            <Flame className={`h-10 w-10 ${streak > 0 ? "text-amber-400 animate-pulse" : "text-white/30"}`} />
            <span className="font-display text-5xl font-bold text-emerald-300">
              {streak}
            </span>
            <span className="text-lg font-bold text-emerald-50 mt-3">
              Days
            </span>
          </div>

          {failedToday && (
            <div className="mb-4 text-sm font-bold text-red-400 bg-red-950/40 border border-red-500/30 py-2 px-4 rounded-full inline-block mx-auto">
              You ate junk food today. Streak reset to 0! Try again tomorrow.
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={handleLogDay}
              disabled={loggedToday || failedToday}
              className={`rounded-full px-6 py-2 transition-all ${
                loggedToday 
                  ? "bg-emerald-950/60 text-emerald-300 border border-emerald-500/30" 
                  : failedToday
                  ? "bg-gray-800/50 text-gray-400 opacity-50 cursor-not-allowed border border-gray-600/30"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white"
              }`}
            >
              {loggedToday ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Logged for Today!
                </>
              ) : failedToday ? (
                <>
                  <ShieldAlert className="mr-2 h-4 w-4" />
                  Locked for Today
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  I Didn't Eat Junk Today
                </>
              )}
            </Button>

            <Button
              variant="ghost"
              onClick={handleFailDay}
              disabled={failedToday}
              className={`rounded-full px-6 py-2 transition-all ${
                failedToday
                  ? "text-red-500/50 cursor-not-allowed"
                  : "text-red-400 hover:bg-red-950/40 hover:text-red-300"
              }`}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Oops, I ate junk
            </Button>
          </div>
        </section>


        {/* =====================================================
            SECTION 1: THE JUNK FOOD TRUTH LAB (INFINITE CAROUSEL)
        ===================================================== */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 backdrop-blur-md">
                <Skull className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-emerald-50 drop-shadow-md">
                  Junk Food Truth Lab
                </h2>
                <p className="font-hindi text-sm text-emerald-100 drop-shadow-md">
                  Swipe to reveal the reality of 10 popular junk foods
                </p>
              </div>
            </div>
            <div className="hidden sm:flex gap-2">
              <Button variant="ghost" onClick={handlePrev} className="rounded-full bg-black/40 text-emerald-100 hover:bg-emerald-900/60 border border-white/20">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" onClick={handleNext} className="rounded-full bg-black/40 text-emerald-100 hover:bg-emerald-900/60 border border-white/20">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden w-full select-none touch-pan-y"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div 
              ref={containerRef}
              className="flex w-full"
              style={{
                transform: `translateX(calc(-${(offsetIndex + currentIndex) * 50}% + ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {extendedItems.map((food, i) => (
                <div key={i} className="min-w-[100%] sm:min-w-[50%] p-2">
                  <div className="h-full rounded-[2rem] border border-white/20 bg-black/40 p-6 backdrop-blur-xl shadow-xl space-y-4 hover:border-emerald-400/50 transition-all flex flex-col">
                    <div className="text-lg font-bold text-emerald-300">{food.name}</div>
                    
                    <div className="space-y-2 text-xs text-emerald-50 flex-grow">
                      {food.nutrients.map((n, idx) => (
                        <div key={idx} className="flex justify-between border-b border-white/10 pb-1">
                          <span>{n.label}:</span>
                          <span className={`font-bold ${n.color}`}>{n.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 space-y-2">
                      <div className="text-xs text-amber-200">
                        <strong className="block text-amber-400 mb-1">Immediate Effect:</strong>
                        {food.effects}
                      </div>
                      <div className="text-xs text-red-300 border-t border-white/10 pt-2">
                        <strong className="block text-red-400 mb-1">Long-Term Impact:</strong>
                        {food.longTerm}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* =====================================================
            SECTION 2: HOW JUNK FOOD IMPACTS YOUR LOOKS & GROWTH
        ===================================================== */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 backdrop-blur-md">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-emerald-50 drop-shadow-md">
                How It Affects Your Looks & Body
              </h2>
              <p className="font-hindi text-sm text-emerald-100 drop-shadow-md">
                चेहरे, बालों और ग्रोथ पर जंक फ़ूड का सीधा हमला
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {/* IMPACT 1 */}
            <div className="rounded-[2rem] border border-white/20 bg-emerald-950/40 p-7 shadow-xl backdrop-blur-xl space-y-3 hover:border-emerald-400/50 transition-all">
              <h3 className="font-display text-xl font-bold text-amber-300 flex items-center gap-2">
                🔴 Acne, Pimples & Dull Skin
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                Refined Maida and high sugar cause insulin spikes. This signals your skin glands to produce excess oil (sebum), clogging pores and causing <strong className="text-white">painful pimples and dull, oily skin</strong>.
              </p>
            </div>

            {/* IMPACT 2 */}
            <div className="rounded-[2rem] border border-white/20 bg-emerald-950/40 p-7 shadow-xl backdrop-blur-xl space-y-3 hover:border-emerald-400/50 transition-all">
              <h3 className="font-display text-xl font-bold text-amber-300 flex items-center gap-2">
                📏 Stunted Height & Weak Bones
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                Teens need maximum Calcium and Vitamin D for bone growth. Cold drinks contain <strong className="text-white">Phosphoric Acid</strong>, which leaches Calcium directly out of your bones, slowing down natural height potential!
              </p>
            </div>

            {/* IMPACT 3 */}
            <div className="rounded-[2rem] border border-white/20 bg-emerald-950/40 p-7 shadow-xl backdrop-blur-xl space-y-3 hover:border-emerald-400/50 transition-all">
              <h3 className="font-display text-xl font-bold text-amber-300 flex items-center gap-2">
                ⚠️ Stubborn Belly Fat & Face Bloating
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                Junk food is packed with excess sodium. Sodium forces your body to trap water under your skin, leading to <strong className="text-white">bloated cheeks, puffy eyes, and stubborn lower belly fat</strong>.
              </p>
            </div>

            {/* IMPACT 4 */}
            <div className="rounded-[2rem] border border-white/20 bg-emerald-950/40 p-7 shadow-xl backdrop-blur-xl space-y-3 hover:border-emerald-400/50 transition-all">
              <h3 className="font-display text-xl font-bold text-amber-300 flex items-center gap-2">
                💤 Brain Fog & Exam Laziness
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                Fast food gives a 30-minute energy rush followed by a massive <strong className="text-white">sugar crash</strong>. This leaves you feeling sluggish, irritable, and unable to focus during late-night study sessions.
              </p>
            </div>

          </div>
        </section>


        {/* =====================================================
            SECTION 3: SMART CRAVING SWAPS
        ===================================================== */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-emerald-50 shadow-lg">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-emerald-50 drop-shadow-md">
                Smart Indian Craving Swaps
              </h2>
              <p className="font-hindi text-sm text-emerald-100 drop-shadow-md">
                बिना मज़ा खोए स्वस्थ विकल्प
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {/* SWAP 1 */}
            <div className="rounded-[2rem] border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur-xl space-y-4 hover:border-emerald-400/50 transition-all">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full w-fit">
                Swap: Chowmein / Chilli Potato
              </div>
              <h3 className="font-display text-xl font-bold text-emerald-50">
                Sesame Chilli Makhana or Sevaiyan
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                Crunchy fox nuts or rice vermicelli tossed with sesame seeds, curry leaves, and veggies.
              </p>
              <div className="border-t border-white/20 pt-3 text-xs text-amber-400 font-medium">
                💡 Result: Clear skin, zero maida, high protein.
              </div>
            </div>

            {/* SWAP 2 */}
            <div className="rounded-[2rem] border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur-xl space-y-4 hover:border-emerald-400/50 transition-all">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full w-fit">
                Swap: Pizza / Burger
              </div>
              <h3 className="font-display text-xl font-bold text-emerald-50">
                Paneer & Veggie Mini Uttapam
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                Fermented rice-dal base topped with spiced paneer, capsicum, onions, and mint chutney.
              </p>
              <div className="border-t border-white/20 pt-3 text-xs text-amber-400 font-medium">
                💡 Result: Clean gut, no bloating, sustained stamina.
              </div>
            </div>

            {/* SWAP 3 */}
            <div className="rounded-[2rem] border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur-xl space-y-4 hover:border-emerald-400/50 transition-all">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full w-fit">
                Swap: French Fries
              </div>
              <h3 className="font-display text-xl font-bold text-emerald-50">
                Peri-Peri Roasted Shakarkandi
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                Air-fried or roasted sweet potato wedges seasoned with spicy peri-peri chaat masala.
              </p>
              <div className="border-t border-white/20 pt-3 text-xs text-amber-400 font-medium">
                💡 Result: Vitamin A for glowing skin & slow carbs.
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            SECTION 4: JUNK DETOX RECOVERY
        ===================================================== */}
        <section className="rounded-[2rem] border border-amber-500/40 bg-amber-950/40 p-6 shadow-2xl backdrop-blur-xl sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 backdrop-blur-md">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-amber-200">
              Ate Junk Food Today? 1-Day Recovery Protocol!
            </h2>
          </div>

          <p className="text-sm text-amber-100/90 leading-relaxed">
            Don't stress or starve yourself! Do this tomorrow to flush out sodium and prevent pimples:
          </p>

          <div className="grid gap-3 sm:grid-cols-3 pt-2">
            <div className="rounded-xl border border-white/20 bg-emerald-950/60 p-4 text-xs text-emerald-50 space-y-1 backdrop-blur-md">
              <strong className="text-amber-300 block text-sm">1. Hydrate & Flush</strong>
              Drink warm Saunf-Coriander water to eliminate salt retention & face bloating.
            </div>
            <div className="rounded-xl border border-white/20 bg-emerald-950/60 p-4 text-xs text-emerald-50 space-y-1 backdrop-blur-md">
              <strong className="text-amber-300 block text-sm">2. Light Khichdi Dinner</strong>
              Have a warm moong dal khichdi to give your gut a chance to recover.
            </div>
            <div className="rounded-xl border border-white/20 bg-emerald-950/60 p-4 text-xs text-emerald-50 space-y-1 backdrop-blur-md">
              <strong className="text-amber-300 block text-sm">3. Probiotic Bowl</strong>
              Have a bowl of fresh curd with a pinch of black salt to restore healthy gut bacteria.
            </div>
          </div>
        </section>


        {/* =====================================================
            BOTTOM ACTIONS
        ===================================================== */}
        <div className="flex flex-wrap justify-center gap-4 pt-4 pb-6">
          <Button variant="hero" asChild>
            <Link to="/nutrition-plan">Get My Daily Nutrition Plan</Link>
          </Button>
          <Button variant="ghost" className="text-emerald-100 hover:bg-emerald-900/50 backdrop-blur-md" asChild>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>

      </div>
    </main>
  );
}
