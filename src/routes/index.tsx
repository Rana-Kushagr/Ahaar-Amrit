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
  LayoutDashboard,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAhaarProfile } from "@/hooks/use-ahaar-profile";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollReveal } from "@/components/ScrollReveal";

const title = "Ahaar Amrit — Personalized Indian Nutrition";

const description =
  "Personalized Indian nutrition powered by modern science, food culture and Ayurveda.";

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
    title: "Ayurvedic Wisdom",
    hindi: "आयुर्वेद",
    text: "Timeless wellness insights for balanced mind and body.",
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
    description: "Traditionally associated with movement, creativity and adaptability.",
    qualities: "Light • Mobile • Changeable",
    gradient: "from-sky-400/20 via-blue-400/10 to-transparent",
  },
  {
    icon: Flame,
    name: "Pitta",
    hindi: "पित्त",
    description: "Traditionally associated with transformation, focus and metabolism.",
    qualities: "Warm • Sharp • Intense",
    gradient: "from-orange-400/25 via-amber-300/10 to-transparent",
  },
  {
    icon: Leaf,
    name: "Kapha",
    hindi: "कफ",
    description: "Traditionally associated with stability, calmness and nourishment.",
    qualities: "Steady • Grounded • Calm",
    gradient: "from-green-500/25 via-emerald-300/10 to-transparent",
  },
];

/* =========================================================
   HOMEPAGE
========================================================= */

function Index() {
  const { profile, hydrated } = useAhaarProfile();

  const hasProfile =
    hydrated &&
    Boolean(profile.completedAt || profile.ageGroup || profile.region || profile.dietaryPreference);

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundImage: "url('/ayurveda-hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Sleek Golden-Emerald Scroll Progress Bar */}
      <ScrollProgress />

      {/* =====================================================
          GLOBAL BACKGROUND OVERLAY

          This keeps the ORIGINAL image visible.
          It does NOT replace the image with a solid color.
      ===================================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-black/10" />

      {/* =====================================================
          ALL SCROLLABLE CONTENT
      ===================================================== */}
      <div className="relative z-10">
        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <section className="relative isolate px-6 pb-24 pt-20 sm:pt-28">
          {/* Decorative floating breathing auras with subtle parallax depth */}
          <div className="pointer-events-none absolute -left-20 top-32 h-48 w-48 rounded-full bg-orange-400/25 blur-3xl animate-aura-warm parallax-slow" />
          <div className="pointer-events-none absolute -right-24 top-48 h-64 w-64 rounded-full bg-green-400/25 blur-3xl animate-aura-emerald parallax-reverse" />
          <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-300/15 blur-3xl animate-aura-center parallax-slow" />
          {/* Floating subtle ambient particles */}
          <div className="pointer-events-none absolute left-[15%] top-1/4 h-2 w-2 rounded-full bg-amber-300/40 blur-[1px] animate-particle-1" />
          <div className="pointer-events-none absolute right-[20%] top-1/3 h-2.5 w-2.5 rounded-full bg-orange-300/35 blur-[1px] animate-particle-2" />
          <div className="pointer-events-none absolute left-[45%] top-2/3 h-1.5 w-1.5 rounded-full bg-emerald-300/40 blur-[1px] animate-particle-3" />
          {/* Hero content */}
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              {/* =================================================
                  LEFT SIDE
              ================================================= */}
              <div className="max-w-3xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/20 px-4 py-2 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-white/40 animate-hero-reveal">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
                  <span className="font-hindi text-sm font-medium text-white">
                    स्वस्थ भारत, विकसित भारत
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white">
                    Wellness • Nutrition
                  </span>
                </div>
                {/* Main heading with calming golden light behind both */}
                <div className="relative mt-7 block w-fit">
                  {/* Calming golden light behind both - not too big, softly visible */}
                  <div className="calm-golden-light-behind" aria-hidden="true" />
                  
                  <h1 className="relative z-10 font-hindi text-6xl font-bold leading-[1.14] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] sm:text-7xl lg:text-8xl animate-hero-reveal-delay-1">
                    आहार <span className="text-amber-400 font-bold">अमृत</span>
                  </h1>
                </div>
                {/* Brand */}
                <h2 className="mt-5 font-display text-2xl font-bold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] sm:text-3xl animate-hero-reveal-delay-2">
                  Ahaar <span className="font-extrabold text-amber-400">Amrit</span>
                </h2>
                {/* Description */}
                <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-xl animate-hero-reveal-delay-3">
                  Personalized nutrition for young India — combining modern science, Indian food
                  wisdom, and Ayurvedic wellness.
                </p>
                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 animate-hero-reveal-delay-4">
                  {hasProfile ? (
                    <>
                      <Button
                        asChild
                        size="xl"
                        variant="hero"
                        className="hover-lift shadow-warm button-gloss-effect"
                      >
                        <Link to="/dashboard">
                          <LayoutDashboard className="mr-2 h-5 w-5" />
                          Go to Dashboard
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="xl"
                        variant="outline"
                        className="border-white/40 bg-black/20 text-white shadow-lg backdrop-blur-xl hover:bg-white/20 hover:text-white"
                      >
                        <Link to="/profile">
                          <User className="mr-2 h-4 w-4" />
                          My Profile <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        asChild
                        size="xl"
                        variant="hero"
                        className="hover-lift shadow-warm button-gloss-effect"
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
                        className="border-white/40 bg-black/20 text-white shadow-lg backdrop-blur-xl hover:bg-white/20 hover:text-white"
                      >
                        <Link to="/dosha">
                          Explore Ayurveda <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
                {/* Trust message */}
                <div className="mt-8 flex items-center gap-3 text-sm font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-hero-reveal-delay-4">
                  <div className="flex -space-x-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-amber-200/80 bg-gradient-to-br from-amber-300 via-orange-500 to-amber-700 shadow-lg shadow-amber-900/40">
                      <span className="text-sm text-white">✦</span>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-emerald-100/80 bg-gradient-to-br from-emerald-400 via-emerald-700 to-emerald-950 shadow-lg shadow-emerald-950/50">
                      <Leaf className="h-4 w-4 text-amber-100" />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-amber-200/80 bg-gradient-to-br from-yellow-200 via-amber-500 to-orange-700 shadow-lg shadow-amber-950/40">
                      <span className="text-sm text-white">✦</span>
                    </div>
                  </div>{" "}
                  <span>Built around Indian food, culture and everyday life. </span>{" "}
                </div>{" "}
              </div>{" "}
              {/* =================================================
                  RIGHT SIDE — 4 CARDS
              ================================================= */}{" "}
              <div className="relative hidden min-h-[480px] items-center justify-center lg:flex">
                {" "}
                <div className="absolute h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
                {/* Main panel with levitation */}
                <div className="relative z-10 w-[360px] rounded-[2rem] border border-white/25 bg-black/25 p-7 shadow-2xl backdrop-blur-xl animate-levitate-hero">
                  {/* Panel heading */}{" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <div>
                      {" "}
                      <p className="text-sm font-medium text-white/80">
                        Your wellness journey{" "}
                      </p>{" "}
                      <h3 className="mt-1 font-display text-2xl font-bold text-white">
                        Starts with you.{" "}
                      </h3>{" "}
                    </div>{" "}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-lg">
                      <Leaf className="h-7 w-7 text-white" />{" "}
                    </div>{" "}
                  </div>
                  {/* 4 CARDS */}{" "}
                  <div className="mt-7 space-y-4">
                    {/* CARD 1 */}{" "}
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
                      {" "}
                      <div className="flex items-center gap-3">
                        {" "}
                        <div className="rounded-xl bg-green-500/20 p-2">
                          <Utensils className="h-5 w-5 text-green-200" />{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <p className="font-semibold text-white">Your Food </p>{" "}
                          <p className="text-xs text-white/70">
                            Indian • Personal • Practical{" "}
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                    {/* CARD 2 */}{" "}
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
                      {" "}
                      <div className="flex items-center gap-3">
                        {" "}
                        <div className="rounded-xl bg-orange-500/20 p-2">
                          <Sparkles className="h-5 w-5 text-orange-200" />{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <p className="font-semibold text-white">Your Nutrition </p>{" "}
                          <p className="text-xs text-white/70">
                            Modern science • Personalized{" "}
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                    {/* CARD 3 */}
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-yellow-500/20 p-2 animate-kapha-element">
                          <Leaf className="h-5 w-5 text-yellow-200" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Ayurvedic Wisdom</p>
                          <p className="text-xs text-white/70">Holistic mind & body balance</p>
                        </div>
                      </div>
                    </div>
                    {/* CARD 4 */}{" "}
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
                      {" "}
                      <div className="flex items-center gap-3">
                        {" "}
                        <div className="rounded-xl bg-rose-500/20 p-2">
                          <Heart className="h-5 w-5 text-rose-200" />{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <p className="font-semibold text-white">Indian Food Culture </p>{" "}
                          <p className="text-xs text-white/70">
                            Rooted in tradition • Made for you{" "}
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* =====================================================
            FEATURES
        ===================================================== */}
        <section className="relative px-6 py-20">
          <div className="mx-auto max-w-6xl">
            {/* Heading */}
            <ScrollReveal direction="up" delay={0}>
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-hindi text-sm font-semibold text-white drop-shadow-md">
                  आपका स्वास्थ्य, आपकी संस्कृति
                </p>
                <h2 className="mt-2 font-display text-4xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] sm:text-5xl">
                  Nutrition that feels like you.
                </h2>
                <p className="mt-4 font-medium leading-relaxed text-white/90 drop-shadow-md">
                  Ahaar Amrit brings together evidence-based nutrition, Indian food culture and
                  traditional Ayurvedic wellness.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <ScrollReveal
                    key={feature.title}
                    direction="up"
                    delay={index * 130}
                    className="h-full"
                  >
                    <div className="h-full rounded-[2rem] border border-white/25 bg-black/25 p-7 text-center shadow-2xl backdrop-blur-xl card-aurora hover:bg-black/30">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-warm">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-white drop-shadow-md">
                        {feature.title}
                      </h3>
                      <p className="mt-1 font-hindi text-sm font-semibold text-white/90">
                        {feature.hindi}
                      </p>
                      <p className="mt-4 text-sm font-medium leading-relaxed text-white/85">
                        {feature.text}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            DOSHA SECTION
        ===================================================== */}
        <section className="relative overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-3xl parallax-slow" />
          <div className="relative mx-auto max-w-6xl">
            {/* Heading */}
            <ScrollReveal direction="up" delay={0}>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-premium shadow-warm">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <p className="mt-6 font-hindi text-sm font-semibold text-white">
                  आयुर्वेद को सरलता से समझें
                </p>
                <h2 className="mt-2 font-display text-4xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] sm:text-5xl">
                  What is a Dosha?
                </h2>
                <p className="mt-5 text-base font-medium leading-relaxed text-white/90 drop-shadow-md sm:text-lg">
                  In traditional Ayurveda, a <strong className="text-white"> Dosha </strong>
                  is a concept used to describe patterns of qualities associated with the body and
                  mind. Ayurveda traditionally describes three main Doshas — Vata, Pitta and
                  Kapha.
                </p>
              </div>
            </ScrollReveal>

            {/* Dosha cards */}
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {doshas.map((dosha, index) => {
                const Icon = dosha.icon;
                const elementAnim =
                  dosha.name === "Vata"
                    ? "animate-vata-element"
                    : dosha.name === "Pitta"
                      ? "animate-pitta-element"
                      : "animate-kapha-element";

                return (
                  <ScrollReveal
                    key={dosha.name}
                    direction="scale"
                    delay={index * 130}
                    className="h-full"
                  >
                    <div
                      className={`group relative h-full overflow-hidden rounded-[2rem] border border-white/25 bg-gradient-to-br ${dosha.gradient} p-7 shadow-2xl backdrop-blur-xl card-aurora hover:-translate-y-3`}
                    >
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-xl transition-transform duration-700 ease-out group-hover:scale-150" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-black/20 ${elementAnim}`}
                          >
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <span className="font-hindi text-lg font-semibold text-white">
                            {dosha.hindi}
                          </span>
                        </div>
                        <h3 className="mt-7 font-display text-3xl font-bold text-white">
                          {dosha.name}
                        </h3>
                        <p className="mt-3 text-sm font-semibold text-white">{dosha.qualities}</p>
                        <p className="mt-4 text-sm font-medium leading-relaxed text-white/85">
                          {dosha.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Explanation card */}
            <ScrollReveal direction="up" delay={120}>
              <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-white/25 bg-black/25 p-7 shadow-2xl backdrop-blur-xl sm:p-9">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/20">
                    <Info className="h-6 w-6 text-orange-200" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      A simple way to think about it
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-white/85">
                      Dosha concepts come from the traditional Ayurvedic wellness system. They are
                      best understood as a framework for exploring traditional ideas about individual
                      patterns and tendencies — not as a medical diagnosis.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal direction="up" delay={150}>
              <div className="mt-12 text-center">
                <h3 className="font-display text-2xl font-bold text-white">
                  Curious about your Dosha?
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-white/85">
                  Take our short quiz to explore which traditional Ayurvedic pattern may resonate with
                  you.
                </p>
                <Button
                  asChild
                  size="xl"
                  variant="hero"
                  className="mt-6 shadow-warm button-gloss-effect"
                >
                  <Link to="/dosha">
                    Explore Your Dosha <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =====================================================
            FOOTER CTA
        ===================================================== */}
        <section className="relative px-6 pb-24 pt-10">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal direction="scale" duration={950}>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/25 bg-black/30 p-10 text-center shadow-2xl backdrop-blur-xl sm:p-16">
                <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-orange-400/10 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-green-400/10 blur-3xl" />
                <div className="relative">
                  <p className="font-hindi text-sm font-semibold text-white">
                    आपकी सेहत की यात्रा यहीं से शुरू होती है
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
                    Your food. <br />
                    Your culture. <br /> Your journey.
                  </h2>
                  <Button asChild size="xl" variant="secondary" className="mt-8">
                    <Link to={hasProfile ? "/dashboard" : "/onboarding"}>
                      {hasProfile ? "Go to Dashboard" : "Get Started"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>{" "}
      </div>{" "}
    </main>
  );
}
