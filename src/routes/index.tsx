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
    gradient: "from-sky-400/30 via-blue-300/20 to-transparent",
  },
  {
    icon: Flame,
    name: "Pitta",
    hindi: "पित्त",
    description:
      "Traditionally associated with transformation, focus and metabolism.",
    qualities: "Warm • Sharp • Intense",
    gradient: "from-orange-400/30 via-amber-300/20 to-transparent",
  },
  {
    icon: Leaf,
    name: "Kapha",
    hindi: "कफ",
    description:
      "Traditionally associated with stability, calmness and nourishment.",
    qualities: "Steady • Grounded • Calm",
    gradient: "from-green-500/30 via-emerald-300/20 to-transparent",
  },
];

/* =========================================================
   HOMEPAGE
========================================================= */

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden homepage">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="homepage-hero relative isolate overflow-hidden px-6 pb-24 pt-28 sm:pt-36">

        {/* Background image */}
        <div
          className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/ayurveda-hero-bg.png')",
          }}
        />

        {/* LIGHT READABILITY OVERLAY */}
        <div className="homepage-light-overlay absolute inset-0 -z-20" />

        {/* Dark subtle gradient only at edges */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

        {/* Decorative glows */}
        <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="absolute -right-32 top-52 h-80 w-80 rounded-full bg-green-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="max-w-3xl">

              {/* Badge */}
              <div className="homepage-glass inline-flex items-center gap-3 rounded-full px-5 py-3">

                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500 shadow-lg" />

                <span className="font-hindi text-sm font-semibold text-[#183d2b]">
                  स्वस्थ भारत, विकसित भारत
                </span>

                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#27613d] shadow-sm">
                  Wellness • Nutrition
                </span>

              </div>

              {/* Heading */}
              <h1 className="homepage-title mt-8 font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">

                आहार{" "}

                <span className="text-gradient-saffron">
                  अमृत
                </span>

              </h1>

              <h2 className="homepage-subtitle mt-5 font-display text-2xl font-bold sm:text-3xl">
                Ahaar Amrit
              </h2>

              {/* Description */}
              <p className="homepage-description mt-6 max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">

                Personalized nutrition for young India —
                combining modern science, Indian food wisdom,
                and optional Ayurvedic wellness.

              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <Button
                  asChild
                  size="xl"
                  className="homepage-primary-button hover-lift"
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
                  className="homepage-secondary-button"
                >
                  <Link to="/dosha">

                    Explore Ayurveda

                    <ArrowRight className="ml-2 h-4 w-4" />

                  </Link>
                </Button>

              </div>

              {/* Trust message */}
              <div className="mt-8 flex items-center gap-3">

                <div className="flex -space-x-2">

                  <div className="h-9 w-9 rounded-full border-2 border-white bg-orange-300 shadow-md" />

                  <div className="h-9 w-9 rounded-full border-2 border-white bg-green-300 shadow-md" />

                  <div className="h-9 w-9 rounded-full border-2 border-white bg-yellow-300 shadow-md" />

                </div>

                <span className="homepage-small-text text-sm font-semibold">
                  Built around Indian food, culture and everyday life.
                </span>

              </div>

            </div>


            {/* =================================================
                RIGHT GLASS CARD
            ================================================= */}

            <div className="relative hidden min-h-[480px] items-center justify-center lg:flex">

              <div className="absolute h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

              <div className="homepage-feature-card relative z-10 w-[380px] rounded-[2rem] p-7">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="homepage-muted-text text-sm font-semibold">
                      Your wellness journey
                    </p>

                    <h3 className="homepage-card-title mt-1 font-display text-2xl font-bold">
                      Starts with you.
                    </h3>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-lg">

                    <Leaf className="h-7 w-7 text-white" />

                  </div>

                </div>

                <div className="mt-7 space-y-4">

                  {/* Food */}
                  <div className="homepage-inner-card rounded-2xl p-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-green-100 p-2">

                        <Utensils className="h-5 w-5 text-green-700" />

                      </div>

                      <div>

                        <p className="homepage-card-title font-semibold">
                          Your Food
                        </p>

                        <p className="homepage-muted-text text-xs">
                          Indian • Personal • Practical
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Nutrition */}
                  <div className="homepage-inner-card rounded-2xl p-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-orange-100 p-2">

                        <Sparkles className="h-5 w-5 text-orange-600" />

                      </div>

                      <div>

                        <p className="homepage-card-title font-semibold">
                          Your Nutrition
                        </p>

                        <p className="homepage-muted-text text-xs">
                          Modern science • Personalized
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Ayurveda */}
                  <div className="homepage-inner-card rounded-2xl p-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-yellow-100 p-2">

                        <Leaf className="h-5 w-5 text-yellow-700" />

                      </div>

                      <div>

                        <p className="homepage-card-title font-semibold">
                          Optional Ayurveda
                        </p>

                        <p className="homepage-muted-text text-xs">
                          Explore traditional wellness concepts
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
          FEATURES
      ===================================================== */}

      <section className="homepage-section relative px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="homepage-kicker font-hindi text-sm font-bold">
              आपका स्वास्थ्य, आपकी संस्कृति
            </p>

            <h2 className="homepage-section-title mt-2 font-display text-4xl font-bold sm:text-5xl">
              Nutrition that feels like you.
            </h2>

            <p className="homepage-section-description mt-4 text-base font-medium">
              Ahaar Amrit brings together evidence-based nutrition,
              Indian food culture and optional traditional wellness.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (

                <div
                  key={feature.title}
                  className="homepage-feature-card homepage-hover-card rounded-[2rem] p-8 text-center"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-lg">

                    <Icon className="h-7 w-7 text-white" />

                  </div>

                  <h3 className="homepage-card-title mt-5 font-display text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="homepage-kicker mt-1 font-hindi text-sm font-semibold">
                    {feature.hindi}
                  </p>

                  <p className="homepage-section-description mt-4 text-sm font-medium leading-relaxed">
                    {feature.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          DOSHA SECTION
      ===================================================== */}

      <section className="homepage-section relative overflow-hidden px-6 py-24">

        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/10 blur-3xl" />

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-premium shadow-lg">

              <Sparkles className="h-7 w-7 text-white" />

            </div>

            <p className="homepage-kicker mt-6 font-hindi text-sm font-bold">
              आयुर्वेद को सरलता से समझें
            </p>

            <h2 className="homepage-section-title mt-2 font-display text-4xl font-bold sm:text-5xl">
              What is a Dosha?
            </h2>

            <p className="homepage-section-description mt-5 text-base font-medium leading-relaxed sm:text-lg">

              In traditional Ayurveda, a <strong>Dosha</strong> is a concept
              used to describe patterns of qualities associated with the
              body and mind. Ayurveda traditionally describes three main
              Doshas — Vata, Pitta and Kapha.

            </p>

          </div>


          {/* Dosha cards */}

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {doshas.map((dosha) => {

              const Icon = dosha.icon;

              return (

                <div
                  key={dosha.name}
                  className={`homepage-feature-card group relative overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br ${dosha.gradient} p-7 shadow-xl transition-all duration-500 hover:-translate-y-3`}
                >

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 shadow-md">

                        <Icon className="h-7 w-7 text-[#24543b]" />

                      </div>

                      <span className="homepage-kicker font-hindi text-lg font-bold">
                        {dosha.hindi}
                      </span>

                    </div>

                    <h3 className="homepage-card-title mt-7 font-display text-3xl font-bold">
                      {dosha.name}
                    </h3>

                    <p className="homepage-kicker mt-3 text-sm font-bold">
                      {dosha.qualities}
                    </p>

                    <p className="homepage-section-description mt-4 text-sm font-medium leading-relaxed">
                      {dosha.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>


          {/* Explanation */}

          <div className="homepage-feature-card mx-auto mt-10 max-w-4xl rounded-[2rem] p-7 sm:p-9">

            <div className="flex flex-col gap-5 sm:flex-row">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100">

                <Info className="h-6 w-6 text-orange-600" />

              </div>

              <div>

                <h3 className="homepage-card-title font-display text-xl font-bold">
                  A simple way to think about it
                </h3>

                <p className="homepage-section-description mt-3 text-sm font-medium leading-relaxed">

                  Dosha concepts come from the traditional Ayurvedic
                  wellness system. They are best understood as a framework
                  for exploring traditional ideas about individual patterns
                  and tendencies — not as a medical diagnosis.

                </p>

              </div>

            </div>

          </div>


          {/* CTA */}

          <div className="mt-12 text-center">

            <h3 className="homepage-section-title font-display text-2xl font-bold">
              Curious about your Dosha?
            </h3>

            <p className="homepage-section-description mx-auto mt-3 max-w-xl text-sm font-medium">

              Take our short quiz to explore which traditional Ayurvedic
              pattern may resonate with you.

            </p>

            <Button
              asChild
              size="xl"
              className="homepage-primary-button mt-6"
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

      <section className="homepage-section px-6 pb-24 pt-10">

        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-premium p-10 text-center shadow-2xl sm:p-16">

            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">

              <p className="font-hindi text-sm font-semibold text-white/90">
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
