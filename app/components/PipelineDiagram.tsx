export default function PipelineDiagram() {
  const steps = ["Ingest", "Build", "Evaluate", "Ship"];

  return (
    <div className="flex items-center gap-0 select-none" aria-label="Pipeline: Ingest → Build → Evaluate → Ship" role="img">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center">
          <span className="font-mono text-xs text-[#1F3864] border border-[#1F3864]/30 rounded px-2.5 py-1 bg-[#1F3864]/5 whitespace-nowrap">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="flex items-center mx-1" aria-hidden>
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                <line x1="0" y1="5" x2="22" y2="5" stroke="#1F3864" strokeWidth="1" strokeOpacity="0.4" />
                <polyline points="18,1 24,5 18,9" stroke="#1F3864" strokeWidth="1" strokeOpacity="0.4" fill="none" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
