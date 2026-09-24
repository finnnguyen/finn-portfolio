export default function SectionHeader({
  title,
  subtitle,
  linkLabel,
  linkHref,
}: {
  title: string;
  subtitle?: string;
  linkLabel?: string;
  linkHref?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6 mb-8">
      <div>
        <h2 className="font-heading font-semibold text-[23px] leading-[1.39] tracking-[-0.023em] text-ink mb-1.5">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-sm text-muted max-w-xl">{subtitle}</p>
        )}
      </div>
      {linkLabel && linkHref && (
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm font-medium text-graphite hover:text-ink transition-colors shrink-0"
        >
          {linkLabel} &rarr;
        </a>
      )}
    </div>
  );
}
