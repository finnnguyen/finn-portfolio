import type { ReactNode } from "react";

export default function SectionHeader({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex gap-4 mb-10">
      <div className="w-1 rounded-full bg-accent shrink-0" aria-hidden />
      <div>
        <h2 className="font-heading font-semibold text-2xl text-ink mb-1.5 flex items-center gap-2.5">
          <span className="text-accent" aria-hidden>
            {icon}
          </span>
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-sm text-muted max-w-xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
