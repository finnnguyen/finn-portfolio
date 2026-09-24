import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finn-portfolio-phi.vercel.app"),
  title: "Finn Nguyen — Software Engineer",
  description:
    "Software Engineer building reliable, production-grade applications for real businesses. Cal State Fullerton CS graduate, 2026.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Finn Nguyen — Software Engineer",
    description:
      "Software Engineer building reliable, production-grade applications for real businesses. Cal State Fullerton CS graduate, 2026.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
