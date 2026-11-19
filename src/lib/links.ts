import { site } from "@/content/site";

/** A wa.me link that opens WhatsApp with a message already typed. */
export function whatsappLink(message: string = site.enquiry.message) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** A mailto: link, optionally with the subject and message already typed. */
export function emailLink(subject?: string, message?: string) {
  const params = [
    subject && `subject=${encodeURIComponent(subject)}`,
    message && `body=${encodeURIComponent(message)}`,
  ].filter(Boolean);
  return `mailto:${site.email}${params.length ? `?${params.join("&")}` : ""}`;
}

/**
 * The main "get in touch" button: WhatsApp when `site.whatsapp.enabled` is true, email otherwise.
 * Returns everything a button needs: link, icon, labels and whether it opens in a new tab.
 */
export function contactLink(subject: string = site.enquiry.subject, message: string = site.enquiry.message) {
  if (site.whatsapp.enabled) {
    return { href: whatsappLink(message), icon: "whatsapp", newTab: true, label: site.contactCta.whatsapp } as const;
  }
  return { href: emailLink(subject, message), icon: "mail", newTab: false, label: site.contactCta.email } as const;
}

/** Attributes for links that open in a new tab (WhatsApp, Instagram, live sites). */
export function newTabProps(newTab: boolean) {
  return newTab ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

/** Fills {name} and {price} in a message from site.ts. */
export function fill(text: string, values: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? `{${key}}`);
}

/** 14999 → "₹14,999" (Indian digit grouping). */
export function rupees(amount: number) {
  return `₹${new Intl.NumberFormat("en-IN").format(amount)}`;
}
