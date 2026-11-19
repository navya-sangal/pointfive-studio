import { site } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { Icon } from "./Icons";
import { LensScene } from "./LensScene";
import { LensSwitch } from "./LensSwitch";

export function Hero() {
  const { hero, lens } = site;
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-10 pb-16 sm:px-8 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pt-20 lg:pb-28">
        <div>
          <p className="flex items-start gap-2.5 text-sm leading-snug font-semibold text-marigold-deep">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-marigold" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-[clamp(3rem,11vw,5.6rem)] leading-[0.92] tracking-[-0.025em]">
            {hero.titleStart} <em className="highlight">{hero.titleHighlight}</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{hero.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 font-semibold text-paper transition-colors hover:bg-black"
            >
              <Icon name="whatsapp" size={20} className="text-marigold" />
              {hero.primaryCta}
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/80 px-6 py-4 font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              {hero.secondaryCta}
              <Icon name="arrowRight" size={18} />
            </a>
          </div>
          <p className="mt-4 text-sm text-ink-soft">{hero.note}</p>
        </div>

        <div className="mx-auto w-full max-w-[460px] lg:max-w-none">
          <LensSwitch levels={lens.levels} label={lens.label}>
            <LensScene />
          </LensSwitch>
        </div>
      </div>
    </section>
  );
}
