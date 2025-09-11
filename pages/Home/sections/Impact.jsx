import { motion } from "framer-motion";
import { TrendingDown, ShieldCheck, Timer, Layers } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Production Loss",
    desc: "Up to 40% reduction in fabric waste",
    color: "#ef4444",
  },
  {
    icon: ShieldCheck,
    title: "Instant Quality Assurance",
    desc: "Real-time feedback prevents defective batches",
    color: "#10b981",
  },
  { icon: Timer, title: "Save Time & Labor", desc: "Automated detection replaces manual inspection", color: "#3ab5a9" },
  { icon: Layers, title: "Scalable Integration", desc: "Grows with your production capacity", color: "#1a2b4b" },
];

export default function Impact() {
  return (
    <section id="benefits" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold text-slate-800 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Impact & Benefits
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="group rounded-xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: "#f0f4f8" }}>
                <b.icon className="h-6 w-6" style={{ color: b.color }} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{b.title}</h3>
              <p className="mt-2 text-slate-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "linear-gradient(to bottom, #f5f7fa 0%, #eef2f7 60%, #f5f7fa 100%)" }} />
    </section>
  );
}
