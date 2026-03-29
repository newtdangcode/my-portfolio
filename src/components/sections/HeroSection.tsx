"use client";

import { Profile } from "@/types";
import { motion } from "framer-motion";

interface HeroSectionProps {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl w-full text-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="text-label text-[10px] md:text-xs tracking-widest uppercase text-on-surface-variant">Available For Software Engineering Roles</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-headline font-extrabold tracking-tighter mb-6 leading-none"
        >
          Building <span className="text-gradient">Secure &</span><br />Scalable Systems.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 font-body leading-relaxed"
        >
          I am <span className="text-primary font-semibold">{profile.name}</span>, a {profile.title} focused on modern full-stack web development, AI-driven backend architectures, and designing robust, security-first digital platforms.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <a className="bg-gradient-to-r from-primary-container to-secondary text-on-primary-container px-10 py-4 rounded-full font-headline font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-2xl shadow-primary-container/20" href="#contact">
            Get in touch <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a className="border border-outline-variant/30 text-on-surface px-10 py-4 rounded-full font-headline font-bold hover:bg-surface-container-high transition-all" href="#experience">
            View Experience
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 glass-card border border-outline-variant/20 rounded-2xl rotate-12 flex items-center justify-center hidden lg:flex"
      >
        <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 w-32 h-32 glass-card border border-outline-variant/20 rounded-full -rotate-12 flex items-center justify-center hidden lg:flex"
      >
        <span className="material-symbols-outlined text-5xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
      </motion.div>
    </section>
  )
}
