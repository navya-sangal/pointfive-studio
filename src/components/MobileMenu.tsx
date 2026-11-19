"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { contactLink, newTabProps } from "@/lib/links";
import { Icon } from "./Icons";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const contact = contactLink();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 grid size-11 place-items-center rounded-full text-ink"
      >
        <Icon name={open ? "close" : "menu"} size={24} />
        <span className="sr-only">{open ? site.labels.closeMenu : site.labels.openMenu}</span>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-line bg-paper px-5 pt-2 pb-6 shadow-[0_18px_30px_-20px_rgb(30_30_30/0.35)]"
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-line">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-[28px] leading-none"
                >
                  {item.label}
                  <Icon name="arrowRight" size={20} className="text-ink-soft" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={contact.href}
          {...newTabProps(contact.newTab)}
          onClick={() => setOpen(false)}
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 font-semibold text-paper"
        >
          <Icon name={contact.icon} size={20} className="text-marigold" />
          {contact.label.short}
        </a>
      </div>
    </div>
  );
}
