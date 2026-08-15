type HorseshoeIconProps = {
  className?: string;
  size?: number;
};

export function HorseshoeIcon({
  className = "",
  size = 24
}: HorseshoeIconProps) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={`horseshoe-icon ${className}`.trim()}
      height={size}
      src="/horseshoe-plain.png"
      width={size}
    />
  );
}
