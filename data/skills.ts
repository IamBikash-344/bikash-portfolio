export type SkillGroup = "Frontend" | "Backend" | "Database" | "Tools";

export type Skill = {
  name: string;
  group: SkillGroup;
  /** Short mark used on the logo tile */
  mark: string;
};

export const skills: Skill[] = [
  { name: "HTML5", group: "Frontend", mark: "5" },
  { name: "CSS3", group: "Frontend", mark: "3" },
  { name: "JavaScript", group: "Frontend", mark: "JS" },
  { name: "TypeScript", group: "Frontend", mark: "TS" },
  { name: "React", group: "Frontend", mark: "R" },
  { name: "Next.js", group: "Frontend", mark: "N" },
  { name: "Tailwind CSS", group: "Frontend", mark: "TW" },
  { name: "Node.js", group: "Backend", mark: "NJ" },
  { name: "Express.js", group: "Backend", mark: "EX" },
  { name: "REST APIs", group: "Backend", mark: "API" },
  { name: "JWT authentication", group: "Backend", mark: "JWT" },
  { name: "MongoDB", group: "Database", mark: "MG" },
  { name: "MySQL", group: "Database", mark: "SQL" },
  { name: "Git", group: "Tools", mark: "GIT" },
  { name: "GitHub", group: "Tools", mark: "GH" },
  { name: "Postman", group: "Tools", mark: "PM" },
  { name: "VS Code", group: "Tools", mark: "VS" },
  { name: "Figma", group: "Tools", mark: "FG" },
  { name: "Vercel", group: "Tools", mark: "▲" },
];

export const skillGroups: SkillGroup[] = ["Frontend", "Backend", "Database", "Tools"];
