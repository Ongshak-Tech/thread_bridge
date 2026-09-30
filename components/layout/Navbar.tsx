"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Lightbulb,
  Menu,
  ScanLine,
  TrendingUp,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { href: "#why", label: "Why", icon: Lightbulb },
  { href: "#technology", label: "Technology", icon: Cpu },
  { href: "#dashboard", label: "Live Data", icon: Activity },
  { href: "#benefits", label: "Benefits", icon: TrendingUp },
  { href: "#demo", label: "Demo", icon: ScanLine },
  { href: "#about", label: "About", icon: Users },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Lift the header off the page once it stops sitting flush with the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Highlight whichever section is currently under the header.
  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const topMost = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];

        if (topMost) setActiveId(topMost.target.id);
      },
      // Ignore the strip behind the header, and only count a section once it
      // has reached the upper 40% of the viewport.
      { rootMargin: "-80px 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // ...and when the viewport grows past the breakpoint that hides it.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-shadow duration-200",
        scrolled
          ? "border-slate-200 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-slate-200/70 bg-white/80 backdrop-blur"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#hero"
          aria-label="threadBridge — back to top"
          className="rounded-md text-lg font-extrabold tracking-tight focus-visible:ring-2 focus-visible:ring-[#3ab5a9] focus-visible:ring-offset-2 focus-visible:outline-none"
          style={{ color: "#1a2b4b" }}
        >
          threadBridge
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = activeId === href.slice(1);

            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#3ab5a9] focus-visible:outline-none",
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                <Icon
                  className="h-4 w-4 shrink-0"
                  style={isActive ? { color: "#3ab5a9" } : undefined}
                />
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2.5 -bottom-px h-0.5 rounded-full"
                    style={{ backgroundColor: "#3ab5a9" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden bg-[#1a2b4b] text-sm font-semibold text-white shadow-sm hover:bg-[#24395f] lg:inline-flex"
          >
            <a href="#pilot">Join Pilot</a>
          </Button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#3ab5a9] focus-visible:outline-none lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 px-6 py-4 text-sm"
            >
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = activeId === href.slice(1);

                return (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "flex items-center gap-2.5 rounded-md px-3 py-2 transition-colors",
                      isActive
                        ? "bg-[#e8f5f3] font-semibold text-slate-900"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <Icon
                      className="h-4 w-4 shrink-0"
                      style={{ color: isActive ? "#3ab5a9" : undefined }}
                    />
                    {label}
                  </a>
                );
              })}
              <Button
                asChild
                className="mt-2 bg-[#1a2b4b] text-sm font-semibold text-white shadow-sm hover:bg-[#24395f]"
              >
                <a href="#pilot" onClick={() => setIsOpen(false)}>
                  Join Pilot
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
