import { SignatureData, SignatureTemplate } from "../types";
import { baseTable, buildNameLine, contactLine, escapeHtml, legalDisclaimer } from "./utils";

export const basicAcademicTemplate: SignatureTemplate = {
  id: "basic-academic",
  name: "Basic Academic",
  category: "academic",
  description: "Maximum compatibility for students, researchers, and university staff.",
  supportsPhoto: false,
  supportsLogo: false,
  renderHtml(data: SignatureData) {
    const disclaimer = legalDisclaimer(data.disclaimerRegion);
    const rows = [
      data.role,
      data.department,
      data.organization,
      data.degree,
      data.studentId ? `Student ID: ${data.studentId}` : "",
    ].filter(Boolean);

    return baseTable(`
      <tr>
        <td style="padding:0 0 10px 0;border-bottom:1px solid #cccccc;">
          ${buildNameLine(data)}
          <div style="font-size:13px;color:#444444;margin-top:3px;">${rows.map(escapeHtml).join("<br>")}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0 0 0;">
          <div style="font-size:13px;color:#333333;">
            ${contactLine("Email", data.email, `mailto:${data.email}`)}
            ${data.phone ? `<br>${contactLine("Phone", data.phone, `tel:${data.phone}`)}` : ""}
            ${data.website ? `<br>${contactLine("Web", data.website, data.website)}` : ""}
          </div>
          ${disclaimer ? `<div style="font-size:11px;line-height:1.35;color:#666666;margin-top:10px;max-width:560px;">${escapeHtml(disclaimer)}</div>` : ""}
        </td>
      </tr>
    `);
  },
};

