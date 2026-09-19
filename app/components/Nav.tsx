"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.9 3.1l-1.1 1.1M4.2 11.7l-1.1 1.1M12.9 12.9l-1.1-1.1M4.2 4.2 3.1 3.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M14 9.3A6 6 0 1 1 6.7 2a4.7 4.7 0 0 0 7.3 7.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Reads state an inline script (app/layout.tsx) already applied to
    // <html> before hydration — this syncs it into React after mount so
    // the toggle's initial client render still matches the server's.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center gap-1.5 font-body text-xs font-medium px-3 py-1.5 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors"
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
      <span className="hidden xs:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-shadow duration-200 ${
        scrolled
          ? "shadow-sm bg-card/95 backdrop-blur-sm border-border"
          : "bg-bg border-transparent"
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        <a href="#top" className="flex items-center gap-3 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-accent/40 bg-accent-soft text-accent font-heading font-semibold text-xs group-hover:border-accent transition-colors shrink-0">
            FN
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading font-semibold text-ink text-sm">
              Finn Nguyen
            </span>
            <span className="font-body text-[11px] text-muted">
              Software Engineer &middot; Fullerton, CA
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm text-muted hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resumes/Finn-Nguyen-Resume-Software-Engineer.docx"
              download
              className="font-body text-sm px-4 py-1.5 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-colors"
            >
              Resume
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-ink hover:text-accent transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden border-t border-border bg-card px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm text-muted hover:text-accent transition-colors block"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resumes/Finn-Nguyen-Resume-Software-Engineer.docx"
                download
                className="font-body text-sm inline-block px-4 py-1.5 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-colors mt-1"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
