import "./globals.css";

export const metadata = {
title: "wedding invitation Bojan & Evi",
  description:
    "June 21, 2026 | Bojan & Evi Wedding",

  metadataBase: new URL("https://wedding-bojan-evi-jha6.vercel.app"),

  openGraph: {
    title: "wedding invitation Bojan & Evi",
    description: "June 21, 2026 | Bojan & Evi Wedding",
    url: "https://wedding-bojan-evi-jha6.vercel.app",
    siteName: "Wedding Invitation",

    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation Bojan & Evi  - 21 June 2026",
      },
    ],

    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "wedding invitation Bojan & Evi",
    description: "June 21, 2026 | Bojan & Evi Wedding",
    images: ["/hero.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
