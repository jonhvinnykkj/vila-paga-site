"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagicCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Pentagram cursor */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className="text-gold-400"
          >
            <motion.path
              d="M15 2 L18 11 L27 11 L20 17 L23 27 L15 21 L7 27 L10 17 L3 11 L12 11 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill={isHovering ? "currentColor" : "none"}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Trail particles */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="relative w-8 h-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
              animate={{
                scale: [1, 0],
                opacity: [0.5, 0],
                x: [0, (Math.random() - 0.5) * 40],
                y: [0, (Math.random() - 0.5) * 40],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
