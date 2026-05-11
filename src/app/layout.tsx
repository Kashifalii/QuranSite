import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { createMetadata } from "@/lib/seo";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = createMetadata({
  title: "Quran Academy | Online Quran Classes for Kids and Adults",
  description:
    "Learn Quran online with certified male and female teachers. Explore Tajweed, Hifz, Noorani Qaida, Quran reading, Islamic Studies, and Arabic classes.",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
