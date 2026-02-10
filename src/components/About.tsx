"use client"
import Container from "./Container";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white w-full overflow-hidden flex justify-center h-[40%]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-24">
          
          {/* Left Column: Heading */}
          <div className="w-full md:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[9px] uppercase tracking-[0.6em] text-gray-400 block mb-6 md:mb-12"
            >
              The Visionary
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl md:text-7xl lg:text-8xl font-serif leading-[1.1] md:leading-[0.95] text-[#1A1A1A] tracking-tight"
            >
              Where Artistry <br />
              <span className="italic font-extralight text-gray-800">
                Meets Airway.
              </span>
            </motion.h2>
          </div>

          <div className="w-full md:w-[40%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <p className="text-[#4A4A4A] font-light leading-relaxed tracking-wide text-base md:text-xl font-sans italic mb-2">
                Dr. Nina Izhaky and her team redefine the restorative experience
                through the lens of aesthetic precision.
              </p>

              <button className="group relative inline-block pb-1">
                <span className="text-[10px] uppercase tracking-[0.5em] text-black">
                  Meet the team
                </span>
                <div className="absolute bottom-0 left-0 h-[1px] w-8 bg-black/40 group-hover:w-full group-hover:bg-black transition-all duration-700" />
              </button>
            </motion.div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}