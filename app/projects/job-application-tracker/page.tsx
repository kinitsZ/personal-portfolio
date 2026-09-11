"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import RevealObserver from "@/components/RevealObserver";
import SectionHeader from "@/components/SectionHeader";
import StackBar from "@/components/StackBar";

/* ── Reusable sub-components ────────────────────────────── */

/** A node-to-node pipeline, wrapping to as many rows as it needs. */
function FlowChain({ steps }: { steps: string[] }) {
  return (
    <ol
      data-reveal
      className="flex flex-wrap items-center gap-x-2 gap-y-2.5 mb-8 list-none p-0"
    >
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-x-2">
          <span
            style={{
              display: "inline-block",
              padding: "7px 13px",
              borderRadius: "999px",
              background: "var(--bg2)",
              border: "1px solid var(--line)",
              fontFamily: "var(--font-mono)",
              fontSize: "11.5px",
              color: "var(--muted-text)",
              whiteSpace: "nowrap",
              // `===` would otherwise render as a single ligature bar.
              fontVariantLigatures: "none",
            }}
          >
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
 * No highlighter is installed, so this stays semantic: a <pre><code> with the
 * language class a highlighter would hook into later.
 */
function CodeBlock({
  filename,
  language = "javascript",
  code,
}: {
  filename: string;
  language?: string;
  code: string;
}) {
  return (
    <figure
      data-reveal
      className="mb-8"
      style={{
        borderRadius: "14px",
        border: "1px solid var(--line)",
        background: "var(--bg2)",
        overflow: "hidden",
      }}
    >
      <figcaption
        style={{
          padding: "10px 16px",
          borderBottom: "1px solid var(--line)",
          fontFamily: "var(--font-mono)",
          fontSize: "10.5px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--faint)",
        }}
      >
        {filename}
      </figcaption>
      <pre
        className="overflow-x-auto"
        style={{
          margin: 0,
          padding: "18px 16px",
          fontFamily: "var(--font-mono)",
          fontSize: "12.5px",
          lineHeight: 1.7,
          color: "var(--ink)",
          tabSize: 2,
        }}
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </figure>
  );
}

/** A screenshot with a caption underneath. */
function Shot({
  src,
  alt,
  caption,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  caption: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <figure data-reveal style={{ margin: 0 }}>
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
          width={3164}
          height={2068}
          sizes={sizes}
          priority={priority}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <figcaption
        style={{
          marginTop: "10px",
          fontFamily: "var(--font-sans)",
          fontSize: "12.5px",
          lineHeight: 1.55,
          color: "var(--muted-text)",
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

/** Inline code inside prose. */
function InlineCode({ children }: { children: React.ReactNode }) {
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

/** One entry in the challenges list — mono index, heading, explanation. */
function Challenge({
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
      className="flex flex-col sm:flex-row gap-2 sm:gap-6"
      style={{ padding: "22px 0", borderTop: "1px solid var(--line)" }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.16em",
          color: "var(--accent)",
          flexShrink: 0,
          paddingTop: "4px",
          width: "34px",
        }}
      >
        {num}
      </span>
      <div>
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            fontWeight: 600,
            color: "var(--ink)",
            marginBottom: "7px",
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

/* ── Content ────────────────────────────────────────────── */

const TECH = [
  "n8n (self-hosted)",
  "Google Forms",
  "Google Apps Script",
  "Google Sheets API",
  "Gmail API",
  "OAuth2",
  "Cloudflare Tunnel",
  "JavaScript",
];

const IMG = "/images/projects/job-tracker";

const APPS_SCRIPT = `const WEBHOOK_URL = 'https://n8n.example.com/webhook/job-application';

/**
 * Bound to the form with an installable "On form submit" trigger.
 * This runs on Google's servers, so WEBHOOK_URL has to be publicly
 * reachable — hence the tunnel.
 */
function onFormSubmit(e) {
  // e.namedValues maps each question title to an array of answers.
  const answers = {};
  Object.keys(e.namedValues).forEach(function (title) {
    answers[title] = e.namedValues[title][0] || '';
  });

  const payload = {
    submittedAt: new Date().toISOString(),
    company: answers['Company'],
    role: answers['Role'],
    status: answers['Status'],
    jobUrl: answers['Job Posting URL'],
    notes: answers['Notes'],
  };

  const res = UrlFetchApp.fetch(WEBHOOK_URL, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  });

  if (res.getResponseCode() >= 300) {
    console.error('Webhook failed: ' + res.getResponseCode());
  }
}`;

const NORMALIZE = `// Code node — "Normalize Submission"
const FOLLOW_UP_DAYS = 7;

const toDateString = (d) => d.toISOString().slice(0, 10);

return items.map((item) => {
  // The Webhook node nests the POST body under .body.
  const body = item.json.body ?? item.json;

  const submittedAt = body.submittedAt
    ? new Date(body.submittedAt)
    : new Date();

  const followUpDue = new Date(submittedAt);
  followUpDue.setDate(followUpDue.getDate() + FOLLOW_UP_DAYS);

  return {
    json: {
      // These keys must match the spreadsheet's column headers exactly —
      // the Sheets node maps by header text, not by position.
      'Company': (body.company ?? '').trim(),
      'Role': (body.role ?? '').trim(),
      'Status': (body.status ?? 'Applied').trim(),
      'Job URL': (body.jobUrl ?? '').trim(),
      'Notes': (body.notes ?? '').trim(),
      'Applied On': toDateString(submittedAt),
      'Follow Up Due': toDateString(followUpDue),
    },
  };
});`;

const STALE_FILTER = `// Code node — "Filter Stale Applications"
// Input: every row read back from the tracker sheet.
const CLOSED = ['Offer', 'Rejected', 'Withdrawn'];

// Compare on date only, so a row due today isn't counted as overdue.
const today = new Date();
today.setHours(0, 0, 0, 0);

const stale = items.filter(({ json: row }) => {
  // Sheets returns the column header as the key: "Follow Up Due",
  // not the camelCase followUpDue used upstream.
  const due = row['Follow Up Due'];
  if (!due || CLOSED.includes(row['Status'])) return false;

  const dueDate = new Date(due);
  if (Number.isNaN(dueDate.getTime())) return false;
  dueDate.setHours(0, 0, 0, 0);

  return dueDate < today;
});

// Returning an empty array halts this branch cleanly, so Gmail
// never fires a hollow digest on a quiet week.
if (stale.length === 0) return [];

return stale.map(({ json: row }) => ({
  json: {
    ...row,
    daysOverdue: Math.round(
      (today - new Date(row['Follow Up Due'])) / 86400000
    ),
  },
}));`;

const GALLERY = [
  {
    src: `${IMG}/google-form.png`,
    alt: "The Google Form used to submit a job application, showing the Company, Role and Status fields.",
    caption:
      "The intake form. Every field here maps to one column in the tracker sheet.",
  },
  {
    src: `${IMG}/webhook-node-config.png`,
    alt: "The n8n Webhook node configuration panel showing the POST method and production path.",
    caption:
      "Webhook node — POST, with the production path the Apps Script trigger targets.",
  },
  {
    src: `${IMG}/code-node-output.png`,
    alt: "Output panel of the n8n Code node showing the normalized submission with header-cased keys.",
    caption:
      "Code node output: header-cased keys and a computed Follow Up Due date.",
  },
  {
    src: `${IMG}/if-node-config.png`,
    alt: "The n8n IF node configured to compare the Status field against the string Interview.",
    caption: 'IF node — routes to the prep email when Status equals "Interview".',
  },
  {
    src: `${IMG}/execution-branch.png`,
    alt: "An n8n execution view showing the workflow taking the true branch out of the IF node.",
    caption: "An execution taking the true branch through to Gmail.",
  },
  {
    src: `${IMG}/execution-success.png`,
    alt: "The n8n execution list showing a successful run of the application logger workflow.",
    caption: "A clean end-to-end run of the logger, webhook through to send.",
  },
  {
    src: `${IMG}/sheet-result.png`,
    alt: "The Google Sheet tracker with appended application rows and follow-up dates.",
    caption: "The tracker sheet — one appended row per submission.",
  },
  {
    src: `${IMG}/interview-email.png`,
    alt: "The interview preparation email as received in Gmail.",
    caption: 'The prep email that fires on an "Interview" submission.',
  },
  {
    src: `${IMG}/schedule-trigger-config.png`,
    alt: "The n8n Schedule Trigger node set to run weekly on Mondays at 9am.",
    caption: "Schedule Trigger — weekly, Mondays at 9am.",
  },
  {
    src: `${IMG}/execution-success-digest.png`,
    alt: "The n8n execution list showing a successful run of the weekly digest workflow.",
    caption: "A successful digest run, with the stale rows counted at the Code node.",
  },
  {
    src: `${IMG}/digest-email.png`,
    alt: "The weekly follow-up digest email listing applications that are past their follow-up date.",
    caption: "The Monday digest — every application past its follow-up date.",
  },
];

/* ── Page ────────────────────────────────────────────────── */

export default function JobApplicationTracker() {
  return (
    <>
      <RevealObserver />

      <div className="mx-auto max-w-[920px] px-5 md:px-7">
        {/* ── HEADER ──────────────────────────────────────── */}
        <header className="pt-16 pb-14 md:pt-24">
          <Link
            href="/#projects"
            data-reveal
            data-reveal-delay="0"
            className="inline-flex items-center gap-1.5 mb-10 hover:text-(--accent)"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--muted-text)",
              transition: "color 0.2s ease",
            }}
          >
            <ArrowLeft size={14} aria-hidden="true" /> Back to projects
          </Link>

          <p
            data-reveal
            data-reveal-delay="60"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10.5px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "18px",
            }}
          >
            Case Study — Automation
          </p>

          <h1
            data-reveal
            data-reveal-delay="120"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(38px, 7vw, 68px)",
              lineHeight: 1.02,
              color: "var(--ink)",
              marginBottom: "20px",
            }}
          >
            Job Application Tracker
          </h1>

          <p
            data-reveal
            data-reveal-delay="180"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.65,
              color: "var(--muted-text)",
              maxWidth: "58ch",
            }}
          >
            Two n8n automations — one event-driven, one scheduled — that log job
            applications from a Google Form and surface stale follow-ups.
          </p>

          {/* Tech stack */}
          <div
            data-reveal
            data-reveal-delay="240"
            className="flex flex-wrap gap-2.5"
            style={{ marginTop: "32px" }}
          >
            {TECH.map((tech) => (
              <StackBar key={tech} stack={tech} />
            ))}
          </div>
        </header>

        {/* ── 1. OVERVIEW ─────────────────────────────────── */}
        <section style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <SectionHeader num="01" title="Overview" />
          <p
            data-reveal
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--muted-text)",
              maxWidth: "70ch",
            }}
          >
            A self-hosted n8n instance running two workflows. The first captures
            form submissions via webhook and writes them to a spreadsheet,
            branching to send an interview-prep email when a submission is
            flagged &ldquo;Interview.&rdquo; The second runs on a weekly
            schedule, reads the spreadsheet, and emails a digest of applications
            that are past their follow-up date.
          </p>
        </section>

        {/* ── 2. WORKFLOW 1 ───────────────────────────────── */}
        <section style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <SectionHeader num="02" title="Application Logger" />

          <p
            data-reveal
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10.5px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--faint)",
              marginBottom: "18px",
            }}
          >
            Workflow 1 — Event-driven
          </p>

          <FlowChain
            steps={[
              "Google Form",
              "Apps Script webhook",
              "n8n Webhook",
              "Code — normalize",
              "Google Sheets — append",
              'IF — status === "Interview"',
              "Gmail — prep email",
            ]}
          />

          <div className="mb-9">
            <Shot
              src={`${IMG}/workflow-1-canvas.png`}
              alt="The n8n canvas for the application logger workflow, showing the webhook, code, sheets, IF and Gmail nodes wired left to right."
              caption="Workflow 1 on the n8n canvas — the IF node splits off the interview-prep branch."
              sizes="(max-width: 920px) 100vw, 920px"
              priority
            />
          </div>

          <CodeBlock
            filename="Code.gs — Apps Script trigger"
            code={APPS_SCRIPT}
          />

          <CodeBlock
            filename="n8n Code node — payload normalization"
            code={NORMALIZE}
          />
        </section>

        {/* ── 3. WORKFLOW 2 ───────────────────────────────── */}
        <section style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <SectionHeader num="03" title="Weekly Follow-Up Digest" />

          <p
            data-reveal
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10.5px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--faint)",
              marginBottom: "18px",
            }}
          >
            Workflow 2 — Scheduled
          </p>

          <FlowChain
            steps={[
              "Schedule Trigger — Mondays 9am",
              "Google Sheets — read rows",
              "Code — filter stale",
              "Gmail — send digest",
            ]}
          />

          <div className="mb-9">
            <Shot
              src={`${IMG}/workflow-2-canvas.png`}
              alt="The n8n canvas for the weekly digest workflow, showing the schedule trigger, sheets read, code filter and Gmail nodes."
              caption="Workflow 2 on the n8n canvas — a linear chain from schedule to send."
              sizes="(max-width: 920px) 100vw, 920px"
            />
          </div>

          <CodeBlock
            filename="n8n Code node — stale-application filter"
            code={STALE_FILTER}
          />
        </section>

        {/* ── 4. TECHNICAL CHALLENGES ─────────────────────── */}
        <section style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <SectionHeader num="04" title="Technical Challenges" />

          <ul className="list-none p-0 m-0">
            <Challenge num="01" title="Data shape mismatches between nodes">
              A Google Sheets read returns keys matching the spreadsheet&rsquo;s
              column headers — <InlineCode>&quot;Follow Up Due&quot;</InlineCode> — not the
              camelCase keys defined in an upstream Code node. These are silent
              failures: the node runs green but passes empty values downstream.
              The fix was to settle on the header text as the canonical key and
              write it that way from the start.
            </Challenge>

            <Challenge num="02" title="Local webhook exposure">
              Google Apps Script runs on Google&rsquo;s servers and cannot reach
              a webhook on <InlineCode>localhost</InlineCode>. A Cloudflare Tunnel puts the
              local n8n instance behind a public hostname, so the form trigger
              has something real to POST to without exposing the machine
              directly.
            </Challenge>

            <Challenge num="03" title="Test vs production webhook modes">
              n8n&rsquo;s test URL accepts a single request per arm, which is
              fine while wiring things up but useless for a live form. The
              production URL requires publishing the workflow — and editing a
              published workflow does not update the live version until it is
              republished. Several &ldquo;broken&rdquo; runs were really the old
              version still being served.
            </Challenge>

            <Challenge num="04" title="Empty-result handling">
              Returning an empty array from a Code node halts execution cleanly.
              That is what keeps the digest honest: on a quiet week with nothing
              overdue, the workflow stops before Gmail and no empty email goes
              out.
            </Challenge>
          </ul>
        </section>

        {/* ── 5. SCREENSHOTS ──────────────────────────────── */}
        <section style={{ paddingTop: "48px", paddingBottom: "96px" }}>
          <SectionHeader num="05" title="Screenshots" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9">
            {GALLERY.map((shot) => (
              <Shot
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                caption={shot.caption}
                sizes="(max-width: 768px) 100vw, 446px"
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
