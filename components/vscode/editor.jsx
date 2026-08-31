"use client";

// The VS Code-like editor area: a breadcrumb bar on top, then a resizable
// split with the live PREVIEW as the main/center pane and the line-numbered
// code pane below it. Drag the divider between the panes to resize both.

import { useRef, useState } from "react";
import { ChevronRightIcon, SplitIcon } from "./icons";

// --- The "open editor document" wrapper -----------------------------------
// Breadcrumb bar on top, then the live PREVIEW as the main/center pane with
// the line-numbered code pane below it. Drag the divider to resize both.
// `children` are the code lines; `previewLabel` / `preview` are passed as
// explicit props so the client component never has to guess which child is
// the preview (element type identity is not preserved across the RSC
// server -> client children boundary).
export function EditorFile({ filename, language, children, previewLabel, preview }) {
  // Percentage of the container height given to the preview (main) pane.
  const [previewPct, setPreviewPct] = useState(65);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const onDividerPointerDown = (e) => {
    dragging.current = true;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onDividerPointerMove = (e) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (!rect.height) return;
    const pct = ((e.clientY - rect.top) / rect.height) * 100;
    setPreviewPct(Math.min(85, Math.max(15, pct)));
  };

  const onDividerPointerUp = (e) => {
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex h-full min-h-0 flex-col font-mono text-[13px] leading-6"
    >
      {/* Breadcrumb bar (like VS Code) */}
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
        <button
          title="Reset split to 50 / 50"
          onClick={() => setPreviewPct(50)}
          className="rounded-sm p-0.5 text-fg-dim hover:bg-hover hover:text-fg"
        >
          <SplitIcon className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Preview pane — the main window */}
      <div
        style={{ flexBasis: `${previewPct}%` }}
        className="min-h-0 shrink-0 overflow-hidden"
      >
        <Preview label={previewLabel}>{preview}</Preview>
      </div>

      {/* Draggable divider between preview and editor */}
      <div
        role="separator"
        aria-orientation="horizontal"
        aria-valuenow={Math.round(previewPct)}
        aria-valuemin={15}
        aria-valuemax={85}
        aria-label="Resize preview and editor"
        title="Drag to resize preview and editor"
        onPointerDown={onDividerPointerDown}
        onPointerMove={onDividerPointerMove}
        onPointerUp={onDividerPointerUp}
        onPointerCancel={onDividerPointerUp}
        className="group relative z-10 -my-1 flex h-2 shrink-0 cursor-row-resize touch-none select-none items-center justify-center"
      >
        <div className="h-px w-full bg-chrome-strong transition-colors group-hover:bg-sky-400 group-active:bg-sky-400" />
      </div>

      {/* Editor code pane (bottom, resizable) */}
      <div className="min-h-0 flex-1 overflow-y-auto bg-editor">
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
}

// --- The labeled live preview pane ----------------------------------------
export function Preview({ label, children }) {
  return (
    <section className="flex h-full min-h-0 flex-col">
      <div className="flex shrink-0 items-center justify-between border-b border-chrome-strong bg-editor-soft px-4 py-1.5 text-[10px] font-medium uppercase tracking-widest text-fg-muted">
        <span>{label}</span>
        <span className="rounded-sm bg-selection px-1.5 py-0.5 text-[9px] text-sky-200">
          Preview
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-5 font-sans">
        {children}
      </div>
    </section>
  );
}
