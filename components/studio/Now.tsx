import Image from "next/image";
import { site } from "@/lib/studio";
import Reveal from "./Reveal";

export default function Now() {
  return (
    <section
      id="now"
      aria-labelledby="now-heading"
      className="mx-auto w-full max-w-6xl px-5 py-28 sm:px-10"
    >
      <Reveal>
        <h2
          id="now-heading"
          className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent"
        >
          Right now · summer 2026
        </h2>
        <p className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          Living at the <em className="text-accent">Yale Hacker House</em>, San
          Francisco — building all day, most nights.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="grid grid-cols-2 gap-6 sm:gap-8">
          <Reveal delay={80} as="figure" className="mt-10">
            <div
              className="drift bg-[#fbf7ec] p-2 pb-8 shadow-[0_24px_50px_rgba(18,18,17,0.22)]"
              style={{ transform: "rotate(-3deg)", "--r": "-3deg", "--t": "11s" } as React.CSSProperties}
            >
              <Image
                src="/photos/hacker-house-yard.jpg"
                alt="Aerial view of the hacker house backyard, founders around a brunch table"
                width={630}
                height={840}
                className="w-full object-cover"
              />
              <figcaption className="mt-2 px-1 font-mono text-[10px] text-ink-soft">
                sunday, from the roof
              </figcaption>
            </div>
          </Reveal>
          <Reveal delay={180} as="figure">
            <div
              className="bg-[#fbf7ec] p-2 pb-8 shadow-[0_24px_50px_rgba(18,18,17,0.22)]"
              style={{ transform: "rotate(2.5deg)" }}
            >
              <Image
                src="/photos/golden-gate.jpg"
                alt="With friends in front of the Golden Gate Bridge on a foggy day"
                width={630}
                height={840}
                className="w-full object-cover"
              />
              <figcaption className="mt-2 px-1 font-mono text-[10px] text-ink-soft">
                obligatory bridge photo
              </figcaption>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10">
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft">
              Fifteen Yale founders, one Nob Hill house, ten weeks. My project is
              still under wraps — ask me over coffee. The house is how I ended up
              in The Wall Street Journal.
            </p>
          </Reveal>

          {/* the clipping */}
          <Reveal delay={220}>
            <a
              href={site.wsj}
              target="_blank"
              rel="noopener noreferrer"
              className="group block max-w-md border border-ink/25 bg-[#faf6ec] p-6 shadow-[0_18px_40px_rgba(27,23,18,0.16)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-[0.5deg] sm:p-8"
            >
              <p className="mb-4 border-b border-ink/15 pb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                As featured in — The Wall Street Journal
              </p>
              <p className="font-display text-2xl italic leading-snug sm:text-[1.7rem]">
                “Forget Wall Street. Elite Students Are Spending Their Summers on
                Startup Dreams.”
              </p>
              <p className="mt-5 font-mono text-xs font-bold text-accent">
                read the piece{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
