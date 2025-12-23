"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface StarFieldProps {
  count?: number;
  className?: string;
}

export function StarField({ count = 50, className }: StarFieldProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
    }));
    setStars(newStars);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-gold-300"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
            boxShadow: [
              "0 0 2px rgba(212, 175, 55, 0.3)",
              "0 0 8px rgba(212, 175, 55, 0.8)",
              "0 0 2px rgba(212, 175, 55, 0.3)",
            ],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-gold-200"
          style={{
            left: `${20 + i * 30}%`,
            top: "10%",
          }}
          animate={{
            x: [0, 200],
            y: [0, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 5 + i * 3,
            delay: i * 2,
          }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-gold-400 to-transparent -rotate-45 origin-left" />
        </motion.div>
      ))}
    </div>
  );
}
