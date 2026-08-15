import { Footer } from "./Footer";
import { Header } from "./Header";
import { MotionProvider } from "./MotionProvider";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MotionProvider />
      <Header />
      {children}
      <Footer />
    </>
  );
}
