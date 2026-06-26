import { ChangeEvent, ReactNode } from "react";
import { Field, TextareaField } from "@/components/ui/Field";
import { DisclaimerRegion, SignatureData } from "@/features/signatures/types";

type Props = {
  data: SignatureData;
  onChange: (field: keyof SignatureData, value: string) => void;
};

const selectClass = "field-input appearance-none cursor-pointer";

function FormSection({
  title,
  description,
  children,
  subtle = false,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  subtle?: boolean;
}) {
  return (
    <section className={subtle ? "border-t border-white/[0.06] bg-white/[0.012]" : ""}>
      <div className="px-5 pt-5">
        <h3 className="font-display text-base font-semibold tracking-tight text-ink">{title}</h3>
        {description ? <p className="mt-1 font-ui text-sm leading-5 text-foreground-muted">{description}</p> : null}
      </div>
      <div className="grid gap-4 p-5 lg:grid-cols-2">{children}</div>
    </section>
  );
}

export default function SignatureForm({ data, onChange }: Props) {
  const update = (field: keyof SignatureData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange(field, event.target.value);
  };

  return (
    <section aria-labelledby="signature-form-title">
      <div className="border-b border-white/[0.06] p-5">
        <h2 id="signature-form-title" className="font-display text-2xl font-semibold tracking-tight text-ink">
          Your details
        </h2>
        <p className="mt-1.5 font-ui text-sm text-foreground-muted">Start with the visible identity fields. Everything else is optional.</p>
      </div>

      <FormSection title="Core identity" description="These fields define the signature in almost every template.">
        <Field label="Full name" name="fullName" value={data.fullName} onChange={update("fullName")} />
        <Field label="Email" name="email" type="email" value={data.email} onChange={update("email")} />
        <Field label="Role or title" name="role" value={data.role} onChange={update("role")} />
        <Field label="Organization" name="organization" value={data.organization} onChange={update("organization")} />
      </FormSection>

      <FormSection title="Academic context" description="Use these for student, researcher, university, or lab signatures." subtle>
        <Field label="Department" name="department" value={data.department} onChange={update("department")} />
        <Field label="Degree" name="degree" value={data.degree} onChange={update("degree")} />
        <Field label="Student ID" name="studentId" value={data.studentId} onChange={update("studentId")} />
        <Field label="Location" name="location" value={data.location} onChange={update("location")} />
        <div className="lg:col-span-2">
          <TextareaField
            label="Research area"
            name="researchArea"
            value={data.researchArea}
            onChange={update("researchArea")}
            placeholder="Research interests, lab, project focus, or professional specialization"
          />
        </div>
      </FormSection>

      <FormSection title="Links" description="Add only the profiles you want included in the selected template." subtle>
        <Field label="Phone" name="phone" value={data.phone} onChange={update("phone")} />
        <Field label="Website" name="website" value={data.website} onChange={update("website")} />
        <Field label="LinkedIn" name="linkedin" value={data.linkedin} onChange={update("linkedin")} />
        <Field label="GitHub" name="github" value={data.github} onChange={update("github")} />
        <Field label="ORCID" name="orcid" value={data.orcid} onChange={update("orcid")} />
        <Field label="Google Scholar" name="googleScholar" value={data.googleScholar} onChange={update("googleScholar")} />
      </FormSection>

      <details className="group border-t border-white/[0.06] bg-white/[0.012]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55">
          <span>
            <span className="block font-display text-base font-semibold tracking-tight text-ink">Advanced export options</span>
            <span className="mt-1 block font-ui text-sm text-foreground-muted">Photos, logos, legal disclaimer, and visual accent.</span>
          </span>
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white/[0.05] text-foreground-muted transition-transform group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="grid gap-4 p-5 pt-1 lg:grid-cols-2">
          <Field
            label="Photo URL"
            name="photoUrl"
            value={data.photoUrl}
            onChange={update("photoUrl")}
            hint="Use a stable https image URL for best email-client support."
          />
          <Field label="Logo URL" name="logoUrl" value={data.logoUrl} onChange={update("logoUrl")} />
          <Field label="Booking URL" name="bookingUrl" value={data.bookingUrl} onChange={update("bookingUrl")} />
          <Field label="Accent color" name="accentColor" type="color" value={data.accentColor} onChange={update("accentColor")} />
          <label className="block">
            <span className="mb-2 block font-ui text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground-muted">
              Disclaimer
            </span>
            <select
              className={selectClass}
              value={data.disclaimerRegion}
              onChange={(event) => onChange("disclaimerRegion", event.target.value as DisclaimerRegion)}
            >
              <option value="none">None</option>
              <option value="au">Australia</option>
              <option value="us">United States</option>
              <option value="eu">European Union</option>
            </select>
          </label>
          <Field label="Pronouns" name="pronouns" value={data.pronouns} onChange={update("pronouns")} placeholder="he/him, she/her" />
        </div>
      </details>
    </section>
  );
}
