import Image from "next/image";
import { siteAssets } from "@/data/assets";
import { Button } from "./Buttons";
import { SectionHeading } from "./SectionHeading";

export function AboutPreview() {
  return (
    <main className="interior-page about-page">
      <section className="about-split" data-reveal="section">
        <div className="about-copy" data-reveal="item">
          <SectionHeading title="About" align="left" />
          <p>
            One More Stride is founded on a simple belief: every horse deserves
            kindness, patience and a chance.
          </p>
          <p>
            Based in Kildare, Ireland, Laragh rescues horses in need, provides
            expert care and rehabilitation, and helps them find brighter
            futures.
          </p>
          <Button href="/about" variant="olive">
            Laragh&apos;s Story
          </Button>
        </div>
        <div className="about-photo" data-reveal="item">
          <Image
            src={siteAssets.photos.about}
            alt="Laragh standing beside a grey horse in a stable"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
          />
        </div>
      </section>
      <section className="laragh-message" data-reveal="section">
        <SectionHeading title="A Message From Laragh" align="left" />
        <div className="laragh-message__body">
          <p>
            Hi, my name is Laragh, and I have worked in the horse industry my
            whole life, teaching, riding and training horses. For a time, I also
            worked in the racing industry.
          </p>
          <p>
            Over the years, I have rescued many horses and ponies. Some I was
            able to build up and retrain for teaching and equine therapy, but
            many of them are now very old and unable to work.
          </p>
          <p>
            I also have a number of Thoroughbreds who either didn&apos;t make the
            grade in racing or were injured during their time in training. Some
            of these I was able to successfully retrain as riding horses.
            Unfortunately, others have injuries that mean they are unable to be
            ridden and will now stay with me for the rest of their lives.
          </p>
          <p>
            I currently care for 13 horses and ponies, including Twix, who has
            just celebrated his incredible 46th birthday.
          </p>
          <p>
            With the rising costs of hay, feed, veterinary care and other
            expenses, their future has become increasingly uncertain. Some of
            the older horses also require expensive ongoing medication for
            age-related conditions such as Cushing&apos;s disease, as well as care
            for other issues that come with age.
          </p>
          <p>
            I have put my life on hold for these remaining 13 horses and will
            dedicate my life to caring for them for whatever time they have
            left. They are looking a lot healthier and better than I am at the
            moment, but I wouldn&apos;t have it any other way.
          </p>
          <p>
            I am appealing to everyone who loves horses and animals to help us
            by donating towards their care, veterinary bills and medication.
            Every little bit counts, and no donation is too small.
          </p>
          <p>
            If anyone would like to adopt or sponsor a horse or pony, you can
            also visit them and receive updates and photographs. This would be a
            huge help towards their ongoing care.
          </p>
          <p>Any donation is so appreciated.</p>
          <p>
            Thank you so much,
            <br />
            Laragh
            <br />
            One More Stride
          </p>
        </div>
      </section>
    </main>
  );
}
