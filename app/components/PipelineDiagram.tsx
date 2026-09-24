export default function PipelineDiagram() {
  const steps = ["Ingest", "Build", "Evaluate", "Ship"];

  return (
    <div className="flex flex-wrap items-center gap-y-2 select-none" aria-label="Pipeline: Ingest → Build → Evaluate → Ship" role="img">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center">
          <span className="font-mono text-[11px] border border-current/25 rounded-full px-3 py-1 bg-current/10 whitespace-nowrap">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="flex items-center mx-1" aria-hidden>
              <svg width="24" height="10" viewBox="0 0 28 10" fill="none">
                <line x1="0" y1="5" x2="22" y2="5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                <polyline points="18,1 24,5 18,9" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
