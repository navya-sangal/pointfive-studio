import { site } from "@/content/site";
import { Icon, type IconName } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const { services } = site;
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="services-title" number="01" kicker={services.kicker} title={services.title} intro={services.intro} />

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {services.items.map((item) => (
            <li
              key={item.name}
              className="reveal group relative rounded-[28px] border border-line bg-card p-7 transition-shadow hover:shadow-[0_24px_50px_-30px_rgb(30_30_30/0.35)] sm:p-9"
            >
              <span
                className="viewfinder absolute inset-3 text-marigold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="grid size-12 place-items-center rounded-full bg-ink text-marigold" aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.01em]">{item.name}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{item.pitch}</p>
              <ul className="mt-6 grid gap-2.5 border-t border-line pt-6 text-[15px]">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <Icon name="check" size={18} strokeWidth={2.25} className="mt-0.5 shrink-0 text-marigold-deep" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
