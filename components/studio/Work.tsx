import { experience, projects } from "@/lib/studio";
import Reveal from "./Reveal";

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-room-soft">
      <span className="select-none text-room-soft/70">allahu@hacker-house</span>
      <span className="select-none text-room-soft/50">:~/code$ </span>
      <span className="font-bold text-room-text">{children}</span>
    </p>
  );
}

function Tags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-[11px] leading-none text-room-soft/80">
      {tags.map((t) => (
        <span key={t} className="border border-room-soft/25 px-1.5 py-1">
          {t}
        </span>
      ))}
    </p>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="mx-auto w-full max-w-6xl px-5 py-28 sm:px-10"
    >
      <Reveal>
        <h2
          id="work-heading"
          className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent"
        >
          The tech side
        </h2>
        <p className="max-w-2xl font-mono text-4xl font-bold tracking-tight sm:text-6xl">
          ~/code
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-12 overflow-hidden border border-ink/25 bg-room text-room-text shadow-[0_30px_60px_rgba(18,18,17,0.28)]">
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-room-soft/20 bg-room-wall px-4 py-2.5">
            <span aria-hidden="true" className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border border-room-soft/60" />
              <span className="h-2.5 w-2.5 rounded-full border border-room-soft/60" />
              <span className="h-2.5 w-2.5 rounded-full border border-room-soft/60" />
            </span>
            <span className="ml-2 font-mono text-[11px] text-room-soft">
              allahu@hacker-house: ~/code — bash
            </span>
          </div>

          <div className="p-5 font-mono text-sm leading-relaxed sm:p-8">
            {/* projects */}
            <Prompt>ls projects/ --all</Prompt>
            <ul className="mb-2 mt-4">
              {projects.map((p) => {
                const Inner = (
                  <>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xs text-room-soft/70">{p.index}</span>
                      <span className="text-base font-bold text-room-text group-hover:underline">
                        {p.title}
                        {p.href ? (
                          <span className="ml-1 inline-block text-room-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            ↗
                          </span>
                        ) : null}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.15em] text-room-soft/70">
                        {p.year} · {p.meta}
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-room-soft">
                      {p.blurb}
                    </p>
                    <Tags tags={p.tech} />
                  </>
                );
                return (
                  <li key={p.index} className="group border-t border-room-soft/15 py-5 first:border-t-0">
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className="block">
                        {Inner}
                      </a>
                    ) : (
                      <div data-cursor>{Inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* experience */}
            <div className="mt-8">
              <Prompt>cat experience/*.md</Prompt>
            </div>
            <ul className="mt-4">
              {experience.map((e) => (
                <li key={e.slug} className="border-t border-room-soft/15 py-6 first:border-t-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-base font-bold text-room-text">
                      {e.role}
                      <span className="text-room-soft"> @ </span>
                      {e.href ? (
                        <a href={e.href} target="_blank" rel="noopener noreferrer" className="ink-link">
                          {e.org} ↗
                        </a>
                      ) : (
                        e.org
                      )}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-room-soft/70">
                      {e.period} · {e.place}
                    </span>
                  </div>
                  <ul className="mt-2.5 max-w-3xl space-y-1.5">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-room-soft">
                        <span aria-hidden="true" className="select-none text-room-soft/50">
                          -
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Tags tags={e.tech} />
                </li>
              ))}
            </ul>

            <p className="mt-6 text-room-soft" aria-hidden="true">
              <span className="text-room-soft/70">allahu@hacker-house</span>
              <span className="text-room-soft/50">:~/code$ </span>
              <span className="blink inline-block h-[1em] w-[0.55em] translate-y-[0.15em] bg-room-text" />
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <p className="font-mono text-xs text-ink-soft">
          also: flanker on Yale rugby, mentoring kids through Curious Cardinals,
          accessibility work on Yale’s assistive-tech team, one semester mapping
          neurons at the Kuan Lab — and FTC robotics back at Hotchkiss.
        </p>
      </Reveal>
    </section>
  );
}
