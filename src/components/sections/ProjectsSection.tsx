"use client";

import { Project } from "@/types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-24 px-6 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <h2 className="text-4xl font-headline font-bold mb-4">Academic &amp; Side <span className="text-secondary">Projects</span></h2>
            <p className="text-on-surface-variant max-w-xl">A selection of technical explorations and foundational projects developed.</p>
          </div>
          <a className="text-primary font-headline font-bold flex items-center gap-2 hover:gap-3 transition-all" href="https://github.com/newtdangcode?tab=repositories">
            GitHub Repos <span className="material-symbols-outlined font-light text-xl" style={{ fontVariationSettings: "'wght' 300" }}>arrow_outward</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            // We'll use absolute URLs for placeholder images from the original design
            const images = [
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBpFeQXY6ceZGYN1vRGXKOYCjFMWA7dlpvivJg4yw8ggInPPHTApB7hF-MLjky1cRuuNBmLs8Tv4_Z21ExRbJPgutgA_uHhHNVsQYe2cq2_d2l1L9doStdOzvJbZP96neUg2-1LTCP0EDWm8obut1n8aUaJ5eiq-aE9ey6ma6GwocKol_W_VrMG47zs3Vo9NCXsTawF93nj1B8L343iINZIpA1wshxyHdYPWwmO-bR96-o3h5ORPJDCwilvAdG9x7MAjwgX4OCymWA",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBEEigXCCTUxc3sqI02ExmM7R8dZ7lUPQWBx-eI0o-a9_3F0-hNDIUBUcPxaC_QlIPb8GcvXY2Ufe2AnlzwUSNKkclC4v2YbjCpxz6AndsUQtb1r6_8AFFQjzzJXb1uKgW1th3UFx13RDB9wT76yWeTWou6695IwgQOPG3-p_wySLkx0nJ4jQ-OGVqskVN67Z8oeSCwM5d9qVjKspkudGJghNaT7eUxyjf9b0CU_c-CspSj5pMBm1dkiGLvjUILiGElE1W42pqHPQ8",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCvquVz9pDQZ-ZZi2DGkVQLTsVZHra7EFZsTFXfDPq08ovm0XGpgX4Rb1dWgVv-cqSpQ2nMmlTJmEHDEFsJs0FmXw345PwS1W5vSoXQcKpbsCNHw73ItBJm1Yzy0TqkHltNy-sY4cH0fYwx89sQz72AZDKg61_oFrwlpaP1JWzVRY4yltpASm-eZ-j34NIPan1vKbk8e-OxT0pvF57w_J6zAxaSF6uQS1XtqO2QaqxOihcA1RKHYfQAaYoIy5NTfz14fjqmNsQt6Mk"
            ];
            const imgSrc = images[idx % images.length];

            return (
              <motion.div 
                key={proj.slug} 
                onClick={() => setSelectedProject(proj)}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/10 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden shrink-0">
                  <img alt={proj.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={imgSrc} />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h4 className="text-xl md:text-2xl font-headline font-bold mb-3">{proj.name}</h4>
                  <p className="text-on-surface-variant text-sm md:text-base mb-6 leading-relaxed flex-1">
                    {proj.description[0]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {proj.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-surface-container-highest text-[10px] font-label text-on-surface-variant rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {proj.links && proj.links.length > 0 ? (
                    <a href={proj.links[0].url} target="_blank" rel="noreferrer" className="mt-auto block">
                      <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">east</span>
                    </a>
                  ) : (
                    <div className="mt-auto block">
                      <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">east</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" 
            onClick={() => setSelectedProject(null)}
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
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container-highest text-on-surface-variant hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="mb-8 pr-10">
                <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">{selectedProject.name}</h2>
                <div className="flex gap-2 flex-wrap items-center mt-3">
                  <span className="text-on-surface-variant font-label text-xs tracking-widest uppercase border border-outline-variant/30 bg-surface-container-high px-3 py-1 rounded-full">{selectedProject.type}</span>
                  <span className="text-on-surface-variant font-label text-xs tracking-widest uppercase border border-outline-variant/30 bg-surface-container-high px-3 py-1 rounded-full">{selectedProject.period}</span>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-headline font-bold mb-3 text-primary">Overview</h3>
                  <div className="space-y-4">
                    {selectedProject.description.map((desc, i) => (
                      <p key={i} className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                    ))}
                  </div>
                </div>

                {selectedProject.responsibilities && (
                  <div>
                    <h3 className="text-lg font-headline font-bold mb-3 text-primary">Role & Contributions</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-4 rounded-2xl border border-white/5">{selectedProject.responsibilities}</p>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-headline font-bold mb-3 text-primary">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-surface-container-highest text-[10px] font-label text-primary-fixed-dim rounded-md border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
                    {selectedProject.links.map((link, lIdx) => (
                      <a 
                        key={lIdx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-container/50 to-secondary/50 hover:from-primary-container hover:to-secondary border border-primary/30 text-white text-sm font-headline font-bold transition-all shadow-lg hover:shadow-primary/20 hover:scale-105"
                      >
                        <span className="material-symbols-outlined text-sm">{link.label.toLowerCase().includes('github') ? 'code' : 'link'}</span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
