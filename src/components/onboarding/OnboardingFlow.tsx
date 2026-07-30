import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Leaf, Sparkles, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptionCard } from "@/components/onboarding/OptionCard";
import { StepShell } from "@/components/onboarding/StepShell";
import { useAhaarProfile } from "@/hooks/use-ahaar-profile";
import {
  ageGroupOptions,
  allergyOptions,
  dietOptions,
  goalOptions,
  regionOptions,
  type Allergy,
  type Goal,
} from "@/lib/profile";

const TOTAL_STEPS = 7;

export function OnboardingFlow() {
  const navigate = useNavigate();
  const { profile, update, hydrated } = useAhaarProfile();
  const [step, setStep] = useState(0);
  const [otherAllergy, setOtherAllergy] = useState("");
  const [otherGoal, setOtherGoal] = useState("");

  if (!hydrated) {
    return <div className="min-h-screen" aria-hidden />;
  }

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const back = () => {
    if (step === 0) navigate({ to: "/" });
    else setStep(step - 1);
  };
  const backLabel = step === 0 ? "Back to home" : "Previous step";

  const allergyValue = otherAllergy || profile.otherAllergy || "";
  const goalValue = otherGoal || profile.otherGoal || "";

  const toggleAllergy = (value: Allergy) => {
    let list = profile.allergies;
    if (value === "none") {
      list = list.includes("none") ? [] : ["none"];
    } else {
      list = list.includes(value)
        ? list.filter((a) => a !== value)
        : [...list.filter((a) => a !== "none"), value];
    }
    update({ allergies: list, otherAllergy: list.includes("other") ? allergyValue : undefined });
  };

  const toggleGoal = (value: Goal) => {
    const list = profile.goals.includes(value)
      ? profile.goals.filter((g) => g !== value)
      : [...profile.goals, value];
    update({ goals: list, otherGoal: list.includes("other") ? goalValue : undefined });
  };

  // Step 1 — Welcome
  if (step === 0) {
    return (
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-primary opacity-30 blur-2xl" />
              <div className="relative rounded-full bg-gradient-hero p-6 shadow-warm">
                <Leaf className="h-10 w-10 animate-float text-primary-foreground" />
              </div>
            </div>
          </div>
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Welcome to Ahaar Amrit 🌿</h1>
          <p className="mb-2 text-lg font-semibold text-gradient-saffron">
            Your food. Your culture. Your health.
          </p>
          <p className="mb-8 font-hindi text-muted-foreground">
            आपका भोजन। आपकी संस्कृति। आपका स्वास्थ्य।
          </p>
          <div className="mb-10 rounded-2xl border border-primary/10 bg-card/80 p-6 shadow-warm backdrop-blur-sm">
            <p className="text-foreground/90">
              Let's personalize your Ahaar experience based on your food preferences, region, goals,
              and wellness interests.
            </p>
          </div>
          <Button variant="hero" size="xl" onClick={next}>
            <Sparkles className="mr-2 h-5 w-5" />
            Let's Get Started
            <span className="ml-2 font-hindi">शुरू करें</span>
          </Button>
          <div className="mt-6">
            <button
              onClick={back}
              className="text-sm text-muted-foreground transition-smooth hover:text-primary"
            >
              Back to home
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Step 2 — Age group
  if (step === 1) {
    return (
      <StepShell
        stepIndex={1}
        totalSteps={TOTAL_STEPS}
        title="Which age group are you in?"
        hindi="आप किस आयु वर्ग में हैं?"
        onBack={back}
        backLabel={backLabel}
      >
        {ageGroupOptions.map((o) => (
          <OptionCard
            key={o.value}
            label={o.label}
            hindi={o.hindi}
            selected={profile.ageGroup === o.value}
            onSelect={() => {
              update({ ageGroup: o.value });
              next();
            }}
          />
        ))}
      </StepShell>
    );
  }

  // Step 3 — Region
  if (step === 2) {
    return (
      <StepShell
        stepIndex={2}
        totalSteps={TOTAL_STEPS}
        title="Which part of India are you from?"
        hindi="आप भारत के किस हिस्से से हैं?"
        description="This helps us bring you regional foods you actually grew up with."
        onBack={back}
        backLabel={backLabel}
      >
        {regionOptions.map((o) => (
          <OptionCard
            key={o.value}
            label={o.label}
            hindi={o.hindi}
            selected={profile.region === o.value}
            onSelect={() => {
              update({ region: o.value });
              next();
            }}
          />
        ))}
      </StepShell>
    );
  }

  // Step 4 — Food preference
  if (step === 3) {
    return (
      <StepShell
        stepIndex={3}
        totalSteps={TOTAL_STEPS}
        title="What's your food preference?"
        hindi="आपकी भोजन प्राथमिकता क्या है?"
        onBack={back}
        backLabel={backLabel}
      >
        {dietOptions.map((o) => (
          <OptionCard
            key={o.value}
            label={o.label}
            hindi={o.hindi}
            selected={profile.dietaryPreference === o.value}
            onSelect={() => {
              update({ dietaryPreference: o.value });
              next();
            }}
          />
        ))}
      </StepShell>
    );
  }

  // Step 5 — Allergies
  if (step === 4) {
    const needsOther = profile.allergies.includes("other");
    const canContinue =
      profile.allergies.length > 0 && (!needsOther || allergyValue.trim().length > 0);
    return (
      <StepShell
        stepIndex={4}
        totalSteps={TOTAL_STEPS}
        title="Do you have any food allergies or intolerances?"
        hindi="क्या आपको किसी भोजन से एलर्जी है?"
        description="Select all that apply."
        onBack={back}
        backLabel={backLabel}
        footer={
          <div className="space-y-4">
            <p className="flex items-start gap-2 text-xs text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              We save this to shape future recommendations. This prototype does not yet provide
              medically safe allergy filtering — always check ingredients yourself.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              disabled={!canContinue}
              onClick={() => {
                update({ otherAllergy: needsOther ? allergyValue.trim() : undefined });
                next();
              }}
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        }
      >
        {allergyOptions.map((o) => (
          <OptionCard
            key={o.value}
            label={o.label}
            hindi={o.hindi}
            selected={profile.allergies.includes(o.value)}
            onSelect={() => toggleAllergy(o.value)}
          />
        ))}
        {needsOther && (
          <input
            value={allergyValue}
            maxLength={100}
            onChange={(e) => setOtherAllergy(e.target.value)}
            placeholder="Tell us which food (e.g. shellfish)"
            className="w-full rounded-2xl border border-border bg-card p-4 text-sm outline-none transition-smooth focus:border-primary"
          />
        )}
      </StepShell>
    );
  }

  // Step 6 — Goals
  if (step === 5) {
    const needsOther = profile.goals.includes("other");
    const canContinue = profile.goals.length > 0 && (!needsOther || goalValue.trim().length > 0);
    return (
      <StepShell
        stepIndex={5}
        totalSteps={TOTAL_STEPS}
        title="What would you like Ahaar Amrit to help you with?"
        hindi="आप किसमें मदद चाहते हैं?"
        description="Select all that apply."
        onBack={back}
        backLabel={backLabel}
        footer={
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            disabled={!canContinue}
            onClick={() => {
              update({ otherGoal: needsOther ? goalValue.trim() : undefined });
              next();
            }}
          >
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        }
      >
        {goalOptions.map((o) => (
          <OptionCard
            key={o.value}
            label={o.label}
            hindi={o.hindi}
            selected={profile.goals.includes(o.value)}
            onSelect={() => toggleGoal(o.value)}
          />
        ))}
        {needsOther && (
          <input
            value={goalValue}
            maxLength={140}
            onChange={(e) => setOtherGoal(e.target.value)}
            placeholder="Tell us your goal"
            className="w-full rounded-2xl border border-border bg-card p-4 text-sm outline-none transition-smooth focus:border-primary"
          />
        )}
      </StepShell>
    );
  }

  // Step 7 — Ayurveda
  return (
    <StepShell
      stepIndex={6}
      totalSteps={TOTAL_STEPS}
      title="Would you like to explore Ayurvedic wellness?"
      hindi="क्या आप आयुर्वेद जानना चाहेंगे?"
      description="Discover traditional Ayurvedic perspectives on food, daily routines, and wellness. You can explore this whenever you're ready."
      onBack={back}
      backLabel={backLabel}
      footer={
        <p className="text-xs text-muted-foreground">
          Ayurvedic wellness information is provided for educational purposes and is not a medical
          diagnosis.
        </p>
      }
    >
      <OptionCard
        label="Explore Ayurveda"
        hindi="आयुर्वेद जानें"
        selected={profile.wantsAyurveda === true}
        onSelect={() => {
          update({ wantsAyurveda: true, completedAt: new Date().toISOString() });
          navigate({ to: "/dosha" });
        }}
      />
      <OptionCard
        label="Maybe Later"
        hindi="बाद में"
        selected={profile.wantsAyurveda === false}
        onSelect={() => {
          update({ wantsAyurveda: false, completedAt: new Date().toISOString() });
          navigate({ to: "/profile" });
        }}
      />
    </StepShell>
  );
}
