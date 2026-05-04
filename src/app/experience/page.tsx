import type { Metadata } from "next";
import ExperiencePage from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience",
  description: "Training and education timeline of Saqib Javed — Laravel training at Yashfeen Education System, UCP, and more.",
};

export default function Page() {
  return <ExperiencePage />;
}
