import { motion } from "framer-motion";
import { Camera, BrainCircuit, AlertTriangle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Capture",
    desc: "High-res camera scanning fabric with precision",
  },
  {
    icon: BrainCircuit,
    title: "Analyze",
    desc: "Neural network processes fabric patterns in real-time",
  },
  {
    icon: AlertTriangle,
    title: "Alert",
    desc: "Immediate notifications highlight defects",
  },
];

export default function HowItWorks() {
  return (
    <section id="technology" className="relative py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold text-slate-800 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: "#e8f5f3" }}>
                <s.icon className="h-6 w-6" style={{ color: "#3ab5a9" }} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Edge Devices", detail: "Ruggedized mini-computers for on-loom AI" },
            { label: "Camera Systems", detail: "Industrial lenses tuned for textiles" },
            { label: "ML Models", detail: "In-house models recognizing complex defects" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="rounded-lg border border-dashed border-slate-300 bg-slate-50/60 p-4 hover:bg-slate-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
            >
              <p className="text-sm font-semibold text-slate-700">{item.label}</p>
              <p className="text-sm text-slate-600">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "linear-gradient(to bottom, #eef2f7 0%, #f5f7fa 100%)" }} />
    </section>
  );
}
