"use client";
import { useState, useRef } from "react";
import Container from "./Container";

export default function Comparison() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const x =
      "touches" in event
        ? event.touches[0].clientX
        : (event as React.MouseEvent).clientX;

    let position = ((x - rect.left) / rect.width) * 100;

    if (position < 0) position = 0;
    if (position > 100) position = 100;

    setSliderPos(position);
  };

  return (
    <section className="bg-white py-6 md:py-24" id="results">
      <Container>
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.8em] text-gray-400 block mb-6">
            Proven Transformations
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A]">
            The Art of <span className="italic font-light">Refinement.</span>
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto cursor-ew-resize select-none overflow-hidden group shadow-sm"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          <img src="/After.png" alt="After" className="w-full h-auto block" />

          <div
            className="absolute inset-0 w-full h-full transition-all duration-75 ease-out"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src="/Before.png"
              alt="Before"
              className="w-full h-auto block"
            />
          </div>

          <div
            className={`absolute top-0 bottom-0 w-[1px] bg-white z-30 transition-opacity duration-300
              ${sliderPos <= 0 || sliderPos >= 100 ? "opacity-0" : "opacity-100"}`}
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-xl">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-black/20 rounded-full" />
                <div className="w-1 h-1 bg-black/20 rounded-full" />
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-4 left-4 z-40 pointer-events-none transition-opacity duration-500"
            style={{ opacity: sliderPos < 15 ? 0 : 1 }}
          >
            <span className="text-[9px] uppercase tracking-[0.4em] text-white bg-black/30 backdrop-blur-md px-3 py-1.5">
              Before
            </span>
          </div>
          <div
            className="absolute bottom-4 right-4 z-40 pointer-events-none transition-opacity duration-500"
            style={{ opacity: sliderPos > 85 ? 0 : 1 }}
          >
            <span className="text-[9px] uppercase tracking-[0.4em] text-white bg-black/30 backdrop-blur-md px-3 py-1.5">
              After
            </span>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 font-light italic tracking-wide text-s">
            <a
              href=" 
                fotona.com/en/treatments/2039/nightlase-r/
                "
            >
              NightLase®
            </a>
            Soft Palate Treatment — Full anatomical reveal.
          </p>
        </div>
      </Container>
    </section>
  );
}
