import { site } from "@/content/site";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

/** Plain HTML <details>, so the answers open and close without any JavaScript. */
export function Faq() {
  const { faq } = site;
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="faq-title" number="05" kicker={faq.kicker} title={faq.title} />
        </div>

        <div className="border-t border-line">
          {faq.items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg leading-snug font-semibold">
                {item.q}
                <span className="faq-icon mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-ink/30 transition-transform duration-300">
                  <Icon name="plus" size={16} strokeWidth={2} />
                </span>
              </summary>
              <p className="-mt-1 max-w-2xl pb-7 text-[17px] leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
