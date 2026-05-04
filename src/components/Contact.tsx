"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon, GithubIcon } from "@/components/Icons";



export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-accent font-mono text-xl mb-4 tracking-wider">05. Get In Touch</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6">Let&apos;s Build Something <br /> <span className="gradient-text">Exceptional</span></h3>
          <p className="text-white/50 max-w-xl">
            Currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-3xl"
              >
                <Mail className="text-primary mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Email</h4>
                <p className="text-white/40 break-all">saqibjaved56033@gmail.com</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-3xl"
              >
                <MapPin className="text-secondary mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Location</h4>
                <p className="text-white/40">Lahore, Pakistan</p>
              </motion.div>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://github.com/saqib-1030" target="_blank" className="p-4 glass rounded-full hover:text-primary hover:neon-border transition-all">
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-saqib-javed/" target="_blank" className="p-4 glass rounded-full hover:text-secondary hover:neon-border transition-all">
                <LinkedInIcon size={24} />
              </a>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
          >
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-white/40 ml-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-white/40 ml-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-white/40 ml-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all"
              >
                Send Message <Send size={20} />
              </button>
            </form>
            
            {/* Glow effect */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
