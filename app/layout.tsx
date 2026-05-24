import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CommitScore – Score commit message quality across your team",
  description:
    "Analyze commit messages for clarity, convention compliance, and context. Generate team scorecards and improvement suggestions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="9420d035-aa23-456b-82f8-7650acce0ccb"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
