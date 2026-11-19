import { site } from "@/content/site";

/**
 * The logo: "0.5" in a circle, like the zoom button in a phone's camera app.
 * `tone="dark"` is for charcoal backgrounds.
 */
export function LogoMark({ tone = "light", size = 36 }: { tone?: "light" | "dark"; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full font-bold tracking-[-0.04em] text-marigold ${
        tone === "light" ? "bg-ink" : "bg-night-2 ring-1 ring-white/10"
      }`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      0.5
    </span>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark tone={tone} />
      <span className="text-[17px] leading-none font-semibold tracking-[-0.01em]">
        {site.shortName}{" "}
        <span className={`font-normal ${tone === "light" ? "text-ink-soft" : "text-mist"}`}>Studio</span>
      </span>
    </span>
  );
}
