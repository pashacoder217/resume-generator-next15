import { Badge } from "@/components/ui/badge";
import parse from "html-react-parser";

interface ResumeTemplateProps {
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

export function ModernTemplate({
  personalInfo,
  workExperiences,
  skills,
  education,
}: Readonly<ResumeTemplateProps>) {
  return (
    <div className="no-prose space-y-6 prose-sm max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">
          {personalInfo.name || "Your Name"}
        </h1>
        <p className="text-xl text-muted-foreground">
          {personalInfo.role || "Your Role"}
        </p>
        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.linkedin && <p>{personalInfo.linkedin}</p>}
          {personalInfo.github && <p>{personalInfo.github}</p>}
        </div>
      </div>

      {personalInfo.bio && (
        <div className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold">Professional Summary</h2>
          <p className="mt-3 text-muted-foreground">
            {parse(personalInfo.bio)}
          </p>
        </div>
      )}

      {workExperiences.length > 0 && (
        <div className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold">Work Experience</h2>
          <div className="mt-3 space-y-6">
            {workExperiences.map((exp, index) => (
              <div key={index}>
                <h3 className="font-semibold">{exp.company}</h3>
                <p className="text-muted-foreground">{exp.role}</p>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
                <p className="mt-2 text-sm">{parse(exp.description)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {skills.length > 0 && (
        <div className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {education.length > 0 && (
        <div className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="mt-3 space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold">{edu.school}</h3>
                <p className="text-muted-foreground">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
