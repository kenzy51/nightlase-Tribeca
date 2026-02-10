"use client";
import { useState } from "react";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How many sessions are required for optimal results?",
    a: "The standard NightLase protocol consists of three separate treatment sessions over a six-week period. This allows the collagen fibers to naturally contract and tighten."
  },
  {
    q: "Is the procedure painful?",
    a: "Not at all. Patients experience a gentle, warming sensation. No anesthesia or numbing is required, and you may return to your day immediately."
  },
  {
    q: "How long do the results last?",
    a: "Results typically last up to a year. We recommend a single maintenance session annually to ensure your airway remains open and quiet."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white pb-32 md:pb-20 md:pt-20">
      <Container>
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Left: Section Title */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif sticky top-24">
              Scientific <br />
              <span className="italic font-light">Authority.</span>
            </h2>
          </div>

          {/* Right: Accordion */}
          <div className="md:w-2/3 border-t border-black/5">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-black/5">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 flex justify-between items-center text-left group"
                >
                  <span className="text-[13px] uppercase tracking-[0.3em] text-black/80 group-hover:text-black transition-colors">
                    {faq.q}
                  </span>
                  <span className={`text-xl font-light transition-transform duration-500 ${openIndex === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-gray-500 font-light leading-relaxed italic max-w-xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}