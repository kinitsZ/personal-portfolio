'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

const photos = [
  '/self-images/pfp1.JPG',
  '/self-images/pfp2.jpg',
  '/self-images/pfp3.JPG',
]

const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899']

type Particle = { id: number; angle: number; color: string }

let uid = 0

export default function ProfilePic() {
  const [index, setIndex] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])

  const handleClick = useCallback(() => {
    setIndex(i => (i + 1) % photos.length)

    const burst: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: uid++,
      angle: (i / 12) * 360,
      color: colors[i % colors.length],
    }))

    setParticles(prev => [...prev, ...burst])
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !burst.includes(p)))
    }, 650)
  }, [])

  return (
    <div
      className="relative w-14 h-14 sm:w-20 sm:h-20 shrink-0 cursor-pointer rounded-2xl border-cycle-on-hover p-[5px] overflow-visible transition-transform duration-200 hover:scale-125 hover:z-50"
      onClick={handleClick}
    >
      {/* photo frame */}
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <Image
          src={photos[index]}
          alt="Profile photo"
          fill
          className="object-cover"
          sizes="200px"
          quality={95}
        />
      </div>

      {/* particles */}
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 5,
            height: 5,
            top: '50%',
            left: '50%',
            backgroundColor: p.color,
            animation: 'particle-burst 0.6s ease-out forwards',
            '--angle': `${p.angle}deg`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
