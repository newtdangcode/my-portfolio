import { Project } from "../types";

export const projectsData: Project[] = [
  {
    name: "BUILDING AN EXPLAINABLE AI-ENHANCED SURICATA IDS/IPS FOR DDOS ATTACK DETECTION AND PREVENTION",
    slug: "xai-suricata-ids",
    period: "09/2025 - 12/2025",
    type: "Graduation Project",
    description: [
      "Designed and deployed a high-performance IDS/IPS that combines Suricata with XAI for accurate, transparent, and automated DDoS mitigation.",
      "Developed an automated pipeline: Suricata Alerts → Traffic Capture (tcpdump) → Feature Extraction (CICFlowMeter) → AI Inference → Real-time Mitigation (iptables).",
      "Optimized detection performance by training Siamese Neural Networks (SNN) and XGBoost on the CIC-DDoS2019 dataset.",
      "Integrated SHAP (Explainable AI) to interpret model decisions, providing transparency for network administrators."
    ],
    technologies: ["Python", "PyTorch", "XGBoost", "Siamese Neural Network", "SHAP (XAI)", "Suricata", "Docker (macvlan)", "Grafana"],
    links: [
      { label: "Report link", url: "https://drive.google.com/file/d/1dgYmOZTnv5wNsOObBYe4frJL6KXCNKXp/view?usp=sharing" }
    ]
  },
  {
    name: "ENGLISH DICTIONARY APP",
    slug: "english-dictionary-app",
    period: "04/2025 - 06/2025",
    type: "Mobile Project",
    description: [
      "Built a comprehensive educational tool for vocabulary building.",
      "Handled Data Design, Android Mobile application development, and BackEnd API creation within a team of 5."
    ],
    technologies: ["Java", "Android SDK", "SQLite", "ExpressJS", "Mongodb", "JWT"],
    links: [
      { label: "App Source", url: "https://github.com/newtdangcode/english-dictionary" },
      { label: "Server Source", url: "https://github.com/newtdangcode/english-dictionary-api" }
    ]
  },
  {
    name: "SIUU STORE",
    slug: "siuu-store",
    period: "09/2024 - 11/2024",
    type: "MVC Web Project",
    description: [
      "A modern e-commerce solution with integrated payment gateways and dynamic inventory management.",
      "Responsible for both FrontEnd and BackEnd development in a team of 5."
    ],
    technologies: ["Spring Boot", "Spring Security", "Thymeleaf", "MySQL", "JWT", "TailwindCSS"],
    links: [
      { label: "Source code", url: "https://gitlab.com/siuuuuu/backend" }
    ]
  },
  {
    name: "COMPUTER ROOM SCHEDULE",
    slug: "computer-room-schedule",
    period: "04/2024 - 06/2024",
    type: "Client-Server Web Project",
    description: [
      "Led a team of 4 to design and develop a client-server web application for scheduling computer rooms.",
      "Handled project leadership, Database Design, FrontEnd, and BackEnd development."
    ],
    technologies: ["ReactJS", "TailwindCSS", "NestJS", "TypeORM", "MySQL", "JWT"],
    links: [
      { label: "Source code", url: "https://github.com/newtdangcode/Computer-Room-Schedule" }
    ]
  },
  {
    name: "MONAFRESH",
    slug: "monafresh",
    period: "03/2023 - 06/2023",
    type: "Client-Server Web Project",
    description: [
      "A website that helps manage and provide organic foods. Customers can manage profile, orders, and cart with real-time feedback.",
      "Managers can manage orders, products, and employees."
    ],
    technologies: ["Mongodb", "Expressjs", "Reactjs", "Nodejs", "JWT", "SocketIo"],
    links: [
      { label: "Source code", url: "https://github.com/newtdangcode/MonaFresh" }
    ]
  }
];
