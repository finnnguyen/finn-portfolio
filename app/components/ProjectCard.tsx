"use client";

import { useState } from "react";

interface Tech {
  label: string;
}

interface ProjectCardProps {
  rank: number;
  title: string;
  type: "Team" | "Personal";
  oneLiner: string;
  bullets: string[];
  problem: string;
  contribution: string;
  tech: Tech[];
  challenges: string;
  solution: string;
  results: string;
  demonstrates: string;
  githubUrl?: string;
  demoUrl?: string;
  demoNote?: string;
  archDiagram?: React.ReactNode;
}

export default function ProjectCard({
  rank,
  title,
  type,
  oneLiner,
  bullets,
  problem,
  contribution,
  tech,
  challenges,
  solution,
  results,
  demonstrates,
  githubUrl,
  demoUrl,
  demoNote,
  archDiagram,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border border-[#e2ddd6] rounded-lg bg-white hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs text-[#6b6560]">#{rank}</span>
            <h3 className="font-heading font-semibold text-[#15181F] text-lg leading-snug">
              {title}
            </h3>
            <span
              className={`font-mono text-xs px-2 py-0.5 rounded-full border ${
                type === "Team"
                  ? "border-[#1F3864]/30 text-[#1F3864] bg-[#1F3864]/5"
                  : "border-[#2F6F62]/30 text-[#2F6F62] bg-[#2F6F62]/5"
              }`}
            >
              {type}
            </span>
          </div>
        </div>

        {/* One-liner */}
        <p className="font-body text-[#15181F] text-sm leading-relaxed mb-4">
          {oneLiner}
        </p>

        {/* Bullets */}
        <ul className="space-y-1 mb-4">
          {bullets.map((b, i) => (
            <li key={i} className="font-body text-sm text-[#6b6560] flex gap-2">
              <span className="text-[#1F3864] mt-0.5 shrink-0">–</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t.label}
              className="font-mono text-xs px-2 py-0.5 rounded bg-[#eaf3f1] text-[#2F6F62] border border-[#2F6F62]/20"
            >
              {t.label}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-[#1F3864] underline underline-offset-2 hover:text-[#162a4d] transition-colors"
            >
              GitHub →
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-[#1F3864] underline underline-offset-2 hover:text-[#162a4d] transition-colors"
            >
              Live Demo →
            </a>
          )}
          {demoNote && (
            <span className="font-body text-xs text-[#6b6560] italic self-center">
              {demoNote}
            </span>
          )}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="font-body text-sm text-[#1F3864] hover:text-[#162a4d] transition-colors flex items-center gap-1.5"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          >
            <path d="M2.5 5l4.5 4.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {expanded ? "Collapse" : "Read more"}
        </button>
      </div>

      {/* Expandable section */}
      {expanded && (
        <div className="border-t border-[#e2ddd6] bg-[#FAF9F6] px-6 py-5 space-y-4">
          {archDiagram && (
            <div>
              <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-wider mb-3">
                Architecture
              </h4>
              {archDiagram}
            </div>
          )}

          <div>
            <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-wider mb-1">
              Problem
            </h4>
            <p className="font-body text-sm text-[#15181F] leading-relaxed">{problem}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-wider mb-1">
              Contribution
            </h4>
            <p className="font-body text-sm text-[#15181F] leading-relaxed">{contribution}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-wider mb-1">
              Challenges
            </h4>
            <p className="font-body text-sm text-[#15181F] leading-relaxed">{challenges}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-wider mb-1">
              Solution
            </h4>
            <p className="font-body text-sm text-[#15181F] leading-relaxed">{solution}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-wider mb-1">
              Results
            </h4>
            <p className="font-body text-sm text-[#15181F] leading-relaxed">{results}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-wider mb-1">
              Demonstrates
            </h4>
            <p className="font-body text-sm text-[#15181F] leading-relaxed">{demonstrates}</p>
          </div>
        </div>
      )}
    </article>
  );
}
