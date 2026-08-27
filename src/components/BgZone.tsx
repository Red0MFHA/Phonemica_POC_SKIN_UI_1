export default function BgZone() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* corner + empty-space floating wildlife */}
      <span className="animate-floaty absolute left-[6%] top-[16%] text-4xl opacity-70">🦋</span>
      <span className="animate-floaty absolute right-[8%] top-[22%] text-4xl opacity-70" style={{ animationDelay: "0.6s" }}>🌺</span>
      <span className="animate-floaty absolute left-[12%] bottom-[30%] text-3xl opacity-60" style={{ animationDelay: "1.2s" }}>🐦</span>
      <span className="animate-floaty absolute right-[12%] bottom-[24%] text-4xl opacity-70" style={{ animationDelay: "1.8s" }}>🌿</span>
      <span className="animate-twinkle absolute left-[4%] top-[55%] text-2xl opacity-60">🍃</span>
      <span className="animate-twinkle absolute right-[4%] top-[8%] text-2xl opacity-60" style={{ animationDelay: "1s" }}>⭐</span>
      <span className="animate-twinkle absolute left-[20%] top-[8%] text-xl opacity-60" style={{ animationDelay: "1.6s" }}>✨</span>
      <span className="animate-floaty absolute left-1/2 top-[6%] -translate-x-1/2 text-3xl opacity-50" style={{ animationDelay: "2.2s" }}>🐒</span>

      {/* bottom foliage / ground */}
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-emerald-950/70 to-transparent" />
      <div className="absolute -bottom-2 left-0 right-0 flex items-end justify-between overflow-hidden">
        <span className="text-7xl opacity-90">🌴</span>
        <span className="text-6xl opacity-80">🌳</span>
        <span className="text-7xl opacity-90">🌴</span>
      </div>
      <div className="absolute bottom-3 left-[10%] text-5xl opacity-80">🍄</div>
      <div className="absolute bottom-2 right-[12%] text-4xl opacity-70">🌸</div>
    </div>
  );
}
