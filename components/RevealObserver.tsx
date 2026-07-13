"use client";

import { useEffect } from "react";

const STAGGER_MS = 80;
const MAX_STAGGER_MS = 480;

export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    // Arm the hidden state only after mount, so SSR / no-JS content stays visible.
    elements.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        // Elements entering together cascade in document order rather than
        // all snapping in at once.
        const shown = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        shown.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          const explicit = el.dataset.revealDelay;
          const delay = explicit
            ? Number(explicit)
            : Math.min(i * STAGGER_MS, MAX_STAGGER_MS);

          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
