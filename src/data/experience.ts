import { Experience } from "../types";

export const experienceData: Experience[] = [
  {
    company: "OTG Lab",
    role: "Software Engineer",
    period: "09/2025 - Present",
    description: "Developing web applications, working with the Singaporean operations team in English (mostly via messaging).",
    responsibilities: "Backend & Full Stack Development",
    skills: ["C#", "ASP.NET Core", "Laravel", "NestJS", "MySQL", "NeonDB (PostgreSQL)", "Hangfire", "Swagger", "JWT", "Figma", "OpenAI API", "Speechmatics", "Bitbucket", "GitHub Actions", "Docker"],
    projects: [
      {
        name: "Educational Website",
        description: "A classroom observation application that leverages Generative AI to automate the evaluation of teaching effectiveness. It processes session recordings to generate detailed reports on teacher-student interaction patterns, helping institutions scale their quality assurance efforts.",
        responsibilities: "Backend Developer (Architecting an AI-driven audio analysis platform, integrating advanced LLMs and media processing tools within a highly scalable .NET ecosystem.)",
        technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "Hangfire", "Multimedia & Data Processing", "Supabase", "MySQL", "OpenAI API", "Speechmatics API"]
      },
      {
        name: "Management System",
        description: "A scalable project management dashboard tailored for team collaboration and performance tracking. Initially prototyped with AI, the system was fully re-engineered to support complex business logic, featuring sophisticated rolebased access control (RBAC) and real-time data visualization.",
        responsibilities: "Full Stack (Leading the complete refactoring of the legacy codebase and migrating the persistence layer from Supabase to NeonDB. Architected a custom, secure authentication microservice using Supabase Edge Functions).",
        technologies: ["React (Vite)", "TypeScript", "Tailwind CSS", "Supabase Edge Functions (Deno)", "NeonDB (PostgreSQL)"]
      },
      {
        name: "F&B Management System",
        description: "A comprehensive F&B operation platform consisting of four integrated portals (Customer, Store, Driver, Admin) that streamlines the entire workflow from ordering to delivery. The system features real-time order synchronization, automated driver dispatching, and dynamic inventory management.",
        responsibilities: "Back-end Developer (Ensuring scalability and maintainability. Integrated Google Maps API for real-time driver tracking and route optimization. Developed a robust real-time communication layer using Socket.IO).",
        technologies: ["NestJS", "TypeScript", "PostgreSQL", "Google Maps API", "Socket.IO", "Firebase (FCM)", "Docker"]
      },
      {
        name: "DevOps Automation",
        description: "Designed and automated a continuous integration and continuous deployment (CI/CD) pipeline using GitHub Actions to streamline the application delivery process, from containerizing with Docker to enabling seamless deployment onto a remote VPS.",
        responsibilities: "Developed an automated CI/CD workflow to build, test, and containerize the NestJS application upon pushes to the staging branch. Secured environment variables and engineered robust SSH/SCP deployment scripts.",
        technologies: ["GitHub Actions", "Docker", "Ubuntu (VPS)", "Bash/Shell Scripting", "SSH/SCP"]
      }
    ]
  },
  {
    company: "Roomrise",
    role: "Freelance Backend Developer",
    period: "05/2025 - 08/2025",
    description: "A comprehensive Property Management System (PMS) designed to streamline hotel and property operations. It manages the entire lifecycle of bookings, housekeeping, inventory, and revenue reporting.",
    responsibilities: "Architecting scalable RESTful APIs using NestJS for complex booking logic and room availability management. Implementing real-time features with Server-Sent Events (SSE) and Firebase Cloud Messaging for instant updates.",
    skills: ["NestJS", "MySQL", "TypeORM", "Firebase (FCM)", "SSE", "Cron Jobs", "Swagger", "JWT", "Docker"],
    projects: [
      {
        name: "Property Management System (PMS)",
        description: "A comprehensive PMS that manages bookings, housekeeping, inventory, and revenue reporting. Features real-time communication and integration with OTAs via Channex.",
        responsibilities: "Back-end Developer (Architecting scalable RESTful APIs using NestJS for booking logic, implementing real-time updates with SSE and FCM, and optimizing DB performance).",
        technologies: ["NestJS", "MySQL", "TypeORM", "Firebase (FCM)", "SSE", "Swagger", "Docker"]
      }
    ]
  },
  {
    company: "TMA Solutions",
    role: "Front-end intern of social travel app",
    period: "06/2024 - 09/2024",
    description: "Member of scrum, Dev UI for some pages of 2 modules, fixbug of UI.",
    responsibilities: "Font-end developer (Angular)",
    skills: ["AngularJS", "GitLab", "Jira", "Figma", "Swagger"],
    projects: [
      {
        name: "Social Travel Application",
        description: "A social networking application focused on travel and interactive itineraries.",
        responsibilities: "Front-end Developer (Angular). Member of Scrum team, developed UI for multiple pages across 2 modules and resolved UI bugs.",
        technologies: ["AngularJS", "GitLab", "Jira", "Figma", "Swagger"]
      }
    ]
  },
  {
    company: "Lentor Mansion",
    role: "Freelance work in WordPress team",
    period: "01/2024 - 05/2024",
    description: "Contributing to premium residential website.",
    responsibilities: "WordPress Development",
    skills: ["Flatsome-Wordpress", "JavaScript", "CSS", "HTML"],
    projects: [
      {
        name: "Lentor Mansion Website",
        description: "Premium property portfolio website for Lentor Mansion. Live URL: https://lentor.antk.co/",
        responsibilities: "Freelance WordPress Developer. Configured Flatsome theme elements and adjusted visual styles using HTML/CSS/JS.",
        technologies: ["Flatsome-Wordpress", "JavaScript", "CSS", "HTML"]
      }
    ]
  }
];
