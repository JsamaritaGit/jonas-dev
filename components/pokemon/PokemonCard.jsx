"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PokemonModal from "./PokemonModal";
import { PokeballIcon, RefreshIcon } from "./icons";
import { typeColor } from "./pokemon";

// Approximate footprint of the sprite, used to keep it fully on screen.
const SPRITE = 128;
const EASE = "cubic-bezier(0.45, 0.05, 0.55, 0.95)";

// Random waypoint for the roaming sprite, kept inside the editor area
// (below the tabs/breadcrumb, above the status bar).
function randomSpot() {
  if (typeof window === "undefined") return { x: 24, y: 160 };
  const w = window.innerWidth;
  const h = window.innerHeight;
  const size = SPRITE + 24;
  const x = Math.round(16 + Math.random() * Math.max(1, w - size - 32));
  const y = Math.round(150 + Math.random() * Math.max(1, h - size - 90));
  return { x, y };
}

export default function PokemonCard() {
  const [pos, setPos] = useState(null);
  const [roamDur, setRoamDur] = useState(0); // ms the current glide lasts
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [accent, setAccent] = useState(null);

  const posRef = useRef(pos);
  const nodeRef = useRef(null);

  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  const catchRandom = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/pokemon/random");
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setPokemon(data);
      setAccent(data.types?.length ? typeColor(data.types[0]) : null);
      setRoamDur(0);
      setPos(randomSpot());
    } catch (err) {
      setError(err.message || "Could not catch a Pokémon.");
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Client-only: pick the first spot, then catch a Pokémon.
    setPos(randomSpot());
    catchRandom();
  }, [catchRandom]);

  // Roam: glide to a new random waypoint, pause, then wander again. Stops
  // while the sprite is hovered/touched (so it can be clicked) or while the
  // details modal is open.
  const paused = loading || detailsOpen || hovering;

  useEffect(() => {
    if (!pokemon || paused) return;
    let cancelled = false;
    let timer;

    const wander = () => {
      const cur = posRef.current || { x: 0, y: 0 };
      const next = randomSpot();
      const dist = Math.hypot(next.x - cur.x, next.y - cur.y);
      // Longer trips take longer — keep the glide speed roughly constant.
      const dur = Math.round(Math.min(8000, Math.max(2400, dist * 15)));
      setRoamDur(dur);
      setPos(next);
      const dwell = 900 + Math.random() * 2600; // hang around before leaving
      timer = setTimeout(() => {
        if (!cancelled) wander();
      }, dur + dwell);
    };

    // Let the sprite pop in before it wanders off.
    timer = setTimeout(() => {
      if (!cancelled) wander();
    }, 1400);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [pokemon, paused]);

  // Freeze the sprite in place the instant it's hovered/touched so the
  // user can reliably click it (snap to the current on-screen position).
  const freeze = () => {
    const el = nodeRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setRoamDur(0);
    setPos({ x: Math.round(r.left), y: Math.round(r.top) });
    setHovering(true);
  };

  if (!pos) return null;

  const halo = accent
    ? `radial-gradient(circle at 50% 42%, ${accent}40, transparent 72%)`
    : undefined;

  return (
    <>
      {/* Roaming sprite — fixed to the viewport, floats above the page (z 2000). */}
      <div
        ref={nodeRef}
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          zIndex: 2000,
          willChange: "left, top",
          transition: `left ${roamDur}ms ${EASE}, top ${roamDur}ms ${EASE}`,
        }}
        className="pointer-events-none select-none"
      >
        {loading ? (
          <div className="pointer-events-auto flex h-24 w-24 items-center justify-center">
            <PokeballIcon className="h-9 w-9 animate-spin text-orange-300" />
          </div>
        ) : error ? (
          <button
            type="button"
            onClick={catchRandom}
            title="Retry catching a Pokémon"
            aria-label="Retry catching a Pokémon"
            className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-chrome-strong bg-editor text-fg-dim shadow-lg transition-colors hover:text-orange-300"
          >
            <RefreshIcon className="h-5 w-5" />
          </button>
        ) : pokemon ? (
          <div
            className="pointer-events-auto relative"
            onMouseEnter={freeze}
            onMouseLeave={() => setHovering(false)}
            onTouchStart={freeze}
            onTouchEnd={() => setHovering(false)}
          >
            {/* Catch-another quick action */}
            <button
              type="button"
              onClick={catchRandom}
              disabled={loading}
              title="Catch another"
              aria-label="Catch another Pokémon"
              className="absolute -right-1 -top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-chrome-strong bg-editor text-fg-muted shadow-md transition-transform duration-200 hover:scale-110 hover:text-sky-300 disabled:opacity-60"
            >
              <RefreshIcon className="h-4 w-4" />
            </button>

            {/* Sprite — click to open the details modal */}
            <button
              type="button"
              key={pokemon.id}
              onClick={() => setDetailsOpen(true)}
              title={`View ${pokemon.name} details`}
              aria-label={`View details for ${pokemon.name}`}
              className="animate-pop-in group flex h-28 w-28 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-orange-400 md:h-32 md:w-32"
            >
              <span
                className="animate-float flex h-full w-full items-center justify-center"
    
              >
                {pokemon.sprite ? (
                  <img
                    src={pokemon.sprite}
                    alt={pokemon.name}
                    width={120}
                    height={120}
                    className="h-24 w-24 object-contain drop-shadow-xl transition-transform duration-200 group-hover:scale-110 group-active:scale-95 md:h-28 md:w-28"
                  />
                ) : (
                  <PokeballIcon className="h-12 w-12 text-fg-dim" />
                )}
              </span>
            </button>
          </div>
        ) : null}
      </div>

      {/* Details modal (opened on click, stacked above the sprite) */}
      {detailsOpen && pokemon ? (
        <PokemonModal pokemon={pokemon} onClose={() => setDetailsOpen(false)} />
      ) : null}
    </>
  );
}
