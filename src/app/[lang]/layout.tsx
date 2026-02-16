// src/app/layout.tsx
import { Inter, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "NightLase® Snoring Treatment | Tribeca Dental Studio NYC",
  verification: {
    google: "FvXb6KDkt8yxyo6HnbW1yLiHs9YrgSWnt0xbQ2cag0I",
  },
  description:
    "Experience deep, quiet sleep with NightLase®. A non-invasive, laser-based treatment for snoring and sleep apnea in Tribeca. No surgery, no downtime.",
  openGraph: {
    title: "NightLase®: The Luxury Solution for Better Sleep | NYC",
    description:
      "Transform your sleep and health at Tribeca Dental. Discover the non-invasive power of NightLase®.",
    url: "https://nightlase.tribecadentalstudio.com/en",
    siteName: "Tribeca Dental Studio",
    images: [
      {
        url: "/After.png",
        width: 1200,
        height: 630,
        alt: "NightLase Treatment at Tribeca Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "NightLase NYC",
    "Snoring treatment Tribeca",
    "Sleep apnea laser therapy",
    "Non-invasive snoring cure",
    "Tribeca Dental Studio sleep treatments",
  ],
};
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant-garamond",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-white text-foreground antialiased selection:bg-luxury-gold selection:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
