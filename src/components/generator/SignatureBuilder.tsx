import { useMemo, useState } from "react";
import ExportPanel from "@/components/generator/ExportPanel";
import SignatureForm from "@/components/generator/SignatureForm";
import SignaturePreview from "@/components/generator/SignaturePreview";
import TemplatePicker from "@/components/generator/TemplatePicker";
import { defaultSignatureData } from "@/features/signatures/defaults";
import { buildSignatureHtml } from "@/features/signatures/export/buildHtml";
import { academicSample, professionalSample } from "@/features/signatures/samples";
import { signatureTemplates } from "@/features/signatures/templates";
import { SignatureData } from "@/features/signatures/types";
import { validateSignature } from "@/features/signatures/validation";
import Button from "@/components/ui/Button";

export default function SignatureBuilder() {
  const [selectedTemplateId, setSelectedTemplateId] = useState(signatureTemplates[0].id);
  const [data, setData] = useState<SignatureData>(defaultSignatureData);

  const selectedTemplate = useMemo(
    () => signatureTemplates.find((template) => template.id === selectedTemplateId) ?? signatureTemplates[0],
    [selectedTemplateId],
  );
  const html = useMemo(() => buildSignatureHtml(selectedTemplateId, data), [selectedTemplateId, data]);
  const issues = useMemo(() => validateSignature(data, selectedTemplate), [data, selectedTemplate]);

  const updateField = (field: keyof SignatureData, value: string) => {
    setData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <div className="panel-flat overflow-hidden">
      <TemplatePicker templates={signatureTemplates} selectedTemplateId={selectedTemplateId} onSelect={setSelectedTemplateId} />

      <div className="flex flex-col gap-3 border-y border-white/[0.06] bg-white/[0.018] p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-ui text-sm text-foreground-muted">
          Editing <strong className="text-ink">{selectedTemplate.name}</strong>
        </p>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="secondary" onClick={() => setData(academicSample)}>
            Academic sample
          </Button>
          <Button type="button" variant="secondary" onClick={() => setData(professionalSample)}>
            Pro sample
          </Button>
          <Button type="button" variant="ghost" onClick={() => setData(defaultSignatureData)}>
            Reset
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_400px]">
        {/* Center — the form (main working area) */}
        <main className="border-b border-white/[0.06] lg:border-b-0 lg:border-r lg:border-white/[0.06]">
          <div className="sr-only">
            <p className="font-ui text-sm text-foreground-muted">
              Editing <strong className="text-ink">{selectedTemplate.name}</strong>
            </p>
          </div>
          <SignatureForm data={data} onChange={updateField} />
        </main>

        {/* Right rail — live preview + export */}
        <aside className="lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
          <SignaturePreview html={html} issues={issues} actions={<ExportPanel html={html} issues={issues} />} />
        </aside>
      </div>
    </div>
  );
}
