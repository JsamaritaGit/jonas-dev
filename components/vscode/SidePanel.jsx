"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ExplorerIcon,
  SearchIcon,
  GitIcon,
  SettingsIcon,
  ExtensionsIcon,
  FileIcon,
  FolderIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "./icons";

const VIEWS = [
  { id: "explorer", icon: ExplorerIcon, label: "Explorer", shortcut: "Ctrl+Shift+E" },
  { id: "search", icon: SearchIcon, label: "Search", shortcut: "Ctrl+Shift+F" },
  { id: "git", icon: GitIcon, label: "Source Control", shortcut: "Ctrl+Shift+G" },
  { id: "extensions", icon: ExtensionsIcon, label: "Extensions", shortcut: "Ctrl+Shift+X" },
];

// Nested profile tree for the Explorer panel. Files with `href` navigate
// to a route (and highlight when active); the rest are decorative.
const TREE = [
  {
    type: "folder",
    name: "Jonas Samarita",
    children: [
      { type: "file", name: "Current stack", href: "/", accent: "text-sky-300" },
      { type: "file", name: "Current work", href: "/about", accent: "text-teal-300" },
      {
        type: "folder",
        name: "Work experiences",
        children: [
          { type: "file", name: "Sanyo Denki Philippines, Inc.", href: null, accent: "text-sky-300" },
          { type: "file", name: "Exela Technologies", href: null, accent: "text-sky-300" },
          { type: "file", name: "Merry Telecommunication", href: null, accent: "text-sky-300" },
          { type: "file", name: "Kolehiyo ng Subic", href: null, accent: "text-sky-300" },
        ],
      },
      { type: "file", name: "Contact Info", href: null, accent: "text-orange-300" },
    ],
  },
];

const INSTALLED_EXTENSIONS = [
  { name: "ESLint", author: "Microsoft", color: "text-blue-400" },
  { name: "Prettier", author: "Prettier", color: "text-orange-400" },
  { name: "Tailwind CSS IntelliSense", author: "Tailwind Labs", color: "text-cyan-400" },
  { name: "GitLens", author: "GitKraken", color: "text-red-400" },
];

const CHANGES = [
  { file: "app/layout.js", status: "M", color: "text-yellow-300" },
  { file: "app/page.js", status: "M", color: "text-yellow-300" },
  { file: "app/about/page.js", status: "M", color: "text-yellow-300" },
  { file: "app/projects/page.js", status: "U", color: "text-green-400" },
  { file: "components/vscode/SidePanel.jsx", status: "U", color: "text-green-400" },
];

function TreeNode({ node, depth, pathname }) {
  const [open, setOpen] = useState(depth < 2);
  const pad = { paddingLeft: 8 + depth * 12 };

  if (node.type === "folder") {
    return (
      <div>
        <button
          onClick={() => setOpen((o) => !o)}
          style={pad}
          className="flex w-full items-center gap-1.5 py-0.5 pr-2 text-fg-muted hover:bg-hover hover:text-fg"
        >
          {open ? (
            <ChevronDownIcon className="h-3.5 w-3.5 shrink-0" />
          ) : (
            <ChevronRightIcon className="h-3.5 w-3.5 shrink-0" />
          )}
          <FolderIcon
            className={`h-4 w-4 shrink-0 ${open ? "text-sky-300" : "text-sky-500/70"}`}
          />
          <span className="truncate">{node.name}</span>
        </button>
        {open &&
          node.children.map((child, i) => (
            <TreeNode key={i} node={child} depth={depth + 1} pathname={pathname} />
          ))}
      </div>
    );
  }

  const active = node.href != null && pathname === node.href;
  const cls = `flex w-full items-center gap-1.5 py-0.5 pr-2 ${
    active
      ? "bg-selection text-fg"
      : "text-fg-muted hover:bg-hover hover:text-fg"
  }`;
  const content = (
    <>
      <FileIcon className={`h-4 w-4 shrink-0 ${node.accent ?? "text-fg-muted"}`} />
      <span className="truncate">{node.name}</span>
    </>
  );

  return node.href ? (
    <Link href={node.href} style={pad} className={cls}>
      {content}
    </Link>
  ) : (
    <div style={pad} className={cls}>
      {content}
    </div>
  );
}

function Explorer() {
  const pathname = usePathname();
  return (
    <div className="py-1">
      {TREE.map((node, i) => (
        <TreeNode key={i} node={node} depth={0} pathname={pathname} />
      ))}
    </div>
  );
}

function Search() {
  return (
    <div className="px-3 py-2">
      <div className="flex items-center gap-2 rounded-sm border border-chrome bg-editor px-2 py-1">
        <SearchIcon className="h-3.5 w-3.5 shrink-0 text-fg-dim" />
        <input
          className="w-full bg-transparent text-[13px] text-fg outline-none placeholder:text-fg-dim"
          placeholder="Search"
        />
      </div>
      <div className="mt-1.5 flex items-center justify-between text-[11px] text-fg-muted">
        <span>0 results</span>
        <span className="text-fg-dim">Preserve Case</span>
      </div>
      <div className="mt-6 text-center text-[11px] text-fg-dim">
        No results found
      </div>
    </div>
  );
}

function SourceControl() {
  return (
    <div>
      <div className="px-3 py-2 text-[11px] text-fg-muted">
        Changes ({CHANGES.length})
      </div>
      {CHANGES.map((c) => (
        <div
          key={c.file}
          className="flex items-center gap-2 px-3 py-1 text-[13px] text-fg-muted hover:bg-hover"
        >
          <span className={`w-3 font-mono text-[11px] ${c.color}`}>{c.status}</span>
          <span className="truncate">{c.file}</span>
        </div>
      ))}
    </div>
  );
}

function Extensions() {
  return (
    <div>
      <div className="px-3 py-2 text-[11px] text-fg-muted">
        Installed ({INSTALLED_EXTENSIONS.length})
      </div>
      {INSTALLED_EXTENSIONS.map((e) => (
        <div
          key={e.name}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-hover"
        >
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-chrome bg-editor font-mono text-[10px] ${e.color}`}
          >
            {e.name[0]}
          </span>
          <div className="min-w-0">
            <div className="truncate text-[13px] text-fg">{e.name}</div>
            <div className="truncate text-[11px] text-fg-dim">{e.author}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SettingToggle({ label, description, defaultOn = true }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-start justify-between gap-3 px-3 py-2">
      <div className="min-w-0">
        <div className="text-[13px] text-fg">{label}</div>
        <div className="text-[11px] leading-4 text-fg-dim">{description}</div>
      </div>
      <button
        onClick={() => setOn((v) => !v)}
        aria-pressed={on}
        className={`relative mt-0.5 h-4 w-8 shrink-0 rounded-full transition-colors ${
          on ? "bg-status-bar" : "bg-chrome-strong"
        }`}
      >
        <span
          className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${
            on ? "left-[18px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}

function Settings() {
  return (
    <div className="py-1">
      <SettingToggle
        label="Editor: Font Ligatures"
        description="Control whether the editor renders font ligatures."
      />
      <SettingToggle
        label="Editor: Minimap"
        description="Control whether the minimap is shown."
      />
      <SettingToggle
        label="Files: Auto Save"
        description="Control auto save of dirty files."
        defaultOn={false}
      />
      <SettingToggle
        label="Workbench: Color Theme"
        description="The color theme used in the workbench."
      />
    </div>
  );
}

export default function SidePanel() {
  const [view, setView] = useState("explorer");
  const [collapsed, setCollapsed] = useState(false);

  const current = VIEWS.find((v) => v.id === view);

  const select = (id) => {
    setView(id);
    setCollapsed(false);
  };

  return (
    <div className="flex shrink-0">
      {/* Activity bar */}
      <aside className="flex w-12 flex-col items-center bg-activity-bar py-1 text-fg-muted">
        {VIEWS.map((v) => {
          const Icon = v.icon;
          const isActive = view === v.id;
          return (
            <button
              key={v.id}
              title={`${v.label}${v.shortcut ? ` (${v.shortcut})` : ""}`}
              onClick={() => select(v.id)}
              className={`relative flex h-12 w-12 items-center justify-center transition-colors ${
                isActive ? "text-fg" : "hover:text-fg"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-0.5 bg-fg" />
              )}
              <Icon className="h-6 w-6" />
            </button>
          );
        })}

        <div className="flex-1" />

        <button
          title="Settings (Ctrl+,)"
          onClick={() => select("settings")}
          className={`relative flex h-12 w-12 items-center justify-center transition-colors ${
            view === "settings" ? "text-fg" : "hover:text-fg"
          }`}
        >
          {view === "settings" && (
            <span className="absolute left-0 top-0 h-full w-0.5 bg-fg" />
          )}
          <SettingsIcon className="h-6 w-6" />
        </button>
      </aside>

      {/* Sidebar */}
      {!collapsed && (
        <aside className="flex w-64 flex-col border-r border-chrome-strong bg-editor-soft text-fg">
          <header className="flex shrink-0 items-center justify-between border-b border-chrome px-3 py-1.5">
            <span className="text-[11px] font-medium uppercase tracking-wider text-fg-muted">
              {current ? current.label : "Settings"}
            </span>
            <button
              onClick={() => setCollapsed(true)}
              title="Collapse Sidebar (Ctrl+B)"
              className="rounded-sm p-0.5 text-fg-dim hover:bg-hover hover:text-fg"
            >
              <CloseIcon className="h-3.5 w-3.5" />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto py-1 text-[13px]">
            {view === "explorer" && <Explorer />}
            {view === "search" && <Search />}
            {view === "git" && <SourceControl />}
            {view === "extensions" && <Extensions />}
            {view === "settings" && <Settings />}
          </div>
        </aside>
      )}
    </div>
  );
}
