import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAhaarProfile } from "@/hooks/use-ahaar-profile";

export const Route = createFileRoute("/dosha-quiz")({
  component: DoshaQuiz,
});

type Dosha = "Vata" | "Pitta" | "Kapha";

type Question = {
  question: string;
  options: {
    text: string;
    dosha: Dosha;
  }[];
};

const questions: Question[] = [
  {
    question: "How would you describe your natural body build?",
    options: [
      { text: "Light, slim, or naturally lean", dosha: "Vata" },
      { text: "Medium build with a balanced physique", dosha: "Pitta" },
      { text: "Solid, sturdy, or naturally strong", dosha: "Kapha" },
    ],
  },
  {
    question: "How is your energy throughout the day?",
    options: [
      {
        text: "It comes in bursts — very energetic, then I need rest",
        dosha: "Vata",
      },
      {
        text: "Usually strong and consistent when I have a goal",
        dosha: "Pitta",
      },
      {
        text: "Steady and calm, but I may take time to get going",
        dosha: "Kapha",
      },
    ],
  },
  {
    question: "How would you describe your appetite?",
    options: [
      {
        text: "It can be unpredictable or change from day to day",
        dosha: "Vata",
      },
      {
        text: "Usually strong — I notice when I am hungry",
        dosha: "Pitta",
      },
      {
        text: "Generally steady, but I can comfortably skip a meal",
        dosha: "Kapha",
      },
    ],
  },
  {
    question: "How do you usually respond to stress?",
    options: [
      {
        text: "I may become worried, restless, or overthink things",
        dosha: "Vata",
      },
      {
        text: "I may become impatient, intense, or frustrated",
        dosha: "Pitta",
      },
      {
        text: "I tend to stay calm, quiet, or withdraw",
        dosha: "Kapha",
      },
    ],
  },
  {
    question: "How would you describe your sleep?",
    options: [
      {
        text: "Light or easily interrupted",
        dosha: "Vata",
      },
      {
        text: "Moderate and generally refreshing",
        dosha: "Pitta",
      },
      {
        text: "Deep and usually long-lasting",
        dosha: "Kapha",
      },
    ],
  },
  {
    question: "Which best describes your natural pace?",
    options: [
      {
        text: "Fast, spontaneous, and always looking for something new",
        dosha: "Vata",
      },
      {
        text: "Focused, purposeful, and goal-oriented",
        dosha: "Pitta",
      },
      {
        text: "Calm, steady, and unhurried",
        dosha: "Kapha",
      },
    ],
  },
  {
    question: "How do you usually learn something new?",
    options: [
      {
        text: "I learn quickly and enjoy exploring many different ideas",
        dosha: "Vata",
      },
      {
        text: "I like to understand things deeply and apply them practically",
        dosha: "Pitta",
      },
      {
        text: "I take my time, but remember things for a long time",
        dosha: "Kapha",
      },
    ],
  },
  {
    question: "How would you describe your personality?",
    options: [
      {
        text: "Creative, enthusiastic, curious, and adaptable",
        dosha: "Vata",
      },
      {
        text: "Confident, focused, ambitious, and determined",
        dosha: "Pitta",
      },
      {
        text: "Patient, caring, calm, and dependable",
        dosha: "Kapha",
      },
    ],
  },
  {
    question: "When plans suddenly change, what is your usual reaction?",
    options: [
      {
        text: "I adapt quickly, although I may feel unsettled",
        dosha: "Vata",
      },
      {
        text: "I prefer to understand why the change happened",
        dosha: "Pitta",
      },
      {
        text: "I prefer stability, but I can adjust with time",
        dosha: "Kapha",
      },
    ],
  },
  {
    question: "Which environment feels most comfortable to you?",
    options: [
      {
        text: "Warm, cozy, and peaceful",
        dosha: "Vata",
      },
      {
        text: "Cool, fresh, and well-ventilated",
        dosha: "Pitta",
      },
      {
        text: "Warm, active, and stimulating",
        dosha: "Kapha",
      },
    ],
  },
];

const doshaResults = {
  Vata: {
    hindi: "वात",
    emoji: "🌬️",
    title: "The Explorer",
    subtitle: "Movement • Creativity • Adaptability",
    description:
      "Your answers show a pattern that resonates most with Vata. In traditional Ayurvedic thought, Vata is associated with movement, creativity, flexibility, and change.",
    advice:
      "You may benefit from routines that feel grounding and consistent, nourishing meals, and taking time to slow down when life becomes busy.",
  },

  Pitta: {
    hindi: "पित्त",
    emoji: "🔥",
    title: "The Transformer",
    subtitle: "Focus • Energy • Determination",
    description:
      "Your answers show a pattern that resonates most with Pitta. In traditional Ayurvedic thought, Pitta is associated with transformation, focus, digestion, and drive.",
    advice:
      "You may benefit from balanced routines, regular meals, time to recharge, and creating space to relax when your schedule becomes intense.",
  },

  Kapha: {
    hindi: "कफ",
    emoji: "🌿",
    title: "The Nurturer",
    subtitle: "Stability • Strength • Calmness",
    description:
      "Your answers show a pattern that resonates most with Kapha. In traditional Ayurvedic thought, Kapha is associated with stability, strength, nourishment, and calmness.",
    advice:
      "You may benefit from staying active, maintaining variety in your routine, and choosing habits that keep you feeling energized and engaged.",
  },
};

function calculateDosha(answers: Dosha[]): Dosha {
  const scores: Record<Dosha, number> = {
    Vata: 0,
    Pitta: 0,
    Kapha: 0,
  };

  for (const answer of answers) {
    if (answer) {
      scores[answer] += 1;
    }
  }

  return (Object.keys(scores) as Dosha[]).reduce(
    (winner, dosha) =>
      scores[dosha] > scores[winner] ? dosha : winner,
    "Vata"
  );
}

function DoshaQuiz() {
  const navigate = useNavigate();
  const { update } = useAhaarProfile();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Dosha[]>([]);
  const [showResult, setShowResult] = useState(false);

  const result = useMemo(() => {
    return calculateDosha(answers);
  }, [answers]);

  const progress = Math.min(
    ((currentQuestion + 1) / questions.length) * 100,
    100
  );

  const finishQuiz = (finalAnswers: Dosha[]) => {
    const finalResult = calculateDosha(finalAnswers);

    // Save the final Dosha into the Ahaar profile.
    update({
      dosha: finalResult.toLowerCase() as "vata" | "pitta" | "kapha",
    });

    setShowResult(true);
  };

  const handleOptionSelect = (dosha: Dosha) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = dosha;
    setAnswers(newAnswers);

    // Short timeout so the user sees their option highlight before moving forward
    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        finishQuiz(newAnswers);
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    }, 200);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else {
      navigate({ to: "/dosha" });
    }
  };

  const restartQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  /*
   * =====================================================
   * RESULT SCREEN
   * =====================================================
   */

  if (showResult) {
    const resultData = doshaResults[result];

    return (
      <main className="relative min-h-screen overflow-hidden bg-background pt-28 sm:pt-36 pb-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-pulse-glow absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />
          <div className="animate-float-slow absolute -right-32 top-40 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        </div>

        <section className="relative mx-auto flex min-h-[80vh] max-w-4xl items-center justify-center px-6">
          <div className="glass w-full rounded-[2rem] p-8 text-center shadow-warm sm:p-12">

            <div className="mx-auto flex h-24 w-24 animate-float items-center justify-center rounded-full bg-white/70 text-5xl shadow-xl">
              {resultData.emoji}
            </div>

            <p className="mt-8 font-hindi text-xl font-semibold text-primary">
              आपका प्रमुख दोष — {resultData.hindi}
            </p>

            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Your Ayurvedic Pattern
            </p>

            <h1 className="mt-4 font-display text-5xl font-bold text-foreground sm:text-6xl">
              {result}
            </h1>

            <h2 className="mt-3 text-2xl font-semibold text-secondary">
              {resultData.title}
            </h2>

            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {resultData.subtitle}
            </p>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted-foreground">
              {resultData.description}
            </p>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-primary/10 p-6 text-left">
              <h3 className="font-display text-xl font-bold text-foreground">
                A gentle starting point
              </h3>

              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {resultData.advice}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button
                onClick={() =>
                  navigate({
                    to: "/nutrition-plan",
                  })
                }
                size="lg"
                className="rounded-full"
              >
                Build My Nutrition Plan
              </Button>

              <Button
                onClick={restartQuiz}
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Retake Quiz
              </Button>
            </div>

            <Link
              to="/"
              className="mt-8 inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Return to Ahaar Amrit
            </Link>

            <p className="mx-auto mt-8 max-w-xl text-xs leading-5 text-muted-foreground/70">
              This quiz is an educational wellness experience based on
              traditional Ayurvedic concepts. It does not provide a medical
              diagnosis and should not replace advice from a qualified
              healthcare professional.
            </p>
          </div>
        </section>
      </main>
    );
  }

  /*
   * =====================================================
   * QUIZ SCREEN
   * =====================================================
   */

  if (currentQuestion >= questions.length) {
    const safeResult = calculateDosha(answers);

    update({
      dosha: safeResult.toLowerCase() as "vata" | "pitta" | "kapha",
    });

    return (
      <main className="flex min-h-screen items-center justify-center bg-background pt-28 sm:pt-36">
        <div className="text-center">
          <Sparkles className="mx-auto h-10 w-10 animate-pulse text-primary" />
          <p className="mt-4 text-muted-foreground">
            Calculating your Dosha...
          </p>

          <Button
            className="mt-6 rounded-full"
            onClick={() => setShowResult(true)}
          >
            View My Result
          </Button>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background pt-28 sm:pt-36 pb-16">

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="animate-float-slow absolute -right-32 top-40 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-4xl px-6">

        {/* TOP BAR */}
        <div className="mb-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handlePreviousQuestion}
            className="rounded-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {currentQuestion > 0 ? "Previous Question" : "Exit Quiz"}
          </Button>

          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Dosha Discovery
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="font-medium text-primary">
              Question {currentQuestion + 1} of {questions.length}
            </span>

            <span className="text-muted-foreground">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-primary/10">
            <div
              className="h-full rounded-full bg-gradient-premium transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* QUESTION CARD */}
        <div className="glass rounded-[2rem] p-6 shadow-warm sm:p-10">

          <div className="text-center">
            <p className="font-hindi text-lg text-secondary">
              अपने बारे में बताएं
            </p>

            <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {question.question}
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Click an option to automatically move to the next question.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4">
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option.dosha;

              return (
                <button
                  key={option.dosha}
                  onClick={() => handleOptionSelect(option.dosha)}
                  className={`group flex w-full items-center justify-between rounded-2xl border p-5 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-primary bg-primary/20 shadow-lg scale-[1.01]"
                      : "border-border bg-white/40 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/70 hover:shadow-lg"
                  }`}
                >
                  <span className="pr-4 text-sm font-medium leading-6 text-foreground sm:text-base">
                    {option.text}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/20 bg-white/50 text-transparent group-hover:border-primary/50"
                    }`}
                  >
                    <Check className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}
