"use client";

import { motion } from "framer-motion";

interface MysticMistProps {
  className?: string;
  color?: "gold" | "green" | "dark";
}

export function MysticMist({ className, color = "gold" }: MysticMistProps) {
  const colors = {
    gold: "from-gold-400/10 via-gold-400/5",
    green: "from-forest-700/20 via-forest-600/10",
    dark: "from-forest-900/30 via-forest-900/20",
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Mist Layer 1 */}
      <motion.div
        className={`absolute -inset-x-1/2 h-full bg-gradient-to-t ${colors[color]} to-transparent blur-3xl`}
        animate={{
          x: ["-25%", "25%", "-25%"],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mist Layer 2 */}
      <motion.div
        className={`absolute -inset-x-1/4 h-3/4 bottom-0 bg-gradient-to-t ${colors[color]} to-transparent blur-2xl`}
        animate={{
          x: ["25%", "-25%", "25%"],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Sparkle particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
