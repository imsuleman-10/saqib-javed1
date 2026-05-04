import type { Metadata } from "next";
import SkillsPage from "@/components/sections/SkillsSection";

export const metadata: Metadata = {
  title: "Skills",
  description: "Saqib Javed's technical skills — Laravel, React, Next.js, PHP, MySQL, and more.",
};

export default function Page() {
  return <SkillsPage />;
}
