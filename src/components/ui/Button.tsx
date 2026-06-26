import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-shine bg-accent text-white shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_4px_12px_rgba(94,106,210,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-accent-bright hover:shadow-[0_0_0_1px_rgba(104,114,217,0.7),0_8px_24px_rgba(94,106,210,0.42),inset_0_1px_0_rgba(255,255,255,0.25)]",
  secondary:
    "bg-white/[0.05] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.07)] hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.3)]",
  ghost: "bg-transparent text-foreground-muted hover:bg-white/[0.05] hover:text-ink",
};

export default function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 font-ui text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-45 disabled:active:scale-100",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
