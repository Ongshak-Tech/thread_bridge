import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
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

function randomBoxes(n) {
  const boxes = [];
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
  const [selected, setSelected] = useState(images[0]);
  const [active, setActive] = useState(true);
  const [boxes, setBoxes] = useState(() => randomBoxes(6));

  return (
    <section id="demo" className="relative py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-800">
            Live Demo: Defect Detection Simulator
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Scanning</span>
            <Switch checked={active} onCheckedChange={setActive} />
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div
              className="relative h-[420px] w-full"
              style={{
                backgroundImage: !selected
                  ? "repeating-linear-gradient(45deg, #f1f5f9 0 8px, #e2e8f0 8px 16px)"
                  : "",
              }}
            >
              <div className="">
                {selected ? (
                  <Image
                    src={active ? selected.annotated : selected.normal}
                    alt="image"
                    fill
                  />
                ) : null}
              </div>
              {active && (
                <motion.div
                  className="absolute inset-x-0 h-10"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(58,181,169,.5) 0%, rgba(58,181,169,.35) 50%, rgba(58,181,169,0) 100%)",
                  }}
                  animate={{ y: ["-10%", "810%"] }}
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
            {/* <div className="flex items-center justify-between border-t border-slate-200 p-4 text-sm text-slate-600">
              <span>Detected defects</span>
              <span className="font-semibold text-rose-600">
                {boxes.length}
              </span>
            </div> */}
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm max-h-[420px] overflow-scroll">
            <h4 className="text-lg font-semibold text-slate-800 pb-3">
              Select a fabric image to detect defects
            </h4>
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
            <div className="grid grid-cols-6 gap-3">
              {images.map((imgObj, idx) => (
                <div
                  key={idx}
                  className="col-span-1 relative"
                  onClick={() => setSelected(imgObj)}
                >
                  <Image
                    src={imgObj.normal}
                    width={100}
                    height={100}
                    alt="Defect Image"
                  />
                  <div
                    className={`absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 cursor-pointer transition-all duration-300 ${
                      selected.normal == imgObj.normal ? "bg-black/50" : ""
                    }`}
                  ></div>
                </div>
              ))}
            </div>
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
// Build an array of objects with both versions
const images = [
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
