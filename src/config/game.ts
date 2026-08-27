export const GAME_ID = "jungle-quest";

// Each skin exposes its own theme. The Engine only sends generic exercises;
// the skin maps engine difficulty into its own world.
export const theme = {
  name: "Jungle Quest",
  primary: "#166534",
  accent: "#f59e0b",
  background: "from-lime-900 via-green-800 to-emerald-900",
  card: "bg-emerald-950/70 border-emerald-700",
  text: "text-lime-100",
};

// difficulty 0..1 → jungle zone. Engine never knows these names.
export const difficultyZone = (difficulty: number): string => {
  if (difficulty < 0.2) return "🌱 Easy Trail";
  if (difficulty < 0.4) return "🌿 Forest Path";
  if (difficulty < 0.6) return "🌳 Deep Jungle";
  if (difficulty < 0.8) return "🐊 Challenge River";
  return "🗿 Ancient Temple";
};

export const animalForPhoneme: Record<string, string> = {
  "/r/": "🐰",
  "/s/": "🐒",
  "/th/": "🦜",
  "/k/": "🐯",
  "/l/": "🦁",
};

export const assets = {
  // Kenney assets dropped here; UI falls back to emoji if absent.
  background: "/game/jungle/background.png",
  trail: "/game/jungle/trail.png",
  character: "/game/jungle/character.png",
};
