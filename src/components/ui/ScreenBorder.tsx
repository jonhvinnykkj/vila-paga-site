"use client";

import { motion } from "framer-motion";

export function ScreenBorder() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-forest-900/80 to-transparent">
        <div className="absolute top-2 left-24 right-24 md:left-32 md:right-32 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-forest-900/80 to-transparent">
        <div className="absolute bottom-2 left-24 right-24 md:left-32 md:right-32 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      </div>

      {/* Corner Ornaments - Simple L-shaped corners */}
      {/* Top Left */}
      <motion.div
        className="absolute top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <svg
          className="w-16 h-16 md:w-20 md:h-20 text-gold-400"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M2 78 L2 20 Q2 2 20 2 L78 2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M8 78 L8 24 Q8 8 24 8 L78 8"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
            fill="none"
          />
          <circle cx="2" cy="2" r="2" fill="currentColor" />
          <path d="M18 18 L24 12 L30 18 L24 24 Z" fill="currentColor" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Top Right */}
      <motion.div
        className="absolute top-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <svg
          className="w-16 h-16 md:w-20 md:h-20 text-gold-400"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M78 78 L78 20 Q78 2 60 2 L2 2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M72 78 L72 24 Q72 8 56 8 L2 8"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
            fill="none"
          />
          <circle cx="78" cy="2" r="2" fill="currentColor" />
          <path d="M62 18 L56 12 L50 18 L56 24 Z" fill="currentColor" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        className="absolute bottom-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <svg
          className="w-16 h-16 md:w-20 md:h-20 text-gold-400"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M2 2 L2 60 Q2 78 20 78 L78 78"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M8 2 L8 56 Q8 72 24 72 L78 72"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
            fill="none"
          />
          <circle cx="2" cy="78" r="2" fill="currentColor" />
          <path d="M18 62 L24 56 L30 62 L24 68 Z" fill="currentColor" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        className="absolute bottom-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <svg
          className="w-16 h-16 md:w-20 md:h-20 text-gold-400"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M78 2 L78 60 Q78 78 60 78 L2 78"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M72 2 L72 56 Q72 72 56 72 L2 72"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
            fill="none"
          />
          <circle cx="78" cy="78" r="2" fill="currentColor" />
          <path d="M62 62 L56 56 L50 62 L56 68 Z" fill="currentColor" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Side decorative lines - Left */}
      <div className="absolute left-2 top-24 bottom-24 md:top-28 md:bottom-28 w-px hidden lg:block">
        <motion.div
          className="h-full w-full bg-gradient-to-b from-gold-400/0 via-gold-400/30 to-gold-400/0"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </div>

      {/* Side decorative lines - Right */}
      <div className="absolute right-2 top-24 bottom-24 md:top-28 md:bottom-28 w-px hidden lg:block">
        <motion.div
          className="h-full w-full bg-gradient-to-b from-gold-400/0 via-gold-400/30 to-gold-400/0"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </div>
    </div>
  );
}
