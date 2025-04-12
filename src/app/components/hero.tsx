"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="h-[60vh] sm:h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      <div className="bg-black/60 p-4 sm:p-6 rounded-md">
        <h1 className="text-3xl sm:text-5xl font-bold mb-3">
          השקעות נדל״ן חכמות בבודפשט
        </h1>
        <p className="text-base sm:text-lg mb-5 max-w-xl mx-auto">
          IRM מתמחה בליווי, ניהול וייזום נכסים מניבים באיזורים נבחרים בעיר
        </p>
        <Link
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 sm:py-3 rounded transition"
        >
          דברו איתנו
        </Link>
      </div>
    </section>
  );
}
