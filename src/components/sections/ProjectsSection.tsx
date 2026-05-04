"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { Github } from "@/components/Icons";


type Project = {
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  github: string;
  live?: string;
  category: "AI" | "Web App" | "Management";
};

const projects: Project[] = [
  {
    title: "Eco-LMS: Enterprise Learning System",
    desc: "A scalable multi-tenant LMS for corporate training. Features include automated certification, custom reporting dashboards, and real-time student performance analytics using advanced data visualization.",
    features: ["Multi-tenant Architecture", "SCORM Compatibility", "Automated Grading", "Visual Analytics"],
    tech: ["Laravel 11", "React", "MySQL", "Chart.js"],
    github: "https://github.com/saqib-1030",
    category: "Web App",
  },
  {
    title: "NexusAI: Advanced Customer Support",
    desc: "A production-grade AI agent that integrates with internal knowledge bases to provide context-aware support. Uses vector embeddings for high-accuracy retrieval and response generation.",
    features: ["RAG (Retrieval-Augmented Generation)", "Vector Database Integration", "Context Awareness", "Streaming API"],
    tech: ["Next.js", "OpenAI GPT-4o", "Pinecone", "LangChain"],
    github: "https://github.com/saqib-1030",
    category: "AI",
  },
  {
    title: "MedSync: Hospital ERP",
    desc: "Comprehensive Healthcare Resource Planning system. Manages patient workflows, laboratory integrations, digital prescriptions, and automated insurance claims processing for large clinics.",
    features: ["Patient Workflow Management", "HL7/FHIR Standards", "Digital RX Generation", "Billing Automation"],
    tech: ["Laravel", "PostgreSQL", "Livewire", "Tailwind CSS"],
    github: "https://github.com/saqib-1030",
    category: "Management",
  },
  {
    title: "PharmaFlow: Inventory Intelligence",
    desc: "Smart inventory management for large-scale pharmacies. Features include automated restock alerts based on sales velocity, expiry tracking, and integrated POS systems.",
    features: ["Stock Velocity Prediction", "Expiry Alerts", "POS Integration", "Supplier Management"],
    tech: ["Laravel", "PHP 8.3", "Alpine.js", "MySQL"],
    github: "https://github.com/saqib-1030",
    category: "Management",
  },
  {
    title: "SkyNav AI: Flight Booking Engine",
    desc: "Next-gen airline reservation platform. Uses AI to predict dynamic pricing trends and provides personalized travel recommendations based on user history and real-time market data.",
    features: ["Dynamic Pricing Engine", "AI Route Optimization", "Personalized Itineraries", "Real-time Flight Tracking"],
    tech: ["Laravel", "Python", "React", "Radix UI"],
    github: "https://github.com/saqib-1030",
    category: "AI",
  },
];

const ALL_CATS = ["All", "AI", "Web App", "Management"] as const;

const catBadge: Record<string, string> = {
  AI:         "badge badge-cyan",
  "Web App":  "badge badge-purple",
  Management: "badge badge-amber",
};

export default function ProjectsSection() {
  const [active, setActive] = useState<"All" | Project["category"]>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="site-page">
      <div className="container" style={{ paddingTop: 72, paddingBottom: 96 }}>

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 48 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>My Work</p>
          <h1 className="heading-xl" style={{ marginBottom: 20 }}>
            Featured{" "}
            <span style={{ color: "var(--cyan)" }}>Projects</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-2)", lineHeight: 1.75, maxWidth: 520 }}>
            Real-world applications built with production-ready code across full-stack web and AI domains.
          </p>
        </motion.div>

        {/* ── Filter tabs ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {ALL_CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat as any)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                cursor: "pointer",
                border: "1px solid",
                transition: "all 0.18s",
                borderColor: active === cat ? "var(--cyan)" : "var(--border)",
                background: active === cat ? "var(--cyan-dim)" : "transparent",
                color: active === cat ? "var(--cyan)" : "var(--text-2)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <motion.div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                style={{
                  padding: "24px 24px 20px",
                  borderRadius: 16,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.14)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Top row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <span className={catBadge[p.category]}>{p.category}</span>
                  <div style={{ display: "flex", gap: 8 }}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub"
                      style={{ color: "rgba(255,255,255,0.3)", transition: "color 0.15s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
                    >
                      <Github size={17} />
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" title="Live"
                        style={{ color: "rgba(255,255,255,0.3)", transition: "color 0.15s" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.35 }}>{p.title}</h2>

                {/* Desc */}
                <p style={{ fontSize: "0.865rem", color: "var(--text-2)", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{p.desc}</p>
                
                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 20 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ fontSize: "0.8rem", color: "var(--text-1)", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
                      <Check size={12} color="var(--cyan)" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{ padding: "4px 10px", borderRadius: 6, background: "rgba(255,255,255,0.04)", fontFamily: "var(--font-geist-mono)", fontSize: "0.7rem", color: "var(--text-3)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
