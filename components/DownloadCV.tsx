import React from 'react'
import GlareHover from './GlareHover'
import { Button } from './ui/button'

const DownloadCV = () => {
  return (
    <div>
      <GlareHover playOnce={false} glareColor="#d3d3d3">
        <a href="/FERNANDOZYMER_RESUME.pdf">
          <Button variant="outline" className="border-2 cursor-pointer">
            Download CV
          </Button>
        </a>
      </GlareHover>
    </div>
  )
}

export default DownloadCV