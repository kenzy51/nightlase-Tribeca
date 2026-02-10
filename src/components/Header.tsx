"use client";
import { useState, useEffect } from "react";
import Container, { ContainerHeader } from "./Container";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Technology", "Results", "FAQ"];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 py-2 h-[100px] flex items-center
      ${isScrolled ? "bg-white/90 backdrop-blur-md border-b border-black/5" : "bg-transparent text-white"}`}
    >
      <ContainerHeader>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex flex-col">
            <span className={`text-[24px] font-serif tracking-tight leading-[1.1] transition-colors duration-500
              ${isScrolled ? "text-black" : "text-white"}`}>
              Tribeca Dental Studio
            </span>
          </div>

          {/* Navigation with Golden Hover & Line Animation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative text-[14px] uppercase tracking-[0.3em] transition-colors duration-500 group
                  ${isScrolled ? "text-black" : "text-white"} 
                  hover:!text-[#C5A059]`} // Force gold on hover
              >
                <strong className="font-bold">{item}</strong>
                
                {/* The Animated Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredItem === item ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#C5A059] origin-center"
                />
              </a>
            ))}
          </div>

          {/* Golden CTA Button */}
          <button 
            className={`px-8 py-3 border transition-all duration-700 text-[10px] uppercase tracking-[0.4em] relative overflow-hidden group
            ${isScrolled 
              ? "border-black text-black" 
              : "border-white/30 text-white"}`}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-700">
                Book Evaluation
            </span>
            <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
          </button>

        </div>
      </ContainerHeader>
    </nav>
  );
}