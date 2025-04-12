"use client";

import Image from "next/image";

export default function Team() {
  const teamImages = [
    "/images/nadav.png",
    "/images/ido.jpeg",
    "/images/yehonatan.png",
  ];

  return (
    <section className="bg-black text-white text-center py-24 px-4 sm:px-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-16">
        הכירו את הצוות שלנו
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] sm:h-[400px] rounded overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`team-${index}`}
              fill
              className="object-cover z-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
