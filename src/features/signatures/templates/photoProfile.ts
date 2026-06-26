import { SignatureData, SignatureTemplate } from "../types";
import { baseTable, buildNameLine, contactLine, escapeHtml, legalDisclaimer, safeUrl } from "./utils";

export const photoProfileTemplate: SignatureTemplate = {
  id: "photo-profile",
  name: "Photo Profile",
  category: "advanced",
  description: "A profile-photo layout for professional identity, with strict image sizing.",
  supportsPhoto: true,
  supportsLogo: false,
  renderHtml(data: SignatureData) {
    const disclaimer = legalDisclaimer(data.disclaimerRegion);
    const photoUrl = safeUrl(data.photoUrl);

    return baseTable(`
      <tr>
        ${photoUrl ? `<td style="vertical-align:top;padding:0 14px 0 0;"><img src="${photoUrl}" width="82" height="82" alt="${escapeHtml(data.fullName)}" style="display:block;width:82px;height:82px;border:0;object-fit:cover;"></td>` : ""}
        <td style="vertical-align:top;padding:0;">
          ${buildNameLine(data)}
          <div style="font-size:13px;color:#444444;margin-top:3px;">
            ${escapeHtml(data.role)}<br>
            ${escapeHtml(data.organization)}
          </div>
          <div style="font-size:13px;color:#333333;margin-top:8px;">
            ${contactLine("Email", data.email, `mailto:${data.email}`)}
            ${data.phone ? `<br>${contactLine("Phone", data.phone, `tel:${data.phone}`)}` : ""}
            ${data.website ? `<br>${contactLine("Web", data.website, data.website)}` : ""}
          </div>
        </td>
      </tr>
      ${disclaimer ? `<tr><td colspan="2" style="padding:10px 0 0 0;"><div style="font-size:11px;line-height:1.35;color:#666666;max-width:560px;">${escapeHtml(disclaimer)}</div></td></tr>` : ""}
    `);
  },
};

