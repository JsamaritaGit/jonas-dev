// Small presentational pieces used inside the live PREVIEW panes of the
// tab templates. Plain server components — no state.

export function StatCard({ label, value, hint }) {
  return (
    <div className="rounded-md border border-chrome-strong bg-editor p-4">
      <div className="text-[11px] uppercase tracking-wide text-fg-muted">
        {label}
      </div>
      <div className="mt-1 font-mono text-2xl font-semibold text-fg">
        {value}
      </div>
      {hint ? (
        <div className="mt-1 font-mono text-[11px] text-fg-dim">{hint}</div>
      ) : null}
    </div>
  );
}

export function Badge({ children, color = "bg-selection text-sky-200" }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[11px] ${color}`}
    >
      {children}
    </span>
  );
}

export function PanelTitle({ children, className = "" }) {
  return (
    <h2 className={`mb-3 font-semibold text-fg ${className}`}>{children}</h2>
  );
}

export function TextMuted({ children, className = "" }) {
  return <p className={`text-sm leading-6 text-fg-muted ${className}`}>{children}</p>;
}
