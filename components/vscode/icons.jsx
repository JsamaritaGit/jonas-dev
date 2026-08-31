const BASE = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ExplorerIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M1.75 3.25h4L7.5 5h6.75v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2.25 12V4.75A1.5 1.5 0 0 1 3.75 3.25h-2Z" />
      <path d="M2.25 6.5h11.5" />
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <circle cx="7" cy="7" r="4.5" />
      <path d="M10.5 10.5L14 14" />
    </svg>
  );
}

export function GitIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <circle cx="4" cy="3.5" r="1.75" />
      <circle cx="12" cy="5.5" r="1.75" />
      <circle cx="4" cy="12.5" r="1.75" />
      <path d="M4 5.25v5.5" />
      <path d="M4 10.75c0-2.5 2.5-3 4-3.5 1.5-.5 4-1 4-1.75" />
    </svg>
  );
}

export function ExtensionsIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <rect x="2" y="2" width="5.5" height="5.5" rx="1" />
      <rect x="8.5" y="2" width="5.5" height="5.5" rx="1" />
      <rect x="2" y="8.5" width="5.5" height="5.5" rx="1" />
      <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1" />
    </svg>
  );
}

export function SettingsIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M1.5 4.25h9" />
      <path d="M13.5 4.25h1" />
      <circle cx="12.25" cy="4.25" r="1.25" />
      <path d="M1.5 8h2" />
      <path d="M6.5 8h8" />
      <circle cx="5" cy="8" r="1.25" />
      <path d="M1.5 11.75h7" />
      <path d="M11.5 11.75h3" />
      <circle cx="10.25" cy="11.75" r="1.25" />
    </svg>
  );
}

export function FileIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M4 1.5h5.5L13 5v9.5H4z" />
      <path d="M9.5 1.5V5H13" />
    </svg>
  );
}

export function FolderIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M1.75 3.25h3.5l1.5 1.5h7.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1.75 11V4.75A1.5 1.5 0 0 1 3.25 3.25Z" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

export function ChevronRightIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}

export function WindowMinimizeIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M3 8h10" />
    </svg>
  );
}

export function WindowMaximizeIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <rect x="3" y="3" width="10" height="10" rx="1" />
    </svg>
  );
}

export function WindowRestoreIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <rect x="4.5" y="4.5" width="8" height="8" rx="1" />
      <path d="M6.5 3H12a1 1 0 0 1 1 1v5.5" />
    </svg>
  );
}

export function WindowCloseIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export function BellIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M8 2.5a4 4 0 0 0-4 4c0 3-1.5 4-1.5 4h11S12 9.5 12 6.5a4 4 0 0 0-4-4Z" />
      <path d="M6.8 13a1.5 1.5 0 0 0 2.4 0" />
    </svg>
  );
}

export function SplitIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <rect x="2" y="3" width="12" height="10" rx="1" />
      <path d="M8 3v10" />
    </svg>
  );
}

export function TerminalIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <rect x="2" y="3" width="12" height="10" rx="1" />
      <path d="M5 6.5l2.5 2L5 10.5" />
      <path d="M9.5 10.5H12" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M3 8.5l3.5 3.5L13 5" />
    </svg>
  );
}

export function AccountIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <circle cx="8" cy="5" r="2.5" />
      <path d="M2.5 13.5a5.5 5.5 0 0 1 11 0" />
    </svg>
  );
}
