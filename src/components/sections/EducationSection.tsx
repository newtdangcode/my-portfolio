"use client";

import { Education } from "@/types";
import { motion } from "framer-motion";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  if (!education || education.length === 0) return null;

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative bg-surface-dim" id="education">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column - Header */}
          <div className="lg:w-1/3 flex flex-col lg:pt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-secondary font-body text-xs md:text-sm tracking-[0.2em] font-semibold uppercase">
                Academic Journey
              </h4>
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
                Foundational <br className="hidden lg:block"/>
                <span className="text-gradient">Education</span>
              </h2>
              <p className="text-on-surface-variant font-body leading-relaxed max-w-md pt-2">
                Solidifying technical expertise through rigorous academic training and specialization in Information Security.
              </p>
            </motion.div>
          </div>
          
          {/* Right Column - Cards */}
          <div className="lg:w-2/3 space-y-6">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#131b2d] md:p-8 p-6 rounded-[32px] border border-white/5 hover:border-white/10 transition-all duration-300 relative group flex flex-col gap-6 shadow-xl"
              >
                {/* Header: Institution + Period badge */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-on-surface max-w-lg leading-snug">
                    {edu.institution}
                  </h3>
                  <div className="flex items-center justify-center text-xs font-label text-primary bg-[#1f2937]/50 border border-white/10 px-5 py-2.5 rounded-full whitespace-nowrap shrink-0">
                    {edu.period}
                  </div>
                </div>

                {/* Body Details */}
                <div className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-on-surface-variant text-xs font-label uppercase tracking-widest font-semibold">
                      <span className="material-symbols-outlined text-secondary text-[16px] leading-none shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                        school
                      </span>
                      Major
                    </div>
                    <p className="font-headline font-bold text-on-surface pl-6 text-lg">
                      {edu.degree}
                    </p>
                  </div>

                  {edu.gpa && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-on-surface-variant text-xs font-label uppercase tracking-widest font-semibold">
                        <span className="material-symbols-outlined text-primary text-[16px] leading-none shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        Academic Performance
                      </div>
                      <div className="flex flex-wrap items-center gap-4 pl-6">
                        <span className="text-primary font-headline font-bold text-xl whitespace-nowrap">
                          CGPA {edu.gpa}
                        </span>
                        {/* Progress Bar Simulation */}
                        <div className="h-1.5 w-32 bg-white/10 rounded-full overflow-hidden shrink-0 flex">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            whileInView={{ width: !isNaN(parseFloat(edu.gpa)) ? `${Math.min((parseFloat(edu.gpa) / 4) * 100, 100)}%` : '80%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
