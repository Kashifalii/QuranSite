import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  title: "Quran Academy | Online Quran Classes for Kids and Adults",
  description: "Learn Quran online with certified male and female teachers. Explore Tajweed, Hifz, Noorani Qaida, Quran reading, Islamic Studies, and Arabic classes."
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
