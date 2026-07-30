import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, Sparkles, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const title = "Ahaar Amrit — Personalized Indian Nutrition for Teens & Adults";
const description =
  "Build your Ahaar Profile for personalized Indian nutrition rooted in modern science, regional food culture, and optional Ayurvedic wellness.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const highlights = [
  {
    icon: Utensils,
    en: "Modern Nutrition",
    hi: "आधुनिक पोषण",
    tone: "text-secondary",
    body: "Evidence-based guidance built for everyday Indian eating.",
  },
  {
    icon: Heart,
    en: "Indian Food Culture",
    hi: "भारतीय खान-पान",
    tone: "text-primary",
    body: "Regional foods you actually grew up with, not generic diets.",
  },
  {
    icon: Sparkles,
    en: "Ayurveda, Optional",
    hi: "वैकल्पिक आयुर्वेद",
    tone: "text-accent",
    body: "Explore traditional wellness perspectives only if you want to.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <section className="relative overflow-hidden px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-primary opacity-30 blur-2xl" />
              <div className="relative rounded-full bg-gradient-hero p-6 shadow-warm">
                <Leaf className="h-12 w-12 animate-float text-primary-foreground" />
              </div>
            </div>
          </div>

          <h1 className="mb-4 font-hindi text-5xl font-bold text-foreground md:text-6xl">
            आहार अमृत
          </h1>
          <p className="mb-3 text-2xl font-semibold text-gradient-saffron md:text-3xl">
            Ahaar Amrit
          </p>
          <p className="mb-8 font-hindi text-lg text-muted-foreground md:text-xl">
            स्वस्थ भारत, विकसित भारत
          </p>

          <div className="mb-10 rounded-2xl border border-primary/10 bg-card/80 p-6 shadow-warm backdrop-blur-sm md:p-8">
            <p className="mb-2 text-base text-foreground/90 md:text-lg">
              Personalized nutrition for young India — grounded in{" "}
              <span className="font-semibold text-secondary">modern science</span>, shaped by{" "}
              <span className="font-semibold text-primary">Indian food culture</span>, with{" "}
              <span className="font-semibold text-accent">Ayurveda as an optional layer</span>.
            </p>
            <p className="font-hindi text-sm text-muted-foreground md:text-base">
              आयुर्वेद और आधुनिक विज्ञान का संगम - आपके स्वास्थ्य के लिए
            </p>
          </div>

          <div className="mx-auto mb-10 grid max-w-3xl gap-4 md:grid-cols-3">
            {highlights.map(({ icon: Icon, en, hi, tone, body }) => (
              <div
                key={en}
                className="rounded-xl border border-accent/20 bg-card p-6 shadow-md transition-smooth hover:-translate-y-1 hover:shadow-warm"
              >
                <Icon className={`mx-auto mb-3 h-8 w-8 ${tone}`} />
                <h2 className="mb-1 font-semibold">{en}</h2>
                <p className="mb-2 font-hindi text-sm text-muted-foreground">{hi}</p>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" size="xl" asChild>
            <Link to="/onboarding">
              <Sparkles className="mr-2 h-5 w-5" />
              Let's Get Started
              <span className="ml-2 font-hindi">शुरू करें</span>
            </Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Set up your Ahaar Profile in about a minute — age group, region, food preference, and
            goals.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              to="/dosha"
              className="text-muted-foreground underline underline-offset-4 transition-smooth hover:text-primary"
            >
              Explore the optional dosha quiz
            </Link>
            <Link
              to="/profile"
              className="text-muted-foreground underline underline-offset-4 transition-smooth hover:text-primary"
            >
              View my Ahaar Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
