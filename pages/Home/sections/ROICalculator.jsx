import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

export default function ROICalculator() {
  const [volume, setVolume] = useState(10000);
  const [defectRate, setDefectRate] = useState(5);
  const [cost, setCost] = useState(2);
  const savings = Math.round(volume * (defectRate / 100) * cost * 0.4);

  return (
    <section id="roi" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h3
          className="text-center text-3xl font-bold text-slate-800 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ROI Calculator
        </motion.h3>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-sm font-medium text-slate-700">Production volume (m)</label>
                <Input type="number" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Defect rate (%)</label>
                <Input type="number" value={defectRate} onChange={(e) => setDefectRate(Number(e.target.value))} className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Cost per meter ($)</label>
                <Input type="number" value={cost} onChange={(e) => setCost(Number(e.target.value))} className="mt-2" />
              </div>
            </div>
          </div>
          <motion.div
            className="grid place-items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-slate-700">Estimated annual savings</p>
            <p className="mt-2 text-5xl font-extrabold" style={{ color: "#10b981" }}>${savings.toLocaleString()}</p>
            <p className="mt-1 text-sm text-slate-600">Assuming 40% waste reduction with threadBridge</p>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "linear-gradient(to bottom, #f5f7fa 0%, #eef2f7 100%)" }} />
    </section>
  );
}
