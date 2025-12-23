"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrnateButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function OrnateButton({
  children,
  className,
  onClick,
  href,
}: OrnateButtonProps) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-3 bg-forest-800 border-2 border-gold-400 rounded group hover:bg-forest-700 transition-colors",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Corner decorations */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-300 rounded-tl" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-300 rounded-tr" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-300 rounded-bl" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold-300 rounded-br" />

      {/* Inner border */}
      <span className="absolute inset-1 border border-gold-400/30 rounded pointer-events-none" />

      {/* Glow effect on hover */}
      <motion.span
        className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          boxShadow: "0 0 20px rgba(212, 175, 55, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.1)",
        }}
      />

      {/* Button text */}
      <span className="relative z-10 font-display text-sm uppercase tracking-widest text-gold-400 group-hover:text-gold-300 transition-colors">
        {children}
      </span>
    </Component>
  );
}
