import { site } from "@/content/site";
import { contactLink, emailLink, newTabProps } from "@/lib/links";
import { Icon } from "./Icons";

const outlineButton =
  "inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 px-7 py-4 text-lg font-semibold transition-colors hover:border-paper hover:bg-paper hover:text-ink";

export function Contact() {
  const { contact } = site;
  const main = contactLink();
  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark relative overflow-hidden bg-night text-paper">
      {/* A giant zoom button, cropped by the edge of the section */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 hidden size-[420px] place-items-center rounded-full border border-white/10 font-bold tracking-[-0.05em] text-[150px] text-white/[0.04] md:grid"
      >
        0.5×
      </span>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="flex items-center gap-3 text-[13px] font-semibold tracking-[0.08em] text-marigold uppercase">
          <span className="tabular-nums">06</span>
          <span className="h-px w-8 bg-marigold/60" aria-hidden="true" />
          {contact.kicker}
        </p>
        <h2 id="contact-title" className="mt-4 max-w-3xl font-display text-[clamp(2.75rem,8vw,5rem)] leading-[0.95] tracking-[-0.02em]">
          {contact.title}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">{contact.text}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={main.href}
            {...newTabProps(main.newTab)}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-marigold px-7 py-4 text-lg font-semibold text-ink transition-colors hover:bg-[#f5b93f]"
          >
            <Icon name={main.icon} size={22} />
            {main.label.long}
          </a>
          {site.whatsapp.enabled && (
            <a href={emailLink(site.enquiry.subject, site.enquiry.message)} className={outlineButton}>
              <Icon name="mail" size={22} />
              {contact.emailLabel}
            </a>
          )}
          <a href={site.instagram.url} {...newTabProps(true)} className={outlineButton}>
            <Icon name="instagram" size={22} />
            {/* On phones the icon stands in for the word, so the handle fits on one line. */}
            <span className="max-sm:sr-only">{contact.instagramLabel}</span>
            <span className="sm:font-normal sm:opacity-75">{site.instagram.handle}</span>
            <span className="sr-only">{site.labels.newTab}</span>
          </a>
        </div>
        <p className="mt-6 text-[15px] text-mist">
          {contact.note}{" "}
          <a href={emailLink()} className="break-all text-paper underline decoration-marigold underline-offset-4">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
