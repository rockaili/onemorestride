import { HorseshoeIcon } from "./HorseshoeIcon";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export function HorseshoeDivider() {
  return (
    <div className="horseshoe-divider" aria-hidden="true">
      <span />
      <HorseshoeIcon size={28} />
      <span />
    </div>
  );
}

export function SectionHeading({
  title,
  eyebrow,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="breadcrumb">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <HorseshoeDivider />
    </div>
  );
}
