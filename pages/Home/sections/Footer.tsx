import { ArrowUp } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { Button } from "@/components/ui/button";

type FooterLink = {
  href: string;
  label: string;
};

const productLinks: FooterLink[] = [
  { href: "#why", label: "Why threadBridge" },
  { href: "#technology", label: "Technology" },
  { href: "#dashboard", label: "Live data" },
  { href: "#demo", label: "Demo" },
];

const companyLinks: FooterLink[] = [
  { href: "#about", label: "About" },
  { href: "#benefits", label: "Benefits" },
  { href: "#comparison", label: "vs Traditional QC" },
  { href: "#pilot", label: "Pilot program" },
];

const socials = [
  {
    href: "https://www.linkedin.com",
    label: "threadBridge on LinkedIn",
    Icon: LinkedinIcon,
  },
  {
    href: "https://github.com",
    label: "threadBridge on GitHub",
    Icon: GithubIcon,
  },
];

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-sm text-slate-300 transition-colors hover:text-[#3ab5a9]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: "#1a2b4b" }}
    >
      {/* A single teal thread across the top edge, echoing the scan line. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(58,181,169,0) 0%, rgba(58,181,169,.7) 50%, rgba(58,181,169,0) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a
              href="#hero"
              className="text-lg font-extrabold tracking-tight text-white"
            >
              threadBridge
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Real-time AI defect detection for fabric inspection—catching
              spinning, knitting, dyeing and finishing faults inline, at
              production speed.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition-colors hover:border-[#3ab5a9] hover:bg-white/5 hover:text-[#3ab5a9] focus-visible:ring-2 focus-visible:ring-[#3ab5a9] focus-visible:outline-none"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <LinkColumn title="Product" links={productLinks} />
          </div>

          <div className="lg:col-span-2">
            <LinkColumn title="Company" links={companyLinks} />
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Get started
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Join the pilot program and put threadBridge on your line.
            </p>
            <Button
              asChild
              className="mt-5 w-full font-semibold sm:w-auto"
              style={{ backgroundColor: "#3ab5a9", color: "#0b1a33" }}
            >
              <a href="#pilot">Join Pilot Program</a>
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
          <p className="text-center text-sm text-slate-400 sm:text-left">
            © {new Date().getFullYear()} threadBridge. Revolutionizing textile
            quality control.
          </p>

          <div className="flex items-center gap-5">
            <p className="text-sm text-slate-400">
              Developed by{" "}
              <a
                href="https://ongshak.com/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-slate-200 transition-colors hover:text-[#3ab5a9]"
              >
                Ongshak
              </a>
            </p>
            <a
              href="#hero"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition-colors hover:border-[#3ab5a9] hover:text-[#3ab5a9] focus-visible:ring-2 focus-visible:ring-[#3ab5a9] focus-visible:outline-none"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
