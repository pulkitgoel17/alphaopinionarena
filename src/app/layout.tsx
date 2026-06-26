import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlphaOpinionArena",
  description: "AI asks. You answer. The world compares.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}