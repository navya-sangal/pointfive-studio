import { contactLink, newTabProps } from "@/lib/links";
import { Icon } from "./Icons";

/**
 * Floating contact button on phones (the header has one on larger screens).
 * A round WhatsApp button when WhatsApp is switched on in site.ts, otherwise an "Email us" pill.
 */
export function ContactFab() {
  const contact = contactLink();
  const position =
    "fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 bg-ink text-marigold shadow-[0_12px_30px_-8px_rgb(30_30_30/0.6)] ring-2 ring-paper md:hidden";

  if (contact.icon === "whatsapp") {
    return (
      <a
        href={contact.href}
        {...newTabProps(contact.newTab)}
        aria-label={contact.label.floating}
        className={`${position} grid size-14 place-items-center rounded-full`}
      >
        <Icon name="whatsapp" size={28} strokeWidth={1.6} />
      </a>
    );
  }

  return (
    <a
      href={contact.href}
      {...newTabProps(contact.newTab)}
      className={`${position} inline-flex h-12 items-center gap-2 rounded-full pr-5 pl-4 font-semibold`}
    >
      <Icon name={contact.icon} size={20} />
      <span className="text-paper">{contact.label.floating}</span>
    </a>
  );
}
