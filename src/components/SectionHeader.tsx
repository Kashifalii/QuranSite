type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-black sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[var(--ink-muted)]">{description}</p> : null}
      <div className={align === "center" ? "mx-auto mt-5 h-2 w-16 rounded-full bg-[var(--gold)]" : "mt-5 h-2 w-16 rounded-full bg-[var(--gold)]"} />
    </div>
  );
}
