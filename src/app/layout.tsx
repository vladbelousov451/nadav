import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar";

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
       
        <main>{children}</main>
        

      </body>
    </html>
  );
}
