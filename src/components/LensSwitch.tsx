"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Level = { id: string; pill: string; active: string; name: string; caption: string };

/**
 * The camera-style zoom switch in the hero. The page loads at 1× (one Instagram post),
 * then pulls back to 0.5× to show the whole set-up. Visitors can tap the pills to switch.
 * People who prefer reduced motion get the wide view straight away, with no animation.
 */
export function LensSwitch({
  levels,
  label,
  children,
}: {
  levels: readonly Level[];
  label: string;
  children: ReactNode;
}) {
  const [zoom, setZoom] = useState("standard");
  const touched = useRef(false);
  const frame = useRef<HTMLDivElement>(null);

  // Pull back to 0.5× once the lens is on screen (on phones it starts below the fold).
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(
          () => {
            if (!touched.current) setZoom("wide");
          },
          reduce ? 0 : 700,
        );
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const current = levels.find((l) => l.id === zoom) ?? levels[0];

  return (
    <figure className="relative">
      {/* The phone camera: the picture on top, the zoom pills in the dark strip below it,
          so the pills never cover the scene at any zoom level or screen size. */}
      <div className="on-dark rounded-[32px] bg-night p-2 shadow-[0_30px_60px_-30px_rgb(30_30_30/0.45)]">
        <div ref={frame} className="lens">
          <div className="lens-scene" data-zoom={zoom} aria-hidden="true">
            {children}
          </div>

          {/* Viewfinder corners */}
          <span className="viewfinder absolute inset-[5%] z-10 text-white/80 [--vf-len:22px]" aria-hidden="true" />
        </div>

        {/* Zoom pills, like the camera app */}
        <div
          role="group"
          aria-label={label}
          className="mx-auto my-2 flex w-fit items-center gap-0.5 rounded-full bg-white/[0.07] p-1"
        >
          {levels.map((level) => {
            const on = level.id === zoom;
            return (
              <button
                key={level.id}
                type="button"
                aria-pressed={on}
                aria-label={level.name}
                onClick={() => {
                  touched.current = true;
                  setZoom(level.id);
                }}
                className="group grid size-11 place-items-center rounded-full"
              >
                <span
                  className={`grid place-items-center rounded-full font-semibold tabular-nums transition-all duration-300 ${
                    on
                      ? "size-10 bg-black/60 text-[13px] text-marigold"
                      : "size-8 bg-white/10 text-[12px] text-white group-hover:bg-white/20"
                  }`}
                >
                  {on ? level.active : level.pill}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <figcaption aria-live="polite" className="mt-4 min-h-[3em] text-[15px] leading-snug text-ink-soft">
        {current.caption}
      </figcaption>
      <noscript>
        <style>{`.lens-scene{transform:none!important}`}</style>
      </noscript>
    </figure>
  );
}
