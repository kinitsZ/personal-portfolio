import Image from "next/image";
import { User, Layers, FolderGit2, GraduationCap, Trophy, BadgeCheck, Briefcase, Mail, Phone, Download } from "lucide-react";
import StackBar from "@/components/StackBar";
import CertCarousel from "@/components/CertCarousel";
import CertAllModal from "@/components/CertAllModal";
import AwardsTimeline from "@/components/AwardsTimeline";
import ProjectCard from "@/components/ProjectCard";
import LiveClock from "@/components/LiveClock";
import ProfilePic from "@/components/ProfilePic";

export default function Home() {
  return (
    <div className="relative">
      {/* Grid background overlay */}
      <div className="absolute inset-0 grid-background pointer-events-none" />
      {/* MAIN-content container */}
      <div className="max-w-2xl mx-auto mt-10 sm:mt-20 px-4 sm:px-2">

        {/* HEADER section */}
        <div className="flex justify-between items-start mb-6 gap-3">
          <div className="flex gap-3 items-center min-w-0">
            <ProfilePic />
            <div className="flex flex-col gap-1 min-w-0">
              <LiveClock />
              <p className="text-base sm:text-2xl text-[#4E4E4E] font-medium">Hello, I am Zymer!</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-0.5 items-center">
                <a href="https://www.linkedin.com/in/zymer-fernando-24baa5259/" target="_blank" rel="noopener noreferrer" className="text-[#b0b0b0] hover:text-[#4E4E4E] transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://github.com/kinitsZ" target="_blank" rel="noopener noreferrer" className="text-[#b0b0b0] hover:text-[#4E4E4E] transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
                <a href="https://www.facebook.com/zymer.fernando.2024" target="_blank" rel="noopener noreferrer" className="text-[#b0b0b0] hover:text-[#4E4E4E] transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <span className="text-[#e0e0e0] hidden sm:inline">·</span>
                <div className="hidden sm:flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  <span className="text-[10px] text-[#ababab]">Available for work</span>
                </div>
              </div>
              {/* Available badge — moves below socials on mobile */}
              <div className="flex sm:hidden items-center gap-1.5 mt-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                <span className="text-[10px] text-[#ababab]">Available for work</span>
              </div>
            </div>
          </div>
          <h1 className="text-sm sm:text-3xl drop-shadow-sm bg-linear-to-b from-[#d0d0d0] to-[#4a4a4a] bg-clip-text text-transparent text-right font-bold font-serif leading-tight shrink-0 self-center sm:self-start">
            FULL STACK
            <br />
            WEB DEVELOPER
          </h1>
        </div>

        <hr className="border-t-2 border-[#e0e0e0]" />

        {/* ABOUT section */}
        <div className="mt-7">
          <div className="flex items-center gap-2 mb-3">
            <User size={16} className="text-[#b0b0b0]" />
            <h2 className="text-xl font-bold text-[#4E4E4E]">About</h2>
          </div>
          <p className="text-base leading-relaxed text-justify max-w-2xl bg-linear-to-r
            from-[#9b9b9b] from-40%
            to-[#3c3c3c] to-100%
            bg-clip-text text-transparent">
            I build full-stack websites with a focus on efficiency, security, and solid system architecture so users get smooth experiences without the chaos behind the scenes. I casually explore machine learning and data science, enjoying how data and smart systems can level up products. Curious by nature, I like building things that work well and actually matter.
          </p>
        </div>

        <hr className="border-t-2 border-[#e0e0e0] mt-7" />

        {/* TECH STACK section */}
        <div className="mt-7">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={16} className="text-[#b0b0b0]" />
            <h2 className="text-xl font-bold text-[#4E4E4E]">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <StackBar stack="Next.js" />
            <StackBar stack="Node.js" />
            <StackBar stack="React" />
            <StackBar stack="HTML5" />
            <StackBar stack="CSS3" />
            <StackBar stack="JavaScript" />
            <StackBar stack="TailwindCSS" />
            {/* <StackBar stack="Redis" /> */}
            <StackBar stack="Python" />
            <StackBar stack="PostgreSQL" />
            <StackBar stack="Supabase" />
            <StackBar stack="Vercel" />
            <StackBar stack="Git & Github" />
            <StackBar stack="Figma" />
            <StackBar stack="Vue.js" />
          </div>
        </div>

        <hr className="border-t-2 border-[#e0e0e0] mt-7" />

        {/* WORK EXPERIENCE section */}
        <div className="mt-7">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase size={16} className="text-[#b0b0b0]" />
            <h2 className="text-xl font-bold text-[#4E4E4E]">Work Experience</h2>
          </div>
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center shrink-0">
                <Briefcase size={16} className="text-[#b0b0b0]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-[#4E4E4E]">Junior Web Developer Intern</p>
                <p className="text-xs text-[#ababab]">Circuit Solutions Inc.</p>
              </div>
            </div>
            <div className="shrink-0 ml-4 text-right">
              <p className="text-xs text-[#c8c8c8]">Mar 2026 – Jun 2026</p>
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                <p className="text-xs text-green-500 font-medium">Current</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-[#e0e0e0] mt-7" />

        {/* PROJECTS section */}
        <div className="mt-7">
          <div className="flex items-center gap-2 mb-3">
            <FolderGit2 size={16} className="text-[#b0b0b0]" />
            <h2 className="text-xl font-bold text-[#4E4E4E]">Projects</h2>
          </div>
          <div className="flex flex-col gap-3">
            <ProjectCard
              title="WikaWonders Kids"
              description="An interactive educational platform helping Filipino children learn language through engaging games and activities."
              imageUrl="/cover_banner.svg"
              siteUrl="https://wikawonderskids.com"
              githubUrl="https://github.com/kinitsZ/wikawonders-kids-2025"
            />
          </div>
        </div>

        <hr className="border-t-2 border-[#e0e0e0] mt-7" />

        {/* EDUCATION section */}
        <div className="mt-7">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap size={16} className="text-[#b0b0b0]" />
            <h2 className="text-xl font-bold text-[#4E4E4E]">Education</h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/Seal_of_Lyceum_of_the_Philippines_University.svg"
                alt="LPU Logo"
                width={40}
                height={40}
                className="shrink-0"
              />
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-[#4E4E4E]">BS Computer Science — Data Science</p>
                <p className="text-xs text-[#ababab]">Lyceum of the Philippines University – Batangas</p>
              </div>
            </div>
            <div className="shrink-0 ml-4 text-right">
              <p className="text-xs text-[#c8c8c8]">2022 – Aug 2026</p>
              <p className="text-xs text-[#c8c8c8] mt-0.5">Expected graduation</p>
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-[#e0e0e0] mt-7" />

        {/* AWARDS section */}
        <div className="mt-7">
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={16} className="text-[#b0b0b0]" />
            <h2 className="text-xl font-bold text-[#4E4E4E]">Awards</h2>
          </div>
          <AwardsTimeline />
        </div>

        <hr className="border-t-2 border-[#e0e0e0] mt-7" />

        {/* LICENSES & CERTIFICATIONS section */}
        <div className="mt-7">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-[#b0b0b0]" />
              <h2 className="text-xl font-bold text-[#4E4E4E]">Licenses & Certifications</h2>
            </div>
            <CertAllModal />
          </div>
          <CertCarousel />
        </div>

        <hr className="border-t-2 border-[#e0e0e0] mt-7" />

        {/* CONTACT section */}
        <div className="mt-7 mb-20">
          <div className="flex items-center gap-2 mb-4">
            <Mail size={16} className="text-[#b0b0b0]" />
            <h2 className="text-xl font-bold text-[#4E4E4E]">Contact</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Email */}
            <a href="mailto:fernandozymer@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-[#f9f9f9] hover:bg-[#f2f2f2] transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                <Mail size={14} className="text-[#9a9a9a]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-[#c0c0c0]">Email</p>
                <p className="text-xs font-medium text-[#4E4E4E] group-hover:text-[#2a2a2a] transition-colors truncate">fernandozymer@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+639563545164" className="flex items-center gap-3 p-3 rounded-xl bg-[#f9f9f9] hover:bg-[#f2f2f2] transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                <Phone size={14} className="text-[#9a9a9a]" />
              </div>
              <div>
                <p className="text-[10px] text-[#c0c0c0]">Phone</p>
                <p className="text-xs font-medium text-[#4E4E4E] group-hover:text-[#2a2a2a] transition-colors">+63 956 354 5164</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/zymer-fernando-24baa5259/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-[#f9f9f9] hover:bg-[#f2f2f2] transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#9a9a9a]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <p className="text-[10px] text-[#c0c0c0]">LinkedIn</p>
                <p className="text-xs font-medium text-[#4E4E4E] group-hover:text-[#2a2a2a] transition-colors">zymer-fernando</p>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/kinitsZ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-[#f9f9f9] hover:bg-[#f2f2f2] transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#9a9a9a]"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </div>
              <div>
                <p className="text-[10px] text-[#c0c0c0]">GitHub</p>
                <p className="text-xs font-medium text-[#4E4E4E] group-hover:text-[#2a2a2a] transition-colors">kinitsZ</p>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/zymer.fernando.2024" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-[#f9f9f9] hover:bg-[#f2f2f2] transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#9a9a9a]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
              <div>
                <p className="text-[10px] text-[#c0c0c0]">Facebook</p>
                <p className="text-xs font-medium text-[#4E4E4E] group-hover:text-[#2a2a2a] transition-colors">zymer.fernando.2024</p>
              </div>
            </a>

            {/* Download CV */}
            <a
              href="/FERNANDOZYMER_RESUME.pdf"
              download
              className="flex items-center gap-3 p-3 rounded-xl bg-[#4E4E4E] hover:bg-[#3a3a3a] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Download size={14} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-white/50">Resume</p>
                <p className="text-xs font-medium text-white">Download CV</p>
              </div>
            </a>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="mt-0 border-t border-[#ebebeb]">
        <div className="max-w-2xl mx-auto px-4 sm:px-2 py-8 flex flex-col items-center gap-3">
          <p className="text-[11px] text-[#c8c8c8] tracking-widest uppercase">Zymer Fernando</p>
          <p className="text-[10px] text-[#d8d8d8]">
            © {new Date().getFullYear()} · Built with Next.js & Tailwind CSS · Deployed on Vercel
          </p>
          <div className="flex gap-4 mt-1">
            <a href="https://www.linkedin.com/in/zymer-fernando-24baa5259/" target="_blank" rel="noopener noreferrer" className="text-[#d0d0d0] hover:text-[#4E4E4E] transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/kinitsZ" target="_blank" rel="noopener noreferrer" className="text-[#d0d0d0] hover:text-[#4E4E4E] transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="https://www.facebook.com/zymer.fernando.2024" target="_blank" rel="noopener noreferrer" className="text-[#d0d0d0] hover:text-[#4E4E4E] transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="mailto:fernandozymer@gmail.com" className="text-[#d0d0d0] hover:text-[#4E4E4E] transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
