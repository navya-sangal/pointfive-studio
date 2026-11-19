/** Section label styled like a camera readout ("02 — How it works"), then the heading. */
export function SectionHeading({
  number,
  kicker,
  title,
  intro,
  id,
  tone = "light",
}: {
  number: string;
  kicker: string;
  title: string;
  intro?: string;
  id: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="max-w-3xl">
      <p
        className={`flex items-center gap-3 text-[13px] font-semibold tracking-[0.08em] uppercase ${
          dark ? "text-marigold" : "text-marigold-deep"
        }`}
      >
        <span className="tabular-nums">{number}</span>
        <span className={`h-px w-8 ${dark ? "bg-marigold/60" : "bg-marigold-deep/50"}`} aria-hidden="true" />
        {kicker}
      </p>
      <h2 id={id} className="mt-4 font-display text-[clamp(2.25rem,6.5vw,4rem)] leading-[1] tracking-[-0.02em]">
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-mist" : "text-ink-soft"}`}>{intro}</p>
      )}
    </div>
  );
}
