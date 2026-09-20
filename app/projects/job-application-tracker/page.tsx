"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RevealObserver from "@/components/RevealObserver";
import CaseStudyRail, { type RailSection } from "@/components/CaseStudyRail";
import StackBar from "@/components/StackBar";
import {
  Aside,
  Chain,
  CodeBlock,
  InlineCode,
  Note,
  P,
  Plate,
  Sec,
  Shot,
  Step,
} from "@/components/CaseStudy";

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

const SECTIONS: RailSection[] = [
  { id: "overview", num: "01", label: "Overview" },
  { id: "logger", num: "02", label: "Application Logger" },
  { id: "digest", num: "03", label: "Weekly Digest" },
  { id: "notes", num: "04", label: "Technical Notes" },
];

const META = [
  { key: "Type", value: "Automation / integration" },
  { key: "Runtime", value: "Self-hosted n8n" },
  { key: "Pieces", value: "2 workflows" },
  { key: "Triggers", value: "Form webhook + weekly schedule" },
];

/* Every capture in this project is the same size. */
const W = 3164;
const H = 2068;
const PAIR = "(max-width: 768px) 100vw, 446px";

/* ── Page ────────────────────────────────────────────────── */

export default function JobApplicationTracker() {
  return (
    <div className="cs">
      <RevealObserver />
      <CaseStudyRail sections={SECTIONS} />

      <div className="mx-auto max-w-[920px] px-5 md:px-7">
        {/* ── MASTHEAD ────────────────────────────────────── */}
        <header className="pt-16 pb-10 md:pt-24">
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
              fontSize: "clamp(44px, 9vw, 92px)",
              lineHeight: 0.97,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              marginBottom: "22px",
            }}
          >
            Job Application
            <br />
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Tracker
            </span>
          </h1>

          <p
            data-reveal
            data-reveal-delay="180"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 2vw, 17.5px)",
              lineHeight: 1.65,
              color: "var(--muted-text)",
              maxWidth: "56ch",
              marginBottom: "38px",
            }}
          >
            Two n8n automations — one event-driven, one scheduled — that log job
            applications from a Google Form and surface stale follow-ups.
          </p>

          <div data-reveal data-reveal-delay="240" className="cs-meta">
            {META.map(({ key, value }) => (
              <div key={key} className="cs-meta-cell">
                <p className="cs-meta-key">{key}</p>
                <p className="cs-meta-val">{value}</p>
              </div>
            ))}
          </div>

          <div
            data-reveal
            data-reveal-delay="300"
            className="flex flex-wrap gap-2.5"
            style={{ marginTop: "26px" }}
          >
            {TECH.map((tech) => (
              <StackBar key={tech} stack={tech} />
            ))}
          </div>
        </header>

        {/* ── 01 OVERVIEW ─────────────────────────────────── */}
        <Sec id="overview" num="01" title="Overview">
          <P>
            A self-hosted n8n instance running two workflows. The first captures
            form submissions via webhook and writes them to a spreadsheet,
            branching to send an interview-prep email when a submission is
            flagged &ldquo;Interview.&rdquo; The second runs on a weekly
            schedule, reads the spreadsheet, and emails a digest of applications
            that are past their follow-up date.
          </P>
        </Sec>

        {/* ── 02 WORKFLOW 1 ───────────────────────────────── */}
        <Sec id="logger" num="02" title="Application Logger">
          <Chain
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

          <Plate
            src={`${IMG}/workflow-1-canvas.png`}
            alt="The n8n canvas for the application logger workflow, showing the webhook, code, sheets, IF and Gmail nodes wired left to right."
            caption="Workflow 1 on the n8n canvas — the IF node splits off the interview-prep branch."
            width={W}
            height={H}
            priority
          />

          <P>
            A form submission fires an Apps Script trigger, which POSTs to n8n.
            The payload is normalized into the spreadsheet&rsquo;s own column
            names, appended as a row, and — when the status says
            &ldquo;Interview&rdquo; — branched off to a prep email.
          </P>

          <Step num="01" title="The intake form" />
          <P>
            Every field on the form maps to exactly one column in the tracker
            sheet, which is what lets the rest of the pipeline stay
            pass-through.
          </P>
          <Shot
            src={`${IMG}/google-form.png`}
            alt="The Google Form used to submit a job application, showing the Company, Role and Status fields."
            caption="The intake form. Every field here maps to one column in the tracker sheet."
            width={W}
            height={H}
            sizes="(max-width: 920px) 100vw, 864px"
          />

          <Step num="02" title="Apps Script to webhook" />
          <P>
            Apps Script runs on Google&rsquo;s servers, so it needs a publicly
            reachable URL to POST to — hence the tunnel. The n8n Webhook node
            listens on the production path.
          </P>
          <CodeBlock
            filename="Code.gs — Apps Script trigger"
            code={APPS_SCRIPT}
          />
          <Shot
            src={`${IMG}/webhook-node-config.png`}
            alt="The n8n Webhook node configuration panel showing the POST method and production path."
            caption="Webhook node — POST, with the production path the Apps Script trigger targets."
            width={W}
            height={H}
            sizes="(max-width: 920px) 100vw, 864px"
          />

          <Step num="03" title="Normalize the payload" />
          <Aside label="Gotcha">
            A Google Sheets read returns keys matching the spreadsheet&rsquo;s
            column headers — <InlineCode>&quot;Follow Up Due&quot;</InlineCode> —
            not the camelCase keys an upstream Code node would naturally use.
            That mismatch fails silently: the node runs green and passes empty
            values downstream. The fix was to treat the header text as the
            canonical key and write it that way from the start.
          </Aside>
          <CodeBlock
            filename="n8n Code node — payload normalization"
            code={NORMALIZE}
          />
          <Shot
            src={`${IMG}/code-node-output.png`}
            alt="Output panel of the n8n Code node showing the normalized submission with header-cased keys."
            caption="Code node output: header-cased keys and a computed Follow Up Due date."
            width={W}
            height={H}
            sizes="(max-width: 920px) 100vw, 864px"
          />

          <Step num="04" title="Branch on status" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 mt-4 mb-9">
            <Shot
              src={`${IMG}/if-node-config.png`}
              alt="The n8n IF node configured to compare the Status field against the string Interview."
              caption='IF node — routes to the prep email when Status equals "Interview".'
              width={W}
              height={H}
              sizes={PAIR}
            />
            <Shot
              src={`${IMG}/execution-branch.png`}
              alt="An n8n execution view showing the workflow taking the true branch out of the IF node."
              caption="An execution taking the true branch through to Gmail."
              width={W}
              height={H}
              sizes={PAIR}
            />
          </div>

          <Step num="05" title="What comes out" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 mt-4">
            <Shot
              src={`${IMG}/sheet-result.png`}
              alt="The Google Sheet tracker with appended application rows and follow-up dates."
              caption="The tracker sheet — one appended row per submission."
              width={W}
              height={H}
              sizes={PAIR}
            />
            <Shot
              src={`${IMG}/interview-email.png`}
              alt="The interview preparation email as received in Gmail."
              caption='The prep email that fires on an "Interview" submission.'
              width={W}
              height={H}
              sizes={PAIR}
            />
          </div>

          <div className="mt-9">
            <Plate
              src={`${IMG}/execution-success.png`}
              alt="The n8n execution list showing a successful run of the application logger workflow."
              caption="A clean end-to-end run of the logger, webhook through to send."
              width={W}
              height={H}
            />
          </div>
        </Sec>

        {/* ── 03 WORKFLOW 2 ───────────────────────────────── */}
        <Sec id="digest" num="03" title="Weekly Follow-Up Digest">
          <Chain
            steps={[
              "Schedule Trigger — Mondays 9am",
              "Google Sheets — read rows",
              "Code — filter stale",
              "Gmail — send digest",
            ]}
          />

          <Plate
            src={`${IMG}/workflow-2-canvas.png`}
            alt="The n8n canvas for the weekly digest workflow, showing the schedule trigger, sheets read, code filter and Gmail nodes."
            caption="Workflow 2 on the n8n canvas — a linear chain from schedule to send."
            width={W}
            height={H}
          />

          <P>
            Nothing triggers this one but the clock. It reads the whole tracker
            back, keeps only the rows that are past their follow-up date and
            still open, and mails them as a single digest.
          </P>

          <Step num="01" title="The schedule" />
          <Shot
            src={`${IMG}/schedule-trigger-config.png`}
            alt="The n8n Schedule Trigger node set to run weekly on Mondays at 9am."
            caption="Schedule Trigger — weekly, Mondays at 9am."
            width={W}
            height={H}
            sizes="(max-width: 920px) 100vw, 864px"
          />

          <Step num="02" title="Filter the stale rows" />
          <P>
            Rows are compared on date only, so an application due today
            isn&rsquo;t counted as overdue, and anything already closed —
            offered, rejected or withdrawn — drops out.
          </P>
          <Aside label="Why it can return nothing">
            Returning an empty array from a Code node halts that branch cleanly.
            That is what keeps the digest honest: on a quiet week with nothing
            overdue, the workflow stops before Gmail and no hollow email goes
            out.
          </Aside>
          <CodeBlock
            filename="n8n Code node — stale-application filter"
            code={STALE_FILTER}
          />

          <Step num="03" title="The digest" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 mt-4">
            <Shot
              src={`${IMG}/execution-success-digest.png`}
              alt="The n8n execution list showing a successful run of the weekly digest workflow."
              caption="A successful digest run, with the stale rows counted at the Code node."
              width={W}
              height={H}
              sizes={PAIR}
            />
            <Shot
              src={`${IMG}/digest-email.png`}
              alt="The weekly follow-up digest email listing applications that are past their follow-up date."
              caption="The Monday digest — every application past its follow-up date."
              width={W}
              height={H}
              sizes={PAIR}
            />
          </div>
        </Sec>

        {/* ── 04 TECHNICAL NOTES ──────────────────────────── */}
        <Sec id="notes" num="04" title="Technical Notes" last>
          <ul className="list-none p-0 m-0">
            <Note num="01" title="Data shape mismatches between nodes">
              A Google Sheets read returns keys matching the spreadsheet&rsquo;s
              column headers — <InlineCode>&quot;Follow Up Due&quot;</InlineCode>{" "}
              — not the camelCase keys defined in an upstream Code node. These
              are silent failures: the node runs green but passes empty values
              downstream. The fix was to settle on the header text as the
              canonical key and write it that way from the start.
            </Note>

            <Note num="02" title="Local webhook exposure">
              Google Apps Script runs on Google&rsquo;s servers and cannot reach
              a webhook on <InlineCode>localhost</InlineCode>. A Cloudflare
              Tunnel puts the local n8n instance behind a public hostname, so the
              form trigger has something real to POST to without exposing the
              machine directly.
            </Note>

            <Note num="03" title="Test vs production webhook modes">
              n8n&rsquo;s test URL accepts a single request per arm, which is
              fine while wiring things up but useless for a live form. The
              production URL requires publishing the workflow — and editing a
              published workflow does not update the live version until it is
              republished. Several &ldquo;broken&rdquo; runs were really the old
              version still being served.
            </Note>

            <Note num="04" title="Empty-result handling">
              Returning an empty array from a Code node halts execution cleanly.
              That is what keeps the digest honest: on a quiet week with nothing
              overdue, the workflow stops before Gmail and no empty email goes
              out.
            </Note>
          </ul>
        </Sec>
      </div>
    </div>
  );
}
