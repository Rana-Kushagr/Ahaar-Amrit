import { createFileRoute } from "@tanstack/react-router";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";

const title = "Build Your Ahaar Profile — Ahaar Amrit";
const description =
  "Set up your personalized Ahaar Profile: age group, region, food preference, allergies, and nutrition goals for Indian food personalization.";

export const Route = createFileRoute("/onboarding")({
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
  component: OnboardingPage,
});

function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted pt-28 sm:pt-36 pb-16">
      <OnboardingFlow />
    </div>
  );
}
