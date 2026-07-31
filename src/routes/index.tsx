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
    gradient: "from-sky-400/20 via-blue-300/10 to-transparent",
  },
  {
    icon: Flame,
    name: "Pitta",
    hindi: "पित्त",
    description:
      "Traditionally associated with transformation, focus and metabolism.",
    qualities: "Warm • Sharp • Intense",
    gradient: "from-orange-400/25 via-amber-300/10 to-transparent",
  },
  {
    icon: Leaf,
    name: "Kapha",
    hindi: "कफ",
    description:
      "Traditionally associated with stability, calmness and nourishment.",
    qualities: "Steady • Grounded • Calm",
    gradient: "from-green-500/25 via-emerald-300/10 to-transparent",
  },
];

/* =========================================================
   HOMEPAGE
========================================================= */

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f1df]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative isolate overflow-hidden px-6 pb-24 pt-20 sm:pt-28">

        {/* Background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/ayurveda-hero-bg.png')",
          }}
        />

        {/* Soft overlay for readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#fff8e9]/70 via-[#fff8e9]/40 to-[#f7f1df]" />

        {/* Decorative floating orbs */}
        <div className="orb-saffron animate-float absolute -left-20 top-32 h-40 w-40 rounded-full opacity-40 blur-[2px]" />

        <div className="orb-green animate-float-slow absolute -right-24 top-48 h-56 w-56 rounded-full opacity-30 blur-[3px]" />

        <div className="animate-pulse-glow absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}
            <div className="max-w-3xl">

              {/* Badge */}
              <div className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 shadow-warm">

                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-600" />

                <span className="font-hindi text-sm text-secondary">
                  स्वस्थ भारत, विकसित भारत
                </span>

                <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                  Wellness • Nutrition
                </span>

              </div>

              {/* Heading */}
              <h1 className="mt-7 font-display text-6xl font-bold leading-[0.95] tracking-tight text-[#382719] sm:text-7xl lg:text-8xl">

                आहार{" "}

                <span className="text-gradient-saffron">
                  अमृत
                </span>

              </h1>

              <h2 className="mt-5 font-display text-2xl font-semibold text-[#6c482b] sm:text-3xl">
                Ahaar Amrit
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6b5a4b] sm:text-xl">

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
                  className="glass"
                >
                  <Link to="/dosha">

                    Explore Ayurveda

                    <ArrowRight className="ml-2 h-4 w-4" />

                  </Link>
                </Button>

              </div>

              {/* Small trust message */}
              <div className="mt-8 flex items-center gap-3 text-sm text-[#735f4d]">

                <div className="flex -space-x-2">

                  <div className="h-8 w-8 rounded-full border-2 border-white bg-orange-200" />

                  <div className="h-8 w-8 rounded-full border-2 border-white bg-green-200" />

                  <div className="h-8 w-8 rounded-full border-2 border-white bg-yellow-200" />

                </div>

                <span>
                  Built around Indian food, culture and everyday life.
                </span>

              </div>

            </div>

            {/* RIGHT — floating visual */}
            <div className="relative hidden min-h-[480px] items-center justify-center lg:flex">

              {/* Glow */}
              <div className="absolute h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />

              {/* Main glass card */}
              <div className="glass hover-lift relative z-10 w-[360px] rounded-[2rem] p-7 shadow-warm">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-medium text-muted-foreground">
                      Your wellness journey
                    </p>

                    <h3 className="mt-1 font-display text-2xl font-bold text-[#3b2b1f]">
                      Starts with you.
                    </h3>

                  </div>

                  <div className="orb-saffron flex h-14 w-14 items-center justify-center rounded-2xl">

                    <Leaf className="h-7 w-7 text-white" />

                  </div>

                </div>

                <div className="mt-7 space-y-4">

                  <div className="rounded-2xl bg-white/65 p-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-green-100 p-2">

                        <Utensils className="h-5 w-5 text-green-700" />

                      </div>

                      <div>

                        <p className="font-semibold text-[#493629]">
                          Your Food
                        </p>

                        <p className="text-xs text-muted-foreground">
                          Indian • Personal • Practical
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl bg-white/65 p-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-orange-100 p-2">

                        <Sparkles className="h-5 w-5 text-orange-600" />

                      </div>

                      <div>

                        <p className="font-semibold text-[#493629]">
                          Your Nutrition
                        </p>

                        <p className="text-xs text-muted-foreground">
                          Modern science • Personalized
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl bg-white/65 p-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-yellow-100 p-2">

                        <Leaf className="h-5 w-5 text-yellow-700" />

                      </div>

                      <div>

                        <p className="font-semibold text-[#493629]">
                          Optional Ayurveda
                        </p>

                        <p className="text-xs text-muted-foreground">
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

      <section className="relative px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-hindi text-sm text-secondary">
              आपका स्वास्थ्य, आपकी संस्कृति
            </p>

            <h2 className="mt-2 font-display text-4xl font-bold text-[#382719] sm:text-5xl">
              Nutrition that feels like you.
            </h2>

            <p className="mt-4 text-muted-foreground">
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
                  className="glass hover-lift rounded-[2rem] p-7 text-center"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-warm">

                    <Icon className="h-7 w-7 text-white" />

                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-[#382719]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 font-hindi text-sm text-secondary">
                    {feature.hindi}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/15 blur-3xl" />

        <div className="mx-auto max-w-6xl">

          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-premium shadow-warm">

              <Sparkles className="h-7 w-7 text-white" />

            </div>

            <p className="mt-6 font-hindi text-sm text-secondary">
              आयुर्वेद को सरलता से समझें
            </p>

            <h2 className="mt-2 font-display text-4xl font-bold text-[#382719] sm:text-5xl">

              What is a Dosha?

            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">

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
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br ${dosha.gradient} glass p-7 shadow-warm transition-all duration-500 hover:-translate-y-3`}
                >

                  {/* Decorative circle */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-sm">

                        <Icon className="h-7 w-7 text-[#5a4939]" />

                      </div>

                      <span className="font-hindi text-lg font-semibold text-[#765c43]">
                        {dosha.hindi}
                      </span>

                    </div>

                    <h3 className="mt-7 font-display text-3xl font-bold text-[#382719]">
                      {dosha.name}
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-[#765c43]">
                      {dosha.qualities}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {dosha.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>


          {/* Explanation card */}
          <div className="glass mx-auto mt-10 max-w-4xl rounded-[2rem] p-7 shadow-warm sm:p-9">

            <div className="flex flex-col gap-5 sm:flex-row">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100">

                <Info className="h-6 w-6 text-orange-600" />

              </div>

              <div>

                <h3 className="font-display text-xl font-bold text-[#382719]">
                  A simple way to think about it
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">

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

            <h3 className="font-display text-2xl font-bold text-[#382719]">
              Curious about your Dosha?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">

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

      <section className="px-6 pb-24 pt-10">

        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-premium p-10 text-center shadow-warm sm:p-16">

            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">

              <p className="font-hindi text-sm text-white/80">
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
