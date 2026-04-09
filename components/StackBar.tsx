import React from 'react'

type StackBarProps = {
  stack: string;
}

const StackBar = ({ stack }: StackBarProps) => {
  return (
    <div className='text-[#8a8a8a] inline-block px-3 py-1 rounded text-xs font-medium border border-[#e8e8e8] hover:border-[#4E4E4E] hover:text-[#4E4E4E] transition-colors cursor-default'>
      {stack}
    </div>
  )
}

export default StackBar
