"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, FolderGit2, Heart, Timer } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { profile } from "@data/profile";
import { IconBox } from "@/components/ui/IconBox";

const icons = [FolderGit2, Timer, Code2, Heart] as const;

export function Stats() {
  return (
    <section className="stats-texture border-y border-border py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-0">
        {profile.stats.map((stat, index) => {
          const Icon = icons[index];
          return (
            <div
              key={stat.label}
              className="flex items-center gap-4 lg:justify-center lg:border-r lg:border-border lg:last:border-r-0"
            >
              <IconBox icon={Icon} />
              <div>
                <p className="text-3xl font-bold text-white">
                  <Counter value={stat.value} suffix={stat.suffix} decimals={"decimals" in stat ? stat.decimals : 0} />
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value * eased);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduce, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
