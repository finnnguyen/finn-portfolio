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
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-sm bg-[#FAF9F6]/95 backdrop-blur-sm" : "bg-[#FAF9F6]"
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="font-heading font-semibold text-[#15181F] text-sm tracking-wide hover:text-[#1F3864] transition-colors"
        >
          Finn Nguyen
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm text-[#6b6560] hover:text-[#15181F] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resumes/Finn-Nguyen-Resume-Software-Engineer.docx"
              download
              className="font-body text-sm px-4 py-1.5 border border-[#1F3864] text-[#1F3864] rounded hover:bg-[#1F3864] hover:text-white transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="sm:hidden p-2 text-[#15181F] hover:text-[#1F3864] transition-colors"
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
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden border-t border-[#e2ddd6] bg-[#FAF9F6] px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm text-[#6b6560] hover:text-[#15181F] transition-colors block"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resumes/Finn-Nguyen-Resume-Software-Engineer.docx"
                download
                className="font-body text-sm inline-block px-4 py-1.5 border border-[#1F3864] text-[#1F3864] rounded hover:bg-[#1F3864] hover:text-white transition-colors mt-1"
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
