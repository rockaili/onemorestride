import { contigo } from "./contigo";
import { nancy } from "./nancy";

export type { Horse, HorseStatus } from "./types";

export const horses = [contigo, nancy] as const;

export function findHorseBySlug(slug: string) {
  return horses.find((horse) => horse.slug === slug);
}
