import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

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

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
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
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  experienceItem: {
    marginBottom: 10,
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
  education: {
    marginBottom: 5,
  },
});

export function ResumePDF({
  personalInfo,
  workExperiences,
  skills,
  education,
}: ResumeProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.role}>{personalInfo.role}</Text>
          <Text style={styles.contact}>{personalInfo.email}</Text>
          <Text style={styles.contact}>{personalInfo.phone}</Text>
          <Text style={styles.contact}>{personalInfo.linkedin}</Text>
          <Text style={styles.contact}>{personalInfo.github}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.description}>{personalInfo.bio}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {workExperiences.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.role}>{exp.role}</Text>
              <Text style={styles.duration}>{exp.duration}</Text>
              <Text style={styles.description}>{exp.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skills}>
            {skills.map((skill, index) => (
              <Text key={index} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.education}>
              <Text style={styles.company}>{edu.school}</Text>
              <Text style={styles.description}>{edu.degree}</Text>
              <Text style={styles.duration}>{edu.year}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
