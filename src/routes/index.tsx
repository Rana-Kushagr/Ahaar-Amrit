import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Heart, Leaf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DoshaQuiz } from "@/components/DoshaQuiz";
import { DoshaResult } from "@/components/DoshaResult";
import type { Dosha } from "@/lib/dosha";

const title = "Ahaar Amrit — Ayurvedic Dosha Quiz & Personalized Nutrition";
const description =
  "Discover your Ayurvedic dosha with a 10-question quiz and get personalized Indian meal plans, foods to favour, and daily habits.";

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

type Result = { winner: Dosha; scores: Record<Dosha, number> };

function Index() {
  const [stage, setStage] = useState<"home" | "quiz" | "result">("home");
  const [result, setResult] = useState<Result | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {stage === "home" && <Hero onStart={() => setStage("quiz")} />}
      {stage === "quiz" && (
        <DoshaQuiz
          onExit={() => setStage("home")}
          onComplete={(r) => {
            setResult(r);
            setStage("result");
          }}
        />
      )}
      {stage === "result" && result && (
        <DoshaResult
          winner={result.winner}
          scores={result.scores}
          onRestart={() => {
            setResult(null);
            setStage("quiz");
          }}
        />
      )}
    </div>
  );
}

const highlights = [
  { icon: Heart, en: "Know Your Dosha", hi: "दोष पहचानें", tone: "text-primary" },
  { icon: Sparkles, en: "Personalized Meals", hi: "व्यक्तिगत आहार", tone: "text-secondary" },
  { icon: Leaf, en: "Healthy Habits", hi: "स्वस्थ आदतें", tone: "text-accent" },
];

function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-16">
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-primary blur-2xl opacity-30" />
            <div className="relative rounded-full bg-gradient-hero p-6 shadow-warm">
              <Leaf className="h-12 w-12 animate-float text-primary-foreground" />
            </div>
          </div>
        </div>

        <h1 className="mb-4 font-hindi text-5xl font-bold text-foreground md:text-6xl">
          आहार अमृत
        </h1>
        <p className="mb-3 text-2xl font-semibold text-gradient-saffron md:text-3xl">Ahaar Amrit</p>
        <p className="mb-8 font-hindi text-lg text-muted-foreground md:text-xl">
          स्वस्थ भारत, विकसित भारत
        </p>

        <div className="mb-10 rounded-2xl border border-primary/10 bg-card/80 p-6 shadow-warm backdrop-blur-sm md:p-8">
          <p className="mb-2 text-base text-foreground/90 md:text-lg">
            Personalized nutrition guidance combining{" "}
            <span className="font-semibold text-primary">Ayurvedic wisdom</span> and{" "}
            <span className="font-semibold text-secondary">modern science</span>
          </p>
          <p className="font-hindi text-sm text-muted-foreground md:text-base">
            आयुर्वेद और आधुनिक विज्ञान का संगम - आपके स्वास्थ्य के लिए
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-3xl gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, en, hi, tone }) => (
            <div
              key={en}
              className="rounded-xl border border-accent/20 bg-card p-6 shadow-md transition-smooth hover:-translate-y-1 hover:shadow-warm"
            >
              <Icon className={`mx-auto mb-3 h-8 w-8 ${tone}`} />
              <h2 className="mb-2 font-semibold">{en}</h2>
              <p className="font-hindi text-sm text-muted-foreground">{hi}</p>
            </div>
          ))}
        </div>

        <Button variant="hero" size="xl" onClick={onStart}>
          <Sparkles className="mr-2 h-5 w-5" />
          Discover Your Dosha
          <span className="ml-2 font-hindi">अपना दोष जानें</span>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Take our 10-question quiz to get personalized recommendations
        </p>
      </div>
    </section>
  );
}
