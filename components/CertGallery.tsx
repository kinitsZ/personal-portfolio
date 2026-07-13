"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Expand } from "lucide-react";

type Cert = {
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
};

const certs: Cert[] = [
  {
    name: "Data Visualization with Python",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Data Visualization with Python.png",
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Introduction to Software Engineering.png",
  },
  {
    name: "Introduction to HTML, CSS & JavaScript",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Introduction to HTML, CSS, & JavaScript.png",
  },
  {
    name: "Java Programming for Beginners",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Java Programmers for Beginners.png",
  },
  {
    name: "Excel Associate — Microsoft 365 Apps",
    issuer: "Microsoft Office Specialist",
    date: "Dec 2025",
    imageUrl: "/certification/Excel Associate.png",
  },
  {
    name: "Generative AI: Introduction and Applications",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Generative AI: Introduction and Applications.png",
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Generative AI: Prompt Engineering Basics.png",
  },
  {
    name: "Software Engineering: Modeling Software Systems using UML",
    issuer: "HKUST · Coursera",
    date: "May 2025",
    imageUrl:
      "/certification/Software Engineering: Modeling Software Systems using UML.png",
  },
];

const PREVIEW_COUNT = 5;

export default function CertGallery() {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    if (lightbox !== null) setLightbox(null);
    else setOpen(false);
  }, [lightbox]);

  // Esc to close, and lock body scroll while either view is up
  useEffect(() => {
    if (!open && lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, lightbox, close]);

  return (
    <>
      {/* Rows — a preview; the rest live in the dialog */}
      <div>
        {certs.slice(0, PREVIEW_COUNT).map((cert, i) => (
          <button
            key={cert.name}
            onClick={() => setLightbox(i)}
            data-reveal
            data-reveal-delay={i * 70}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              width: "100%",
              textAlign: "left",
              padding: "14px 0",
              borderTop: "1px solid var(--line)",
              background: "none",
              cursor: "pointer",
              transition: "padding-left 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "8px")}
            onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0px")}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11.5px",
                  color: "var(--accent)",
                  letterSpacing: "0.12em",
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ minWidth: 0 }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-sans)",
                    fontSize: "15.5px",
                    fontWeight: 500,
                    color: "var(--ink)",
                  }}
                >
                  {cert.name}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-sans)",
                    fontSize: "12.5px",
                    color: "var(--muted-text)",
                    marginTop: "2px",
                  }}
                >
                  {cert.issuer} · {cert.date}
                </span>
              </span>
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                color: "var(--faint)",
                textTransform: "uppercase",
                flexShrink: 0,
              }}
            >
              View
            </span>
          </button>
        ))}
      </div>

      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        style={{
          marginTop: "28px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "11px 22px",
          borderRadius: "999px",
          border: "1px solid var(--line)",
          background: "transparent",
          color: "var(--ink)",
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",
          transition: "border-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.color = "var(--accent)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--line)";
          e.currentTarget.style.color = "var(--ink)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        View all {certs.length} certificates
        <span style={{ color: "var(--faint)" }}>
          (+{certs.length - PREVIEW_COUNT} more)
        </span>
        <Expand size={14} />
      </button>

      {/* Dialog — portaled to <body> so it centers on the viewport. An ancestor
          carries a transform (scroll-reveal), which would otherwise become the
          containing block for position:fixed. */}
      {open && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="All certifications"
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "oklch(0 0 0 / 0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "960px",
              maxHeight: "86vh",
              overflowY: "auto",
              background: "var(--bg)",
              border: "1px solid var(--line)",
              borderRadius: "18px",
              boxShadow: "var(--shadow)",
            }}
          >
            {/* Header */}
            <div
              style={{
                position: "sticky",
                top: 0,
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "22px 26px",
                background: "var(--bg)",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  {certs.length} Credentials
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "28px",
                    lineHeight: 1,
                    color: "var(--ink)",
                  }}
                >
                  Certifications
                </h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  border: "1px solid var(--line)",
                  background: "var(--bg2)",
                  color: "var(--muted-text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted-text)";
                  e.currentTarget.style.borderColor = "var(--line)";
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              style={{ padding: "26px" }}
            >
              {certs.map((cert, i) => (
                <button
                  key={cert.name}
                  onClick={() => setLightbox(i)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    textAlign: "left",
                    background: "none",
                    cursor: "zoom-in",
                  }}
                  className="group/cert"
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid var(--line)",
                      background: "var(--bg2)",
                      transition: "border-color 0.2s ease",
                    }}
                    className="group-hover/cert:border-accent!"
                  >
                    <Image
                      src={cert.imageUrl}
                      alt={cert.name}
                      width={600}
                      height={450}
                      sizes="(max-width: 640px) 90vw, 440px"
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13.5px",
                        fontWeight: 600,
                        color: "var(--ink)",
                        lineHeight: 1.35,
                      }}
                    >
                      {cert.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10.5px",
                        color: "var(--faint)",
                        marginTop: "4px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>,
        document.body
      )}

      {/* Lightbox — its own portal, so a row can open a single certificate
          without the full gallery rendering behind it. */}
      {lightbox !== null && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={certs[lightbox].name}
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 110,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px",
            background: "oklch(0 0 0 / 0.8)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", width: "100%", maxWidth: "1100px" }}
          >
            <Image
              src={certs[lightbox].imageUrl}
              alt={certs[lightbox].name}
              width={1400}
              height={1050}
              sizes="90vw"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
                boxShadow: "var(--shadow)",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.8)",
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              {certs[lightbox].name}
            </p>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close preview"
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.92)",
                color: "#111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
