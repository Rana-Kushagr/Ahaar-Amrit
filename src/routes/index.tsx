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
      {/* Load Comfortaa font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{` .font-comfortaa{ font-family: 'Comfortaa', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; } `}</style>

      {/* Enhanced decorative background made from layered gradients and SVG shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* large warm radial for sky/glow */}
        <div
          aria-hidden
          className="absolute -left-40 -top-40 h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle_at_20%_20%,_#fde68a_8%,_transparent_35%)] opacity-90 blur-[60px] transform-gpu"
        />

        {/* subtle green blob */}
        <div
          aria-hidden
          className="absolute -right-48 bottom-[-10%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_80%_80%,_#d1fae5_8%,_transparent_40%)] opacity-85 blur-[80px] transform-gpu"
        />

        {/* gentle landscape band */}
        <svg className="absolute left-0 right-0 bottom-0 h-[40vh] w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="land1" x1="0" x2="1">
              <stop offset="0%" stopColor="#fff7ed" stopOpacity="1" />
              <stop offset="100%" stopColor="#f7f1df" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path d="M0,160 C220,220 380,80 720,160 C1060,240 1220,120 1440,160 L1440 320 L0 320 Z" fill="url(#land1)" />
        </svg>

        {/* leaf cluster svg on right */}
        <svg className="absolute right-6 top-28 h-[340px] w-[340px] opacity-95" viewBox="0 0 400 400" aria-hidden>
          <g transform="translate(20,20)">
            <path d="M300 40 C260 0, 200 0, 180 40 C200 60, 260 60, 300 40 Z" fill="#D1FAE5" />
            <path d="M320 90 C280 50, 220 50, 200 90 C220 110, 280 110, 320 90 Z" fill="#FEF3C7" />
            <ellipse cx="260" cy="220" rx="120" ry="70" fill="#FFF4E6" />
            <circle cx="320" cy="30" r="30" fill="#FDE68A" opacity="0.12" />
          </g>
        </svg>

        {/* subtle noise texture using SVG filter for organic feel */}
        <svg className="absolute inset-0 w-full h-full" aria-hidden>
          <filter id="n" x="0" y="0" width="100%" height="100%">
            <feTurbulence baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="t" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" in2="t" mode="overlay" />
          </filter>
          <rect width="100%" height="100%" fill="#ffffff" opacity="0.02" filter="url(#n)" />
        </svg>
      </div>

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
            <span className="ml-3 inline-block bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg,#c2410c,#f59e0b)' }}>
              अमृत
            </span>
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
