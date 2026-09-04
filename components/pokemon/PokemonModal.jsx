"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, PokeballIcon, ExternalIcon } from "./icons";
import {
  capitalize,
  formatId,
  heightInMeters,
  weightInKg,
  STAT_LABELS,
  typeColor,
} from "./pokemon";

// Tiny in-memory cache so re-opening the same Pokémon is instant.
const detailCache = new Map();

async function fetchDetails(id) {
  if (detailCache.has(id)) return detailCache.get(id);
  const res = await fetch(`/api/pokemon/${id}`);
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  detailCache.set(id, data);
  return data;
}

function statColor(base) {
  if (base < 60) return "#f87171";
  if (base < 100) return "#fbbf24";
  return "#34d399";
}

export default function PokemonModal({ pokemon, onClose }) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const requestId = useRef(0);

  const load = async () => {
    const id = ++requestId.current;
    setError(null);
    setDetails(null);
    try {
      const data = await fetchDetails(pokemon.id);
      if (requestId.current === id) setDetails(data);
    } catch (err) {
      if (requestId.current === id) setError(err.message || "Something went wrong.");
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon.id]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const accent = details?.types?.length
    ? typeColor(details.types[0])
    : pokemon.types?.length
      ? typeColor(pokemon.types[0])
      : null;

  return (
    <div
      style={{ zIndex: 3000 }}
      className="animate-fade-in fixed inset-0 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${capitalize(pokemon.name)} details`}
        onClick={(e) => e.stopPropagation()}
        className="animate-panel-in flex max-h-[88dvh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-chrome-strong bg-editor-soft shadow-2xl sm:max-h-[85vh]"
      >
        {/* Header */}
        <div className="flex shrink-0 items-center gap-3 border-b border-chrome px-5 py-3.5 sm:px-6">
          <PokeballIcon className="h-5 w-5 shrink-0 text-orange-300" />
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[11px] text-fg-dim">
                {formatId(pokemon.id)}
              </span>
              <h2 className="truncate text-base font-semibold capitalize text-fg">
                {capitalize(pokemon.name)}
              </h2>
            </div>
            <p className="font-mono text-[10px] text-fg-dim">
              GET /api/pokemon/{pokemon.id}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-fg-muted transition-colors hover:bg-hover hover:text-fg"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {error ? (
            <div className="flex flex-col items-center gap-4 px-6 py-14 text-center">
              <PokeballIcon className="h-10 w-10 text-fg-dim" />
              <p className="text-sm text-fg-muted">
                Couldn&apos;t load {capitalize(pokemon.name)}&apos;s details.
              </p>
              <p className="max-w-xs font-mono text-[11px] text-fg-dim">{error}</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={load}
                  className="rounded-sm bg-selection px-3 py-1.5 font-mono text-xs text-sky-200 hover:brightness-125"
                >
                  Retry
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-sm border border-chrome-strong px-3 py-1.5 font-mono text-xs text-fg-muted hover:text-fg"
                >
                  Close
                </button>
              </div>
            </div>
          ) : !details ? (
            <div className="flex flex-col items-center gap-4 px-6 py-16">
              <PokeballIcon className="h-10 w-10 animate-spin text-sky-300" />
              <p className="font-mono text-xs text-fg-muted">
                Loading {capitalize(pokemon.name)}…
              </p>
            </div>
          ) : (
            <div className="p-5 sm:p-6">
              {/* Sprite + types */}
              <div className="flex flex-col items-center">
                <div
                  className="flex h-40 w-40 items-center justify-center rounded-full border border-chrome-strong"
                  style={{
                    background: accent
                      ? `radial-gradient(circle at 50% 35%, ${accent}40, #1e1e1e 72%)`
                      : undefined,
                  }}
                >
                  {details.sprite ? (
                    <img
                      src={details.sprite}
                      alt={details.name}
                      width={144}
                      height={144}
                      className="h-32 w-32 object-contain drop-shadow"
                    />
                  ) : (
                    <PokeballIcon className="h-12 w-12 text-fg-dim" />
                  )}
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
                  {details.types.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-black"
                      style={{ backgroundColor: typeColor(t) }}
                    >
                      {capitalize(t)}
                    </span>
                  ))}
                </div>
              </div>

              {/* About / physical stats */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-md border border-chrome bg-editor p-3 text-center">
                  <div className="text-[10px] uppercase tracking-widest text-fg-muted">
                    Height
                  </div>
                  <div className="mt-1 font-mono text-sm text-fg">
                    {heightInMeters(details.height)}
                  </div>
                </div>
                <div className="rounded-md border border-chrome bg-editor p-3 text-center">
                  <div className="text-[10px] uppercase tracking-widest text-fg-muted">
                    Weight
                  </div>
                  <div className="mt-1 font-mono text-sm text-fg">
                    {weightInKg(details.weight)}
                  </div>
                </div>
                <div className="rounded-md border border-chrome bg-editor p-3 text-center">
                  <div className="text-[10px] uppercase tracking-widest text-fg-muted">
                    Base EXP
                  </div>
                  <div className="mt-1 font-mono text-sm text-fg">
                    {details.baseExperience ?? "—"}
                  </div>
                </div>
              </div>

              {/* Abilities */}
              <div className="mt-6">
                <h3 className="text-[11px] font-medium uppercase tracking-widest text-fg-muted">
                  Abilities
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {details.abilities.map((a) => (
                    <span
                      key={a.name}
                      className="inline-flex items-center gap-1.5 rounded-sm bg-selection px-2 py-0.5 font-mono text-[11px] text-sky-200"
                    >
                      {capitalize(a.name.replaceAll("-", " "))}
                      {a.isHidden ? (
                        <span className="rounded-sm bg-black/30 px-1 text-[9px] text-fg-muted">
                          hidden
                        </span>
                      ) : null}
                    </span>
                  ))}
                </div>
              </div>

              {/* Base stats */}
              <div className="mt-6">
                <h3 className="text-[11px] font-medium uppercase tracking-widest text-fg-muted">
                  Base Stats
                </h3>
                <div className="mt-2 space-y-2">
                  {details.stats.map((s) => {
                    const label = STAT_LABELS[s.name] || s.name;
                    const pct = Math.min(100, (s.base / 200) * 100);
                    const color = statColor(s.base);
                    return (
                      <div key={s.name} className="flex items-center gap-3">
                        <span className="w-12 shrink-0 font-mono text-[10px] text-fg-dim">
                          {label}
                        </span>
                        <span className="w-8 shrink-0 text-right font-mono text-[11px] text-fg">
                          {s.base}
                        </span>
                        <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-hover">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${pct}%`,
                              backgroundColor: color,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <a
                href={`https://pokeapi.co/api/v2/pokemon/${details.id}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-1.5 font-mono text-[10px] text-fg-dim transition-colors hover:text-sky-300"
              >
                <ExternalIcon className="h-3 w-3" />
                Data via PokeAPI
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
