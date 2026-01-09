"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Pentagram } from "@/components/ui/Pentagram";

const navItems = [
  { label: "Home", href: "#home", rune: "ᚺ" },
  { label: "Atrativos", href: "#atrativos", rune: "ᚨ" },
  { label: "Visite", href: "#visite", rune: "ᚹ" },
  { label: "Eventos", href: "#eventos", rune: "ᛖ" },
  { label: "Círculo", href: "#circulo", rune: "ᛟ" },
  { label: "Contato", href: "#contato", rune: "ᚲ" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-forest-900/98 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-gradient-to-b from-forest-900 via-forest-900/90 to-transparent"
        )}
      >
        {/* Top Ornamental Border */}
        <div className="absolute top-0 left-0 right-0">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          <div className="h-[1px] mt-[2px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
        </div>

        {/* Corner Ornaments */}
        <svg className="absolute top-0 left-0 w-16 h-16 text-gold-400" viewBox="0 0 60 60" fill="none">
          <path d="M0 0 L0 40 M0 0 L40 0" stroke="currentColor" strokeWidth="2" />
          <path d="M0 8 L8 8 L8 0" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="0" cy="0" r="3" fill="currentColor" />
          <path d="M12 12 L16 8 L20 12 L16 16 Z" fill="currentColor" opacity="0.6" />
        </svg>
        <svg className="absolute top-0 right-0 w-16 h-16 text-gold-400" viewBox="0 0 60 60" fill="none">
          <path d="M60 0 L60 40 M60 0 L20 0" stroke="currentColor" strokeWidth="2" />
          <path d="M60 8 L52 8 L52 0" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="60" cy="0" r="3" fill="currentColor" />
          <path d="M48 12 L44 8 L40 12 L44 16 Z" fill="currentColor" opacity="0.6" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative text-gold-400 hover:text-gold-300 transition-colors p-2"
              aria-label="Menu"
            >
              <div className="absolute inset-0 border border-gold-400/30 rounded" />
              <svg
                className="w-6 h-6 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Navigation Left */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              {navItems.slice(0, 3).map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative px-5 py-2"
                >
                  {/* Nav Item Background */}
                  <span className="absolute inset-0 border border-transparent group-hover:border-gold-400/40 rounded transition-colors" />
                  <span className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/10 rounded transition-colors" />

                  {/* Rune decoration */}
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px] text-gold-400/0 group-hover:text-gold-400/60 transition-colors font-mystical">
                    {item.rune}
                  </span>

                  {/* Label */}
                  <span className="relative text-sm font-display uppercase tracking-widest text-cream-200 group-hover:text-gold-400 transition-colors">
                    {item.label}
                  </span>

                  {/* Underline */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-400 group-hover:w-3/4 transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Logo Center */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative flex flex-col items-center justify-center group mx-8"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />

              {/* Outer ring */}
              <div className="absolute inset-0 scale-[1.4]">
                <svg className="w-full h-full text-gold-400/30 group-hover:text-gold-400/60 transition-colors" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Pentagram */}
              <Pentagram
                size={48}
                color="#d4af37"
                strokeWidth={1.5}
                animated={false}
                className="transition-transform duration-500 group-hover:rotate-[36deg] relative z-10"
              />

              {/* Logo text */}
              <span className="absolute -bottom-5 font-display text-[10px] uppercase tracking-[0.3em] text-gold-400/70 group-hover:text-gold-400 transition-colors whitespace-nowrap">
                Vila Pagã
              </span>
            </motion.a>

            {/* Desktop Navigation Right */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-end">
              {navItems.slice(3).map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 3) * 0.1 }}
                  className="group relative px-5 py-2"
                >
                  {/* Nav Item Background */}
                  <span className="absolute inset-0 border border-transparent group-hover:border-gold-400/40 rounded transition-colors" />
                  <span className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/10 rounded transition-colors" />

                  {/* Rune decoration */}
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px] text-gold-400/0 group-hover:text-gold-400/60 transition-colors font-mystical">
                    {item.rune}
                  </span>

                  {/* Label */}
                  <span className="relative text-sm font-display uppercase tracking-widest text-cream-200 group-hover:text-gold-400 transition-colors">
                    {item.label}
                  </span>

                  {/* Underline */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-400 group-hover:w-3/4 transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Placeholder for mobile */}
            <div className="lg:hidden w-10" />
          </div>
        </div>

        {/* Bottom Ornamental Border */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
          {/* Center decoration */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="w-20 h-4 text-gold-400" viewBox="0 0 80 16" fill="none">
              <path d="M0 8 L30 8 M50 8 L80 8" stroke="currentColor" strokeWidth="1" />
              <path d="M35 8 L40 3 L45 8 L40 13 Z" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="40" cy="8" r="2" fill="currentColor" />
            </svg>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-80 h-full bg-forest-900 overflow-y-auto"
            >
              {/* Decorative Border */}
              <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-400 via-gold-400/50 to-gold-400" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-400 via-gold-400/50 to-transparent" />

              <div className="p-8">
                {/* Logo */}
                <div className="flex flex-col items-center mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-xl scale-150" />
                    <Pentagram size={70} color="#d4af37" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-xl text-gold-400 mt-4 tracking-widest">
                    VILA PAGÃ
                  </h2>
                  <div className="flex items-center gap-2 mt-2 text-gold-400/50 text-xs">
                    <span>◆</span>
                    <span className="font-body tracking-wider">Piauí, Brasil</span>
                    <span>◆</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-400/50" />
                  <span className="text-gold-400/50 text-lg">✧</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-400/50" />
                </div>

                {/* Nav Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center gap-4 px-4 py-3 rounded-lg border border-transparent hover:border-gold-400/30 hover:bg-gold-400/5 transition-all"
                    >
                      <span className="text-gold-400/50 group-hover:text-gold-400 transition-colors font-mystical text-lg">
                        {item.rune}
                      </span>
                      <span className="font-display text-sm uppercase tracking-widest text-cream-200 group-hover:text-gold-400 transition-colors">
                        {item.label}
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Bottom Decoration */}
                <div className="mt-12 flex flex-col items-center gap-4">
                  <svg
                    className="w-40 h-6 text-gold-400/40"
                    viewBox="0 0 160 24"
                    fill="none"
                  >
                    <path d="M0 12 L60 12 M100 12 L160 12" stroke="currentColor" strokeWidth="1" />
                    <path d="M70 12 L80 4 L90 12 L80 20 Z" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="80" cy="12" r="3" fill="currentColor" />
                    <circle cx="65" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="95" cy="12" r="1.5" fill="currentColor" />
                  </svg>

                  <div className="flex gap-4 text-gold-400/30 font-mystical text-xl">
                    <span>ᛖ</span>
                    <span>ᛚ</span>
                    <span>ᛞ</span>
                  </div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
