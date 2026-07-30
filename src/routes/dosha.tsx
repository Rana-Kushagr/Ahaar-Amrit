import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { DoshaQuiz } from "@/components/DoshaQuiz";
import { DoshaResult } from "@/components/DoshaResult";
import { useAhaarProfile } from "@/hooks/use-ahaar-profile";
import type { Dosha } from "@/lib/dosha";

const title = "Ayurvedic Dosha Quiz — Ahaar Amrit";
const description =
  "Take the optional 10-question Ayurvedic dosha quiz and see traditional food, meal, and daily-habit perspectives for your dominant dosha.";

export const Route = createFileRoute("/dosha")({
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
  component: DoshaPage,
});

type Result = { winner: Dosha; scores: Record<Dosha, number> };

function DoshaPage() {
  const navigate = useNavigate();
  const { update } = useAhaarProfile();
  const [result, setResult] = useState<Result | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {!result ? (
        <>
          <DoshaQuiz
            onExit={() => navigate({ to: "/" })}
            onComplete={(r) => {
              setResult(r);
              update({ dosha: r.winner, wantsAyurveda: true });
            }}
          />
          <p className="mx-auto max-w-2xl px-4 pb-12 text-center text-xs text-muted-foreground">
            Ayurvedic wellness information is provided for educational purposes and is not a medical
            diagnosis.
          </p>
        </>
      ) : (
        <>
          <DoshaResult
            winner={result.winner}
            scores={result.scores}
            onRestart={() => setResult(null)}
          />
          <div className="mx-auto max-w-3xl px-4 pb-16 text-center">
            <p className="mb-6 text-xs text-muted-foreground">
              Ayurvedic wellness information is provided for educational purposes and is not a
              medical diagnosis.
            </p>
            <Link
              to="/profile"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-smooth hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to my Ahaar Profile
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
