"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PentagramProps {
  className?: string;
  size?: number;
  animated?: boolean;
  color?: string;
  strokeWidth?: number;
}

export function Pentagram({
  className,
  size = 100,
  animated = true,
  color = "currentColor",
  strokeWidth = 2,
}: PentagramProps) {
  // Calculate pentagram points
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.4;

  const points: [number, number][] = [];
  for (let i = 0; i < 5; i++) {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    points.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
  }

  // Create star path (connecting every other point)
  const starPath = `M ${points[0][0]} ${points[0][1]}
    L ${points[2][0]} ${points[2][1]}
    L ${points[4][0]} ${points[4][1]}
    L ${points[1][0]} ${points[1][1]}
    L ${points[3][0]} ${points[3][1]} Z`;

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  const circleVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
        opacity: { duration: 0.5, delay: 0.5 },
      },
    },
  };

  return (
    <svg
      className={cn("pentagram", className)}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r + 5}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        variants={animated ? circleVariants : undefined}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      />

      {/* Pentagram Star */}
      <motion.path
        d={starPath}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="none"
        variants={animated ? pathVariants : undefined}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      />
    </svg>
  );
}
