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
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        borderRadius: "18px",
        background: "var(--bg2)",
        border: "1px solid var(--line)",
        overflow: "hidden",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      className="grid-cols-1! md:grid-cols-[200px_1fr]!"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image panel */}
      <div
        style={{
          background: "var(--bg)",
          borderRight: "1px solid var(--line)",
          position: "relative",
          minHeight: "180px",
        }}
        className="border-right-0! md:border-r-(--line)! border-b border-b-(--line) md:border-b-0!"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
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
      <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
