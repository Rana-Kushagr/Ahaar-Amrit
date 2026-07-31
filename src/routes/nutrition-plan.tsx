import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Leaf, Sparkles, Utensils, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAhaarProfile } from "@/hooks/use-ahaar-profile";
import { doshaProfiles } from "@/lib/dosha";
import {
  ageGroupOptions,
  dietOptions,
  goalOptions,
  labelFor,
  regionOptions,
} from "@/lib/profile";
import {
  ALLERGY_NOTE,
  AYURVEDA_DISCLAIMER,
  buildNutritionPlan,
  planFocusNotes,
} from "@/lib/nutrition-plan";

const title = "My Nutrition Plan — Ahaar Amrit";
const description =
  "A personalized one-day Indian meal plan built from your Ahaar Profile: region, food preference, goals and optional Ayurvedic insight.";

export const Route = createFileRoute("/nutrition-plan")({
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
  component: NutritionPlanPage,
});

function NutritionPlanPage() {
  const { profile, hydrated } = useAhaarProfile();

  if (!hydrated) return <div className="min-h-screen bg-background" aria-hidden />;

  const plan = buildNutritionPlan(profile);
  const notes = planFocusNotes(profile);
  const dosha = profile.dosha ? doshaProfiles[profile.dosha] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted px-4 py-12">
      <div className="container mx-auto max-w-4xl space-y-8">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-smooth hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>

        {/* Header */}
        <header className="rounded-2xl border border-primary/15 bg-card p-8 text-center shadow-warm">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-gradient-hero p-4 shadow-warm">
              <Leaf className="h-7 w-7 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">Your Personalized Nutrition Plan</h1>
          <p className="mt-2 font-hindi text-muted-foreground">आपकी व्यक्तिगत पोषण योजना</p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/80">
            This one-day plan is built from the preferences and goals you shared in your Ahaar
            Profile, using everyday Indian foods.
          </p>
        </header>

        {/* Plan based on */}
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Info className="h-5 w-5 text-primary" />
            Plan based on
            <span className="font-hindi text-sm font-normal text-muted-foreground">आपकी जानकारी</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Age group" value={labelFor(ageGroupOptions, profile.ageGroup)} />
            <Stat label="Region" value={labelFor(regionOptions, profile.region)} />
            <Stat label="Food preference" value={labelFor(dietOptions, profile.dietaryPreference)} />
          </div>
          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Goals</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {profile.goals.length ? (
                profile.goals.map((goal) => (
                  <li
                    key={goal}
                    className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1 text-sm"
                  >
                    {goal === "other" && profile.otherGoal
                      ? profile.otherGoal
                      : labelFor(goalOptions, goal)}
                  </li>
                ))
              ) : (
                <li className="text-sm text-muted-foreground">No goals selected</li>
              )}
            </ul>
          </div>
          {notes.length > 0 && (
            <ul className="mt-5 space-y-1.5 text-sm text-foreground/90">
              {notes.map((n) => (
                <li key={n} className="flex gap-2">
                  <span className="text-primary">•</span>
                  {n}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Meals */}
               <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Utensils className="h-5 w-5 text-secondary" />
            Your day of meals
            <span className="font-hindi text-sm font-normal text-muted-foreground">आज का आहार</span>
          </h2>

          {plan.map((section) => (
            <article
              key={section.slot}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {section.title}{" "}
                <span className="font-hindi normal-case tracking-normal">{section.hindi}</span>
              </p>
              <h3 className="mt-2 text-xl font-semibold text-primary">{section.item.name}</h3>
              <p className="font-hindi text-sm text-muted-foreground">{section.item.hindi}</p>
              <p className="mt-3 text-sm text-foreground/90">{section.item.description}</p>
              <p className="mt-2 text-sm text-foreground/70">
                <span className="font-medium text-secondary">Why it helps: </span>
                {section.item.benefit}
              </p>
            </article>
          ))}

          <p className="rounded-xl border border-border bg-background p-4 text-xs text-muted-foreground">
            {ALLERGY_NOTE}
          </p>
        </section>

        {/* Ayurveda */}
        <section className="rounded-2xl border border-accent/25 bg-card p-6 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Sparkles className="h-5 w-5 text-accent" />
            {dosha ? "Your Ayurvedic Insight" : "Explore Ayurveda"}
            <span className="font-hindi text-sm font-normal text-muted-foreground">
              आपकी आयुर्वेदिक जानकारी
            </span>
          </h2>

          {dosha ? (
            <div>
              <p className="text-sm text-foreground/90">
                <span className="font-semibold text-primary">{dosha.name}</span>{" "}
                <span className="font-hindi">{dosha.hindi}</span> · {dosha.elements}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{dosha.summary}</p>

              <p className="mt-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Gentle suggestions
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
                {dosha.eat.slice(0, 2).map((tip) => (
                  <li key={tip} className="flex gap-2">
                    <span className="text-accent">•</span>
                    {tip}
                  </li>
                ))}
                {dosha.habits.slice(0, 1).map((tip) => (
                  <li key={tip} className="flex gap-2">
                    <span className="text-accent">•</span>
                    {tip}
                  </li>
                ))}
              </ul>

              <Button variant="soft" className="mt-4" asChild>
                <Link to="/dosha">View full dosha guidance</Link>
              </Button>
            </div>
          ) : (
            <div>
              <p className="text-sm text-foreground/90">
                You can optionally explore your Ayurvedic body type for a gentle traditional
                perspective alongside this plan. It is completely optional.
              </p>
              <Button variant="hero" className="mt-4" asChild>
                <Link to="/dosha">Take Dosha Quiz</Link>
              </Button>
            </div>
          )}

          <p className="mt-4 text-xs text-muted-foreground">{AYURVEDA_DISCLAIMER}</p>
        </section>

        <div className="flex flex-wrap justify-center gap-3 pb-4">
          <Button variant="soft" asChild>
            <Link to="/dashboard">Back to dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/profile">Edit my profile</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
