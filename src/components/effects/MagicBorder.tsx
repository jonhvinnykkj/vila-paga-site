"use client";

import { motion } from "framer-motion";

interface MagicBorderProps {
  className?: string;
}

export function MagicBorder({ className }: MagicBorderProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "200% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          animate={{
            backgroundPosition: ["200% 0%", "0% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      {/* Corner Decorations with glow */}
      {[
        { position: "top-2 left-2", rotate: 0 },
        { position: "top-2 right-2", rotate: 90 },
        { position: "bottom-2 right-2", rotate: 180 },
        { position: "bottom-2 left-2", rotate: 270 },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className={`absolute ${corner.position} w-8 h-8`}
          style={{ rotate: corner.rotate }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-gold-400">
            <path
              d="M2 30V12C2 6.5 6.5 2 12 2H30"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="8" cy="8" r="2" fill="currentColor" />
          </svg>
        </motion.div>
      ))}

      {/* Floating corner pentagram */}
      <motion.div
        className="absolute top-4 left-4 text-gold-400/30"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity },
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </motion.div>
    </div>
  );
}
