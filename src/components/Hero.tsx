"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-80"
      >
        <source src="/Nightlase.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6 text-white">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[14px] uppercase tracking-[0.6em] mb-6 text-white/70 font-sans"
        >
          Tribeca Dental Studio
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-5xl md:text-8xl font-serif tracking-tight leading-none mb-10"
        >
          The Art of <br /> 
          <span className="italic font-light">Silent Sleep</span>
        </motion.h1>

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="btn-luxury border-white text-white hover:bg-white hover:text-black backdrop-blur-sm"
        >
          Request Concierge Evaluation
        </motion.button>
      </div>
    </section>
  );
}