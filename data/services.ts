export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "monitor" | "server" | "layers" | "database";
};

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Responsive, accessible interfaces with React, Next.js, and Tailwind — pixel-accurate and fast on every screen.",
    icon: "monitor",
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description:
      "Secure REST APIs with Node.js and Express, including authentication, validation, and clean architecture.",
    icon: "server",
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Applications",
    description:
      "End-to-end products from UI to database, deployed on Vercel and built to scale with real users.",
    icon: "layers",
  },
  {
    id: "database",
    title: "Database Design & Integration",
    description:
      "Thoughtful MongoDB and MySQL schemas, queries, and integrations that keep your data reliable.",
    icon: "database",
  },
];
