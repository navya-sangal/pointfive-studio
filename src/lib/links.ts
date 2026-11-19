import { site } from "@/content/site";

/** A wa.me link that opens WhatsApp with a message already typed. */
export function whatsappLink(message: string = site.whatsapp.message) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const emailLink = `mailto:${site.email}`;

/** 14999 → "₹14,999" (Indian digit grouping). */
export function rupees(amount: number) {
  return `₹${new Intl.NumberFormat("en-IN").format(amount)}`;
}
