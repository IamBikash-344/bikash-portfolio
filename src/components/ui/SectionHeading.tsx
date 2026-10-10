type SectionHeadingProps = {
  label: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({ label, title, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-accent uppercase">
        {label}
      </p>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
        {title}
      </h2>
    </div>
  );
}
