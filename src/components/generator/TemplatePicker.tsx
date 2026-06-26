import TemplateCard from "@/components/ui/TemplateCard";
import { SignatureTemplate } from "@/features/signatures/types";

type Props = {
  templates: SignatureTemplate[];
  selectedTemplateId: string;
  onSelect: (templateId: string) => void;
};

export default function TemplatePicker({ templates, selectedTemplateId, onSelect }: Props) {
  return (
    <section aria-labelledby="template-picker-title">
      <div className="flex flex-col gap-2 border-b border-white/[0.06] p-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="template-picker-title" className="font-display text-xl font-semibold tracking-tight text-ink">
            Choose a template
          </h2>
          <p className="mt-1 font-ui text-sm text-foreground-muted">Pick once, then refine the details below.</p>
        </div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground-subtle">
          {templates.length} layouts
        </p>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            active={template.id === selectedTemplateId}
            onSelect={() => onSelect(template.id)}
          />
        ))}
      </div>
    </section>
  );
}
