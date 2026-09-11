import { HorseshoeIcon } from "./HorseshoeIcon";

export function Footer() {
  return (
    <footer className="footer-strip">
      <div className="footer-strip__tagline">
        <HorseshoeIcon size={34} />
        <p>Rescue with heart. Rehabilitate with care. Transform lives.</p>
        <HorseshoeIcon size={34} />
      </div>
      <p className="footer-strip__policy">
        Contributions are voluntary and used immediately for animal care, so
        refunds generally cannot be offered. If you made a mistake, please
        contact Laragh within 14 days.
      </p>
    </footer>
  );
}
