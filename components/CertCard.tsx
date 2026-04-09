'use client'

import { useState } from 'react'
import Image from 'next/image'

type CertCardProps = {
  name: string
  issuer: string
  date: string
  imageUrl?: string
}

const CertCard = ({ name, issuer, date, imageUrl }: CertCardProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex justify-between items-center py-4 border-b border-[#ebebeb] last:border-0 group">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#d0d0d0] group-hover:bg-[#4E4E4E] transition-colors shrink-0" />
          <div className="flex flex-col gap-0.5">
            <p className="font-medium text-[#4E4E4E] text-sm leading-snug">{name}</p>
            <p className="text-xs text-[#ababab]">{issuer}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0 ml-4">
          <p className="text-xs text-[#c8c8c8] whitespace-nowrap">{date}</p>
          {imageUrl && (
            <button
              onClick={() => setOpen(true)}
              className="text-xs text-[#ababab] hover:text-[#4E4E4E] transition-colors border border-[#e0e0e0] hover:border-[#4E4E4E] rounded px-2.5 py-1 cursor-pointer whitespace-nowrap"
            >
              View
            </button>
          )}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageUrl!}
              alt={name}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-[#4E4E4E] bg-white/90 hover:bg-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold transition-colors shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CertCard
