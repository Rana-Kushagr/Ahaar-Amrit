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
    <main className="relative min-h-screen overflow-hidden bg-[url('/ayurveda-hero-bg.png')] bg-cover bg-center bg-no-repeat bg-[#f7f1df] px-6 pt-24 pb-20">
      {/* Load Comfortaa font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{` .font-comfortaa{ font-family: 'Comfortaa', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; } `}</style>

      {/* Background is now the provided raster artwork at public/ayurveda-hero-bg.png. All decorative SVGs were removed to avoid duplication. */}

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
          <h1 className="mt-6 font-display font-comfortaa text-6xl font-bold leading-tight sm:text-6xl md:text-[5.5rem]">
            आहार
            <span
              className="ml-3 inline-block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#0f766e,#16a34a)" }}
            >
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

        {/* RIGHT: decorative artwork area reserved (no phone mockup) */}
        <div className="relative flex h-[520px] w-full items-center justify-center" />
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
