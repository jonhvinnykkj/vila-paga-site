"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pentagram } from "@/components/ui/Pentagram";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-forest-900 flex items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 25H55L39 37L45 57L30 45L15 57L21 37L5 25H25L30 5Z' fill='none' stroke='%23d4af37' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Animated Pentagram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Pentagram size={120} color="#d4af37" strokeWidth={2} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-display text-4xl text-gold-400 mt-8 tracking-wider"
            >
              Vila Pagã
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="font-body text-cream-400 mt-2 italic"
            >
              Carregando magia...
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 w-48 h-1 bg-forest-700 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              />
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gold-400/30" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gold-400/30" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gold-400/30" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gold-400/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
