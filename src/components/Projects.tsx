"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

import Image from "next/image";

const projects = [
  {
    title: "E-Learning System",
    description: "A comprehensive platform for online education featuring course management, student enrollment, and interactive assessments.",
    tech: ["Laravel", "React", "Tailwind", "MySQL"],
    github: "https://github.com/saqib-1030",
    link: "#",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AI Chatbot (V1)",
    description: "Intelligent conversational agent powered by OpenAI's GPT models, integrated into a web interface for customer support.",
    tech: ["Next.js", "OpenAI API", "Framer Motion"],
    github: "https://github.com/saqib-1030",
    link: "#",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Hospital Management System",
    description: "Streamlined system for managing patient records, appointments, doctor schedules, and billing cycles.",
    tech: ["Laravel", "Blade", "Bootstrap", "MySQL"],
    github: "https://github.com/saqib-1030",
    link: "#",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Pharmacy Management System",
    description: "Inventory tracking, sales management, and prescription processing for modern pharmacies.",
    tech: ["Laravel", "PHP", "Alpine.js", "MySQL"],
    github: "https://github.com/saqib-1030",
    link: "#",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AI Airline Reservation System",
    description: "Next-gen flight booking system with AI-driven seat recommendations and dynamic pricing analysis.",
    tech: ["Laravel", "Python", "React", "Tailwind"],
    github: "https://github.com/saqib-1030",
    link: "#",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AI Chatbot (V2)",
    description: "Enhanced variation of the AI chatbot with custom personality tuning and multi-modal support.",
    tech: ["Next.js", "LangChain", "Node.js"],
    github: "https://github.com/saqib-1030",
    link: "#",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-accent font-mono text-xl mb-4 tracking-wider">03. My Work</h2>
          <h3 className="text-4xl md:text-6xl font-bold">Featured Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-black transition-all">
                    <GithubIcon size={24} />
                  </a>
                  <a href={project.link} className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-black transition-all">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                <p className="text-white/50 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono py-1 px-3 bg-white/5 rounded-full text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
