type BrandLineIconProps = {
  className?: string;
  size?: number;
  variant:
    | "calendar"
    | "calendar-grid"
    | "care"
    | "donate"
    | "hand-heart"
    | "heart"
    | "hoof-ripple"
    | "horseshoe"
    | "people"
    | "rescue"
    | "schedule-visit"
    | "sponsor"
    | "train"
    | "volunteer";
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.45
};

export function BrandLineIcon({
  className = "",
  size = 42,
  variant
}: BrandLineIconProps) {
  if (variant === "hand-heart") {
    return (
      <img
        alt=""
        aria-hidden="true"
        className={`brand-line-icon brand-line-icon--asset brand-line-icon--donate-hands ${className}`.trim()}
        height={size}
        src="/donate-hands-heart-horse.png"
        width={size}
      />
    );
  }

  if (variant === "rescue") {
    return (
      <img
        alt=""
        aria-hidden="true"
        className={`brand-line-icon brand-line-icon--asset brand-line-icon--rescue ${className}`.trim()}
        height={size}
        src="/rescue-horse-hand.png"
        width={size}
      />
    );
  }

  if (variant === "care") {
    return (
      <img
        alt=""
        aria-hidden="true"
        className={`brand-line-icon brand-line-icon--asset brand-line-icon--rehabilitation ${className}`.trim()}
        height={size}
        src="/rehabilitate-horse-leaf.png"
        width={size}
      />
    );
  }

  if (variant === "train") {
    return (
      <img
        alt=""
        aria-hidden="true"
        className={`brand-line-icon brand-line-icon--asset brand-line-icon--training ${className}`.trim()}
        height={size}
        src="/train-jumping-horse.png"
        width={size}
      />
    );
  }

  if (variant === "hoof-ripple") {
    return (
      <img
        alt=""
        aria-hidden="true"
        className={`brand-line-icon brand-line-icon--asset brand-line-icon--hoof-ripple ${className}`.trim()}
        height={size}
        src="/hoof-ripple-make-difference.png"
        width={size}
      />
    );
  }

  if (variant === "schedule-visit") {
    return (
      <img
        alt=""
        aria-hidden="true"
        className={`brand-line-icon brand-line-icon--asset brand-line-icon--schedule-visit ${className}`.trim()}
        height={size}
        src="/schedule-visit-calendar.png"
        width={size}
      />
    );
  }

  return (
    <svg
      className={`brand-line-icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      {variant === "horseshoe" ? (
        <>
          <path {...strokeProps} strokeWidth={6.6} d="M14.6 12.3c0 7.3.3 16.1 4.2 21 2.7 3.5 7.7 3.5 10.4 0 3.9-4.9 4.2-13.7 4.2-21" />
          <path {...strokeProps} stroke="rgba(255,255,255,0.28)" strokeWidth={1.65} d="M14.6 12.3c0 7.3.3 16.1 4.2 21 2.7 3.5 7.7 3.5 10.4 0 3.9-4.9 4.2-13.7 4.2-21" />
          <circle cx="14.9" cy="17.4" r="1.1" fill="var(--paper, #f8f5ee)" />
          <circle cx="15.8" cy="24.5" r="1.1" fill="var(--paper, #f8f5ee)" />
          <circle cx="18.2" cy="30.6" r="1.1" fill="var(--paper, #f8f5ee)" />
          <circle cx="33.1" cy="17.4" r="1.1" fill="var(--paper, #f8f5ee)" />
          <circle cx="32.2" cy="24.5" r="1.1" fill="var(--paper, #f8f5ee)" />
          <circle cx="29.8" cy="30.6" r="1.1" fill="var(--paper, #f8f5ee)" />
        </>
      ) : null}
      {variant === "people" ? (
        <>
          <circle {...strokeProps} cx="24" cy="15.5" r="6.2" />
          <path {...strokeProps} d="M13.8 38.2c1.7-8.8 5.1-13.2 10.2-13.2s8.5 4.4 10.2 13.2" />
          <path {...strokeProps} d="M11.1 37v-7.1c0-3.5 2-5.9 5.9-7.1M36.9 37v-7.1c0-3.5-2-5.9-5.9-7.1" />
        </>
      ) : null}
      {variant === "donate" ? (
        <>
          <path {...strokeProps} d="M23.8 15.2c2.6-5.3 10.4-4.3 10.4 2.3 0 4.5-5.2 7.9-10.2 11.6-5-3.7-10.2-7.1-10.2-11.6 0-6.6 7.4-7.6 10-2.3Z" />
          <path {...strokeProps} d="M9.5 35.1h8.4c4.2 0 7.8-.8 10.8-2.4l7.6-4c1.8-.9 3.6-.1 4.3 1.4-4.8 4.9-10.8 8.1-18.1 9.5H14" />
          <path {...strokeProps} d="M7.5 29.5h5.7c3.1 0 5.5.9 7.3 2.7h6.2c1.6 0 2.7.8 3.2 2.1" />
          <path {...strokeProps} d="M7.5 27.6v9.9" />
        </>
      ) : null}
      {variant === "calendar-grid" ? (
        <>
          <rect {...strokeProps} x="10.5" y="13.5" width="27" height="25.5" rx="3" />
          <path {...strokeProps} d="M16.5 9.5v8M23.8 9.5v8M31.2 9.5v8M10.5 21h27" />
          <path {...strokeProps} d="M17 27.5h2.2M22.9 27.5h2.2M28.8 27.5H31M17 33h2.2M22.9 33h2.2M28.8 33H31" />
          <path {...strokeProps} d="M17.4 25.8v3.3M23.3 25.8v3.3M29.2 25.8v3.3M17.4 31.4v3.3M23.3 31.4v3.3M29.2 31.4v3.3" />
        </>
      ) : null}
      {variant === "heart" ? (
        <>
          <path {...strokeProps} strokeWidth={2.2} d="M24 35.8S12.5 28.9 12.5 20.4c0-6.7 7.2-8.3 11.5-2.7 4.3-5.6 11.5-4 11.5 2.7C35.5 28.9 24 35.8 24 35.8Z" />
        </>
      ) : null}
      {variant === "sponsor" ? (
        <>
          <path {...strokeProps} strokeWidth={2.2} d="M15.2 12.5v9.1c0 9.3 3.7 14.9 8.8 14.9s8.8-5.6 8.8-14.9v-9.1" />
          <path {...strokeProps} strokeWidth={1.7} d="M18.5 14.6v7.1c0 6.8 2.4 10.9 5.5 10.9s5.5-4.1 5.5-10.9v-7.1" />
          <path {...strokeProps} strokeWidth={1.8} d="M24 24.9c1.8-3.1 6.1-2.2 6.1 1.4 0 3-3.5 5-6.1 7-2.6-2-6.1-4-6.1-7 0-3.6 4.3-4.5 6.1-1.4Z" />
          <circle cx="16.8" cy="17.2" r="1" fill="currentColor" />
          <circle cx="31.2" cy="17.2" r="1" fill="currentColor" />
        </>
      ) : null}
      {variant === "volunteer" ? (
        <>
          <path {...strokeProps} strokeWidth={2} d="M13 35.5V22.3L24 13l11 9.3v13.2" />
          <path {...strokeProps} strokeWidth={2} d="M17.5 35.5V25.2h13v10.3M20.3 24.7v-5.1h7.4v5.1" />
          <path {...strokeProps} strokeWidth={1.6} d="M21.2 29.8h5.6M21.2 33h5.6" />
        </>
      ) : null}
      {variant === "calendar" ? (
        <>
          <rect {...strokeProps} x="11" y="14" width="26" height="24" rx="2.8" />
          <path {...strokeProps} d="M17.5 10.5V18M30.5 10.5V18M11 22h26" />
          <path {...strokeProps} d="M17.5 27.5h2.5M23 27.5h2.5M28.5 27.5H31M17.5 32.5h2.5M23 32.5h2.5" />
        </>
      ) : null}
    </svg>
  );
}
