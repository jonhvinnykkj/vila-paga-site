"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FirefliesProps {
  className?: string;
  count?: number;
}

export function Fireflies({ className, count = 30 }: FirefliesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing fireflies
    container.innerHTML = "";

    // Create fireflies
    for (let i = 0; i < count; i++) {
      const firefly = document.createElement("div");
      firefly.className = "firefly";

      // Random position
      firefly.style.left = `${Math.random() * 100}%`;
      firefly.style.top = `${Math.random() * 100}%`;

      // Random animation delay
      firefly.style.animationDelay = `${Math.random() * 5}s`;

      // Random size
      const size = 2 + Math.random() * 4;
      firefly.style.width = `${size}px`;
      firefly.style.height = `${size}px`;

      // Random animation duration
      firefly.style.animationDuration = `${3 + Math.random() * 4}s`;

      container.appendChild(firefly);
    }
  }, [count]);

  return (
    <>
      <style jsx global>{`
        .fireflies-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 10;
        }

        .firefly {
          position: absolute;
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 1) 0%,
            rgba(212, 175, 55, 0.8) 30%,
            rgba(212, 175, 55, 0) 70%
          );
          border-radius: 50%;
          animation: fireflyFloat 4s ease-in-out infinite;
          filter: blur(0.5px);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.8),
            0 0 20px rgba(212, 175, 55, 0.5), 0 0 30px rgba(212, 175, 55, 0.3);
        }

        @keyframes fireflyFloat {
          0%,
          100% {
            opacity: 0;
            transform: translateY(0) translateX(0) scale(0.5);
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateY(-30px) translateX(20px) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translateY(-50px) translateX(-10px) scale(0.8);
          }
          75% {
            transform: translateY(-30px) translateX(15px) scale(1);
          }
          90% {
            opacity: 1;
          }
        }
      `}</style>
      <div
        ref={containerRef}
        className={cn("fireflies-container", className)}
      />
    </>
  );
}
