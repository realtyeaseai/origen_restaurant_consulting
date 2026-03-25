"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const ARIA = { left: "Previous service", right: "Next service" };
const ACCENT = "#5c6b4b";

export default function AnimatedServices({ services }) {
  const safeServices = useMemo(() => services ?? [], [services]);
  const len = safeServices.length;

  const viewportRef = useRef(null);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  indexRef.current = index;

  const goTo = useCallback(
    (nextIndex, behavior = "smooth") => {
      const el = viewportRef.current;
      if (!el || len === 0) return;

      const i = ((nextIndex % len) + len) % len;
      setIndex(i);
      indexRef.current = i;

      const left = i * el.clientWidth;
      el.scrollTo({ left, behavior });
    },
    [len],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  // Keep the card aligned on resize (prevents half-visible cards).
  useEffect(() => {
    const el = viewportRef.current;
    if (!el || len === 0) return;

    const onResize = () => {
      el.scrollTo({ left: indexRef.current * el.clientWidth, behavior: "auto" });
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [len]);

  // Update active dot when user swipes/scrolls.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const width = el.clientWidth || 1;
        const next = Math.round(el.scrollLeft / width);
        const normalized = ((next % len) + len) % len;

        if (normalized !== indexRef.current) {
          indexRef.current = normalized;
          setIndex(normalized);
        }
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [len]);

  if (len === 0) return null;

  return (
    <div className="relative">
      <div
        ref={viewportRef}
        className="overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-full">
          {safeServices.map((item, i) => (
            <div key={`${item.title}-${i}`} className="w-full shrink-0 snap-start sm:px-4">
              <article className="w-full mx-0 sm:max-w-3xl sm:mx-auto overflow-hidden rounded-4xl border border-stone-200 bg-white shadow-sm hover:shadow-[0_18px_60px_rgba(0,0,0,0.10)] transition-shadow">
                {/* Image area */}
                <div className="relative w-full aspect-4/3 bg-stone-50">
                  {item.image ? (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority={i === index}
                        className="object-cover object-[50%_20%]"
                        sizes="(max-width: 639px) 100vw, (max-width: 1024px) 100vw, 768px"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold font-serif text-stone-300" aria-hidden>
                      {item.title.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">
                  {item.designation && (
                    <div className="inline-flex items-center rounded-full border border-[#5c6b4b]/20 bg-[#5c6b4b]/10 px-4 py-2 text-xs sm:text-sm font-semibold text-[#5c6b4b] tracking-wide uppercase">
                      {item.designation}
                    </div>
                  )}

                  <h3 className="mt-4 font-serif font-bold text-left text-2xl sm:text-3xl text-stone-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-left text-base text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {len > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label={ARIA.left}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full border border-stone-200 bg-white/90 backdrop-blur p-2 shadow-sm hover:border-[#5c6b4b]/30 hover:shadow-md transition"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label={ARIA.right}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full border border-stone-200 bg-white/90 backdrop-blur p-2 shadow-sm hover:border-[#5c6b4b]/30 hover:shadow-md transition"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {len > 1 && (
        <div className="flex items-center justify-center gap-3 mt-6">
          {safeServices.map((s, i) => (
            <button
              key={`${s.title}-${i}`}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to service ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all touch-manipulation ${
                i === index ? "w-10 bg-[#5c6b4b]" : "w-2.5 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
