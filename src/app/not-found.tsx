"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-[12rem] md:text-[18rem] font-black text-white/5 leading-none select-none"
        >
          404
        </motion.h1>
        
        <div className="mt-[-4rem] md:mt-[-8rem]">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Lost in the <span className="text-cyan-400">Digital Void?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The page you're looking for has been moved, deleted, or never existed in this dimension.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn btn-cyan px-8 py-4 flex items-center gap-2 group">
              <Home size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              Back to Safety
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn btn-ghost px-8 py-4 flex items-center gap-2 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>
        </div>
      </motion.div>

      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#22d3ee22 1px, transparent 1px), linear-gradient(90deg, #22d3ee22 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }} 
      />
    </main>
  );
}
