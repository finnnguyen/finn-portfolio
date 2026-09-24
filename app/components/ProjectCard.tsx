"use client";

import { useState } from "react";

interface Tech {
  label: string;
}

interface Media {
  type: "gif" | "image";
  src: string;
  alt: string;
}

interface TryItYourself {
  url: string;
  email: string;
  password: string;
}

interface ProjectCardProps {
  rank: number;
  title: string;
  type: "Team" | "Personal";
  media?: Media;
  tryItYourself?: TryItYourself;
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

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.6 2.29 6.65 5.47 7.73.4.08.55-.18.55-.4 0-.19-.01-.83-.01-1.51-2.01.38-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.16-.28-.15-.68-.52-.01-.53.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.9-3.64-4.01 0-.89.31-1.61.82-2.18-.08-.2-.36-1.03.08-2.15 0 0 .67-.22 2.2.83a7.4 7.4 0 0 1 4 0c1.53-1.06 2.2-.83 2.2-.83.44 1.12.16 1.95.08 2.15.51.57.82 1.28.82 2.18 0 3.12-1.87 3.81-3.65 4.01.29.25.54.75.54 1.51 0 1.09-.01 1.97-.01 2.24 0 .22.15.48.55.4A8.13 8.13 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M6.5 3.5h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3M9.5 2.5h4v4M13.2 2.8 7.5 8.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden>
      <path
        d="M3.5 8.5 6.2 11 12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
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
  );
}

export default function ProjectCard({
  rank,
  title,
  type,
  media,
  tryItYourself,
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
    <article className="rounded-card border border-border bg-card overflow-hidden shadow-[0_1px_2px_0_rgb(0_0_0/0.05)] hover:border-ink/20 transition-colors duration-200">
      {media && (
        <div className="aspect-[2/1] w-full overflow-hidden border-b border-border">
          {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF must not go through Next's image optimizer */}
          <img
            src={media.src}
            alt={media.alt}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}
      <div className="p-3">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <span className="font-mono text-xs text-muted tabular-nums">
              {String(rank).padStart(2, "0")}
            </span>
            <h3 className="font-body font-medium text-[15px] leading-snug text-ink">
              {title}
            </h3>
            <span className="font-body text-[11px] px-2 py-0.5 rounded-full border border-ink text-ink">
              {type}
            </span>
          </div>

          {(githubUrl || demoUrl) && (
            <div className="flex items-center gap-1.5 shrink-0">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source on GitHub"
                  className="flex items-center justify-center w-7 h-7 rounded-full border border-border text-muted hover:border-electric-blue hover:text-electric-blue transition-colors"
                >
                  <GithubIcon />
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                  className="flex items-center justify-center w-7 h-7 rounded-full border border-border text-muted hover:border-electric-blue hover:text-electric-blue transition-colors"
                >
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          )}
        </div>

        {/* One-liner */}
        <p className="font-body text-sm leading-relaxed mb-3 text-ink">
          {oneLiner}
        </p>

        {/* Bullets */}
        <ul className="space-y-1.5 mb-3">
          {bullets.map((b, i) => (
            <li key={i} className="font-body text-sm text-muted flex gap-2">
              <CheckIcon />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {demoNote && (
          <p className="font-body text-xs italic mb-3 text-muted">{demoNote}</p>
        )}

        {tryItYourself && (
          <div className="rounded-card border border-border bg-card-alt p-3 mb-3">
            <p className="font-body text-[11px] uppercase tracking-[0.08em] font-medium mb-2 text-muted">
              Try it yourself — live manager login
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-xs mb-3 text-ink">
              <span>
                <span className="text-muted">Email:</span> {tryItYourself.email}
              </span>
              <span>
                <span className="text-muted">Password:</span> {tryItYourself.password}
              </span>
            </div>
            <a
              href={tryItYourself.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium px-4 py-[7px] rounded-accent bg-electric-blue text-white hover:opacity-90 transition-opacity"
            >
              Open live manager dashboard <ExternalLinkIcon />
            </a>
            <p className="font-body text-[11px] text-muted mt-2">
              Isolated demo account scoped to seeded sample data — no real salon data or customers.
            </p>
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tech.map((t) => (
            <span
              key={t.label}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-card-alt text-ink"
            >
              {t.label}
            </span>
          ))}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="font-body text-sm font-medium transition-colors flex items-center gap-1.5 text-ink hover:text-electric-blue"
        >
          <ChevronIcon expanded={expanded} />
          {expanded ? "Collapse" : "Read more"}
        </button>
      </div>

      {/* Expandable section */}
      {expanded && (
        <div className="border-t border-border bg-card-alt px-3 py-4 space-y-3.5">
          {archDiagram && (
            <div>
              <h4 className="font-body text-[11px] uppercase tracking-[0.08em] mb-2 text-muted">
                Architecture
              </h4>
              {archDiagram}
            </div>
          )}

          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.08em] mb-1 text-muted">
              Problem
            </h4>
            <p className="font-body text-sm leading-relaxed text-ink">{problem}</p>
          </div>

          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.08em] mb-1 text-muted">
              Contribution
            </h4>
            <p className="font-body text-sm leading-relaxed text-ink">{contribution}</p>
          </div>

          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.08em] mb-1 text-muted">
              Challenges
            </h4>
            <p className="font-body text-sm leading-relaxed text-ink">{challenges}</p>
          </div>

          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.08em] mb-1 text-muted">
              Solution
            </h4>
            <p className="font-body text-sm leading-relaxed text-ink">{solution}</p>
          </div>

          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.08em] mb-1 text-muted">
              Results
            </h4>
            <p className="font-body text-sm leading-relaxed text-ink">{results}</p>
          </div>

          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.08em] mb-1 text-muted">
              Demonstrates
            </h4>
            <p className="font-body text-sm leading-relaxed text-ink">{demonstrates}</p>
          </div>
        </div>
      )}
    </article>
  );
}
