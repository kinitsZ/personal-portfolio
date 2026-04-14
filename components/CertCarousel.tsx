'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

type Cert = {
  name: string
  issuer: string
  date: string
  imageUrl: string
}

const certs: Cert[] = [
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
  {
    name: "Data Visualization with Python",
    issuer: "IBM · Coursera",
    date: "May 2025",
    imageUrl: "/certification/Data Visualization with Python.png",
  },
]

const CertCarousel = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = (dir: 'left' | 'right') => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setIndex((i) =>
        dir === 'right'
          ? (i + 1) % certs.length
          : (i - 1 + certs.length) % certs.length
      )
      setAnimating(false)
    }, 300)
  }

  const prev = () => go('left')
  const next = () => go('right')

  useEffect(() => {
    if (paused || animating) return
    intervalRef.current = setInterval(() => {
      setDirection('right')
      setAnimating(true)
      setTimeout(() => {
        setIndex((i) => (i + 1) % certs.length)
        setAnimating(false)
      }, 300)
    }, 4000)
    return () => clearInterval(intervalRef.current!)
  }, [paused, index, animating])

  const getSlot = (offset: number) => certs[(index + offset + certs.length) % certs.length]

  const slideClass = animating
    ? direction === 'right'
      ? 'translate-x-[-8%] opacity-0'
      : 'translate-x-[8%] opacity-0'
    : 'translate-x-0 opacity-100'

  return (
    <div
      className="flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track */}
      <div className="flex items-center gap-3 overflow-hidden">

        {/* Prev */}
        <div
          className={`shrink-0 w-[30%] opacity-40 scale-95 origin-right cursor-pointer rounded-md overflow-hidden border border-[#e8e8e8] transition-all duration-300 ${animating ? 'opacity-20' : 'opacity-40'}`}
          onClick={prev}
        >
          <Image
            src={getSlot(-1).imageUrl}
            alt={getSlot(-1).name}
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Active */}
        <div
          className={`shrink-0 w-[40%] rounded-lg overflow-hidden border border-[#d0d0d0] shadow-sm cursor-zoom-in transition-all duration-300 ${slideClass}`}
          onClick={() => setLightbox(true)}
        >
          <Image
            src={getSlot(0).imageUrl}
            alt={getSlot(0).name}
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Next */}
        <div
          className={`shrink-0 w-[30%] scale-95 origin-left cursor-pointer rounded-md overflow-hidden border border-[#e8e8e8] transition-all duration-300 ${animating ? 'opacity-20' : 'opacity-40'}`}
          onClick={next}
        >
          <Image
            src={getSlot(1).imageUrl}
            alt={getSlot(1).name}
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>

      </div>

      {/* Info + controls */}
      <div className="flex justify-between items-center">
        <div className={`flex flex-col gap-0.5 transition-all duration-300 ${animating ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}`}>
          <p className="text-sm font-medium text-[#4E4E4E] leading-snug">{getSlot(0).name}</p>
          <p className="text-xs text-[#ababab]">{getSlot(0).issuer} · {getSlot(0).date}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <button
            onClick={prev}
            className="text-xs text-[#9b9b9b] hover:text-[#4E4E4E] border border-[#e0e0e0] hover:border-[#4E4E4E] rounded px-2.5 py-1 transition-colors cursor-pointer"
          >
            ←
          </button>
          <span className="text-xs text-[#c3c3c3]">{index + 1} / {certs.length}</span>
          <button
            onClick={next}
            className="text-xs text-[#9b9b9b] hover:text-[#4E4E4E] border border-[#e0e0e0] hover:border-[#4E4E4E] rounded px-2.5 py-1 transition-colors cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-1.5 justify-center">
        {certs.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${i === index ? 'bg-[#4E4E4E]' : 'bg-[#d0d0d0]'}`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          <div
            className="relative max-w-2xl w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getSlot(0).imageUrl}
              alt={getSlot(0).name}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-3 right-3 bg-white/90 hover:bg-white text-[#4E4E4E] rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold transition-colors shadow cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CertCarousel
