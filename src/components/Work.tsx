import { site } from "@/content/site";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

/** A Lighthouse-style score ring. */
function Score({ label, sub, value }: { label: string; sub: string; value: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <li className="flex flex-col items-center text-center">
      <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true" className="-rotate-90">
        <circle cx="32" cy="32" r={r} fill="rgb(12 206 107 / 0.1)" stroke="rgb(12 206 107 / 0.2)" strokeWidth="5" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="var(--color-lighthouse)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * c} ${c}`}
        />
      </svg>
      <span className="-mt-[51px] mb-[23px] text-xl font-semibold text-lighthouse tabular-nums" aria-hidden="true">
        {value}
      </span>
      <span className="text-sm font-semibold text-paper">
        <span className="sr-only">
          {value} {site.labels.scoreOutOf}{" "}
        </span>
        {label}
      </span>
      {sub && <span className="text-[13px] text-mist">{sub}</span>}
    </li>
  );
}

export function Work() {
  const { work } = site;
  return (
    <section id="work" aria-labelledby="work-title" className="on-dark bg-night py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="work-title" number="04" kicker={work.kicker} title={work.heading} tone="dark" />

        <article className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Screenshots: laptop browser with a phone in front */}
          <div className="reveal relative pb-10 sm:pb-14">
            <div className="overflow-hidden rounded-2xl bg-night-2 ring-1 ring-white/10">
              <div className="flex items-center gap-1.5 px-4 py-3" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="ml-3 truncate rounded-full bg-white/10 px-3 py-0.5 text-xs text-mist">
                  {work.liveUrl.replace("https://", "")}
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized WebP files; a static host has no image server */}
              <img
                src="/work/kaapi-desktop-1280.webp"
                srcSet="/work/kaapi-desktop-640.webp 640w, /work/kaapi-desktop-1280.webp 1280w"
                sizes="(min-width: 1024px) 600px, 92vw"
                width={1280}
                height={800}
                alt={work.images.desktopAlt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>
            <div className="absolute right-3 bottom-0 w-[30%] max-w-[180px] overflow-hidden rounded-[22px] border-[5px] border-night-2 bg-night-2 shadow-[0_25px_50px_-20px_rgb(0_0_0/0.8)] sm:right-6">
              {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized WebP files; a static host has no image server */}
              <img
                src="/work/kaapi-mobile-480.webp"
                srcSet="/work/kaapi-mobile-240.webp 240w, /work/kaapi-mobile-480.webp 480w"
                sizes="180px"
                width={480}
                height={1039}
                alt={work.images.mobileAlt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-[17px]"
              />
            </div>
          </div>

          <div>
            <span className="inline-block rounded-full border border-marigold/60 px-3 py-1 text-[13px] font-semibold text-marigold">
              {work.tag}
            </span>
            <h3 className="mt-5 font-display text-[clamp(2.5rem,6vw,3.5rem)] leading-none">{work.title}</h3>
            <p className="mt-2 text-lg text-mist">{work.subtitle}</p>
            <p className="mt-6 text-[17px] leading-relaxed text-paper/90">{work.summary}</p>

            <ul className="mt-6 grid gap-2.5 text-[15px] sm:grid-cols-2">
              {work.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <Icon name="check" size={18} strokeWidth={2.25} className="mt-0.5 shrink-0 text-marigold" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-[24px] bg-night-2 p-6 ring-1 ring-white/10">
              <h4 className="text-[15px] font-semibold">{work.scoresTitle}</h4>
              <ul className="mt-5 grid grid-cols-2 gap-x-2 gap-y-6 min-[420px]:grid-cols-4">
                {work.scores.map((s) => (
                  <Score key={s.label} {...s} />
                ))}
              </ul>
              <p className="mt-5 text-[13px] text-mist">{work.scoresNote}</p>
            </div>

            <a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-4 font-semibold text-ink transition-colors hover:bg-[#f5b93f]"
            >
              {work.liveLabel}
              <Icon name="arrowUpRight" size={18} />
              <span className="sr-only">{site.labels.newTab}</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
