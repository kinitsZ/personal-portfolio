type SectionHeaderProps = {
  num: string;
  title: string;
};

const SectionHeader = ({ num, title }: SectionHeaderProps) => {
  return (
    <div data-reveal className="flex items-center gap-4 mb-10">
      <span
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--accent)",
          letterSpacing: "0.18em",
          fontSize: "11px",
          fontWeight: 400,
          flexShrink: 0,
        }}
      >
        {num}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          color: "var(--ink)",
          lineHeight: 0.95,
          fontSize: "clamp(30px, 4.4vw, 48px)",
          flexShrink: 0,
        }}
      >
        {title}
      </h2>
      <div
        className="rule-line"
        style={{ height: "1px", background: "var(--line)", flex: 1 }}
      />
    </div>
  );
};

export default SectionHeader;
