"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import Image from "next/image";

const SECTIONS = [
  { id: "top",       label: "Home" },
  { id: "about",     label: "About" },
  { id: "stack",     label: "Stack" },
  { id: "work",      label: "Work" },
  { id: "projects",  label: "Projects" },
  { id: "education", label: "Education" },
  { id: "awards",    label: "Awards" },
  { id: "certs",     label: "Certifications" },
  { id: "contact",   label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [active, setActive] = useState("top");
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-sec") ?? "top");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    const targets = document.querySelectorAll("[data-sec]");
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  // The rail is an index of the home page's sections, so it has nothing to
  // point at on a standalone route — those pages carry their own back link.
  if (pathname !== "/") return null;

  return (
    <>
    <nav
      aria-label="Page navigation"
      className={open ? "rail rail-open" : "rail"}
      style={{
        position: "fixed",
        left: "22px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        background: "var(--rail-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid var(--line)",
        boxShadow: "var(--shadow)",
        borderRadius: "34px",
        padding: "12px 9px",
      }}
    >
      {/* Avatar */}
      <a
        href="#top"
        className="rail-avatar"
        style={{
          display: "block",
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Image
          src="/assets/avatar.jpg"
          alt="Zymer Fernando"
          width={34}
          height={34}
          style={{
            objectFit: "cover",
            objectPosition: "50% 18%",
            width: "100%",
            height: "100%",
          }}
        />
      </a>

      {/* Divider */}
      <div
        className="rail-div"
        style={{
          width: "1px",
          height: "18px",
          background: "var(--line)",
          margin: "2px 0",
        }}
      />

      {/* Section dots */}
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            aria-current={isActive ? "true" : undefined}
            onClick={() => setOpen(false)}
            className="group/dot rail-hit"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "24px",
              height: "24px",
              flexShrink: 0,
            }}
          >
            {/* Dot */}
            <span
              className="group-hover/dot:bg-accent!"
              style={{
                display: "block",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: isActive ? "var(--accent)" : "var(--faint)",
                transform: isActive ? "scale(1.55)" : "scale(1)",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
            />

            {/* Hover label */}
            <span
              className="rail-label group-hover/dot:opacity-100! group-hover/dot:translate-x-0!"
              style={{
                position: "absolute",
                left: "calc(100% + 10px)",
                whiteSpace: "nowrap",
                background: "var(--bg2)",
                border: "1px solid var(--line)",
                borderRadius: "7px",
                boxShadow: "var(--shadow)",
                padding: "3px 9px",
                fontSize: "11px",
                color: "var(--ink)",
                fontFamily: "var(--font-sans)",
                pointerEvents: "none",
                opacity: 0,
                transform: "translateX(-5px)",
                transition: "opacity 0.18s ease, transform 0.18s ease",
              }}
            >
              {label}
            </span>
          </a>
        );
      })}

      {/* Divider */}
      <div
        className="rail-div"
        style={{
          width: "1px",
          height: "18px",
          background: "var(--line)",
          margin: "2px 0",
        }}
      />

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="rail-toggle"
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: "var(--bg2)",
          border: "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "var(--faint)",
          transition: "transform 0.25s ease, color 0.2s ease",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotate(15deg)";
          e.currentTarget.style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotate(0deg)";
          e.currentTarget.style.color = "var(--faint)";
        }}
      >
        {mounted && resolvedTheme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
      </button>
    </nav>

    {/* Mobile open/close button. Hidden on desktop via CSS. */}
    <button
      className="rail-fab"
      onClick={() => setOpen((v) => !v)}
      aria-label={open ? "Close navigation" : "Open navigation"}
      aria-expanded={open}
    >
      {open ? <X size={18} /> : <Menu size={18} />}
    </button>
    </>
  );
}
