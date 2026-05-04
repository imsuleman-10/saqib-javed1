"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, GraduationCap, Code2, ExternalLink, CheckCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

// ─── DATA ───────────────────────────────────────────
const projects = [
  { title: "E-Learning Platform",        desc: "Full-featured LMS with course management, quizzes and progress tracking.", tech: ["Laravel", "React", "MySQL"], badge: "Web App", color: "#a78bfa" },
  { title: "AI Chatbot v2",              desc: "GPT-powered chatbot with context retention and custom personality tuning.", tech: ["Next.js", "OpenAI", "TypeScript"], badge: "AI", color: "#22d3ee" },
  { title: "Hospital Management System", desc: "Patient records, appointments, doctor schedules and billing in one place.", tech: ["Laravel", "Blade", "MySQL"], badge: "Management", color: "#fbbf24" },
  { title: "AI Airline Reservation",     desc: "Smart flight booking with AI seat recommendations and dynamic pricing.", tech: ["Laravel", "Python", "React"], badge: "AI", color: "#22d3ee" },
];

const skills = [
  { name: "Laravel",    pct: 88, color: "#ef4444" },
  { name: "PHP",        pct: 90, color: "#8b5cf6" },
  { name: "React",      pct: 85, color: "#22d3ee" },
  { name: "Next.js",    pct: 82, color: "#ffffff" },
  { name: "MySQL",      pct: 85, color: "#f59e0b" },
  { name: "Tailwind",   pct: 92, color: "#38bdf8" },
];

const services = [
  { title: "Backend Development",   desc: "Scalable REST APIs, MVC architecture and database design with Laravel & PHP.", icon: "⚙️" },
  { title: "Frontend Engineering",  desc: "Fast, responsive UIs built with React, Next.js and Tailwind CSS.", icon: "🎨" },
  { title: "Full-Stack Web Apps",   desc: "End-to-end web applications from database design to pixel-perfect UI.", icon: "🚀" },
  { title: "AI Integration",        desc: "Integrating OpenAI and LangChain into real-world web applications.", icon: "🤖" },
];

const stack = ["Laravel", "PHP", "React", "Next.js", "MySQL", "TypeScript", "Tailwind CSS", "Git", "REST API", "Postman", "Alpine.js", "Blade"];

const facts = [
  { icon: MapPin,        text: "Lahore, Pakistan" },
  { icon: GraduationCap, text: "Software Engineering — UCP, 4th Sem." },
  { icon: Code2,         text: "Laravel · React · Next.js" },
];

// ─── CARD STYLES ─────────────────────────────────────
const card: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: "24px",
  transition: "border-color 0.2s, transform 0.2s",
};

export default function HomePage() {
  return (
    <main style={{ background: "#000", paddingTop: 72 }}>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Grid bg */}
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 80% 80% at 50% 40%,black 30%,transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 40%,black 30%,transparent 100%)" }} />
        {/* Glow */}
        <div aria-hidden style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse,rgba(34,211,238,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 48, paddingBottom: 80, display: "flex", flexDirection: "row", alignItems: "center", gap: 60, flexWrap: "wrap" }}>

          <div style={{ flex: 1, minWidth: 320 }}>


          {/* Badge */}
          <motion.div {...up(0)} style={{ marginBottom: 32 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 99, background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.18)", fontFamily: "var(--font-geist-mono)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "rgba(34,211,238,0.9)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
              Available for freelance &amp; full-time opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...up(0.08)} style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.03em", color: "#fff", marginBottom: 24, maxWidth: 780 }}>
            Hi, I&apos;m{" "}
            <span style={{ color: "#22d3ee", textShadow: "0 0 48px rgba(34,211,238,0.35)" }}>
              Muhammad<br />Saqib Javed
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p {...up(0.14)} style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: "rgba(255,255,255,0.45)", marginBottom: 20 }}>
            Laravel Developer &nbsp;·&nbsp; Frontend Engineer &nbsp;·&nbsp; Full-Stack Builder
          </motion.p>

          {/* Desc */}
          <motion.p {...up(0.2)} style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.32)", maxWidth: 520, marginBottom: 40 }}>
            I build scalable web applications — clean backend APIs with Laravel and polished frontends with React &amp; Next.js.
          </motion.p>

          {/* CTAs */}
          <motion.div {...up(0.26)} style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 48 }}>
            <Link href="/projects" className="btn btn-cyan">View My Work <ArrowRight size={16} /></Link>
            <Link href="/about" className="btn btn-ghost">About Me</Link>
            <Link href="/contact" className="btn btn-ghost">Hire Me</Link>
          </motion.div>

          {/* Quick facts */}
          <motion.div {...up(0.32)} style={{ display: "flex", flexWrap: "wrap", gap: 20, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.07)", marginBottom: 40 }}>
            {facts.map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.38)", fontSize: "0.85rem" }}>
                <Icon size={14} color="#22d3ee" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div {...up(0.38)} style={{ display: "flex", gap: 12 }}>
            {[
              { Icon: Github,   href: "https://github.com/saqib-1030",                    label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-saqib-javed/", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.02)", color: "rgba(255,255,255,0.45)", fontSize: "0.83rem", fontWeight: 500, textDecoration: "none", transition: "all 0.18s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(34,211,238,0.4)"; el.style.color = "#22d3ee"; el.style.background = "rgba(34,211,238,0.06)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.09)"; el.style.color = "rgba(255,255,255,0.45)"; el.style.background = "rgba(255,255,255,0.02)"; }}
              >
                <Icon size={16} />{label}
              </a>
            ))}
          </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ 
              flex: "0 0 auto", 
              position: "relative",
              width: "clamp(300px, 35vw, 500px)",
              minHeight: "clamp(400px, 50vh, 600px)",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(34,211,238,0.2)",
              boxShadow: "0 20px 80px -20px rgba(34,211,238,0.3)",
              background: "rgba(255,255,255,0.02)"
            }}
          >
            <img 
              src="/Gemini_Generated_Image_oq7blxoq7blxoq7b.png" 
              alt="Muhammad Saqib Javed" 
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />

            {/* Overlay Gradient */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)" }} />
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ 
                position: "absolute", 
                bottom: 24, 
                left: 24, 
                padding: "10px 16px", 
                background: "rgba(0,0,0,0.8)", 
                backdropFilter: "blur(12px)",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                gap: 10
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22d3ee" }} />
              <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600 }}>Available for hire</span>
            </motion.div>
          </motion.div>
        </div>


        {/* Bottom fade */}
        <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(to top,#000,transparent)", pointerEvents: "none" }} />
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {[
              { stat: "6+",  label: "Projects Built" },
              { stat: "2+",  label: "Years Coding" },
              { stat: "983", label: "Intermediate Score" },
              { stat: "4th", label: "Semester @ UCP" },
            ].map((s, i) => (
              <motion.div key={s.stat} {...up(i * 0.08)}
                style={{ padding: "36px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
                <p style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "#22d3ee", lineHeight: 1, marginBottom: 8 }}>{s.stat}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--text-3)" }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT I DO (Services)
      ══════════════════════════════════════ */}
      <section style={{ padding: "96px 0" }}>
        <div className="container">
          <motion.div {...up(0)} style={{ marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 14 }}>What I Do</p>
            <h2 className="heading-lg" style={{ marginBottom: 16 }}>Services I Offer</h2>
            <p style={{ color: "var(--text-2)", maxWidth: 480, lineHeight: 1.75 }}>
              From backend systems to full AI-powered web apps — I deliver end-to-end digital solutions.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {services.map((s, i) => (
              <motion.div key={s.title} {...up(i * 0.09)} style={card}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(34,211,238,0.25)"; el.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-2)", lineHeight: 1.7 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SKILLS PREVIEW
      ══════════════════════════════════════ */}
      <section style={{ padding: "0 0 96px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 56, alignItems: "center" }}>
            {/* Left text */}
            <motion.div {...up(0)}>
              <p className="eyebrow" style={{ marginBottom: 14 }}>My Skills</p>
              <h2 className="heading-lg" style={{ marginBottom: 16 }}>
                Tools I Work<br />
                <span style={{ color: "#22d3ee" }}>With Daily</span>
              </h2>
              <p style={{ color: "var(--text-2)", lineHeight: 1.75, marginBottom: 28 }}>
                Proficient across the full web stack — backend APIs with Laravel and PHP,
                modern frontends with React &amp; Next.js, and databases with MySQL.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {stack.map((t) => (
                  <span key={t} style={{ padding: "5px 12px", borderRadius: 7, background: "var(--surface)", border: "1px solid var(--border)", fontFamily: "var(--font-geist-mono)", fontSize: "0.75rem", color: "var(--text-2)" }}>{t}</span>
                ))}
              </div>
              <Link href="/skills" className="btn btn-ghost" style={{ marginTop: 28, display: "inline-flex" }}>
                See All Skills <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Right skill bars */}
            <motion.div {...up(0.1)} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {skills.map((s, i) => (
                <div key={s.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.75rem", color: s.color }}>{s.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.pct}%` }}
                      transition={{ duration: 0.9, delay: 0.1 + i * 0.08 }}
                      style={{ height: "100%", borderRadius: 99, background: s.color }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════ */}
      <section style={{ padding: "0 0 96px" }}>
        <div className="container">
          <motion.div {...up(0)} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>Portfolio</p>
              <h2 className="heading-lg">Featured Projects</h2>
            </div>
            <Link href="/projects" className="btn btn-ghost" style={{ gap: 8 }}>All Projects <ArrowRight size={15} /></Link>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {projects.map((p, i) => (
              <motion.div key={p.title} {...up(i * 0.09)} style={{ ...card, display: "flex", flexDirection: "column" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${p.color}40`; el.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ padding: "3px 10px", borderRadius: 99, fontFamily: "var(--font-geist-mono)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.06em", color: p.color, background: `${p.color}14`, border: `1px solid ${p.color}28` }}>{p.badge}</span>
                  <a href="https://github.com/saqib-1030" target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.25)", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)")}><ExternalLink size={16} /></a>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: "0.865rem", color: "var(--text-2)", lineHeight: 1.7, flex: 1, marginBottom: 18 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{ padding: "3px 9px", borderRadius: 6, background: "rgba(255,255,255,0.04)", fontFamily: "var(--font-geist-mono)", fontSize: "0.7rem", color: "var(--text-3)" }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT TEASER
      ══════════════════════════════════════ */}
      <section style={{ padding: "0 0 96px" }}>
        <div className="container">
          <motion.div {...up(0)} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: "48px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 40, alignItems: "center" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>About Me</p>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
                A Developer Who Cares About<br />
                <span style={{ color: "#22d3ee" }}>Clean Code</span>
              </h2>
              <p style={{ color: "var(--text-2)", lineHeight: 1.8, marginBottom: 24 }}>
                I&apos;m Muhammad Saqib Javed — a software engineering student at UCP and a trained Laravel developer.
                I specialize in bridging the gap between complex backend logic and intuitive frontend experiences.
              </p>
              <Link href="/about" className="btn btn-cyan">Read Full Story <ArrowRight size={15} /></Link>
            </div>

            {/* Right card highlights */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { label: "Degree",    value: "B.S. Software Eng.", accent: "#22d3ee" },
                { label: "Training",  value: "Laravel — Yashfeen", accent: "#34d399" },
                { label: "Location",  value: "Lahore, Pakistan",   accent: "#fbbf24" },
                { label: "Projects",  value: "6+ Built",           accent: "#60a5fa" },
              ].map(({ label, value, accent }) => (
                <div key={label} style={{ padding: "16px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-3)", marginBottom: 6 }}>{label}</p>
                  <p style={{ fontSize: "0.82rem", fontWeight: 600, color: accent, lineHeight: 1.3 }}>{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EXPERIENCE PREVIEW
      ══════════════════════════════════════ */}
      <section style={{ padding: "0 0 96px" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>My Journey</p>
              <h2 className="heading-lg">Experience Highlights</h2>
            </div>
            <Link href="/experience" className="btn btn-ghost" style={{ gap: 8 }}>View Full Timeline <ArrowRight size={15} /></Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { role: "Software Engineering (4th Sem.)", org: "University of Central Punjab", date: "2024 — Present", accent: "var(--cyan)" },
              { role: "Laravel Development Training",    org: "Yashfeen Education System",  date: "2024",           accent: "var(--purple)" },
            ].map((exp, i) => (
              <motion.div key={exp.role} {...up(i * 0.1)} 
                style={{ 
                  display: "flex", justifyContent: "space-between", alignItems: "center", 
                  padding: "24px 32px", borderRadius: 16, background: "var(--surface)", border: "1px solid var(--border)" 
                }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>{exp.role}</h3>
                  <p style={{ fontSize: "0.9rem", color: exp.accent, fontWeight: 500 }}>{exp.org}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.8rem", color: "var(--text-3)" }}>{exp.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section style={{ padding: "0 0 96px" }}>
        <div className="container">
          <motion.div {...up(0)} style={{ textAlign: "center", padding: "72px 24px", borderRadius: 20, background: "linear-gradient(135deg,rgba(34,211,238,0.06) 0%,rgba(167,139,250,0.06) 100%)", border: "1px solid rgba(34,211,238,0.15)", position: "relative", overflow: "hidden" }}>
            <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 200, background: "radial-gradient(ellipse,rgba(34,211,238,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
            <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#22d3ee", marginBottom: 16 }}>Open to Work</p>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Have a Project in Mind?
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--text-2)", maxWidth: 440, margin: "0 auto 36px", lineHeight: 1.75 }}>
              Let&apos;s collaborate and turn your idea into a production-ready web application.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-cyan">Start a Conversation <ArrowRight size={16} /></Link>
              <a href="https://github.com/saqib-1030" target="_blank" rel="noreferrer" className="btn btn-ghost">
                <Github size={16} /> View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 0" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.75rem", color: "var(--text-3)" }}>
            © {new Date().getFullYear()} Muhammad Saqib Javed · Built with Next.js
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["About", "Skills", "Projects", "Experience", "Contact"].map((page) => (
              <Link key={page} href={`/${page.toLowerCase()}`} style={{ fontSize: "0.82rem", color: "var(--text-3)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}>{page}</Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
