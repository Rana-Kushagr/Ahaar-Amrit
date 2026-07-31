import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Heart, Sparkles, Utensils } from "lucide-react";
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
    text: "Foods connected with your region and routine.",
  },
  {
    icon: Sparkles,
    title: "Optional Ayurveda",
    hindi: "आयुर्वेद",
    text: "Traditional wellness insights when you choose.",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f1df] px-6 pt-24 pb-20">
      {/* Load Comfortaa font (will render in body but fine for dev) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{` .font-comfortaa{ font-family: 'Comfortaa', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; } `}</style>

      {/* Decorative SVG artwork (CSS/SVG approximations of the reference) */}
      <svg
        className="pointer-events-none absolute -left-24 -top-12 h-[520px] w-[520px] opacity-90"
        viewBox="0 0 520 520"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <radialGradient id="r1" cx="30%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f7f1df" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="120" cy="120" r="140" fill="#FDE68A" opacity="0.08" />
        <g transform="translate(60,260) scale(0.9)">
          <path d="M10 200 C 80 120, 220 120, 290 200 C 220 260, 80 260, 10 200 Z" fill="#E6F4EA" />
          <path d="M40 180 C 100 120, 200 120, 260 180 C 200 220, 100 220, 40 180 Z" fill="#D1F0D9" opacity="0.95" />
        </g>
        <path d="M420 80 C 380 40, 320 40, 300 80 C 320 100, 380 100, 420 80 Z" fill="#D1FAE5" opacity="0.95" />
        <path d="M460 120 C 430 80, 380 80, 360 120 C 380 140, 430 140, 460 120 Z" fill="#FEF3C7" opacity="0.9" />
      </svg>

      <svg
        className="pointer-events-none absolute -right-24 -bottom-12 h-[520px] w-[520px] opacity-95"
        viewBox="0 0 520 520"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <ellipse cx="260" cy="420" rx="240" ry="80" fill="#FCEFD8" />
        <path d="M40 360 C 120 300, 400 300, 480 360 L480 420 L40 420 Z" fill="#FFF7ED" />
        <g transform="translate(180,310)">
          <circle cx="40" cy="-10" r="60" fill="#FDE68A" opacity="0.12" />
        </g>
      </svg>

      {/* Floating rounded navbar (recreated) */}
      <nav className="absolute left-1/2 top-6 z-30 w-[min(1100px,calc(100%-3rem))] -translate-x-1/2 rounded-full bg-white/95 px-6 py-3 shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-50 p-2">
            <Leaf className="h-6 w-6 text-green-700" />
          </div>
          <div className="font-semibold font-comfortaa">Ahaar Amrit</div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/about" className="text-sm text-muted-foreground">
            About
          </Link>
          <Link to="/pricing" className="text-sm text-muted-foreground">
            Pricing
          </Link>
          <Link to="/login" className="text-sm text-muted-foreground">
            Log in
          </Link>
          <Button asChild size="sm" variant="outline">
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </nav>

      {/* HERO - recreated as real components */}
      <section className="relative z-20 mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
        {/* LEFT: hero content recreated */}
        <div className="pt-8">
          {/* Hero badge recreated */}
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-sm">
            <span className="text-sm font-hindi text-secondary">स्वस्थ भारत, विकसित भारत</span>
            <span className="px-2 py-0.5 rounded-full bg-green-50 text-xs font-medium text-green-700">Trusted</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display font-comfortaa text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            आहार
            <span className="ml-3 inline-block text-amber-700">अमृत</span>
          </h1>

          {/* Subheading / description */}
          <h2 className="mt-4 text-2xl font-semibold">Ahaar Amrit</h2>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Personalized nutrition for young India — combining modern science, Indian food wisdom,
            and optional Ayurvedic wellness.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="xl" variant="hero">
              <Link to="/onboarding">
                <Sparkles className="mr-2 h-5 w-5 inline" /> Create Profile
              </Link>
            </Button>

            <Button asChild size="xl" variant="outline">
              <Link to="/dosha">Explore Ayurveda</Link>
            </Button>
          </div>

          {/* Trusted Users card recreated */}
          <div className="mt-8 flex items-center gap-4">
            <div className="rounded-2xl bg-white px-4 py-3 shadow">
              <div className="text-sm font-semibold">Trusted by</div>
              <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gray-100" />
                  <span>1000+</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gray-100" />
                  <span>Local Clinics</span>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Real people, real results — personalized for your culture and routine.
            </div>
          </div>
        </div>

        {/* RIGHT: decorative artwork area (SVG/CSS) - no phone mockup */}
        <div className="relative flex h-[520px] w-full items-center justify-center">
          <div className="pointer-events-none max-w-[420px] w-full">
            <svg viewBox="0 0 420 520" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <radialGradient id="g1" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#FFF7ED" stopOpacity="1" />
                  <stop offset="100%" stopColor="#F7F1DF" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect x="0" y="0" width="420" height="520" fill="url(#g1)" />
              <ellipse cx="210" cy="420" rx="180" ry="50" fill="#FFF4E6" />
              <path d="M320 150 C 300 120, 260 120, 240 150 C 260 170, 300 170, 320 150 Z" fill="#D1FAE5" />
              <path d="M80 140 C 100 110, 140 110, 160 140 C 140 160, 100 160, 80 140 Z" fill="#FEF3C7" />
              <circle cx="300" cy="60" r="40" fill="#FDE68A" opacity="0.12" />
              <circle cx="100" cy="80" r="30" fill="#CFFAFE" opacity="0.08" />
            </svg>
          </div>
        </div>
      </section>

      {/* FEATURES - recreated feature cards */}
      <section className="relative z-10 mx-auto mt-20 grid max-w-5xl gap-5 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="rounded-2xl bg-white px-6 py-6 text-center shadow-md">
              <Icon className="mx-auto mb-4 h-9 w-9 text-primary" />
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-1 font-hindi text-sm text-muted-foreground">{feature.hindi}</p>
              <p className="mt-3 text-sm text-muted-foreground">{feature.text}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
