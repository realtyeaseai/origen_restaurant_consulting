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
  "bg-amber-100 text-amber-800",
  "bg-emerald-100 text-emerald-800",
  "bg-sky-100 text-sky-800",
  "bg-violet-100 text-violet-800",
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
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative min-h-[360px] md:min-h-[400px]">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-stretch border border-neutral-200 rounded-2xl p-4 md:p-6 bg-white shadow-sm"
          >
            {/* Left: image or icon */}
            <div className="flex-shrink-0 w-full md:w-2/5 max-w-sm md:max-w-none aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
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

            {/* Right: content */}
            <div className="flex flex-col justify-center text-center md:text-left min-w-0 flex-1 md:pl-6 md:relative">
              <div
                className="absolute left-0 top-4 bottom-4 hidden md:block w-px bg-neutral-200"
                aria-hidden
              />
              <cite className="not-italic font-semibold text-neutral-900 text-xl md:text-2xl block mb-2">
                {item.title}
              </cite>
              {item.designation && (
                <p className="text-sm text-neutral-500 mb-4">
                  {item.designation}
                </p>
              )}
              <blockquote className="text-base sm:text-lg text-neutral-700 leading-relaxed max-h-[20rem] overflow-y-auto pr-2">
                {item.description}
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots + arrows */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={goPrev}
          className="p-2 rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
          aria-label="Previous service"
        >
          <svg
            width="20"
            height="20"
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
              className={`h-2 rounded-full transition-all duration-200 ${
                i === index
                  ? "w-8 bg-neutral-900"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to service ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="p-2 rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
          aria-label="Next service"
        >
          <svg
            width="20"
            height="20"
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
