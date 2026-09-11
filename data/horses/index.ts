import { contigo } from "./contigo";
import { nancy } from "./nancy";
import { tyson } from "./tyson";

export type { Horse, HorseStatus } from "./types";

export const horses = [contigo, nancy, tyson] as const;

export function findHorseBySlug(slug: string) {
  return horses.find((horse) => horse.slug === slug);
}
