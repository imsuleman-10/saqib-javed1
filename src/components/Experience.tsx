"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase } from "lucide-react";

const events = [
  {
    date: "Current",
    title: "Software Engineering (4th Semester)",
    location: "University of Central Punjab (UCP), Lahore",
    description: "Deepening knowledge in software architecture, data structures, and advanced programming concepts.",
    icon: <BookOpen />,
  },
  {
    date: "2025",
    title: "Laravel Development Training",
    location: "Yashfeen Education System, Lahore",
    description: "Intensive training on Laravel ecosystem, database modeling, and scalable backend development.",
    icon: <Award />,
  },
  {
    date: "2022 - 2024",
    title: "Intermediate (ICS Physics)",
    location: "Govt Islamia College Civil Lines, Lahore",
    description: "Achieved 983 marks, building a strong foundation in mathematics and analytical thinking.",
    icon: <BookOpen />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-black/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-primary font-mono text-xl mb-4 tracking-wider">04. My Journey</h2>
          <h3 className="text-4xl md:text-6xl font-bold">Training & Education</h3>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                <div className="flex-1 w-full">
                  <div className={`glass p-8 rounded-3xl relative ${index % 2 === 0 ? "text-right" : "text-left"
                    }`}>
                    <span className="text-primary font-mono text-sm mb-2 block italic">{event.date}</span>
                    <h4 className="text-2xl font-bold mb-2">{event.title}</h4>
                    <p className="text-secondary font-medium mb-4">{event.location}</p>
                    <p className="text-white/50">{event.description}</p>

                    {/* Arrow */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white/10 rotate-45 hidden md:block ${index % 2 === 0 ? "-right-2 border-r border-t border-white/5" : "-left-2 border-l border-b border-white/5"
                      }`} />
                  </div>
                </div>

                <div className="relative z-10 w-12 h-12 bg-black border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-[0_0_15px_rgba(0,242,255,0.3)] shrink-0">
                  {event.icon}
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
