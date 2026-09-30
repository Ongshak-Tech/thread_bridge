import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Images, Eye, EyeOff, Check } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";
import Image, { type StaticImageData } from "next/image";
import anoimg1 from "@/public/annotated/01.jpg";
import anoimg2 from "@/public/annotated/02.jpg";
import anoimg3 from "@/public/annotated/03.jpg";
import anoimg4 from "@/public/annotated/04.jpg";
import anoimg5 from "@/public/annotated/05.jpg";
import anoimg6 from "@/public/annotated/06.jpg";
import anoimg7 from "@/public/annotated/07.jpg";
import anoimg8 from "@/public/annotated/08.jpg";
import anoimg9 from "@/public/annotated/09.jpg";
import anoimg10 from "@/public/annotated/010.jpg";
import anoimg11 from "@/public/annotated/011.jpg";
import anoimg12 from "@/public/annotated/012.jpg";
import anoimg13 from "@/public/annotated/013.jpg";
import anoimg14 from "@/public/annotated/014.jpg";
import anoimg15 from "@/public/annotated/015.jpg";
import anoimg16 from "@/public/annotated/016.jpg";
import anoimg17 from "@/public/annotated/017.jpg";
import anoimg18 from "@/public/annotated/018.jpg";
import anoimg19 from "@/public/annotated/019.jpg";
import anoimg20 from "@/public/annotated/020.jpg";
import anoimg21 from "@/public/annotated/021.jpg";
import anoimg22 from "@/public/annotated/022.jpg";
import anoimg23 from "@/public/annotated/023.jpg";
import anoimg24 from "@/public/annotated/024.jpg";
import anoimg25 from "@/public/annotated/025.jpg";
import anoimg26 from "@/public/annotated/026.jpg";
import anoimg27 from "@/public/annotated/027.jpg";
import anoimg28 from "@/public/annotated/028.jpg";
import anoimg29 from "@/public/annotated/029.jpg";
import anoimg30 from "@/public/annotated/030.jpg";
import anoimg31 from "@/public/annotated/031.jpg";
import anoimg32 from "@/public/annotated/032.jpg";
import anoimg33 from "@/public/annotated/033.jpg";

import img1 from "@/public/imgs/01.jpg";
import img2 from "@/public/imgs/02.jpg";
import img3 from "@/public/imgs/03.jpg";
import img4 from "@/public/imgs/04.jpg";
import img5 from "@/public/imgs/05.jpg";
import img6 from "@/public/imgs/06.jpg";
import img7 from "@/public/imgs/07.jpg";
import img8 from "@/public/imgs/08.jpg";
import img9 from "@/public/imgs/09.jpg";
import img10 from "@/public/imgs/010.jpg";
import img11 from "@/public/imgs/011.jpg";
import img12 from "@/public/imgs/012.jpg";
import img13 from "@/public/imgs/013.jpg";
import img14 from "@/public/imgs/014.jpg";
import img15 from "@/public/imgs/015.jpg";
import img16 from "@/public/imgs/016.jpg";
import img17 from "@/public/imgs/017.jpg";
import img18 from "@/public/imgs/018.jpg";
import img19 from "@/public/imgs/019.jpg";
import img20 from "@/public/imgs/020.jpg";
import img21 from "@/public/imgs/021.jpg";
import img22 from "@/public/imgs/022.jpg";
import img23 from "@/public/imgs/023.jpg";
import img24 from "@/public/imgs/024.jpg";
import img25 from "@/public/imgs/025.jpg";
import img26 from "@/public/imgs/026.jpg";
import img27 from "@/public/imgs/027.jpg";
import img28 from "@/public/imgs/028.jpg";
import img29 from "@/public/imgs/029.jpg";
import img30 from "@/public/imgs/030.jpg";
import img31 from "@/public/imgs/031.jpg";
import img32 from "@/public/imgs/032.jpg";
import img33 from "@/public/imgs/033.jpg";

type DefectBox = {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
};

type FabricImage = {
  normal: StaticImageData;
  annotated: StaticImageData;
};

function randomBoxes(n: number): DefectBox[] {
  const boxes: DefectBox[] = [];
  for (let i = 0; i < n; i++) {
    boxes.push({
      id: i,
      x: Math.random() * 70 + 5,
      y: Math.random() * 70 + 5,
      w: Math.random() * 10 + 6,
      h: Math.random() * 8 + 5,
    });
  }
  return boxes;
}

export default function DemoWidget() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [active, setActive] = useState(true);
  const [boxes, setBoxes] = useState(() => randomBoxes(6));

  const selected = images[selectedIndex];

  return (
    <section id="demo" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Try it yourself"
          title="Live Demo: Defect Detection Simulator"
          subtitle="Pick a fabric sample, then switch detection on to see exactly what threadBridge flags—and what a passing glance would miss."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Viewer */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-lg ring-1 ring-slate-900/10">
              <div className="relative h-[300px] w-full sm:h-[420px]">
                <Image
                  src={active ? selected.annotated : selected.normal}
                  alt={
                    active
                      ? `Fabric sample ${selectedIndex + 1} with detected defects marked`
                      : `Fabric sample ${selectedIndex + 1}, unprocessed`
                  }
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  style={{ objectFit: "contain" }}
                  priority={selectedIndex === 0}
                />

                {/* Scanner framing */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-4"
                >
                  {[
                    "left-0 top-0 border-l-2 border-t-2 rounded-tl-lg",
                    "right-0 top-0 border-r-2 border-t-2 rounded-tr-lg",
                    "left-0 bottom-0 border-l-2 border-b-2 rounded-bl-lg",
                    "right-0 bottom-0 border-r-2 border-b-2 rounded-br-lg",
                  ].map((corner) => (
                    <span
                      key={corner}
                      className={`absolute h-6 w-6 ${corner}`}
                      style={{
                        borderColor: active
                          ? "#3ab5a9"
                          : "rgba(148,163,184,.45)",
                        transition: "border-color .3s",
                      }}
                    />
                  ))}
                </div>

                {active && (
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 h-12"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(58,181,169,.5) 0%, rgba(58,181,169,.3) 50%, rgba(58,181,169,0) 100%)",
                    }}
                    animate={{ y: ["-10%", "1010%"] }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}

                {/* {boxes.map((b) => (
                <motion.div
                  key={b.id}
                  className="absolute rounded border-2"
                  style={{
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    width: `${b.w}%`,
                    height: `${b.h}%`,
                    borderColor: "#ef4444",
                    boxShadow: "0 0 0 2px rgba(239,68,68,0.2)",
                    background: "rgba(239,68,68,0.06)",
                  }}
                  animate={
                    active ? { opacity: [0.8, 1, 0.8] } : { opacity: 0.25 }
                  }
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              ))} */}
              </div>

              {/* Original / detection toggle */}
              <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-slate-900 px-4 py-3">
                <p className="hidden text-sm text-slate-400 sm:block">
                  Sample {selectedIndex + 1} of {images.length}
                </p>
                <div
                  role="group"
                  aria-label="Detection overlay"
                  className="flex w-full rounded-lg bg-slate-800 p-1 sm:w-auto"
                >
                  {[
                    { on: false, label: "Original", Icon: EyeOff },
                    { on: true, label: "AI detection", Icon: Eye },
                  ].map(({ on, label, Icon }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setActive(on)}
                      aria-pressed={active === on}
                      className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#3ab5a9] focus-visible:outline-none sm:flex-none ${
                        active === on
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="flex items-center justify-between border-t border-slate-200 p-4 text-sm text-slate-600">
              <span>Detected defects</span>
              <span className="font-semibold text-rose-600">
                {boxes.length}
              </span>
            </div> */}
          </motion.div>

          {/* Sample picker */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <h3 className="font-semibold text-slate-800">Fabric samples</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  <Images className="h-3.5 w-3.5" />
                  {images.length}
                </span>
              </div>
              {/* <p className="mt-2 text-slate-600">
              Click anywhere on the fabric to add a simulated defect. Toggle
              scanning to see live detection overlays.
            </p>
            <div className="mt-4 text-sm text-slate-600">
              Click count adds defects. Double-click resets the simulation.
            </div> */}
              {/* <div
              className="mt-6 cursor-crosshair rounded-lg border border-dashed border-slate-300 bg-slate-50/60 p-6 text-sm text-slate-600"
              onClick={() => setBoxes((b) => [...b, ...randomBoxes(1)])}
              onDoubleClick={() => setBoxes(randomBoxes(6))}
            >
              Add defects by clicking here.
            </div> */}
              <div className="max-h-[300px] overflow-y-auto p-4 sm:max-h-[420px]">
                <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-6 lg:grid-cols-4">
                  {images.map((imgObj, idx) => {
                    const isSelected = idx === selectedIndex;

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedIndex(idx)}
                        aria-pressed={isSelected}
                        aria-label={`Show fabric sample ${idx + 1}`}
                        className={`group relative aspect-square cursor-pointer overflow-hidden rounded-lg ring-2 transition-all focus-visible:ring-[#3ab5a9] focus-visible:outline-none ${
                          isSelected
                            ? "ring-[#3ab5a9]"
                            : "ring-transparent hover:ring-slate-300"
                        }`}
                      >
                        <Image
                          src={imgObj.normal}
                          alt=""
                          fill
                          sizes="96px"
                          style={{ objectFit: "cover" }}
                        />
                        <span
                          className={`absolute inset-0 transition-colors ${
                            isSelected
                              ? "bg-[#1a2b4b]/45"
                              : "bg-transparent group-hover:bg-black/25"
                          }`}
                        />
                        {isSelected && (
                          <span
                            aria-hidden
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <span
                              className="flex h-6 w-6 items-center justify-center rounded-full"
                              style={{ backgroundColor: "#3ab5a9" }}
                            >
                              <Check className="h-3.5 w-3.5 text-[#0b1a33]" />
                            </span>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
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
// Build an array of objects with both versions
const images: FabricImage[] = [
  { normal: img1, annotated: anoimg1 },
  { normal: img2, annotated: anoimg2 },
  { normal: img3, annotated: anoimg3 },
  { normal: img4, annotated: anoimg4 },
  { normal: img5, annotated: anoimg5 },
  { normal: img6, annotated: anoimg6 },
  { normal: img7, annotated: anoimg7 },
  { normal: img8, annotated: anoimg8 },
  { normal: img9, annotated: anoimg9 },
  { normal: img10, annotated: anoimg10 },
  { normal: img11, annotated: anoimg11 },
  { normal: img12, annotated: anoimg12 },
  { normal: img13, annotated: anoimg13 },
  { normal: img14, annotated: anoimg14 },
  { normal: img15, annotated: anoimg15 },
  { normal: img16, annotated: anoimg16 },
  { normal: img17, annotated: anoimg17 },
  { normal: img18, annotated: anoimg18 },
  { normal: img19, annotated: anoimg19 },
  { normal: img20, annotated: anoimg20 },
  { normal: img21, annotated: anoimg21 },
  { normal: img22, annotated: anoimg22 },
  { normal: img23, annotated: anoimg23 },
  { normal: img24, annotated: anoimg24 },
  { normal: img25, annotated: anoimg25 },
  { normal: img26, annotated: anoimg26 },
  { normal: img27, annotated: anoimg27 },
  { normal: img28, annotated: anoimg28 },
  { normal: img29, annotated: anoimg29 },
  { normal: img30, annotated: anoimg30 },
  { normal: img31, annotated: anoimg31 },
  { normal: img32, annotated: anoimg32 },
  { normal: img33, annotated: anoimg33 },
];
