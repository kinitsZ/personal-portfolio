'use client'

import Image from 'next/image'

type ProjectCardProps = {
  title: string
  description: string
  imageUrl?: string
  siteUrl?: string
  githubUrl?: string
  slug?: string
}

const ProjectCard = ({ title, description, imageUrl, siteUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="group relative w-full cursor-pointer rounded-2xl overflow-hidden h-[310px] ring-1 ring-black/6 group-hover:ring-black/10 transition-all duration-700">

      {/* Image */}
      <div className="absolute inset-0 grayscale blur-[1.5px] group-hover:grayscale-0 group-hover:filter-none transition-all duration-700">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-[#8a8a8a] to-[#3a3a3a]" />
        )}
      </div>

      {/* Always-on bottom vignette so text is readable */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent" />

      {/* Hover overlay — strengthens the vignette */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Links — top right on hover */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 -translate-y-1.5 group-hover:translate-y-0 transition-all duration-500">
        {siteUrl && (
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-[11px] font-medium text-white/90 bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 transition-colors"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            ↗ Visit site
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 transition-colors"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
        )}
      </div>

      {/* Title always visible at bottom, description slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p
          className="text-white text-base font-semibold leading-tight tracking-tight"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {title}
        </p>
        <p
          className="text-white/0 group-hover:text-white/65 text-[12px] leading-relaxed mt-1.5 max-w-md overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {description}
        </p>
      </div>

    </div>
  )
}

export default ProjectCard
