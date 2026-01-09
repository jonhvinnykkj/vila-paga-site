"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { OrnamentalFrame } from "@/components/ui/OrnamentalFrame";
import { FloatingRunes } from "@/components/effects/FloatingRunes";
import { StarField } from "@/components/effects/StarField";
import { Fireflies } from "@/components/effects/Fireflies";
import { MedievalBorder } from "@/components/ui/MedievalBorder";

export function AttractionsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="visite" className="relative py-24 bg-forest-900 overflow-hidden">
      {/* Star field background */}
      <StarField count={40} className="opacity-50" />

      {/* Floating Runes */}
      <FloatingRunes count={15} className="opacity-40" />

      {/* Fireflies */}
      <Fireflies count={25} />

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Top Border with animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        animate={{
          background: [
            "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.3), transparent)",
            "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.8), transparent)",
            "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.3), transparent)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Magic symbols */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-4 text-gold-400/50"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span>⊛</span>
            <span>◈</span>
            <span>❋</span>
            <span>◈</span>
            <span>⊛</span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl text-cream-100 mb-4">
            Nossos <span className="text-gold-gradient">Atrativos</span>
          </h2>
          <p className="font-body text-lg text-cream-300 max-w-xl mx-auto">
            Descubra as experiências únicas que a Vila Pagã oferece
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <OrnamentalFrame className="p-8">
            {/* Video Container */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-forest-800">
              {/* Video Thumbnail/Placeholder */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2070&auto=format&fit=crop')`,
                }}
              />

              {/* Mystical Overlay with animation */}
              <motion.div
                className="absolute inset-0 bg-forest-900/50"
                animate={{
                  backgroundColor: [
                    "rgba(13, 40, 24, 0.5)",
                    "rgba(13, 40, 24, 0.4)",
                    "rgba(13, 40, 24, 0.5)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Welcome Sign Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Sign Board */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="relative bg-forest-700/90 backdrop-blur-sm px-8 py-6 rounded-lg border-2 border-gold-400/50"
                    whileHover={{
                      boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)",
                      borderColor: "rgba(212, 175, 55, 0.8)",
                    }}
                  >
                    <p className="font-body text-sm text-cream-200 uppercase tracking-widest mb-1">
                      Bem Vindos à
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl text-gold-400">
                      Vila Pagã
                    </h3>
                    <p className="font-body text-xs text-cream-300 mt-2">
                      Welcome • Benvenuti
                    </p>

                    {/* Animated Corner Decorations */}
                    {[
                      { pos: "-top-2 -left-2", border: "border-t-2 border-l-2" },
                      { pos: "-top-2 -right-2", border: "border-t-2 border-r-2" },
                      { pos: "-bottom-2 -left-2", border: "border-b-2 border-l-2" },
                      { pos: "-bottom-2 -right-2", border: "border-b-2 border-r-2" },
                    ].map((corner, i) => (
                      <motion.div
                        key={i}
                        className={`absolute ${corner.pos} w-4 h-4 ${corner.border} border-gold-400`}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </motion.div>

                  {/* Play Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 relative"
                  >
                    {/* Glow ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gold-400/30"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="relative w-20 h-20 rounded-full bg-gold-400 text-forest-900 flex items-center justify-center shadow-lg shadow-gold-400/30">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
            </div>
          </OrnamentalFrame>
        </motion.div>

        {/* Info Cards with Medieval Border */}
        <MedievalBorder variant="top" className="mt-12 pt-12 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
            {
              title: "Trilhas Sagradas",
              description: "Caminhos na mata nativa com pontos de energia",
              rune: "ᚾ",
            },
            {
              title: "Círculo de Pedras",
              description: "Espaço para rituais e celebrações",
              rune: "ᛊ",
            },
            {
              title: "Biblioteca Mística",
              description: "Acervo de conhecimentos ancestrais",
              rune: "ᚨ",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 40px rgba(212, 175, 55, 0.2)",
              }}
              className="group relative bg-forest-800/50 backdrop-blur-sm border border-gold-400/20 rounded-lg p-6 hover:border-gold-400/50 hover:bg-forest-800/70 transition-all overflow-hidden"
            >
              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />

              {/* Rune */}
              <motion.span
                className="text-4xl mb-4 block font-mystical text-gold-400/60 group-hover:text-gold-400 transition-colors"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {item.rune}
              </motion.span>

              <h3 className="font-display text-lg text-cream-100 mb-2 group-hover:text-gold-400 transition-colors relative z-10">
                {item.title}
              </h3>
              <p className="font-body text-sm text-cream-400 relative z-10">
                {item.description}
              </p>

              {/* Corner sparkle */}
              <motion.span
                className="absolute top-2 right-2 text-gold-400/30 group-hover:text-gold-400/60 transition-colors"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ✧
              </motion.span>
            </motion.div>
          ))}
          </div>
        </MedievalBorder>
      </div>

      {/* Decorative Bottom Border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        animate={{
          background: [
            "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.3), transparent)",
            "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.8), transparent)",
            "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.3), transparent)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
    </section>
  );
}
