import { SignatureData, SignatureTemplate } from "../types";
import { baseTable, buildNameLine, contactLine, escapeHtml, legalDisclaimer, link } from "./utils";

export const academicResearchTemplate: SignatureTemplate = {
  id: "academic-research",
  name: "Academic Research",
  category: "academic",
  description: "Adds research identity links such as ORCID, Scholar, GitHub, and LinkedIn.",
  supportsPhoto: false,
  supportsLogo: false,
  renderHtml(data: SignatureData) {
    const disclaimer = legalDisclaimer(data.disclaimerRegion);
    const profileLinks = [
      data.orcid ? link("ORCID", data.orcid) : "",
      data.googleScholar ? link("Google Scholar", data.googleScholar) : "",
      data.github ? link("GitHub", data.github) : "",
      data.linkedin ? link("LinkedIn", data.linkedin) : "",
    ].filter(Boolean);

    return baseTable(`
      <tr>
        <td style="padding:0 14px 0 0;border-right:3px solid #111111;vertical-align:top;">
          ${buildNameLine(data)}
          <div style="font-size:13px;color:#444444;margin-top:3px;">
            ${escapeHtml(data.role)}<br>
            ${escapeHtml(data.department)}<br>
            ${escapeHtml(data.organization)}
          </div>
        </td>
        <td style="padding:0 0 0 14px;vertical-align:top;">
          ${data.researchArea ? `<div style="font-size:12px;color:#555555;margin-bottom:7px;"><strong style="color:#111111;">Research:</strong> ${escapeHtml(data.researchArea)}</div>` : ""}
          <div style="font-size:13px;color:#333333;">
            ${contactLine("Email", data.email, `mailto:${data.email}`)}
            ${data.phone ? `<br>${contactLine("Phone", data.phone, `tel:${data.phone}`)}` : ""}
            ${profileLinks.length ? `<br>${profileLinks.join(" &nbsp;|&nbsp; ")}` : ""}
          </div>
        </td>
      </tr>
      ${disclaimer ? `<tr><td colspan="2" style="padding:10px 0 0 0;"><div style="font-size:11px;line-height:1.35;color:#666666;max-width:620px;">${escapeHtml(disclaimer)}</div></td></tr>` : ""}
    `);
  },
};

