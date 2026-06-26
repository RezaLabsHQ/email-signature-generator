import { SignatureData, SignatureTemplate } from "../types";
import { baseTable, buildNameLine, contactLine, escapeHtml, legalDisclaimer, link, safeHexColor } from "./utils";

export const professionalMinimalTemplate: SignatureTemplate = {
  id: "professional-minimal",
  name: "Professional Minimal",
  category: "professional",
  description: "A clean business signature for teams, contractors, and consultants.",
  supportsPhoto: false,
  supportsLogo: false,
  renderHtml(data: SignatureData) {
    const disclaimer = legalDisclaimer(data.disclaimerRegion);

    return baseTable(`
      <tr>
        <td style="padding:0 0 8px 0;">
          ${buildNameLine(data)}
          <div style="font-size:13px;color:#444444;margin-top:3px;">
            ${escapeHtml(data.role)}${data.organization ? `, ${escapeHtml(data.organization)}` : ""}
            ${data.location ? `<br>${escapeHtml(data.location)}` : ""}
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 0 0 0;border-top:2px solid ${safeHexColor(data.accentColor)};">
          <div style="font-size:13px;color:#333333;">
            ${contactLine("E", data.email, `mailto:${data.email}`)}
            ${data.phone ? ` &nbsp; ${contactLine("P", data.phone, `tel:${data.phone}`)}` : ""}
            ${data.website ? ` &nbsp; ${contactLine("W", data.website, data.website)}` : ""}
            ${data.linkedin ? `<br>${link("LinkedIn", data.linkedin)}` : ""}
            ${data.bookingUrl ? ` &nbsp; ${link("Book a meeting", data.bookingUrl)}` : ""}
          </div>
          ${disclaimer ? `<div style="font-size:11px;line-height:1.35;color:#666666;margin-top:10px;max-width:560px;">${escapeHtml(disclaimer)}</div>` : ""}
        </td>
      </tr>
    `);
  },
};
