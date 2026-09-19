type IconProps = { className?: string };

const base = "shrink-0";

export function UserIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`${base} ${className}`} aria-hidden>
      <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 15c0-2.8 2.7-4.5 6-4.5s6 1.7 6 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function FolderIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`${base} ${className}`} aria-hidden>
      <path
        d="M2.5 4.5a1 1 0 0 1 1-1h3.2l1.3 1.6h6.5a1 1 0 0 1 1 1v7.4a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RocketIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`${base} ${className}`} aria-hidden>
      <path
        d="M9 2.5c2.2 0 4.5 1.8 4.5 5.5 0 2.3-1.2 4.3-2 5.4l-.9 1.2-1.6-1.1c-.2-.1-.2-.4 0-.5l.2-.2M9 2.5c-2.2 0-4.5 1.8-4.5 5.5 0 2.3 1.2 4.3 2 5.4l.9 1.2 1.6-1.1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7.5" r="1.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.2 13.2 5 15.5M11.8 13.2 13 15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function CodeIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`${base} ${className}`} aria-hidden>
      <path d="M6.5 5 3 9l3.5 4M11.5 5 15 9l-3.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`${base} ${className}`} aria-hidden>
      <rect x="2.5" y="6" width="13" height="8.5" rx="1.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 6V4.7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V6M2.5 10h13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function CapIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`${base} ${className}`} aria-hidden>
      <path d="M9 4 1.8 7.2 9 10.4l7.2-3.2L9 4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M4.8 8.8v3.1c0 1 1.9 2 4.2 2s4.2-1 4.2-2V8.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.2 7.2v3.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function MailIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`${base} ${className}`} aria-hidden>
      <rect x="2.2" y="4" width="13.6" height="10" rx="1.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 5l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrophyIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`${base} ${className}`} aria-hidden>
      <path d="M5.5 3h7v4a3.5 3.5 0 0 1-7 0V3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M5.5 4.2H3.2a1 1 0 0 0-1 1.2c.3 1.5 1.4 2.4 2.9 2.5M12.5 4.2h2.3a1 1 0 0 1 1 1.2c-.3 1.5-1.4 2.4-2.9 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 10.5V13M6.3 15.5h5.4M7 13h4l.6 2.5H6.4L7 13Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function GithubIcon({ className = "" }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className={`${base} ${className}`} aria-hidden>
      <path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.6 2.29 6.65 5.47 7.73.4.08.55-.18.55-.4 0-.19-.01-.83-.01-1.51-2.01.38-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.16-.28-.15-.68-.52-.01-.53.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.9-3.64-4.01 0-.89.31-1.61.82-2.18-.08-.2-.36-1.03.08-2.15 0 0 .67-.22 2.2.83a7.4 7.4 0 0 1 4 0c1.53-1.06 2.2-.83 2.2-.83.44 1.12.16 1.95.08 2.15.51.57.82 1.28.82 2.18 0 3.12-1.87 3.81-3.65 4.01.29.25.54.75.54 1.51 0 1.09-.01 1.97-.01 2.24 0 .22.15.48.55.4A8.13 8.13 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "" }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className={`${base} ${className}`} aria-hidden>
      <path d="M14.5 0h-13A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0ZM4.7 13.4H2.4V6h2.3v7.4ZM3.6 5A1.3 1.3 0 1 1 3.6 2.4 1.3 1.3 0 0 1 3.6 5Zm9.9 8.4h-2.3V9.8c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.6H6.3V6h2.2v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v3.9Z" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={`${base} mt-0.5 ${className}`} aria-hidden>
      <path d="M3.5 8.5 6.2 11 12.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDownIcon({ className = "" }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`${base} ${className}`} aria-hidden>
      <path d="M8 2.5v11M3.5 9.5 8 13.5l4.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
