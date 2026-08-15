import Image from "next/image";
import Link from "next/link";
import type { Horse } from "@/data/horses";
import { HorseshoeIcon } from "./HorseshoeIcon";

export function HorseCard({ horse }: { horse: Horse }) {
  return (
    <Link className="horse-card" href={`/horses/${horse.slug}`} data-reveal="item">
      <div className="horse-card__image">
        <Image src={horse.image} alt={`${horse.name} the horse`} fill sizes="180px" />
      </div>
      <div className="horse-card__body">
        <div>
          <h3>{horse.name}</h3>
          <p>{horse.status}</p>
        </div>
        <HorseshoeIcon size={20} />
      </div>
    </Link>
  );
}
