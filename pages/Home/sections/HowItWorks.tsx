import { motion } from "framer-motion";
import {
  Camera,
  BrainCircuit,
  AlertTriangle,
  HardDrive,
  Aperture,
  Brain,
} from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";

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

const stack = [
  {
    icon: HardDrive,
    label: "Edge Devices",
    detail: "Ruggedized mini-computers for on-loom AI",
  },
  {
    icon: Aperture,
    label: "Camera Systems",
    detail: "Industrial lenses tuned for textiles",
  },
  {
    icon: Brain,
    label: "ML Models",
    detail: "In-house models recognizing complex defects",
  },
];

export default function HowItWorks() {
  return (
    <section id="technology" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The process"
          title="How It Works"
          subtitle="Three steps, running continuously while the fabric moves."
        />

        {/* Process flow */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            aria-hidden
            className="absolute top-9 right-[16%] left-[16%] hidden h-0.5 sm:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(58,181,169,.15) 0%, rgba(58,181,169,.55) 50%, rgba(58,181,169,.15) 100%)",
            }}
          />
          <ol className="grid gap-10 sm:grid-cols-3 sm:gap-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <motion.li
                key={title}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="relative">
                  <div
                    className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
                    style={{ boxShadow: "0 8px 24px -12px rgba(26,43,75,.35)" }}
                  >
                    <Icon className="h-8 w-8" style={{ color: "#3ab5a9" }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: "#1a2b4b" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-800">
                  {title}
                </h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-6 text-slate-600">
                  {desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* What runs it */}
        <div className="mx-auto mt-16 max-w-5xl">
          <p className="text-center text-xs font-semibold tracking-wider text-slate-500 uppercase">
            What runs it
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {stack.map(({ icon: Icon, label, detail }, i) => (
              <motion.div
                key={label}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/70 p-4 backdrop-blur-sm transition-colors hover:border-[#3ab5a9]/50 hover:bg-white"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#e8f5f3" }}
                >
                  <Icon className="h-4.5 w-4.5" style={{ color: "#3ab5a9" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-600">{detail}</p>
                </div>
              </motion.div>
            ))}
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
