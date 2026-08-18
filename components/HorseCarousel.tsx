"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { horses, type HorseStatus } from "@/data/horses";
import { Button } from "./Buttons";
import { HorseCard } from "./HorseCard";
import { SectionHeading } from "./SectionHeading";

type HorseFilter = "All Horses" | HorseStatus;

const filters: HorseFilter[] = [
  "All Horses",
  ...Array.from(new Set(horses.map((horse) => horse.status)))
];

export function HorseCarousel() {
  const [activeFilter, setActiveFilter] = useState<HorseFilter>("All Horses");
  const filteredHorses = useMemo(() => {
    if (activeFilter === "All Horses") {
      return horses;
    }

    return horses.filter((horse) => horse.status === activeFilter);
  }, [activeFilter]);

  return (
    <section className="horses-section" data-reveal="section">
      <SectionHeading title="Our Horses" />
      <div className="horses-intro">
        <p>Each of our horses has a story.</p>
        <p>Together, we write their next chapter.</p>
      </div>
      <div className="horse-filters" aria-label="Horse filters">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className={activeFilter === filter ? "active" : undefined}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="horse-row-wrap">
        <button className="carousel-arrow carousel-arrow--left" type="button" aria-label="Previous horses">
          <ChevronLeft size={18} />
        </button>
        <div className="horse-row">
          {filteredHorses.map((horse) => (
            <HorseCard horse={horse} key={horse.slug} />
          ))}
        </div>
        <button className="carousel-arrow carousel-arrow--right" type="button" aria-label="Next horses">
          <ChevronRight size={18} />
        </button>
      </div>
      <Button href="/horses" variant="olive">
        Meet All Our Horses
      </Button>
    </section>
  );
}
