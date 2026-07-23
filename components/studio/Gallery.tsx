"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryEpigraph, lakevilleWorks, maputoWorks, processShots, type Artwork } from "@/lib/studio";

function Wall({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-none flex-col justify-center lg:w-[44vw] lg:max-w-xl">
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.35em] text-room-soft">{kicker}</p>
      <h3 className="font-display text-4xl leading-[1.02] tracking-tight text-room-text sm:text-6xl">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Frame({ work, index }: { work: Artwork; index: number }) {
  const landscape = work.w >= work.h;
  return (
    <div className="flex w-full flex-none flex-col items-start gap-6 lg:w-auto lg:flex-row lg:items-center lg:gap-10">
      <figure className="spot relative w-full lg:w-auto">
        <div className="border border-[#2b2b29] bg-[#f4f2ec] p-2 shadow-[0_35px_70px_rgba(0,0,0,0.55)] sm:p-3">
          <div
            className={`relative w-full lg:w-auto ${landscape ? "lg:h-[56vh]" : "lg:h-[62vh]"}`}
            style={{ aspectRatio: `${work.w} / ${work.h}` }}
          >
            <Image
              src={work.src}
              alt={`${work.title} — ${work.medium.toLowerCase()}, ${work.year}`}
              fill
              sizes={landscape ? "(min-width: 1024px) 60vw, 92vw" : "(min-width: 1024px) 34vw, 92vw"}
              className="object-cover"
            />
          </div>
        </div>
        <figcaption className="mt-4 flex flex-col gap-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-room-soft">
            Nº {String(index).padStart(2, "0")}
          </span>
          <span className="font-display text-xl italic text-room-text sm:text-2xl">{work.title}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-room-soft">
            {work.year} · {work.medium} · {work.place}
            {work.size ? ` · ${work.size}` : ""}
          </span>
        </figcaption>
      </figure>
      {work.statement ? (
        <aside className="max-w-md border-l border-room-soft/25 pl-5 lg:w-[24ch] lg:max-w-none">
          <p className="text-sm leading-relaxed text-room-soft">{work.statement}</p>
        </aside>
      ) : null}
    </div>
  );
}

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.registerPlugin(ScrollTrigger);
        const track = trackRef.current!;
        track.classList.add("is-h");
        const amount = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -amount(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${amount()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progressRef.current) {
                gsap.set(progressRef.current, { scaleX: self.progress });
              }
            },
          },
        });

        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        const t = setTimeout(refresh, 600);
        return () => {
          window.removeEventListener("load", refresh);
          clearTimeout(t);
          track.classList.remove("is-h");
        };
      });
      return () => mm.revert();
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  let n = 0;

  return (
    <section id="gallery" aria-label="Art gallery" className="bg-room text-room-text">
      <div ref={sectionRef} className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="gallery-track flex w-full flex-col gap-24 px-5 py-24 sm:px-10"
        >
          {/* wall text — room I */}
          <Wall kicker="The art side · room I — Maputo" title={<>Before the code,<br /><em>the pencil.</em></>}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-room-soft">
              “{galleryEpigraph}”
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-room-soft">
              ten works · 2019 – 2021 · scroll to walk →
            </p>
          </Wall>

          {maputoWorks.map((w) => {
            n += 1;
            return <Frame key={w.slug} work={w} index={n} />;
          })}

          {/* wall text — room II */}
          <Wall kicker="Room II — Lakeville, Connecticut" title={<>I came back, but<br />you weren’t <em>there.</em></>}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-room-soft">
              Drawn at The Hotchkiss School and shown at the Troutbeck Symposium — a
              graphite conversation between W.E.B. Du Bois and my friend Jamil about
              double consciousness, a century apart.
            </p>
          </Wall>

          {lakevilleWorks.map((w) => {
            n += 1;
            return <Frame key={w.slug} work={w} index={n} />;
          })}

          {/* process wall — how a drawing happens */}
          <div className="flex w-full flex-none flex-col justify-center gap-10 lg:w-auto lg:flex-row lg:items-center lg:gap-14">
            <div className="max-w-xs">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-room-soft">
                How one happens
              </p>
              <p className="text-base leading-relaxed text-room-soft">
                Memorial Horizon, mid-flight. I keep the ugly middle stages —
                that’s where the drawing actually gets made.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 lg:flex-nowrap">
              {processShots.map((s, i) => (
                <figure
                  key={s.src}
                  className="w-[200px] flex-none bg-[#f4f2ec] p-2 pb-6 shadow-[0_20px_45px_rgba(0,0,0,0.5)] sm:w-[220px]"
                  style={{ transform: `rotate(${i % 2 === 0 ? -2.5 : 2}deg)` }}
                >
                  <div className="relative w-full" style={{ aspectRatio: `${s.w} / ${s.h}` }}>
                    <Image
                      src={s.src}
                      alt={`Memorial Horizon in progress — ${s.caption}`}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 px-1 font-mono text-[9px] leading-snug text-ink-soft">
                    {s.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* exit */}
          <div className="flex w-full flex-none flex-col justify-center lg:w-[36vw]">
            <p className="font-display text-4xl leading-tight text-room-text sm:text-5xl">
              The current medium
              <br />
              is <em>code</em>.
            </p>
            <a href="#work" className="ink-link mt-8 self-start font-mono text-sm font-bold text-room-text">
              keep walking →
            </a>
          </div>
        </div>

        {/* corridor progress hairline */}
        <div
          aria-hidden="true"
          className="absolute inset-x-[8vw] bottom-8 hidden h-px bg-room-soft/25 lg:block"
        >
          <div ref={progressRef} className="h-full origin-left scale-x-0 bg-room-text" />
        </div>
      </div>
    </section>
  );
}
