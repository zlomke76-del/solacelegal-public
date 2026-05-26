import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solacelegal.ai"),
  title: {
    default: "SolaceLegal | AI Legal Decision Control",
    template: "%s | SolaceLegal",
  },
  description:
    "SolaceLegal is a governed legal decision-control layer that blocks unsupported legal action before consequence occurs.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "SolaceLegal | AI Legal Decision Control",
    description:
      "A governed legal decision-control layer for organizations that cannot allow unsupported legal consequence.",
    url: "https://www.solacelegal.ai",
    siteName: "SolaceLegal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolaceLegal | AI Legal Decision Control",
    description: "If a legal action cannot be justified, it does not happen.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
