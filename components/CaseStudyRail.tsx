"use client";

import { useEffect, useState } from "react";

export type RailSection = {
  /** The `id` on the matching <section>. */
  id: string;
  num: string;
  label: string;
};

/**
 * A contents rail for a case study, pinned to the right edge so it never meets
 * the nav rail on the left. CSS hides it below 1200px, where the widest plate
 * would reach it.
 *
 * Tracks the section nearest the top of the viewport rather than whichever
 * one is merely intersecting — with sections this tall, several are on screen
 * at once and "last one to cross" reads as wrong.
 */
export default function CaseStudyRail({
  sections,
}: {
  sections: RailSection[];
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const nodes = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (nodes.length === 0) return;

    const pick = () => {
      // The section whose top has most recently passed the reading line.
      const line = window.innerHeight * 0.35;
      let current = nodes[0];

      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= line) current = node;
      }

      // At the very bottom the last section may never reach the line.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2;

      setActive(atBottom ? nodes[nodes.length - 1].id : current.id);
    };

    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, [sections]);

  return (
    <nav className="cs-rail" aria-label="Sections">
      {sections.map(({ id, num, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="cs-rail-hit"
          aria-current={active === id ? "true" : undefined}
        >
          <span className="cs-rail-label" aria-hidden="true">
            {label}
          </span>
          <span className="cs-rail-num">{num}</span>
          <span className="cs-rail-tick" aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  );
}
