import { Project, Experience, Skill } from "../types/portfolio";

export const projects: Project[] = [
  {
    title: "E-Med Nepal",
    description:
      "Full-stack centralized medical record platform enabling secure access to patient history across hospitals with scannable digital health card system.",
    techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
    liveLink: "https://e-med-nepal.vercel.app",
    badge: "National Hackathon Winner",
  },
  {
    title: "SoulLog",
    description:
      "AI-powered journaling platform that analyzes emotional patterns and provides personalized mood-based music recommendations using Gemini AI.",
    techStack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Gemini AI",
      "Docker",
    ],
    liveLink: "https://soullog.vercel.app",
  },
  {
    title: "Ragat Nepal",
    description:
      "Real-time blood donor matching platform for emergency response with location-based matching. Currently used by over 3000 users with 6000+ downloads.",
    techStack: ["React Native", "PHP", "MySQL", "Expo"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.nepcode.ragatnepal",
  },
  {
    title: "Voice Pet",
    description:
      "Voice-controlled web application processing real-time audio input for AI-driven responses with secure storage.",
    techStack: ["React", "Appwrite", "NLP API"],
    liveLink: "https://voicepet.vercel.app",
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    organization: "Z1 Technologies (Z1 GPS)",
    location: "Bhairahawa, Nepal",
    duration: "Sep. 2023 – Jun. 2024",
    description: [
      "Developed a React Native mobile application using real-time data streaming via the Traccar API for continuous vehicle location updates.",
      "Implemented live map visualizations for streamed GPS coordinates, speed, distance, and route data.",
      "Integrated Firebase Cloud Messaging (FCM) for push notifications and remote vehicle control features in a production system used by over 10,000 users.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    organization: "University of Southern Mississippi",
    location: "Hattiesburg, MS, United States",
    duration: "Sep. 2025 – Present",
    description: [
      "Developing a machine learning model to improve accuracy and consistency in clinical audiology assessments.",
      "Building a Python-based speech recognition pipeline to automate and standardize clinical testing workflows.",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C/C++",
      "SQL",
      "PHP",
      "HTML/CSS",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "React Native", "Expo"],
  },
  {
    category: "Tools & Technologies",
    items: [
      "Git",
      "Docker",
      "Firebase",
      "MongoDB",
      "Google Cloud Platform",
      "Appwrite",
    ],
  },
];

export const personalInfo = {
  name: "Sushil Bhattarai",
  title: "Computer Engineering Student",
  bio: "A passionate Computer Engineering student at the University of Southern Mississippi with a 4.0 GPA. I specialize in building full-stack applications, mobile apps, and AI-powered solutions. Winner of a national-level hackathon and experienced in developing production systems used by thousands of users.",
  email: "sushilbhattarai2004@gmail.com",
  github: "https://github.com/sushilbhattarai45",
  linkedin: "https://linkedin.com/in/sushilbhattarai45",
  education: "University of Southern Mississippi",
  degree: "Bachelor of Science in Computer Engineering",
  gpa: "4.00",
  duration: "Aug. 2025 – Present",
};
