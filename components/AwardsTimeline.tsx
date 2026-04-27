const awards = [
  {
    title: "3rd Place — Programming Competition",
    event: "LPU-B Technovation",
    date: "Oct–Dec 2024",
    url: null,
  },
  {
    title: "6th Place — Programming Competition",
    event: "DataBiz Conference 2024",
    date: "2024",
    url: "#",
  },
  {
    title: "Finalist — CODE INTERNATIONAL 2024",
    event: "Competition of Outstanding Creativity and Exploration · Brawijaya University, Indonesia",
    date: "2024",
    url: "#",
  },
  {
    title: "Participant — FACE-IT",
    event: "Filkom UB Academic and Cultural Exchange on Information Technology · Indonesia",
    date: "2024",
    url: "#",
  },
]

const AwardsTimeline = () => {
  return (
    <div className="relative ml-2">
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-2 w-px bg-[#e8e8e8]" />

      <div className="flex flex-col gap-6">
        {awards.map((award, i) => (
          <div key={i} className="relative pl-6 group">
            {/* Dot */}
            <div className="absolute left-[-3.5px] top-1.5 w-2 h-2 rounded-full border-2 border-[#d0d0d0] bg-white group-hover:border-[#4E4E4E] transition-colors" />

            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-sm font-medium text-[#4E4E4E] leading-snug">{award.title}</p>
                <p className="text-xs text-[#ababab] leading-snug">{award.event}</p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <p className="text-xs text-[#c8c8c8] whitespace-nowrap">{award.date}</p>
                {award.url && (
                  <a
                    href={award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#9b9b9b] hover:text-[#4E4E4E] border border-[#e0e0e0] hover:border-[#4E4E4E] rounded px-2 py-0.5 transition-colors"
                  >
                    View
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AwardsTimeline
