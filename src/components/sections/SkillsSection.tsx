"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Zap, Users, Server, Cpu, Monitor } from "lucide-react";

type SkillItem = { name: string; pct: number };
type Group = {
  title: string;
  desc: string;
  fillClass: string;
  labelColor: string;
  skills: SkillItem[];
};

const groups: Group[] = [
  {
    title: "Frontend Engineering",
    desc: "Crafting immersive, high-performance user interfaces",
    fillClass: "skill-fill-cyan",
    labelColor: "var(--cyan)",
    skills: [
      { name: "React / Next.js 15",   pct: 90 },
      { name: "TypeScript / ES6+",   pct: 88 },
      { name: "Tailwind CSS / SCSS", pct: 95 },
      { name: "Framer Motion (Animations)", pct: 85 },
    ],
  },
  {
    title: "Backend Architecture",
    desc: "Building robust APIs and secure server-side logic",
    fillClass: "skill-fill-purple",
    labelColor: "var(--purple)",
    skills: [
      { name: "Laravel (MVC & REST)", pct: 92 },
      { name: "PHP 8.x / OOP",       pct: 90 },
      { name: "MySQL / PostgreSQL",  pct: 88 },
      { name: "Auth (Passport/Sanctum)", pct: 85 },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    desc: "Deployment, environment management, and tools",
    fillClass: "skill-fill-amber",
    labelColor: "#fbbf24",
    skills: [
      { name: "Git / GitHub Actions", pct: 90 },
      { name: "Redis / Caching",     pct: 75 },
      { name: "Docker (Learning)",   pct: 60 },
      { name: "Linux / Apache / Nginx", pct: 82 },
    ],
  },
];

const techBadges = [
  "Laravel", "PHP 8.3", "MySQL", "PostgreSQL", "React", "Next.js", "TypeScript",
  "Tailwind CSS", "Redux", "Zustand", "Blade", "Eloquent ORM",
  "Git", "GitHub", "REST API", "Postman", "Redis", "Docker", "Nginx",
];

export default function SkillsSection() {
  return (
    <main className="site-page">
      <div className="container" style={{ paddingTop: 72, paddingBottom: 96 }}>

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 64 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Technical Skills</p>
          <h1 className="heading-xl" style={{ marginBottom: 20 }}>
            Skills &amp;{" "}
            <span style={{ color: "var(--cyan)" }}>Technologies</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-2)", lineHeight: 1.75, maxWidth: 520 }}>
            A focused set of tools and technologies I use daily to build scalable, high-quality web applications.
          </p>
        </motion.div>

        {/* ── Skill groups ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, marginBottom: 80 }}>
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card"
              style={{ padding: 32 }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>{g.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-3)", marginBottom: 24 }}>{g.desc}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{s.name}</span>
                      <span style={{ fontSize: "0.8rem", color: g.labelColor, fontFamily: "var(--font-geist-mono)" }}>{s.pct}%</span>
                    </div>
                    <div className="skill-track">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.pct}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className={g.fillClass}
                        style={{ height: "100%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Professional Attributes (Better Soft Skills) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>Human Factor</p>
          <h2 className="heading-lg" style={{ marginBottom: 48 }}>Professional Attributes</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { 
                title: "Analytical Thinking", 
                desc: "Breaking down complex engineering problems into manageable solutions.",
                icon: <Brain size={20} color="var(--cyan)" />,
                bg: "rgba(34,211,238,0.05)"
              },
              { 
                title: "Clear Communication", 
                desc: "Explaining technical concepts to non-technical stakeholders effectively.",
                icon: <MessageSquare size={20} color="#a78bfa" />,
                bg: "rgba(167,139,250,0.05)"
              },
              { 
                title: "Rapid Learning", 
                desc: "Staying ahead of the curve by quickly adopting new frameworks and patterns.",
                icon: <Zap size={20} color="#fbbf24" />,
                bg: "rgba(251,191,36,0.05)"
              },
              { 
                title: "Team Leadership", 
                desc: "Fostering collaboration and maintaining high standards within a dev team.",
                icon: <Users size={20} color="#34d399" />,
                bg: "rgba(52,211,153,0.05)"
              }
            ].map((attr, i) => (
              <motion.div
                key={attr.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: 24, borderRadius: 20, background: attr.bg, border: "1px solid rgba(255,255,255,0.03)" }}
              >
                <div style={{ marginBottom: 16 }}>{attr.icon}</div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>{attr.title}</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>{attr.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Tech Stack Cloud ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ 
            marginTop: 80, padding: "48px 32px", borderRadius: 24, 
            background: "var(--surface)", border: "1px solid var(--border)", textAlign: "center" 
          }}
        >
          <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--text-3)", marginBottom: 24 }}>The Full Stack</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {techBadges.map((badge) => (
              <span key={badge} className="badge badge-cyan" style={{ fontSize: "0.75rem", padding: "6px 14px", opacity: 0.8 }}>
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
