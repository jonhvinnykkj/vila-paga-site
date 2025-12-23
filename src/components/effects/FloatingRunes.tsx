"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const runes = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"];
const symbols = ["☽", "☾", "✧", "⊛", "◈", "❋", "✦", "⁂", "☆", "✶"];

interface FloatingRunesProps {
  count?: number;
  className?: string;
}

export function FloatingRunes({ count = 15, className }: FloatingRunesProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    symbol: string;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: Math.random() > 0.5 ? runes[Math.floor(Math.random() * runes.length)] : symbols[Math.floor(Math.random() * symbols.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 12 + Math.random() * 16,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-gold-400/20 font-mystical select-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 30, 0],
            opacity: [0, 0.4, 0.2, 0.4, 0],
            rotate: [0, 180, 360],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
    </div>
  );
}
