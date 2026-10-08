import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import ChatBot from "@/components/ChatBot";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-serif" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Psychic Dev — Astrology, Psychic & Spiritual Guidance",
  description: "Personalized astrology, psychic and spiritual guidance for relationships, career, life decisions and inner peace.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Psychic Dev", description: "Personalized spiritual guidance and astrology.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
        <ChatBot />
      </body>
    </html>
  );
}