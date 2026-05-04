"use client";

import { motion } from "framer-motion";

interface Experience {
  period: string;
  role: string;
  org: string;
  location: string;
  type: string;
  typeColor: string;
  typeBg: string;
  desc: string;
  impact?: string;
  tags: string[];
};

const items: Experience[] = [
  {
    period: "2024 — Present",
    role: "BS Software Engineering",
    org: "University of Central Punjab (UCP)",
    location: "Lahore, Pakistan",
    type: "University",
    typeColor: "var(--cyan)",
    typeBg: "rgba(34,211,238,0.1)",
    desc: "Maintaining a strong academic record while focusing on core engineering principles. Key coursework includes: \n• Advanced Data Structures & Algorithms\n• Object-Oriented Analysis and Design\n• Database Management Systems (SQL)\n• Software Requirements Engineering",
    impact: "Top 10% of batch; active member of the university's technical developer community.",
    tags: ["Data Structures", "Algorithms", "OOP", "Database Systems", "Software Architecture"],
  },
  {
    period: "2024",
    role: "Laravel Development Training",
    org: "Yashfeen Education System",
    location: "Shahdara, Lahore",
    type: "Training",
    typeColor: "var(--purple)",
    typeBg: "rgba(167,139,250,0.1)",
    desc: "Successfully completed a 6-month intensive professional development track. Highlights include:\n• Mastering MVC architecture and Eloquent ORM relationships\n• Building secure RESTful APIs with Sanctum/Passport\n• Implementing complex business logic and background jobs\n• Deployment strategies on shared and cloud hosting",
    impact: "Built and deployed 3 full-stack enterprise-grade applications during the tenure.",
    tags: ["Laravel MVC", "Eloquent ORM", "REST API", "Authentication", "Deployment"],
  },
  {
    period: "2022 — 2024",
    role: "ICS with Physics (Intermediate)",
    org: "Govt. Islamia College Civil Lines",
    location: "Lahore, Pakistan",
    type: "Education",
    typeColor: "#34d399",
    typeBg: "rgba(52,211,153,0.1)",
    desc: "Graduated with distinction (983/1100 marks). Focused on:\n• Mathematics and Physics fundamentals\n• Logical problem-solving and computational thinking\n• Early exposure to computer science principles",
    impact: "Achieved 983 / 1100 marks, securing admission to top engineering programs.",
    tags: ["983 / 1100 Marks", "Mathematics", "Physics", "Computer Science"],
  },
];

export default function ExperienceSection() {
  return (
    <main className="site-page">
      <div className="container" style={{ paddingTop: 72, paddingBottom: 96 }}>

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 64 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>My Journey</p>
          <h1 className="heading-xl" style={{ marginBottom: 20 }}>
            Training &amp;{" "}
            <span style={{ color: "var(--cyan)" }}>Education</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-2)", lineHeight: 1.75, maxWidth: 520 }}>
            A timeline of academic achievements and hands-on professional training that shaped my development career.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 23, top: 0, bottom: 0, width: 1, background: "var(--border)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingLeft: 64 }}>
            {items.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                style={{ position: "relative" }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -57,
                    top: 24,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: item.typeColor,
                    boxShadow: `0 0 10px ${item.typeColor}80`,
                    border: `2px solid ${item.typeColor}40`,
                    outline: `4px solid #000`,
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    padding: "28px 28px 24px",
                    borderRadius: 16,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = `${item.typeColor}40`)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                >
                  {/* Card top row */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                    <div>
                      {/* Type badge */}
                      <span
                        style={{
                          display: "inline-block",
                          padding: "3px 12px",
                          borderRadius: 99,
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: item.typeColor,
                          background: item.typeBg,
                          border: `1px solid ${item.typeColor}30`,
                          marginBottom: 10,
                        }}
                      >
                        {item.type}
                      </span>
                      <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{item.role}</h2>
                      <p style={{ fontSize: "0.9rem", fontWeight: 600, color: item.typeColor, marginTop: 4 }}>{item.org}</p>
                      <p style={{ fontSize: "0.78rem", color: "var(--text-3)", fontFamily: "var(--font-geist-mono)", marginTop: 3 }}>{item.location}</p>
                    </div>
                    <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem", color: "var(--text-3)", whiteSpace: "nowrap", paddingTop: 4 }}>{item.period}</span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "0.88rem", color: "var(--text-2)", lineHeight: 1.72, marginBottom: 12, whiteSpace: "pre-wrap" }}>{item.desc}</p>

                  {/* Impact */}
                  {item.impact && (
                    <div style={{ marginBottom: 18, padding: "10px 14px", borderRadius: 10, background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.1)" }}>
                      <p style={{ fontSize: "0.78rem", color: "var(--cyan)", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: "1rem" }}>✨</span> {item.impact}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "5px 12px",
                          borderRadius: 8,
                          background: "rgba(255,255,255,0.04)",
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "0.7rem",
                          color: "var(--text-3)",
                          border: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
