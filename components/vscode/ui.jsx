// Small presentational pieces used inside the live PREVIEW panes of the
// tab templates. Plain server components — no state.

export function StatCard({ label, value, hint }) {
  return (
    <div className="rounded-md border border-chrome-strong bg-editor p-4 transition-colors duration-200 hover:border-orange-400/80">
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
      className={`inline-flex cursor-default items-center rounded-sm px-2 py-0.5 font-mono text-[11px] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 hover:brightness-125 ${color}`}
    >
      {children}
    </span>
  );
}

export function PanelTitle({ children }) {
  return (
    <h2 className="mb-3 font-semibold text-fg">{children}</h2>
  );
}

export function TextMuted({ children }) {
  return <p className="text-sm leading-6 text-fg-muted">{children}</p>;
}
