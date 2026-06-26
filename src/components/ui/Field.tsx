import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BaseProps = {
  label: string;
  hint?: string;
};

type FieldProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const labelClass =
  "mb-2 block font-ui text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground-muted";

export function Field({ label, hint, className, id, ...props }: FieldProps) {
  const inputId = id ?? props.name;

  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <input id={inputId} className={cn("field-input", className)} {...props} />
      {hint ? <span className="mt-1.5 block font-ui text-xs leading-5 text-foreground-subtle">{hint}</span> : null}
    </label>
  );
}

export function TextareaField({ label, hint, className, id, ...props }: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <textarea id={textareaId} className={cn("field-input min-h-24 resize-y", className)} {...props} />
      {hint ? <span className="mt-1.5 block font-ui text-xs leading-5 text-foreground-subtle">{hint}</span> : null}
    </label>
  );
}
