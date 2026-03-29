"use client";

import { Education } from "@/types";
import { motion } from "framer-motion";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  if (!education || education.length === 0) return null;

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Academic <span className="text-gradient">Background.</span></h2>
          <div className="h-1 w-24 bg-primary-container mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="space-y-6 md:space-y-8 relative">
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-6 md:p-10 rounded-3xl signature-glow hover:border-primary/30 transition-all border border-primary/10 relative overflow-hidden group flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-start gap-4 md:gap-6 flex-1">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-surface-container-high flex items-center justify-center border border-outline-variant/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">school</span>
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-on-surface mb-2">{edu.institution}</h3>
                  <p className="text-primary font-label text-sm md:text-base tracking-wide mb-2 md:mb-0">{edu.degree}</p>
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-3 md:gap-2 ml-16 md:ml-0 border-t border-outline-variant/10 md:border-t-0 pt-4 md:pt-0">
                <div className="flex gap-2 items-center text-xs font-label text-on-surface-variant border border-outline-variant/20 bg-surface-container-high px-4 py-2 rounded-full whitespace-nowrap">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  {edu.period}
                </div>
                {edu.gpa && (
                  <div className="flex gap-2 items-center text-xs font-label text-primary-fixed-dim border border-primary/20 bg-surface-container-high px-4 py-2 rounded-full whitespace-nowrap hidden md:flex">
                    <span className="material-symbols-outlined text-sm">grade</span>
                    CGPA: {edu.gpa}
                  </div>
                )}
              </div>
              
              {/* Mobile GPA badge (positioned under period) */}
              {edu.gpa && (
                <div className="flex gap-2 items-center text-xs font-label text-primary-fixed-dim border border-primary/20 bg-surface-container-high px-4 py-2 rounded-full whitespace-nowrap md:hidden ml-16 w-max">
                  <span className="material-symbols-outlined text-sm">grade</span>
                  CGPA: {edu.gpa}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
