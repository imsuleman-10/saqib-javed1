import type { Metadata } from "next";
import ContactPage from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Saqib Javed for projects, collaborations, or opportunities.",
};

export default function Page() {
  return <ContactPage />;
}
