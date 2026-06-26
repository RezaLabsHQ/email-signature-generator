import { SignatureTemplate } from "../types";
import { academicResearchTemplate } from "./academicResearch";
import { basicAcademicTemplate } from "./basicAcademic";
import { compactProfessionalTemplate } from "./compactProfessional";
import { executiveBrandedTemplate } from "./executiveBranded";
import { photoProfileTemplate } from "./photoProfile";
import { professionalMinimalTemplate } from "./professionalMinimal";

export const signatureTemplates: SignatureTemplate[] = [
  basicAcademicTemplate,
  academicResearchTemplate,
  professionalMinimalTemplate,
  compactProfessionalTemplate,
  photoProfileTemplate,
  executiveBrandedTemplate,
];

export function getTemplateById(id: string) {
  return signatureTemplates.find((template) => template.id === id) ?? signatureTemplates[0];
}
