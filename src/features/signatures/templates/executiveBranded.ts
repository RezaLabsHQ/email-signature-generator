import { SignatureData, SignatureTemplate } from "../types";
import { baseTable, buildNameLine, contactLine, escapeHtml, legalDisclaimer, link, safeHexColor, safeUrl } from "./utils";

export const executiveBrandedTemplate: SignatureTemplate = {
  id: "executive-branded",
  name: "Executive Branded",
  category: "advanced",
  description: "A logo-ready signature for founders, executives, consultants, and branded teams.",
  supportsPhoto: false,
  supportsLogo: true,
  renderHtml(data: SignatureData) {
    const accent = safeHexColor(data.accentColor, "#CC0000");
    const disclaimer = legalDisclaimer(data.disclaimerRegion);
    const logoUrl = safeUrl(data.logoUrl);

    return baseTable(`
      <tr>
        <td style="vertical-align:top;padding:0 18px 0 0;">
          ${
            logoUrl
              ? `<img src="${logoUrl}" width="120" height="40" alt="${escapeHtml(data.organization)}" style="display:block;width:120px;max-width:120px;height:auto;border:0;">`
              : `<div style="font-size:18px;font-weight:700;letter-spacing:1px;color:#111111;">${escapeHtml(data.organization)}</div>`
          }
        </td>
        <td style="vertical-align:top;padding:0 0 0 18px;border-left:4px solid ${accent};">
          ${buildNameLine(data)}
          <div style="font-size:13px;color:#444444;margin-top:3px;">
            ${escapeHtml(data.role)}${data.department ? `<br>${escapeHtml(data.department)}` : ""}
            ${data.location ? `<br>${escapeHtml(data.location)}` : ""}
          </div>
          <div style="font-size:13px;color:#333333;margin-top:9px;">
            ${contactLine("Email", data.email, `mailto:${data.email}`)}
            ${data.phone ? `<br>${contactLine("Phone", data.phone, `tel:${data.phone}`)}` : ""}
            ${data.website ? `<br>${contactLine("Web", data.website, data.website)}` : ""}
            ${data.bookingUrl ? `<br>${link("Book a meeting", data.bookingUrl)}` : ""}
          </div>
        </td>
      </tr>
      ${disclaimer ? `<tr><td colspan="2" style="padding:12px 0 0 0;"><div style="font-size:11px;line-height:1.35;color:#666666;max-width:640px;">${escapeHtml(disclaimer)}</div></td></tr>` : ""}
    `);
  },
};

