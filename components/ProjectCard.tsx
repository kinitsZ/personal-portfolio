"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Github, Globe } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  siteUrl?: string;
  githubUrl?: string;
  /** Internal route for a write-up of this project, e.g. "/projects/slug". */
  caseStudyUrl?: string;
  tag?: string;
  /** Mirrors the spread so consecutive projects alternate sides. */
  flip?: boolean;
};

/**
 * Arms the pre-entrance state only after mount — server-rendered and no-JS
 * output stays fully visible — then plays the sequence once on first sight.
 * Drives classes on the node directly, the same way RevealObserver does, so
 * the entrance never costs a React render.
 */
function useSpreadEntrance() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("is-armed");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-shown");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-shown");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  siteUrl,
  githubUrl,
  caseStudyUrl,
  tag,
  flip,
}: ProjectCardProps) => {
  const ref = useSpreadEntrance();

  // Ordered by importance — the first gets the filled, primary treatment.
  const links: LinkSpec[] = [
    caseStudyUrl && {
      href: caseStudyUrl,
      label: "Read case study",
      kind: "case" as const,
    },
    siteUrl && { href: siteUrl, label: "Live site", kind: "site" as const },
    githubUrl && { href: githubUrl, label: "Source", kind: "source" as const },
  ].filter(Boolean) as LinkSpec[];

  return (
    <article ref={ref} className="ps" data-flip={flip ? "true" : undefined}>
      <div className="ps-main">
        <div className="ps-art">
          <div className="ps-parallax">
            <div className="ps-settle">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  /* Decorative: the title sits right beside it, so a
                     descriptive alt would just be announced twice. */
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 640px"
                  className="ps-img"
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, var(--bg2), var(--line))",
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Paper slab, breaking out over the artwork's bottom edge */}
        <div className="ps-slab">
          <div className="ps-titlemask">
            <h3 className="ps-title">{title}</h3>
          </div>
          <p className="ps-desc">{description}</p>
        </div>
      </div>

      <div className="ps-credits">
        {tag && (
          <div className="ps-item flex items-center gap-2.5">
            <span aria-hidden="true" className="ps-tick" />
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10.5px",
                letterSpacing: "0.16em",
                color: "var(--faint)",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </p>
          </div>
        )}

        <div className="ps-item ps-rule" aria-hidden="true" />

        <div className="ps-item flex flex-col">
          {links.map((link, i) => (
            <ProjectLink key={link.href} {...link} primary={i === 0} />
          ))}
        </div>
      </div>
    </article>
  );
};

type LinkSpec = {
  href: string;
  label: string;
  kind: "case" | "site" | "source";
};

const LINK_ICON = {
  case: BookOpen,
  site: Globe,
  source: Github,
} as const;

function ProjectLink({
  href,
  label,
  kind,
  primary,
}: LinkSpec & { primary?: boolean }) {
  const Icon = LINK_ICON[kind];
  /* Only the case study is a route on this site; the rest leave it. */
  const internal = kind === "case";

  const body = (
    <>
      <span className="ps-link-tile">
        <Icon size={15} aria-hidden="true" />
      </span>
      <span className="ps-link-text">
        {label}
        {internal ? (
          <ArrowRight size={13} aria-hidden="true" className="ps-link-go" />
        ) : (
          <ArrowUpRight size={13} aria-hidden="true" className="ps-link-ext" />
        )}
      </span>
    </>
  );

  if (internal) {
    return (
      <Link href={href} className="ps-link" data-primary={primary || undefined}>
        {body}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ps-link"
      data-primary={primary || undefined}
    >
      {body}
    </a>
  );
}

export default ProjectCard;
