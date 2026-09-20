"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, Check, Copy } from "lucide-react";

/**
 * The shared case-study surface: the components every write-up under
 * /projects is built from. Their look lives in the `.cs-*` block in
 * globals.css and is scoped to a `.cs` wrapper, so a page must render one.
 *
 * Each page still owns its own content and section order — only the
 * materials are shared.
 */

/** Chapter heading: an outlined numeral at display scale beside the title. */
export function Sec({
  id,
  num,
  title,
  last,
  children,
}: {
  id: string;
  num: string;
  title: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      style={{
        scrollMarginTop: "32px",
        paddingTop: "56px",
        paddingBottom: last ? "104px" : "56px",
      }}
    >
      <div data-reveal className="cs-sec">
        <span className="cs-sec-num" aria-hidden="true">
          {num}
        </span>
        <h2 className="cs-sec-title">{title}</h2>
        <div className="cs-sec-rule rule-line" />
      </div>
      {children}
    </section>
  );
}

/** A numbered move within a workflow. The numeral sits in the page margin. */
export function Step({ num, title }: { num: string; title: string }) {
  return (
    <div data-reveal className="cs-step">
      <div className="cs-step-num" aria-hidden="true">
        {num}
      </div>
      <h3 className="cs-step-title">{title}</h3>
    </div>
  );
}

/** Body copy. */
export function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      data-reveal
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        lineHeight: 1.75,
        color: "var(--muted-text)",
        maxWidth: "70ch",
        marginBottom: "18px",
      }}
    >
      {children}
    </p>
  );
}

/** The point that would otherwise be buried mid-paragraph. */
export function Aside({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <aside data-reveal className="cs-aside">
      <p className="cs-aside-label">{label}</p>
      <p className="cs-aside-body">{children}</p>
    </aside>
  );
}

/** Inline code inside prose. */
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.88em",
        color: "var(--ink)",
        background: "var(--bg2)",
        border: "1px solid var(--line)",
        borderRadius: "5px",
        padding: "1px 5px",
        fontVariantLigatures: "none",
      }}
    >
      {children}
    </code>
  );
}

/** A node-to-node pipeline, wrapping to as many rows as it needs. */
export function Chain({ steps }: { steps: string[] }) {
  return (
    <ol
      data-reveal
      className="flex flex-wrap items-center gap-x-2 gap-y-2.5 mb-9 list-none p-0"
    >
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-x-2">
          <span className="cs-node">
            <span className="cs-node-i" aria-hidden="true">
              {i + 1}
            </span>
            {step}
          </span>
          {i < steps.length - 1 && (
            <ChevronRight
              size={13}
              aria-hidden="true"
              style={{ color: "var(--faint)", flexShrink: 0 }}
            />
          )}
        </li>
      ))}
    </ol>
  );
}

/**
 * Line-level cues without a parser: a comment line dims, and in an n8n
 * `field = expression` line the field takes the accent. Anything a real
 * highlighter would need a grammar for is left alone rather than guessed at.
 */
function renderLine(line: string, language: string) {
  const trimmed = line.trimStart();

  // Line comments, shell comments, and the body of a JSDoc block — a `*`
  // continuation line only ever appears inside one in these snippets.
  if (
    trimmed.startsWith("//") ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("/*") ||
    trimmed.startsWith("*")
  ) {
    return <span className="cs-code-cmt">{line}</span>;
  }

  if (language === "text") {
    const m = line.match(/^(\s*)([A-Za-z_][\w.]*)(\s*=\s*)(.*)$/);
    if (m) {
      return (
        <>
          {m[1]}
          <span className="cs-code-key">{m[2]}</span>
          {m[3]}
          {m[4]}
        </>
      );
    }
  }

  return line;
}

/**
 * A dark slab in both themes, so code reads as its own material rather than
 * one more tinted rectangle. Numbered gutter, and the source is copyable —
 * the gutter is `user-select: none` so the numbers don't come with it.
 */
export function CodeBlock({
  filename,
  language = "javascript",
  code,
}: {
  filename: string;
  language?: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);
  const lines = code.split("\n");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* Clipboard is unavailable over plain http and in some browsers —
         the code is still selectable, so there is nothing to recover. */
    }
  };

  return (
    <figure data-reveal className="cs-code" style={{ margin: "0 0 30px" }}>
      <div className="cs-code-tab">
        <span className="cs-code-dot" aria-hidden="true" />
        <figcaption className="cs-code-name">{filename}</figcaption>
        <button
          type="button"
          onClick={copy}
          className="cs-code-copy"
          aria-label={`Copy ${filename}`}
        >
          {copied ? (
            <Check size={11} aria-hidden="true" />
          ) : (
            <Copy size={11} aria-hidden="true" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="cs-code-body">
        <pre style={{ margin: 0 }}>
          <code className={`language-${language}`}>
            {lines.map((line, i) => (
              <span className="cs-code-line" key={i}>
                <span className="cs-code-num" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="cs-code-txt">{renderLine(line, language)}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </figure>
  );
}

/**
 * A screenshot that outgrows the text column, wiping in from the left. Goes
 * edge-to-edge on phones, where the column's padding is all the room there is.
 */
export function Plate({
  src,
  alt,
  caption,
  width,
  height,
  priority,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <figure style={{ margin: "0 0 38px" }}>
      <div data-reveal>
        <div className="cs-plate">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 1024px) 100vw, 1150px"
            priority={priority}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <figcaption className="cs-cap">{caption}</figcaption>
    </figure>
  );
}

/**
 * A privacy-enhanced YouTube player on the same plate. `youtube-nocookie`
 * holds off on tracking cookies until the viewer presses play, and the iframe
 * only loads when it nears the viewport.
 */
export function VideoPlate({
  id,
  title,
  caption,
}: {
  id: string;
  title: string;
  caption: string;
}) {
  return (
    <figure style={{ margin: "0 0 38px" }}>
      <div data-reveal>
        <div className="cs-plate aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ display: "block", width: "100%", height: "100%", border: 0 }}
          />
        </div>
      </div>
      <figcaption className="cs-cap">{caption}</figcaption>
    </figure>
  );
}

/** An in-column screenshot, for the pair that reads better side by side. */
export function Shot({
  src,
  alt,
  caption,
  width,
  height,
  sizes,
  maxWidth,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  sizes: string;
  /** Caps the tall phone capture so it doesn't tower over its neighbour. */
  maxWidth?: number;
}) {
  return (
    <figure
      data-reveal
      style={{ margin: 0, maxWidth, marginInline: maxWidth ? "auto" : undefined }}
    >
      <div
        style={{
          borderRadius: "14px",
          border: "1px solid var(--line)",
          background: "var(--bg2)",
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <figcaption className="cs-cap">{caption}</figcaption>
    </figure>
  );
}

/** One entry in the technical-notes list. */
export function Note({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li
      data-reveal
      className="flex flex-col sm:flex-row gap-1 sm:gap-7"
      style={{ padding: "24px 0", borderTop: "1px solid var(--line)" }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "30px",
          lineHeight: 1,
          color: "var(--accent)",
          flexShrink: 0,
          width: "46px",
        }}
      >
        {num}
      </span>
      <div>
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16.5px",
            fontWeight: 600,
            color: "var(--ink)",
            marginBottom: "8px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--muted-text)",
            maxWidth: "68ch",
          }}
        >
          {children}
        </p>
      </div>
    </li>
  );
}
