// Syntax highlighting helpers and the line-numbered code row used by the
// fake "open file" code panes. Plain server-safe helpers — no hooks or
// state, so they can be called directly from Server Components.

export const kw = (children) => (
  <span className="text-[#c586c0]">{children}</span>
);
export const fn = (children) => (
  <span className="text-[#dcdcaa]">{children}</span>
);
export const str = (children) => (
  <span className="text-[#ce9178]">{children}</span>
);
export const cm = (children) => (
  <span className="italic text-[#6a9955]">{children}</span>
);
export const ty = (children) => (
  <span className="text-[#4ec9b0]">{children}</span>
);
export const num = (children) => (
  <span className="text-[#b5cea8]">{children}</span>
);
export const va = (children) => (
  <span className="text-[#9cdcfe]">{children}</span>
);
export const pn = (children) => <span>{children}</span>;

// --- A single line of code with a gutter line number ----------------------
export function Line({ n, children }) {
  return (
    <div className="flex items-start px-2 hover:bg-selection/40">
      <span className="w-10 shrink-0 select-none pr-4 text-right text-fg-dim">
        {n}
      </span>
      <span className="whitespace-pre pr-6">{children}</span>
    </div>
  );
}
