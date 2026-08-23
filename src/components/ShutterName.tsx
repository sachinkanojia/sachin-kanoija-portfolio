"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ShutterNameProps {
  className?: string;
}

export default function ShutterName({ className = "" }: ShutterNameProps) {
  const [count, setCount] = useState(0);
  const name = "Sachin Kanojia";
  const characters = name.split("");

  // Auto-trigger animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 6000 + characters.length * 40 + 600); // 6s hold + stagger time + animation duration
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "baseline" }}>
      {/* "I'm " prefix - static */}
      <span
        style={{
          color: "white",
          fontWeight: 800,
          fontSize: "0.7em",
          lineHeight: 1.2,
        }}
      >
        I'm&nbsp;
      </span>

      {/* Continuous background wrapper for the whole name */}
      <span
        style={{
          background: "rgba(0, 0, 0, 0.4)",
          padding: "4px 12px 6px 12px",
          borderRadius: "8px",
          display: "inline-flex",
          alignItems: "baseline",
        }}
      >
        {/* Shutter animated name */}
        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            className="flex flex-wrap justify-center items-center"
            style={{ display: "inline-flex" }}
          >
            {characters.map((char, i) => (
              <div key={i} className="relative px-[0.1vw] overflow-hidden" style={{ display: "inline-flex" }}>
                {/* Main Character - Gold color, NO individual bg/padding */}
                <motion.span
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.04 + 0.1, duration: 0.6 }}
                  style={{
                    color: "#FFA800",
                    fontWeight: 800,
                    fontSize: "0.7em",
                    lineHeight: 1.2,
                    textShadow:
                      "0 0 30px rgba(255,168,0,0.9), 0 0 60px rgba(255,168,0,0.6), 0 2px 10px rgba(0,0,0,0.8)",
                    letterSpacing: "0.02em",
                    display: "inline-block",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* Top Slice Layer - Gold */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.04,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
                    color: "#FFA800",
                    fontWeight: 800,
                    fontSize: "0.7em",
                    lineHeight: 1.2,
                    letterSpacing: "0.02em",
                    display: "inline-block",
                    textShadow:
                      "0 0 30px rgba(255,168,0,0.9), 0 0 60px rgba(255,168,0,0.6), 0 2px 10px rgba(0,0,0,0.8)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* Middle Slice Layer - Gold */}
                <motion.span
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "-100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.04 + 0.08,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                    color: "#FFA800",
                    fontWeight: 800,
                    fontSize: "0.7em",
                    lineHeight: 1.2,
                    letterSpacing: "0.02em",
                    display: "inline-block",
                    textShadow:
                      "0 0 30px rgba(255,168,0,0.9), 0 0 60px rgba(255,168,0,0.6), 0 2px 10px rgba(0,0,0,0.8)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* Bottom Slice Layer - Gold */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.04 + 0.16,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                    color: "#FFA800",
                    fontWeight: 800,
                    fontSize: "0.7em",
                    lineHeight: 1.2,
                    letterSpacing: "0.02em",
                    display: "inline-block",
                    textShadow:
                      "0 0 30px rgba(255,168,0,0.9), 0 0 60px rgba(255,168,0,0.6), 0 2px 10px rgba(0,0,0,0.8)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </span>
    </span>
  );
}