"use client";

import { ArrowUp, Code2, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { profile } from "@data/profile";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <a href="#home" className="inline-flex items-center gap-2 text-lg font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-black">
              <Code2 size={18} aria-hidden />
            </span>
            BIKASH<span className="text-accent">DEV</span>
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted">{profile.footerTagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-white uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-white uppercase">Follow Me</h3>
          <div className="mt-4 flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-soft hover:border-accent hover:text-accent"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-soft hover:border-accent hover:text-accent"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-soft hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="mt-5 text-sm text-muted">{profile.availabilityNote}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <p className="text-xs text-muted">
            © {year} {profile.fullName}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent hover:bg-accent hover:text-black"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
