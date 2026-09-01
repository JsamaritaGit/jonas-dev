"use client";

import { useState } from "react";
import { CloseIcon } from "./icons";

// Click a small image to open an enlarged lightbox overlay.
export default function ZoomImage({ src, alt, className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        title="Click to enlarge"
        aria-label={`Enlarge ${alt}`}
        className="shrink-0 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        <img
          src={src}
          alt={alt}
          className={`cursor-pointer transition-transform duration-200 hover:scale-105 ${className}`}
        />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      ) : null}
    </>
  );
}
