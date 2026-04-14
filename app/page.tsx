// import { ModeToggle } from "@/components/ModeToggle";
// import DownloadCV from "@/components/DownloadCV";
// import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { User, Layers, FolderGit2, GraduationCap, Trophy, BadgeCheck } from "lucide-react";
import StackBar from "@/components/StackBar";
import CertCarousel from "@/components/CertCarousel";
import CertAllModal from "@/components/CertAllModal";
import AwardsTimeline from "@/components/AwardsTimeline";
import ProjectCard from "@/components/ProjectCard";
import LiveClock from "@/components/LiveClock";

export default function Home() {
  return (
    <div>
      {/* MAIN-content container */}
      <div className="max-w-2xl mx-auto mt-20 px-1">

        {/* HEADER section */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-3 items-center">
            <div className="rounded-md border-cycle-on-hover w-12 h-12 shrink-0" />
            <div className="flex flex-col gap-1">
              <LiveClock />
              <p className="text-2xl text-[#4E4E4E] font-medium">Hello, I am Zymer!</p>
              <div className="flex gap-3 mt-0.5">
                <a href="https://www.linkedin.com/in/zymer-fernando-24baa5259/" target="_blank" rel="noopener noreferrer" className="text-[#b0b0b0] hover:text-[#4E4E4E] transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://github.com/kinitsZ" target="_blank" rel="noopener noreferrer" className="text-[#b0b0b0] hover:text-[#4E4E4E] transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
                <a href="https://www.facebook.com/zymer.fernando.2024" target="_blank" rel="noopener noreferrer" className="text-[#b0b0b0] hover:text-[#4E4E4E] transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-3xl drop-shadow-sm bg-linear-to-b from-[#d0d0d0] to-[#4a4a4a] bg-clip-text text-transparent text-right font-bold font-serif leading-tight">
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
            <StackBar stack="Redis" />
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
        <div className="mt-7 mb-20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-[#b0b0b0]" />
              <h2 className="text-xl font-bold text-[#4E4E4E]">Licenses & Certifications</h2>
            </div>
            <CertAllModal />
          </div>
          <CertCarousel />
        </div>

      </div>
    </div>
  );
}
