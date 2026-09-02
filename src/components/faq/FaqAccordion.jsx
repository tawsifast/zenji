"use client";

import { useState } from "react";
import { FAQ_SECTIONS } from "@/data/faqs";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

export default function FaqAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <>
      {FAQ_SECTIONS.map((section, si) => (
        <section key={section.title}>
          <h2
            style={ANTON}
            className="mb-6 mt-16 border-l-[3px] border-primary pl-4 text-xl uppercase tracking-widest text-white"
          >
            {section.title}
          </h2>
          {section.items.map((item, ii) => {
            const key = `${si}-${ii}`;
            const isOpen = open === key;
            const panelId = `faq-panel-${section.title.replace(/[^a-z0-9]/gi, "-")}-${item.q
              .replace(/[^a-z0-9]/gi, "-")
              .replace(/-+/g, "-")}`;
            return (
              <div key={key} className="border-b border-white/10">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : key)}
                    style={IBM}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm tracking-wide text-white transition-colors hover:text-primary"
                  >
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      style={ANTON}
                      className={`shrink-0 text-xl leading-none text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p
                    style={IBM}
                    className="pb-4 pt-2 text-sm leading-relaxed text-gray-400"
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      ))}
    </>
  );
}