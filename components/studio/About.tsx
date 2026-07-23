"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutWords } from "@/lib/studio";

// The paragraph inks itself in, word by word, as you scroll through it.
export default function About() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
          "[data-word]",
          { opacity: 0.13 },
          {
            opacity: 1,
            stagger: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-ink]",
              start: "top 78%",
              end: "bottom 45%",
              scrub: true,
            },
          }
        );
      });
      return () => mm.revert();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="about-heading"
      className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-28 sm:px-10 lg:grid-cols-[1.7fr_1fr] lg:items-center"
    >
      <div>
        <h2
          id="about-heading"
          className="mb-8 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent"
        >
          The short version
        </h2>
        <p data-ink className="max-w-2xl font-body text-2xl leading-snug sm:text-[1.75rem]">
          {aboutWords.split(" ").map((w, i) => (
            <span key={i} data-word>
              {w}{" "}
            </span>
          ))}
        </p>
      </div>

      <div className="justify-self-center lg:justify-self-end">
        <figure className="drift" style={{ "--r": "2deg", "--t": "11s" } as React.CSSProperties}>
          <div className="relative w-[min(280px,70vw)] bg-[#fbf7ec] p-2.5 pb-9 shadow-[0_24px_50px_rgba(18,18,17,0.25)]">
            <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-2 bg-ink/15" />
            <Image
              src="/photos/yale-night.jpg"
              alt="Allah-u-Abha in a black suit at night, arms crossed, on Yale's campus"
              width={700}
              height={525}
              className="w-full object-cover"
            />
            <figcaption className="mt-2.5 px-1 font-mono text-[10px] leading-snug text-ink-soft">
              new haven, after dark
            </figcaption>
          </div>
        </figure>
        <figure className="relative z-10 -mt-10 ml-14">
          <div className="relative w-[min(240px,60vw)] rotate-[-4deg] bg-[#fbf7ec] p-2.5 pb-9 shadow-[0_24px_50px_rgba(18,18,17,0.25)]">
            <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-14 -translate-x-1/2 rotate-2 bg-ink/15" />
            <Image
              src="/photos/exhibition.jpg"
              alt="Allah-u-Abha standing beside his graphite portraits at an exhibition"
              width={640}
              height={512}
              className="w-full object-cover"
            />
            <figcaption className="mt-2.5 px-1 font-mono text-[10px] leading-snug text-ink-soft">
              opening night — “i came back, but you weren’t there”
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
