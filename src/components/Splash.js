"use client";

import { useEffect, useState } from "react";

export default function Splash() {
  const [phase, setPhase] = useState("playing");

  useEffect(() => {
    let wipeTimer;
    let cleanupTimer;

    const releaseWipes = () => {
      setPhase("wipe");
      const wipes = document.querySelectorAll(".zenji-wipe");
      wipes.forEach((w) => {
        if (w.getAttribute("data-side") === "top") {
          w.style.transform = "translateY(-100%)";
        } else {
          w.style.transform = "translateY(100%)";
        }
      });
    };

    const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // If a listener returned true (kept a reference) we'd removeEvent here.
    const splashFitId = null;

    cleanupTimer = window.setTimeout(() => {
      // remove the overlay from the DOM entirely after the fade completes
      setPhase("done");
    }, 3100);

    wipeTimer = motionReduced
      ? window.setTimeout(releaseWipes, 400)
      : window.setTimeout(releaseWipes, 2600);

    return () => {
      window.clearTimeout(wipeTimer);
      window.clearTimeout(cleanupTimer);
      if (splashFitId) {
        // placeholder for any added listeners
      }
    };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      {/* Two black wipe panels that part to reveal the page */}
      <div
        className="zenji-wipe"
        data-side="top"
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          width: "100vw",
          height: "50vh",
          background: "#000000",
          zIndex: 99998,
          top: 0,
          transform: "translateY(0)",
        }}
      />
      <div
        className="zenji-wipe"
        data-side="bottom"
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          width: "100vw",
          height: "50vh",
          background: "#000000",
          zIndex: 99998,
          bottom: 0,
          transform: "translateY(0)",
        }}
      />

      {/* Intro overlay */}
      <div
        className="zenji-splash"
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          pointerEvents: "none",
        }}
      >
        <div className="zstage">
          <div className="zbg" />
          <div className="zhalf" />
          <div className="zlines" />
          <div className="zkanji">力</div>
          <div className="zscan" />
          <div className="zwrap">
            <span
              className="zword"
              data-text="ZENJI"
              style={{ display: "inline-block" }}
            >
              ZENJI
            </span>
          </div>
          <div className="zflash" />
          <span className="zhud" style={{ left: 22 }}>
            力 — Awakening
          </span>
          <span className="zhud" style={{ right: 22 }}>
            System // ZENJI
          </span>
        </div>
      </div>
    </>
  );
}
