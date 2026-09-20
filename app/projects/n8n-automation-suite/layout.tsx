import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "n8n Automation Suite — Zymer Fernando",
  description:
    "Two production n8n workflows that automate email attachment archiving and AI-powered receipt processing, built as a technical assessment.",
};

export default function ProjectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
