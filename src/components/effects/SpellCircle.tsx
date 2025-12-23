"use client";

import { motion } from "framer-motion";

interface SpellCircleProps {
  size?: number;
  className?: string;
}

export function SpellCircle({ size = 300, className }: SpellCircleProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer rotating ring */}
      <motion.svg
        className="absolute inset-0 text-gold-400/20"
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        {/* Runes around the circle */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x = 100 + 85 * Math.cos(angle);
          const y = 100 + 85 * Math.sin(angle);
          const runes = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ"];
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              fontSize="10"
              className="font-mystical"
            >
              {runes[i]}
            </text>
          );
        })}
      </motion.svg>

      {/* Middle counter-rotating ring */}
      <motion.svg
        className="absolute inset-0 text-gold-400/30"
        viewBox="0 0 200 200"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        {/* Inner symbols */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 - 90) * (Math.PI / 180);
          const x = 100 + 60 * Math.cos(angle);
          const y = 100 + 60 * Math.sin(angle);
          const symbols = ["☽", "✧", "☆", "◇", "☾", "✦", "★", "◈"];
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              fontSize="12"
            >
              {symbols[i]}
            </text>
          );
        })}
      </motion.svg>

      {/* Inner ring with pentagram */}
      <motion.svg
        className="absolute inset-0 text-gold-400/40"
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="100"
          cy="100"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Pentagram */}
        <path
          d="M100 60 L115 95 L150 95 L122 115 L132 150 L100 130 L68 150 L78 115 L50 95 L85 95 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gold-400/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
        }}
      />
    </div>
  );
}
