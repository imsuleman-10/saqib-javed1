"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Skills",     href: "/skills" },
  { label: "Projects",   href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const path    = usePathname();
  const [solid, setSolid] = useState(false);
  const [open,  setOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          height: 72,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          transition: "background 0.3s, border-color 0.3s",
          background: solid ? "rgba(0,0,0,0.88)" : "transparent",
          backdropFilter: solid ? "blur(16px)" : "none",
          borderBottom: solid ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ 
              width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, var(--cyan) 0%, #a78bfa 100%)",
              display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#000", fontSize: "1.05rem"
            }}>
              MS
            </div>
            <span style={{ fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.03em", color: "#fff" }}>
              Saqib<span style={{ color: "var(--cyan)" }}>.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
            {links.map((l) => {
              const active = path === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    position: "relative",
                    padding: "8px 14px",
                    borderRadius: 8,
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    color: active ? "var(--cyan)" : "rgba(255,255,255,0.5)",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-bg"
                      style={{
                        position: "absolute", inset: 0, borderRadius: 8,
                        background: "rgba(34,211,238,0.08)",
                        border: "1px solid rgba(34,211,238,0.18)",
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/saqib-1030"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              style={{ padding: "8px 18px", fontSize: "0.82rem" }}
            >
              GitHub
            </a>
            <a href="https://wa.me/923491691260" target="_blank" rel="noreferrer" className="btn btn-cyan" style={{ padding: "8px 18px", fontSize: "0.82rem" }}>
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 8 }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              inset: 0,
              top: 72,
              zIndex: 40,
              background: "#000",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {links.map((l) => {
              const active = path === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    padding: "16px 20px",
                    borderRadius: 12,
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: active ? "var(--cyan)" : "rgba(255,255,255,0.7)",
                    background: active ? "rgba(34,211,238,0.08)" : "transparent",
                    border: `1px solid ${active ? "rgba(34,211,238,0.2)" : "transparent"}`,
                    transition: "all 0.15s",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
            <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
              <a href="https://wa.me/923491691260" target="_blank" rel="noreferrer" className="btn btn-cyan" style={{ flex: 1, justifyContent: "center" }}>Hire Me</a>
              <a href="https://github.com/saqib-1030" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ flex: 1, justifyContent: "center" }}>GitHub</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
