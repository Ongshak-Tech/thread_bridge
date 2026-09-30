import { motion } from "framer-motion";
import { TrendingDown, ShieldCheck, Timer, Layers } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";

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
  {
    icon: Timer,
    title: "Save Time & Labor",
    desc: "Automated detection replaces manual inspection",
    color: "#3ab5a9",
  },
  {
    icon: Layers,
    title: "Scalable Integration",
    desc: "Grows with your production capacity",
    color: "#1a2b4b",
  },
];

export default function Impact() {
  return (
    <section id="benefits" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What it changes"
          title={<>Impact &amp; Benefits</>}
          subtitle="Fewer wasted metres, fewer surprises at final inspection."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Accent rail that fills in on hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-30 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: color }}
              />
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${color}14` }}
              >
                <Icon className="h-6 w-6" style={{ color }} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">
                {title}
              </h3>
              <p className="mt-2 leading-6 text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #f5f7fa 0%, #eef2f7 60%, #f5f7fa 100%)",
        }}
      />
    </section>
  );
}
