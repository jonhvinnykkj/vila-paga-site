"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "ornate" | "simple" | "leaves";
  color?: "gold" | "forest";
}

export function SectionDivider({
  className,
  variant = "ornate",
  color = "gold",
}: SectionDividerProps) {
  const colorClass = color === "gold" ? "text-gold-400" : "text-forest-600";

  if (variant === "simple") {
    return (
      <div className={cn("flex items-center justify-center gap-4 py-8", className)}>
        <motion.div
          className={`h-px w-20 md:w-32 bg-gradient-to-r from-transparent to-current ${colorClass}`}
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.span
          className={`${colorClass} text-lg`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          ◆
        </motion.span>
        <motion.div
          className={`h-px w-20 md:w-32 bg-gradient-to-l from-transparent to-current ${colorClass}`}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </div>
    );
  }

  if (variant === "leaves") {
    return (
      <div className={cn("flex items-center justify-center py-8", className)}>
        <motion.svg
          className={`w-full max-w-sm h-8 ${colorClass}`}
          viewBox="0 0 300 32"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left line */}
          <line x1="10" y1="16" x2="100" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.5" />

          {/* Left leaf */}
          <path d="M100 16 Q110 8 120 12 Q115 16 120 20 Q110 24 100 16" stroke="currentColor" strokeWidth="1" fill="none" />

          {/* Center diamond */}
          <path d="M140 16 L150 8 L160 16 L150 24 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="150" cy="16" r="3" fill="currentColor" />

          {/* Right leaf */}
          <path d="M200 16 Q190 8 180 12 Q185 16 180 20 Q190 24 200 16" stroke="currentColor" strokeWidth="1" fill="none" />

          {/* Right line */}
          <line x1="200" y1="16" x2="290" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </motion.svg>
      </div>
    );
  }

  // Ornate variant (default)
  return (
    <div className={cn("flex items-center justify-center py-8", className)}>
      <motion.svg
        className={`w-full max-w-md h-8 ${colorClass}`}
        viewBox="0 0 400 32"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Left line */}
        <line x1="10" y1="16" x2="140" y2="16" stroke="currentColor" strokeWidth="1" />

        {/* Left flourish */}
        <path
          d="M140 16 Q150 10 160 12 Q168 14 170 16 Q168 18 160 20 Q150 22 140 16"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />

        {/* Center ornament */}
        <rect x="175" y="6" width="50" height="20" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M200 8 L208 16 L200 24 L192 16 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="200" cy="16" r="2.5" fill="currentColor" />
        <circle cx="182" cy="16" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="218" cy="16" r="1.5" fill="currentColor" opacity="0.5" />

        {/* Right flourish */}
        <path
          d="M260 16 Q250 10 240 12 Q232 14 230 16 Q232 18 240 20 Q250 22 260 16"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />

        {/* Right line */}
        <line x1="260" y1="16" x2="390" y2="16" stroke="currentColor" strokeWidth="1" />
      </motion.svg>
    </div>
  );
}
