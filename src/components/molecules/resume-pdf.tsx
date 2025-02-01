import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { useResumeStore } from "@/lib/store";

interface ResumeProps {
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

const modernStyles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: "#666",
    marginBottom: 2,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  company: {
    fontSize: 12,
    fontWeight: "bold",
  },
  duration: {
    fontSize: 10,
    color: "#666",
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    marginBottom: 5,
  },
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skill: {
    fontSize: 10,
    backgroundColor: "#f0f0f0",
    padding: "3 6",
    borderRadius: 3,
  },
});

const professionalStyles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: "#444",
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: "#666",
    marginBottom: 2,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
    color: "#444",
  },
  company: {
    fontSize: 12,
    fontWeight: "bold",
  },
  duration: {
    fontSize: 10,
    color: "#666",
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    marginBottom: 5,
  },
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    fontSize: 10,
    marginRight: 5,
  },
  bullet: {
    fontSize: 10,
    marginHorizontal: 3,
  },
});

const minimalStyles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 3,
  },
  role: {
    fontSize: 14,
    color: "#444",
    marginBottom: 3,
  },
  contact: {
    fontSize: 10,
    color: "#666",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  company: {
    fontSize: 11,
    color: "#444",
  },
  duration: {
    fontSize: 10,
    color: "#666",
    marginBottom: 3,
  },
  description: {
    fontSize: 10,
    marginBottom: 5,
  },
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    fontSize: 10,
    marginRight: 5,
  },
  bullet: {
    fontSize: 10,
    marginHorizontal: 3,
  },
});

export function ResumePDF({
  personalInfo,
  workExperiences,
  skills,
  education,
}: ResumeProps) {
  const selectedTemplate = useResumeStore((state) => state.selectedTemplate);

  const styles = {
    modern: modernStyles,
    professional: professionalStyles,
    minimal: minimalStyles,
  }[selectedTemplate];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.role}>{personalInfo.role}</Text>
          <View style={styles.contact}>
            {personalInfo.email && (
              <Text style={styles.contact}>{personalInfo.email}</Text>
            )}
            {personalInfo.phone && (
              <Text style={styles.contact}>{personalInfo.phone}</Text>
            )}
            {personalInfo.linkedin && (
              <Text style={styles.contact}>{personalInfo.linkedin}</Text>
            )}
            {personalInfo.github && (
              <Text style={styles.contact}>{personalInfo.github}</Text>
            )}
          </View>
        </View>

        {personalInfo.bio && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.description}>{personalInfo.bio}</Text>
          </View>
        )}

        {workExperiences.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {workExperiences.map((exp, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={styles.company}>{exp.company}</Text>
                <Text style={styles.role}>{exp.role}</Text>
                <Text style={styles.duration}>{exp.duration}</Text>
                <Text style={styles.description}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skills}>
              {skills.map((skill, index) => (
                <Text key={index} style={styles.skill}>
                  {skill}
                  {index < skills.length - 1 && (
                    <Text style={styles.bullet}>•</Text>
                  )}
                </Text>
              ))}
            </View>
          </View>
        )}

        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, index) => (
              <View key={index} style={{ marginBottom: 5 }}>
                <Text style={styles.company}>{edu.school}</Text>
                <Text style={styles.description}>{edu.degree}</Text>
                <Text style={styles.duration}>{edu.year}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
