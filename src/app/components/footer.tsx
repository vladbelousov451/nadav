"use client";

import Image from "next/image";
import {
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="relative text-white text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/appartament-1.jpg" // replace with your actual path
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="max-w-5xl mx-auto py-14 px-6 space-y-5 border-t border-orange-500">
        {/* Logo */}
        <div className="text-center">
          <div className="text-orange-400 font-bold text-sm uppercase tracking-wider">
            IRM Real Estate
          </div>
          <div className="text-xs text-gray-400">Investment & Management Firm</div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-300 leading-loose max-w-3xl mx-auto">
          הוא משרד בוטיק המוביל בהתמחות בהשקעות נדל״ן בבודפשט. החברה מציבה סטנדרטים חדשים בתחום,
          עם דגש IRM על ליווי אישי, מקצועיות ללא פשרות, וראייה אסטרטגית ייחודית בעיר המתפתחת ביותר באירופה.
        </p>

        {/* Social Icons Placeholder */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-orange-400 transition">🌐</a>
          <a href="#" className="hover:text-orange-400 transition">📸</a>
          <a href="#" className="hover:text-orange-400 transition">📘</a>
        </div>

        {/* Contact Info */}
        <div className="flex justify-center gap-6 items-center text-sm mt-6 text-zinc-400">
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-orange-400" />
            <span>052-4444555</span>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="w-5 h-5 text-orange-400" />
            <span>irm@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
