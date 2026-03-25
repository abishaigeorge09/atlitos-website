import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Atlitos — The AI Coach in Your Pocket",
  description:
    "Atlitos gives every tennis player on earth a world-class AI coach in their pocket. Real-time body mechanics analysis, gamified drills, and AI coaching reports — zero hardware required.",
  keywords: [
    "AI tennis coach",
    "tennis training app",
    "biomechanical analysis",
    "AI sports coaching",
    "tennis drills",
    "pose detection",
  ],
  openGraph: {
    title: "Atlitos — The AI Coach in Your Pocket",
    description:
      "Real-time AI tennis coaching with 33-point pose detection. Train. Track. Triumph.",
    url: "https://www.atlitos.com",
    siteName: "Atlitos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlitos — The AI Coach in Your Pocket",
    description:
      "Real-time AI tennis coaching with 33-point pose detection. Train. Track. Triumph.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-deep-navy text-white antialiased">
        {children}
      </body>
    </html>
  );
}
