import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type React from "react";

interface PersonalInfoFormProps {
  personalInfo: {
    name: string;
    role: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    bio: string;
  };
  setPersonalInfo: (info: any) => void;
}

export function PersonalInfoForm({
  personalInfo,
  setPersonalInfo,
}: PersonalInfoFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPersonalInfo((prev: any) => ({ ...prev, [name]: value }));
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
        <Textarea
          id="bio"
          name="bio"
          placeholder="Write a brief professional summary..."
          className="min-h-[100px]"
          value={personalInfo.bio}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
