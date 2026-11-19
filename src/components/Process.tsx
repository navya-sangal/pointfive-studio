import { site } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  const { process } = site;
  return (
    <section id="how-it-works" aria-labelledby="process-title" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="process-title" number="02" kicker={process.kicker} title={process.title} />

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {process.steps.map((step, i) => (
            <li key={step.name} className="reveal relative">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full border-2 border-ink font-display text-2xl">
                  {i + 1}
                </span>
                {i < process.steps.length - 1 && (
                  <span className="hidden h-px flex-1 border-t-2 border-dashed border-ink/25 md:block" aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-6 font-display text-[2rem] leading-none">{step.name}</h3>
              <p className="mt-3 inline-block rounded-full bg-marigold-wash px-3 py-1 text-[13px] font-semibold text-[#6b4600]">
                {step.time}
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
