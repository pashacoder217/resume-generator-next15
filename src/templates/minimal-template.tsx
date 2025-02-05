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

export function MinimalTemplate({
  personalInfo,
  workExperiences,
  skills,
  education,
}: Readonly<ResumeTemplateProps>) {
  return (
    <div className="prose space-y-6 prose-sm max-w-none dark:prose-invert">
      <div>
        <h1 className="mb-2 text-3xl font-bold">
          {personalInfo.name || "Your Name"}
        </h1>
        <p className="text-lg text-primary">
          {personalInfo.role || "Your Role"}
        </p>
        <div className="mt-1 text-sm text-muted-foreground">
          {[
            personalInfo.email,
            personalInfo.phone,
            personalInfo.linkedin,
            personalInfo.github,
          ]
            .filter(Boolean)
            .join(" • ")}
        </div>
      </div>

      {personalInfo.bio && (
        <div>
          <p className="text-sm">{parse(personalInfo.bio)}</p>
        </div>
      )}

      {workExperiences.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="space-y-4">
            {workExperiences.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.duration}
                  </p>
                </div>
                <p className="text-sm text-primary">{exp.company}</p>
                <p className="mt-1 text-sm">{parse(exp.description)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold">Skills</h2>
          <p className="text-sm text-muted-foreground">{skills.join(" • ")}</p>
        </div>
      )}

      {education.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </div>
                <p className="text-sm text-primary">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
