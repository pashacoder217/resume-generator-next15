"use client";

import { PlusCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useResumeStore } from "@/lib/store";

export function SkillsEducationForm() {
  const { skills, education, updateSkills, updateEducation } = useResumeStore();
  const [newSkill, setNewSkill] = useState("");

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      updateSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    updateSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const addEducation = () => {
    updateEducation([...education, { school: "", degree: "", year: "" }]);
  };

  const updateEducationItem = (
    index: number,
    field: keyof (typeof education)[0],
    value: string
  ) => {
    const updatedEducation = education.map((edu, i) => {
      if (i === index) {
        return { ...edu, [field]: value };
      }
      return edu;
    });
    updateEducation(updatedEducation);
  };

  const removeEducation = (index: number) => {
    updateEducation(education.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Skills</Label>
        <form onSubmit={addSkill} className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill..."
          />
          <Button type="submit">
            <PlusCircle className="h-4 w-4" />
          </Button>
        </form>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="ml-1 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label>Education</Label>
        {education.map((edu, index) => (
          <div key={index} className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Education {index + 1}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeEducation(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`school-${index}`}>School</Label>
                <Input
                  id={`school-${index}`}
                  value={edu.school}
                  onChange={(e) =>
                    updateEducationItem(index, "school", e.target.value)
                  }
                  placeholder="University name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`degree-${index}`}>Degree</Label>
                <Input
                  id={`degree-${index}`}
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducationItem(index, "degree", e.target.value)
                  }
                  placeholder="Degree name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`year-${index}`}>Year</Label>
              <Input
                id={`year-${index}`}
                value={edu.year}
                onChange={(e) =>
                  updateEducationItem(index, "year", e.target.value)
                }
                placeholder="2020"
              />
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={addEducation}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Education
        </Button>
      </div>
    </div>
  );
}
