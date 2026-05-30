import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor";
import Intro  from "@/components/intro";
import ScrollProgress from "@/components/scroll-progress";
import FloatingOrbs from "@/components/floating-orbs";
import ScrollSkew from "@/components/scroll-skew";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dynoz AI — Where Service Meets Intelligence",
  description:
    "The AI operations layer for hospitality and travel. Multilingual AI voice agents that handle every guest call, across the full guest journey, 24/7.",
  icons: {
    icon: [
      { url: "/dynoz-d.png", type: "image/png" },
    ],
    shortcut: "/dynoz-d.png",
    apple: "/dynoz-d.png",
  },
  openGraph: {
    title: "Dynoz AI — Where Service Meets Intelligence",
    description:
      "AI voice agents for hospitality that handle reservations, in-stay requests, and feedback in 40+ languages.",
    url: "https://dynoz.ai",
    siteName: "Dynoz AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynoz AI",
    description: "The AI operations layer for hospitality and travel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <FloatingOrbs />
        <ScrollSkew />
        <Intro />
        <Cursor />
        <div className="relative" style={{ zIndex: 1, skewY: "var(--scroll-skew, 0deg)" } as any}>{children}</div>
      </body>
    </html>
  );
}
