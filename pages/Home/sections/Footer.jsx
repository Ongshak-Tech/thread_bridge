import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <nav className="flex gap-6 text-sm text-slate-600">
          <a href="#technology" className="hover:text-slate-800">Technology</a>
          <a href="#benefits" className="hover:text-slate-800">Benefits</a>
          <a href="#about" className="hover:text-slate-800">About</a>
          <a href="#pilot" className="hover:text-slate-800">Pilot Program</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 transition-colors hover:text-slate-900">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-600 transition-colors hover:text-slate-900">
            <Github className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-slate-500">© 2025 threadBridge. Revolutionizing textile quality control.</p>
      </div>
    </footer>
  );
}
