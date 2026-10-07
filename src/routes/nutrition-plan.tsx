import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Leaf, Sparkles, Utensils, Info, Clock } from "lucide-react";

import nutritionBg from "@/assets/nutrition.png.asset.json";
import { Button } from "@/components/ui/button";
import { useAhaarProfile } from "@/hooks/use-ahaar-profile";
import { doshaProfiles } from "@/lib/dosha";

import { ageGroupOptions, dietOptions, goalOptions, labelFor, regionOptions } from "@/lib/profile";

import {
  ALLERGY_NOTE,
  AYURVEDA_DISCLAIMER,
  buildNutritionPlan,
  planFocusNotes,
} from "@/lib/nutrition-plan";

const title = "My Nutrition Plan — Ahaar Amrit";

const description =
  "A personalized one-day Indian meal plan built from your Ahaar Profile: region, food preference, goals and Ayurvedic insight.";

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

  if (!hydrated) {
    return <div className="min-h-screen bg-transparent" aria-hidden />;
  }

  const plan = buildNutritionPlan(profile);
  const notes = planFocusNotes(profile);
  const dosha = profile.dosha ? doshaProfiles[profile.dosha] : null;

  return (
    <main className="relative min-h-screen px-4 pb-16 pt-32 sm:px-6">
      {/* Fixed full-screen background image */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-emerald-950 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${nutritionBg.url}')` }}
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-emerald-950/50" aria-hidden />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl space-y-8">
        {/* =====================================================
            BACK BUTTON
        ===================================================== */}

        <Link
          to="/dashboard"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-emerald-950/80
            px-4
            py-2
            text-sm
            text-emerald-50
            shadow-sm
            backdrop-blur-xl
            transition-all
            hover:-translate-x-1
            hover:bg-emerald-900/80
          "
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>

        {/* =====================================================
            HERO HEADER
        ===================================================== */}

        <header
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            border
            border-emerald-500/20
            bg-emerald-950/70
            p-8
            text-center
            shadow-2xl
            backdrop-blur-xl
            sm:p-12
          "
        >
          {/* Icon */}
          <div className="relative mb-5 flex justify-center">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-emerald-600
                shadow-[0_15px_40px_rgba(16,185,129,0.3)]
              "
            >
              <Leaf className="h-8 w-8 text-emerald-50" />
            </div>
          </div>

          {/* Heading */}
          <h1
            className="
              relative
              font-display
              text-4xl
              font-bold
              tracking-tight
              text-emerald-50
              sm:text-5xl
            "
          >
            Your Personalized
            <span className="text-emerald-400"> Nutrition Plan</span>
          </h1>

          <p className="relative mt-3 font-hindi text-base text-emerald-200/80">
            आपकी व्यक्तिगत पोषण योजना
          </p>

          <p
            className="
              relative
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-relaxed
              text-emerald-100/80
              sm:text-base
            "
          >
            A one-day Indian meal plan created around your food preferences, region, goals and
            lifestyle.
          </p>
        </header>

        {/* =====================================================
            PROFILE SUMMARY
        ===================================================== */}

        <section
          className="
            rounded-[2rem]
            border
            border-emerald-500/20
            bg-emerald-950/70
            p-6
            shadow-xl
            backdrop-blur-xl
            sm:p-8
          "
        >
          <div className="mb-6 flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-emerald-800/80
                text-emerald-100
              "
            >
              <Info className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-emerald-50">
                Your plan is based on
              </h2>
              <p className="font-hindi text-sm text-emerald-200/70">आपकी जानकारी</p>
            </div>
          </div>

          {/* Profile stats */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Age group" value={labelFor(ageGroupOptions, profile.ageGroup)} />
            <Stat label="Region" value={labelFor(regionOptions, profile.region)} />
            <Stat
              label="Food preference"
              value={labelFor(dietOptions, profile.dietaryPreference)}
            />
          </div>

          {/* Goals */}
          <div className="mt-6">
            <p
              className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-emerald-300/80
            "
            >
              Your goals
            </p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.goals.length ? (
                profile.goals.map((goal) => (
                  <li
                    key={goal}
                    className="
                      rounded-full
                      border
                      border-emerald-500/30
                      bg-emerald-900/60
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-emerald-100
                    "
                  >
                    {goal === "other" && profile.otherGoal
                      ? profile.otherGoal
                      : labelFor(goalOptions, goal)}
                  </li>
                ))
              ) : (
                <li className="text-sm text-emerald-200/60">No goals selected</li>
              )}
            </ul>
          </div>

          {/* Focus notes */}
          {notes.length > 0 && (
            <div
              className="
                mt-6
                rounded-2xl
                border
                border-emerald-500/30
                bg-emerald-900/40
                p-5
              "
            >
              <p
                className="
                mb-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                text-emerald-300
              "
              >
                Your nutrition focus
              </p>

              <ul className="space-y-2">
                {notes.map((note) => (
                  <li
                    key={note}
                    className="
                      flex
                      gap-3
                      text-sm
                      leading-relaxed
                      text-emerald-100/90
                    "
                  >
                    <span className="mt-1 text-emerald-400">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* =====================================================
            MEAL PLAN
        ===================================================== */}

        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-emerald-600
                text-emerald-50
                shadow-lg
              "
            >
              <Utensils className="h-5 w-5" />
            </div>

            <div>
              <h2
                className="
                font-display
                text-2xl
                font-bold
                text-emerald-50
              "
              >
                Your Day of Meals
              </h2>
              <p className="font-hindi text-sm text-emerald-200/70">आज का आहार</p>
            </div>
          </div>

          {/* Meals */}
          <div className="grid gap-5">
            {plan.map((section, index) => (
              <article
                key={section.slot}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-emerald-500/20
                  bg-emerald-950/70
                  p-6
                  shadow-xl
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-emerald-900/80
                  sm:p-7
                "
              >
                {/* Number */}
                <div
                  className="
                    absolute
                    right-6
                    top-6
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-800/80
                    text-sm
                    font-bold
                    text-emerald-100
                  "
                >
                  {index + 1}
                </div>

                {/* Meal time */}
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <p
                    className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-emerald-300/90
                  "
                  >
                    {section.title}
                  </p>
                </div>

                <p className="mt-1 font-hindi text-sm text-emerald-200/60">{section.hindi}</p>

                {/* Meal name */}
                <h3
                  className="
                    mt-5
                    max-w-[85%]
                    font-display
                    text-2xl
                    font-bold
                    text-emerald-50
                    transition-colors
                    group-hover:text-emerald-300
                  "
                >
                  {section.item.name}
                </h3>

                <p className="mt-1 font-hindi text-sm text-emerald-200/80">{section.item.hindi}</p>

                {/* Description */}
                <p
                  className="
                    mt-4
                    max-w-3xl
                    text-sm
                    leading-relaxed
                    text-emerald-100/90
                  "
                >
                  {section.item.description}
                </p>

                {/* Benefit */}
                <div
                  className="
                    mt-5
                    rounded-2xl
                    border
                    border-emerald-500/30
                    bg-emerald-900/50
                    p-4
                  "
                >
                  <p
                    className="
                    text-sm
                    leading-relaxed
                    text-emerald-50
                  "
                  >
                    <span className="font-semibold text-emerald-300">Why it helps:</span>{" "}
                    {section.item.benefit}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Allergy note */}
          <div
            className="
              rounded-2xl
              border
              border-amber-500/30
              bg-amber-950/60
              p-5
              text-sm
              leading-relaxed
              text-amber-50
              backdrop-blur-xl
            "
          >
            <span className="font-semibold text-amber-300">Allergy note:</span> {ALLERGY_NOTE}
          </div>
        </section>

        {/* =====================================================
            AYURVEDA
        ===================================================== */}

        <section
          className="
            rounded-[2rem]
            border
            border-purple-500/20
            bg-purple-950/60
            p-6
            shadow-xl
            backdrop-blur-xl
            sm:p-8
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-purple-600
                text-purple-50
                shadow-lg
              "
            >
              <Sparkles className="h-6 w-6" />
            </div>

            <div>
              <h2
                className="
                font-display
                text-2xl
                font-bold
                text-purple-100
              "
              >
                {dosha ? "Your Ayurvedic Insight" : "Explore Ayurveda"}
              </h2>

              <p className="font-hindi text-sm text-purple-200/70">आपकी आयुर्वेदिक जानकारी</p>
            </div>
          </div>

          {dosha ? (
            <div className="mt-6">
              <div
                className="
                  rounded-2xl
                  border
                  border-purple-500/30
                  bg-purple-900/50
                  p-5
                "
              >
                <p className="text-sm text-purple-50">
                  <span className="font-bold text-purple-300">{dosha.name}</span>{" "}
                  <span className="font-hindi text-purple-200">{dosha.hindi}</span> ·{" "}
                  {dosha.elements}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-purple-100/90">{dosha.summary}</p>
              </div>

              <p
                className="
                mt-6
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                text-purple-300/90
              "
              >
                Gentle suggestions
              </p>

              <ul className="mt-3 space-y-3">
                {dosha.eat.slice(0, 2).map((tip) => (
                  <li
                    key={tip}
                    className="
                      flex
                      gap-3
                      text-sm
                      leading-relaxed
                      text-purple-50
                    "
                  >
                    <span className="text-purple-400">✦</span>
                    {tip}
                  </li>
                ))}

                {dosha.habits.slice(0, 1).map((tip) => (
                  <li
                    key={tip}
                    className="
                      flex
                      gap-3
                      text-sm
                      leading-relaxed
                      text-purple-50
                    "
                  >
                    <span className="text-purple-400">✦</span>
                    {tip}
                  </li>
                ))}
              </ul>

              <Button
                variant="soft"
                className="mt-6 bg-purple-800/60 text-purple-50 hover:bg-purple-700 border border-purple-500/30"
                asChild
              >
                <Link to="/dosha">View full dosha guidance</Link>
              </Button>
            </div>
          ) : (
            <div className="mt-6">
              <p
                className="
                text-sm
                leading-relaxed
                text-purple-100/90
              "
              >
                Explore your Ayurvedic body type to receive deeper personalized wisdom that
                complements your daily nutrition plan.
              </p>

              <Button
                variant="hero"
                className="mt-5 bg-purple-600 hover:bg-purple-700 text-white"
                asChild
              >
                <Link to="/dosha">Take Dosha Quiz</Link>
              </Button>
            </div>
          )}

          <p
            className="
            mt-6
            border-t
            border-purple-500/30
            pt-5
            text-xs
            leading-relaxed
            text-purple-200/70
          "
          >
            {AYURVEDA_DISCLAIMER}
          </p>
        </section>

        {/* =====================================================
            BOTTOM ACTIONS
        ===================================================== */}

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-3
          pb-6
        "
        >
          <Button variant="hero" asChild>
            <Link to="/dashboard">Back to dashboard</Link>
          </Button>

          <Button variant="ghost" className="text-emerald-100 hover:bg-emerald-900/50" asChild>
            <Link to="/profile">Edit my profile</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   STAT COMPONENT
========================================================= */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-emerald-500/20
        bg-emerald-900/50
        p-5
        backdrop-blur-xl
        transition-all
        hover:bg-emerald-800/50
      "
    >
      <p
        className="
        text-xs
        font-semibold
        uppercase
        tracking-[0.15em]
        text-emerald-300/90
      "
      >
        {label}
      </p>

      <p
        className="
        mt-2
        font-display
        text-lg
        font-bold
        text-emerald-50
      "
      >
        {value}
      </p>
    </div>
  );
}
