import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  bio: string;
}

interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  description: string;
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
  updatePersonalInfo: (info: PersonalInfo) => void;
  updateWorkExperiences: (experiences: WorkExperience[]) => void;
  updateSkills: (skills: string[]) => void;
  updateEducation: (education: Education[]) => void;
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
    bio: "",
  },
  workExperiences: [],
  skills: [],
  education: [],
};

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      ...initialState,
      updatePersonalInfo: (info) => set({ personalInfo: info }),
      updateWorkExperiences: (experiences) =>
        set({ workExperiences: experiences }),
      updateSkills: (skills) => set({ skills: skills }),
      updateEducation: (education) => set({ education: education }),
      resetStore: () => set(initialState),
    }),
    {
      name: "resume-storage",
    }
  )
);
