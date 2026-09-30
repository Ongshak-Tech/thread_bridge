import { motion } from "framer-motion";
import { Flag, Cpu, Rocket, Gauge, Percent, Recycle } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";

const milestones = [
  {
    year: "2023",
    icon: Flag,
    title: "Founded",
    text: "Started with a mission to redefine textile quality control.",
  },
  {
    year: "2024",
    icon: Cpu,
    title: "Models trained",
    text: "Proprietary ML models trained on a diverse library of real defects.",
  },
  {
    year: "2025",
    icon: Rocket,
    title: "Pilot program",
    text: "Running on the floor with leading garment manufacturers.",
  },
];

// Figures stated elsewhere on this page — kept in one place so they stay in sync.
const stats = [
  { icon: Percent, value: "98.4%", label: "Classification accuracy" },
  { icon: Gauge, value: "50 m/min", label: "Inspection speed" },
  { icon: Recycle, value: "Up to 40%", label: "Less fabric waste" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our story"
          title="About threadBridge"
          subtitle="Why we built an inspection system that never blinks."
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl leading-8 font-medium text-slate-800">
              We&apos;re textile technology pioneers, combining deep industry
              knowledge with cutting-edge AI to solve manufacturing&apos;s most
              persistent quality challenges.
            </p>
            <p className="mt-5 leading-7 text-slate-600">
              Fabric faults have always been caught by eye, roll by roll, at the
              pace a person can sustain. We built threadBridge to move that work
              inline—so defects surface the moment they appear, not after a
              batch has already been cut.
            </p>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#3ab5a9" }} />
                  <dd
                    className="mt-3 text-2xl font-extrabold tracking-tight"
                    style={{ color: "#1a2b4b" }}
                  >
                    {value}
                  </dd>
                  <dt className="mt-1 text-sm text-slate-600">{label}</dt>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-[#3ab5a9]/50 via-slate-200 to-transparent"
            />
            <ol className="flex flex-col gap-8">
              {milestones.map(({ year, icon: Icon, title, text }, i) => (
                <motion.li
                  key={year}
                  className="relative flex gap-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-4 ring-[#f5f7fa]"
                    style={{ backgroundColor: "#e8f5f3" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "#3ab5a9" }} />
                  </div>
                  <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide"
                        style={{ backgroundColor: "#e8f5f3", color: "#1a7d73" }}
                      >
                        {year}
                      </span>
                      <h3 className="font-semibold text-slate-800">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #f5f7fa 0%, #f5f7fa 50%, #eef2f7 100%)",
        }}
      />
    </section>
  );
}
