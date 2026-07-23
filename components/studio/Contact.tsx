import { site } from "@/lib/studio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-10">
        <Reveal>
          <h2
            id="contact-heading"
            className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-none tracking-tight"
          >
            Say <em className="relative inline-block text-accent">
              olá.
              <svg
                aria-hidden="true"
                viewBox="0 0 120 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full"
                fill="none"
              >
                <path
                  d="M3 8 C 24 3, 46 10, 63 6 C 82 2, 101 9, 117 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </em>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
            Building something people-first, hanging a show, or just in San
            Francisco this summer? Write to me.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="ink-link mt-6 inline-block font-mono text-base font-bold text-ink sm:text-lg"
          >
            {site.email}
          </a>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
            <a href={site.linkedIn} target="_blank" rel="noopener noreferrer" className="ink-link">
              LinkedIn ↗
            </a>
            <a href={site.gitHub} target="_blank" rel="noopener noreferrer" className="ink-link">
              GitHub ↗
            </a>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="ink-link">
              Résumé ↗
            </a>
            <a href={site.wsj} target="_blank" rel="noopener noreferrer" className="ink-link">
              WSJ feature ↗
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
          <span>© 2026 {site.name}</span>
          <span>Maputo ↝ New Haven ↝ San Francisco</span>
          <span>drawn & built by hand</span>
        </div>
      </div>
    </footer>
  );
}
