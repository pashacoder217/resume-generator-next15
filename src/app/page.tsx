"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PersonalInfoForm } from "@/components/molecules/personal-info-form";
import { WorkExperienceForm } from "@/components/molecules/work-experience-form";
import { SkillsEducationForm } from "@/components/molecules/skills-education-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResumePreview } from "@/components/molecules/resume-preview";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FileText, Download, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { useResumeStore } from "@/lib/store";
import { TemplateSelector } from "@/components/molecules/template-selector";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const [isPdfPreviewOpen, setIsPdfPreviewOpen] = useState(false);
  const { personalInfo, workExperiences, skills, education, resetStore } =
    useResumeStore();

  const handlePrint = () => {
    setIsPdfPreviewOpen(!isPdfPreviewOpen);
  };

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;

    // Capture full content, including overflow
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true, // Enable CORS if images are loaded
      windowWidth: element.scrollWidth, // Capture full width
      windowHeight: element.scrollHeight, // Capture full height
    });

    const imgData = canvas.toDataURL("image/png");

    // Initialize jsPDF
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let yPosition = 0;
    let remainingHeight = imgHeight;

    while (remainingHeight > 0) {
      pdf.addImage(imgData, "PNG", 0, yPosition, imgWidth, imgHeight);
      remainingHeight -= pageHeight;
      if (remainingHeight > 0) pdf.addPage();
      yPosition -= pageHeight;
    }

    pdf.save("download.pdf");
  };

  return (
    <main className="container mx-auto py-6 px-4 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Resume Generator</h1>
          <p className="text-muted-foreground">
            Create an ATS-friendly resume in minutes
          </p>
        </div>
        <div className="flex items-center gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="icon">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reset all data?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your resume data and reset to default values.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={resetStore}>
                  Reset
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <ThemeToggle />
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Choose a Template</h2>
            <p className="text-sm text-muted-foreground">
              Select a template that best suits your professional needs
            </p>
          </div>
          <div className="mt-4">
            <TemplateSelector />
          </div>
        </CardContent>
      </Card>

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
                  <PersonalInfoForm />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardContent className="pt-6">
                  <WorkExperienceForm />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="skills">
              <Card>
                <CardContent className="pt-6">
                  <SkillsEducationForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => handlePrint()}>
              <FileText className="mr-2 h-4 w-4" />
              Preview PDF
            </Button>

            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        <div
          ref={resumeRef}
          className="lg:sticky lg:top-6 lg:h-[calc(100vh-8rem)] lg:overflow-auto"
        >
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

      <Dialog open={isPdfPreviewOpen} onOpenChange={setIsPdfPreviewOpen}>
        <DialogContent className="max-w-screen-lg h-[90vh] overflow-auto">
          <div className="p-6 bg-white">
            <ResumePreview
              personalInfo={personalInfo}
              workExperiences={workExperiences}
              skills={skills}
              education={education}
            />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
