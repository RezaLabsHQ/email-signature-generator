import { useState } from "react";
import Button from "@/components/ui/Button";
import { copySignature } from "@/features/signatures/export/copySignature";
import { downloadSignature } from "@/features/signatures/export/downloadSignature";
import {
  hasBlockingIssues,
  SignatureIssue,
} from "@/features/signatures/validation";

type Props = {
  html: string;
  issues: SignatureIssue[];
};

export default function ExportPanel({ html, issues }: Props) {
  const [status, setStatus] = useState("");
  const hasErrors = hasBlockingIssues(issues);

  const handleCopy = async () => {
    if (hasErrors) {
      setStatus("Fix export errors before copying the signature.");
      return;
    }

    try {
      await copySignature(html);
      setStatus("Copied rich HTML to clipboard.");
    } catch {
      setStatus("Copy failed. Use the generated HTML panel instead.");
    }
  };

  const handleDownload = () => {
    if (hasErrors) {
      setStatus("Fix export errors before downloading the signature.");
      return;
    }

    downloadSignature(html);
    setStatus("Downloaded email-signature.html.");
  };

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(html);
      setStatus("Copied raw HTML source.");
    } catch {
      setStatus("Raw HTML copy failed. Select the generated HTML manually.");
    }
  };

  return (
    <section
      className="border-t border-white/[0.06] bg-white/[0.025] p-5"
      aria-label="Export signature"
    >
      <div className="mb-4">
        <h3 className="font-display text-base font-semibold tracking-tight text-ink">
          Export
        </h3>
        <p className="mt-1 font-ui text-sm leading-5 text-foreground-muted">
          Copy HTML for most email settings. Download or copy source when you
          need manual setup.
        </p>
      </div>

      <div className="space-y-3">
        <Button
          type="button"
          onClick={handleCopy}
          disabled={hasErrors}
          className="w-full justify-center py-3 text-sm normal-case tracking-normal"
        >
          Copy signature for email settings
        </Button>

        <div className="grid gap-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            onClick={handleDownload}
            disabled={hasErrors}
            className="justify-center"
          >
            Download HTML
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={handleCopyHtml}
            className="justify-center"
          >
            Copy source
          </Button>
        </div>
      </div>
      <p
        className="mt-3 min-h-5 font-ui text-sm text-foreground-muted"
        aria-live="polite"
      >
        {status ||
          (hasErrors
            ? "Export is locked until required fields are fixed."
            : "Ready to export.")}
      </p>
    </section>
  );
}
