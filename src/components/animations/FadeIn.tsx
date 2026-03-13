"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const FadeIn = ({ children, delay = 0, direction = "up", className }: FadeInProps) => {
  // Logique de direction pour le décalage initial
  const directionOffset = {
    up: 30,
    down: -30,
    left: 30,
    right: -30,
  };

  const initialY = direction === "up" || direction === "down" ? directionOffset[direction] : 0;
  const initialX = direction === "left" || direction === "right" ? directionOffset[direction] : 0;

  return (
    <motion.div
      className={cn("h-full", className)}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        type: "spring",
        bounce: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};