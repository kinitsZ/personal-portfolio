'use client'

import { useState } from 'react'
import Image from 'next/image'

const certs = [
  {
    name: "Excel Associate — Microsoft 365 Apps",
    issuer: "Microsoft Office Specialist",
    date: "Dec 2025",
    imageUrl: "/certification/Excel Associate.png",
  },
  {
    name: "Generative AI: Introduction and Applications",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Generative%20AI%3A%20Introduction%20and%20Applications.png",
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Generative%20AI%3A%20Prompt%20Engineering%20Basics.png",
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Introduction%20to%20Software%20Engineering.png",
  },
  {
    name: "Software Engineering: Modeling Software Systems using UML",
    issuer: "HKUST · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Software%20Engineering%3A%20Modeling%20Software%20Systems%20using%20UML.png",
  },
  {
    name: "Introduction to HTML, CSS, & JavaScript",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Introduction%20to%20HTML%2C%20CSS%2C%20%26%20JavaScript.png",
  },
  {
    name: "Java Programming for Beginners",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Java Programmers for Beginners.png",
  },
]

const CertAllModal = () => {
  const [open, setOpen] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs text-[#9b9b9b] hover:text-[#4E4E4E] border border-[#e0e0e0] hover:border-[#4E4E4E] rounded px-2.5 py-1 transition-colors cursor-pointer"
      >
        See all
      </button>

      {/* All certs modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-6 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white flex justify-between items-center px-6 py-4 border-b border-[#e8e8e8] z-10">
              <h3 className="text-base font-bold text-[#4E4E4E]">All Certifications</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-[#9b9b9b] hover:text-[#4E4E4E] transition-colors cursor-pointer text-xs border border-[#e0e0e0] hover:border-[#4E4E4E] rounded px-2.5 py-1"
              >
                Close
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-4 p-6">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 cursor-zoom-in group"
                  onClick={() => setLightbox(i)}
                >
                  <div className="overflow-hidden rounded-md border border-[#e8e8e8] group-hover:border-[#4E4E4E] transition-colors">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.name}
                      width={400}
                      height={300}
                      className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#4E4E4E] leading-snug">{cert.name}</p>
                    <p className="text-xs text-[#ababab]">{cert.issuer} · {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox from grid */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={certs[lightbox].imageUrl}
              alt={certs[lightbox].name}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 bg-white/90 hover:bg-white text-[#4E4E4E] rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold transition-colors shadow cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CertAllModal
