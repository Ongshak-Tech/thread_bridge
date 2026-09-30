'use client'
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/pages/Home/sections/HowItWorks";
import WhyWorks from "@/pages/Home/sections/WhyWorks";
import LiveData from "@/pages/Home/sections/LiveData";
import Impact from "@/pages/Home/sections/Impact";
import CTA from "@/pages/Home/sections/CTA";
import About from "@/pages/Home/sections/About";
import Comparison from "@/pages/Home/sections/Comparison";
import DemoWidget from "@/pages/Home/sections/DemoWidget";
import ROICalculator from "@/pages/Home/sections/ROICalculator";
import Testimonials from "@/pages/Home/sections/Testimonials";
import Footer from "@/pages/Home/sections/Footer";
import Navbar from "@/components/layout/Navbar";

import { useEffect } from "react";
import { Toaster } from "sonner";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#f5f7fa";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f7fa" }}>
      <Navbar />

      <main>
        <Hero />
        <WhyWorks />
        <HowItWorks />
        <LiveData />
        <Impact />
        <CTA />
        <DemoWidget />
        {/* <ROICalculator /> */}
        <Comparison />
        {/* <Testimonials /> */}
        <About />
      </main>

      <Footer />

        <Toaster position="top-center" />
    </div>
  );
}
