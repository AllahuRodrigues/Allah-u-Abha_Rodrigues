"use client";

import { useEffect, useRef } from "react";

// A single ink dot that trails the pointer and swells over interactive things.
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const dot = ref.current;
    if (!dot) return;

    let x = -100;
    let y = -100;
    let cx = -100;
    let cy = -100;
    let raf = 0;
    let running = false;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      dot.classList.toggle(
        "is-big",
        !!t.closest("a, button, [data-cursor]")
      );
    };
    const tick = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      dot.style.translate = `${cx}px ${cy}px`;
      if (Math.abs(x - cx) + Math.abs(y - cy) < 0.1) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-dot" aria-hidden="true" />;
}
