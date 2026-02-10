"use client";
import Container from "./Container";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Testimonial() {
  const testimonials = [
    {
      quote: "NightLase didn’t just stop my snoring; it restored the quality of my life. The artistry and care at Tribeca Dental are unmatched.",
      author: "Private Concierge Client"
    },
    {
      quote: "The immediate change was profound. For the first time in years, my partner and I are both waking up truly rested.",
      author: "Executive Health Member"
    },
    {
      quote: "A masterclass in diagnostic precision. Seeing my 3D airway scan was the 'aha' moment I needed to take control of my health.",
      author: "Sleep Health Patient"
    }
  ];

  return (
    <section className="bg-black py-24 md:py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[14px] uppercase tracking-[0.8em] text-[#C5A059] block mb-6"
            >
              The Patient Experience
            </motion.span>
            <h2 className="text-white font-serif text-5xl italic opacity-80 font-light tracking-wide">
              Voices of the Silent Night
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {testimonials.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="flex flex-col items-center text-center space-y-8"
              >
                {/* Decorative gold element */}
                <div className="w-8 h-[1px] bg-[#C5A059]/40" />
                
                <blockquote className="text-[18px] md:text-[26px] font-serif italic text-white/90 leading-relaxed font-light">
                  &quot;{item.quote}&quot;
                </blockquote>
                
                <div className="space-y-2 pt-4">
                  <div className="h-[30px] w-[1px] bg-[#C5A059]/20 mx-auto" />
                  <cite className="text-[9px] uppercase tracking-[0.4em] not-italic text-[#C5A059] font-medium block">
                    — {item.author}
                  </cite>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}