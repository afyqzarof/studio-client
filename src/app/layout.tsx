import type { Metadata } from "next";

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
      {/* <head> */}
      {/* <link rel="icon" type="image/svg+xml" href="/studio-favicon.svg" /> */}
      {/* <title>studio</title> */}
      {/* </head> */}
      <body>
        <div id="root">{children}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  );
}
