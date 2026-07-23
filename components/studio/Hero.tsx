"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/studio";

const line1 = ["Allah-u-Abha"];
const line2 = ["Rodrigues"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Gentle parallax on the two taped artworks as the hero scrolls away.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("[data-float='a']", {
          yPercent: -26,
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to("[data-float='b']", {
          yPercent: -60,
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
      return () => mm.revert();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-24 pt-28 sm:px-10"
    >
      {/* depth-0 · ghost word on the far wall */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <span className="absolute right-1 top-20 font-display text-[21vw] leading-none text-ink/[0.05] sm:top-8">
          olá
        </span>
        <span className="absolute -left-6 bottom-4 font-mono text-[10px] uppercase tracking-[0.4em] text-ink/20 [writing-mode:vertical-rl] sm:left-3">
          25°58′S 32°35′E — Maputo
        </span>
      </div>

      {/* depth-2 · two works taped to the air (hidden on small screens) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <figure
          data-float="a"
          className="absolute right-[7%] top-[16%] w-[240px]"
          style={{ transform: "rotate(5deg)" }}
        >
          <div
            className="drift bg-[#fbf7ec] p-2 pb-8 shadow-[0_18px_40px_rgba(18,18,17,0.22)]"
            style={{ "--t": "10s" } as React.CSSProperties}
          >
            <span className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-2 bg-ink/15 backdrop-blur-[1px]" />
            <Image
              src="/art/capulana.jpg"
              alt=""
              width={480}
              height={344}
              className="w-full object-cover"
            />
            <figcaption className="mt-2 px-1 font-mono text-[9px] tracking-wide text-ink-soft">
              capulana · pencil · 2020
            </figcaption>
          </div>
        </figure>
        <figure
          data-float="b"
          className="absolute bottom-[12%] right-[19%] w-[170px]"
          style={{ transform: "rotate(-6deg)" }}
        >
          <div
            className="drift bg-[#fbf7ec] p-2 pb-7 shadow-[0_18px_40px_rgba(18,18,17,0.22)]"
            style={{ "--t": "12s" } as React.CSSProperties}
          >
            <span className="absolute -top-3 left-1/2 h-6 w-14 -translate-x-1/2 -rotate-3 bg-ink/15 backdrop-blur-[1px]" />
            <Image
              src="/art/soft-mornings.jpg"
              alt=""
              width={340}
              height={450}
              className="w-full object-cover"
            />
            <figcaption className="mt-2 px-1 font-mono text-[9px] tracking-wide text-ink-soft">
              soft mornings · acrylic · 2019
            </figcaption>
          </div>
        </figure>
      </div>

      {/* depth-4 · the words */}
      <div className="relative max-w-5xl">
        <p
          className="fade-up mb-6 inline-flex items-center gap-2 border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-soft sm:text-[11px]"
          style={{ "--d": "0.1s" } as React.CSSProperties}
        >
          <span aria-hidden="true" className="inline-block h-[7px] w-[7px] animate-pulse rounded-full bg-ink" />
          now · {site.status}
        </p>

        <h1 className="font-display leading-[0.94] tracking-tight">
          <span className="block text-[clamp(3.2rem,11.5vw,9.5rem)]">
            {line1.map((w, i) => (
              <span key={w} className="rise" style={{ "--d": `${0.15 + i * 0.12}s` } as React.CSSProperties}>
                {w}
              </span>
            ))}
          </span>
          <span className="block text-[clamp(3.2rem,11.5vw,9.5rem)] italic text-accent">
            {line2.map((w, i) => (
              <span key={w} className="rise" style={{ "--d": `${0.35 + i * 0.12}s` } as React.CSSProperties}>
                {w}
              </span>
            ))}
          </span>
        </h1>

        <p
          className="fade-up mt-8 max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl"
          style={{ "--d": "0.65s" } as React.CSSProperties}
        >
          Yale senior — B.S. in Computer Science + Statistics &amp; Data
          Science. First person from Mozambique to attend Yale. This summer:
          building a startup at the Yale Hacker House, San Francisco.
        </p>

        <div
          className="fade-up mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          style={{ "--d": "0.85s" } as React.CSSProperties}
        >
          <a href="#gallery" className="ink-link font-mono text-sm font-bold text-ink">
            the gallery is downstairs ↓
          </a>
          <a
            href={site.wsj}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-link font-mono text-xs uppercase tracking-[0.18em] text-ink-soft"
          >
            featured in The Wall Street Journal ↗
          </a>
        </div>
      </div>
    </section>
  );
}
