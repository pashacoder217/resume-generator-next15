"use client";

import { ModernTemplate } from "@/templates/modern-template";
import { ProfessionalTemplate } from "@/templates/professional-template";
import { MinimalTemplate } from "@/templates/minimal-template";
import { useResumeStore } from "@/lib/store";

interface ResumePreviewProps {
  personalInfo: {
    name: string;
    role: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    bio: string;
  };
  workExperiences: {
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
  skills: string[];
  education: {
    school: string;
    degree: string;
    year: string;
  }[];
}

export function ResumePreview(props: Readonly<ResumePreviewProps>) {
  const selectedTemplate = useResumeStore((state) => state.selectedTemplate);

  const templates = {
    modern: ModernTemplate,
    professional: ProfessionalTemplate,
    minimal: MinimalTemplate,
  };

  const Template = templates[selectedTemplate];

  return <Template {...props} />;
}
