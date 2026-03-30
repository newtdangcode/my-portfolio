"use client";

import { SkillCategory } from "@/types";
import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiPhp, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiAngular, SiVuedotjs, SiTailwindcss, SiHtml5, SiCss, SiFigma,
  SiNestjs, SiExpress, SiSpringboot, SiLaravel, SiMysql, SiMongodb, SiPostgresql, SiSqlite,
  SiDocker, SiGithubactions, SiGit, SiLinux, SiVmware, SiPostman, SiBitbucket, SiJira, SiSwagger
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const iconMap: Record<string, any> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  java: FaJava,
  php: SiPhp,
  python: SiPython,
  "c++": SiCplusplus,
  reactjs: SiReact,
  nextjs: SiNextdotjs,
  angular: SiAngular,
  vuejs: SiVuedotjs,
  tailwindcss: SiTailwindcss,
  html: SiHtml5,
  css: SiCss,
  "html / css": SiHtml5,
  figma: SiFigma,
  nestjs: SiNestjs,
  expressjs: SiExpress,
  "spring boot": SiSpringboot,
  laravel: SiLaravel,
  mysql: SiMysql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  "mysql / postgres": SiMysql,
  sqlite: SiSqlite,
  docker: SiDocker,
  "github actions": SiGithubactions,
  git: SiGit,
  "git / github": SiGit,
  linux: SiLinux,
  vmware: SiVmware,
  postman: SiPostman,
  bitbucket: SiBitbucket,
  jira: SiJira,
  swagger: SiSwagger,
};

const getSkillIcon = (skillName: string) => {
  const normalized = skillName.toLowerCase().trim();
  const IconComponent = iconMap[normalized];
  return IconComponent ? <IconComponent className="text-lg shrink-0" /> : null;
};

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
            const icons = ["code", "web", "dns", "build"];
            const isPrimary = idx % 2 === 0;
            const themeColor = isPrimary ? "text-primary" : "text-secondary";
            const bgClass = isPrimary ? "bg-primary" : "bg-secondary";
            const iconIndex = idx % icons.length;
            const topSkills = category.topSkills || [];

            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                transition={{ 
                  opacity: { duration: 0.6, delay: idx * 0.15 },
                  y: { duration: 0.4 }
                }}
                className="relative rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-black/20 transition-all duration-300 p-[1.5px]"
              >
                {/* Animated Border Beam */}
                <div 
                  className="absolute inset-[-100%] z-0 origin-center animate-[spin_4s_linear_infinite] opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 75%, var(--color-${isPrimary ? 'primary' : 'secondary'}) 100%)`,
                    animationDelay: `-${(idx % 2) * 2}s`
                  }}
                />
                
                {/* Inner Content Container */}
                <div className="relative w-full h-full z-10 p-6 rounded-[calc(1rem-1.5px)] bg-[#131b2d]/95 backdrop-blur-xl border border-transparent transition-colors duration-300 space-y-6 flex flex-col">
                  {/* Subtle Background Glow inside card */}
                  <div 
                    className={`absolute -top-4 -right-4 w-32 h-32 ${bgClass} opacity-10 blur-[40px] rounded-full transition-opacity duration-500 pointer-events-none group-hover:opacity-20`}
                  />
                  
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <span className={`material-symbols-outlined ${themeColor}`}>{icons[iconIndex]}</span>
                    <h4 className="font-headline font-bold text-lg">{category.title}</h4>
                  </div>
                  
                  <div className="space-y-6 relative z-10 flex-grow">
                    {topSkills.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {topSkills.map((ts, tsIdx) => (
                          <motion.div 
                            key={tsIdx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              opacity: { duration: 0.4, delay: 0.1 + (tsIdx * 0.1) },
                              scale: { duration: 0.4, delay: 0.1 + (tsIdx * 0.1) }
                            }}
                            whileHover={{ scale: 1.05 }}
                            className={`relative px-4 py-2 flex items-center gap-2 rounded-xl bg-[#212a3c] border border-white/5 overflow-hidden group/skill cursor-default shadow-sm transition-transform`}
                          >
                            <div className={`absolute inset-0 opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300 ${bgClass}`} />
                            <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover/skill:w-full transition-all duration-300 ${bgClass}`} />
                            
                            <span className={`${themeColor}`}>
                              {getSkillIcon(ts.name)}
                            </span>
                            <span className={`relative z-10 text-sm font-label font-bold tracking-wider uppercase ${themeColor}`}>
                              {ts.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    
                    {category.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {category.skills.map((skill, sIdx) => (
                          <motion.span 
                            key={sIdx} 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              opacity: { duration: 0.3, delay: 0.2 + (sIdx * 0.05) }
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1.5 text-xs font-label bg-[#0a1324] border border-white/5 rounded-lg px-3 py-1.5 text-[#dae2fa]/70 hover:text-[#dae2fa] transition-colors cursor-default shadow-sm group/sm-skill"
                          >
                            <span className="opacity-70 group-hover/sm-skill:opacity-100">
                              {getSkillIcon(skill)}
                            </span>
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    )}
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
