import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  validateString,
  validateHTML,
  validateArray,
  validateObject,
} from "@/lib/utils";

export type TemplateType = "modern" | "professional" | "minimal";

interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  bio: string; // This will now contain HTML
}

interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  description: string; // This will now contain HTML
}

interface Education {
  school: string;
  degree: string;
  year: string;
}

interface ResumeStore {
  personalInfo: PersonalInfo;
  workExperiences: WorkExperience[];
  skills: string[];
  education: Education[];
  selectedTemplate: TemplateType;
  updatePersonalInfo: (info: PersonalInfo) => void;
  updateWorkExperiences: (experiences: WorkExperience[]) => void;
  updateSkills: (skills: string[]) => void;
  updateEducation: (education: Education[]) => void;
  updateTemplate: (template: TemplateType) => void;
  resetStore: () => void;
}

const initialState = {
  personalInfo: {
    name: "",
    role: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    bio: "<p></p>",
  },
  workExperiences: [],
  skills: [],
  education: [],
  selectedTemplate: "modern" as TemplateType,
};

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      ...initialState,
      updatePersonalInfo: (info) => {
        const validatedInfo = {
          ...validateObject(info, initialState.personalInfo),
          bio: validateHTML(info.bio),
        };
        set({ personalInfo: validatedInfo });
      },
      updateWorkExperiences: (experiences) => {
        const validatedExperiences = validateArray(experiences).map((exp) => ({
          ...exp,
          description: validateHTML(exp.description),
        }));
        set({ workExperiences: validatedExperiences });
      },
      updateSkills: (skills) => set({ skills: validateArray(skills) }),
      updateEducation: (education) =>
        set({ education: validateArray(education) }),
      updateTemplate: (template) =>
        set({
          selectedTemplate:
            (validateString(template) as TemplateType) ||
            initialState.selectedTemplate,
        }),
      resetStore: () => set(initialState),
    }),
    {
      name: "resume-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.personalInfo = {
            ...validateObject(state.personalInfo, initialState.personalInfo),
            bio: validateHTML(state.personalInfo.bio),
          };
          state.workExperiences = validateArray(state.workExperiences).map(
            (exp) => ({
              ...exp,
              description: validateHTML(exp.description),
            })
          );
          state.skills = validateArray(state.skills);
          state.education = validateArray(state.education);
          state.selectedTemplate =
            (validateString(state.selectedTemplate) as TemplateType) ||
            initialState.selectedTemplate;
        }
      },
    }
  )
);
