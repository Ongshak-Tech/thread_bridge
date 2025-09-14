import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function generateData(n = 24) {
  const data = [];
  let defects = 30;
  let quality = 60;
  for (let i = 0; i < n; i++) {
    defects = Math.max(5, defects + (Math.random() * 10 - 5));
    quality = Math.min(99, Math.max(50, quality + (Math.random() * 8 - 2)));
    data.push({
      time: `${i}:00`,
      defects: Math.round(defects),
      quality: Math.round(quality),
    });
  }
  return data;
}

export default function LiveData() {
  const [data, setData] = useState(generateData());
  const [rate, setRate] = useState(72);


  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) => {
        const next = prev.slice(1);
        const last = prev[prev.length - 1];
        const newPoint = {
          time: `${parseInt(last.time) + 1}:00`,
          defects: Math.max(
            5,
            Math.round(last.defects + (Math.random() * 10 - 5))
          ),
          quality: Math.min(
            99,
            Math.max(50, Math.round(last.quality + (Math.random() * 6 - 2)))
          ),
        };
        return [...next, newPoint];
      });
      setRate((r) =>
        Math.min(99, Math.max(50, Math.round(r + (Math.random() * 4 - 2))))
      );
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const config = useMemo(
    () => ({
      defects: { label: "Defects detected", color: "#ef4444" },
      quality: { label: "Quality score", color: "#10b981" },
    }),
    []
  );

  return (
    <section id="dashboard" className="relative py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold text-slate-800 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Live Data Visualization
        </motion.h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
            <ChartContainer config={config} className="aspect-[16/9]">
              <LineChart
                data={data}
                margin={{ left: 12, right: 12, top: 8, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="time"
                  tickLine={false}
                  axisLine={false}
                  dy={8}
                />
                <YAxis tickLine={false} axisLine={false} dx={-8} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Line
                  type="monotone"
                  dataKey="defects"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="quality"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                />
                <ChartLegend
                  verticalAlign="top"
                  content={<ChartLegendContent />}
                />
              </LineChart>
            </ChartContainer>
          </div>
          <div className="grid gap-6">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-700">
                Real-time defect detection rate
              </p>
              <p
                className="mt-2 text-4xl font-extrabold"
                style={{ color: "#1a2b4b" }}
              >
                {rate}%
              </p>
              <div className="mt-4 h-3 w-full rounded-full bg-slate-100">
                <div
                  className="h-3 rounded-full"
                  style={{ width: `${rate}%`, backgroundColor: "#10b981" }}
                />
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-700">
                Production efficiency gain
              </p>
              <p className="mt-2 text-4xl font-extrabold text-emerald-600">
                +18%
              </p>
              <p className="mt-1 text-sm text-slate-600">
                After threadBridge implementation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #eaf0f6 0 20%, transparent 40%), radial-gradient(circle at 80% 30%, #eaf0f6 0 18%, transparent 38%)",
        }}
      />
    </section>
  );
}
