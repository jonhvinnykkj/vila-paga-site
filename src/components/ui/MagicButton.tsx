"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
}

export function MagicButton({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  href,
}: MagicButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center
    font-display font-semibold uppercase tracking-wider
    overflow-hidden
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500
      text-forest-900
      hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]
      border-2 border-gold-300
    `,
    secondary: `
      bg-forest-800
      text-cream-100
      hover:bg-forest-700
      border-2 border-gold-500
      hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]
    `,
    outline: `
      bg-transparent
      text-gold-400
      border-2 border-gold-400
      hover:bg-gold-400/10
      hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer Effect */}
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </span>

      {/* Corner Decorations */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-60" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current opacity-60" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current opacity-60" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-60" />

      <span className="relative z-10">{children}</span>
    </Component>
  );
}
