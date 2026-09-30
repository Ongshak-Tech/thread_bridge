import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { TrendingUp, CircleAlert, Gauge } from "lucide-react";

import SectionHeading from "@/components/layout/SectionHeading";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type DataPoint = {
  time: string;
  defects: number;
  quality: number;
};

/**
 * The seed window the chart renders before it starts ticking.
 *
 * This has to be deterministic: it runs during the server render and again
 * during hydration, and `Math.random()` would give the two passes different
 * numbers, so React would find the markup it was handed didn't match. The
 * interval below supplies the real randomness once we're mounted on the client.
 */
function seedData(n = 24): DataPoint[] {
  const data: DataPoint[] = [];
  for (let i = 0; i < n; i++) {
    data.push({
      time: `${i}:00`,
      defects: Math.round(22 + 8 * Math.sin(i / 2.2) + 3 * Math.cos(i / 1.3)),
      quality: Math.round(78 + 9 * Math.sin(i / 3.1 + 1.2)),
    });
  }
  return data;
}

export default function LiveData() {
  const [data, setData] = useState(seedData);
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

  const config = useMemo<ChartConfig>(
    () => ({
      defects: { label: "Defects detected", color: "#ef4444" },
      quality: { label: "Quality score", color: "#10b981" },
    }),
    []
  );

  const latest = data[data.length - 1];

  return (
    <section id="dashboard" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="On the floor"
          title="Live Data Visualization"
          subtitle="What the operator sees while the line is running—defects and quality score, updating as fabric passes the scanner."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Chart */}
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Defect &amp; quality trend
                </h3>
                <p className="mt-0.5 text-sm text-slate-500">
                  Rolling 24-interval window
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Live
              </span>
            </div>

            <ChartContainer config={config} className="aspect-[16/9] w-full">
              <AreaChart
                data={data}
                margin={{ left: 4, right: 8, top: 8, bottom: 4 }}
              >
                <defs>
                  <linearGradient id="fillDefects" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="fillQuality" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="time"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={24}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  width={32}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="quality"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#fillQuality)"
                  isAnimationActive={false}
                  dot={false}
                />
                <Area
                  type="monotone"
                  dataKey="defects"
                  stroke="#ef4444"
                  strokeWidth={2}
                  fill="url(#fillDefects)"
                  isAnimationActive={false}
                  dot={false}
                />
                <ChartLegend
                  verticalAlign="bottom"
                  content={<ChartLegendContent />}
                />
              </AreaChart>
            </ChartContainer>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4" style={{ color: "#3ab5a9" }} />
                <p className="text-sm font-semibold text-slate-700">
                  Detection rate
                </p>
              </div>
              <p
                className="mt-3 text-4xl font-extrabold tracking-tight tabular-nums"
                style={{ color: "#1a2b4b" }}
              >
                {rate}%
              </p>
              <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #3ab5a9, #10b981)",
                  }}
                  animate={{ width: `${rate}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Share of passing fabric actively scanned
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <CircleAlert className="h-4 w-4 text-rose-500" />
                <p className="text-sm font-semibold text-slate-700">
                  Defects this interval
                </p>
              </div>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-rose-600 tabular-nums">
                {latest.defects}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Flagged and tagged on the current roll
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                <p className="text-sm font-semibold text-slate-700">
                  Production efficiency gain
                </p>
              </div>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-emerald-600">
                +18%
              </p>
              <p className="mt-2 text-xs text-slate-500">
                After threadBridge implementation
              </p>
            </div>
          </motion.div>
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
