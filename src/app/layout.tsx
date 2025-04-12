import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar";
import ContactCTA from "./components/ContactCTA"; // or ContactCTA if that's your form
import Hero from "./components/hero";
export const metadata: Metadata = {
  title: "IRM Real Estate",
  description: "השקעות נדל״ן בבודפשט",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-black text-white">
        <Navbar />
        <Hero/>
        <main>{children}</main>
        <ContactCTA /> {/* ✅ This renders on every page */}
      </body>
    </html>
  );
}
