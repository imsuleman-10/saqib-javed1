"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code, Heart } from "lucide-react";

const info = [
  {
    icon: <MapPin className="text-primary" />,
    title: "Location",
    description: "Lahore, Pakistan",
  },
  {
    icon: <GraduationCap className="text-secondary" />,
    title: "Education",
    description: "Intermediate (983 Marks) - Govt Islamia College Civil Lines",
  },
  {
    icon: <Code className="text-accent" />,
    title: "Current Study",
    description: "Software Engineering (4th Semester) - UCP",
  },
  {
    icon: <Heart className="text-red-500" />,
    title: "Passion",
    description: "Web Development & Scalable Systems",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-primary font-mono text-xl mb-4 tracking-wider">01. About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Driven by curiosity, powered by <span className="text-primary">code</span>.
          </h3>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            I am Muhammad Saqib Javed, a dedicated Software Engineering student at UCP Lahore. 
            My journey into web development started with a passion for building functional and beautiful 
            user experiences. As a Laravel Developer and Frontend Engineer, I bridge the gap between 
            robust backend logic and elegant user interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-white/50">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
