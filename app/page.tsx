// import { ModeToggle } from "@/components/ModeToggle";
// import DownloadCV from "@/components/DownloadCV";
// import { Card, CardTitle } from "@/components/ui/card";
import StackBar from "@/components/StackBar";
import CertCarousel from "@/components/CertCarousel";
import CertAllModal from "@/components/CertAllModal";

export default function Home() {
  return (
    <div>
      {/* MAIN-content container */}
      <div className="max-w-2xl mx-auto mt-20 px-1">

        {/* HEADER section */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-3 items-center">
            <div className="rounded-md border-cycle-on-hover w-12 h-12 shrink-0" />
            <div className="flex flex-col gap-0.5">
              <p className="text-sm text-[#c3c3c3] font-medium">Monday, January 18 · 2:09 AM</p>
              <p className="text-2xl text-[#4E4E4E] font-medium">Hello, I am Zymer!</p>
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
          <h2 className="text-xl font-bold text-[#4E4E4E] mb-3">About</h2>
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
          <h2 className="text-xl font-bold text-[#4E4E4E] mb-3">Tech Stack</h2>
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
          <h2 className="text-xl font-bold text-[#4E4E4E] mb-3">Projects</h2>
          <p className="text-sm text-[#c3c3c3] tracking-widest uppercase text-center py-6 border border-dashed border-[#e0e0e0] rounded">
            In progress
          </p>
        </div>

        <hr className="border-t-2 border-[#e0e0e0] mt-7" />

        {/* LICENSES & CERTIFICATIONS section */}
        <div className="mt-7 mb-20">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-[#4E4E4E]">Licenses & Certifications</h2>
            <CertAllModal />
          </div>
          <CertCarousel />
        </div>

      </div>
    </div>
  );
}
