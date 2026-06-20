import { Project, Experience, Skill } from "../types/portfolio";

export const projects: Project[] = [
  {
    title: "Ehulak.tech",
    description:
      "API-first distributed email delivery platform with a reliable queue-to-worker-to-inbox pipeline, SMTP connection pooling, rate limiting, retries, DLQ recovery, and real-time lifecycle tracking.",
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
      "Secure file-sharing platform for uploading large files, storing them in AWS S3, generating shareable links, and processing background tasks through Kafka and BullMQ workers.",
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
      "Real-time blood donor matching platform for emergency response with location-based matching. Currently used by over 3000 users with 6000+ downloads.",
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
