import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptionCardProps {
  label: string;
  hindi?: string;
  selected: boolean;
  onSelect: () => void;
}

export function OptionCard({ label, hindi, selected, onSelect }: OptionCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(
        "group flex w-full items-center justify-between gap-3 rounded-2xl border bg-card p-4 text-left shadow-sm transition-smooth hover:-translate-y-0.5 hover:shadow-warm md:p-5",
        selected
          ? "border-primary bg-primary/5 shadow-warm"
          : "border-border hover:border-primary/50",
      )}
    >
      <span>
        <span className="block font-medium">{label}</span>
        {hindi && <span className="block font-hindi text-sm text-muted-foreground">{hindi}</span>}
      </span>
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-smooth",
          selected ? "border-primary bg-gradient-hero" : "border-border",
        )}
      >
        {selected && <Check className="h-4 w-4 text-primary-foreground" />}
      </span>
    </button>
  );
}
