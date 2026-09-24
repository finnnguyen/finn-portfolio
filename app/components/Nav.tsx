"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-bg border-b transition-shadow duration-200 ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <nav
        className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-4 h-4 rounded-[3px] bg-electric-blue shrink-0 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          <span className="font-body font-medium text-ink text-[15px] tracking-[-0.01em]">
            Finn Nguyen
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[14px] text-ink/80 hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resumes/Finn-Nguyen-Resume-Software-Engineer.pdf"
              download
              className="font-body text-[14px] px-3 pt-[6px] pb-[5px] rounded-btn bg-carbon text-white hover:bg-accent-hover transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            className="p-2 text-ink"
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
        <div className="sm:hidden border-t border-border bg-bg px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-[14px] text-ink/80 hover:text-ink transition-colors block"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resumes/Finn-Nguyen-Resume-Software-Engineer.pdf"
                download
                className="font-body text-[14px] inline-block px-3 pt-[6px] pb-[5px] rounded-btn bg-carbon text-white hover:bg-accent-hover transition-colors mt-1"
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
