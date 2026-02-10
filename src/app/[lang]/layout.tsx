// src/app/layout.tsx
import { Inter, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
export const metadata = {
  icons: {
    icon: {
      url: './TribecaLogo.png', 
      type: 'image/x-icon',
    },
  },
};
