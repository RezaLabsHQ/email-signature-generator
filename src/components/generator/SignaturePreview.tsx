import { ReactNode } from "react";
import { SignatureIssue } from "@/features/signatures/validation";

type Props = {
  html: string;
  issues: SignatureIssue[];
  actions?: ReactNode;
};

export default function SignaturePreview({ html, issues, actions }: Props) {
  const errors = issues.filter((issue) => issue.level === "error");
  const warnings = issues.filter((issue) => issue.level === "warning");

  return (
    <section aria-labelledby="signature-preview-title">
      <div className="border-b border-white/[0.06] p-5">
        <h2 id="signature-preview-title" className="font-display text-2xl font-semibold tracking-tight text-ink">
          Live preview
        </h2>
        <p className="mt-1.5 font-ui text-sm text-foreground-muted">This is exactly how your signature will paste.</p>
      </div>

      <div className="border-b border-white/[0.06] bg-white/[0.02] p-5">
        <div className="overflow-x-auto border border-white/10 bg-white p-5 shadow-[0_20px_70px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.04)]">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

      {issues.length ? (
        <div className="border-b border-white/[0.06] bg-white/[0.03] p-5">
          <p className="eyebrow">Export checks</p>
          <ul className="mt-3 space-y-2 font-ui text-sm leading-5">
            {errors.map((issue) => (
              <li key={issue.message} className="font-semibold text-red-200">
                Error: {issue.message}
              </li>
            ))}
            {warnings.map((issue) => (
              <li key={issue.message} className="text-foreground-muted">Warning: {issue.message}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="p-5">
        <label className="block">
          <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">Generated HTML</span>
          <textarea
            readOnly
            value={html}
            className="field-input min-h-60 resize-y p-3 font-mono text-xs leading-5"
          />
        </label>
      </div>

      {actions}
    </section>
  );
}
