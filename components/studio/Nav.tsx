"use client";

import { site } from "@/lib/studio";

const links = [
  { label: "gallery", href: "#gallery" },
  { label: "code", href: "#work" },
  { label: "now", href: "#now" },
  { label: "olá", href: "#contact" },
];

export default function Nav() {
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    if (window.__lenis) {
      window.__lenis.scrollTo(el as HTMLElement, { offset: 0 });
    } else {
      el.scrollIntoView();
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav
        aria-label="Main"
        className="flex items-baseline justify-between px-5 py-4 text-[#e8e0d0] sm:px-8"
      >
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          className="font-display text-lg tracking-tight"
        >
          A–R<span className="text-accent">.</span>
        </a>
        <div className="flex items-baseline gap-5 font-mono text-[11px] uppercase tracking-[0.22em] sm:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="ink-link"
            >
              {l.label}
            </a>
          ))}
          <span className="hidden items-baseline gap-2 sm:flex" title={site.status}>
            <span
              aria-hidden="true"
              className="inline-block h-[7px] w-[7px] animate-pulse rounded-full bg-[#e8e0d0]"
            />
            SF
          </span>
        </div>
      </nav>
    </header>
  );
}
