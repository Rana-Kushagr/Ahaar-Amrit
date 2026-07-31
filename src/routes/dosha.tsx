import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Leaf, Wind, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dosha")({
  component: DoshaPage,
});

const doshas = [
  {
    name: "Vata",
    hindi: "वात",
    element: "Air + Space",
    icon: Wind,
    description:
      "Vata is associated with movement, creativity, flexibility, and energy. People with a Vata-dominant nature may enjoy variety and new experiences.",
    traits: ["Creative", "Energetic", "Adaptable"],
    className: "orb-green",
  },
  {
    name: "Pitta",
    hindi: "पित्त",
    element: "Fire + Water",
    icon: Flame,
    description:
      "Pitta is associated with transformation, focus, digestion, and drive. People with a Pitta-dominant nature may be determined, focused, and goal-oriented.",
    traits: ["Focused", "Driven", "Organized"],
    className: "orb-saffron",
  },
  {
    name: "Kapha",
    hindi: "कफ",
    element: "Earth + Water",
    icon: Leaf,
    description:
      "Kapha is associated with stability, strength, calmness, and nourishment. People with a Kapha-dominant nature may value consistency and patience.",
    traits: ["Calm", "Steady", "Patient"],
    className: "orb-green",
  },
];

function DoshaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Decorative 3D background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="animate-float-slow absolute -right-32 top-40 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-4 py-2 text-sm shadow-sm backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="font-medium text-primary">
            Discover your unique wellness pattern
          </span>
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
          What is a{" "}
          <span className="text-gradient-saffron">Dosha?</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          In Ayurveda, the concept of Doshas describes three fundamental
          mind-body patterns: <strong>Vata, Pitta, and Kapha.</strong> Learning
          about them can help you explore traditional perspectives on your
          energy, habits, and daily wellbeing.
        </p>

        <p className="mx-auto mt-4 max-w-xl font-hindi text-base text-secondary">
          अपने शरीर और मन की प्रकृति को समझने की एक पारंपरिक यात्रा।
        </p>
      </section>

      {/* Dosha cards */}
      <section className="relative mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
        {doshas.map((dosha, index) => {
          const Icon = dosha.icon;

          return (
            <article
              key={dosha.name}
              className={`glass hover-lift relative overflow-hidden rounded-3xl p-8 ${
                index === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              {/* 3D orb */}
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-80 ${dosha.className}`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-sm">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <span className="font-hindi text-2xl font-bold text-secondary">
                    {dosha.hindi}
                  </span>
                </div>

                <h2 className="mt-8 font-display text-3xl font-bold">
                  {dosha.name}
                </h2>

                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary">
                  {dosha.element}
                </p>

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {dosha.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {dosha.traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA */}
      <section className="relative mx-6 mb-20 overflow-hidden rounded-[2rem] bg-gradient-premium px-6 py-16 text-center text-white shadow-warm sm:px-12">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="font-hindi text-lg text-white/80">
            अपनी प्रकृति को जानें
          </p>

          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Curious about your Dosha?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/80">
            Take our simple questionnaire to explore which Dosha pattern may
            resonate most with you.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-white px-7 text-primary shadow-xl hover:bg-white/90"
          >
            <Link to="/dosha-quiz">
              Discover My Dosha
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <p className="mx-auto mt-5 max-w-lg text-xs leading-5 text-white/60">
            This experience is for educational and wellness purposes. It is not
            a medical diagnosis or a substitute for professional healthcare.
          </p>
        </div>
      </section>
    </main>
  );
}
