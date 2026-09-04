// Shared helpers for the Pokémon widget (pure module — no hooks, safe to
// import from client components).

// Official-ish type colours (used for badges / accents).
export const TYPE_COLORS = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export const STAT_LABELS = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SP.ATK",
  "special-defense": "SP.DEF",
  speed: "SPD",
};

export function capitalize(name = "") {
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : name;
}

// 25 -> "#0025"
export function formatId(id) {
  return `#${String(id).padStart(4, "0")}`;
}

// Height comes from PokeAPI in decimetres -> metres.
export function heightInMeters(dm) {
  return dm == null ? "—" : (dm / 10).toFixed(1) + " m";
}

// Weight comes from PokeAPI in hectograms -> kilograms.
export function weightInKg(hg) {
  return hg == null ? "—" : (hg / 10).toFixed(1) + " kg";
}

export function typeColor(type) {
  return TYPE_COLORS[type] || "#9d9d9d";
}
