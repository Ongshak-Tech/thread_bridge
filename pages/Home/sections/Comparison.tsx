import { motion } from "framer-motion";
import { Check, Minus, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";

type Row = {
  label: string;
  tb: string;
  trad: string;
};

const rows: Row[] = [
  { label: "Detection Speed", tb: "Real-time (ms)", trad: "Minutes to hours" },
  { label: "Consistency", tb: "99%+ consistent", trad: "Varies by operator" },
  { label: "Training", tb: "Minutes", trad: "Weeks" },
  { label: "Integration", tb: "Plug & play", trad: "Custom retrofit" },
];

export default function Comparison() {
  return (
    <section id="comparison" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Side by side"
          title="threadBridge vs Traditional QC"
          subtitle="The same four questions every QC manager asks, answered both ways."
        />

        {/* Desktop: one contained table, threadBridge column highlighted end to end */}
        <motion.div
          className="mt-12 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-[1.2fr_1fr_1fr]">
            {/* Header */}
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Capability
            </div>
            <div
              className="relative border-b px-5 py-4"
              style={{
                backgroundColor: "#e8f5f3",
                borderBottomColor: "#bfe5e0",
              }}
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: "#3ab5a9" }}
              />
              <span
                className="flex items-center gap-2 text-sm font-bold"
                style={{ color: "#0f5f57" }}
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#3ab5a9" }}
                >
                  <Check className="h-3 w-3 text-white" />
                </span>
                threadBridge
              </span>
            </div>
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-bold text-slate-500">
              Traditional QC
            </div>

            {/* Rows */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              const edge = isLast ? "" : "border-b";

              return (
                <div key={row.label} className="contents">
                  <div
                    className={`${edge} border-slate-100 px-5 py-4 text-sm font-medium text-slate-700`}
                  >
                    {row.label}
                  </div>
                  <div
                    className={`${edge} flex items-center gap-2 px-5 py-4 text-sm font-semibold`}
                    style={{
                      backgroundColor: "#f4fcfb",
                      borderBottomColor: "#dcf0ed",
                      color: "#0f5f57",
                    }}
                  >
                    <Check
                      className="h-4 w-4 shrink-0"
                      style={{ color: "#3ab5a9" }}
                    />
                    {row.tb}
                  </div>
                  <div
                    className={`${edge} flex items-center gap-2 border-slate-100 px-5 py-4 text-sm text-slate-500`}
                  >
                    <Minus className="h-4 w-4 shrink-0 text-slate-300" />
                    {row.trad}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile: one card per capability */}
        <div className="mt-10 flex flex-col gap-3 sm:hidden">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <p className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                {row.label}
              </p>
              <div className="flex items-center gap-3 px-4 py-3">
                <Check
                  className="h-4 w-4 shrink-0"
                  style={{ color: "#3ab5a9" }}
                />
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#0f5f57" }}
                >
                  {row.tb}
                </p>
                <span className="ml-auto text-xs font-medium text-slate-400">
                  threadBridge
                </span>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 px-4 py-3">
                <Minus className="h-4 w-4 shrink-0 text-slate-300" />
                <p className="text-sm text-slate-500">{row.trad}</p>
                <span className="ml-auto text-xs font-medium text-slate-400">
                  Traditional
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-center text-sm text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Curious how it behaves on your line?{" "}
          <a
            href="#pilot"
            className="inline-flex items-center gap-1 font-semibold transition-colors hover:underline"
            style={{ color: "#12857a" }}
          >
            Join the pilot program
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.p>
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
