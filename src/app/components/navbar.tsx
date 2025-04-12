import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white py-6 relative z-50">
      <div className="flex justify-between items-center px-4 sm:px-10 max-w-7xl mx-auto">
        {/* Right links */}
        <div className="flex gap-4 text-sm sm:text-base font-medium">
          <Link href="/blog">בלוג ומאמרים</Link>
          <Link href="/academy">האקדמיה</Link>
          <Link href="/projects">הפרויקטים שלנו</Link>
        </div>

        {/* Logo Chevron */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="relative w-[200px] h-[120px]">
            {/* Chevron SVG */}
            <svg
              viewBox="0 0 200 120"
              className="absolute w-full h-full text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 1 H199 Q199 1 199 21 L100 119 L1 21 Q1 1 1 1 Z" />
            </svg>

            {/* Logo Inside Chevron */}
            <div className="absolute top-6 left-0 right-0 flex flex-col items-center text-white">
              <Image
                src="/images/logo-icon.svg"
                alt="IRM Logo"
                width={40}
                height={40}
              />
              <h1 className="text-sm font-semibold mt-1">IRM Real Estate</h1>
              <p className="text-xs text-white/70">
                Investment & Management Firm
              </p>
            </div>
          </div>
        </div>

        {/* Left links */}
        <div className="flex gap-4 text-sm sm:text-base font-medium">
          <Link href="/invest">ליווי משקיעים</Link>
          <Link href="/about">אודות וצוות</Link>
          <Link href="/">בית</Link>
        </div>
      </div>
    </nav>
  );
}
