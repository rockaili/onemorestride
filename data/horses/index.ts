import { contigo } from "./contigo";

export type { Horse, HorseStatus } from "./types";

export const horses = [contigo] as const;

export function findHorseBySlug(slug: string) {
  return horses.find((horse) => horse.slug === slug);
}
