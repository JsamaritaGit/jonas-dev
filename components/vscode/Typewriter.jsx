"use client";

import { useEffect, useState } from "react";

// Types out `text` one character at a time with a blinking cursor.
export default function Typewriter({ text, speed = 40, className = "" }) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (done) return;
    const id = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [count, done, speed]);

  return (
    <p className={`text-sm leading-6 text-fg-muted ${className}`}>
      {text.slice(0, count)}
      <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-[3px] animate-pulse bg-sky-300" />
    </p>
  );
}
