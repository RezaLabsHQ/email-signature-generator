import { SignatureData } from "../types";
import { getTemplateById } from "../templates";

export function buildSignatureHtml(templateId: string, data: SignatureData) {
  return getTemplateById(templateId).renderHtml(data);
}

