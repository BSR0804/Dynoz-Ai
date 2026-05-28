import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      { url: "/full_logo1.webp", type: "image/webp" },
    ],
    shortcut: "/full_logo1.webp",
    apple: "/full_logo1.webp",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
