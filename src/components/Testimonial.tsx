"use client"
import Container from "./Container";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="bg-black py-14 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.8em] text-gray-400 block mb-12"
          >
            The Patient Experience
          </motion.span>
          
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-3xl md:text-5xl font-serif italic text-[white] leading-tight"
          >
            NightLase didn’t just stop my snoring; it restored the quality of my life. 
            The artistry and care at Tribeca Dental are unmatched.
          </motion.blockquote>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 flex flex-col items-center"
          >
            <div className="h-[40px] w-[1px] bg-black/10 mb-1" />
            <cite className="text-[11px] uppercase tracking-[0.4em] not-italic text-gray-400  font-medium">
              — Private Concierge Client
            </cite>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}