"use client";

import { PlusCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RichTextEditor } from "@/components/molecules/rich-text-editor";
import { useResumeStore } from "@/lib/store";

export function WorkExperienceForm() {
  const { workExperiences, updateWorkExperiences } = useResumeStore();

  const addExperience = () => {
    updateWorkExperiences([
      ...workExperiences,
      { company: "", role: "", duration: "", description: "<p></p>" },
    ]);
  };

  const removeExperience = (index: number) => {
    updateWorkExperiences(workExperiences.filter((_, i) => i !== index));
  };

  const updateExperience = (
    index: number,
    field: keyof (typeof workExperiences)[0],
    value: string
  ) => {
    const updatedExperiences = workExperiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    updateWorkExperiences(updatedExperiences);
  };

  return (
    <div className="space-y-6">
      {workExperiences.map((experience, index) => (
        <div key={index} className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Work Experience {index + 1}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeExperience(index)}
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`company-${index}`}>Company</Label>
              <Input
                id={`company-${index}`}
                value={experience.company}
                onChange={(e) =>
                  updateExperience(index, "company", e.target.value)
                }
                placeholder="Company name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`role-${index}`}>Role</Label>
              <Input
                id={`role-${index}`}
                value={experience.role}
                onChange={(e) =>
                  updateExperience(index, "role", e.target.value)
                }
                placeholder="Job title"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`duration-${index}`}>Duration</Label>
            <Input
              id={`duration-${index}`}
              value={experience.duration}
              onChange={(e) =>
                updateExperience(index, "duration", e.target.value)
              }
              placeholder="Jan 2020 - Present"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${index}`}>Description</Label>
            <RichTextEditor
              content={experience.description}
              onChange={(content) =>
                updateExperience(index, "description", content)
              }
            />
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={addExperience}
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Work Experience
      </Button>
    </div>
  );
}
