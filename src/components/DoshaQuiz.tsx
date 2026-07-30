import { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quizQuestions, scoreQuiz, type Dosha } from "@/lib/dosha";

interface DoshaQuizProps {
  onComplete: (result: { winner: Dosha; scores: Record<Dosha, number> }) => void;
  onExit: () => void;
}

export function DoshaQuiz({ onComplete, onExit }: DoshaQuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Dosha[]>([]);

  const q = quizQuestions[step];
  const progress = ((step + (0 as number)) / quizQuestions.length) * 100;

  const choose = (dosha: Dosha) => {
    const next = [...answers.slice(0, step), dosha];
    setAnswers(next);
    if (step + 1 === quizQuestions.length) {
      onComplete(scoreQuiz(next));
    } else {
      setStep(step + 1);
    }
  };

  const back = () => {
    if (step === 0) onExit();
    else setStep(step - 1);
  };

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-2xl">
        <button
          onClick={back}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-smooth hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {step === 0 ? "Back to home" : "Previous question"}
        </button>

        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-sm font-medium text-primary">
            Question {step + 1} / {quizQuestions.length}
          </span>
          <span className="font-hindi text-sm text-muted-foreground">प्रश्न {step + 1}</span>
        </div>
        <div className="mb-10 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-hero transition-smooth"
            style={{ width: `${Math.max(progress, 4)}%` }}
          />
        </div>

        <h2 className="mb-2 text-2xl font-bold md:text-3xl">{q.question}</h2>
        <p className="mb-8 font-hindi text-muted-foreground">{q.hindi}</p>

        <div className="grid gap-3">
          {q.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => choose(opt.dosha)}
              className="group rounded-2xl border border-border bg-card p-5 text-left shadow-sm transition-smooth hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-warm"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent transition-smooth group-hover:text-primary" />
                <div>
                  <p className="font-medium">{opt.label}</p>
                  <p className="font-hindi text-sm text-muted-foreground">{opt.hindi}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {step > 0 && (
          <Button variant="soft" className="mt-8" onClick={() => setStep(step - 1)}>
            Change previous answer
          </Button>
        )}
      </div>
    </section>
  );
}
