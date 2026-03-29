import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

import { profileData } from "@/data/profile";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-[calc(100%-2rem)] md:w-full z-50 bg-slate-900/60 backdrop-blur-xl dark:bg-[#0a1324]/60 shadow-[0_8px_32px_0_rgba(0,212,255,0.1)] flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto left-4 right-4 md:left-0 md:right-0 mt-4 rounded-3xl md:rounded-full border border-outline-variant/15">
        <a href="#" aria-label="Home" className="flex items-center hover:opacity-80 transition-opacity hover:scale-105 duration-300">
          <img src="/icon.svg" alt="NT Logo" className="w-9 h-9 md:w-10 md:h-10 rounded-xl shadow-[0_0_15px_rgba(129,236,255,0.4)]" />
        </a>
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          <a className="font-headline font-medium text-sm tracking-tight text-slate-300 hover:text-white transition-colors" href="#about">About</a>
          <a className="font-headline font-medium text-sm tracking-tight text-slate-300 hover:text-white transition-colors" href="#education">Education</a>
          <a className="font-headline font-medium text-sm tracking-tight text-slate-300 hover:text-white transition-colors" href="#experience">Experience</a>
          <a className="font-headline font-medium text-sm tracking-tight text-slate-300 hover:text-white transition-colors" href="#projects">Projects</a>
          <a className="font-headline font-medium text-sm tracking-tight text-slate-300 hover:text-white transition-colors" href="#skills">Skills</a>
          <a className="font-headline font-medium text-sm tracking-tight text-slate-300 hover:text-white transition-colors" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all duration-300 text-[#00d4ff]">
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <a href="/CV-Software-Engineer.pdf" download="TranNgocTan_SoftwareEngineer_CV.pdf" className="bg-gradient-to-r from-primary-container to-secondary px-6 py-2 rounded-full text-on-primary-container font-headline font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-cyan-500/10">Resume</a>
        </div>
      </nav>

      <main className="relative">
        {/* Ambient Background Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

        <HeroSection profile={profileData} />
        <AboutSection profile={profileData} />
        <SkillsSection 
          skills={skillsData} 
        />
        <EducationSection education={educationData} />
        <ExperienceSection experience={experienceData} />
        <ProjectsSection 
          projects={projectsData} 
        />
        <ContactSection 
          profile={profileData} 
          socialLinks={siteConfig.links} 
        />
      </main>

      <footer className="w-full relative z-10 border-t border-[#3c494e]/15 bg-gradient-to-t from-[#131b2d] to-[#0a1324] flex flex-col md:flex-row justify-between items-center px-12 py-8 gap-4">
        <div className="font-label text-xs uppercase tracking-widest text-slate-500">
          © {new Date().getFullYear()} {siteConfig.author}. Built with Neon Precision.
        </div>
        <div className="flex gap-8">
          <a className="font-label text-xs uppercase tracking-widest text-slate-500 hover:text-[#ddb7ff] hover:-translate-y-[2px] transition-all duration-300" href={`mailto:${siteConfig.contact.email}`}>Email</a>
          <a className="font-label text-xs uppercase tracking-widest text-slate-500 hover:text-[#ddb7ff] hover:-translate-y-[2px] transition-all duration-300" href={siteConfig.links.linkedin}>LinkedIn</a>
          <a className="font-label text-xs uppercase tracking-widest text-slate-500 hover:text-[#ddb7ff] hover:-translate-y-[2px] transition-all duration-300" href={siteConfig.links.github}>GitHub</a>
          {siteConfig.links.twitter && (
            <a className="font-label text-xs uppercase tracking-widest text-slate-500 hover:text-[#ddb7ff] hover:-translate-y-[2px] transition-all duration-300" href={siteConfig.links.twitter}>Twitter</a>
          )}
        </div>
      </footer>
    </>
  );
}
