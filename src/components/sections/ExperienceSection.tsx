"use client";

import { Experience } from "@/types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const [selectedJob, setSelectedJob] = useState<Experience | null>(null);

  if (!experience || experience.length === 0) return null;

  return (
    <section className="py-32 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Career <span className="text-gradient">Timeline.</span></h2>
          <div className="h-1 w-24 bg-primary-container mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
          {experience.map((job, idx) => {
            const isEven = idx % 2 === 0;
            const borderColor = isEven ? 'border-primary/50' : 'border-secondary/50';
            const textColor = isEven ? 'text-primary' : 'text-secondary';
            const hoverBorder = isEven ? 'hover:border-primary/30' : 'hover:border-secondary/30';
            const badgeBorder = isEven ? 'border-primary/20 bg-surface-container-high' : 'border-secondary/20 bg-surface-container-high';
            const textFixedDim = isEven ? 'text-primary-fixed-dim' : 'text-secondary-fixed-dim';

            return (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.2 + 0.3, type: "spring" }}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border ${borderColor} bg-surface ${textColor} absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 glass-card`}
                >
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>circle</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  onClick={() => job.projects && job.projects.length > 0 ? setSelectedJob(job) : null}
                  className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 rounded-3xl signature-glow ${hoverBorder} transition-all ${job.projects && job.projects.length > 0 ? 'cursor-pointer hover:scale-[1.02]' : ''}`}
                >
                  <div className="flex justify-end gap-2 flex-wrap mb-4 sm:mb-6">
                    <span className={`text-xs font-label ${textFixedDim} border ${badgeBorder} px-3 py-1 rounded-full whitespace-nowrap`}>
                      {job.period}
                    </span>
                    <span className="text-xs font-label font-bold text-on-surface border border-outline-variant/30 bg-surface-container-highest px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                      {job.company}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-on-surface mb-4 w-full break-words">
                    {job.role}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{job.description}</p>
                  
                  {job.skills && job.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 5).map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/80">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {job.projects && job.projects.length > 0 && (
                    <div className="mt-6 flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest group-hover:text-primary-fixed transition-colors">
                      <span className="material-symbols-outlined text-sm">visibility</span>
                      <span>View {job.projects.length} Projects</span>
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Projects Modal Overlay */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" 
            onClick={() => setSelectedJob(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-card border border-outline-variant/30 rounded-3xl p-6 md:p-10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container-highest text-on-surface-variant hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="mb-8 pr-10">
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">{selectedJob.company} Projects</h2>
              <p className="text-on-surface-variant font-label text-sm tracking-widest uppercase">{selectedJob.role}</p>
            </div>

            <div className="space-y-8">
              {selectedJob.projects?.map((proj, idx) => (
                <div key={idx} className="bg-surface-container-low p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  
                  <h3 className="text-xl font-headline font-bold mb-3">{proj.name}</h3>
                  <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">{proj.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-widest font-label text-primary block mb-2">Role & Responsibilities</span>
                    <p className="text-sm text-on-surface mb-2">{proj.responsibilities}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                    {proj.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-1 bg-surface-container-highest text-[10px] font-label text-slate-300 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
