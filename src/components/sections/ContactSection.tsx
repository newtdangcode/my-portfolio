"use client";

import { Profile } from "@/types";
import { useState } from "react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  profile: Profile;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export function ContactSection({ profile, socialLinks }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    const mailtoAnchor = document.createElement("a");
    mailtoAnchor.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    mailtoAnchor.target = "_blank";
    
    // Fallback block for rigid browsers (like Safari)
    document.body.appendChild(mailtoAnchor);
    mailtoAnchor.click();
    document.body.removeChild(mailtoAnchor);
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 px-6 relative z-10" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card border border-outline-variant/20 rounded-3xl md:rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none"
          >
            <span className="material-symbols-outlined text-[10rem] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
          </motion.div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">Let's build <br/><span className="text-gradient">something</span> <br/>together.</h2>
              <p className="text-on-surface-variant mb-10 text-base md:text-lg">Open for technical consulting, leadership roles, or full-stack project collaborations.</p>
              
              <div className="space-y-6">
                <a className="flex items-center gap-4 group" href={`mailto:${profile.email}`}>
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/20 group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  </div>
                  <span className="font-label text-sm">{profile.email}</span>
                </a>
                
                <a className="flex items-center gap-4 group" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/20 group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">share</span>
                  </div>
                  <span className="font-label text-sm">LinkedIn</span>
                </a>
              </div>
            </motion.div>
            
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-2">Name</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder-gray-500/50" 
                  placeholder="Your full name" 
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-2">Email</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder-gray-500/50" 
                  placeholder="hello@company.com" 
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-2">Message</label>
                <textarea 
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none placeholder-gray-500/50" 
                  placeholder="How can I help you?" 
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-container to-secondary text-on-primary-container font-headline font-bold rounded-2xl shadow-xl shadow-primary-container/20"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
