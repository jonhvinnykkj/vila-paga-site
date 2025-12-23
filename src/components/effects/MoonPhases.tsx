"use client";

import { motion } from "framer-motion";

interface MoonPhasesProps {
  className?: string;
}

export function MoonPhases({ className }: MoonPhasesProps) {
  const phases = [
    { phase: "new", symbol: "🌑" },
    { phase: "waxing-crescent", symbol: "🌒" },
    { phase: "first-quarter", symbol: "🌓" },
    { phase: "waxing-gibbous", symbol: "🌔" },
    { phase: "full", symbol: "🌕" },
    { phase: "waning-gibbous", symbol: "🌖" },
    { phase: "last-quarter", symbol: "🌗" },
    { phase: "waning-crescent", symbol: "🌘" },
  ];

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {phases.map((moon, i) => (
        <motion.div
          key={moon.phase}
          className="text-2xl opacity-40 hover:opacity-100 transition-opacity cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          whileHover={{
            scale: 1.3,
            opacity: 1,
            filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.8))",
          }}
          transition={{ delay: i * 0.1 }}
        >
          {moon.symbol}
        </motion.div>
      ))}
    </div>
  );
}
