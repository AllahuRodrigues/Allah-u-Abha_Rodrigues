export default function Marquee({
  items,
  speed = "42s",
  dark = false,
}: {
  items: string[];
  speed?: string;
  dark?: boolean;
}) {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span
          key={`${t}-${i}`}
          className={`flex items-center gap-8 whitespace-nowrap pr-8 font-mono text-xs uppercase tracking-[0.3em] ${
            dark ? "text-room-soft" : "text-ink-soft"
          }`}
        >
          {t}
          <span aria-hidden="true" className="text-accent">
            ✳
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden border-y py-3 ${
        dark ? "border-room-soft/20 bg-room-wall" : "border-line bg-paper-deep/60"
      }`}
    >
      <div className="marquee-track" style={{ "--speed": speed } as React.CSSProperties}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
