'use client'
import Hero from "@/pages/Home/sections/Hero";
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

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#f5f7fa";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f7fa" }}>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a
            href="#hero"
            className="text-lg font-extrabold"
            style={{ color: "#1a2b4b" }}
          >
            threadBridge
          </a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#why" className="hover:text-slate-900">
              Why
            </a>
            <a href="#technology" className="hover:text-slate-900">
              Technology
            </a>
            <a href="#dashboard" className="hover:text-slate-900">
              Live Data
            </a>
            <a href="#benefits" className="hover:text-slate-900">
              Benefits
            </a>
            <a href="#demo" className="hover:text-slate-900">
              Demo
            </a>
            <a href="#roi" className="hover:text-slate-900">
              ROI
            </a>
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <WhyWorks />
        <HowItWorks />
        <LiveData />
        <Impact />
        <CTA />
        <DemoWidget />
        <ROICalculator />
        <Comparison />
        <Testimonials />
        <About />
      </main>

      <Footer />
    </div>
  );
}
