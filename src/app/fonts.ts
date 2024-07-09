import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

export const corporate_pro = localFont({
  src: [
    {
      path: "./fonts/CorporateAPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CorporateAPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-corporate-pro",
});
export const ibm_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-ibm-mono",
});
