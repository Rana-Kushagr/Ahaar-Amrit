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
import { PageWallpaper } from "@/components/PageWallpaper";
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
    effects:
      "Causes rapid insulin spikes from the maida bun, signaling glands to produce excess sebum.",
    longTerm:
      "Leads to severe acne breakouts, sluggishness, and stubborn belly fat.",
  },
  {
    name: "🍕 Pizza",
    nutrients: [
      { label: "Cheese / Trans Fats", value: "Extremely High", color: "text-red-400" },
      { label: "Sodium (Salt)", value: "1500mg+", color: "text-amber-400" },
      { label: "Empty Carbs", value: "60g+", color: "text-amber-400" },
      { label: "Dietary Fiber", value: "< 2g", color: "text-red-400" },
    ],
    effects:
      "Excess sodium traps water under the skin, leading to immediate face bloating and puffy eyes.",
    longTerm:
      "Causes chronic gut issues, oily skin, and unwanted obesity in teens.",
  },
  {
    name: "🍜 Instant Noodles",
    nutrients: [
      { label: "Sodium & MSG", value: "Toxic Levels", color: "text-red-400" },
      { label: "Palm Oil (Fried)", value: "15g+", color: "text-amber-400" },
      { label: "Refined Wheat", value: "100%", color: "text-red-400" },
      { label: "Essential Vitamins", value: "0%", color: "text-red-400" },
    ],
    effects:
      "Coated in wax and deep-fried in palm oil; impossible to digest quickly, killing gut bacteria.",
    longTerm:
      "Results in severe bloating, dark circles, and long-term metabolic damage.",
  },
  {
    name: "🌶️ Chowmein & Chilli Potato",
    nutrients: [
      { label: "Reused Oil / Fats", value: "25g+", color: "text-red-400" },
      { label: "Glycemic Index", value: "Very High", color: "text-amber-400" },
      { label: "Ajinomoto (MSG)", value: "High", color: "text-red-400" },
      { label: "Fiber & Protein", value: "Almost 0g", color: "text-red-400" },
    ],
    effects:
      "High glycemic index forces the body to store all consumed calories instantly as fat.",
    longTerm:
      "Hormonal imbalances, stubborn facial acne, and lower belly fat accumulation.",
  },
  {
    name: "🍫 Chocolates & Candy Bars",
    nutrients: [
      { label: "Added Sugars", value: "30g+", color: "text-red-400" },
      { label: "Corn Syrup", value: "High", color: "text-red-400" },
      { label: "Artificial Flavors", value: "High", color: "text-amber-400" },
      { label: "Real Cocoa", value: "Very Low", color: "text-amber-400" },
    ],
    effects:
      "Creates a massive 30-minute sugar rush followed by a severe energy crash and brain fog.",
    longTerm:
      "Causes rapid tooth decay, premature skin dullness (glycation), and mood swings.",
  },
  {
    name: "🍩 Doughnuts & Pastries",
    nutrients: [
      { label: "Deep-Fried Fats", value: "20g+", color: "text-red-400" },
      { label: "Refined Sugar", value: "25g+", color: "text-red-400" },
      { label: "Maida", value: "High", color: "text-amber-400" },
      { label: "Nutritional Value", value: "Zero", color: "text-red-400" },
    ],
    effects:
      "The combination of deep-frying and high sugar causes massive inflammation in the body.",
    longTerm:
      "Drastically increases the risk of teen obesity, lethargy, and dull, aging skin.",
  },
  {
    name: "🥤 Carbonated Soft Drinks",
    nutrients: [
      { label: "Added Sugar", value: "40g (10 tsp!)", color: "text-red-400" },
      { label: "Phosphoric Acid", value: "High", color: "text-red-400" },
      { label: "Empty Calories", value: "150+", color: "text-amber-400" },
      { label: "Hydration", value: "Dehydrating", color: "text-amber-400" },
    ],
    effects:
      "Phosphoric acid blocks calcium absorption during your most crucial growth years.",
    longTerm:
      "Permanently stunts height potential, erodes dental enamel, and causes sudden weight gain.",
  },
  {
    name: "⚡ Energy Drinks",
    nutrients: [
      { label: "Caffeine", value: "Extreme", color: "text-red-400" },
      { label: "Taurine & Guarana", value: "High", color: "text-amber-400" },
      { label: "Artificial Sweeteners", value: "Toxic", color: "text-red-400" },
      { label: "Sugar", value: "30g+", color: "text-amber-400" },
    ],
    effects:
      "Overstimulates the nervous system, causing heart palpitations, anxiety, and jitters.",
    longTerm:
      "Severe sleep disruption, dark circles under eyes, and chronic exam stress/brain fog.",
  },
  {
    name: "🧋 Flavoured Milks & Shakes",
    nutrients: [
      { label: "Hidden Sugars", value: "35g+", color: "text-red-400" },
      { label: "Saturated Dairy Fat", value: "High", color: "text-amber-400" },
      { label: "Artificial Colors", value: "High", color: "text-red-400" },
      { label: "Real Fruit", value: "0%", color: "text-amber-400" },
    ],
    effects:
      "Thick, sugar-loaded dairy heavily triggers sebum production in teenage skin.",
    longTerm:
      "Leads to cystic acne, lactose-induced bloating, and sluggish digestion.",
  },
  {
    name: "🍗 Fried Chicken & Fries",
    nutrients: [
      { label: "Trans Fats", value: "Dangerous", color: "text-red-400" },
      { label: "Acrylamide (Toxins)", value: "High", color: "text-red-400" },
      { label: "Sodium", value: "1200mg+", color: "text-amber-400" },
      { label: "Cholesterol", value: "High", color: "text-amber-400" },
    ],
    effects:
      "Deep frying creates acrylamides, which are highly inflammatory and toxic to the skin.",
    longTerm:
      "Greasy skin, poor heart health stamina for sports, and overall bodily inflammation.",
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

    localStorage.removeItem("ahaar_last_logged_date");
  };

  // =====================================================
  // CLEAR 2-CARD SLIDE CAROUSEL
  // =====================================================

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    "next" | "prev"
  >("next");

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const animationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const visibleCards = 2;

  // -----------------------------------------------------
  // Get the next two cards.
  // This creates the circular effect:
  //
  // 1,2 → 2,3 → 3,4 → ... → 9,10 → 10,1 → 1,2
  // -----------------------------------------------------

  const getCardIndex = (index: number) => {
    return (index + junkFoods.length) % junkFoods.length;
  };

  const currentCards = [
    junkFoods[getCardIndex(currentIndex)],
    junkFoods[getCardIndex(currentIndex + 1)],
  ];

  const nextCards = [
    junkFoods[getCardIndex(currentIndex + 1)],
    junkFoods[getCardIndex(currentIndex + 2)],
  ];

  const previousCards = [
    junkFoods[getCardIndex(currentIndex - 1)],
    junkFoods[getCardIndex(currentIndex)],
  ];

  // -----------------------------------------------------
  // MOVE NEXT
  // -----------------------------------------------------

  const handleNext = () => {
    if (isAnimating) return;

    setAnimationDirection("next");
    setIsAnimating(true);

    animationTimerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => getCardIndex(prev + 1));
      setIsAnimating(false);
    }, 500);
  };

  // -----------------------------------------------------
  // MOVE PREVIOUS
  // -----------------------------------------------------

  const handlePrev = () => {
    if (isAnimating) return;

    setAnimationDirection("prev");
    setIsAnimating(true);

    animationTimerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => getCardIndex(prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  // -----------------------------------------------------
  // CLEAN UP ANIMATION TIMER
  // -----------------------------------------------------

  useEffect(() => {
    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  // -----------------------------------------------------
  // DRAG START
  // -----------------------------------------------------

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isAnimating) return;

    setIsDragging(true);

    const clientX =
      "touches" in e ? e.touches[0].clientX : e.clientX;

    setStartX(clientX);
  };

  // -----------------------------------------------------
  // DRAG MOVE
  // -----------------------------------------------------

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || isAnimating) return;

    const clientX =
      "touches" in e ? e.touches[0].clientX : e.clientX;

    const offset = clientX - startX;

    // Limit dragging so cards don't fly too far
    const limitedOffset = Math.max(
      -180,
      Math.min(180, offset),
    );

    setDragOffset(limitedOffset);
  };

  // -----------------------------------------------------
  // DRAG END
  // -----------------------------------------------------

  const handleDragEnd = () => {
    if (!isDragging || isAnimating) return;

    setIsDragging(false);

    if (dragOffset < -60) {
      handleNext();
    } else if (dragOffset > 60) {
      handlePrev();
    }

    setDragOffset(0);
  };

  return (
    <main className="relative isolate min-h-screen px-4 pb-16 pt-28 sm:px-6 sm:pt-36">

      {/* =====================================================
          FIXED FULL-SCREEN BACKGROUND (same as nutrition plan)
      ===================================================== */}

      <PageWallpaper variant="nutrition" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-10">


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
            bg-emerald-950/30
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
            bg-emerald-950/25
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
            <span className="text-amber-400">Junk Reality</span>
          </h1>

          <p className="mt-3 font-hindi text-base text-emerald-200/90">
            जंक फ़ूड का कड़वा सच: आपकी सुंदरता, हाइट और एनर्जी पर असर
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-emerald-100/90 sm:text-base">
            Exposing what fast food actually contains and how it secretly
            affects your skin, body shape, growth, and confidence.
          </p>
        </header>

        {/* =====================================================
            STREAK TRACKER WIDGET
        ===================================================== */}

        <section className="space-y-4 rounded-[2rem] border border-white/20 bg-black/10 p-8 text-center shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

          <h2 className="font-display text-2xl font-bold text-emerald-50 drop-shadow-md">
            My Junk-Free Streak
          </h2>

          <p className="font-hindi text-sm text-emerald-100 drop-shadow-md">
            Build discipline. Keep your skin clear and energy high!
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
            <div className="mx-auto mb-4 inline-block rounded-full border border-red-500/30 bg-red-950/40 px-4 py-2 text-sm font-bold text-red-400">
              You ate junk food today. Streak reset to 0! Try again tomorrow.
            </div>
          )}

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button
              onClick={handleLogDay}
              disabled={loggedToday || failedToday}
              className={`rounded-full px-6 py-2 transition-all ${
                loggedToday
                  ? "border border-emerald-500/30 bg-emerald-950/30 text-emerald-300"
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
                  ? "cursor-not-allowed text-red-500/50"
                  : "text-red-400 hover:bg-red-950/40 hover:text-red-300"
              }`}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Oops, I ate junk
            </Button>

          </div>
        </section>

        {/* =====================================================
            SECTION 1: THE JUNK FOOD TRUTH LAB
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
                  Swipe to reveal the reality of 10 popular junk foods
                </p>
              </div>

            </div>

            <div className="hidden gap-2 sm:flex">

              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={isAnimating}
                className="rounded-full border border-white/20 bg-black/10 text-emerald-100 hover:bg-emerald-900/15 disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                onClick={handleNext}
                disabled={isAnimating}
                className="rounded-full border border-white/20 bg-black/10 text-emerald-100 hover:bg-emerald-900/15 disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

            </div>
          </div>

          {/* =====================================================
              NEW 2-CARD SLIDE CAROUSEL
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

            {/* CAROUSEL VIEWPORT */}

            <div className="relative overflow-hidden rounded-[2.25rem]">

              {/* -------------------------------------------------
                  PREVIOUS CARDS
                  They slide OUT when going backwards
              ------------------------------------------------- */}

              {isAnimating && animationDirection === "prev" && (
                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    flex
                    w-full
                    translate-x-[-100%]
                    animate-[slideOutLeft_500ms_cubic-bezier(0.25,1,0.5,1)_forwards]
                  "
                >
                  {currentCards.map((food, index) => (
                    <div
                      key={`prev-out-${food.name}-${index}`}
                      className="w-1/2 shrink-0 p-2"
                    >
                      <FoodCard food={food} />
                    </div>
                  ))}
                </div>
              )}

              {/* -------------------------------------------------
                  NEXT CARDS
                  They slide IN when going forward
              ------------------------------------------------- */}

              {isAnimating && animationDirection === "next" && (
                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    flex
                    w-full
                    translate-x-full
                    animate-[slideInRight_500ms_cubic-bezier(0.25,1,0.5,1)_forwards]
                  "
                >
                  {nextCards.map((food, index) => (
                    <div
                      key={`next-in-${food.name}-${index}`}
                      className="w-1/2 shrink-0 p-2"
                    >
                      <FoodCard food={food} />
                    </div>
                  ))}
                </div>
              )}

              {/* -------------------------------------------------
                  MAIN CURRENT CARDS
                  These visibly slide left/right during transition
              ------------------------------------------------- */}

              <div
                className={`flex w-full ${
                  isDragging
                    ? ""
                    : "transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                }`}
                style={{
                  transform: isDragging
                    ? `translateX(${dragOffset}px)`
                    : isAnimating
                      ? animationDirection === "next"
                        ? "translateX(-100%)"
                        : "translateX(100%)"
                      : "translateX(0)",
                }}
              >

                {currentCards.map((food, index) => (
                  <div
                    key={`${food.name}-${currentIndex}-${index}`}
                    className="w-full shrink-0 p-2 sm:w-1/2"
                  >
                    <FoodCard food={food} />
                  </div>
                ))}

              </div>

            </div>

            {/* -------------------------------------------------
                MOBILE SWIPE HINT
            ------------------------------------------------- */}

            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-emerald-100/60 sm:hidden">
              <ChevronLeft className="h-3 w-3" />
              Swipe to explore
              <ChevronRight className="h-3 w-3" />
            </div>

            {/* -------------------------------------------------
                DOT INDICATORS
            ------------------------------------------------- */}

            <div className="mt-4 flex justify-center gap-1.5">

              {junkFoods.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setCurrentIndex(index);
                    }
                  }}
                  aria-label={`Show junk food ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-7 bg-amber-400"
                      : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            SECTION 2: HOW JUNK FOOD IMPACTS YOUR LOOKS & GROWTH
        ===================================================== */}

        <section className="space-y-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/20 text-amber-400 backdrop-blur-md">
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

            <ImpactCard
              title="🔴 Acne, Pimples & Dull Skin"
              text={
                <>
                  Refined Maida and high sugar cause insulin spikes. This
                  signals your skin glands to produce excess oil (sebum),
                  clogging pores and causing{" "}
                  <strong className="text-white">
                    painful pimples and dull, oily skin
                  </strong>
                  .
                </>
              }
            />

            <ImpactCard
              title="📏 Stunted Height & Weak Bones"
              text={
                <>
                  Teens need maximum Calcium and Vitamin D for bone growth.
                  Cold drinks contain{" "}
                  <strong className="text-white">Phosphoric Acid</strong>,
                  which leaches Calcium directly out of your bones, slowing
                  down natural height potential!
                </>
              }
            />

            <ImpactCard
              title="⚠️ Stubborn Belly Fat & Face Bloating"
              text={
                <>
                  Junk food is packed with excess sodium. Sodium forces your
                  body to trap water under your skin, leading to{" "}
                  <strong className="text-white">
                    bloated cheeks, puffy eyes, and stubborn lower belly fat
                  </strong>
                  .
                </>
              }
            />

            <ImpactCard
              title="💤 Brain Fog & Exam Laziness"
              text={
                <>
                  Fast food gives a 30-minute energy rush followed by a
                  massive{" "}
                  <strong className="text-white">sugar crash</strong>. This
                  leaves you feeling sluggish, irritable, and unable to focus
                  during late-night study sessions.
                </>
              }
            />

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

            <SwapCard
              swap="Chowmein / Chilli Potato"
              title="Sesame Chilli Makhana or Sevaiyan"
              description="Crunchy fox nuts or rice vermicelli tossed with sesame seeds, curry leaves, and veggies."
              result="Clear skin, zero maida, high protein."
            />

            <SwapCard
              swap="Pizza / Burger"
              title="Paneer & Veggie Mini Uttapam"
              description="Fermented rice-dal base topped with spiced paneer, capsicum, onions, and mint chutney."
              result="Clean gut, no bloating, sustained stamina."
            />

            <SwapCard
              swap="French Fries"
              title="Peri-Peri Roasted Shakarkandi"
              description="Air-fried or roasted sweet potato wedges seasoned with spicy peri-peri chaat masala."
              result="Vitamin A for glowing skin & slow carbs."
            />

          </div>
        </section>

        {/* =====================================================
            SECTION 4: JUNK DETOX RECOVERY
        ===================================================== */}

        <section className="space-y-4 rounded-[2rem] border border-amber-500/40 bg-amber-950/20 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 backdrop-blur-md">
              <ShieldAlert className="h-5 w-5" />
            </div>

            <h2 className="font-display text-xl font-bold text-amber-200">
              Ate Junk Food Today? 1-Day Recovery Protocol!
            </h2>

          </div>

          <p className="text-sm leading-relaxed text-amber-100/90">
            Don't stress or starve yourself! Do this tomorrow to flush out
            sodium and prevent pimples:
          </p>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">

            <RecoveryCard
              title="1. Hydrate & Flush"
              text="Drink warm Saunf-Coriander water to eliminate salt retention & face bloating."
            />

            <RecoveryCard
              title="2. Light Khichdi Dinner"
              text="Have a warm moong dal khichdi to give your gut a chance to recover."
            />

            <RecoveryCard
              title="3. Probiotic Bowl"
              text="Have a bowl of fresh curd with a pinch of black salt to restore healthy gut bacteria."
            />

          </div>
        </section>

        {/* =====================================================
            BOTTOM ACTIONS
        ===================================================== */}

        <div className="flex flex-wrap justify-center gap-4 pb-6 pt-4">

          <Button variant="hero" asChild>
            <Link to="/nutrition-plan">
              Get My Daily Nutrition Plan
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="text-emerald-100 backdrop-blur-md hover:bg-emerald-900/25"
            asChild
          >
            <Link to="/dashboard">
              Back to Dashboard
            </Link>
          </Button>

        </div>

      </div>

      {/* =====================================================
          CAROUSEL ANIMATION STYLES
      ===================================================== */}

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0.7;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0.7;
          }
        }
      `}</style>

    </main>
  );
}

// =====================================================
// FOOD CARD COMPONENT
// =====================================================

function FoodCard({
  food,
}: {
  food: (typeof junkFoods)[number];
}) {
  return (
    <div className="flex h-full min-h-[390px] flex-col space-y-4 rounded-[2rem] border border-white/20 bg-black/10 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/50 hover:shadow-emerald-950/30">

      <div className="text-lg font-bold text-emerald-300">
        {food.name}
      </div>

      <div className="flex-grow space-y-2 text-xs text-emerald-50">

        {food.nutrients.map((n, idx) => (
          <div
            key={idx}
            className="flex justify-between border-b border-white/10 pb-1"
          >
            <span>{n.label}:</span>

            <span className={`font-bold ${n.color}`}>
              {n.value}
            </span>
          </div>
        ))}

      </div>

      <div className="space-y-2 pt-2">

        <div className="text-xs text-amber-200">
          <strong className="mb-1 block text-amber-400">
            Immediate Effect:
          </strong>

          {food.effects}
        </div>

        <div className="border-t border-white/10 pt-2 text-xs text-red-300">
          <strong className="mb-1 block text-red-400">
            Long-Term Impact:
          </strong>

          {food.longTerm}
        </div>

      </div>

    </div>
  );
}

// =====================================================
// IMPACT CARD
// =====================================================

function ImpactCard({
  title,
  text,
}: {
  title: string;
  text: React.ReactNode;
}) {
  return (
    <div className="space-y-3 rounded-[2rem] border border-white/20 bg-emerald-950/25 p-7 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

      <h3 className="flex items-center gap-2 font-display text-xl font-bold text-amber-300">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-emerald-50">
        {text}
      </p>

    </div>
  );
}

// =====================================================
// SWAP CARD
// =====================================================

function SwapCard({
  swap,
  title,
  description,
  result,
}: {
  swap: string;
  title: string;
  description: string;
  result: string;
}) {
  return (
    <div className="space-y-4 rounded-[2rem] border border-white/20 bg-black/10 p-6 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-400/50">

      <div className="w-fit rounded-full border border-amber-500/30 bg-amber-950/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
        Swap: {swap}
      </div>

      <h3 className="font-display text-xl font-bold text-emerald-50">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-emerald-50">
        {description}
      </p>

      <div className="border-t border-white/20 pt-3 text-xs font-medium text-amber-400">
        💡 Result: {result}
      </div>

    </div>
  );
}

// =====================================================
// RECOVERY CARD
// =====================================================

function RecoveryCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="space-y-1 rounded-xl border border-white/20 bg-emerald-950/30 p-4 text-xs text-emerald-50 backdrop-blur-md">

      <strong className="block text-sm text-amber-300">
        {title}
      </strong>

      {text}

    </div>
  );
}
