"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TABS } from "./tabs";
import { FileIcon, CloseIcon, AccountIcon } from "./icons";

// The tab bar is the primary navigation: each tab is a route, and the
// active tab is highlighted exactly like an open editor document.
export default function EditorTabs() {
  const pathname = usePathname();

  return (
    <div className="flex shrink-0 items-stretch bg-editor-soft text-[13px]">
      <div className="flex min-w-0 flex-1 items-stretch border-b border-chrome-strong">
        {TABS.map((tab) => {
          const active = pathname === tab.path;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`group relative flex items-center gap-2 border-r border-chrome px-4 py-2 transition-colors ${
                active
                  ? "border-t-2 border-t-sky-400 bg-editor text-fg"
                  : "border-t-2 border-t-transparent bg-tab-inactive text-fg-muted hover:bg-hover hover:text-fg"
              }`}
            >
              <FileIcon className={`h-4 w-4 ${tab.accent}`} />
              <span className="whitespace-nowrap">{tab.name}</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-sm text-fg-dim opacity-0 transition-opacity group-hover:opacity-100">
                <CloseIcon className="h-3 w-3" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-2 border-b border-chrome-strong px-3 text-fg-dim">
        <AccountIcon className="h-4 w-4 cursor-pointer hover:text-fg" />
      </div>
    </div>
  );
}
