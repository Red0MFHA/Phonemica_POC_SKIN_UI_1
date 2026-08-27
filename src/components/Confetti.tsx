const COLORS = ["#fbbf24", "#34d399", "#f87171", "#fde047", "#4ade80", "#fb923c"];

export default function Confetti() {
  const pieces = Array.from({ length: 36 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${(i * 137) % 100}%`,
            backgroundColor: COLORS[i % COLORS.length],
            animationDuration: `${2 + ((i * 71) % 30) / 10}s`,
            animationDelay: `${(i * 53) % 20 / 10}s`,
          }}
        />
      ))}
    </div>
  );
}
