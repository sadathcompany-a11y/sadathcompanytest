import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import sadathLogo from "@/assets/sadath-logo.png";

export const navPages = [
  { to: "/websites", label: "Websites" },
  { to: "/systems", label: "Systems" },
  { to: "/hosting", label: "Hosting" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-muted-foreground/30">
      {/* Ambient hero backdrop — matches the homepage */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[70vh] overflow-hidden z-0">
        <HeroVideo className="opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 md:px-12 bg-background/60 backdrop-blur-md border-b border-border">
        <Link to="/" aria-label="Sadath Company home" className="flex items-center">
          <img src={sadathLogo} alt="Sadath Company" className="h-20 md:h-32 w-auto object-contain" />
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
            {navPages.map((p) => (
              <Link key={p.to} to={p.to} className="hover:opacity-100 transition-opacity">
                {p.label}
              </Link>
            ))}
          </div>
          <a
            href="/#contact"
            className="group flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-primary text-primary-foreground px-5 md:px-7 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            <span>Get Started</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-40 md:pt-52">{children}</main>


      <footer className="relative z-10 py-16 px-6 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[11px] leading-relaxed opacity-50 text-center md:text-left space-y-1">
            <p className="tracking-[0.15em] uppercase">
              © 2026 The Sadath Company Ltd. All rights reserved.
            </p>
            <p>Registered in England and Wales. Company No. 16707212</p>
            <p>Registered office: 27 Orchard Estate, Cambridge, CB1 3JW</p>
            <a href="mailto:contact@sadathcompany.com" className="inline-block hover:underline">
              contact@sadathcompany.com
            </a>
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase opacity-40">
            <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy</Link>
            <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms</Link>
            <a
              href="https://www.linkedin.com/company/sadathcompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
