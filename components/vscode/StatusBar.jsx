import { GitIcon, TerminalIcon, CheckIcon } from "./icons";

export default function StatusBar() {
  return (
    <footer className="flex h-6 shrink-0 select-none items-center gap-1 bg-status-bar px-2 text-[11px] text-white/90">
      <div
        title="Branch: main"
        className="flex items-center gap-1.5 px-1.5 py-0.5 hover:bg-white/10"
      >
        <GitIcon className="h-3.5 w-3.5" />
        <span>main*</span>
      </div>

      <div
        title="Problems"
        className="hidden items-center gap-1.5 px-1.5 py-0.5 hover:bg-white/10 sm:flex"
      >
        <CheckIcon className="h-3.5 w-3.5" />
        <span>0</span>
      </div>

      <div
        title="No Problems"
        className="hidden items-center gap-1.5 px-1.5 py-0.5 hover:bg-white/10 md:flex"
      >
        <TerminalIcon className="h-3.5 w-3.5" />
        <span>0</span>
      </div>

      <div className="flex-1" />

      <div className="hidden px-1.5 py-0.5 hover:bg-white/10 lg:block">
        Ln 1, Col 1
      </div>
      <div className="hidden px-1.5 py-0.5 hover:bg-white/10 lg:block">
        Spaces: 2
      </div>
      <div className="hidden px-1.5 py-0.5 hover:bg-white/10 lg:block">
        UTF-8
      </div>
      <div className="hidden px-1.5 py-0.5 hover:bg-white/10 md:block">
        JavaScript JSX
      </div>
      <div className="hidden px-1.5 py-0.5 hover:bg-white/10 xl:block">
        Prettier
      </div>
    </footer>
  );
}
