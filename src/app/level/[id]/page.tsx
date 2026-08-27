"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { theme, difficultyZone, animalForPhoneme } from "@/config/game";
import BgZone from "@/components/BgZone";
import { engineClient } from "@/services";
import { getGameState } from "@/lib/state";
import type { Level } from "@/types/engine";

export default function LevelIntroPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [level, setLevel] = useState<Level | null>(null);

  useEffect(() => {
    const sessionId = getGameState().sessionId;
    if (!sessionId) { router.replace("/home"); return; }
    engineClient.getCurrentLevel(sessionId).then((lv) => {
      setLevel(lv);
      if (lv && lv.index !== +params.id) {
        engineClient.getNextExercise(sessionId); // keep engine primed
      }
    });
  }, [params.id, router]);

  return (
    <div className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b ${theme.background} p-6`}>
      <BgZone />
      <div className="relative z-10 flex w-full flex-col items-center">
      {level ? (
        <>
          <div className="text-6xl">{animalForPhoneme[level.phoneme] ?? "🐾"}</div>
          <h1 className="mt-4 text-3xl font-black text-white">Level {level.index}</h1>
          <p className="mt-1 text-lg text-lime-200">{difficultyZone(level.difficulty)}</p>
          <p className="mt-4 max-w-xs text-center text-sm text-lime-100/80">
            Help the explorer reach the next landmark. Say the {level.phoneme} words!
          </p>
          <button
            onClick={() => router.push(`/exercise/${params.id}`)}
            className="mt-8 rounded-2xl bg-amber-400 px-10 py-3 text-lg font-bold text-emerald-950 shadow-xl transition-transform hover:scale-105"
          >
            Start level
          </button>
        </>
      ) : (
        <p className="text-white">Loading…</p>
      )}
      </div>
    </div>
  );
}
