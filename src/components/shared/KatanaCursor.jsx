"use client";

import { useEffect, useRef } from "react";

let lastMouseX = -100;
let lastMouseY = -100;

export default function KatanaCursor({
  size = 1,
  rotation = -45,
  lerpFactor = 0.15,
  offsetX = 0,
  offsetY = 0,
}) {
  const ref = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);
  const hasPosition = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    if (mq.matches) return;

    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const factor = reducedMotion ? 1 : lerpFactor;

    mouse.current.x = lastMouseX;
    mouse.current.y = lastMouseY;
    pos.current.x = lastMouseX;
    pos.current.y = lastMouseY;
    if (lastMouseX !== -100) hasPosition.current = true;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      if (!hasPosition.current) {
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
        hasPosition.current = true;
      }
    };

    const tick = () => {
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      pos.current.x += dx * factor;
      pos.current.y += dy * factor;
      el.style.transform = `translate3d(${pos.current.x + offsetX}px, ${pos.current.y + offsetY}px, 0)`;
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [lerpFactor, offsetX, offsetY]);

  return (
   
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        transform: "translate3d(-100px, -100px, 0)",
      }}
      aria-hidden="true"
    >
   
      <div
        style={{
          transform: `scale(${size}) rotate(${rotation}deg)`,
          transformOrigin: "0 0",
        }}
      >
        <svg
          width={132}
          height={20}
          viewBox="0 0 66 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", overflow: "visible" }}
        >
          <defs>
            <linearGradient id="katanaBladeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8e8e8" />
              <stop offset="35%" stopColor="#9a9a9a" />
              <stop offset="55%" stopColor="#3a3a3a" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
            <linearGradient id="katanaHandleGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2b2b2b" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
          </defs>

        
          <path
            d="M 0 0
               C 9 -2.1, 24 -3, 39 -1.5
               L 39.6 1.5
               C 24 0.3, 9 1.2, 0 0
               Z"
            fill="url(#katanaBladeGrad)"
          />
          <path
            d="M 0.6 -0.3 C 9 -1.8, 24 -2.5, 38.7 -1.2"
            stroke="#f5f5f5"
            strokeWidth="0.18"
            strokeLinecap="round"
            fill="none"
            opacity="0.65"
          />

       
          <rect x="39.3" y="-1.9" width="1.2" height="3.8" fill="#7a0100" />

          {/* Tsuba (গার্ড) */}
          <rect
            x="40.5"
            y="-2.9"
            width="2.4"
            height="5.8"
            rx="0.5"
            fill="#141414"
            stroke="#000"
            strokeWidth="0.15"
          />
          <circle cx="41.7" cy="0" r="0.75" fill="#2b2b2b" />

   
          <rect x="43" y="-2.1" width="16.8" height="4.2" rx="1.2" fill="url(#katanaHandleGrad)" />
          <g stroke="#3d3d3d" strokeWidth="0.22">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <path key={`f-${i}`} d={`M ${43.9 + i * 1.8} -2.1 L ${45.7 + i * 1.8} 2.1`} />
            ))}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <path key={`b-${i}`} d={`M ${45.7 + i * 1.8} -2.1 L ${43.9 + i * 1.8} 2.1`} />
            ))}
          </g>

          <rect x="59.8" y="-2.4" width="2.6" height="4.8" rx="0.9" fill="#0d0d0d" />
        </svg>
      </div>
    </div>
  );
}