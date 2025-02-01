"use client";

import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PersonalInfoForm } from "@/components/molecules/personal-info-form";
import { WorkExperienceForm } from "@/components/molecules/work-experience-form";
import { SkillsEducationForm } from "@/components/molecules/skills-education-form";
import { ResumePDF } from "@/components/molecules/resume-pdf";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResumePreview } from "@/components/molecules/resume-preview";
import { ThemeToggle } from "@/components/molecules/theme-toggle";

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

export default function ResumePage() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    bio: "",
  });
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [education, setEducation] = useState<Education[]>([]);

  return (
    <main className="container mx-auto py-6 px-4 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Resume Generator</h1>
          <p className="text-muted-foreground">
            Create an ATS-friendly resume in minutes
          </p>
        </div>
        <ThemeToggle />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills & Education</TabsTrigger>
            </TabsList>
            <TabsContent value="personal">
              <Card>
                <CardContent className="pt-6">
                  <PersonalInfoForm
                    personalInfo={personalInfo}
                    setPersonalInfo={setPersonalInfo}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardContent className="pt-6">
                  <WorkExperienceForm
                    workExperiences={workExperiences}
                    setWorkExperiences={setWorkExperiences}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="skills">
              <Card>
                <CardContent className="pt-6">
                  <SkillsEducationForm
                    skills={skills}
                    setSkills={setSkills}
                    education={education}
                    setEducation={setEducation}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <PDFDownloadLink
              document={
                <ResumePDF
                  personalInfo={personalInfo}
                  workExperiences={workExperiences}
                  skills={skills}
                  education={education}
                />
              }
              fileName={`${personalInfo.name
                .toLowerCase()
                .replace(/\s+/g, "-")}-resume.pdf`}
            >
              {({ loading }) => (
                <Button disabled={loading}>
                  {loading ? "Generating PDF..." : "Download Resume"}
                </Button>
              )}
            </PDFDownloadLink>
          </div>
        </div>

        <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-8rem)] lg:overflow-auto">
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <ResumePreview
                personalInfo={personalInfo}
                workExperiences={workExperiences}
                skills={skills}
                education={education}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
