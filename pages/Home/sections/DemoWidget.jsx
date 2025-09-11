import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";

function randomBoxes(n) {
  const boxes = [];
  for (let i = 0; i < n; i++) {
    boxes.push({
      id: i,
      x: Math.random() * 70 + 5,
      y: Math.random() * 70 + 5,
      w: Math.random() * 10 + 6,
      h: Math.random() * 8 + 5,
    });
  }
  return boxes;
}

export default function DemoWidget() {
  const [active, setActive] = useState(true);
  const [boxes, setBoxes] = useState(() => randomBoxes(6));

  return (
    <section id="demo" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-800">
            Live Demo: Defect Detection Simulator
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Scanning</span>
            <Switch checked={active} onCheckedChange={setActive} />
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div
              className="relative h-[360px] w-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #f1f5f9 0 8px, #e2e8f0 8px 16px)",
              }}
            >
              {active && (
                <motion.div
                  className="absolute inset-x-0 h-10"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(58,181,169,0) 0%, rgba(58,181,169,.35) 50%, rgba(58,181,169,0) 100%)",
                  }}
                  animate={{ y: ["-10%", "110%"] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
              {boxes.map((b) => (
                <motion.div
                  key={b.id}
                  className="absolute rounded border-2"
                  style={{
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    width: `${b.w}%`,
                    height: `${b.h}%`,
                    borderColor: "#ef4444",
                    boxShadow: "0 0 0 2px rgba(239,68,68,0.2)",
                    background: "rgba(239,68,68,0.06)",
                  }}
                  animate={
                    active ? { opacity: [0.8, 1, 0.8] } : { opacity: 0.25 }
                  }
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-slate-200 p-4 text-sm text-slate-600">
              <span>Detected defects</span>
              <span className="font-semibold text-rose-600">
                {boxes.length}
              </span>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-800">
              How to interact
            </h4>
            <p className="mt-2 text-slate-600">
              Click anywhere on the fabric to add a simulated defect. Toggle
              scanning to see live detection overlays.
            </p>
            <div className="mt-4 text-sm text-slate-600">
              Click count adds defects. Double-click resets the simulation.
            </div>
            <div
              className="mt-6 cursor-crosshair rounded-lg border border-dashed border-slate-300 bg-slate-50/60 p-6 text-sm text-slate-600"
              onClick={() => setBoxes((b) => [...b, ...randomBoxes(1)])}
              onDoubleClick={() => setBoxes(randomBoxes(6))}
            >
              Add defects by clicking here.
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to bottom, #eef2f7 0%, #f5f7fa 100%)",
        }}
      />
    </section>
  );
}
