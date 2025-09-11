import { motion } from "framer-motion";
import { PlugZap, UserCheck2, Radar, Hand } from "lucide-react";

const features = [
  {
    icon: PlugZap,
    title: "Plug & Play Setup",
    desc: "Installs in minutes, no factory downtime",
  },
  {
    icon: UserCheck2,
    title: "Easy Operator Training",
    desc: "Simple interface, immediate adoption",
  },
  { icon: Radar, title: "Real-Time Detection", desc: "Instant feedback, immediate corrections" },
  { icon: Hand, title: "Hands-Free Operation", desc: "Seamless integration with existing workflows" },
];

export default function WhyWorks() {
  return (
    <section id="why" className="relative py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold text-slate-800 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why threadBridge Works
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group rounded-xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: "#e8f5f3" }}>
                <f.icon className="h-6 w-6" style={{ color: "#3ab5a9" }} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "linear-gradient(to bottom, #f5f7fa 0%, #f5f7fa 60%, #eef2f7 100%)" }} />
    </section>
  );
}
