import {
  WindowMinimizeIcon,
  WindowRestoreIcon,
  WindowCloseIcon,
  BellIcon,
} from "./icons";

const MENU = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

export default function TitleBar() {
  return (
    <header className="flex h-9 shrink-0 select-none items-center bg-title-bar text-[12px] text-fg-muted">
      <div className="flex min-w-0 items-center gap-2 pl-3">
        <span className="truncate font-medium text-fg">jonas-dev</span>
        <span className="hidden text-fg-dim md:inline">
          — Visual Studio Code
        </span>
      </div>
{/* 
      <nav className="ml-4 hidden items-center gap-0.5 lg:flex">
        {MENU.map((m) => (
          <button
            key={m}
            className="rounded px-2 py-1 text-fg-muted transition-colors hover:bg-hover hover:text-fg"
          >
            {m}
          </button>
        ))}
      </nav>

      <div className="flex-1" />

      <button
        title="Notifications"
        className="px-2 py-1 text-fg-muted transition-colors hover:bg-hover hover:text-fg"
      >
        <BellIcon className="h-4 w-4" />
      </button>

      <div className="flex items-stretch">
        <button
          title="Minimize"
          className="flex h-9 w-11 items-center justify-center text-fg-muted transition-colors hover:bg-hover hover:text-fg"
        >
          <WindowMinimizeIcon className="h-4 w-4" />
        </button>
        <button
          title="Maximize"
          className="flex h-9 w-11 items-center justify-center text-fg-muted transition-colors hover:bg-hover hover:text-fg"
        >
          <WindowRestoreIcon className="h-4 w-4" />
        </button>
        <button
          title="Close"
          className="flex h-9 w-11 items-center justify-center text-fg-muted transition-colors hover:bg-[#e81123] hover:text-white"
        >
          <WindowCloseIcon className="h-4 w-4" />
        </button>
      </div> */}
    </header>
  );
}
