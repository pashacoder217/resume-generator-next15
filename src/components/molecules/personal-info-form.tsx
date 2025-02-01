"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RichTextEditor } from "@/components/molecules/rich-text-editor";
import { useResumeStore } from "@/lib/store";
import type React from "react";

export function PersonalInfoForm() {
  const { personalInfo, updatePersonalInfo } = useResumeStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updatePersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleBioChange = (content: string) => {
    updatePersonalInfo({ ...personalInfo, bio: content });
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={personalInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Current Role</Label>
          <Input
            id="role"
            name="role"
            placeholder="Software Engineer"
            value={personalInfo.role}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={personalInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={personalInfo.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn URL</Label>
          <Input
            id="linkedin"
            name="linkedin"
            placeholder="linkedin.com/in/johndoe"
            value={personalInfo.linkedin}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="github">GitHub URL</Label>
          <Input
            id="github"
            name="github"
            placeholder="github.com/johndoe"
            value={personalInfo.github}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Professional Summary</Label>
        <RichTextEditor content={personalInfo.bio} onChange={handleBioChange} />
      </div>
    </div>
  );
}
