"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Pentagram } from "@/components/ui/Pentagram";
import { FloatingRunes } from "@/components/effects/FloatingRunes";
import { MysticMist } from "@/components/effects/MysticMist";
import { MagicBorder } from "@/components/effects/MagicBorder";
import { MedievalBorder } from "@/components/ui/MedievalBorder";

const features = [
  {
    icon: "pentagram",
    title: "Rituais e Celebrações",
    description: "Celebre os sabbats e esbats em comunidade",
  },
  {
    icon: "tree",
    title: "Trilhas e Natureza",
    description: "Conecte-se com a energia da mata nativa",
  },
  {
    icon: "sword",
    title: "Conexão Espiritual",
    description: "Aprofunde sua prática mágica e espiritual",
  },
];

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "pentagram":
      return <Pentagram size={50} color="#d4af37" animated={false} strokeWidth={1.5} />;
    case "tree":
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-gold-400">
          <circle cx="25" cy="25" r="22" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M25 8 L25 38 M25 15 L18 22 M25 15 L32 22 M25 22 L15 30 M25 22 L35 30 M25 30 L12 38 M25 30 L38 38"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="25" cy="25" r="4" fill="currentColor" />
        </svg>
      );
    case "sword":
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-gold-400">
          <circle cx="25" cy="25" r="22" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M25 8 L25 35 M20 32 L25 38 L30 32 M18 15 L32 15 M20 12 L30 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="25" cy="12" r="2" fill="currentColor" />
          <circle cx="15" cy="20" r="1" fill="currentColor" />
          <circle cx="35" cy="20" r="1" fill="currentColor" />
          <circle cx="12" cy="28" r="1" fill="currentColor" />
          <circle cx="38" cy="28" r="1" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export function WelcomeSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation();

  return (
    <section id="atrativos" className="relative py-24 bg-cream-100 overflow-hidden">
      {/* Floating Runes */}
      <FloatingRunes count={10} className="opacity-30" />

      {/* Mystic Mist */}
      <MysticMist color="green" className="opacity-20" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 25H55L39 37L45 57L30 45L15 57L21 37L5 25H25L30 5Z' fill='none' stroke='%231a4d2e' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Magic Border */}
      <MagicBorder />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Moon and stars decoration */}
            <motion.div
              className="flex items-center justify-center gap-3 mb-4 text-gold-500/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span>✧</span>
              <span>☽</span>
              <span>✧</span>
              <span>☾</span>
              <span>✧</span>
            </motion.div>

            {/* Ornamental Line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Pentagram size={30} color="#d4af37" animated={false} strokeWidth={1} />
              </motion.div>
              <motion.div
                className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-earth-900 mb-6">
              Bem-vindo à <span className="text-gold-gradient">Vila Pagã</span>
            </h2>

            <p className="font-body text-xl text-earth-600 max-w-2xl mx-auto leading-relaxed">
              No coração do Piauí, um refúgio místico dedicado às tradições pagãs,
              espiritualidade e conexão com a natureza.
            </p>
          </motion.div>
        </div>

        {/* Features Grid with Medieval Border */}
        <MedievalBorder className="p-8 md:p-12 bg-forest-900/5 backdrop-blur-sm">
          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group text-center"
            >
              {/* Icon Container */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                {/* Animated outer ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-gold-400/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    borderColor: ["rgba(212, 175, 55, 0.3)", "rgba(212, 175, 55, 0.6)", "rgba(212, 175, 55, 0.3)"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                />
                {/* Inner Ring */}
                <div className="absolute inset-2 rounded-full border border-gold-400/20" />
                {/* Background with glow */}
                <motion.div
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-forest-900 to-forest-800"
                  whileHover={{
                    boxShadow: "0 0 40px rgba(212, 175, 55, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FeatureIcon type={feature.icon} />
                </motion.div>

                {/* Sparkles on hover */}
                <motion.div
                  className="absolute -top-2 -right-2 text-gold-400 text-xs opacity-0 group-hover:opacity-100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 text-gold-400 text-xs opacity-0 group-hover:opacity-100"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ✧
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-earth-900 mb-3 group-hover:text-forest-700 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-earth-600">
                {feature.description}
              </p>

              {/* Hover Line with animation */}
              <motion.div
                className="mt-4 h-0.5 bg-gold-400 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 0 }}
                whileHover={{ width: 64 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
          </div>
        </MedievalBorder>

        {/* Bottom Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={featuresInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <svg
            className="w-64 h-8 text-gold-400"
            viewBox="0 0 256 32"
            fill="none"
          >
            <motion.path
              d="M0 16 H100 M156 16 H256"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={featuresInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5 }}
            />
            <motion.circle
              cx="128"
              cy="16"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <circle cx="128" cy="16" r="4" fill="currentColor" />
            <path d="M108 16 L118 10 L118 22 Z" fill="currentColor" />
            <path d="M148 16 L138 10 L138 22 Z" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Rune decoration at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 0.3 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-8 flex items-center justify-center gap-6 font-mystical text-forest-700/30 text-2xl"
        >
          <span>ᚲ</span>
          <span>ᚷ</span>
          <span>ᚹ</span>
        </motion.div>
      </div>
    </section>
  );
}
