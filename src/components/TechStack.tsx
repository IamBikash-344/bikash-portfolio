import { skillGroups, skills } from "@data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStack() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading label="TECH STACK" title="Tools I work with every day" />
        </Reveal>

        <div className="mt-12 space-y-10">
          {skillGroups.map((group) => (
            <Reveal key={group}>
              <h3 className="mb-4 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
                {group}
              </h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {skills
                  .filter((skill) => skill.group === group)
                  .map((skill) => (
                    <li key={skill.name}>
                      <div className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-3 py-5 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_24px_rgba(255,90,0,0.16)]">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 font-mono text-xs font-bold text-accent transition group-hover:scale-110">
                          {skill.mark}
                        </span>
                        <span className="text-center text-sm text-soft">{skill.name}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
