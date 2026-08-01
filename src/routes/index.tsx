import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Sparkles,
  Utensils,
  Wind,
  Flame,
  Leaf,
  ArrowRight,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const title = "Ahaar Amrit — Personalized Indian Nutrition";

const description =
  "Personalized Indian nutrition powered by modern science, food culture and optional Ayurveda.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title,
      },
      {
        name: "description",
        content: description,
      },
    ],
  }),

  component: Index,
});

/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    icon: Utensils,
    title: "Modern Nutrition",
    hindi: "आधुनिक पोषण",
    text: "Science-backed nutrition made for Indian lifestyles.",
  },
  {
    icon: Heart,
    title: "Indian Food Culture",
    hindi: "भारतीय भोजन",
    text: "Foods connected with your region, routine and culture.",
  },
  {
    icon: Sparkles,
    title: "Optional Ayurveda",
    hindi: "आयुर्वेद",
    text: "Traditional wellness insights when you choose.",
  },
];

/* =========================================================
   DOSHAS
========================================================= */

const doshas = [
  {
    icon: Wind,
    name: "Vata",
    hindi: "वात",
    description:
      "Traditionally associated with movement, creativity and adaptability.",
    qualities: "Light • Mobile • Changeable",
    gradient:
      "from-sky-400/25 via-cyan-400/10 to-emerald-900/20",
  },
  {
    icon: Flame,
    name: "Pitta",
    hindi: "पित्त",
    description:
      "Traditionally associated with transformation, focus and metabolism.",
    qualities: "Warm • Sharp • Intense",
    gradient:
      "from-orange-400/30 via-amber-400/15 to-green-900/20",
  },
  {
    icon: Leaf,
    name: "Kapha",
    hindi: "कफ",
    description:
      "Traditionally associated with stability, calmness and nourishment.",
    qualities: "Steady • Grounded • Calm",
    gradient:
      "from-green-400/25 via-emerald-400/15 to-green-950/20",
  },
];

/* =========================================================
   HOMEPAGE
========================================================= */

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* =====================================================
          FIXED BACKGROUND
          This stays in place while the page content scrolls
      ===================================================== */}

      <div
        className="fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ayurveda-hero-bg.png')",
        }}
      />

      {/* Dark green transparent overlay */}
      <div className="fixed inset-0 -z-40 bg-[#032d20]/55" />

      {/* Subtle warm atmospheric lighting */}
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_50%_10%,rgba(255,170,55,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(40,180,100,0.12),transparent_35%)]" />


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative isolate overflow-hidden px-6 pb-24 pt-20 sm:pt-28">

        {/* Decorative floating orbs */}

        <div className="orb-saffron animate-float absolute -left-20 top-32 h-40 w-40 rounded-full opacity-30 blur-[2px]" />

        <div className="orb-green animate-float-slow absolute -right-24 top-48 h-56 w-56 rounded-full opacity-25 blur-[3px]" />

        <div className="animate-pulse-glow absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-300/10 blur-3xl" />


        {/* Hero content */}

        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">


            {/* =================================================
                LEFT HERO CONTENT
            ================================================= */}

            <div className="max-w-3xl">

              {/* Badge */}

              <div className="glass inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2 shadow-warm">

                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

                <span className="font-hindi text-sm text-white/90">
                  स्वस्थ भारत, विकसित भारत
                </span>

                <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/90">
                  Wellness • Nutrition
                </span>

              </div>


              {/* Heading */}

              <h1 className="mt-7 font-display text-6xl font-bold leading-[0.95] tracking-tight text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)] sm:text-7xl lg:text-8xl">

                आहार{" "}

                <span className="text-gradient-saffron">
                  अमृत
                </span>

              </h1>


              {/* English name */}

              <h2 className="mt-5 font-display text-2xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-3xl">

                Ahaar Amrit

              </h2>


              {/* Description */}

              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-xl">

                Personalized nutrition for young India —
                combining modern science, Indian food wisdom,
                and optional Ayurvedic wellness.

              </p>


              {/* CTA buttons */}

              <div className="mt-8 flex flex-wrap gap-4">

                <Button
                  asChild
                  size="xl"
                  variant="hero"
                  className="hover-lift shadow-warm"
                >

                  <Link to="/onboarding">

                    <Sparkles className="mr-2 h-5 w-5" />

                    Create Your Profile

                  </Link>

                </Button>


                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="glass border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >

                  <Link to="/dosha">

                    Explore Ayurveda

                    <ArrowRight className="ml-2 h-4 w-4" />

                  </Link>

                </Button>

              </div>


              {/* Trust message */}

              <div className="mt-8 flex items-center gap-3 text-sm font-medium text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">

                <div className="flex -space-x-2">

                  <div className="h-8 w-8 rounded-full border-2 border-white/80 bg-orange-300" />

                  <div className="h-8 w-8 rounded-full border-2 border-white/80 bg-green-300" />

                  <div className="h-8 w-8 rounded-full border-2 border-white/80 bg-yellow-300" />

                </div>

                <span>
                  Built around Indian food, culture and everyday life.
                </span>

              </div>

            </div>


            {/* =================================================
                RIGHT HERO — 4 CARD WELLNESS PANEL
            ================================================= */}

            <div className="relative hidden min-h-[480px] items-center justify-center lg:flex">

              {/* Glow */}

              <div className="absolute h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />


              {/* Main glass panel */}

              <div className="glass hover-lift relative z-10 w-[360px] rounded-[2rem] border border-white/20 bg-[#063b2a]/40 p-7 shadow-warm backdrop-blur-xl">


                {/* Panel heading */}

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-medium text-white/70">
                      Your wellness journey
                    </p>

                    <h3 className="mt-1 font-display text-2xl font-bold text-white">
                      Starts with you.
                    </h3>

                  </div>


                  <div className="orb-saffron flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg">

                    <Leaf className="h-7 w-7 text-white" />

                  </div>

                </div>


                {/* 4 CARDS */}

                <div className="mt-7 space-y-4">


                  {/* CARD 1 */}

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/15">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-green-500/20 p-2">

                        <Utensils className="h-5 w-5 text-green-200" />

                      </div>

                      <div>

                        <p className="font-semibold text-white">
                          Your Food
                        </p>

                        <p className="text-xs text-white/65">
                          Indian • Personal • Practical
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* CARD 2 */}

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/15">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-orange-500/20 p-2">

                        <Sparkles className="h-5 w-5 text-orange-200" />

                      </div>

                      <div>

                        <p className="font-semibold text-white">
                          Your Nutrition
                        </p>

                        <p className="text-xs text-white/65">
                          Modern science • Personalized
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* CARD 3 */}

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/15">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-yellow-500/20 p-2">

                        <Leaf className="h-5 w-5 text-yellow-200" />

                      </div>

                      <div>

                        <p className="font-semibold text-white">
                          Optional Ayurveda
                        </p>

                        <p className="text-xs text-white/65">
                          Explore traditional wellness concepts
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* CARD 4 */}

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/15">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-rose-500/20 p-2">

                        <Heart className="h-5 w-5 text-rose-200" />

                      </div>

                      <div>

                        <p className="font-semibold text-white">
                          Indian Food Culture
                        </p>

                        <p className="text-xs text-white/65">
                          Rooted in tradition • Made for you
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES SECTION
      ===================================================== */}

      <section className="relative px-6 py-20">

        <div className="mx-auto max-w-6xl">


          {/* Heading */}

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-hindi text-sm font-semibold text-green-200 drop-shadow-md">

              आपका स्वास्थ्य, आपकी संस्कृति

            </p>

            <h2 className="mt-2 font-display text-4xl font-bold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)] sm:text-5xl">

              Nutrition that feels like you.

            </h2>

            <p className="mt-4 font-medium leading-relaxed text-white/75 drop-shadow-md">

              Ahaar Amrit brings together evidence-based nutrition,
              Indian food culture and optional traditional wellness.

            </p>

          </div>


          {/* Feature cards */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (

                <div
                  key={feature.title}
                  className="glass hover-lift rounded-[2rem] border border-white/20 bg-[#063b2a]/45 p-7 text-center shadow-warm backdrop-blur-xl"
                >

                  {/* Icon */}

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-warm">

                    <Icon className="h-7 w-7 text-white" />

                  </div>


                  {/* Title */}

                  <h3 className="mt-5 font-display text-xl font-bold text-white drop-shadow-md">

                    {feature.title}

                  </h3>


                  {/* Hindi */}

                  <p className="mt-1 font-hindi text-sm font-semibold text-green-200">

                    {feature.hindi}

                  </p>


                  {/* Description */}

                  <p className="mt-4 text-sm font-medium leading-relaxed text-white/75">

                    {feature.text}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT IS A DOSHA?
      ===================================================== */}

      <section className="relative overflow-hidden px-6 py-24">


        {/* Background glow */}

        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-3xl" />


        <div className="mx-auto max-w-6xl">


          {/* Section heading */}

          <div className="mx-auto max-w-3xl text-center">


            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-premium shadow-warm">

              <Sparkles className="h-7 w-7 text-white" />

            </div>


            <p className="mt-6 font-hindi text-sm font-semibold text-green-200">

              आयुर्वेद को सरलता से समझें

            </p>


            <h2 className="mt-2 font-display text-4xl font-bold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)] sm:text-5xl">

              What is a Dosha?

            </h2>


            <p className="mt-5 text-base font-medium leading-relaxed text-white/75 sm:text-lg">

              In traditional Ayurveda, a{" "}
              <strong className="text-white">
                Dosha
              </strong>{" "}
              is a concept used to describe patterns of qualities
              associated with the body and mind. Ayurveda traditionally
              describes three main Doshas — Vata, Pitta and Kapha.

            </p>

          </div>


          {/* =================================================
              DOSHA CARDS
          ================================================= */}

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {doshas.map((dosha) => {

              const Icon = dosha.icon;

              return (

                <div
                  key={dosha.name}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br ${dosha.gradient} glass p-7 shadow-warm backdrop-blur-xl transition-all duration-500 hover:-translate-y-3`}
                >


                  {/* Decorative circle */}

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-xl transition-transform duration-500 group-hover:scale-150" />


                  <div className="relative">


                    {/* Icon and Hindi */}

                    <div className="flex items-center justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-sm">

                        <Icon className="h-7 w-7 text-white" />

                      </div>


                      <span className="font-hindi text-lg font-semibold text-green-100">

                        {dosha.hindi}

                      </span>

                    </div>


                    {/* Name */}

                    <h3 className="mt-7 font-display text-3xl font-bold text-white">

                      {dosha.name}

                    </h3>


                    {/* Qualities */}

                    <p className="mt-3 text-sm font-semibold text-green-100">

                      {dosha.qualities}

                    </p>


                    {/* Description */}

                    <p className="mt-4 text-sm font-medium leading-relaxed text-white/75">

                      {dosha.description}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>


          {/* =================================================
              EXPLANATION CARD
          ================================================= */}

          <div className="glass mx-auto mt-10 max-w-4xl rounded-[2rem] border border-white/20 bg-[#063b2a]/45 p-7 shadow-warm backdrop-blur-xl sm:p-9">

            <div className="flex flex-col gap-5 sm:flex-row">


              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/20">

                <Info className="h-6 w-6 text-orange-200" />

              </div>


              <div>

                <h3 className="font-display text-xl font-bold text-white">

                  A simple way to think about it

                </h3>


                <p className="mt-3 text-sm font-medium leading-relaxed text-white/75">

                  Dosha concepts come from the traditional Ayurvedic
                  wellness system. They are best understood as a framework
                  for exploring traditional ideas about individual patterns
                  and tendencies — not as a medical diagnosis.

                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              DOSHA CTA
          ================================================= */}

          <div className="mt-12 text-center">


            <h3 className="font-display text-2xl font-bold text-white">

              Curious about your Dosha?

            </h3>


            <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-white/70">

              Take our short quiz to explore which traditional Ayurvedic
              pattern may resonate with you.

            </p>


            <Button
              asChild
              size="xl"
              variant="hero"
              className="mt-6 shadow-warm"
            >

              <Link to="/dosha">

                Explore Your Dosha

                <ArrowRight className="ml-2 h-5 w-5" />

              </Link>

            </Button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER CTA
      ===================================================== */}

      <section className="relative px-6 pb-24 pt-10">

        <div className="mx-auto max-w-6xl">


          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#063b2a]/50 p-10 text-center shadow-warm backdrop-blur-xl sm:p-16">


            {/* Decorative glows */}

            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-orange-400/10 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-green-400/10 blur-3xl" />


            <div className="relative">


              <p className="font-hindi text-sm font-semibold text-green-100">

                आपकी सेहत की यात्रा यहीं से शुरू होती है

              </p>


              <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">

                Your food.
                <br />

                Your culture.
                <br />

                Your journey.

              </h2>


              <Button
                asChild
                size="xl"
                variant="secondary"
                className="mt-8"
              >

                <Link to="/onboarding">

                  Get Started

                  <ArrowRight className="ml-2 h-5 w-5" />

                </Link>

              </Button>


            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
