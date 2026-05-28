import type { Metadata } from "next";
import ContactPage from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact — Dynoz AI",
  description:
    "Talk to the Dynoz team. Request a demo, explore a partnership, or get product support.",
};

export default function Contact() {
  return <ContactPage />;
}
