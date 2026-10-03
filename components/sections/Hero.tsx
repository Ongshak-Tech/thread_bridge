"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";

import { Button } from "@/components/ui/button";

// The player reaches for `window` at import time, so it stays out of the
// server render. It also only mounts once the modal opens, which is what
// keeps the full 32 MB file off the initial page load.
const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
  loading: () => (
    <div
      className="aspect-video w-full animate-pulse rounded-xl bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: "url('/video/poster.jpg')" }}
    />
  ),
});

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
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
      />
    </div>
  );
}

type FloatingNode = {
  x: string;
  y: string;
  duration: number;
};

function FloatingNodes() {
  const [nodes, setNodes] = useState<FloatingNode[]>([]);

  useEffect(() => {
    // Positions are randomised on the client only, so server and client
    // markup cannot disagree during hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNodes(
      Array.from({ length: 12 }).map(() => ({
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        duration: 6 + Math.random() * 6,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full">
      {nodes.map((node, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full"
          style={{ backgroundColor: "#3ab5a9", left: node.x, top: node.y }}
          initial={{ opacity: 0.25, scale: 0.8 }}
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
        />
      ))}
    </div>
  );
}

/**
 * Full film, with sound, over a black scrim.
 *
 * Rendered into document.body: the hero section is `isolate`, so a z-index set
 * inside it is scoped to that stacking context and would sit under the sticky
 * navbar however high it went. Only mounts after a click, so `document` exists.
 */
function VideoModal({ onClose }: { onClose: () => void }) {
  // Close on Escape, and stop the page behind from scrolling.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label="threadBridge product film"
    >
      <motion.div
        className="absolute inset-0 bg-black/90"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />

      <motion.div
        className="relative w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.9 }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-3 -right-1 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-[#3ab5a9] focus-visible:outline-none sm:-top-12 sm:right-0"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
          <VideoPlayer autoPlay />
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const previewRef = useRef<HTMLVideoElement>(null);

  // Safari won't always honour the autoplay attribute on its own (it can try
  // before hydration and give up), so start the muted preview explicitly.
  useEffect(() => {
    const video = previewRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      // Low Power Mode or a "Never Auto-Play" setting; the poster stays up.
    });
  }, []);

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Decorative field, confined to the top so it never fights the video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      >
        <AnimatedGrid />
        <FloatingNodes />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            style={{ color: "#1a2b4b" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Every defect, caught in real time.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-pretty"
            style={{ color: "#243b5a" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            threadBridge scans fabric on your line, flags spinning, knitting and
            dyeing faults as they pass, and puts them on a map of the roll
            before the batch is ever cut.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Button
              asChild
              className="group px-6 py-5 text-base font-semibold shadow-lg"
              style={{ backgroundColor: "#1a2b4b", color: "white" }}
            >
              <a href="#pilot">
                Join Our Pilot Program
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 bg-white/70 px-6 py-5 text-base font-semibold text-slate-700 backdrop-blur hover:bg-white"
            >
              <a href="#demo">See the demo</a>
            </Button>
          </motion.div>
        </div>

        {/* Silent looping preview; click opens the full film with sound */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rounded-2xl bg-white/60 p-2 shadow-[0_24px_80px_-24px_rgba(26,43,75,.45)] ring-1 ring-slate-900/5 backdrop-blur">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Play the full film with sound"
              className="group relative block w-full cursor-pointer overflow-hidden rounded-xl bg-slate-950 focus-visible:ring-2 focus-visible:ring-[#3ab5a9] focus-visible:ring-offset-4 focus-visible:outline-none"
            >
              <video
                ref={previewRef}
                className="aspect-video w-full object-cover"
                src="/video/threadBridge-preview.mp4"
                poster="/video/poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden
              />

              {/* Scrim keeps the button legible over bright frames */}
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-slate-950/20 transition-colors group-hover:from-slate-950/70"
              />

              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="relative flex h-20 w-20 items-center justify-center">
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "#3ab5a9" }}
                    animate={{ scale: [1, 1.45], opacity: [0.45, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <span
                    className="relative flex h-16 w-16 items-center justify-center rounded-full shadow-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#3ab5a9" }}
                  >
                    <Play
                      className="ml-0.5 h-7 w-7"
                      style={{ color: "#0b1a33" }}
                      fill="#0b1a33"
                    />
                  </span>
                </span>
              </span>

              <span className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-5">
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur transition-colors group-hover:bg-white/25">
                  Watch the full film · 1:20
                </span>
              </span>
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            From loom to scored roll — defects flagged the moment they appear.
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && <VideoModal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundColor: "#f5f7fa" }}
      />
    </section>
  );
}
