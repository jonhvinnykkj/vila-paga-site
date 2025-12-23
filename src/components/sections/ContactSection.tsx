"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MagicButton } from "@/components/ui/MagicButton";
import { Pentagram } from "@/components/ui/Pentagram";
import { StarField } from "@/components/effects/StarField";
import { FloatingRunes } from "@/components/effects/FloatingRunes";
import { SpellCircle } from "@/components/effects/SpellCircle";
import { MoonPhases } from "@/components/effects/MoonPhases";

export function ContactSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="contato"
      className="relative py-24 bg-gradient-to-b from-forest-900 to-forest-800 overflow-hidden"
    >
      {/* Star Field */}
      <StarField count={60} className="opacity-60" />

      {/* Floating Runes */}
      <FloatingRunes count={12} className="opacity-30" />

      {/* Spell Circle in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <SpellCircle size={600} />
      </div>

      {/* Top Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        animate={{
          background: [
            "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.5), transparent)",
            "linear-gradient(to right, transparent, rgba(212, 175, 55, 1), transparent)",
            "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.5), transparent)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Pentagram with glow */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <Pentagram size={80} color="#d4af37" />
              <motion.div
                className="absolute inset-0"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                    "0 0 50px rgba(212, 175, 55, 0.6)",
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Moon Phases */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <MoonPhases />
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl text-cream-100 mb-4">
            Entre em <span className="text-gold-gradient">Contato</span>
          </h2>

          <p className="font-body text-lg text-cream-300 max-w-xl mx-auto mb-12">
            Tem dúvidas ou quer saber mais sobre a Vila Pagã?
            Estamos aqui para ajudar em sua jornada espiritual.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: "Localização",
                value: "Piauí, Brasil",
                rune: "ᛟ",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: "Email",
                value: "contato@vilapaga.com.br",
                rune: "ᛗ",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                label: "Telefone",
                value: "(86) 99999-9999",
                rune: "ᛚ",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div
                  className="relative w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-3"
                  whileHover={{
                    boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
                    borderColor: "rgba(212, 175, 55, 0.8)",
                  }}
                >
                  {item.icon}
                  {/* Rune on hover */}
                  <motion.span
                    className="absolute -top-2 -right-2 text-gold-400/50 text-sm font-mystical opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {item.rune}
                  </motion.span>
                </motion.div>
                <span className="font-display text-sm text-cream-400 uppercase tracking-wider mb-1">
                  {item.label}
                </span>
                <span className="font-body text-cream-100 group-hover:text-gold-400 transition-colors">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="max-w-lg mx-auto space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-forest-800/50 border border-gold-400/30 rounded-lg text-cream-100 placeholder:text-cream-500 focus:outline-none focus:border-gold-400 focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all font-body"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-400/30 group-focus-within:text-gold-400/60 font-mystical text-sm">ᚠ</span>
              </motion.div>
              <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-3 bg-forest-800/50 border border-gold-400/30 rounded-lg text-cream-100 placeholder:text-cream-500 focus:outline-none focus:border-gold-400 focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all font-body"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-400/30 group-focus-within:text-gold-400/60 font-mystical text-sm">ᚢ</span>
              </motion.div>
            </div>
            <motion.div whileFocus={{ scale: 1.01 }} className="relative group">
              <textarea
                placeholder="Sua mensagem..."
                rows={4}
                className="w-full px-4 py-3 bg-forest-800/50 border border-gold-400/30 rounded-lg text-cream-100 placeholder:text-cream-500 focus:outline-none focus:border-gold-400 focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all font-body resize-none"
              />
              <span className="absolute right-3 top-3 text-gold-400/30 group-focus-within:text-gold-400/60 font-mystical text-sm">ᚦ</span>
            </motion.div>
            <MagicButton variant="primary" size="lg" className="w-full">
              Enviar Mensagem
            </MagicButton>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-12 flex justify-center gap-4"
          >
            {["instagram", "facebook", "youtube"].map((social, i) => (
              <motion.a
                key={social}
                href={`#${social}`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center text-cream-300 hover:text-gold-400 hover:border-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
              >
                {social === "instagram" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {social === "facebook" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                {social === "youtube" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )}
                {/* Sparkle on hover */}
                <motion.span
                  className="absolute -top-1 -right-1 text-gold-400 text-xs"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  ✧
                </motion.span>
              </motion.a>
            ))}
          </motion.div>

          {/* Rune signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.3 } : {}}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center justify-center gap-4 font-mystical text-gold-400/30 text-xl"
          >
            <span>ᛖ</span>
            <span>ᛚ</span>
            <span>ᛞ</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
