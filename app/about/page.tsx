import type { Metadata } from "next";
import AboutPage from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About — Dynoz AI",
  description:
    "Dynoz is an AI operations layer for hospitality and travel. Our mission is to transform how the industry serves guests through AI.",
};

export default function About() {
  return <AboutPage />;
}
