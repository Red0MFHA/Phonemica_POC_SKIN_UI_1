"use client";

import { useRouter } from "next/navigation";
import { theme } from "@/config/game";
import BgZone from "@/components/BgZone";

export default function WelcomePage() {
  const router = useRouter();
  return (
    <div className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b ${theme.background} p-6 text-center`}>
      <BgZone />
      <div className="relative z-10 flex w-full flex-col items-center">
      <div className="text-6xl">🌴</div>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-white drop-shadow-lg">Jungle Quest</h1>
      <p className="mt-2 text-lime-200">The Phoneme Adventure</p>
      <p className="mt-6 max-w-sm text-sm text-lime-100/80">
        Explore the jungle, meet friendly animals, and find hidden paths by using your voice.
      </p>
      <button
        onClick={() => router.push("/child")}
        className="mt-8 rounded-2xl bg-amber-400 px-8 py-3 text-lg font-bold text-emerald-950 shadow-lg transition-transform hover:scale-105"
      >
        🐾 Tap to start
      </button>
      </div>
    </div>
  );
}
