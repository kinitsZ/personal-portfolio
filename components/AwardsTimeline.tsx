const awards = [
  {
    title: "3rd Place — Programming Competition",
    event: "LPU-B Technovation",
    date: "Oct–Dec 2024",
  },
  {
    title: "6th Place — Programming Competition",
    event: "DataBiz Conference 2024",
    date: "2024",
  },
  {
    title: "Finalist — CODE International 2024",
    event: "Competition of Outstanding Creativity and Exploration · Brawijaya University, Indonesia",
    date: "2024",
  },
  {
    title: "Participant — FACE-IT",
    event: "Filkom UB Academic and Cultural Exchange on Information Technology · Indonesia",
    date: "2024",
  },
];

const AwardsTimeline = () => {
  return (
    <div style={{ position: "relative", paddingLeft: "22px" }}>
      {/* Vertical rail */}
      <div
        style={{
          position: "absolute",
          left: "3px",
          top: "8px",
          bottom: "8px",
          width: "1px",
          background: "var(--line)",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {awards.map((award, i) => (
          <div
            key={i}
            data-reveal
            data-reveal-delay={i * 90}
            style={{ position: "relative" }}
            className="group/award"
          >
            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "-22px",
                top: "5px",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "var(--bg)",
                border: "2px solid var(--faint)",
                transition: "border-color 0.2s ease",
              }}
              className="group-hover/award:border-accent!"
            />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--ink)",
                    lineHeight: 1.35,
                    marginBottom: "4px",
                  }}
                >
                  {award.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--muted-text)",
                    lineHeight: 1.4,
                  }}
                >
                  {award.event}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11.5px",
                  color: "var(--faint)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                {award.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsTimeline;
