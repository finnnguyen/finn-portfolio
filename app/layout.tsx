import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased bg-bg text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
