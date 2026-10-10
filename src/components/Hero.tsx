"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { Code2, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { useReducedMotion } from "framer-motion";
import { profile } from "@data/profile";

function TypingRole() {
  const roles = profile.typingRoles;
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(roles[0]);
      return;
    }

    const current = roles[index];
    const speed = deleting ? 40 : 85;

    const timer = window.setTimeout(() => {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);

      if (!deleting && next === current) {
        window.setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && next === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => window.clearTimeout(timer);
  }, [deleting, index, reduce, roles, text]);

  return (
    <p className="mt-4 min-h-[1.6em] text-sm font-medium tracking-[0.35em] text-white uppercase sm:text-base">
      {text}
      <span className="typing-cursor" aria-hidden />
    </p>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="hero-glow relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:min-h-screen lg:pb-10"
    >
      <div className="pointer-events-none absolute top-24 right-[8%] h-40 w-40 opacity-40 dot-grid" />
      <div className="pointer-events-none absolute bottom-16 left-[6%] h-24 w-24 opacity-30 dot-grid" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
        <div className="relative z-10 min-w-0 text-center lg:text-left">
          <p className="text-lg text-soft">
            Hello, I&apos;m <span aria-hidden>👋</span>
          </p>
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.2rem] xl:leading-[0.95]">
            BIKASH{" "}
            <span className="text-accent">KHILING</span>
          </h1>
          <TypingRole />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base lg:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-hover"
            >
              View My Work
            </a>
            <a
              href={profile.resume}
              download
              className="rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-black"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs tracking-[0.22em] text-muted uppercase">Find me on</p>
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <Social href={profile.github} label="GitHub">
                <GitHubIcon />
              </Social>
              <Social href={profile.linkedin} label="LinkedIn">
                <LinkedInIcon />
              </Social>
              <Social href={`mailto:${profile.email}`} label="Email">
                <Mail size={18} />
              </Social>
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-[360px] w-[280px] sm:h-[420px] sm:w-[320px] lg:h-[460px] lg:w-[340px] xl:h-[480px] xl:w-[360px]">
          <div className="absolute top-[10%] right-[-6%] h-[78%] w-[82%] rotate-[12deg] rounded-[36px] bg-accent" />
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 380 480"
            fill="none"
            aria-hidden
          >
            <path
              d="M40 400 C 40 170, 300 70, 350 30"
              stroke="#ff5a00"
              strokeWidth="2.5"
              className="opacity-80"
            />
          </svg>
          <div className="absolute inset-x-2 top-6 bottom-8 z-10 overflow-hidden rounded-[36px] border border-border shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
            <Image
              src={profile.photo}
              alt={`${profile.fullName}, Full-Stack Web Developer`}
              fill
              priority
              sizes="(max-width: 768px) 280px, 380px"
              className="object-cover object-[80%_70%]"
            />
          </div>
          <div className="absolute bottom-6 left-[-8px] z-20 flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.45)] sm:left-[-24px]">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-black">
              <Code2 size={18} aria-hidden />
            </span>
            <p className="text-sm font-semibold leading-tight">
              {profile.experienceBadge}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-soft transition hover:border-accent hover:text-accent hover:shadow-[0_0_18px_rgba(255,90,0,0.35)]"
    >
      {children}
    </a>
  );
}
