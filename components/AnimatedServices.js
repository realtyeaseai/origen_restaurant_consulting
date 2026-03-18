"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    filter: "blur(8px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    filter: "blur(8px)",
    transition: { duration: 0.25 },
  }),
};

const iconBgClasses = [
  "bg-[#5c6b4b]/15 text-[#5c6b4b]",
  "bg-stone-200 text-stone-700",
  "bg-stone-300 text-stone-800",
  "bg-[#5c6b4b]/20 text-[#4a5840]",
];

export default function AnimatedServices({ services }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (nextIndex) => {
      const len = services.length;
      const i = ((nextIndex % len) + len) % len;
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    },
    [services.length, index],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  const item = services[index];
  if (!item) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="relative min-h-0 md:min-h-[400px]">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative md:absolute md:inset-0 flex flex-col md:flex-row gap-4 md:gap-10 items-center md:items-stretch border border-stone-200 rounded-2xl p-4 md:p-6 bg-white shadow-sm overflow-visible md:overflow-hidden isolate"
          >
            {/* Left: image or icon - explicit stacking so it never renders behind card */}
            <div className="shrink-0 relative z-10 w-full md:w-2/5 max-w-[200px] sm:max-w-sm md:max-w-none aspect-square md:aspect-4/3 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
              {(item.image ?? item.src) ? (
                <img
                  src={item.image ?? item.src}
                  alt=""
                  className="w-full h-full object-contain"
                />
              ) : (
                <div
                  className={`w-full h-full flex items-center justify-center text-5xl md:text-6xl font-semibold ${iconBgClasses[index % iconBgClasses.length]}`}
                  aria-hidden
                >
                  {item.icon ?? item.title.charAt(0)}
                </div>
              )}
            </div>

            {/* Right: content - explicit stacking, scrollable description on small screens if needed */}
            <div className="flex flex-col justify-center text-center md:text-left min-w-0 flex-1 md:pl-6 md:relative relative z-10">
              <div
                className="absolute left-0 top-4 bottom-4 hidden md:block w-px bg-stone-200"
                aria-hidden
              />
              <cite className="not-italic font-semibold text-[#5c6b4b] text-xl md:text-2xl block mb-2">
                {item.title}
              </cite>
              {item.designation && (
                <p className="text-sm text-stone-500 mb-4">
                  {item.designation}
                </p>
              )}
              <blockquote className="text-base sm:text-lg text-stone-700 leading-relaxed md:max-h-80 md:overflow-y-auto overflow-x-hidden pr-2 flex-1 min-h-0">
                {item.description}
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots + arrows - larger touch targets on mobile */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
        <button
          type="button"
          onClick={goPrev}
          className="p-3 sm:p-2 cursor-pointer rounded-full border-2 border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-[#5c6b4b] hover:text-[#5c6b4b] active:bg-stone-100 transition-colors touch-manipulation"
          aria-label="Previous service"
        >
          <svg
            className="w-6 h-6 sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2.5 sm:h-2 rounded-full transition-all duration-200 touch-manipulation min-w-[8px] ${
                i === index
                  ? "w-8 bg-[#5c6b4b]"
                  : "w-2.5 sm:w-2 bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={`Go to service ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="p-3 sm:p-2 cursor-pointer rounded-full border-2 border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-[#5c6b4b] hover:text-[#5c6b4b] active:bg-stone-100 transition-colors touch-manipulation"
          aria-label="Next service"
        >
          <svg
            className="w-6 h-6 sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
