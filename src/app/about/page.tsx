import type { Metadata } from "next";
import AboutPage from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Muhammad Saqib Javed — his background, education, and passion for software development.",
};

export default function Page() {
  return <AboutPage />;
}
