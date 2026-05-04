import type { Metadata } from "next";
import ProjectsPage from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio projects by Saqib Javed — E-Learning, AI Chatbots, Hospital Systems, and more.",
};

export default function Page() {
  return <ProjectsPage />;
}
