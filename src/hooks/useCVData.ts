export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

export interface CVData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  role: string;
  about: string;
  experiences: Experience[];
  education: Education[];
  skills: string[];
}