import { SignatureData, SignatureTemplate } from "../types";
import { baseTable, buildNameLine, contactLine, escapeHtml, legalDisclaimer, link, safeHexColor } from "./utils";

export const compactProfessionalTemplate: SignatureTemplate = {
  id: "compact-professional",
  name: "Compact Professional",
  category: "professional",
  description: "A dense one-column layout for replies, support teams, and mobile-heavy workflows.",
  supportsPhoto: false,
  supportsLogo: false,
  renderHtml(data: SignatureData) {
    const accent = safeHexColor(data.accentColor, "#111111");
    const disclaimer = legalDisclaimer(data.disclaimerRegion);
    const links = [
      data.website ? link("Website", data.website) : "",
      data.linkedin ? link("LinkedIn", data.linkedin) : "",
      data.github ? link("GitHub", data.github) : "",
    ].filter(Boolean);

    return baseTable(`
      <tr>
        <td style="padding:0 0 0 10px;border-left:3px solid ${accent};">
          ${buildNameLine(data)}
          <div style="font-size:13px;color:#444444;margin-top:2px;">${escapeHtml(data.role)}${data.organization ? ` | ${escapeHtml(data.organization)}` : ""}</div>
          <div style="font-size:12px;color:#333333;margin-top:7px;">
            ${contactLine("E", data.email, `mailto:${data.email}`)}
            ${data.phone ? ` &nbsp; ${contactLine("P", data.phone, `tel:${data.phone}`)}` : ""}
            ${links.length ? `<br>${links.join(" &nbsp;|&nbsp; ")}` : ""}
          </div>
          ${disclaimer ? `<div style="font-size:10px;line-height:1.3;color:#777777;margin-top:8px;max-width:560px;">${escapeHtml(disclaimer)}</div>` : ""}
        </td>
      </tr>
    `);
  },
};

