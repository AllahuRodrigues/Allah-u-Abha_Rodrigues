import Image from "next/image";
import { snapshots } from "@/lib/studio";

// A slow film strip of life outside the editor. Pauses on hover.
export default function Strip() {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-8 pr-8">
      {snapshots.map((s, i) => (
        <figure
          key={`${s.src}-${hidden ? "b" : "a"}`}
          className="w-[220px] flex-none bg-[#fbf7ec] p-2 pb-7 shadow-[0_16px_36px_rgba(27,23,18,0.2)] sm:w-[260px]"
          style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
        >
          <div className="relative w-full" style={{ aspectRatio: `${s.w} / ${s.h}` }}>
            <Image
              src={s.src}
              alt={hidden ? "" : s.alt}
              fill
              sizes="260px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 px-1 font-mono text-[9px] leading-snug text-ink-soft">
            {s.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <section aria-label="Snapshots" className="marquee-paused overflow-hidden bg-paper-deep/50 py-16">
      <div className="marquee-track items-center" style={{ "--speed": "70s" } as React.CSSProperties}>
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
