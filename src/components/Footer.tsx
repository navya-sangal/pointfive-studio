import { site } from "@/content/site";
import { emailLink } from "@/lib/links";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-night pb-24 text-paper md:pb-10">
      <div className="mx-auto max-w-6xl border-t border-white/10 px-5 pt-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-mist">{site.footer.line}</p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mist">{site.footer.nameNote}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[15px]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-mist transition-colors hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="col-span-2 mt-2">
                <a href={emailLink} className="break-all text-paper hover:text-marigold">
                  {site.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-[13px] text-mist">
          © {year} {site.name} · {site.domain}
        </p>
      </div>
    </footer>
  );
}
