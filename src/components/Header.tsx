import { site } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { Icon } from "./Icons";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" aria-label={site.labels.home} className="rounded-full">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[15px] text-ink-soft">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-black md:inline-flex"
        >
          <Icon name="whatsapp" size={18} className="text-marigold" />
          {site.navCta}
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}
