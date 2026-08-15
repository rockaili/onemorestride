import { DonationSection } from "@/components/DonationSection";
import { HomeHero } from "@/components/HomeHero";
import { PageShell } from "@/components/PageShell";
import { Pillars } from "@/components/Pillars";

export default function Home() {
  return (
    <PageShell>
      <main>
        <HomeHero />
        <Pillars />
        <DonationSection />
      </main>
    </PageShell>
  );
}
