import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Sparkles, MapPin, Utensils, Pencil, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAhaarProfile } from "@/hooks/use-ahaar-profile";
import { doshaProfiles } from "@/lib/dosha";
import {
  ageGroupOptions,
  dietOptions,
  goalOptions,
  labelFor,
  regionOptions,
  type Region,
} from "@/lib/profile";

const title = "Dashboard — Ahaar Amrit";

const description =
  "Your Ahaar Amrit dashboard: personalized Indian nutrition, today's healthy pick, regional foods and optional Ayurvedic insights.";

export const Route = createFileRoute("/dashboard")({
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
  component: Dashboard,
});

const regionalFoods: Record<
  Region,
  { name: string; hindi: string; note: string }[]
> = {
  north: [
    {
      name: "Bajra Roti",
      hindi: "बाजरे की रोटी",
      note: "Iron & fibre rich millet flatbread",
    },
    {
      name: "Sarson ka Saag",
      hindi: "सरसों का साग",
      note: "Leafy greens, vitamin A & calcium",
    },
    {
      name: "Chana Dal",
      hindi: "चना दाल",
      note: "Plant protein, steady energy",
    },
    {
      name: "Curd (Dahi)",
      hindi: "दही",
      note: "Probiotics for gut health",
    },
  ],

  south: [
    {
      name: "Ragi Mudde",
      hindi: "रागी मुद्दे",
      note: "Calcium-rich millet option",
    },
    {
      name: "Idli & Sambar",
      hindi: "इडली सांभर",
      note: "Fermented food with protein and carbohydrates",
    },
    {
      name: "Avial",
      hindi: "अवियल",
      note: "Mixed vegetables with coconut",
    },
    {
      name: "Rasam",
      hindi: "रसम",
      note: "Light, flavourful traditional soup",
    },
  ],

  east: [
    {
      name: "Panta Bhat",
      hindi: "पान्ता भात",
      note: "Traditional fermented rice dish",
    },
    {
      name: "Shukto",
      hindi: "शुक्तो",
      note: "Mixed vegetable preparation",
    },
    {
      name: "Rohu Fish Curry",
      hindi: "रोहू मछली",
      note: "Protein-rich traditional fish dish",
    },
    {
      name: "Chhena",
      hindi: "छेना",
      note: "Fresh cheese, protein & calcium",
    },
  ],

  west: [
    {
      name: "Thepla",
      hindi: "थेपला",
      note: "Methi flatbread with whole grains",
    },
    {
      name: "Jowar Bhakri",
      hindi: "ज्वार भाकरी",
      note: "Whole-grain millet flatbread",
    },
    {
      name: "Usal",
      hindi: "उसळ",
      note: "Sprouted legumes, plant protein",
    },
    {
      name: "Kokum Sherbet",
      hindi: "कोकम शरबत",
      note: "Traditional refreshing drink",
    },
  ],

  northeast: [
    {
      name: "Bamboo Shoot Curry",
      hindi: "बांस की सब्ज़ी",
      note: "Traditional vegetable preparation",
    },
    {
      name: "Black Rice",
      hindi: "काला चावल",
      note: "Nutrient-rich whole grain",
    },
    {
      name: "Iromba",
      hindi: "इरोम्बा",
      note: "Traditional fermented preparation",
    },
    {
      name: "Steamed Fish (Patot Diya)",
      hindi: "भाप में मछली",
      note: "Lean protein-rich traditional dish",
    },
  ],
};

const fallbackFoods = [
  {
    name: "Moong Dal Khichdi",
    hindi: "मूंग दाल खिचड़ी",
    note: "Balanced and easy-to-digest meal",
  },
  {
    name: "Seasonal Sabzi",
    hindi: "मौसमी सब्ज़ी",
    note: "Provides a variety of vitamins and minerals",
  },
  {
    name: "Whole Wheat Roti",
    hindi: "गेहूँ की रोटी",
    note: "Whole-grain source of carbohydrates",
  },
  {
    name: "Seasonal Fruit",
    hindi: "मौसमी फल",
    note: "Natural source of fibre and nutrients",
  },
];

function Dashboard() {
  const { profile, hydrated } = useAhaarProfile();

  // Wait until localStorage data has loaded.
  if (!hydrated) {
    return <div className="min-h-screen bg-background" aria-hidden />;
  }

  const foods = profile.region
    ? regionalFoods[profile.region]
    : fallbackFoods;

  const dosha = profile.dosha
    ? doshaProfiles[profile.dosha]
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted px-4 py-12">
      <div className="container mx-auto max-w-4xl space-y-8">

        {/* Welcome */}
        <section className="rounded-2xl border border-primary/15 bg-card p-8 shadow-warm">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-gradient-hero p-4 shadow-warm">
              <Leaf className="h-7 w-7 text-primary-foreground" />
            </div>
          </div>

          <h1 className="text-center text-3xl font-bold md:text-4xl">
            Welcome to Ahaar Amrit 🌿
          </h1>

          <p className="mt-2 text-center text-muted-foreground">
            Your personalized nutrition journey begins here.
          </p>
        </section>

        {/* Profile */}
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Utensils className="h-5 w-5 text-primary" />

            Your Profile

            <span className="font-hindi text-sm font-normal text-muted-foreground">
              आपकी प्रोफ़ाइल
            </span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <Stat
              label="Age group"
              value={labelFor(ageGroupOptions, profile.ageGroup)}
            />

            <Stat
              label="Region"
              value={labelFor(regionOptions, profile.region)}
            />

            <Stat
              label="Food preference"
              value={labelFor(
                dietOptions,
                profile.dietaryPreference
              )}
            />
          </div>

          {/* Goals */}
          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Goals
            </p>

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
                <li className="text-sm text-muted-foreground">
                  No goals selected
                </li>
              )}
            </ul>
          </div>

          {/* Edit Profile */}
          <div className="mt-6">
            <Button variant="soft" asChild>
              <Link to="/profile">
                <Pencil className="mr-2 h-4 w-4" />
                Edit Profile
              </Link>
            </Button>
          </div>
        </section>

        {/* Today's Healthy Pick */}
        <section className="rounded-2xl border border-accent/25 bg-card p-6 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Wheat className="h-5 w-5 text-accent" />

            Today's Healthy Pick

            <span className="font-hindi text-sm font-normal text-muted-foreground">
              आज का पौष्टिक आहार
            </span>
          </h2>

          <p className="text-2xl font-bold text-primary">
            Ragi{" "}
            <span className="font-hindi text-lg text-muted-foreground">
              रागी
            </span>
          </p>

          <ul className="mt-3 space-y-1.5 text-sm text-foreground/90">
            {[
              "A calcium-rich traditional millet",
              "Provides iron and other nutrients",
              "A useful addition to a balanced adolescent diet",
            ].map((benefit) => (
              <li key={benefit} className="flex gap-2">
                <span className="text-accent">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Regional Foods */}
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <MapPin className="h-5 w-5 text-secondary" />

            Regional Foods

            <span className="font-hindi text-sm font-normal text-muted-foreground">
              क्षेत्रीय भोजन
            </span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {foods.map((food) => (
              <div
                key={food.name}
                className="rounded-xl border border-primary/10 bg-background p-4"
              >
                <p className="font-medium">{food.name}</p>

                <p className="font-hindi text-xs text-muted-foreground">
                  {food.hindi}
                </p>

                <p className="mt-2 text-sm text-foreground/80">
                  {food.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ayurveda */}
        <section className="rounded-2xl border border-accent/25 bg-card p-6 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Sparkles className="h-5 w-5 text-accent" />

            Ayurveda

            <span className="font-hindi text-sm font-normal text-muted-foreground">
              आयुर्वेद
            </span>
          </h2>

          {dosha ? (
            <div>
              <p className="text-sm text-foreground/90">
                Your dominant dosha is{" "}
                <span className="font-semibold text-primary">
                  {dosha.name}
                </span>{" "}
                <span className="font-hindi">
                  {dosha.hindi}
                </span>{" "}
                · {dosha.elements}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                {dosha.summary}
              </p>

              <Button
                variant="soft"
                className="mt-4"
                asChild
              >
                <Link to="/dosha">
                  View full dosha guidance
                </Link>
              </Button>
            </div>
          ) : (
            <div>
              <p className="text-sm text-foreground/90">
                Explore a gentle Ayurvedic perspective on your
                food and lifestyle preferences.
              </p>

              <Button
                variant="hero"
                className="mt-4"
                asChild
              >
                <Link to="/dosha">
                  Take Dosha Quiz
                </Link>
              </Button>
            </div>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            Ayurvedic wellness information is provided for
            educational purposes only and is not a medical
            diagnosis.
          </p>
        </section>

      </div>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 font-medium">
        {value}
      </p>
    </div>
  );
}
