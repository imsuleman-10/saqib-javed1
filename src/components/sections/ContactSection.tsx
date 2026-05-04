"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";


export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      formRef.current?.reset();
    }, 1600);
  }

  return (
    <main className="site-page">
      <div className="container" style={{ paddingTop: 72, paddingBottom: 96 }}>

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 64, textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: 16, justifyContent: "center" }}>Get In Touch</p>
          <h1 className="heading-xl" style={{ marginBottom: 20 }}>
            Let&apos;s Build Something{" "}
            <span style={{ color: "var(--cyan)" }}>Together</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-2)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
            Open to freelance projects, collaboration opportunities, and full-time roles.
            Reach out and I&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        {/* ── Two column ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "start" }}>

          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {/* Contact details */}
            {[
              { icon: Mail,    label: "Email",    val: "saqibjaved56033@gmail.com", accent: "var(--cyan)" },
              { icon: MapPin,  label: "Location", val: "Lahore, Pakistan",          accent: "var(--purple)" },
            ].map(({ icon: Icon, label, val, accent }) => (
              <div
                key={label}
                style={{
                  padding: "18px 20px",
                  borderRadius: 14,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, background: `${accent}12`, border: `1px solid ${accent}28`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={17} color={accent} />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-3)", marginBottom: 3 }}>{label}</p>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{val}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ marginTop: 8 }}>
              <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-3)", marginBottom: 12 }}>Socials</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { icon: Github,   label: "GitHub",   sub: "github.com/saqib-1030",          href: "https://github.com/saqib-1030",                   accent: "#fff" },
                  { icon: Linkedin, label: "LinkedIn",  sub: "linkedin.com/in/muhammad-saqib-javed", href: "https://www.linkedin.com/in/muhammad-saqib-javed/", accent: "var(--cyan)" },
                ].map(({ icon: Icon, label, sub, href, accent }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 16px",
                      borderRadius: 12,
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${accent}40`;
                      el.style.background = `${accent}08`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--border)";
                      el.style.background = "var(--surface)";
                    }}
                  >
                    <Icon size={18} color={accent} />
                    <div>
                      <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }}>{label}</p>
                      <p style={{ fontSize: "0.72rem", color: "var(--text-3)", fontFamily: "var(--font-geist-mono)" }}>{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                padding: "32px",
                borderRadius: 16,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)" }}>Name</span>
                  <input className="form-input" type="text" required placeholder="John Doe" />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)" }}>Email</span>
                  <input className="form-input" type="email" required placeholder="john@example.com" />
                </label>
              </div>

              <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)" }}>Subject</span>
                <input className="form-input" type="text" placeholder="Project collaboration" />
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)" }}>Message</span>
                <textarea className="form-input" rows={5} required placeholder="Tell me about your project..." style={{ resize: "none" }} />
              </label>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={status === "sent" ? undefined : "btn btn-cyan"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                  padding: "13px",
                  ...(status === "sent" ? {
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)",
                    color: "#34d399", borderRadius: 10, fontWeight: 600, cursor: "default",
                  } : {}),
                }}
              >
                {status === "idle"    && <><Send size={16} /> Send Message</>}
                {status === "sending" && <><Loader2 size={16} style={{ animation: "spin 0.8s linear infinite" }} /> Sending…</>}
                {status === "sent"    && <><CheckCircle2 size={16} /> Message Sent</>}
              </button>
            </form>
          </motion.div>
        </div>
        {/* ── What happens next? ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: 80, borderTop: "1px solid var(--border)", paddingTop: 64 }}
        >
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: 12 }}>What Happens Next?</h2>
            <p style={{ color: "var(--text-2)", fontSize: "0.9rem" }}>My typical process after receiving an inquiry.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { step: "01", title: "Review", desc: "I'll review your project details and requirements within 24 hours." },
              { step: "02", title: "Discovery", desc: "We'll have a brief call or chat to align on goals and expectations." },
              { step: "03", title: "Proposal", desc: "I'll send a detailed breakdown of the timeline, scope, and cost." },
              { step: "04", title: "Execution", desc: "Work begins! You'll get regular updates via your preferred channel." }
            ].map((s, i) => (
              <div key={s.step} style={{ padding: 24, borderRadius: 16, background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.8rem", color: "var(--cyan)", fontWeight: 700, marginBottom: 12, display: "block" }}>{s.step}</span>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </main>
  );
}
