import { site } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { Icon } from "./Icons";

/** Floating WhatsApp button on phones and tablets (the header has one on larger screens). */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={site.labels.whatsappFab}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 grid size-14 place-items-center rounded-full bg-ink text-marigold shadow-[0_12px_30px_-8px_rgb(30_30_30/0.6)] ring-2 ring-paper md:hidden"
    >
      <Icon name="whatsapp" size={28} strokeWidth={1.6} />
    </a>
  );
}
