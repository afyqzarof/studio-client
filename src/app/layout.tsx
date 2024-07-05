import "./globals.css";
import type { Metadata } from "next";
import { ibm_mono, corporate_pro } from "./fonts";

export const metadata: Metadata = {
  title: "studio",
  description: "ideation platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibm_mono.variable} ${corporate_pro.variable}`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
