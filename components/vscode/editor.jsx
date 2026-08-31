// Primitives used by every tab page to render itself as an "open file" in
// the VS Code editor area: a breadcrumb bar, line-numbered code with
// syntax highlighting, and an optional live PREVIEW pane below.

import { ChevronRightIcon, SplitIcon } from "./icons";

// --- Syntax highlighting helpers -----------------------------------------
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

// --- The "open editor document" wrapper -----------------------------------
// Breadcrumb bar on top (like VS Code), then the scrollable code body.
export function EditorFile({ filename, language, children }) {
  return (
    <div className="flex min-h-full flex-col font-mono text-[13px] leading-6">
      <div className="flex shrink-0 items-center gap-1 border-b border-chrome bg-editor px-4 py-1.5 text-xs text-fg-muted">
        <span className="cursor-pointer hover:text-fg">jonas-dev</span>
        <ChevronRightIcon className="h-3 w-3 text-fg-dim" />
        <span className="cursor-pointer hover:text-fg">app</span>
        <ChevronRightIcon className="h-3 w-3 text-fg-dim" />
        <span className="cursor-pointer hover:text-fg">pages</span>
        <ChevronRightIcon className="h-3 w-3 text-fg-dim" />
        <span className="text-fg">{filename}</span>
        <span className="ml-2 rounded-sm bg-selection px-1.5 py-0.5 text-[10px] text-sky-200">
          {language}
        </span>
        <div className="flex-1" />
        <SplitIcon className="h-3.5 w-3.5 cursor-pointer text-fg-dim hover:text-fg" />
      </div>
      <div className="flex-1 overflow-auto py-2">{children}</div>
    </div>
  );
}

// --- A labeled pane below the code, rendering the template live -----------
export function Preview({ label, children }) {
  return (
    <section className="mt-4 border-t border-chrome-strong">
      <div className="flex items-center justify-between bg-editor-soft px-4 py-1.5 text-[10px] font-medium uppercase tracking-widest text-fg-muted">
        <span>{label}</span>
        <span className="rounded-sm bg-selection px-1.5 py-0.5 text-[9px] text-sky-200">
          Preview
        </span>
      </div>
      <div className="p-5 font-sans">{children}</div>
    </section>
  );
}
