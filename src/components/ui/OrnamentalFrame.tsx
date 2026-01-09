"use client";

import { cn } from "@/lib/utils";

interface OrnamentalFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "forest";
}

export function OrnamentalFrame({
  children,
  className,
  variant = "gold",
}: OrnamentalFrameProps) {
  const colorClass = variant === "gold" ? "text-gold-400" : "text-forest-700";

  return (
    <div className={cn("relative", className)}>
      {/* Top Left Corner */}
      <svg
        className={cn("absolute -top-4 -left-4 w-16 h-16", colorClass)}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 56V16C8 11.5817 11.5817 8 16 8H56"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 48V24C16 21.7909 17.7909 20 20 20H44"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="8" cy="56" r="3" fill="currentColor" />
        <circle cx="56" cy="8" r="3" fill="currentColor" />
        <path
          d="M24 8L32 2L40 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Top Right Corner */}
      <svg
        className={cn("absolute -top-4 -right-4 w-16 h-16", colorClass)}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56 56V16C56 11.5817 52.4183 8 48 8H8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M48 48V24C48 21.7909 46.2091 20 44 20H20"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="56" cy="56" r="3" fill="currentColor" />
        <circle cx="8" cy="8" r="3" fill="currentColor" />
        <path
          d="M40 8L32 2L24 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Bottom Left Corner */}
      <svg
        className={cn("absolute -bottom-4 -left-4 w-16 h-16", colorClass)}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8V48C8 52.4183 11.5817 56 16 56H56"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 16V40C16 42.2091 17.7909 44 20 44H44"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="8" cy="8" r="3" fill="currentColor" />
        <circle cx="56" cy="56" r="3" fill="currentColor" />
        <path
          d="M24 56L32 62L40 56"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Bottom Right Corner */}
      <svg
        className={cn("absolute -bottom-4 -right-4 w-16 h-16", colorClass)}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56 8V48C56 52.4183 52.4183 56 48 56H8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M48 16V40C48 42.2091 46.2091 44 44 44H20"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="56" cy="8" r="3" fill="currentColor" />
        <circle cx="8" cy="56" r="3" fill="currentColor" />
        <path
          d="M40 56L32 62L24 56"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {children}
    </div>
  );
}
