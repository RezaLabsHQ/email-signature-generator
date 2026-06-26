import { HTMLAttributes, MouseEvent, ReactNode, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Adds the hover lift + glow. On by default. */
  interactive?: boolean;
};

/**
 * Elevated card with a radial spotlight that tracks the cursor.
 * The cursor position is written straight to CSS custom properties on the
 * element, so moving the mouse never triggers a React re-render.
 */
export default function SpotlightCard({ children, className, interactive = true, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("spotlight-host surface-card", interactive && "surface-card-hover", className)}
      {...rest}
    >
      <span aria-hidden className="spotlight-overlay" />
      <div className="spotlight-content h-full">{children}</div>
    </div>
  );
}
