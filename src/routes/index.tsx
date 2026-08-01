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
      "from-cyan-400/30 via-blue-400/10 to-transparent",
  },
  {
    icon: Flame,
    name: "Pitta",
    hindi: "पित्त",
    description:
      "Traditionally associated with transformation, focus and metabolism.",
    qualities: "Warm • Sharp • Intense",
    gradient:
      "from-orange-400/35 via-amber-300/10 to-transparent",
  },
  {
    icon: Leaf,
    name: "Kapha",
    hindi: "कफ",
    description:
      "Traditionally associated with stability, calmness and nourishment.",
    qualities: "Steady • Grounded • Calm",
    gradient:
      "from-emerald-400/35 via-green-300/10 to-transparent",
  },
];

/* =========================================================
   HOMEPAGE
========================================================= */

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden text-[#33251d]">

      {/* =====================================================
          GLOBAL COLORFUL BACKGROUND
      ===================================================== */}

      <div className="fixed inset-0 -z-50 bg-[#161b1a]" />

      <div className="fixed inset-0 -z-40 bg-[radial-gradient(circle_at_10%_10%,rgba(255,145,55,0.55),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(95,170,105,0.45),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(255,190,75,0.28),transparent_35%),linear-gradient(135deg,#fff0c7_0%,#dce8c9_45%,#c8ddc8_100%)]" />

      {/* Large atmospheric color glows */}

      <div className="pointer-events-none fixed -left-40 top-20 -z-30 h-[500px] w-[500px] rounded-full bg-orange-400/30 blur-[120px]" />

      <div className="pointer-events-none fixed -right-40 top-40 -z-30 h-[600px] w-[600px] rounded-full bg-green-400/25 blur-[140px]" />

      <div className="pointer-events-none fixed bottom-0 left-1/2 -z-30 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-300/20 blur-[150px]" />


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative isolate overflow-hidden px-6 pb-28 pt-28 sm:pt-36">

        {/* Decorative floating orbs */}

        <div className="orb-saffron animate-float absolute -left-24 top-40 h-48 w-48 rounded-full opacity-50 blur-[2px]" />

        <div className="orb-green animate-float-slow absolute -right-28 top-52 h-64 w-64 rounded-full opacity-40 blur-[3px]" />

        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-300/25 blur-[100px]" />


        {/* Hero content */}

        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">


            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="max-w-3xl">


              {/* Badge */}

              <div className="glass inline-flex items-center gap-3 rounded-full border border-white/40 px-4 py-2 shadow-xl">

                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-600 shadow-[0_0_12px_rgba(34,197,94,0.8)]" />

                <span className="font-hindi text-sm font-medium text-green-800">
                  स्वस्थ भारत, विकसित भारत
                </span>

                <span className="rounded-full bg-green-600/15 px-3 py-1 text-xs font-semibold text-green-800 backdrop-blur-md">
                  Wellness • Nutrition
                </span>

              </div>


              {/* Heading */}

              <h1 className="mt-8 font-display text-6xl font-bold leading-[0.95] tracking-tight text-[#342419] drop-shadow-sm sm:text-7xl lg:text-8xl">

                आहार{" "}

                <span className="text-gradient-saffron">
                  अमृत
                </span>

              </h1>


              <h2 className="mt-6 font-display text-2xl font-semibold text-[#65432b] sm:text-3xl">
                Ahaar Amrit
              </h2>


              {/* Description */}

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#604f41] sm:text-xl">

                Personalized nutrition for young India —
                combining modern science, Indian food wisdom,
                and optional Ayurvedic wellness.

              </p>


              {/* CTA buttons */}

              <div className="mt-9 flex flex-wrap gap-4">

                <Button
                  asChild
                  size="xl"
                  variant="hero"
                  className="hover-lift rounded-full border border-white/20 shadow-[0_15px_40px_rgba(255,110,40,0.3)]"
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
                  className="glass rounded-full border-white/50 bg-white/20 text-[#49372a] shadow-lg backdrop-blur-xl hover:bg-white/35"
                >

                  <Link to="/dosha">

                    Explore Ayurveda

                    <ArrowRight className="ml-2 h-4 w-4" />

                  </Link>

                </Button>

              </div>


              {/* Trust message */}

              <div className="mt-9 flex items-center gap-3 text-sm text-[#695748]">

                <div className="flex -space-x-2">

                  <div className="h-8 w-8 rounded-full border-2 border-white/70 bg-orange-300/70 backdrop-blur-md" />

                  <div className="h-8 w-8 rounded-full border-2 border-white/70 bg-green-300/70 backdrop-blur-md" />

                  <div className="h-8 w-8 rounded-full border-2 border-white/70 bg-yellow-300/70 backdrop-blur-md" />

                </div>

                <span>
                  Built around Indian food, culture and everyday life.
                </span>

              </div>

            </div>


            {/* =================================================
                RIGHT — GLASS WELLNESS CARD
            ================================================= */}

            <div className="relative hidden min-h-[500px] items-center justify-center lg:flex">

              {/* Glow */}

              <div className="absolute h-96 w-96 rounded-full bg-orange-400/25 blur-[100px]" />


              {/* Main glass card */}

              <div className="relative z-10 w-[380px] rounded-[2.5rem] border border-white/50 bg-white/20 p-7 shadow-[0_30px_100px_rgba(70,70,30,0.18)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/25">


                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-medium text-[#756455]">
                      Your wellness journey
                    </p>

                    <h3 className="mt-1 font-display text-2xl font-bold text-[#3b2b1f]">
                      Starts with you.
                    </h3>

                  </div>


                  <div className="orb-saffron flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg">

                    <Leaf className="h-7 w-7 text-white" />

                  </div>

                </div>


                <div className="mt-7 space-y-4">


                  {/* Card 1 */}

                  <div className="rounded-2xl border border-white/40 bg-white/30 p-4 shadow-sm backdrop-blur-xl transition hover:bg-white/40">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-green-500/15 p-2">

                        <Utensils className="h-5 w-5 text-green-700" />

                      </div>

                      <div>

                        <p className="font-semibold text-[#493629]">
                          Your Food
                        </p>

                        <p className="text-xs text-[#756455]">
                          Indian • Personal • Practical
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* Card 2 */}

                  <div className="rounded-2xl border border-white/40 bg-white/30 p-4 shadow-sm backdrop-blur-xl transition hover:bg-white/40">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-orange-500/15 p-2">

                        <Sparkles className="h-5 w-5 text-orange-600" />

                      </div>

                      <div>

                        <p className="font-semibold text-[#493629]">
                          Your Nutrition
                        </p>

                        <p className="text-xs text-[#756455]">
                          Modern science • Personalized
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* Card 3 */}

                  <div className="rounded-2xl border border-white/40 bg-white/30 p-4 shadow-sm backdrop-blur-xl transition hover:bg-white/40">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-yellow-500/15 p-2">

                        <Leaf className="h-5 w-5 text-yellow-700" />

                      </div>

                      <div>

                        <p className="font-semibold text-[#493629]">
                          Optional Ayurveda
                        </p>

                        <p className="text-xs text-[#756455]">
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

      <section className="relative px-6 py-24">

        <div className="mx-auto max-w-6xl">


          <div className="mx-auto max-w-2xl text-center">

            <p className="font-hindi text-sm font-medium text-green-700">
              आपका स्वास्थ्य, आपकी संस्कृति
            </p>

            <h2 className="mt-2 font-display text-4xl font-bold text-[#382719] sm:text-5xl">
              Nutrition that feels like you.
            </h2>

            <p className="mt-4 text-[#6b5a4b]">
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
                  className="group rounded-[2rem] border border-white/40 bg-white/20 p-7 text-center shadow-[0_20px_60px_rgba(50,60,30,0.1)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/30"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-lg">

                    <Icon className="h-7 w-7 text-white" />

                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-[#382719]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 font-hindi text-sm text-green-700">
                    {feature.hindi}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#6b5a4b]">
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

      <section className="relative overflow-hidden px-6 py-28">

        <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/15 blur-[120px]" />


        <div className="mx-auto max-w-6xl">


          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-premium shadow-xl">

              <Sparkles className="h-7 w-7 text-white" />

            </div>


            <p className="mt-6 font-hindi text-sm font-medium text-green-700">
              आयुर्वेद को सरलता से समझें
            </p>


            <h2 className="mt-2 font-display text-4xl font-bold text-[#382719] sm:text-5xl">
              What is a Dosha?
            </h2>


            <p className="mt-5 text-base leading-relaxed text-[#6b5a4b] sm:text-lg">

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
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br ${dosha.gradient} p-7 shadow-[0_25px_70px_rgba(40,60,40,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3`}
                >

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-xl transition-transform duration-500 group-hover:scale-150" />


                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/50 bg-white/30 shadow-sm backdrop-blur-xl">

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


                    <p className="mt-4 text-sm leading-relaxed text-[#6b5a4b]">
                      {dosha.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>


          {/* Explanation card */}

          <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-white/40 bg-white/20 p-7 shadow-[0_25px_70px_rgba(40,60,40,0.1)] backdrop-blur-2xl sm:p-9">

            <div className="flex flex-col gap-5 sm:flex-row">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-400/15">

                <Info className="h-6 w-6 text-orange-600" />

              </div>


              <div>

                <h3 className="font-display text-xl font-bold text-[#382719]">
                  A simple way to think about it
                </h3>


                <p className="mt-3 text-sm leading-relaxed text-[#6b5a4b]">

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


            <p className="mx-auto mt-3 max-w-xl text-sm text-[#6b5a4b]">

              Take our short quiz to explore which traditional Ayurvedic
              pattern may resonate with you.

            </p>


            <Button
              asChild
              size="xl"
              variant="hero"
              className="mt-6 rounded-full shadow-xl"
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

      <section className="px-6 pb-28 pt-10">

        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-premium p-10 text-center shadow-[0_30px_100px_rgba(50,80,40,0.2)] sm:p-16">


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
                className="mt-8 rounded-full shadow-xl"
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
