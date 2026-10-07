import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Leaf,
  Sparkles,
  MapPin,
  Utensils,
  Pencil,
  Wheat,
  Clock3,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
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
  type DietaryPreference,
} from "@/lib/profile";
import { buildNutritionPlan, type MealSection } from "@/lib/nutrition-plan";

const title = "Dashboard — Ahaar Amrit";

const description =
  "Your Ahaar Amrit dashboard: personalized Indian nutrition, today's healthy pick, regional foods and Ayurvedic insights.";

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

/* =========================================================
   REGIONAL FOOD DATA
========================================================= */

type RegionalFood = {
  name: string;
  hindi: string;
  note: string;
  diet: "vegetarian" | "eggetarian" | "non-vegetarian";
};

const regionalFoods: Record<Region, RegionalFood[]> = {
  north: [
    {
      name: "Bajra Roti",
      hindi: "बाजरे की रोटी",
      note: "Iron & fibre rich millet flatbread",
      diet: "vegetarian",
    },
    {
      name: "Sarson ka Saag",
      hindi: "सरसों का साग",
      note: "Leafy greens, vitamin A & calcium",
      diet: "vegetarian",
    },
    {
      name: "Chana Dal",
      hindi: "चना दाल",
      note: "Plant protein, steady energy",
      diet: "vegetarian",
    },
    {
      name: "Curd (Dahi)",
      hindi: "दही",
      note: "Probiotics for gut health",
      diet: "vegetarian",
    },
    {
      name: "Amritsari Fish",
      hindi: "अमृतसरी मछली",
      note: "Traditional North Indian fish dish rich in protein",
      diet: "non-vegetarian",
    },
    {
      name: "Egg Bhurji",
      hindi: "अंडा भुर्जी",
      note: "Protein-rich egg preparation with Indian spices",
      diet: "eggetarian",
    },
  ],

  south: [
    {
      name: "Ragi Mudde",
      hindi: "रागी मुद्दे",
      note: "Calcium-rich millet option",
      diet: "vegetarian",
    },
    {
      name: "Idli & Sambar",
      hindi: "इडली सांभर",
      note: "Fermented food with protein and carbohydrates",
      diet: "vegetarian",
    },
    {
      name: "Avial",
      hindi: "अवियल",
      note: "Mixed vegetables with coconut",
      diet: "vegetarian",
    },
    {
      name: "Rasam",
      hindi: "रसम",
      note: "Light, flavourful traditional soup",
      diet: "vegetarian",
    },
    {
      name: "Kerala Fish Curry",
      hindi: "केरल फिश करी",
      note: "Traditional fish curry providing high-quality protein",
      diet: "non-vegetarian",
    },
    {
      name: "Egg Appam",
      hindi: "अंडा अप्पम",
      note: "Soft rice appam paired with protein-rich egg",
      diet: "eggetarian",
    },
  ],

  east: [
    {
      name: "Panta Bhat",
      hindi: "पान्ता भात",
      note: "Traditional fermented rice dish",
      diet: "vegetarian",
    },
    {
      name: "Shukto",
      hindi: "शुक्तो",
      note: "Mixed vegetable preparation",
      diet: "vegetarian",
    },
    {
      name: "Chhena",
      hindi: "छेना",
      note: "Fresh cheese, protein & calcium",
      diet: "vegetarian",
    },
    {
      name: "Rohu Fish Curry",
      hindi: "रोहू मछली",
      note: "Protein-rich traditional fish dish",
      diet: "non-vegetarian",
    },
    {
      name: "Egg Kathi Roll",
      hindi: "अंडा काठी रोल",
      note: "Popular Bengali-style egg roll with protein and carbohydrates",
      diet: "eggetarian",
    },
  ],

  west: [
    {
      name: "Thepla",
      hindi: "थेपला",
      note: "Methi flatbread with whole grains",
      diet: "vegetarian",
    },
    {
      name: "Jowar Bhakri",
      hindi: "ज्वार भाकरी",
      note: "Whole-grain millet flatbread",
      diet: "vegetarian",
    },
    {
      name: "Usal",
      hindi: "उसळ",
      note: "Sprouted legumes, plant protein",
      diet: "vegetarian",
    },
    {
      name: "Kokum Sherbet",
      hindi: "कोकम शरबत",
      note: "Traditional refreshing drink",
      diet: "vegetarian",
    },
    {
      name: "Malvani Fish Curry",
      hindi: "मालवणी फिश करी",
      note: "Coastal fish curry rich in protein",
      diet: "non-vegetarian",
    },
    {
      name: "Egg Bhurji Pav",
      hindi: "अंडा भुर्जी पाव",
      note: "Protein-rich egg preparation served with pav",
      diet: "eggetarian",
    },
  ],

  northeast: [
    {
      name: "Bamboo Shoot Curry",
      hindi: "बांस की सब्ज़ी",
      note: "Traditional vegetable preparation",
      diet: "vegetarian",
    },
    {
      name: "Black Rice",
      hindi: "काला चावल",
      note: "Nutrient-rich whole grain",
      diet: "vegetarian",
    },
    {
      name: "Iromba",
      hindi: "इरोम्बा",
      note: "Traditional fermented preparation",
      diet: "vegetarian",
    },
    {
      name: "Steamed Fish",
      hindi: "भाप में मछली",
      note: "Lean protein-rich traditional dish",
      diet: "non-vegetarian",
    },
    {
      name: "Egg & Vegetable Rice",
      hindi: "अंडा और सब्ज़ी चावल",
      note: "Egg-based meal with carbohydrates and vegetables",
      diet: "eggetarian",
    },
  ],
};

/* =========================================================
   FALLBACK REGIONAL FOODS
========================================================= */

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

/* =========================================================
   REGIONAL FOOD DIET FILTER
========================================================= */

function matchesRegionalFoodDiet(food: RegionalFood, diet?: DietaryPreference): boolean {
  if (!diet) {
    return food.diet === "vegetarian";
  }

  if (diet === "vegetarian") {
    return food.diet === "vegetarian";
  }

  if (diet === "eggetarian") {
    return food.diet === "vegetarian" || food.diet === "eggetarian";
  }

  if (diet === "non-vegetarian") {
    return true;
  }

  return false;
}

/* =========================================================
   MEAL SLOT ICON / LABEL HELPERS
========================================================= */

const mealSlotEmoji: Record<MealSection["slot"], string> = {
  breakfast: "🌅",
  midMorning: "🍎",
  lunch: "🍛",
  eveningSnack: "🥜",
  dinner: "🌙",
};

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard() {
  const { profile, hydrated } = useAhaarProfile();

  // Wait until localStorage data has loaded.
  if (!hydrated) {
    return <div className="min-h-screen bg-background" aria-hidden />;
  }

  /* =======================================================
     PERSONALIZED NUTRITION ENGINE
  ======================================================= */

  const nutritionPlan = buildNutritionPlan(profile);

  const todaysPick = nutritionPlan.find((meal) => meal.slot === "lunch") ?? nutritionPlan[0];

  const foods = profile.region
    ? regionalFoods[profile.region].filter((food) =>
        matchesRegionalFoodDiet(food, profile.dietaryPreference),
      )
    : fallbackFoods;

  const dosha = profile.dosha ? doshaProfiles[profile.dosha] : null;

  return (
    <div className="min-h-screen bg-[url('/ayurveda-hero-bg.png')] bg-cover bg-center bg-fixed bg-gradient-to-b from-background to-muted px-4 py-12">
      <div className="container mx-auto max-w-4xl space-y-8">
        {/* =================================================
            WELCOME
        ================================================= */}

        <section className="rounded-2xl border border-primary/15 bg-card p-8 shadow-warm">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-gradient-hero p-4 shadow-warm">
              <Leaf className="h-7 w-7 text-primary-foreground" />
            </div>
          </div>

          <h1 className="text-center text-3xl font-bold md:text-4xl">Welcome to Ahaar Amrit 🌿</h1>

          <p className="mt-2 text-center text-muted-foreground">
            Your personalized nutrition journey begins here.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/nutrition-plan">
                View My Nutrition Plan
                <span className="font-hindi ml-2 text-sm">मेरा पोषण प्लान देखें</span>
              </Link>
            </Button>

            <Button variant="soft" size="lg" asChild>
              <Link to="/swasthya">
                Explore Swasthya
                <span className="font-hindi ml-2 text-sm">स्वास्थ्य</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* =================================================
            PROFILE
        ================================================= */}

        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Utensils className="h-5 w-5 text-primary" />
            Your Profile
            <span className="font-hindi text-sm font-normal text-muted-foreground">
              आपकी प्रोफ़ाइल
            </span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Age group" value={labelFor(ageGroupOptions, profile.ageGroup)} />

            <Stat label="Region" value={labelFor(regionOptions, profile.region)} />

            <Stat
              label="Food preference"
              value={labelFor(dietOptions, profile.dietaryPreference)}
            />
          </div>

          {/* Goals */}

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

        {/* =================================================
            PERSONALIZED TODAY'S HEALTHY PICK
        ================================================= */}

        {todaysPick && (
          <section className="relative overflow-hidden rounded-2xl border border-accent/25 bg-card p-6 shadow-sm">
            {/* Decorative glow */}

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <Wheat className="h-5 w-5 text-accent" />
                    Today's Personalized Pick
                    <span className="font-hindi text-sm font-normal text-muted-foreground">
                      आज का पौष्टिक आहार
                    </span>
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Selected from your personalized nutrition plan.
                  </p>
                </div>

                <div className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                  {mealSlotEmoji[todaysPick.slot]} {todaysPick.title}
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-primary/10 bg-background p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">{todaysPick.item.name}</p>

                    <p className="font-hindi mt-1 text-lg text-muted-foreground">
                      {todaysPick.item.hindi}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    Personalized for you
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {todaysPick.item.description}
                </p>

                <div className="mt-4 rounded-lg border border-accent/15 bg-accent/5 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Why this meal?
                  </p>

                  <p className="mt-1 text-sm text-foreground/80">{todaysPick.item.benefit}</p>
                </div>

                <div className="mt-5">
                  <Button variant="soft" asChild>
                    <Link to="/nutrition-plan">
                      View Complete Nutrition Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            PERSONALIZED MEAL JOURNEY
        ================================================= */}

        <section className="rounded-2xl border border-primary/15 bg-card p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Clock3 className="h-5 w-5 text-primary" />
                Your Personalized Meal Journey
                <span className="font-hindi text-sm font-normal text-muted-foreground">
                  आपका दैनिक भोजन
                </span>
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                A quick look at your personalized meals for the day.
              </p>
            </div>

            <Button variant="ghost" size="sm" className="w-fit" asChild>
              <Link to="/nutrition-plan">
                Full Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-5 grid gap-3">
            {nutritionPlan.map((meal) => (
              <div
                key={meal.slot}
                className={`rounded-xl border p-4 transition-all hover:border-primary/25 hover:shadow-sm ${
                  meal.slot === todaysPick?.slot
                    ? "border-primary/25 bg-primary/5"
                    : "border-border bg-background"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg">
                    {mealSlotEmoji[meal.slot]}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {meal.title}
                      </p>

                      {meal.slot === todaysPick?.slot && (
                        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                          TODAY'S PICK
                        </span>
                      )}
                    </div>

                    <p className="mt-1 font-semibold text-foreground">{meal.item.name}</p>

                    <p className="font-hindi text-xs text-muted-foreground">{meal.item.hindi}</p>

                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-foreground/70">
                      {meal.item.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center">
            <Button variant="hero" asChild>
              <Link to="/nutrition-plan">
                Open My Full Meal Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* =================================================
            TODAY'S HEALTHY PICK — REGIONAL FOOD SECTION
        ================================================= */}

        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <MapPin className="h-5 w-5 text-secondary" />
            Regional Foods
            <span className="font-hindi text-sm font-normal text-muted-foreground">
              क्षेत्रीय भोजन
            </span>
          </h2>

          <p className="mb-4 text-sm text-muted-foreground">
            {profile.region
              ? `Traditional foods from your ${labelFor(regionOptions, profile.region)} region.`
              : "Explore nutritious traditional Indian foods from different regions."}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {foods.map((food) => (
              <div
                key={food.name}
                className="rounded-xl border border-primary/10 bg-background p-4 transition-all hover:border-primary/25 hover:shadow-sm"
              >
                <p className="font-medium">{food.name}</p>

                <p className="font-hindi text-xs text-muted-foreground">{food.hindi}</p>

                <p className="mt-2 text-sm text-foreground/80">{food.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            AYURVEDA
        ================================================= */}

        <section className="rounded-2xl border border-accent/25 bg-card p-6 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Sparkles className="h-5 w-5 text-accent" />
            Ayurveda
            <span className="font-hindi text-sm font-normal text-muted-foreground">आयुर्वेद</span>
          </h2>

          {dosha ? (
            <div>
              <p className="text-sm text-foreground/90">
                Your dominant dosha is{" "}
                <span className="font-semibold text-primary">{dosha.name}</span>{" "}
                <span className="font-hindi">{dosha.hindi}</span> · {dosha.elements}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">{dosha.summary}</p>

              <Button variant="soft" className="mt-4" asChild>
                <Link to="/dosha">View full dosha guidance</Link>
              </Button>
            </div>
          ) : (
            <div>
              <p className="text-sm text-foreground/90">
                Explore a gentle Ayurvedic perspective on your food and lifestyle preferences.
              </p>

              <Button variant="hero" className="mt-4" asChild>
                <Link to="/dosha">Take Dosha Quiz</Link>
              </Button>
            </div>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            Ayurvedic wellness information is provided for educational purposes only and is not a
            medical diagnosis.
          </p>
        </section>

        {/* =================================================
            BOTTOM ACTIONS
        ================================================= */}

        <div className="flex flex-wrap justify-center gap-4 pb-6">
          <Button variant="hero" asChild>
            <Link to="/nutrition-plan">Get My Daily Nutrition Plan</Link>
          </Button>

          <Button variant="soft" asChild>
            <Link to="/swasthya">Explore Swasthya</Link>
          </Button>

          <Button variant="ghost" className="text-foreground" asChild>
            <Link to="/profile">
              <Pencil className="mr-2 h-4 w-4" />
              Update Profile
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STAT COMPONENT
========================================================= */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</p>

      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
