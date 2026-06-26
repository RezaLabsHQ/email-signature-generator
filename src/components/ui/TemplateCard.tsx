import { MouseEvent, useRef } from "react";
import { SignatureTemplate } from "@/features/signatures/types";
import { cn } from "@/lib/cn";

type Props = {
  template: SignatureTemplate;
  active: boolean;
  onSelect: () => void;
};

export default function TemplateCard({ template, active, onSelect }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      aria-pressed={active}
      className={cn(
        "spotlight-host surface-card w-full p-3 text-left transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "border-accent/60 bg-accent/10 shadow-[0_0_0_1px_rgba(94,106,210,0.4),0_8px_30px_rgba(0,0,0,0.45),0_0_60px_rgba(94,106,210,0.18)]"
          : "surface-card-hover",
      )}
    >
      <span aria-hidden className="spotlight-overlay" />
      <span className="spotlight-content flex min-h-[74px] flex-col justify-between">
        <span className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-display text-sm font-semibold leading-tight tracking-tight text-ink">
              {template.name}
            </span>
            <span className={cn("mt-1 block font-mono text-[0.62rem] uppercase tracking-[0.16em]", active ? "text-indigo-100/80" : "text-foreground-muted")}>
              {template.category}
            </span>
          </span>
          <span
            className={cn(
              "grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors",
              active ? "border-accent-bright bg-accent text-white shadow-[0_0_12px_rgba(94,106,210,0.65)]" : "border-white/15 bg-white/[0.03]",
            )}
          >
            {active ? <span className="text-[11px] leading-none">✓</span> : null}
          </span>
        </span>
        <span className={cn("mt-3 line-clamp-2 block font-ui text-xs leading-5", active ? "text-indigo-100/75" : "text-foreground-muted")}>
          {template.description}
        </span>
      </span>
    </button>
  );
}
