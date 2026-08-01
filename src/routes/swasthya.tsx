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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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

function SwasthyaPage() {
  // =====================================================
  // STREAK TRACKER LOGIC
  // =====================================================
  const [streak, setStreak] = useState(0);
  const [loggedToday, setLoggedToday] = useState(false);

  useEffect(() => {
    // Load saved streak data when the page opens
    const savedStreak = localStorage.getItem("ahaar_junk_streak");
    const lastDate = localStorage.getItem("ahaar_last_logged_date");
    const today = new Date().toDateString();

    if (savedStreak) {
      setStreak(parseInt(savedStreak));
    }

    if (lastDate === today) {
      setLoggedToday(true);
    }
  }, []);

  const handleLogDay = () => {
    if (!loggedToday) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setLoggedToday(true);
      
      const today = new Date().toDateString();
      localStorage.setItem("ahaar_junk_streak", newStreak.toString());
      localStorage.setItem("ahaar_last_logged_date", today);
    }
  };

  const handleResetStreak = () => {
    setStreak(0);
    setLoggedToday(false);
    localStorage.setItem("ahaar_junk_streak", "0");
    localStorage.removeItem("ahaar_last_logged_date");
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
        {/* A very light emerald tint so the glass cards are readable, but the image remains fully visible */}
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
        <section className="relative overflow-hidden rounded-[2rem] border border-amber-500/30 bg-black/40 p-8 text-center shadow-2xl backdrop-blur-xl transition-all hover:border-amber-400/50">
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
          
          <h2 className="font-display text-xl font-bold text-emerald-50 mb-2">
            My Junk-Free Streak
          </h2>
          <p className="text-sm text-emerald-100/80 mb-6">
            Build discipline. Keep your skin clear and energy high!
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Flame className={`h-12 w-12 ${streak > 0 ? "text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] animate-pulse" : "text-emerald-100/30"}`} />
            <span className="font-display text-6xl font-black text-white tracking-tighter">
              {streak}
            </span>
            <span className="text-lg font-bold text-amber-200 uppercase tracking-widest mt-4">
              Days
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={handleLogDay}
              disabled={loggedToday}
              className={`rounded-full px-8 py-6 text-base shadow-xl transition-all ${
                loggedToday 
                  ? "bg-emerald-900/50 text-emerald-300 opacity-80" 
                  : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white hover:scale-105"
              }`}
            >
              {loggedToday ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Logged for Today!
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  I Didn't Eat Junk Today
                </>
              )}
            </Button>

            {streak > 0 && (
              <Button
                variant="ghost"
                onClick={handleResetStreak}
                className="rounded-full px-6 py-6 text-red-300 hover:bg-red-950/40 hover:text-red-200"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Oops, I ate junk
              </Button>
            )}
          </div>
        </section>


        {/* =====================================================
            SECTION 1: THE JUNK FOOD TRUTH LAB (GLASS CARDS)
        ===================================================== */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 backdrop-blur-md">
              <Skull className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-emerald-50 drop-shadow-md">
                Junk Food Truth Lab
              </h2>
              <p className="font-hindi text-sm text-emerald-100 drop-shadow-md">
                जानिए आपके पसंदीदा जंक फ़ूड में असल में क्या है
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* PIZZA / BURGER */}
            <div className="rounded-[2rem] border border-white/20 bg-black/40 p-6 backdrop-blur-xl shadow-xl space-y-4 hover:border-emerald-400/50 transition-all">
              <div className="text-lg font-bold text-emerald-300">🍕 Pizza & Burgers</div>
              <div className="space-y-2 text-xs text-emerald-50">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Saturated Fats:</span>
                  <span className="font-bold text-amber-400">20g - 35g (High)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Sodium (Salt):</span>
                  <span className="font-bold text-amber-400">1200mg (60% Limit)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Refined Flour:</span>
                  <span className="font-bold text-amber-400">80g+</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>Vitamins & Fiber:</span>
                  <span className="font-bold text-red-400">Almost 0%</span>
                </div>
              </div>
            </div>

            {/* CHOWMEIN & CHILLI POTATO */}
            <div className="rounded-[2rem] border border-white/20 bg-black/40 p-6 backdrop-blur-xl shadow-xl space-y-4 hover:border-emerald-400/50 transition-all">
              <div className="text-lg font-bold text-emerald-300">🍜 Chowmein & Chilli Potato</div>
              <div className="space-y-2 text-xs text-emerald-50">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Palm / Reused Oil:</span>
                  <span className="font-bold text-amber-400">25g+ (Trans-fats)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>MSG & Sodium:</span>
                  <span className="font-bold text-amber-400">Extremely High</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Glycemic Index:</span>
                  <span className="font-bold text-amber-400">High (Fat Store)</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>Protein Quality:</span>
                  <span className="font-bold text-red-400">Very Low</span>
                </div>
              </div>
            </div>

            {/* FRIES & FRIED MOMOS */}
            <div className="rounded-[2rem] border border-white/20 bg-black/40 p-6 backdrop-blur-xl shadow-xl space-y-4 hover:border-emerald-400/50 transition-all">
              <div className="text-lg font-bold text-emerald-300">🍟 Fries & Fried Momos</div>
              <div className="space-y-2 text-xs text-emerald-50">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Acrylamide Toxins:</span>
                  <span className="font-bold text-amber-400">High (Deep Frying)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Empty Calories:</span>
                  <span className="font-bold text-amber-400">400 - 600 kcal</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Dietary Fiber:</span>
                  <span className="font-bold text-red-400">&lt; 1g</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>Hydration Impact:</span>
                  <span className="font-bold text-amber-400">Dehydrating</span>
                </div>
              </div>
            </div>

            {/* COLD DRINKS & SODA */}
            <div className="rounded-[2rem] border border-white/20 bg-black/40 p-6 backdrop-blur-xl shadow-xl space-y-4 hover:border-emerald-400/50 transition-all">
              <div className="text-lg font-bold text-emerald-300">🥤 Fizzy Drinks & Soda</div>
              <div className="space-y-2 text-xs text-emerald-50">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Added Sugar:</span>
                  <span className="font-bold text-amber-400">35g - 40g (10 tsp)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Phosphoric Acid:</span>
                  <span className="font-bold text-amber-400">Blocks Calcium</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Nutritional Value:</span>
                  <span className="font-bold text-red-400">Absolute 0</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>Enamel Damage:</span>
                  <span className="font-bold text-amber-400">High Erosion</span>
                </div>
              </div>
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
