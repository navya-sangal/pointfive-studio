import { site } from "@/content/site";
import { rupees, whatsappLink } from "@/lib/links";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Packages() {
  const { packages } = site;
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="pricing-title" number="03" kicker={packages.kicker} title={packages.title} intro={packages.intro} />

        <ul className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {packages.items.map((pkg) => {
            const dark = pkg.featured;
            const price = rupees(pkg.price);
            return (
              <li
                key={pkg.name}
                className={`reveal relative flex flex-col rounded-[28px] p-7 sm:p-8 ${
                  dark ? "on-dark bg-night text-paper shadow-[0_30px_60px_-30px_rgb(30_30_30/0.6)]" : "border border-line bg-card"
                }`}
              >
                {dark && (
                  <span className="viewfinder absolute inset-3 text-marigold [--vf-len:20px]" aria-hidden="true" />
                )}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-[2.4rem] leading-none">{pkg.name}</h3>
                  {pkg.featured && (
                    <span className="rounded-full bg-marigold px-3 py-1 text-[13px] font-semibold text-ink">
                      {packages.featuredLabel}
                    </span>
                  )}
                </div>
                <p className={`mt-3 text-[15px] leading-relaxed ${dark ? "text-mist" : "text-ink-soft"}`}>{pkg.bestFor}</p>

                <p className="mt-7 flex flex-wrap items-baseline gap-x-2">
                  <span className={`text-[15px] ${dark ? "text-mist" : "text-ink-soft"}`}>{packages.pricePrefix}</span>
                  <span className={`text-[2.6rem] leading-none font-semibold tracking-[-0.03em] tabular-nums ${dark ? "text-marigold" : ""}`}>
                    {price}
                  </span>
                  <span className={`text-[15px] ${dark ? "text-mist" : "text-ink-soft"}`}>{packages.priceSuffix}</span>
                </p>
                <p className={`mt-2 text-sm font-semibold ${dark ? "text-paper" : "text-marigold-deep"}`}>{pkg.time}</p>

                <ul className={`mt-7 grid flex-1 content-start gap-3 border-t pt-7 text-[15px] ${dark ? "border-white/15" : "border-line"}`}>
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Icon
                        name="check"
                        size={18}
                        strokeWidth={2.25}
                        className={`mt-0.5 shrink-0 ${dark ? "text-marigold" : "text-marigold-deep"}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(
                    `Hi Point Five Studio! I'm interested in the ${pkg.name} package (from ${price}). Can we talk about my business?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold transition-colors ${
                    dark
                      ? "bg-marigold text-ink hover:bg-[#f5b93f]"
                      : "border border-ink/80 hover:bg-ink hover:text-paper"
                  }`}
                >
                  {packages.ctaPrefix} {pkg.name}
                  <Icon name="arrowRight" size={18} />
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">{packages.footnote}</p>
      </div>
    </section>
  );
}
