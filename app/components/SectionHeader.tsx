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
        <h2 className="font-heading font-medium text-[24px] leading-[1.27] tracking-[-0.02em] text-ink mb-1.5">
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
          className="font-body text-sm font-medium text-electric-blue hover:underline shrink-0"
        >
          {linkLabel} &rarr;
        </a>
      )}
    </div>
  );
}
