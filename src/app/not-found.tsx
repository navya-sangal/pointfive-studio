import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-xl flex-col items-start justify-center px-5 py-20">
      <Logo />
      <h1 className="mt-10 font-display text-6xl leading-none">{site.notFound.title}</h1>
      <p className="mt-4 text-lg text-ink-soft">{site.notFound.text}</p>
      <Link href="/" className="mt-8 rounded-full bg-ink px-6 py-4 font-semibold text-paper">
        {site.notFound.cta}
      </Link>
    </main>
  );
}
