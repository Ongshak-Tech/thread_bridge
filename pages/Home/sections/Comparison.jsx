export default function Comparison() {
  const rows = [
    {
      label: "Detection Speed",
      tb: "Real-time (ms)",
      trad: "Minutes to hours",
    },
    { label: "Consistency", tb: "99%+ consistent", trad: "Varies by operator" },
    { label: "Training", tb: "Minutes", trad: "Weeks" },
    { label: "Integration", tb: "Plug & play", trad: "Custom retrofit" },
  ];
  return (
    <section id="comparison" className="relative py-10 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="text-center text-3xl font-bold text-slate-800 sm:text-4xl">
          threadBridge vs Traditional QC
        </h3>
    
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead className="bg-slate-50 text-sm text-slate-600">
                <tr>
                  <th className="px-6 py-3">Capability</th>
                  <th className="px-6 py-3">threadBridge</th>
                  <th className="px-6 py-3">Traditional QC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {rows.map((r) => (
                  <tr key={r.label} className="hover:bg-slate-50/60">
                    <td className="px-6 py-4 font-medium text-slate-700">
                      {r.label}
                    </td>
                    <td className="px-6 py-4 text-emerald-700">{r.tb}</td>
                    <td className="px-6 py-4 text-slate-700">{r.trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
