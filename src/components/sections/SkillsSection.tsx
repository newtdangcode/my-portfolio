"use client";

import { SkillCategory } from "@/types";
import { motion } from "framer-motion";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-surface-container-low/50 relative z-10" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-headline font-bold">The <span className="text-gradient">Tech Stack</span></h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => {
            const icons = ["javascript", "database", "settings_ethernet", "groups"];
            const isPrimary = idx % 2 === 0;
            const themeColor = isPrimary ? "text-primary" : "text-secondary";
            const bgClass = isPrimary ? "bg-primary" : "bg-secondary";
            const borderClass = isPrimary ? "border-primary" : "border-secondary";
            const iconIndex = idx % icons.length;
            const topSkills = category.topSkills || [];

            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`material-symbols-outlined ${themeColor}`}>{icons[iconIndex]}</span>
                  <h4 className="font-headline font-bold text-lg">{category.title}</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-4">
                    {topSkills.map((ts, tsIdx) => (
                      <div key={tsIdx}>
                        <div className="flex justify-between text-xs font-label mb-2 uppercase text-on-surface">
                          <span>{ts.name}</span>
                          <span>{ts.progress}</span>
                        </div>
                        <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full ${bgClass}`} 
                            initial={{ width: 0 }}
                            whileInView={{ width: ts.progress }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + (tsIdx * 0.1), ease: "easeOut" }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-6 mt-4 border-t border-white/5">
                    {category.skills.map((skill, sIdx) => (
                      <span key={sIdx} className={`text-[10px] font-label border-l-2 ${borderClass} bg-surface-container-high px-2 py-1 text-on-surface`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
