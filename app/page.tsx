"use client";

import Image from "next/image";
import { ArrowRight, Briefcase, Download, GraduationCap, Mail, Phone } from "lucide-react";
import AwardsTimeline from "@/components/AwardsTimeline";
import ProjectCard from "@/components/ProjectCard";
import StackBar from "@/components/StackBar";
import RevealObserver from "@/components/RevealObserver";
import SectionHeader from "@/components/SectionHeader";
import CertGallery from "@/components/CertGallery";

/* ── Reusable sub-components ────────────────────────────── */

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
        background: filled ? "var(--cta-bg)" : "var(--bg2)",
        border: `1px solid ${filled ? "var(--cta-bg)" : "var(--line)"}`,
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
          background: filled ? "var(--cta-tile)" : "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: filled ? "var(--cta-fg)" : "var(--accent)",
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
            color: filled ? "var(--cta-fg-dim)" : "var(--faint)",
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
            color: filled ? "var(--cta-fg)" : "var(--ink)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {value}
        </p>
      </div>
    </a>
  );
}

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

      {/* Page wrapper — left pad reserves the side rail (compact on mobile) */}
      <div className="mx-auto max-w-[920px] pl-5 pr-5 md:pl-7 md:pr-7">
        {/* ── 1. HERO ─────────────────────────────────────── */}
        <section
          id="top"
          data-sec="top"
          className="pt-20 pb-16 md:pt-[120px]"
          style={{ scrollMarginTop: "48px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-12 items-center">
            {/* Left — children reveal individually so the hero cascades in */}
            <div>
              {/* Kicker */}
              <p
                data-reveal
                data-reveal-delay="0"
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

              {/* Hero name. On mobile a compact portrait fills the empty space to
                  its right, stretched to the name's own height. The 28px bottom
                  margin moves from the h1 to this row so spacing is unchanged. */}
              <div
                className="flex items-stretch gap-3 md:block"
                style={{ marginBottom: "28px" }}
              >
                <h1
                  data-reveal
                  data-reveal-delay="90"
                  className="min-w-0"
                  style={{
                    fontFamily: "var(--font-serif)",
                    lineHeight: 0.86,
                    letterSpacing: "-0.01em",
                    fontSize: "clamp(58px, 9.5vw, 128px)",
                  }}
                >
                  <span style={{ color: "var(--ink)", display: "block" }}>Zymer</span>
                  <span style={{ color: "var(--faint)", display: "block" }}>Fernando</span>
                </h1>

                {/* Mobile-only; the full figure lives in the right column on desktop */}
                <div
                  data-reveal="fade"
                  data-reveal-delay="150"
                  className="relative ml-[30px] w-[92px] shrink-0 self-stretch md:hidden"
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid var(--line)",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <Image
                    src="/assets/main_image.JPG"
                    alt="Zymer Fernando"
                    fill
                    sizes="108px"
                    priority
                    style={{
                      objectFit: "cover",
                      objectPosition: "50% 35%",
                      transform: "scale(1.20)",
                    }}
                  />
                </div>
              </div>

              {/* Lede */}
              <p
                data-reveal
                data-reveal-delay="180"
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
                data-reveal
                data-reveal-delay="260"
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
              <div
                data-reveal
                data-reveal-delay="340"
                style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}
              >
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
              <div
                data-reveal="fade"
                data-reveal-delay="440"
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
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

            {/* Right — full hero figure (desktop only) */}
            <div
              data-reveal="fade"
              data-reveal-delay="140"
              className="hidden md:block w-full"
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
                  src="/assets/main_image.JPG"
                  alt="Zymer Fernando"
                  width={480}
                  height={656}
                  sizes="(max-width: 768px) 300px, 320px"
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
                {/* Tag top-left. Sits on a photo, so it stays light in both themes. */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color: "oklch(0.86 0.08 256)",
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

              {/* Fact row — 3-up on every size; it wrapped awkwardly as a flex row */}
              <div className="grid grid-cols-3 gap-3 sm:flex sm:gap-[34px]">
                {[
                  { num: "3+", label: "Years Building" },
                  { num: "10+", label: "Projects & Comps" },
                  { num: "5",  label: "Certifications" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <p
                      className="text-[22px] sm:text-[30px]"
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: "var(--ink)",
                        lineHeight: 1,
                        marginBottom: "4px",
                      }}
                    >
                      {num}
                    </p>
                    <p
                      className="text-[8.5px] tracking-[0.1em] sm:text-[10.5px] sm:tracking-[0.14em]"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--faint)",
                        textTransform: "uppercase",
                        lineHeight: 1.35,
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
                  background: "var(--bg2)",
                  padding: "22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    color: "var(--faint)",
                    textTransform: "uppercase",
                  }}
                >
                  Signal / Noise
                </p>

                <svg
                  viewBox="0 0 200 150"
                  role="img"
                  aria-label="Abstract plotted curve rising through a grid"
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  {/* Grid */}
                  {[30, 60, 90, 120].map((y) => (
                    <line
                      key={`h${y}`}
                      x1="0"
                      y1={y}
                      x2="200"
                      y2={y}
                      stroke="var(--line)"
                      strokeWidth="1"
                    />
                  ))}
                  {[50, 100, 150].map((x) => (
                    <line
                      key={`v${x}`}
                      x1={x}
                      y1="0"
                      x2={x}
                      y2="150"
                      stroke="var(--line)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Noise — the scattered path */}
                  <path
                    d="M0 132 L20 118 L40 126 L60 96 L80 108 L100 74 L120 86 L140 52 L160 62 L180 34 L200 42"
                    fill="none"
                    stroke="var(--faint)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    opacity="0.5"
                  />

                  {/* Signal — the smooth trend */}
                  <path
                    d="M0 128 C 50 116, 70 92, 100 78 S 160 44, 200 26"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Endpoint */}
                  <circle cx="200" cy="26" r="4" fill="var(--accent)" />
                  <circle cx="200" cy="26" r="8" fill="var(--accent)" opacity="0.18" />
                </svg>

                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "17px",
                    lineHeight: 1.4,
                    color: "var(--ink)",
                  }}
                >
                  Finding the{" "}
                  <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                    signal
                  </em>{" "}
                  in the noise.
                </p>
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {STACK.map((s, i) => (
              <div key={s} data-reveal="scale" data-reveal-delay={i * 35}>
                <StackBar stack={s} />
              </div>
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
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            style={{
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
            <div className="shrink-0 text-left sm:text-right sm:ml-4 pl-[58px] sm:pl-0">
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
              <div className="flex items-center gap-1.5 justify-start sm:justify-end">
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
          {/* Spreads run their own entrance, so no data-reveal wrapper here. */}
          <div className="flex flex-col gap-16 md:gap-24">
            <ProjectCard
              title="WikaWonders Kids"
              description="An interactive learning platform helping Filipino children pick up language through playful games and activities — built to be engaging, accessible, and genuinely fun."
              imageUrl="/assets/cover_banner.svg"
              siteUrl="https://wikawonderskids.com"
              githubUrl="https://github.com/kinitsZ/wikawonders-kids-2025"
              tag="Educational Platform"
            />
            <ProjectCard
              title="Job Application Tracker"
              description="Two n8n automations — one event-driven, one scheduled — that log job applications from a Google Form and surface stale follow-ups."
              imageUrl="/images/projects/job-tracker/workflow-1-canvas.png"
              caseStudyUrl="/projects/job-application-tracker"
              tag="Automation"
              flip
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
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            style={{
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
            <div className="shrink-0 text-left sm:text-right sm:ml-4 pl-[58px] sm:pl-0">
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
          {/* Items reveal individually inside the component */}
          <AwardsTimeline />
        </section>

        {/* ── 8. CERTIFICATIONS ────────────────────────────── */}
        <section
          id="certs"
          data-sec="certs"
          style={{ scrollMarginTop: "48px", paddingTop: "64px", paddingBottom: "64px" }}
        >
          <SectionHeader num="07" title="Certifications" />
          {/* Rows reveal individually inside the component */}
          <CertGallery />
        </section>
      </div>

      {/* ── 9. PULL-QUOTE BAND ──────────────────────────────── */}
      <div
        data-reveal
        className="py-20 px-6 md:py-32 md:px-7"
        style={{
          position: "relative",
          left: "50%",
          width: "100vw",
          marginLeft: "-50vw",
          background: "var(--band-bg)",
          overflowX: "clip",
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
            The Principle
          </p>

          <blockquote
            cite="https://www.cs.utexas.edu/~EWD/transcriptions/EWD04xx/EWD498.html"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(30px, 5.4vw, 62px)",
              lineHeight: 1.1,
              maxWidth: "18ch",
              margin: "0 auto 28px",
              color: "var(--ink)",
            }}
          >
            &ldquo;Simplicity is a prerequisite for{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              reliability
            </em>
            .&rdquo;
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
            — Edsger W. Dijkstra
          </p>
        </div>
      </div>

      {/* ── 10. CONTACT ─────────────────────────────────────── */}
      <div className="mx-auto max-w-[920px] pl-5 pr-5 md:pl-7 md:pr-7">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
      {/* Extra bottom padding on mobile clears the floating nav button. */}
      <footer
        className="pt-10 pb-28 md:pb-10"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div
          className="mx-auto max-w-[920px] pl-5 pr-5 md:pl-7 md:pr-7"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
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
              textAlign: "center",
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
