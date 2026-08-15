export type Horse = {
  slug: string;
  name: string;
  status: "In Rehabilitation" | "Available for Adoption" | "Sanctuary";
  image: string;
  shortDescription: string;
};

export const horseImageAssets = {
  breeze: "/images/horse-breeze.png",
  ollie: "/images/horse-ollie.png",
  daisy: "/images/horse-daisy.png",
  finn: "/images/horse-finn.png"
} as const;

export const horses: Horse[] = [
  {
    slug: "breeze",
    name: "Breeze",
    status: "In Rehabilitation",
    image: horseImageAssets.breeze,
    shortDescription: "A gentle grey mare learning to trust again."
  },
  {
    slug: "ollie",
    name: "Ollie",
    status: "In Rehabilitation",
    image: horseImageAssets.ollie,
    shortDescription: "A bright gelding rebuilding strength day by day."
  },
  {
    slug: "daisy",
    name: "Daisy",
    status: "Available for Adoption",
    image: horseImageAssets.daisy,
    shortDescription: "A kind soul ready for a patient, loving home."
  },
  {
    slug: "finn",
    name: "Finn",
    status: "Sanctuary",
    image: horseImageAssets.finn,
    shortDescription: "A steady companion enjoying a calm sanctuary life."
  }
];
