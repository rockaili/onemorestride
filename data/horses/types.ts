export type HorseStatus =
  | "In Rehabilitation"
  | "Available for Adoption"
  | "Sanctuary"
  | "In Medical Care";

export type Horse = {
  slug: string;
  name: string;
  status: HorseStatus;
  image: string;
  shortDescription: string;
  story: string[];
};
