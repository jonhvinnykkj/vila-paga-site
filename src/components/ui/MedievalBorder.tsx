"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MedievalBorderProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "full" | "top" | "bottom";
  animated?: boolean;
}

export function MedievalBorder({
  className,
  children,
  variant = "full",
  animated = true,
}: MedievalBorderProps) {
  // Each corner has its own SVG paths drawn correctly for that position
  const CornerTopLeft = () => (
    <motion.svg
      className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 text-gold-400"
      viewBox="0 0 60 60"
      fill="none"
      initial={animated ? { opacity: 0 } : undefined}
      animate={animated ? { opacity: 1 } : undefined}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <path d="M2 58 L2 16 Q2 2 16 2 L58 2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M6 58 L6 18 Q6 6 18 6 L58 6" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" />
      <circle cx="2" cy="2" r="2" fill="currentColor" />
      <path d="M14 14 L18 10 L22 14 L18 18 Z" fill="currentColor" opacity="0.6" />
    </motion.svg>
  );

  const CornerTopRight = () => (
    <motion.svg
      className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 text-gold-400"
      viewBox="0 0 60 60"
      fill="none"
      initial={animated ? { opacity: 0 } : undefined}
      animate={animated ? { opacity: 1 } : undefined}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <path d="M58 58 L58 16 Q58 2 44 2 L2 2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M54 58 L54 18 Q54 6 42 6 L2 6" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" />
      <circle cx="58" cy="2" r="2" fill="currentColor" />
      <path d="M46 14 L42 10 L38 14 L42 18 Z" fill="currentColor" opacity="0.6" />
    </motion.svg>
  );

  const CornerBottomLeft = () => (
    <motion.svg
      className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 text-gold-400"
      viewBox="0 0 60 60"
      fill="none"
      initial={animated ? { opacity: 0 } : undefined}
      animate={animated ? { opacity: 1 } : undefined}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <path d="M2 2 L2 44 Q2 58 16 58 L58 58" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M6 2 L6 42 Q6 54 18 54 L58 54" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" />
      <circle cx="2" cy="58" r="2" fill="currentColor" />
      <path d="M14 46 L18 42 L22 46 L18 50 Z" fill="currentColor" opacity="0.6" />
    </motion.svg>
  );

  const CornerBottomRight = () => (
    <motion.svg
      className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 text-gold-400"
      viewBox="0 0 60 60"
      fill="none"
      initial={animated ? { opacity: 0 } : undefined}
      animate={animated ? { opacity: 1 } : undefined}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <path d="M58 2 L58 44 Q58 58 44 58 L2 58" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M54 2 L54 42 Q54 54 42 54 L2 54" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" />
      <circle cx="58" cy="58" r="2" fill="currentColor" />
      <path d="M46 46 L42 42 L38 46 L42 50 Z" fill="currentColor" opacity="0.6" />
    </motion.svg>
  );

  return (
    <div className={cn("relative", className)}>
      {/* Corner Ornaments */}
      {(variant === "full" || variant === "top") && (
        <>
          <CornerTopLeft />
          <CornerTopRight />
        </>
      )}
      {(variant === "full" || variant === "bottom") && (
        <>
          <CornerBottomLeft />
          <CornerBottomRight />
        </>
      )}

      {/* Top border line */}
      {(variant === "full" || variant === "top") && (
        <div className="absolute top-2 left-12 right-12 md:left-16 md:right-16">
          <motion.div
            className="h-px bg-gradient-to-r from-gold-400 via-gold-400/80 to-gold-400"
            initial={animated ? { scaleX: 0 } : undefined}
            animate={animated ? { scaleX: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      )}

      {/* Bottom border line */}
      {(variant === "full" || variant === "bottom") && (
        <div className="absolute bottom-2 left-12 right-12 md:left-16 md:right-16">
          <motion.div
            className="h-px bg-gradient-to-r from-gold-400 via-gold-400/80 to-gold-400"
            initial={animated ? { scaleX: 0 } : undefined}
            animate={animated ? { scaleX: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      )}

      {/* Left border line */}
      {variant === "full" && (
        <div className="absolute left-2 top-12 bottom-12 md:top-16 md:bottom-16">
          <motion.div
            className="w-px h-full bg-gradient-to-b from-gold-400 via-gold-400/80 to-gold-400"
            initial={animated ? { scaleY: 0 } : undefined}
            animate={animated ? { scaleY: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      )}

      {/* Right border line */}
      {variant === "full" && (
        <div className="absolute right-2 top-12 bottom-12 md:top-16 md:bottom-16">
          <motion.div
            className="w-px h-full bg-gradient-to-b from-gold-400 via-gold-400/80 to-gold-400"
            initial={animated ? { scaleY: 0 } : undefined}
            animate={animated ? { scaleY: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      )}

      {children}
    </div>
  );
}
