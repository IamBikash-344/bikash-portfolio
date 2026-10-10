import { Database, Layers, Monitor, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@data/services";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  monitor: Monitor,
  server: Server,
  layers: Layers,
  database: Database,
};

export function Services() {
  return (
    <section id="services" className="bg-bg-alt py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading label="WHAT I DO" title="Services I Offer" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_32px_rgba(255,90,0,0.14)]">
                <IconBox icon={icons[service.icon]} />
                <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
