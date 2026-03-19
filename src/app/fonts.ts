// src/app/fonts.ts
import localFont from "next/font/local";

export const brandonGrotesque = localFont({
  src: [
    {
      path: "./fonts/Brandon_Grotesque_regular.woff2",
      weight: "400",
      style: "normal", 
    },
    {
      path: "./fonts/Brandon_Grotesque_medium.woff2",
      weight: "500",
      style: "normal", 
    },
    {
      path: "./fonts/Brandon_Grotesque_bold.woff2",
      weight: "700",
      style: "normal", 
    },
  ],
  variable: "--font-brandon",
});