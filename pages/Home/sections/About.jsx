import { motion } from "framer-motion";

export default function About() {
  const milestones = [
    { year: "2023", text: "Founded with a mission to redefine textile QC" },
    { year: "2024", text: "Proprietary ML models trained on diverse defects" },
    { year: "2025", text: "Pilot program with leading garment manufacturers" },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold text-slate-800 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About threadBridge
        </motion.h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <motion.p
            className="text-lg text-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We're textile technology pioneers, combining deep industry knowledge with cutting-edge AI to solve manufacturing's most persistent quality challenges.
          </motion.p>
          <div className="grid gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="rounded-lg border border-slate-200 bg-white p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <p className="text-sm font-semibold text-slate-700">{m.year}</p>
                <p className="text-slate-600">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "linear-gradient(to bottom, #f5f7fa 0%, #f5f7fa 50%, #eef2f7 100%)" }} />
    </section>
  );
}
