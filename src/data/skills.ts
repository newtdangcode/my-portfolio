import { SkillCategory } from "../types";

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Java", "PHP", "Python", "C++"],
    topSkills: [
      { name: "JavaScript", progress: "95%" },
      { name: "TypeScript", progress: "90%" },
      { name: "Java", progress: "85%" },
      { name: "PHP", progress: "80%" },
    ]
  },
  {
    title: "Frontend & UI",
    skills: ["ReactJS", "NextJS", "Angular", "VueJS", "TailwindCSS", "HTML", "CSS", "Thymeleaf", "Figma"],
    topSkills: [
      { name: "HTML / CSS", progress: "95%" },
      { name: "ReactJS", progress: "90%" },
      { name: "NextJS", progress: "90%" },
      { name: "Angular", progress: "80%" },
    ]
  },
  {
    title: "Backend Core",
    skills: ["NestJS", "ExpressJS", "Spring Boot", "Laravel", "MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    topSkills: [
      { name: "NestJS", progress: "95%" },
      { name: "Laravel", progress: "90%" },
      { name: "MySQL / Postgres", progress: "85%" },
      { name: "ExpressJS", progress: "80%" },
      { name: "Spring Boot", progress: "75%" },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "GitHub Actions", "Git", "Linux", "VMware", "Postman", "Bitbucket", "Jira", "Swagger"],
    topSkills: [
      { name: "Git / GitHub", progress: "90%" },
      { name: "Docker", progress: "85%" },
      { name: "GitHub Actions", progress: "85%" },
    ]
  }
];
