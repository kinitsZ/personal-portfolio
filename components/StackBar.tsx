type StackBarProps = {
  stack: string;
};

const StackBar = ({ stack }: StackBarProps) => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "9px 16px",
        borderRadius: "999px",
        background: "var(--bg2)",
        border: "1px solid var(--line)",
        fontFamily: "var(--font-sans)",
        fontSize: "13px",
        fontWeight: 500,
        color: "var(--muted-text)",
        cursor: "default",
        transition: "transform 0.25s ease, border-color 0.2s ease, color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.color = "var(--ink)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--line)";
        e.currentTarget.style.color = "var(--muted-text)";
      }}
    >
      {stack}
    </div>
  );
};

export default StackBar;
