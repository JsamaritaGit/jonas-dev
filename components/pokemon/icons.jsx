// Small Pokémon themed inline icons. Plain functions (no state / hooks).

const BASE = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function PokeballIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <circle cx="8" cy="8" r="6.25" />
      <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5" stroke="currentColor" />
      <path d="M1.75 8h4.2M10.05 8h4.2" />
      <circle cx="8" cy="8" r="1.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function RefreshIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9" />
      <path d="M13.5 2.5v2.6h-2.6" />
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

export function ExternalIcon(props) {
  return (
    <svg {...BASE} {...props}>
      <path d="M6 2.5H3.5A1 1 0 0 0 2.5 3.5v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V10" />
      <path d="M9.5 2.5H13.5v4M13.5 2.5l-6.5 6.5" />
    </svg>
  );
}
