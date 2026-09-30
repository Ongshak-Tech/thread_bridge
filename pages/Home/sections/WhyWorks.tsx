import { motion } from "framer-motion";
import { PlugZap, UserCheck2, Radar, Hand } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";

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
  {
    icon: Radar,
    title: "Real-Time Detection",
    desc: "Instant feedback, immediate corrections",
  },
  {
    icon: Hand,
    title: "Hands-Free Operation",
    desc: "Seamless integration with existing workflows",
  },
];

export default function WhyWorks() {
  return (
    <section id="why" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Built for the floor"
          title="Why threadBridge Works"
          subtitle="It fits the line you already run—no retooling, no new specialists."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3ab5a9]/50 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-[#3ab5a9]"
                style={{ backgroundColor: "#e8f5f3" }}
              >
                <Icon
                  className="h-6 w-6 transition-colors duration-300 group-hover:text-white"
                  style={{ color: "#3ab5a9" }}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {title}
                </h3>
                <p className="mt-1.5 leading-6 text-slate-600">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #f5f7fa 0%, #f5f7fa 60%, #eef2f7 100%)",
        }}
      />
    </section>
  );
}
