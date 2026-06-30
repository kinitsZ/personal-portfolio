"use client";

import Image from "next/image";
import { ArrowRight, Briefcase, Download, GraduationCap, Mail, Phone } from "lucide-react";
import AwardsTimeline from "@/components/AwardsTimeline";
import ProjectCard from "@/components/ProjectCard";
import StackBar from "@/components/StackBar";
import RevealObserver from "@/components/RevealObserver";

/* ── Reusable sub-components ────────────────────────────── */

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--accent)",
          letterSpacing: "0.18em",
          fontSize: "11px",
          fontWeight: 400,
          flexShrink: 0,
        }}
      >
        {num}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          color: "var(--ink)",
          lineHeight: 0.95,
          fontSize: "clamp(30px, 4.4vw, 48px)",
          flexShrink: 0,
        }}
      >
        {title}
      </h2>
      <div
        style={{ height: "1px", background: "var(--line)", flex: 1 }}
      />
    </div>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  filled,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  filled?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      data-reveal
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "16px 18px",
        borderRadius: "14px",
        background: filled ? "var(--ink)" : "var(--bg2)",
        border: `1px solid ${filled ? "var(--ink)" : "var(--line)"}`,
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "var(--shadow)";
        if (!filled) e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        if (!filled) e.currentTarget.style.borderColor = "var(--line)";
      }}
    >
      <div
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "10px",
          background: filled ? "rgba(255,255,255,0.12)" : "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: filled ? "white" : "var(--accent)",
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.14em",
            color: filled ? "rgba(255,255,255,0.5)" : "var(--faint)",
            textTransform: "uppercase",
            marginBottom: "2px",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: filled ? "white" : "var(--ink)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {value}
        </p>
      </div>
    </a>
  );
}

const CERT_LIST = [
  "Data Visualization with Python",
  "Introduction to Software Engineering",
  "Introduction to HTML, CSS & JavaScript",
  "Java Programming for Beginners",
  "Excel Associate",
];

const STACK = [
  "Next.js",
  "React",
  "Vue.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "HTML5",
  "CSS3",
  "Python",
  "PostgreSQL",
  "Supabase",
  "Vercel",
  "Git & GitHub",
  "Figma",
];

/* ── Page ────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <RevealObserver />

      {/* Page wrapper — left pad reserves the side rail on desktop */}
      <div
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          padding: "0 28px 0 28px",
        }}
        className="md:pl-28"
      >
        {/* ── 1. HERO ─────────────────────────────────────── */}
        <section
          id="top"
          data-sec="top"
          style={{ scrollMarginTop: "48px", paddingTop: "120px", paddingBottom: "64px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-12 items-center">
            {/* Left */}
            <div data-reveal className="order-2 md:order-1">
              {/* Kicker */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10.5px",
                  letterSpacing: "0.22em",
                  color: "var(--muted-text)",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                  }}
                />
                Full-Stack Developer · Data Science
              </p>

              {/* Hero name */}
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  lineHeight: 0.86,
                  letterSpacing: "-0.01em",
                  fontSize: "clamp(58px, 9.5vw, 128px)",
                  marginBottom: "28px",
                }}
              >
                <span style={{ color: "var(--ink)", display: "block" }}>Zymer</span>
                <span style={{ color: "var(--faint)", display: "block" }}>Fernando</span>
              </h1>

              {/* Lede */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(17px, 1.9vw, 21px)",
                  lineHeight: 1.55,
                  color: "var(--muted-text)",
                  maxWidth: "30ch",
                  marginBottom: "28px",
                }}
              >
                I build{" "}
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  full-stack web applications
                </strong>{" "}
                where speed, security, and clean architecture are the foundation —
                not the afterthought.
              </p>

              {/* Meta row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px",
                }}
              >
                {/* Available badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ position: "relative", display: "inline-flex", width: "8px", height: "8px" }}>
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: "oklch(0.7 0.17 150)",
                        animation: "ping-avail 1.4s cubic-bezier(0,0,0.2,1) infinite",
                      }}
                    />
                    <span
                      style={{
                        position: "relative",
                        display: "inline-flex",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "oklch(0.62 0.18 150)",
                      }}
                    />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10.5px",
                      letterSpacing: "0.1em",
                      color: "oklch(0.62 0.18 150)",
                      textTransform: "uppercase",
                    }}
                  >
                    Available for work
                  </span>
                </div>

                {/* Socials */}
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <SocialIcon href="https://www.linkedin.com/in/zymer-fernando-24baa5259/" label="LinkedIn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="https://github.com/kinitsZ" label="GitHub">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="https://www.facebook.com/zymer.fernando.2024" label="Facebook">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </SocialIcon>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "11px 22px",
                    borderRadius: "999px",
                    background: "var(--ink)",
                    color: "var(--bg)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.85";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Get in touch <ArrowRight size={14} />
                </a>
                <a
                  href="/FERNANDOZYMER_RESUME.pdf"
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "11px 22px",
                    borderRadius: "999px",
                    background: "transparent",
                    color: "var(--ink)",
                    border: "1px solid var(--line)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
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
                  Download CV <Download size={14} />
                </a>
              </div>

              {/* Scroll cue */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "var(--faint)",
                    textTransform: "uppercase",
                  }}
                >
                  Scroll to explore
                </span>
                <div
                  style={{
                    width: "38px",
                    height: "2px",
                    background: "var(--line)",
                    overflow: "hidden",
                    borderRadius: "2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "var(--accent)",
                      borderRadius: "2px",
                      animation: "scroll-cue-bar 2.4s ease-in-out infinite",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right — hero portrait */}
            <div
              data-reveal
              className="order-1 md:order-2 max-w-[300px] mx-auto md:max-w-none"
            >
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow)",
                  position: "relative",
                }}
              >
                <Image
                  src="/assets/hero.jpg"
                  alt="Zymer Fernando"
                  width={480}
                  height={656}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    objectPosition: "50% 22%",
                    filter: "saturate(0.96)",
                    display: "block",
                  }}
                />
                {/* Scrim */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)",
                  }}
                />
                {/* Tag top-left */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "rgba(0,0,0,0.35)",
                    backdropFilter: "blur(6px)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                  }}
                >
                  PH · 2026
                </div>
                {/* Caption */}
                <p
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.26em",
                    color: "rgba(255,255,255,0.75)",
                    textTransform: "uppercase",
                  }}
                >
                  Zymer Fernando
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. ABOUT ─────────────────────────────────────── */}
        <section
          id="about"
          data-sec="about"
          style={{ scrollMarginTop: "48px", paddingTop: "64px", paddingBottom: "64px" }}
        >
          <SectionHeader num="01" title="About" />
          <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-11">
            {/* Left */}
            <div data-reveal>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(19px, 2.3vw, 26px)",
                  lineHeight: 1.5,
                  color: "var(--ink)",
                  marginBottom: "36px",
                }}
              >
                I design and build full-stack systems that stay{" "}
                <em
                  style={{
                    color: "var(--accent)",
                    fontStyle: "italic",
                    fontSize: "1.12em",
                  }}
                >
                  fast, secure, and calm
                </em>{" "}
                under pressure. Lately I&apos;ve been drawn to machine learning and data
                science — fascinated by how good data turns an ordinary product into an
                intelligent one.{" "}
                <span style={{ color: "var(--faint)" }}>
                  Curious by default, I build things that work beautifully and actually
                  matter.
                </span>
              </p>

              {/* Fact row */}
              <div style={{ display: "flex", gap: "34px", flexWrap: "wrap" }}>
                {[
                  { num: "3+", label: "Years Building" },
                  { num: "10+", label: "Projects & Comps" },
                  { num: "5",  label: "Certifications" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "30px",
                        color: "var(--ink)",
                        lineHeight: 1,
                        marginBottom: "4px",
                      }}
                    >
                      {num}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10.5px",
                        letterSpacing: "0.14em",
                        color: "var(--faint)",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — portrait */}
            <div data-reveal className="w-full max-w-[300px] mx-auto md:max-w-none">
              <div
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <Image
                  src="/assets/portrait.jpg"
                  alt="Zymer Fernando seated"
                  width={480}
                  height={560}
                  sizes="(max-width: 768px) 300px, 360px"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    objectPosition: "50% 16%",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. TECH STACK ────────────────────────────────── */}
        <section
          id="stack"
          data-sec="stack"
          style={{ scrollMarginTop: "48px", paddingTop: "64px", paddingBottom: "64px" }}
        >
          <SectionHeader num="02" title="Tech Stack" />
          <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {STACK.map((s) => (
              <StackBar key={s} stack={s} />
            ))}
          </div>
        </section>

        {/* ── 4. WORK ──────────────────────────────────────── */}
        <section
          id="work"
          data-sec="work"
          style={{ scrollMarginTop: "48px", paddingTop: "64px", paddingBottom: "64px" }}
        >
          <SectionHeader num="03" title="Work" />
          <div
            data-reveal
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "22px 0",
              borderTop: "1px solid var(--line)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "11px",
                  background: "var(--bg2)",
                  border: "1px solid var(--line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                <Briefcase size={18} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "3px",
                  }}
                >
                  Junior Web Developer Intern
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--muted-text)",
                  }}
                >
                  Circuit Solutions Inc.
                </p>
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11.5px",
                  color: "var(--faint)",
                  marginBottom: "6px",
                }}
              >
                Mar 2026 — Jun 2026
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "6px" }}>
                <span style={{ position: "relative", display: "inline-flex", width: "7px", height: "7px" }}>
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: "oklch(0.7 0.17 150)",
                      animation: "ping-avail 1.4s cubic-bezier(0,0,0.2,1) infinite",
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      display: "inline-flex",
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "oklch(0.62 0.18 150)",
                    }}
                  />
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "oklch(0.55 0.16 150)",
                  }}
                >
                  Current
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PROJECTS ──────────────────────────────────── */}
        <section
          id="projects"
          data-sec="projects"
          style={{ scrollMarginTop: "48px", paddingTop: "64px", paddingBottom: "64px" }}
        >
          <SectionHeader num="04" title="Projects" />
          <div data-reveal>
            <ProjectCard
              title="WikaWonders Kids"
              description="An interactive learning platform helping Filipino children pick up language through playful games and activities — built to be engaging, accessible, and genuinely fun."
              imageUrl="/assets/cover_banner.svg"
              siteUrl="https://wikawonderskids.com"
              githubUrl="https://github.com/kinitsZ/wikawonders-kids-2025"
              tag="Educational Platform"
            />
          </div>
        </section>

        {/* ── 6. EDUCATION ─────────────────────────────────── */}
        <section
          id="education"
          data-sec="education"
          style={{ scrollMarginTop: "48px", paddingTop: "64px", paddingBottom: "64px" }}
        >
          <SectionHeader num="05" title="Education" />
          <div
            data-reveal
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "22px 0",
              borderTop: "1px solid var(--line)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "11px",
                  background: "var(--bg2)",
                  border: "1px solid var(--line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                <GraduationCap size={18} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "3px",
                  }}
                >
                  BS Computer Science — Data Science
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--muted-text)",
                  }}
                >
                  Lyceum of the Philippines University — Batangas
                </p>
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11.5px",
                  color: "var(--faint)",
                  marginBottom: "4px",
                }}
              >
                2022 — Aug 2026
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "var(--faint)",
                }}
              >
                Expected graduation
              </p>
            </div>
          </div>
        </section>

        {/* ── 7. AWARDS ────────────────────────────────────── */}
        <section
          id="awards"
          data-sec="awards"
          style={{ scrollMarginTop: "48px", paddingTop: "64px", paddingBottom: "64px" }}
        >
          <SectionHeader num="06" title="Awards" />
          <div data-reveal>
            <AwardsTimeline />
          </div>
        </section>

        {/* ── 8. CERTIFICATIONS ────────────────────────────── */}
        <section
          id="certs"
          data-sec="certs"
          style={{ scrollMarginTop: "48px", paddingTop: "64px", paddingBottom: "64px" }}
        >
          <SectionHeader num="07" title="Certifications" />
          <div>
            {CERT_LIST.map((cert, i) => (
              <CertRow key={cert} index={i + 1} title={cert} />
            ))}
          </div>
        </section>
      </div>

      {/* ── 9. PULL-QUOTE BAND ──────────────────────────────── */}
      <div
        data-reveal
        style={{
          position: "relative",
          left: "50%",
          width: "100vw",
          marginLeft: "-50vw",
          background: "var(--band-bg)",
          padding: "128px 28px",
          marginTop: "0",
          marginBottom: "0",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* Faded quote mark */}
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: "-40px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-serif)",
              fontSize: "120px",
              lineHeight: 1,
              color: "var(--accent)",
              opacity: 0.22,
              userSelect: "none",
            }}
          >
            &ldquo;
          </span>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.26em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            The Goal
          </p>

          <blockquote
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(30px, 5.4vw, 62px)",
              lineHeight: 1.1,
              maxWidth: "18ch",
              margin: "0 auto 28px",
              color: "var(--ink)",
            }}
          >
            &ldquo;I want to build the systems a{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              million people
            </em>{" "}
            rely on — without ever thinking about them.&rdquo;
          </blockquote>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10.5px",
              letterSpacing: "0.14em",
              color: "var(--faint)",
              textTransform: "uppercase",
            }}
          >
            — Zymer Fernando, the principle I code by
          </p>
        </div>
      </div>

      {/* ── 10. CONTACT ─────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          padding: "0 28px",
        }}
        className="md:pl-28"
      >
        <section
          id="contact"
          data-sec="contact"
          style={{
            scrollMarginTop: "48px",
            paddingTop: "64px",
            paddingBottom: "64px",
          }}
        >
          <SectionHeader num="08" title="Contact" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
            }}
            className="grid-cols-1! md:grid-cols-2!"
          >
            <ContactCard
              href="mailto:fernandozymer@gmail.com"
              icon={<Mail size={16} />}
              label="Email"
              value="fernandozymer@gmail.com"
            />
            <ContactCard
              href="tel:+639693695916"
              icon={<Phone size={16} />}
              label="Phone"
              value="+63 969 369 5916"
            />
            <ContactCard
              href="https://www.linkedin.com/in/zymer-fernando-24baa5259/"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
              label="LinkedIn"
              value="zymer-fernando"
            />
            <ContactCard
              href="https://github.com/kinitsZ"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              }
              label="GitHub"
              value="kinitsZ"
            />
            <ContactCard
              href="https://www.facebook.com/zymer.fernando.2024"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              }
              label="Facebook"
              value="zymer.fernando.2024"
            />
            <ContactCard
              href="/FERNANDOZYMER_RESUME.pdf"
              icon={<Download size={16} />}
              label="Resume"
              value="Download CV"
              filled
            />
          </div>
        </section>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid var(--line)",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            padding: "0 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
          className="md:pl-28"
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.28em",
              color: "var(--muted-text)",
              textTransform: "uppercase",
            }}
          >
            Zymer Fernando
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--faint)",
              letterSpacing: "0.08em",
            }}
          >
            © {new Date().getFullYear()} · Designed & built with intent · Batangas, Philippines
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "4px" }}>
            <SocialIcon href="https://www.linkedin.com/in/zymer-fernando-24baa5259/" label="LinkedIn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://github.com/kinitsZ" label="GitHub">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/zymer.fernando.2024" label="Facebook">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ── Small helpers ──────────────────────────────────────── */

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        color: "var(--faint)",
        transition: "color 0.2s ease, transform 0.2s ease",
        display: "inline-flex",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--accent)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--faint)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
  );
}

function CertRow({ index, title }: { index: number; title: string }) {
  return (
    <div
      data-reveal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 0",
        borderTop: "1px solid var(--line)",
        transition: "padding-left 0.3s ease",
        gap: "16px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "8px")}
      onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0px")}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11.5px",
            color: "var(--accent)",
            letterSpacing: "0.12em",
            flexShrink: 0,
          }}
        >
          {String(index).padStart(2, "0")}
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "15.5px",
            fontWeight: 500,
            color: "var(--ink)",
          }}
        >
          {title}
        </span>
      </div>
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
        Certified
      </span>
    </div>
  );
}
