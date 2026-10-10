"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@data/profile";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (message.length < 10) nextErrors.message = "Message should be at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <SectionHeading label="LET'S WORK TOGETHER" title="Get In Touch" />
          <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
            {profile.contactIntro}
          </p>

          <ul className="mt-8 space-y-4">
            <ContactCard
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactCard
              icon={Phone}
              label="Phone"
              value={profile.phoneDisplay}
              href={`tel:+977${profile.phone}`}
            />
            <ContactCard icon={MapPin} label="Location" value={profile.location} />
          </ul>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Freelance Available
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            noValidate
          >
            <label className="block text-sm font-medium">
              Name
              <input
                name="name"
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent"
                placeholder="Your name"
              />
              {errors.name ? <span className="mt-1 block text-xs text-accent">{errors.name}</span> : null}
            </label>
            <label className="mt-4 block text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent"
                placeholder="you@email.com"
              />
              {errors.email ? <span className="mt-1 block text-xs text-accent">{errors.email}</span> : null}
            </label>
            <label className="mt-4 block text-sm font-medium">
              Message
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent"
                placeholder="Tell me about your project"
              />
              {errors.message ? (
                <span className="mt-1 block text-xs text-accent">{errors.message}</span>
              ) : null}
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-full bg-accent py-3 text-sm font-semibold text-black transition hover:bg-accent-hover disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" ? (
              <p className="mt-3 text-sm text-emerald-400">Thanks — I&apos;ll get back to you soon.</p>
            ) : null}
            {status === "error" ? (
              <p className="mt-3 text-sm text-accent">
                Could not send the message. Add your Formspree ID to `.env.local` and try again.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <IconBox icon={icon} />
      <div>
        <p className="text-xs tracking-widest text-muted uppercase">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </>
  );

  const className =
    "flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition hover:border-accent/40";

  if (href) {
    return (
      <li>
        <a href={href} className={className}>
          {content}
        </a>
      </li>
    );
  }

  return <li className={className}>{content}</li>;
}
