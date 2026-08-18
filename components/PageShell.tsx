import { Footer } from "./Footer";
import { Header } from "./Header";
import { MotionProvider } from "./MotionProvider";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <MotionProvider />
      <Header />
      <div className="page-shell__content">{children}</div>
      <Footer />
    </div>
  );
}
