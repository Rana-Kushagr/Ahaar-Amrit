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
  Droplets,
  Moon,
  Apple,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const title = "Swasthya & Junk Food Reality — Ahaar Amrit";

const description =
  "Explore how frequently eating highly processed foods can affect energy, skin, sleep, dental health and overall nutrition — plus practical Indian food swaps.";

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
// JUNK FOOD DATA
// =====================================================

const junkFoods = [
  {
    name: "🍔 Burgers & Cheeseburgers",
    nutrients: [
      { label: "Saturated Fat", value: "Can be high", color: "text-amber-400" },
      { label: "Sodium", value: "Often high", color: "text-amber-400" },
      { label: "Refined Flour", value: "Common in buns", color: "text-red-400" },
      { label: "Protein", value: "Varies by filling", color: "text-emerald-300" },
    ],
    effects:
      "Many burgers combine refined grains, cheese, sauces and salty processed ingredients, which can make the meal high in calories, sodium and saturated fat.",
    longTerm:
      "Eating these foods very frequently can make it harder to maintain a balanced diet and may contribute to excess calorie intake over time.",
  },

  {
    name: "🍕 Pizza",
    nutrients: [
      { label: "Cheese / Saturated Fat", value: "Can be high", color: "text-red-400" },
      { label: "Sodium", value: "Often high", color: "text-amber-400" },
      { label: "Refined Carbohydrates", value: "Common", color: "text-amber-400" },
      { label: "Dietary Fiber", value: "Varies", color: "text-emerald-300" },
    ],
    effects:
      "Large portions of pizza can provide substantial sodium, refined carbohydrates and saturated fat, especially when loaded with cheese and processed toppings.",
    longTerm:
      "Having it frequently without enough vegetables, fruits and other nutrient-rich foods may reduce overall diet quality.",
  },

  {
    name: "🍜 Instant Noodles",
    nutrients: [
      { label: "Sodium", value: "Often very high", color: "text-red-400" },
      { label: "Added Fat", value: "Varies", color: "text-amber-400" },
      { label: "Refined Wheat", value: "Common", color: "text-red-400" },
      { label: "Micronutrients", value: "Often limited", color: "text-amber-400" },
    ],
    effects:
      "Instant noodles can be convenient but many varieties are high in sodium and relatively low in vegetables, fibre and micronutrients.",
    longTerm:
      "Eating them very often instead of varied meals may make it harder to get enough fibre, protein and essential nutrients.",
  },

  {
    name: "🌶️ Chowmein & Chilli Potato",
    nutrients: [
      { label: "Added Oil", value: "Can be high", color: "text-red-400" },
      { label: "Refined Carbohydrates", value: "Often high", color: "text-amber-400" },
      { label: "Sodium", value: "Can be high", color: "text-red-400" },
      { label: "Vegetables", value: "Varies", color: "text-emerald-300" },
    ],
    effects:
      "Restaurant-style versions may contain considerable oil, refined carbohydrates and salty sauces.",
    longTerm:
      "Frequent large portions can contribute to excess calorie intake and may displace more balanced meals containing vegetables and protein.",
  },

  {
    name: "🍫 Chocolates & Candy Bars",
    nutrients: [
      { label: "Added Sugar", value: "Often high", color: "text-red-400" },
      { label: "Saturated Fat", value: "Varies", color: "text-amber-400" },
      { label: "Artificial Flavors", value: "Varies", color: "text-amber-400" },
      { label: "Cocoa", value: "Varies widely", color: "text-emerald-300" },
    ],
    effects:
      "Sugary snacks provide quick energy but often contain little fibre or protein compared with whole-food snacks.",
    longTerm:
      "Frequent consumption of sugary foods can increase the risk of dental cavities and make it easier to consume excess added sugar.",
  },

  {
    name: "🍩 Doughnuts & Pastries",
    nutrients: [
      { label: "Added Sugar", value: "Often high", color: "text-red-400" },
      { label: "Deep-Fried Fat", value: "May be high", color: "text-red-400" },
      { label: "Refined Flour", value: "Common", color: "text-amber-400" },
      { label: "Fiber", value: "Often low", color: "text-red-400" },
    ],
    effects:
      "Doughnuts and pastries often combine refined flour, added sugar and fat, making them energy-dense foods.",
    longTerm:
      "Frequent intake may contribute to excess calorie consumption and can leave less room in the diet for nutrient-rich foods.",
  },

  {
    name: "🥤 Carbonated Soft Drinks",
    nutrients: [
      { label: "Added Sugar", value: "Can be high", color: "text-red-400" },
      { label: "Acids", value: "Present", color: "text-red-400" },
      { label: "Calories", value: "Varies by type", color: "text-amber-400" },
      { label: "Nutrients", value: "Usually limited", color: "text-amber-400" },
    ],
    effects:
      "Sugary soft drinks can add a significant amount of sugar without providing much nutritional value.",
    longTerm:
      "Frequent sugary drinks are associated with higher risk of dental cavities and excess calorie intake. Choosing water or unsweetened drinks more often is a practical habit.",
  },

  {
    name: "⚡ Energy Drinks",
    nutrients: [
      { label: "Caffeine", value: "Can be high", color: "text-red-400" },
      { label: "Added Sugar", value: "Varies", color: "text-amber-400" },
      { label: "Stimulants", value: "May be present", color: "text-red-400" },
      { label: "Hydration", value: "Not ideal", color: "text-amber-400" },
    ],
    effects:
      "Energy drinks can contain substantial caffeine and sometimes large amounts of added sugar.",
    longTerm:
      "For teenagers, high caffeine intake can interfere with sleep and may cause unwanted effects such as jitteriness, anxiety or a racing heartbeat.",
  },

  {
    name: "🧋 Flavoured Milks & Shakes",
    nutrients: [
      { label: "Added Sugar", value: "Can be high", color: "text-red-400" },
      { label: "Saturated Fat", value: "Varies", color: "text-amber-400" },
      { label: "Flavourings", value: "Varies", color: "text-red-400" },
      { label: "Real Fruit", value: "Varies widely", color: "text-amber-400" },
    ],
    effects:
      "Some flavoured milk drinks and shakes contain much more added sugar than plain milk or unsweetened homemade versions.",
    longTerm:
      "Frequent high-sugar drinks can contribute to excess calorie intake and dental problems.",
  },

  {
    name: "🍗 Fried Chicken & Fries",
    nutrients: [
      { label: "Saturated Fat", value: "Can be high", color: "text-red-400" },
      { label: "Sodium", value: "Often high", color: "text-amber-400" },
      { label: "Deep-Frying", value: "Adds fat", color: "text-red-400" },
      { label: "Protein", value: "Present in chicken", color: "text-emerald-300" },
    ],
    effects:
      "Deep-fried meals can be energy-dense and may contain significant amounts of sodium and saturated fat.",
    longTerm:
      "Eating fried fast food very frequently may contribute to excess calorie intake and reduce overall diet variety.",
  },
];

// =====================================================
// PAGE
// =====================================================

function SwasthyaPage() {
  // =====================================================
  // STREAK TRACKER
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
      setStreak(parseInt(savedStreak, 10));
    }

    if (lastLoggedDate === today) {
      setLoggedToday(true);
    }

    if (lastFailedDate === today) {
      setFailedToday(true);
    }
  }, []);

  const handleLogDay = () => {
    if (loggedToday || failedToday) return;

    const newStreak = streak + 1;
    const today = new Date().toDateString();

    setStreak(newStreak);
    setLoggedToday(true);

    localStorage.setItem(
      "ahaar_junk_streak",
      newStreak.toString(),
    );

    localStorage.setItem(
      "ahaar_last_logged_date",
      today,
    );
  };

  const handleFailDay = () => {
    if (failedToday) return;

    const today = new Date().toDateString();

    setStreak(0);
    setLoggedToday(false);
    setFailedToday(true);

    localStorage.setItem(
      "ahaar_junk_streak",
      "0",
    );

    localStorage.setItem(
      "ahaar_last_failed_date",
      today,
    );

    localStorage.removeItem(
      "ahaar_last_logged_date",
    );
  };

  // =====================================================
  // INFINITE TWO-CARD CAROUSEL
  // =====================================================

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const realLength = junkFoods.length;

  const handleDragStart = (
    e: React.MouseEvent | React.TouchEvent,
  ) => {
    setIsDragging(true);

    const clientX =
      "touches" in e
        ? e.touches[0].clientX
        : e.clientX;

    setStartX(clientX);
  };

  const handleDragMove = (
    e: React.MouseEvent | React.TouchEvent,
  ) => {
    if (!isDragging) return;

    const clientX =
      "touches" in e
        ? e.touches[0].clientX
        : e.clientX;

    setDragOffset(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    if (dragOffset > 50) {
      handlePrev();
    } else if (dragOffset < -50) {
      handleNext();
    }

    setDragOffset(0);
  };

  const handleNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % realLength,
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + realLength) %
        realLength,
    );
  };

  // Create circular visible sequence.
  const visibleFoods = Array.from(
    { length: 2 },
    (_, index) =>
      junkFoods[
        (currentIndex + index) %
          realLength
      ],
  );

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-36">

      {/* =====================================================
          FIXED BACKGROUND
      ===================================================== */}

      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-emerald-950/40" />
      </div>

      <div className="relative mx-auto max-w-5xl space-y-10">

        {/* =====================================================
            BACK BUTTON
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
            HERO HEADER
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
                border
                border-emerald-400/40
                bg-emerald-500/30
                shadow-[0_15px_40px_rgba(16,185,129,0.2)]
              "
            >
              <Sparkles className="h-8 w-8 text-emerald-300" />
            </div>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-emerald-50 sm:text-5xl">
            Swasthya &{" "}
            <span className="text-amber-400">
              Junk Reality
            </span>
          </h1>

          <p className="mt-3 font-hindi text-base text-emerald-200/90">
            जंक फ़ूड का सच: आपकी सेहत, एनर्जी और रोज़मर्रा की आदतों पर असर
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-emerald-100/90 sm:text-base">
            Explore what common fast foods contain, how frequent consumption
            can affect your health, and discover practical Indian alternatives
            that keep your meals enjoyable.
          </p>
        </header>

        {/* =====================================================
            STREAK TRACKER
        ===================================================== */}

        <section className="space-y-4 rounded-[2rem] border border-white/20 bg-black/40 p-8 text-center shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

          <h2 className="font-display text-2xl font-bold text-emerald-50 drop-shadow-md">
            My Junk-Free Streak
          </h2>

          <p className="font-hindi text-sm text-emerald-100 drop-shadow-md">
            Build healthy habits. One day at a time.
          </p>

          <div className="flex items-center justify-center gap-4 py-4">
            <Flame
              className={`h-10 w-10 ${
                streak > 0
                  ? "animate-pulse text-amber-400"
                  : "text-white/30"
              }`}
            />

            <span className="font-display text-5xl font-bold text-emerald-300">
              {streak}
            </span>

            <span className="mt-3 text-lg font-bold text-emerald-50">
              Days
            </span>
          </div>

          {failedToday && (
            <div className="mx-auto mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-950/40 px-4 py-2 text-sm font-bold text-amber-300">
              Today didn't go as planned — that's okay. Start fresh tomorrow!
            </div>
          )}

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button
              onClick={handleLogDay}
              disabled={loggedToday || failedToday}
              className={`rounded-full px-6 py-2 transition-all ${
                loggedToday
                  ? "border border-emerald-500/30 bg-emerald-950/60 text-emerald-300"
                  : failedToday
                    ? "cursor-not-allowed border border-gray-600/30 bg-gray-800/50 text-gray-400 opacity-50"
                    : "bg-emerald-600 text-white hover:bg-emerald-500"
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
                  Try Again Tomorrow
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
                  ? "cursor-not-allowed text-red-500/50"
                  : "text-red-400 hover:bg-red-950/40 hover:text-red-300"
              }`}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              I Had Some Junk Today
            </Button>

          </div>
        </section>

        {/* =====================================================
            SECTION 1 — JUNK FOOD TRUTH LAB
        ===================================================== */}

        <section className="space-y-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/20 text-amber-400 backdrop-blur-md">
                <Skull className="h-5 w-5" />
              </div>

              <div>

                <h2 className="font-display text-2xl font-bold text-emerald-50 drop-shadow-md">
                  Junk Food Truth Lab
                </h2>

                <p className="font-hindi text-sm text-emerald-100 drop-shadow-md">
                  Swipe to explore 10 popular junk foods
                </p>

              </div>

            </div>

            <div className="hidden gap-2 sm:flex">

              <Button
                variant="ghost"
                onClick={handlePrev}
                className="rounded-full border border-white/20 bg-black/40 text-emerald-100 hover:bg-emerald-900/60"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                onClick={handleNext}
                className="rounded-full border border-white/20 bg-black/40 text-emerald-100 hover:bg-emerald-900/60"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

            </div>

          </div>

          {/* =====================================================
              TWO-CARD SWIPE CAROUSEL
          ===================================================== */}

          <div
            className="relative w-full select-none overflow-hidden touch-pan-y"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >

            <div
              className="flex w-full"
              style={{
                transform: `translateX(${dragOffset}px)`,
                transition: isDragging
                  ? "none"
                  : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >

              {visibleFoods.map((food, index) => (

                <div
                  key={`${food.name}-${currentIndex}-${index}`}
                  className="min-w-full p-2 sm:min-w-[50%]"
                >

                  <div className="flex h-full flex-col space-y-4 rounded-[2rem] border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

                    <div className="text-lg font-bold text-emerald-300">
                      {food.name}
                    </div>

                    <div className="flex-grow space-y-2 text-xs text-emerald-50">

                      {food.nutrients.map(
                        (nutrient, idx) => (

                          <div
                            key={idx}
                            className="flex justify-between border-b border-white/10 pb-1"
                          >

                            <span>
                              {nutrient.label}:
                            </span>

                            <span
                              className={`font-bold ${nutrient.color}`}
                            >
                              {nutrient.value}
                            </span>

                          </div>

                        ),
                      )}

                    </div>

                    <div className="space-y-2 pt-2">

                      <div className="text-xs text-amber-200">

                        <strong className="mb-1 block text-amber-400">
                          What to know:
                        </strong>

                        {food.effects}

                      </div>

                      <div className="border-t border-white/10 pt-2 text-xs text-red-300">

                        <strong className="mb-1 block text-red-400">
                          If eaten frequently:
                        </strong>

                        {food.longTerm}

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          <p className="text-center text-xs text-emerald-100/60">
            ← Swipe or drag to explore → 
          </p>

        </section>

        {/* =====================================================
            SECTION 2 — EFFECTS
        ===================================================== */}

        <section className="space-y-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/20 text-amber-400 backdrop-blur-md">
              <AlertTriangle className="h-5 w-5" />
            </div>

            <div>

              <h2 className="font-display text-2xl font-bold text-emerald-50 drop-shadow-md">
                How Frequent Junk Food Can Affect You
              </h2>

              <p className="font-hindi text-sm text-emerald-100 drop-shadow-md">
                चेहरे, नींद, एनर्जी और सेहत पर असर
              </p>

            </div>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="space-y-3 rounded-[2rem] border border-white/20 bg-emerald-950/40 p-7 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-amber-300">
                🔴 Skin & Acne
              </h3>

              <p className="text-sm leading-relaxed text-emerald-50">
                Diet is only one factor in skin health, but frequent intake of
                high-glycemic foods may be associated with acne in some people.
                Skin health is also influenced by hormones, genetics, stress and
                skincare habits.
              </p>

            </div>

            <div className="space-y-3 rounded-[2rem] border border-white/20 bg-emerald-950/40 p-7 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-amber-300">
                📏 Growth & Bone Health
              </h3>

              <p className="text-sm leading-relaxed text-emerald-50">
                Teenagers need enough protein, calcium, vitamin D and other
                nutrients during growth. Junk food doesn't automatically stop
                height, but a diet dominated by nutrient-poor foods can make it
                harder to meet nutritional needs.
              </p>

            </div>

            <div className="space-y-3 rounded-[2rem] border border-white/20 bg-emerald-950/40 p-7 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-amber-300">
                ⚠️ Excess Calories & Sodium
              </h3>

              <p className="text-sm leading-relaxed text-emerald-50">
                Many fast foods are high in calories and sodium. Too much sodium
                can temporarily increase water retention, while regularly
                consuming more calories than your body needs can contribute to
                unhealthy weight gain over time.
              </p>

            </div>

            <div className="space-y-3 rounded-[2rem] border border-white/20 bg-emerald-950/40 p-7 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-amber-300">
                💤 Energy, Sleep & Focus
              </h3>

              <p className="text-sm leading-relaxed text-emerald-50">
                Large meals high in refined carbohydrates or sugar may cause
                short-term energy fluctuations for some people. Caffeine from
                energy drinks can also interfere with sleep, which can affect
                concentration and daily energy.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            SECTION 3 — SMART INDIAN CRAVING SWAPS
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
                बिना मज़ा खोए बेहतर विकल्प
              </p>

            </div>

          </div>

          <div className="grid gap-5 sm:grid-cols-3">

            <div className="space-y-4 rounded-[2rem] border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

              <div className="w-fit rounded-full border border-amber-500/30 bg-amber-950/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                Swap: Chowmein / Chilli Potato
              </div>

              <h3 className="font-display text-xl font-bold text-emerald-50">
                Sesame Chilli Makhana or Veggie Sevaiyan
              </h3>

              <p className="text-sm leading-relaxed text-emerald-50">
                Try roasted makhana or vegetable sevaiyan with sesame seeds,
                curry leaves and colourful vegetables.
              </p>

              <div className="border-t border-white/20 pt-3 text-xs font-medium text-amber-400">
                💡 Result: More fibre and variety with a satisfying crunch.
              </div>

            </div>

            <div className="space-y-4 rounded-[2rem] border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

              <div className="w-fit rounded-full border border-amber-500/30 bg-amber-950/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                Swap: Pizza / Burger
              </div>

              <h3 className="font-display text-xl font-bold text-emerald-50">
                Paneer & Veggie Mini Uttapam
              </h3>

              <p className="text-sm leading-relaxed text-emerald-50">
                A fermented rice-dal base topped with paneer, capsicum, onions
                and mint chutney for a fun Indian-style alternative.
              </p>

              <div className="border-t border-white/20 pt-3 text-xs font-medium text-amber-400">
                💡 Result: A more balanced combination of grains, protein and vegetables.
              </div>

            </div>

            <div className="space-y-4 rounded-[2rem] border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

              <div className="w-fit rounded-full border border-amber-500/30 bg-amber-950/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                Swap: French Fries
              </div>

              <h3 className="font-display text-xl font-bold text-emerald-50">
                Roasted Shakarkandi Wedges
              </h3>

              <p className="text-sm leading-relaxed text-emerald-50">
                Roast or air-fry sweet potato wedges with spices and chaat
                masala for a naturally sweet, fibre-rich option.
              </p>

              <div className="border-t border-white/20 pt-3 text-xs font-medium text-amber-400">
                💡 Result: A colourful source of carbohydrates and fibre.
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            SECTION 4 — SMART RECOVERY
        ===================================================== */}

        <section className="space-y-4 rounded-[2rem] border border-amber-500/40 bg-amber-950/40 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 backdrop-blur-md">
              <ShieldAlert className="h-5 w-5" />
            </div>

            <h2 className="font-display text-xl font-bold text-amber-200">
              Ate Junk Food Today? Don't Panic.
            </h2>

          </div>

          <p className="text-sm leading-relaxed text-amber-100/90">
            One meal doesn't define your health. You don't need to starve,
            skip meals or follow a "detox." Simply return to your normal
            balanced routine.
          </p>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">

            <div className="space-y-2 rounded-xl border border-white/20 bg-emerald-950/60 p-4 text-xs text-emerald-50 backdrop-blur-md">

              <Droplets className="h-5 w-5 text-emerald-300" />

              <strong className="block text-sm text-amber-300">
                1. Hydrate Normally
              </strong>

              Drink water according to your thirst and routine. No special
              detox drink is required.

            </div>

            <div className="space-y-2 rounded-xl border border-white/20 bg-emerald-950/60 p-4 text-xs text-emerald-50 backdrop-blur-md">

              <Apple className="h-5 w-5 text-emerald-300" />

              <strong className="block text-sm text-amber-300">
                2. Eat Balanced Meals
              </strong>

              Return to meals with vegetables, fruit, whole grains and a
              suitable protein source.

            </div>

            <div className="space-y-2 rounded-xl border border-white/20 bg-emerald-950/60 p-4 text-xs text-emerald-50 backdrop-blur-md">

              <Moon className="h-5 w-5 text-emerald-300" />

              <strong className="block text-sm text-amber-300">
                3. Sleep Well
              </strong>

              A good night's sleep helps your body recover and supports
              energy, mood and concentration.

            </div>

          </div>

        </section>

        {/* =====================================================
            BOTTOM ACTIONS
        ===================================================== */}

        <div className="flex flex-wrap justify-center gap-4 pb-6 pt-4">

          <Button
            variant="hero"
            asChild
          >
            <Link to="/nutrition-plan">
              Get My Daily Nutrition Plan
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="text-emerald-100 backdrop-blur-md hover:bg-emerald-900/50"
            asChild
          >
            <Link to="/dashboard">
              Back to Dashboard
            </Link>
          </Button>

        </div>

      </div>

    </main>
  );
}
