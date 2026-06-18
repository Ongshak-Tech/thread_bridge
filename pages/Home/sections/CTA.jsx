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
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "bbfd6e68-d50c-4151-b2e6-c2fc1ab27e89";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

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
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
  };
  const [pilotObj, setPilotObj] = useState(emptyForm);

  const handleClose = (setter) => {
    setter(false);
    setSubmitStatus(null);
    setPilotObj(emptyForm);
  };

  const submitContactRequest = async (e, requestType) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    const payload = {
      name: pilotObj.name.trim(),
      email: pilotObj.email.trim(),
      phone: pilotObj.phone.trim(),
      message: pilotObj.message.trim(),
      ...(requestType === "Demo Request" && {
        date: pilotObj.date,
        time: pilotObj.time,
      }),
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `ThreadBridge ${requestType}`,
      form_type: requestType,
      from_name: pilotObj.name.trim(),
    };

    Object.keys(payload).forEach((key) => {
      if (!payload[key]) {
        delete payload[key];
      }
    });

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to submit form");
      }

      setSubmitStatus("success");
      setTimeout(() => {
        setPilotObj(emptyForm);
        setOpenPilot(false);
        setOpenDemo(false);
        setSubmitStatus(null);
      }, 2500);
    } catch (error) {
      console.error("Web3Forms submission failed:", error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

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
      <Dialog open={openPilot} onOpenChange={() => handleClose(setOpenPilot)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join Pilot Program</DialogTitle>
            <DialogDescription>
              Fill out the form and we’ll get in touch with you.
            </DialogDescription>
          </DialogHeader>

          {submitStatus === "success" && (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <CheckCircle2 className="h-12 w-12 text-[#3ab5a9]" />
              <p className="font-semibold text-gray-800">
                Message sent successfully!
              </p>
              <p className="text-sm text-gray-500">
                We’ll get back to you shortly.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <XCircle className="h-10 w-10 text-red-500" />
              <p className="font-semibold text-gray-800">
                Failed to send message.
              </p>
              <p className="text-sm text-gray-500">Please try again.</p>
            </div>
          )}

          {!submitStatus && (
            <form
              className="space-y-4"
              onSubmit={(e) => submitContactRequest(e, "Pilot Program Request")}
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="pilot-name">Name</Label>
                <Input
                  id="pilot-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={pilotObj?.name}
                  onChange={(e) =>
                    setPilotObj({ ...pilotObj, name: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="pilot-email">Email</Label>
                <Input
                  id="pilot-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={pilotObj?.email}
                  onChange={(e) =>
                    setPilotObj({ ...pilotObj, email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="pilot-phone">Phone Number</Label>
                <Input
                  id="pilot-phone"
                  name="phone"
                  type="tel"
                  placeholder="+880 1XX XXX XXXX"
                  required
                  value={pilotObj?.phone}
                  onChange={(e) =>
                    setPilotObj({ ...pilotObj, phone: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="pilot-message">Message</Label>
                <Textarea
                  id="pilot-message"
                  name="message"
                  placeholder="Tell us a bit about your factory or requirements..."
                  value={pilotObj?.message}
                  onChange={(e) =>
                    setPilotObj({ ...pilotObj, message: e.target.value })
                  }
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-[#3ab5a9] hover:bg-[#3ab5a9] text-[#0b1a33] cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Schedule Demo Modal */}
      <Dialog open={openDemo} onOpenChange={() => handleClose(setOpenDemo)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule a Demo</DialogTitle>
            <DialogDescription>
              Pick a date and time, and we’ll confirm your demo.
            </DialogDescription>
          </DialogHeader>

          {submitStatus === "success" && (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <CheckCircle2 className="h-12 w-12 text-[#3ab5a9]" />
              <p className="font-semibold text-gray-800">
                Demo scheduled successfully!
              </p>
              <p className="text-sm text-gray-500">
                We’ll confirm your slot shortly.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <XCircle className="h-10 w-10 text-red-500" />
              <p className="font-semibold text-gray-800">
                Failed to send message.
              </p>
              <p className="text-sm text-gray-500">Please try again.</p>
            </div>
          )}

          {!submitStatus && (
            <form
              className="space-y-4"
              onSubmit={(e) => submitContactRequest(e, "Demo Request")}
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-name">Name</Label>
                <Input
                  id="demo-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={pilotObj?.name}
                  onChange={(e) =>
                    setPilotObj({ ...pilotObj, name: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-email">Email</Label>
                <Input
                  id="demo-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={pilotObj?.email}
                  onChange={(e) =>
                    setPilotObj({ ...pilotObj, email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-phone">Phone Number</Label>
                <Input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  placeholder="+880 1XX XXX XXXX"
                  required
                  value={pilotObj?.phone}
                  onChange={(e) =>
                    setPilotObj({ ...pilotObj, phone: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-message">Message</Label>
                <Textarea
                  id="demo-message"
                  name="message"
                  placeholder="Tell us a bit about your factory or requirements..."
                  value={pilotObj?.message}
                  onChange={(e) =>
                    setPilotObj({ ...pilotObj, message: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-date">Date</Label>
                <Input
                  id="demo-date"
                  name="date"
                  type="date"
                  required
                  value={pilotObj?.date}
                  onChange={(e) =>
                    setPilotObj({ ...pilotObj, date: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-time">Time</Label>
                <Input
                  id="demo-time"
                  name="time"
                  type="time"
                  required
                  value={pilotObj?.time}
                  onChange={(e) =>
                    setPilotObj({ ...pilotObj, time: e.target.value })
                  }
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-[#3ab5a9] hover:bg-[#3ab5a9] text-[#0b1a33] cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Schedule"
                  )}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
