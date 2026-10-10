"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { projects, type Project } from "@data/projects";
import { profile } from "@data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="bg-bg-alt py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading label="FEATURED PROJECTS" title="Selected Work" />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              View All Projects
              <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} featured onOpen={() => setActive(project)} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      {active ? <ProjectModal project={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
  onOpen,
}: {
  project: Project;
  featured?: boolean;
  onOpen: () => void;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-accent/40 hover:shadow-[0_0_32px_rgba(255,90,0,0.12)]">
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
        aria-label={`Open details for ${project.title}`}
      >
        <div className={`relative overflow-hidden ${featured ? "h-64 sm:h-72" : "h-44"}`}>
          <ProjectImage project={project} />
          {project.status === "in-progress" ? (
            <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-black">
              In Progress
            </span>
          ) : null}
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs text-soft"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </button>
      <div className="flex flex-wrap gap-3 px-5 pb-5 sm:px-6">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black"
          >
            Live Demo <ExternalLink size={14} aria-hidden />
          </a>
        ) : null}
        {project.repoReady ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-soft hover:border-accent hover:text-accent"
          >
            GitHub <GitHubIcon size={14} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a120c_0%,#2a1810_45%,#ff5a00_160%)]" />
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold tracking-widest text-white/70 uppercase">
          {project.title}
        </div>
      ) : (
        // Native img so a missing screenshot falls back to the gradient instead of breaking the page.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
          onError={() => setFailed(true)}
        />
      )}
    </>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl border border-border bg-surface p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="project-modal-title" className="text-2xl font-bold text-white">
            {project.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border p-2 text-soft hover:text-white"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>
        </div>
        <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
        <h4 className="mt-6 text-sm font-semibold tracking-widest text-accent uppercase">
          Features
        </h4>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-soft">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <h4 className="mt-6 text-sm font-semibold tracking-widest text-accent uppercase">
          Tech Stack
        </h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech} className="rounded-full border border-border px-3 py-1 text-xs">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black"
            >
              Live Demo
            </a>
          ) : null}
          {project.repoReady ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
