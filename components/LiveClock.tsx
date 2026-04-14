'use client'

import { useState, useEffect } from 'react'

const LiveClock = () => {
  const [label, setLabel] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const day = now.toLocaleDateString('en-US', { weekday: 'long' })
      const date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
      const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
      setLabel(`${day}, ${date} · ${time}`)
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <p className="text-sm text-[#c3c3c3] font-medium">{label}</p>
  )
}

export default LiveClock
