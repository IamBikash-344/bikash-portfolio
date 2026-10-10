export type ProjectStatus = "completed" | "in-progress";

export type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  status: ProjectStatus;
  repoReady: boolean;
};

export const projects: Project[] = [
  {
    id: "student-registration-form",
    title: "Student Registration Form",
    description:
      "A clean, responsive web form that lets students register online, with input validation and clear feedback on submission.",
    features: [
      "Required-field and format validation",
      "User-friendly error messages",
      "Responsive layout for mobile and desktop",
      "Success confirmation on submit",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    image: "/projects/p1.png",
    githubUrl: "https://github.com/IamBikash-344/student-registration-form",
    liveUrl: "https://student-registration-form-codeex.vercel.app",
    featured: true,
    status: "completed",
    repoReady: true,
  },
  {
    id: "shopoco-ecommerce",
    title: "SHOP.CO E-commerce Store",
    description:
      "A modern clothing e-commerce storefront where users browse products, filter by style, and add items to their cart. It is a demo store built to practice full e-commerce flows.",
    features: [
      "Product listing and detail pages",
      "Sorting and style filters",
      "New Arrivals and Top Selling sections",
      "Add-to-cart",
      "Responsive mobile-first design",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/p2.png",
    githubUrl: "https://github.com/IamBikash-344/shopoco-ecommerce",
    liveUrl: "https://shopoco-ecommerce.vercel.app/",
    featured: true,
    status: "completed",
    repoReady: true,
  },
  {
    id: "study-mate-ai",
    title: "Study Mate AI",
    description:
      "An AI-powered study helper that summarizes long text so students can read and understand material faster.",
    features: [
      "AI text summarization",
      "Easy reading experience",
      "Simple and focused interface",
    ],
    techStack: ["JavaScript", "AI API"],
    image: "/projects/p3.png",
    githubUrl: "https://github.com/IamBikash-344/study-mate-ai-",
    featured: false,
    status: "completed",
    repoReady: true,
  },
  {
    id: "viva-decor",
    title: "Viva Decor",
    description:
      "A responsive home-decor website that presents products and services with a clean, welcoming design.",
    features: [
      "Responsive multi-section layout",
      "Smooth navigation",
      "Mobile-friendly design",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/p4.png",
    githubUrl: "https://github.com/IamBikash-344/vivadecor",
    featured: false,
    status: "completed",
    repoReady: true,
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    description:
      "A hotel management web application for handling rooms, bookings, and guests.",
    features: ["Room listing", "Booking management", "Guest records"],
    // Update this list in data/projects.ts once the stack is finalized.
    techStack: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/p5.png",
    githubUrl: "https://github.com/IamBikash-344/Hotel-Management-",
    featured: false,
    status: "in-progress",
    repoReady: false,
  },
];
