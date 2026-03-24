"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** A premium, high-end scroll progress bar at the very top of the page. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Spring physics for that "snappy yet smooth" Apple/Notion feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent)] to-blue-400 origin-left z-[100] shadow-[0_1px_10px_rgba(35,131,226,0.3)]"
      style={{ scaleX }}
    />
  );
}
