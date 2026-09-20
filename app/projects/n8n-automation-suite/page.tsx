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

/**
 * A screenshot with a caption underneath. Intrinsic dimensions are passed per
 * image — the canvases, the execution views and the phone capture all have
 * different ratios, and a shared pair would squash them.
 */
function Shot({
  src,
  alt,
  caption,
  width,
  height,
  sizes,
  maxWidth,
  priority,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  sizes: string;
  /** Caps a tall portrait capture so it doesn't tower over the prose. */
  maxWidth?: number;
  priority?: boolean;
}) {
  return (
    <figure data-reveal style={{ margin: 0, maxWidth, marginInline: maxWidth ? "auto" : undefined }}>
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

/**
 * A privacy-enhanced YouTube player in a fluid 16:9 frame. `youtube-nocookie`
 * keeps the embed from writing tracking cookies until the viewer presses play,
 * and the iframe only loads when it nears the viewport.
 */
function VideoEmbed({
  id,
  title,
  caption,
}: {
  id: string;
  title: string;
  caption: string;
}) {
  return (
    <figure data-reveal style={{ margin: 0 }}>
      <div
        className="aspect-video"
        style={{
          borderRadius: "14px",
          border: "1px solid var(--line)",
          background: "var(--bg2)",
          overflow: "hidden",
        }}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            border: 0,
          }}
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

/** Body copy. Repeated often enough here to be worth naming. */
function P({ children }: { children: React.ReactNode }) {
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

/** Marks a step within a workflow, above its explanation and code. */
function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <h3
      data-reveal
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "16px",
        fontWeight: 600,
        color: "var(--ink)",
        marginTop: "34px",
        marginBottom: "10px",
      }}
    >
      {children}
    </h3>
  );
}

/** The mono kicker that labels a workflow above its flow chain. */
function Kicker({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </p>
  );
}

/** One entry in the technical-notes list — mono index, heading, explanation. */
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
  "Google Gemini API",
  "Gmail API",
  "Google Sheets API",
  "Google Drive API",
  "Telegram Bot API",
  "JavaScript",
  "Cloudflare Tunnel",
];

const IMG = "/images/projects/pds-workflows";

/* ── Workflow 1 ── */

const LABEL_LIST = `// Code node — "Label List"
return ['label1', 'label2', 'label3'].map(label => ({ json: { label } }));`;

const GMAIL_FILTER = `label:{{ $json.label }} is:unread`;

const NORMALIZE = `label            = {{ $('Label List').item.json.label }}
senderName       = {{ $json.from.value[0].name || $json.from.value[0].address }}
senderEmail      = {{ $json.from.value[0].address }}
subject          = {{ $json.subject || '(no subject)' }}
dateReceived     = {{ DateTime.fromISO($json.date).toFormat('yyyy-MM-dd') }}
messageId        = {{ $json.id }}
attachmentCount  = {{ Object.keys($binary || {}).length }}`;

const SPLIT_ATTACHMENTS = `// Code node — "Split Attachments"
const emails = $('Get many messages').all();
const out = [];

$input.all().forEach((item, i) => {
  // Binary doesn't survive Normalize, so pull it back from Gmail by index.
  const binary = emails[i].binary || {};
  for (const key of Object.keys(binary)) {
    out.push({
      json: { ...item.json, fileName: binary[key].fileName },
      binary: { data: binary[key] },
    });
  }
});

// An email with no attachments produces no items and drops out of this branch.
return out;`;

const FOLDER_CHAIN = `// Set Label Folder
name     = {{ $json.label }}
parentId = <root folder ID>

// Set Date Folder — parented to the label folder resolved above
name     = {{ $json.dateReceived }}
parentId = {{ $json.folderId }}

// Set Sender Folder — parented to the date folder
name     = {{ $json.senderName }}
parentId = {{ $json.folderId }}`;

const DRIVE_UPLOAD = `fileName     = {{ $binary.data.fileName }}
parentFolder = {{ $json.folderId }}   // By ID`;

const MARK_READ = `messageId = {{ $('Normalize').item.json.messageId }}`;

/* ── Sub-workflow ── */

const SEARCH_QUERY = `name = '{{ $json.name.replace(/'/g, "\\\\'") }}'
  and '{{ $json.parentId }}' in parents
  and mimeType = 'application/vnd.google-apps.folder'
  and trashed = false`;

const IF_CONDITION = `{{ $json.id }}   is not empty`;

const CREATE_FOLDER = `folderName   = {{ $('When Executed by Another Workflow').item.json.name }}
parentFolder = {{ $('When Executed by Another Workflow').item.json.parentId }}`;

const SUB_RETURN = `// Code node — "Return". Both branches converge here.
return [{
  json: {
    // Pass the caller's original fields back so it keeps its context.
    ...$('When Executed by Another Workflow').first().json,
    folderId: $input.first().json.id,
  },
}];`;

/* ── Workflow 2 ── */

const HAS_PHOTO = `// message.photo is an array, so count its entries
// rather than testing for existence.
{{ $json.message.photo ? $json.message.photo.length : 0 }}

// Number — is greater than — 0`;

const GET_PHOTO = `// Telegram sends several resolutions; the last is the largest,
// which gives the best OCR accuracy.
fileId = {{ $json.message.photo.last().file_id }}   // Download: on`;

const GEMINI_PROMPT = `Extract these fields from this receipt image: merchant_name,
total_amount (number only, no currency symbol), currency
(3-letter code like USD or PHP), receipt_date (YYYY-MM-DD).

Return ONLY valid JSON with exactly those four keys. No markdown,
no code fences, no explanation. Use null for any field you cannot read.`;

const PARSE_RECEIPT = `// Code node — "Parse Receipt"
const raw = $json.content.parts[0].text || '';
const clean = raw.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();

let parsed = {};
try {
  parsed = JSON.parse(clean);
} catch (e) {
  // An unreadable receipt logs a row instead of failing the run.
  parsed = { merchant_name: null, total_amount: null, currency: null, receipt_date: null };
}

return {
  json: {
    submittedAt: $now.toFormat('yyyy-MM-dd HH:mm:ss'),
    telegramUser: $('Telegram Trigger').first().json.message.from.first_name,
    merchant: parsed.merchant_name ?? 'Not found',
    amount: parsed.total_amount ?? '',
    currency: parsed.currency ?? '',
    receiptDate: parsed.receipt_date ?? 'Not found',
    submissionDate: $now.toFormat('yyyy-MM-dd'),
  },
};`;

const RECEIPT_FOLDER = `// Set Receipt Folder
name     = {{ $now.toFormat('yyyy-MM-dd') }}
parentId = <receipts folder ID>`;

const SAVE_PHOTO = `// Telegram doesn't preserve original filenames, so the name is built
// from the timestamp and message ID to stay unique and traceable.
fileName     = {{ $now.toFormat('HHmmss') }}_{{ $('Telegram Trigger').first().json.message.message_id }}.jpg
parentFolder = {{ $json.folderId }}   // By ID`;

const TELEGRAM_REPLIES = `// Ask For Photo — false branch
chatId = {{ $('Telegram Trigger').item.json.message.chat.id }}
text   = Please send a receipt photo.

// Confirm to User
chatId = {{ $('Telegram Trigger').first().json.message.chat.id }}
text   = Saved: {{ $('Parse Receipt').first().json.merchant }} - {{ $('Parse Receipt').first().json.amount }} {{ $('Parse Receipt').first().json.currency }}`;

const TUNNEL_SETUP = `# Terminal 1: expose the local instance for the Telegram webhook
cloudflared tunnel --url http://localhost:5678

# Terminal 2: start n8n with that public URL
export WEBHOOK_URL=https://<your-tunnel>.trycloudflare.com/
n8n start`;

/* ── Page ────────────────────────────────────────────────── */

export default function N8nAutomationSuite() {
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
            n8n Automation Suite
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
            Two production n8n workflows that automate email attachment
            archiving and AI-powered receipt processing, built as a technical
            assessment.
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

          <P>
            Two independent but architecturally related workflows on a
            self-hosted n8n instance. The first polls Gmail on a schedule and
            archives every attachment it finds to Google Drive, logging the
            email alongside it in a spreadsheet. The second receives receipt
            photos through a Telegram bot, reads them with Google Gemini, and
            files both the parsed figures and the original image.
          </P>
          <P>
            They share one piece: a reusable sub-workflow that resolves a Drive
            folder by name, creating it only when it does not already exist.
            Both pipelines lean on it to build nested folder paths.
          </P>

          <P>
            Both are demoed end to end in their sections below.
          </P>
        </section>

        {/* ── 2. WORKFLOW 1 ───────────────────────────────── */}
        <section style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <SectionHeader num="02" title="Gmail to Sheets and Drive" />

          <Kicker>Workflow 1 — Scheduled</Kicker>

          <FlowChain
            steps={[
              "Schedule Trigger — 5 min",
              "Code — label list",
              "Gmail — get many",
              "Edit Fields — normalize",
              "Sheets — append row",
              "Code — split attachments",
              "Sub-workflow — folder chain",
              "Merge — by position",
              "Drive — upload",
              "Gmail — mark as read",
            ]}
          />

          <div className="mb-9">
            <Shot
              src={`${IMG}/WF1_Canvas.png`}
              alt="The n8n canvas for workflow one, showing the schedule trigger, label list code node, Gmail node, and the branch that splits attachments through three folder sub-workflows into a Drive upload."
              caption="Workflow 1 on the n8n canvas — the pipeline forks after Normalize: one branch logs to Sheets, the other resolves folders and uploads."
              width={2940}
              height={1670}
              sizes="(max-width: 920px) 100vw, 920px"
              priority
            />
          </div>

          <div className="mb-9">
            <VideoEmbed
              id="fbdoSz_wpms"
              title="Demo: multi-label Gmail to Google Sheets and Drive workflow running in n8n"
              caption="Demo — polling the monitored labels, logging each email to Sheets and archiving its attachments into the nested Drive path."
            />
          </div>

          <P>
            A Schedule Trigger polls Gmail every five minutes. Sender name,
            email, subject, date and attachment count are written to a Google
            Sheet; attachments are uploaded to Drive under{" "}
            <InlineCode>label / date received / sender name</InlineCode>, keeping
            their original filenames. Processed emails are marked as read so
            nothing is handled twice.
          </P>

          <SubHead>Label List</SubHead>
          <P>
            Defining the monitored labels in a Code node makes adding a label a
            one-line change rather than a structural one. The Gmail node then
            runs once per label, so each email carries its label through the rest
            of the pipeline.
          </P>
          <CodeBlock filename="n8n Code node — label list" code={LABEL_LIST} />

          <SubHead>Gmail search filter</SubHead>
          <P>
            <InlineCode>Simplify</InlineCode> is off and{" "}
            <InlineCode>Download Attachments</InlineCode> is on, so the raw
            message fields and the binary attachments are both available
            downstream.
          </P>
          <CodeBlock
            filename="Gmail node — search filter"
            language="text"
            code={GMAIL_FILTER}
          />

          <SubHead>Normalize</SubHead>
          <P>
            An Edit Fields node flattens the Gmail response into the exact
            columns the spreadsheet expects.
          </P>
          <CodeBlock
            filename="Edit Fields — normalize"
            language="text"
            code={NORMALIZE}
          />

          <SubHead>Split Attachments</SubHead>
          <P>
            One email with three attachments has to become three items, one per
            file, so each can be uploaded independently. Binary data does not
            survive the Normalize node, so the attachments are pulled back from
            the Gmail node by index.
          </P>
          <CodeBlock
            filename="n8n Code node — split attachments"
            code={SPLIT_ATTACHMENTS}
          />

          <SubHead>Folder chain</SubHead>
          <P>
            Three Set and Execute Sub-workflow pairs build the nested path one
            level at a time, each passing the previous level&rsquo;s{" "}
            <InlineCode>folderId</InlineCode> down as the new parent.
          </P>
          <CodeBlock
            filename="Set nodes — nested folder path"
            language="text"
            code={FOLDER_CHAIN}
          />

          <SubHead>Upload to Drive</SubHead>
          <P>
            The sub-workflow returns the folder ID but not the file, so a Merge
            node set to combine by position reunites each attachment with its
            resolved destination before upload.
          </P>
          <CodeBlock
            filename="Google Drive — upload file"
            language="text"
            code={DRIVE_UPLOAD}
          />

          <SubHead>Mark as Read</SubHead>
          <P>
            Placed after the Sheets node so every email is marked, including
            ones with no attachments.
          </P>
          <CodeBlock
            filename="Gmail — mark as read"
            language="text"
            code={MARK_READ}
          />

          <div className="mt-9">
            <Shot
              src={`${IMG}/WF1-Execution.png`}
              alt="An n8n execution view of workflow one, with each node showing its processed item count after a successful run."
              caption="A completed run — item counts show the fan-out from emails to individual attachments."
              width={1922}
              height={1580}
              sizes="(max-width: 920px) 100vw, 920px"
            />
          </div>
        </section>

        {/* ── 3. SUB-WORKFLOW ─────────────────────────────── */}
        <section style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <SectionHeader num="03" title="Get or Create Folder" />

          <Kicker>Shared sub-workflow</Kicker>

          <FlowChain
            steps={[
              "Execute Workflow Trigger",
              "Drive — search folder",
              "IF — id is not empty",
              "Drive — create folder",
              "Code — return folderId",
            ]}
          />

          <div className="mb-9">
            <Shot
              src={`${IMG}/Get-or-create-folder-workflow.png`}
              alt="The n8n canvas for the Get or Create Folder sub-workflow, showing the execute-workflow trigger, a Drive search, an IF node, and a create-folder node on the false branch, both routes converging on a Return code node."
              caption="The sub-workflow both pipelines call — search first, create only on a miss, return the same shape either way."
              width={2538}
              height={1674}
              sizes="(max-width: 920px) 100vw, 920px"
            />
          </div>

          <P>
            Google Drive has no create-if-not-exists operation, so folder
            creation was extracted into a reusable sub-workflow. It searches for
            a folder by name within a parent and only creates one when the
            search returns nothing.
          </P>

          <SubHead>Search query</SubHead>
          <P>
            The apostrophe is escaped so sender names like{" "}
            <InlineCode>O&rsquo;Brien</InlineCode> do not break the query, and{" "}
            <InlineCode>Always Output Data</InlineCode> is enabled so a miss
            returns an empty item instead of halting the branch.
          </P>
          <CodeBlock
            filename="Google Drive — search folder query"
            language="text"
            code={SEARCH_QUERY}
          />

          <SubHead>The branch</SubHead>
          <CodeBlock
            filename="IF — condition"
            language="text"
            code={IF_CONDITION}
          />
          <CodeBlock
            filename="Google Drive — create folder (false branch)"
            language="text"
            code={CREATE_FOLDER}
          />

          <SubHead>Return</SubHead>
          <P>
            Both branches converge on one Code node, so the caller gets an
            identical shape whether the folder was found or freshly created.
          </P>
          <CodeBlock filename="n8n Code node — return" code={SUB_RETURN} />

          <P>
            The calling nodes use <InlineCode>Run once for each item</InlineCode>
            , which processes items sequentially. Without that, two files headed
            for the same new folder would search in parallel, both miss, and both
            create it.
          </P>
        </section>

        {/* ── 4. WORKFLOW 2 ───────────────────────────────── */}
        <section style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <SectionHeader num="04" title="Telegram Receipt Processing" />

          <Kicker>Workflow 2 — Event-driven</Kicker>

          <FlowChain
            steps={[
              "Telegram Trigger",
              "IF — has photo?",
              "Telegram — get photo",
              "Gemini — read receipt",
              "Code — parse receipt",
              "Sheets — append row",
              "Sub-workflow — date folder",
              "Merge — by position",
              "Drive — upload",
              "Telegram — confirm",
            ]}
          />

          <div className="mb-9">
            <Shot
              src={`${IMG}/WF2_Canvas.png`}
              alt="The n8n canvas for workflow two, showing the Telegram trigger, an IF node filtering non-photo messages, the Gemini node, and the branch that archives the photo to Drive before replying."
              caption="Workflow 2 on the n8n canvas — the IF node turns away anything that isn't a photo before Gemini is ever called."
              width={2940}
              height={1670}
              sizes="(max-width: 920px) 100vw, 920px"
            />
          </div>

          <div className="mb-9">
            <VideoEmbed
              id="jblhpMIQ8Ak"
              title="Demo: Telegram receipt processing workflow running in n8n"
              caption="Demo — a receipt photo sent to the bot, read by Gemini, written to Sheets and archived to Drive before the reply comes back."
            />
          </div>

          <P>
            Receipt photos sent to a Telegram bot are read by Google Gemini,
            which returns structured JSON. Parsed data goes to a Google Sheet,
            the original photo is archived to Drive grouped by submission date,
            and the bot replies with a confirmation.
          </P>

          <SubHead>Has Photo?</SubHead>
          <P>
            <InlineCode>message.photo</InlineCode> is an array, so the check
            counts its entries rather than testing for existence. Non-photo
            messages fall to the false branch and get a prompt back.
          </P>
          <CodeBlock filename="IF — has photo?" language="text" code={HAS_PHOTO} />

          <SubHead>Get Photo</SubHead>
          <CodeBlock
            filename="Telegram — get photo"
            language="text"
            code={GET_PHOTO}
          />

          <SubHead>Read Receipt</SubHead>
          <P>
            Gemini runs in Analyze Image mode against the binary field{" "}
            <InlineCode>data</InlineCode>. The prompt is explicit about returning
            JSON only, and about using <InlineCode>null</InlineCode> rather than
            guessing at a field it cannot read.
          </P>
          <CodeBlock
            filename="Google Gemini — prompt"
            language="text"
            code={GEMINI_PROMPT}
          />

          <SubHead>Parse Receipt</SubHead>
          <P>
            The parse is wrapped in a try/catch and every field falls back to a
            default. An unreadable receipt or an unexpected model response logs a
            row reading &ldquo;Not found&rdquo; instead of failing the run.
          </P>
          <CodeBlock
            filename="n8n Code node — parse receipt"
            code={PARSE_RECEIPT}
          />

          <SubHead>Save the photo</SubHead>
          <CodeBlock
            filename="Set node — receipt folder"
            language="text"
            code={RECEIPT_FOLDER}
          />
          <CodeBlock
            filename="Google Drive — save photo"
            language="text"
            code={SAVE_PHOTO}
          />

          <SubHead>Replies</SubHead>
          <CodeBlock
            filename="Telegram — bot replies"
            language="text"
            code={TELEGRAM_REPLIES}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 mt-9 md:items-start">
            <Shot
              src={`${IMG}/WF2-Execution.png`}
              alt="An n8n execution view of workflow two, showing a successful run from the Telegram trigger through Gemini to the Drive upload and confirmation reply."
              caption="A successful run — trigger through to the confirmation message."
              width={1916}
              height={1578}
              sizes="(max-width: 768px) 100vw, 446px"
            />
            <Shot
              src={`${IMG}/Tg-bot-convo.png`}
              alt="A Telegram chat with the bot: a receipt photo sent by the user and the bot's reply confirming the merchant, amount and currency it saved."
              caption="The bot's side of it — a photo in, a confirmation with the parsed merchant and total back."
              width={860}
              height={1626}
              sizes="(max-width: 768px) 320px, 340px"
              maxWidth={340}
            />
          </div>
        </section>

        {/* ── 5. LOCAL SETUP ──────────────────────────────── */}
        <section style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <SectionHeader num="05" title="Local Setup" />

          <P>
            Telegram requires a public HTTPS webhook, which a localhost instance
            does not have. A Cloudflare tunnel exposes the local instance, and{" "}
            <InlineCode>WEBHOOK_URL</InlineCode> tells n8n which address to
            register with Telegram. Workflow 1 needs none of this, since Gmail is
            polled rather than pushed.
          </P>
          <CodeBlock
            filename="Terminal — tunnel and start"
            language="bash"
            code={TUNNEL_SETUP}
          />
        </section>

        {/* ── 6. TECHNICAL NOTES ──────────────────────────── */}
        <section style={{ paddingTop: "48px", paddingBottom: "96px" }}>
          <SectionHeader num="06" title="Technical Notes" />

          <ul className="list-none p-0 m-0">
            <Challenge num="01" title="Binary data does not survive every node">
              Edit Fields and API nodes drop the binary payload, so an
              attachment cannot simply travel the whole pipeline alongside its
              metadata. Both workflows branch instead and recombine with a Merge
              node set to combine by position, which reunites each file with the
              destination folder resolved on the other branch.
            </Challenge>

            <Challenge num="02" title="Concurrent folder creation">
              Two files headed for the same not-yet-existing folder would both
              search, both miss, and both create it — leaving duplicate folders
              with the same name, which Drive permits. Calling the sub-workflow
              with <InlineCode>Run once for each item</InlineCode> serializes the
              lookups so the second file finds what the first one made.
            </Challenge>

            <Challenge num="03" title="Transient API failures">
              Every node that calls an external API has Retry On Fail enabled,
              three tries two seconds apart. That covers the overload errors
              Gemini returns under load, which would otherwise fail an entire run
              over one momentarily busy model.
            </Challenge>

            <Challenge num="04" title="Query escaping">
              Drive search queries are strings with single-quoted values, so a
              sender named <InlineCode>O&rsquo;Brien</InlineCode> closes the
              quote early and breaks the query. Apostrophes are escaped before
              being interpolated in.
            </Challenge>
          </ul>
        </section>
      </div>
    </>
  );
}
