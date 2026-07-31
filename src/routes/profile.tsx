import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Sparkles, Utensils, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAhaarProfile } from "@/hooks/use-ahaar-profile";
import { doshaProfiles } from "@/lib/dosha";
import {
  ageGroupOptions,
  allergyOptions,
  dietOptions,
  goalOptions,
  labelFor,
  regionOptions,
} from "@/lib/profile";

const title = "My Ahaar Profile — Ahaar Amrit";
const description =
  "Your saved Ahaar Profile: age group, region, food preference, allergies, goals, and optional Ayurvedic dosha.";

export const Route = createFileRoute("/profile")({
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
  component: ProfilePage,
});

function ProfilePage() {
  const { profile, hydrated } = useAhaarProfile();

  if (!hydrated) {
    return <div className="min-h-screen bg-background" aria-hidden />;
  }

  const hasProfile = Boolean(
    profile.ageGroup ||
      profile.region ||
      profile.dietaryPreference,
  );

  // Safely check whether the saved dosha is valid.
  const savedDosha =
    profile.dosha && doshaProfiles[profile.dosha]
      ? doshaProfiles[profile.dosha]
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-hero p-5 shadow-warm">
              <Leaf className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>

          <h1 className="mb-2 text-3xl font-bold md:text-4xl">
            My Ahaar Profile
          </h1>

          <p className="font-hindi text-muted-foreground">
            मेरी आहार प्रोफ़ाइल
          </p>
        </div>

        {!hasProfile ? (
          <div className="rounded-2xl border border-primary/15 bg-card p-8 text-center shadow-warm">
            <p className="mb-6 text-foreground/90">
              You haven't set up your Ahaar Profile yet. It only takes a minute.
            </p>

            <Button variant="hero" size="lg" asChild>
              <Link to="/onboarding">Let's Get Started</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <Card
                label="Age group"
                hindi="आयु वर्ग"
                value={labelFor(ageGroupOptions, profile.ageGroup)}
              />

              <Card
                label="Region"
                hindi="क्षेत्र"
                value={labelFor(regionOptions, profile.region)}
              />

              <Card
                label="Food preference"
                hindi="भोजन प्राथमिकता"
                value={labelFor(
                  dietOptions,
                  profile.dietaryPreference,
                )}
              />

              <Card
                label="Allergies"
                hindi="एलर्जी"
                value={
                  profile.allergies.length
                    ? profile.allergies
                        .map((allergy) =>
                          allergy === "other" && profile.otherAllergy
                            ? profile.otherAllergy
                            : labelFor(allergyOptions, allergy),
                        )
                        .join(", ")
                    : "—"
                }
              />
            </div>

            <div className="mb-8 rounded-2xl border border-secondary/20 bg-card p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Utensils className="h-5 w-5 text-secondary" />

                Your goals

                <span className="font-hindi text-sm font-normal text-muted-foreground">
                  लक्ष्य
                </span>
              </h2>

              <ul className="space-y-2 text-sm text-foreground/90">
                {profile.goals.map((goal) => (
                  <li
                    key={goal}
                    className="flex gap-2"
                  >
                    <span className="text-secondary">•</span>

                    {goal === "other" && profile.otherGoal
                      ? profile.otherGoal
                      : labelFor(goalOptions, goal)}
                  </li>
                ))}

                {profile.goals.length === 0 && (
                  <li className="text-muted-foreground">
                    —
                  </li>
                )}
              </ul>
            </div>

            <div className="mb-10 rounded-2xl border border-accent/25 bg-card p-6 shadow-sm">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <Sparkles className="h-5 w-5 text-accent" />

                Ayurvedic wellness (optional)
              </h2>

              {savedDosha ? (
                <div>
                  <p className="text-sm text-foreground/90">
                    Your dominant dosha is{" "}
                    <span className="font-semibold text-primary">
                      {savedDosha.name}
                    </span>{" "}
                    <span className="font-hindi">
                      {savedDosha.hindi}
                    </span>
                    .
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {savedDosha.summary}
                  </p>

                  <Link
                    to="/dosha"
                    className="mt-3 inline-block text-sm underline underline-offset-4 hover:text-primary"
                  >
                    Retake the quiz
                  </Link>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-foreground/90">
                    You haven't explored Ayurveda yet.
                  </p>

                  <Link
                    to="/dosha"
                    className="mt-2 inline-block text-sm underline underline-offset-4 hover:text-primary"
                  >
                    Take the optional dosha quiz
                  </Link>
                </div>
              )}

              <p className="mt-3 text-xs text-muted-foreground">
                Ayurvedic wellness information is provided for educational
                purposes and is not a medical diagnosis.
              </p>
            </div>

            <div className="text-center">
              <Button
                variant="soft"
                size="lg"
                asChild
              >
                <Link to="/onboarding">
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit my answers
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Card({
  label,
  hindi,
  value,
}: {
  label: string;
  hindi: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>

      <p className="font-hindi text-xs text-muted-foreground">
        {hindi}
      </p>

      <p className="mt-2 font-medium">
        {value}
      </p>
    </div>
  );
}
