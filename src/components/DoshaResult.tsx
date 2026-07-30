import { Leaf, RotateCcw, Utensils, XCircle, CheckCircle2, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { doshaProfiles, type Dosha } from "@/lib/dosha";

interface DoshaResultProps {
  winner: Dosha;
  scores: Record<Dosha, number>;
  onRestart: () => void;
}

export function DoshaResult({ winner, scores, onRestart }: DoshaResultProps) {
  const profile = doshaProfiles[winner];
  const total = scores.vata + scores.pitta + scores.kapha;

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-10 rounded-3xl border border-primary/15 bg-card p-8 text-center shadow-warm md:p-10">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-hero p-5 shadow-warm">
              <Leaf className="h-9 w-9 text-primary-foreground animate-float" />
            </div>
          </div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Your dominant dosha
          </p>
          <h1 className="mb-1 text-4xl font-bold text-gradient-saffron md:text-5xl">
            {profile.name}
          </h1>
          <p className="mb-3 font-hindi text-2xl text-foreground">{profile.hindi}</p>
          <p className="mb-6 text-sm text-muted-foreground">{profile.elements}</p>
          <p className="mx-auto max-w-xl text-foreground/90">{profile.summary}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {(Object.keys(scores) as Dosha[]).map((d) => (
              <div key={d} className="rounded-xl border border-border bg-muted/50 p-4">
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="font-medium">{doshaProfiles[d].name}</span>
                  <span className="font-hindi text-sm text-muted-foreground">
                    {doshaProfiles[d].hindi}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-background">
                  <div
                    className="h-full rounded-full bg-gradient-hero"
                    style={{ width: `${(scores[d] / total) * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {Math.round((scores[d] / total) * 100)}%
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-secondary/20 bg-card p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <CheckCircle2 className="h-5 w-5 text-secondary" /> Favour these foods
            </h2>
            <ul className="space-y-2 text-sm text-foreground/90">
              {profile.eat.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-secondary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-card p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <XCircle className="h-5 w-5 text-primary" /> Reduce these
            </h2>
            <ul className="space-y-2 text-sm text-foreground/90">
              {profile.avoid.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-accent/25 bg-card p-6 shadow-sm">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold">
            <Utensils className="h-5 w-5 text-accent" /> A day of meals for you
            <span className="font-hindi text-sm font-normal text-muted-foreground">
              दिन भर का आहार
            </span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.meals.map((m) => (
              <div key={m.time} className="rounded-xl bg-muted/60 p-4">
                <p className="text-sm font-semibold text-primary">{m.time}</p>
                <p className="font-hindi text-xs text-muted-foreground">{m.hindi}</p>
                <p className="mt-2 text-sm text-foreground/90">{m.dish}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Sun className="h-5 w-5 text-accent" /> Daily habits
            <span className="font-hindi text-sm font-normal text-muted-foreground">
              स्वस्थ आदतें
            </span>
          </h2>
          <ul className="space-y-2 text-sm text-foreground/90">
            {profile.habits.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-accent">•</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" onClick={onRestart}>
            <RotateCcw className="mr-2 h-5 w-5" />
            Retake the quiz
            <span className="ml-2 font-hindi">फिर से करें</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
