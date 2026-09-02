"use client";

import { useEffect, useRef } from "react";

/**
 * Reveals text word-by-word on scroll. `words` is an array of lines,
 * each line an array of words (space-separated words within a line).
 */
export default function WordReveal({ words, className = "", lineClass = [] }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const wordEls = node.querySelectorAll(".word-reveal-word");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wordEls.forEach((w) => w.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.querySelectorAll(".word-reveal-block").forEach((block) => {
              block.querySelectorAll(".word-reveal-word").forEach((w, i) => {
                window.setTimeout(() => w.classList.add("revealed"), i * 120);
              });
            });
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((line, li) => (
        <span key={li} className={`block word-reveal-block ${lineClass[li] || ""}`}>
          {line.map((word, wi) => (
            <span key={wi} className="word-reveal-mask">
              <span className="word-reveal-word">{word}</span>
              {wi < line.length - 1 && <span className="word-reveal-space"> </span>}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
