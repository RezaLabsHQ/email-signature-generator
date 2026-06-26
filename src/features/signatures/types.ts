export type SignatureCategory = "academic" | "professional" | "advanced";

export type DisclaimerRegion = "none" | "au" | "us" | "eu";

export type SignatureData = {
  fullName: string;
  pronouns: string;
  role: string;
  department: string;
  organization: string;
  degree: string;
  studentId: string;
  researchArea: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  linkedin: string;
  github: string;
  orcid: string;
  googleScholar: string;
  bookingUrl: string;
  photoUrl: string;
  logoUrl: string;
  accentColor: string;
  disclaimerRegion: DisclaimerRegion;
};

export type SignatureTemplate = {
  id: string;
  name: string;
  category: SignatureCategory;
  description: string;
  supportsPhoto: boolean;
  supportsLogo: boolean;
  renderHtml: (data: SignatureData) => string;
};

