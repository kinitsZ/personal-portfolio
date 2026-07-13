"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  siteUrl?: string;
  githubUrl?: string;
  tag?: string;
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  siteUrl,
  githubUrl,
  tag,
}: ProjectCardProps) => {
  return (
    <div
      style={{
        borderRadius: "18px",
        background: "var(--bg2)",
        border: "1px solid var(--line)",
        overflow: "hidden",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      className="grid grid-cols-1 sm:grid-cols-[200px_1fr]"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image panel — divider sits below when stacked, right when side-by-side */}
      <div
        style={{
          background: "var(--bg)",
          position: "relative",
          minHeight: "180px",
        }}
        className="border-b border-(--line) sm:border-b-0 sm:border-r"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 200px"
            style={{ objectFit: "contain", padding: "20px" }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, var(--bg2), var(--line))",
            }}
          />
        )}
      </div>

      {/* Body */}
      <div
        className="p-6 sm:px-8 sm:py-7"
        style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        {tag && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10.5px",
              letterSpacing: "0.16em",
              color: "var(--faint)",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            {tag}
          </p>
        )}

        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "22px",
            color: "var(--ink)",
            lineHeight: 1.15,
            marginBottom: "12px",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "var(--muted-text)",
            maxWidth: "54ch",
            marginBottom: "20px",
          }}
        >
          {description}
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          {siteUrl && (
            <ProjectLink href={siteUrl} label="Live site" />
          )}
          {githubUrl && (
            <ProjectLink href={githubUrl} label="Source" />
          )}
        </div>
      </div>
    </div>
  );
};

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontFamily: "var(--font-sans)",
        fontSize: "13px",
        fontWeight: 500,
        color: "var(--muted-text)",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-text)")}
    >
      {label} <ArrowUpRight size={13} />
    </a>
  );
}

export default ProjectCard;
