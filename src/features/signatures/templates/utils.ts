import { DisclaimerRegion, SignatureData } from "../types";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function safeUrl(value: string) {
  // Strip control characters (incl. newlines/tabs) so they can't be smuggled
  // into href attributes; quotes are still neutralized by escapeHtml below.
  const trimmed = value.trim().replace(/[\u0000-\u001F\u007F]/g, "");
  if (!trimmed) return "";

  if (
    trimmed.startsWith("https://") ||
    trimmed.startsWith("http://") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:")
  ) {
    return escapeHtml(trimmed);
  }

  return "";
}

export function safeHexColor(value: string, fallback = "#111111") {
  return /^#[0-9a-fA-F]{6}$/.test(value) ? value : fallback;
}

export function link(label: string, href: string) {
  const url = safeUrl(href);
  if (!url) return "";

  return `<a href="${url}" style="color:#111111;text-decoration:underline;text-underline-offset:2px;">${escapeHtml(label)}</a>`;
}

export function contactLine(label: string, value: string, href?: string) {
  const cleanValue = value.trim();
  if (!cleanValue) return "";

  const content = href ? link(cleanValue, href) : escapeHtml(cleanValue);
  if (!content) return "";

  return `<span style="white-space:nowrap;"><strong style="color:#111111;">${escapeHtml(label)}:</strong> ${content}</span>`;
}

export function legalDisclaimer(region: DisclaimerRegion) {
  const disclaimers: Record<DisclaimerRegion, string> = {
    none: "",
    au: "This email may contain confidential information. If you are not the intended recipient, please delete it and notify the sender. Personal information must be handled in accordance with the Australian Privacy Act 1988.",
    us: "This email may contain confidential or privileged information. If you are not the intended recipient, please delete it and notify the sender.",
    eu: "This email may contain confidential information. Personal data must be handled in accordance with applicable GDPR and privacy obligations.",
  };

  return disclaimers[region];
}

export function baseTable(inner: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.4;color:#333333;">${inner}</table>`;
}

export function mutedText(value: string) {
  return `<span style="color:#555555;">${escapeHtml(value)}</span>`;
}

export function buildNameLine(data: SignatureData) {
  const pronouns = data.pronouns.trim() ? ` <span style="font-size:12px;color:#666666;font-weight:400;">(${escapeHtml(data.pronouns)})</span>` : "";

  return `<div style="font-size:17px;line-height:1.25;font-weight:700;color:#111111;">${escapeHtml(data.fullName)}${pronouns}</div>`;
}
