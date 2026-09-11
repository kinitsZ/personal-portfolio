import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Application Tracker — Zymer Fernando",
  description:
    "Two n8n automations — one event-driven, one scheduled — that log job applications from a Google Form and surface stale follow-ups.",
};

export default function ProjectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
