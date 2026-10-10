import {
  BriefcaseBusiness,
  CircleCheck,
  Mail,
  MapPin,
  UserRound,
  Wallet,
} from "lucide-react";
import { profile } from "@data/profile";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const facts = [
  { icon: UserRound, label: "Name", value: profile.fullName },
  { icon: BriefcaseBusiness, label: "Experience", value: profile.experience },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: CircleCheck, label: "Availability", value: profile.availability },
  { icon: Wallet, label: "Freelance", value: profile.freelance },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading
            label="ABOUT ME"
            title="A developer who builds complete digital products, front to back."
          />
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
            {profile.bio}
          </p>
          <p className="mt-8 font-script text-5xl text-accent">{profile.firstName}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {facts.map((fact) => (
              <article
                key={fact.label}
                className="rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/50 hover:shadow-[0_0_28px_rgba(255,90,0,0.12)]"
              >
                <IconBox icon={fact.icon} />
                <p className="mt-4 text-xs tracking-widest text-muted uppercase">{fact.label}</p>
                {fact.href ? (
                  <a
                    href={fact.href}
                    className="mt-1 block truncate text-sm font-medium text-white hover:text-accent"
                  >
                    {fact.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-white">{fact.value}</p>
                )}
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
