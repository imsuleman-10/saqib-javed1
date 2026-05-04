import type { Metadata } from "next";
import HeroSection from "@/components/Hero";

export const metadata: Metadata = {
  title: "Muhammad Saqib Javed — Laravel Developer & Frontend Engineer",
  description: "Official portfolio of Muhammad Saqib Javed, an expert Laravel Developer and Frontend Engineer based in Lahore, Pakistan. Specializing in high-performance web apps.",
  keywords: ["Muhammad Saqib Javed", "Saqib Javed", "Laravel Developer", "Frontend Engineer", "UCP", "Software Engineering"],
};

export default function HomePage() {
  return <HeroSection />;
}
