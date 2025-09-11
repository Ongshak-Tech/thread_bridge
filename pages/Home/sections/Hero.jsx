import { MotionConfig, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#d9e1ec"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="scan" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3ab5a9" stopOpacity="0" />
            <stop offset="50%" stopColor="#3ab5a9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3ab5a9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 h-24"
        style={{
          background:
            "linear-gradient(180deg, rgba(58,181,169,0) 0%, rgba(58,181,169,.35) 50%, rgba(58,181,169,0) 100%)",
          boxShadow: "0 0 30px rgba(58,181,169,.25)",
        }}
        initial={{ y: "-20%", opacity: 0.6 }}
        animate={{ y: ["-20%", "820%"], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(26,43,75,0.05) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(26,43,75,0.06) 0, transparent 35%), radial-gradient(circle at 50% 80%, rgba(26,43,75,0.05) 0, transparent 40%)",
        }}
      ></motion.div>
    </div>
  );
}

function FloatingNodes() {
  const nodes = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        duration: 6 + Math.random() * 6,
      })),
    [] // run only once
  );

  return (
    <div className="pointer-events-none absolute inset-0">
      {nodes.map((node, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full"
          style={{ backgroundColor: "#3ab5a9" }}
          initial={{
            opacity: 0.25,
            scale: 0.8,
            x: node.x,
            y: node.y,
          }}
          animate={{
            opacity: [0.25, 0.6, 0.25],
            y: ["-=10", "+=10"],
            x: ["+=6", "-=6"],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        ></motion.span>
      ))}
    </div>
  );
}

// function FloatingNodes() {
//   const nodes = Array.from({ length: 12 });
//   return (
//     <div className="pointer-events-none absolute inset-0">
//       {nodes.map((_, i) => (
//         <motion.span
//           key={i}
//           className="absolute h-2 w-2 rounded-full"
//           style={{ backgroundColor: "#3ab5a9" }}
//           initial={{
//             opacity: 0.25,
//             scale: 0.8,
//             x: Math.random() * 100 + "%",
//             y: Math.random() * 100 + "%",
//           }}
//           animate={{
//             opacity: [0.25, 0.6, 0.25],
//             y: ["-=10", "+=10"],
//             x: ["+=6", "-=6"],
//           }}
//           transition={{
//             duration: 6 + Math.random() * 6,
//             repeat: Infinity,
//             repeatType: "mirror",
//             ease: "easeInOut",
//           }}
//         ></motion.span>
//       ))}
//     </div>
//   );
// }

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="relative">
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-3xl text-center relative z-10">
            <motion.h1
              className="text-4xl font-extrabold tracking-tight sm:text-6xl"
              style={{ color: "#1a2b4b" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Revolutionizing Fabric Quality with Real-Time AI Detection
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8"
              style={{ color: "#243b5a" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              threadBridge transforms garment manufacturing with instant defect
              detection—reducing waste, increasing productivity, and ensuring
              flawless quality at the speed of production.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Button
                className={cn(
                  "group relative overflow-hidden rounded-lg px-6 py-5 text-base font-semibold",
                  "shadow-lg"
                )}
                style={{ backgroundColor: "#1a2b4b", color: "white" }}
                onClick={() => {
                  const el = document.getElementById("pilot");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="relative z-10">Join Our Pilot Program</span>
                <motion.span
                  aria-hidden
                  className="absolute inset-0 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: ["-100%", "0%"] }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(58,181,169,0.0), rgba(58,181,169,0.3), rgba(58,181,169,0))",
                  }}
                />
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </Button>
            </motion.div>
          </div>
        </div>
        <AnimatedGrid />
        <FloatingNodes />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundColor: "#f5f7fa" }}
      />
    </section>
  );
}
