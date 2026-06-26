import { SignatureTemplate, SignatureData } from "./types";

export type SignatureIssue = {
  level: "error" | "warning";
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hexColorPattern = /^#[0-9a-fA-F]{6}$/;

const urlFields: Array<[keyof SignatureData, string]> = [
  ["website", "Website"],
  ["linkedin", "LinkedIn"],
  ["github", "GitHub"],
  ["orcid", "ORCID"],
  ["googleScholar", "Google Scholar"],
  ["bookingUrl", "Booking URL"],
  ["photoUrl", "Photo URL"],
  ["logoUrl", "Logo URL"],
];

function isHttpUrl(value: string) {
  return value.startsWith("https://") || value.startsWith("http://");
}

export function validateSignature(data: SignatureData, template: SignatureTemplate): SignatureIssue[] {
  const issues: SignatureIssue[] = [];

  if (!data.fullName.trim()) {
    issues.push({ level: "error", message: "Full name is required before export." });
  }

  if (!emailPattern.test(data.email.trim())) {
    issues.push({ level: "error", message: "Use a valid email address before export." });
  }

  if (!data.role.trim()) {
    issues.push({ level: "warning", message: "A role or title helps recipients understand your identity." });
  }

  if (!data.organization.trim()) {
    issues.push({ level: "warning", message: "Add an organization for stronger academic or professional context." });
  }

  for (const [field, label] of urlFields) {
    const value = String(data[field]).trim();
    if (value && !isHttpUrl(value)) {
      issues.push({ level: "warning", message: `${label} should start with http:// or https:// for email-client compatibility.` });
    }
  }

  if (template.supportsPhoto && !data.photoUrl.trim()) {
    issues.push({ level: "warning", message: "This template supports a photo, but no photo URL is set." });
  }

  if (!template.supportsPhoto && data.photoUrl.trim()) {
    issues.push({ level: "warning", message: "The selected template does not display the photo URL." });
  }

  if (template.supportsLogo && !data.logoUrl.trim()) {
    issues.push({ level: "warning", message: "This template supports a logo, but no logo URL is set." });
  }

  if (!template.supportsLogo && data.logoUrl.trim()) {
    issues.push({ level: "warning", message: "The selected template does not display the logo URL." });
  }

  if (!hexColorPattern.test(data.accentColor)) {
    issues.push({ level: "error", message: "Accent color must be a six-digit hex value, such as #111111." });
  }

  return issues;
}

export function hasBlockingIssues(issues: SignatureIssue[]) {
  return issues.some((issue) => issue.level === "error");
}

