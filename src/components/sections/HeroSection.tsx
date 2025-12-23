"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fireflies } from "@/components/effects/Fireflies";
import { FloatingRunes } from "@/components/effects/FloatingRunes";
import { StarField } from "@/components/effects/StarField";
import { SpellCircle } from "@/components/effects/SpellCircle";
import { MagicButton } from "@/components/ui/MagicButton";
import { Pentagram } from "@/components/ui/Pentagram";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const spellCircleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const spellCircleOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-900"
    >
      {/* Star Field Background */}
      <StarField count={80} className="z-0" />

      {/* Background Forest Layer */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Mystical Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 via-forest-900/60 to-forest-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-forest-900/50" />
      </motion.div>

      {/* Floating Runes */}
      <FloatingRunes count={20} className="z-[2]" />

      {/* Spell Circle behind content */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]"
        style={{ scale: spellCircleScale, opacity: spellCircleOpacity }}
      >
        <SpellCircle size={500} />
      </motion.div>

      {/* Fireflies Effect */}
      <Fireflies count={50} />

      {/* Light Rays */}
      <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[150%]"
          animate={{
            background: [
              "radial-gradient(ellipse at top, rgba(212,175,55,0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at top, rgba(212,175,55,0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at top, rgba(212,175,55,0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Mystical Mist */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-[5] pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/50 to-transparent"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Side Decorations */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-[6] hidden lg:flex flex-col items-center gap-4">
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent"
          animate={{ scaleY: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Pentagram size={30} color="#d4af37" animated={false} strokeWidth={1} className="opacity-40" />
        </motion.div>
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent"
          animate={{ scaleY: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-[6] hidden lg:flex flex-col items-center gap-4">
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent"
          animate={{ scaleY: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Pentagram size={30} color="#d4af37" animated={false} strokeWidth={1} className="opacity-40" />
        </motion.div>
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent"
          animate={{ scaleY: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20"
        style={{ y: textY, opacity }}
      >
        {/* Moon phases decoration */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-6 text-gold-400/60"
        >
          <span>☽</span>
          <span className="text-xs">✧</span>
          <span>☾</span>
        </motion.div>

        {/* Top Ornament - Animated Pentagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <Pentagram size={100} color="#d4af37" className="drop-shadow-lg" />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                  "0 0 60px rgba(212, 175, 55, 0.6)",
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-gold-gradient mb-4 drop-shadow-lg"
          style={{
            textShadow: "0 0 40px rgba(212, 175, 55, 0.5), 0 0 80px rgba(212, 175, 55, 0.3)",
          }}
        >
          Vila Pagã
        </motion.h1>

        {/* Magical divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="text-gold-400 text-sm"
          >
            ✦
          </motion.span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-body text-xl md:text-2xl text-cream-100 mb-12 italic tracking-wide"
        >
          Uma Semente de Magia no Coração do Piauí
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <MagicButton variant="primary" size="lg" href="#atrativos">
            Saiba Mais
          </MagicButton>
        </motion.div>

        {/* Bottom runes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex items-center justify-center gap-4 font-mystical text-gold-400/40 text-xl"
        >
          <span>ᚠ</span>
          <span>ᚢ</span>
          <span>ᚦ</span>
          <span>ᚨ</span>
          <span>ᚱ</span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gold-400"
        >
          <span className="text-xs font-display uppercase tracking-widest mb-2">
            Explorar
          </span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Animated corner decorations */}
      {[
        { pos: "top-24 left-4", rotation: 0 },
        { pos: "top-24 right-4", rotation: 90 },
        { pos: "bottom-24 right-4", rotation: 180 },
        { pos: "bottom-24 left-4", rotation: 270 },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className={`absolute ${corner.pos} w-16 h-16 z-20 hidden md:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + i * 0.2 }}
        >
          <motion.svg
            viewBox="0 0 64 64"
            className="w-full h-full text-gold-400/30"
            style={{ rotate: corner.rotation }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          >
            <path
              d="M4 60V20C4 11 11 4 20 4H60"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </motion.svg>
        </motion.div>
      ))}
    </section>
  );
}
