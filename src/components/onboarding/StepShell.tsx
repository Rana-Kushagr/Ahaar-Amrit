import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

interface StepShellProps {
  stepIndex: number;
  totalSteps: number;
  title: string;
  hindi?: string;
  description?: string;
  onBack: () => void;
  backLabel: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function StepShell({
  stepIndex,
  totalSteps,
  title,
  hindi,
  description,
  onBack,
  backLabel,
  children,
  footer,
}: StepShellProps) {
  const progress = ((stepIndex + 1) / totalSteps) * 100;

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-smooth hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </button>

        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-sm font-medium text-primary">
            Step {stepIndex + 1} / {totalSteps}
          </span>
          <span className="font-hindi text-sm text-muted-foreground">चरण {stepIndex + 1}</span>
        </div>
        <div className="mb-10 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-hero transition-smooth"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h1 className="mb-2 text-2xl font-bold md:text-3xl">{title}</h1>
        {hindi && <p className="mb-3 font-hindi text-muted-foreground">{hindi}</p>}
        {description && <p className="mb-8 text-foreground/80">{description}</p>}

        <div className="grid gap-3">{children}</div>

        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </section>
  );
}
