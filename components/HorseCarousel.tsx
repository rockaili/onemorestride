import { ChevronLeft, ChevronRight } from "lucide-react";
import { horses } from "@/data/horses";
import { Button } from "./Buttons";
import { HorseCard } from "./HorseCard";
import { SectionHeading } from "./SectionHeading";

const filters = ["All Horses", "In Rehabilitation", "Available for Adoption", "Sanctuary"];

export function HorseCarousel() {
  return (
    <section className="horses-section" data-reveal="section">
      <SectionHeading title="Our Horses" />
      <div className="horses-intro">
        <p>Each of our horses has a story.</p>
        <p>Together, we write their next chapter.</p>
      </div>
      <div className="horse-filters" aria-label="Horse filters">
        {filters.map((filter, index) => (
          <button className={index === 0 ? "active" : undefined} key={filter} type="button">
            {filter}
          </button>
        ))}
      </div>
      <div className="horse-row-wrap">
        <button className="carousel-arrow carousel-arrow--left" type="button" aria-label="Previous horses">
          <ChevronLeft size={18} />
        </button>
        <div className="horse-row">
          {horses.map((horse) => (
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
