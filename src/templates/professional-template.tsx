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

export function ProfessionalTemplate({
  personalInfo,
  workExperiences,
  skills,
  education,
}: Readonly<ResumeTemplateProps>) {
  return (
    <div className="prose prose-sm max-w-none dark:prose-invert space-y-6">
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {personalInfo.name || "Your Name"}
        </h1>
        <p className="text-xl font-medium text-primary">
          {personalInfo.role || "Your Role"}
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {personalInfo.email && <p> {personalInfo.email} | </p>}
          {personalInfo.phone && <p> {personalInfo.phone} | </p>}
          {personalInfo.linkedin && <p> {personalInfo.linkedin} | </p>}
          {personalInfo.github && <p> {personalInfo.github} | </p>}
        </div>
      </div>

      {personalInfo.bio && (
        <div className="mb-1">
          <h2 className="mb-1 text-lg font-bold capitalize tracking-wider text-primary">
            Professional Summary
          </h2>
          <p className="text-muted-foreground text-sm">
            {parse(personalInfo.bio)}
          </p>
        </div>
      )}

      {workExperiences.length > 0 && (
        <div className="space-y-4">
          <h2 className="mb-4 text-lg font-bold capitalize tracking-wider text-primary">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {workExperiences.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.duration}
                  </p>
                </div>
                <p className="font-medium text-primary">{exp.role}</p>
                <p className="mt-2 text-sm">{parse(exp.description)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {skills.length > 0 && (
        <div className="space-y-4">
          <h2 className="mb-4 text-lg font-bold capitalize tracking-wider text-primary">
            Technical Skills
          </h2>
          <p className="text-muted-foreground">{skills.join(" • ")}</p>
        </div>
      )}

      {education.length > 0 && (
        <div className="space-y-4">
          <h2 className="mb-4 text-lg font-bold capitalize tracking-wider text-primary">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </div>
                <p className="text-primary">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
