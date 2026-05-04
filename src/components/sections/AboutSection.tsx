"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, MapPin, Code2, BookOpen, ArrowRight, Rocket, ShieldCheck, Zap } from "lucide-react";

const up = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

const cards = [
  { icon: MapPin,         label: "Location",       value: "Lahore, Pakistan",                           accent: "var(--cyan)" },
  { icon: GraduationCap,  label: "University",      value: "UCP — Software Engineering (4th Sem.)",      accent: "var(--purple)" },
  { icon: BookOpen,       label: "Intermediate",    value: "Govt. Islamia College Civil Lines — 983 Marks", accent: "#34d399" },
  { icon: Code2,          label: "Specialization",  value: "Laravel Developer & Frontend Engineer",      accent: "#fbbf24" },
];

function InfoCard({ icon: Icon, label, value, accent, delay }: { icon: any; label: string; value: string; accent: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      style={{
        padding: "20px 22px",
        borderRadius: 14,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${accent}44`; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
    >
      <div style={{ width: 38, height: 38, borderRadius: 10, background: `${accent}12`, border: `1px solid ${accent}28`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={17} color={accent} />
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 4 }}>{label}</p>
        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", fontWeight: 500, lineHeight: 1.4 }}>{value}</p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <main className="site-page">
      <div className="container" style={{ paddingTop: 72, paddingBottom: 96 }}>

        {/* ── Header ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center", marginBottom: 64 }}>
          <div style={{ flex: 1, minWidth: 320 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>About Me</p>
            <h1 className="heading-xl" style={{ marginBottom: 20, maxWidth: 600 }}>
              Passionate Builder,<br />
              <span style={{ color: "var(--cyan)" }}>Problem Solver</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-2)", lineHeight: 1.75, maxWidth: 580 }}>
              I'm a software engineering student and developer from Lahore who loves crafting clean,
              purposeful applications — from backend APIs to pixel-perfect UIs.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ 
              width: "clamp(240px, 25vw, 350px)", 
              aspectRatio: "3/4", 
              borderRadius: "20px", 
              overflow: "hidden", 
              border: "1px solid var(--border)",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
              position: "relative",
              background: "rgba(255,255,255,0.02)"
            }}
          >
            <img 
              src="/Gemini_Generated_Image_oq7blxoq7blxoq7b.png" 
              alt="Muhammad Saqib Javed" 
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </motion.div>

        </div>


        {/* ── Two column ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "start", marginBottom: 80 }}>

          {/* Left — Story */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: 20 }}>My Story & Mission</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p className="body-text">
                I started my tech journey with a strong academic foundation — scoring{" "}
                <strong style={{ color: "#fff" }}>983 marks</strong> in intermediate at Govt. Islamia
                College Civil Lines, Lahore. This built my analytical thinking before I ever wrote a line of code.
              </p>
              <p className="body-text">
                I then pursued an intensive <strong style={{ color: "#fff" }}>Laravel training</strong> at
                Yashfeen Education System (Shahdara), mastering MVC architecture, Eloquent ORM, REST APIs,
                and production deployment patterns. My focus has always been on writing code that isn't just functional, 
                but maintainable and scalable.
              </p>
              <p className="body-text">
                Today I'm in my 4th semester of{" "}
                <strong style={{ color: "#fff" }}>Software Engineering at UCP</strong>, combining
                academic depth with real project experience. I bridge backend logic and frontend craft
                to deliver complete, polished products that solve real problems.
              </p>
              <p className="body-text" style={{ borderLeft: "2px solid var(--cyan)", paddingLeft: 16, marginTop: 8, fontStyle: "italic", color: "var(--text-3)" }}>
                "My mission is to build digital solutions that empower businesses and simplify user lives through clean architecture and intuitive design."
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
              <Link href="/projects" className="btn btn-cyan" style={{ fontSize: "0.85rem", padding: "10px 22px" }}>
                View Projects <ArrowRight size={15} />
              </Link>
              <Link href="/skills" className="btn btn-ghost" style={{ fontSize: "0.85rem", padding: "10px 22px" }}>
                See Skills
              </Link>
            </div>
          </motion.div>

          {/* Right — Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {cards.map((c, i) => (
              <InfoCard key={c.label} {...c} delay={0.15 + i * 0.08} />
            ))}
          </div>
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          {[
            { stat: "6+",  label: "Projects Built" },
            { stat: "983", label: "Intermediate Score" },
            { stat: "4th", label: "Semester at UCP" },
          ].map((s, i) => (
            <div
              key={s.stat}
              style={{
                padding: "32px 24px",
                textAlign: "center",
                background: "var(--surface)",
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <p style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--cyan)", lineHeight: 1, marginBottom: 8 }}>{s.stat}</p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-3)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      {/* ══════════════════════════════════════
          CORE VALUES
      ══════════════════════════════════════ */}
      <section style={{ padding: "0 0 100px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            {[
              { 
                title: "Scalability First", 
                desc: "I don't just build for today. I design architectures that can handle growth, whether it's through optimized database schemas or modular frontend components.",
                icon: <Rocket size={24} color="var(--cyan)" />
              },
              { 
                title: "Security by Design", 
                desc: "Security isn't an afterthought. I implement best practices in authentication, authorization, and data validation to ensure user safety.",
                icon: <ShieldCheck size={24} color="#34d399" />
              },
              { 
                title: "User-Centric UX", 
                desc: "Code is meaningless if the user can't navigate. I prioritize clean interfaces and intuitive flows in every application I build.",
                icon: <Zap size={24} color="#fbbf24" />
              }
            ].map((v, i) => (
              <motion.div key={v.title} {...up(i * 0.1)}
                style={{ background: "var(--surface)", padding: 32, borderRadius: 24, border: "1px solid var(--border)" }}>
                <div style={{ marginBottom: 20 }}>{v.icon}</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: "var(--text-2)", lineHeight: 1.6 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE TOOLKIT (Detailed)
      ══════════════════════════════════════ */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container">
          <motion.div {...up(0)} style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 className="heading-lg">My Specialized Toolkit</h2>
            <p style={{ color: "var(--text-2)", maxWidth: 600, margin: "16px auto 0" }}>
              Beyond just languages, these are the technologies I live and breathe daily to deliver high-quality software.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { category: "Backend Mastery", tools: ["Laravel 11", "PHP 8.3", "Node.js", "MySQL / PostgreSQL"] },
              { category: "Modern Frontend", tools: ["React 18+", "Next.js 15", "TypeScript", "Tailwind CSS"] },
              { category: "Deployment & Dev", tools: ["Docker", "Git / GitHub", "Vercel", "Shared/Cloud Hosting"] },
              { category: "Database & Cache", tools: ["Redis", "Eloquent ORM", "SQL Optimization", "Migrations"] }
            ].map((group, i) => (
              <motion.div key={group.category} {...up(i * 0.1)}
                style={{ padding: 24, borderRadius: 20, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h4 style={{ color: "var(--cyan)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>{group.category}</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {group.tools.map(tool => (
                    <li key={tool} style={{ color: "var(--text-1)", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--cyan)" }} />
                      <span style={{ fontSize: "0.95rem" }}>{tool}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT CALLOUT
      ══════════════════════════════════════ */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container">
          <motion.div {...up(0)} style={{ background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)", borderRadius: 32, padding: "80px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            {/* Background pattern */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.1, background: "radial-gradient(circle at 2px 2px, #000 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#000", marginBottom: 20, position: "relative" }}>
              Looking for a Reliable Partner?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(0,0,0,0.7)", maxWidth: 600, margin: "0 auto 32px", fontWeight: 500, position: "relative" }}>
              I am currently open to freelance opportunities and collaborative projects. Let&apos;s build something that matters.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, position: "relative" }}>
              <a href="https://wa.me/923491691260" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "#000", color: "#fff", padding: "16px 32px" }}>
                Connect on WhatsApp
              </a>
              <Link href="/contact" className="btn btn-ghost" style={{ borderColor: "#000", color: "#000" }}>
                Send an Email
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
