import { Project, Experience, Skill } from "../types/portfolio";

export const projects: Project[] = [
  {
    title: "Ehulak.tech",
    description:
      "Built an API-first email delivery platform that enables applications to send and track emails through a reliable queue → worker → inbox processing pipeline.",
    techStack: [
      "AWS EC2",
      "Node.js",
      "Kafka",
      "Redis",
      "BullMQ",
      "Docker",
      "Nginx",
      "MongoDB",
      "SMTP",
    ],
    liveLink: "https://ehulak.tech",
  },
  {
    title: "PassMyFiles.com",
    description:
      "Built a secure file-sharing platform enabling users to upload, store, and generate shareable links for large files.",
    techStack: [
      "Node.js",
      "Kafka",
      "Redis",
      "BullMQ",
      "AWS EC2",
      "AWS S3",
      "Docker",
      "Nginx",
    ],
    liveLink: "https://passmyfiles.com",
  },
  {
    title: "Ragat Nepal",
    description:
      "Built a real-time blood donor matching platform for emergency response scenarios used by over 3,000 users with 1,000+ Google Play downloads.",
    techStack: ["React Native", "PHP", "MySQL", "Expo"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.nepcode.ragatnepal",
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    organization: "Z1 Technologies (Z1 GPS)",
    location: "Bhairahawa, Nepal",
    duration: "Sep. 2023 – Jun. 2024",
    description: [
      "Developed a React Native mobile application using real-time data streaming via the Traccar API for continuous vehicle location updates.",
      "Implemented live map visualizations for streamed GPS coordinates, speed, distance, and route data.",
      "Integrated Firebase Cloud Messaging (FCM) for push notifications and remote vehicle control features in a production system integrated with over 1,000 vehicles.",
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
      "SQL (MySQL)",
      "PHP",
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
      "Nginx",
      "Kafka",
      "Redis",
      "BullMQ",
      "Firebase",
      "MongoDB",
    ],
  },
  {
    category: "Deployment",
    items: ["Amazon AWS EC2", "Digital Ocean Droplets", "Linode VPS"],
  },
  {
    category: "Strong Interest",
    items: ["Scalable Distributed System Development"],
  },
];

export const personalInfo = {
  name: "Sushil Bhattarai",
  title: "Computer Science & Mathematics Student",
  bio: "I study computer science and math at Southern Miss. Most of what I build is a queue, an API, or an app someone opens on their phone.",
  email: "sushilbhattarai2004@gmail.com",
  github: "https://github.com/sushilbhattarai45",
  linkedin: "https://linkedin.com/in/sushilbhattarai45",
  education: "University of Southern Mississippi",
  degree: "Computer Science and Mathematics",
  gpa: "4.00",
  duration: "Aug. 2025 – Present",
};
