import type { LucideIcon } from "lucide-react";

type IconBoxProps = {
  icon: LucideIcon;
  className?: string;
};

export function IconBox({ icon: Icon, className = "" }: IconBoxProps) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent ${className}`}
    >
      <Icon size={20} strokeWidth={1.8} aria-hidden />
    </span>
  );
}
