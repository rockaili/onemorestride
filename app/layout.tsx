import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One More Stride | Equine Rescue, Rehabilitation & Training in Kildare",
  description:
    "One More Stride is an equine rescue, rehabilitation and training initiative based in Kildare, Ireland, helping horses move forward one stride at a time.",
  openGraph: {
    title: "One More Stride",
    description:
      "Equine rescue, rehabilitation and training in Kildare, Ireland.",
    type: "website",
    locale: "en_IE"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
