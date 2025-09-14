// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// function AnimatedThreads() {
//   const lines = Array.from({ length: 10 });
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {lines.map((_, i) => (
//         <motion.span
//           key={i}
//           className="absolute h-px w-1/2 opacity-40"
//           style={{ background: i % 2 ? "#3ab5a9" : "#fff" }}
//           initial={{ x: "-60%", top: `${(i + 1) * 8}%` }}
//           animate={{ x: ["-60%", "120%"] }}
//           transition={{ duration: 4 + i * 0.2, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
//         />
//       ))}
//     </div>
//   );
// }

// export default function CTA() {
//   return (
//     <section id="pilot" className="relative isolate py-24" style={{ backgroundColor: "#1a2b4b" }}>
//       <AnimatedThreads />
//       <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
//         <motion.h2
//           className="text-3xl font-bold text-white sm:text-4xl"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Ready to revolutionize your factory's QC process?
//         </motion.h2>
//         <motion.p
//           className="mx-auto mt-4 max-w-2xl text-base text-slate-200"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
//           Join our pilot program and be among the first to harness real-time defect detection. Let's collaborate to reduce rework, safeguard profit margins, and raise the bar for garment quality—together.
//         </motion.p>
//         <motion.div
//           className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <Button className="px-6 py-5 text-base font-semibold cursor-pointer" style={{ backgroundColor: "#3ab5a9", color: "#0b1a33" }}>
//             Join Pilot Program
//           </Button>
//           <Button variant="outline" className="px-6 py-5 text-base font-semibold border-white text-black hover:text-white hover:bg-white/10 cursor-pointer">
//             Schedule Demo
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function AnimatedThreads() {
  const lines = Array.from({ length: 10 });
  return (
    <div className="absolute inset-0 overflow-hidden">
      {lines.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-px w-1/2 opacity-40"
          style={{ background: i % 2 ? "#3ab5a9" : "#fff" }}
          initial={{ x: "-60%", top: `${(i + 1) * 8}%` }}
          animate={{ x: ["-60%", "120%"] }}
          transition={{
            duration: 4 + i * 0.2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

export default function CTA() {
  const [openPilot, setOpenPilot] = useState(false);
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <section
      id="pilot"
      className="relative isolate py-24"
      style={{ backgroundColor: "#1a2b4b" }}
    >
      <AnimatedThreads />
      <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
        <motion.h2
          className="text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to revolutionize your factory's QC process?
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-base text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Join our pilot program and be among the first to harness real-time
          defect detection. Let's collaborate to reduce rework, safeguard profit
          margins, and raise the bar for garment quality—together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            className="px-6 py-5 text-base font-semibold cursor-pointer"
            style={{ backgroundColor: "#3ab5a9", color: "#0b1a33" }}
            onClick={() => setOpenPilot(true)}
          >
            Join Pilot Program
          </Button>
          <Button
            variant="outline"
            className="px-6 py-5 text-base font-semibold border-white text-black hover:text-white hover:bg-white/10 cursor-pointer"
            onClick={() => setOpenDemo(true)}
          >
            Schedule Demo
          </Button>
        </motion.div>
      </div>

      {/* Join Pilot Program Modal */}
      <Dialog open={openPilot} onOpenChange={setOpenPilot}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join Pilot Program</DialogTitle>
            <DialogDescription>
              Fill out the form and we’ll get in touch with you.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Label htmlFor="pilot-name">Name</Label>
              <Input id="pilot-name" type="text" placeholder="Your Name" />
            </div>
            <div>
              <Label htmlFor="pilot-email">Email</Label>
              <Input
                id="pilot-email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <Label htmlFor="pilot-message">Message</Label>
              <Textarea
                id="pilot-message"
                placeholder="Tell us a bit about your factory or requirements..."
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-[#3ab5a9] text-[#0b1a33]">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Schedule Demo Modal */}
      <Dialog open={openDemo} onOpenChange={setOpenDemo}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule a Demo</DialogTitle>
            <DialogDescription>
              Pick a date and time, and we’ll confirm your demo.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Label htmlFor="demo-name">Name</Label>
              <Input id="demo-name" type="text" placeholder="Your Name" />
            </div>
            <div>
              <Label htmlFor="demo-email">Email</Label>
              <Input
                id="demo-email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <Label htmlFor="demo-date">Date</Label>
              <Input id="demo-date" type="date" />
            </div>
            <div>
              <Label htmlFor="demo-time">Time</Label>
              <Input id="demo-time" type="time" />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-[#3ab5a9] text-[#0b1a33]">
                Schedule
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
