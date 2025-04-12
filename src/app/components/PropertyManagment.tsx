"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import {
  BuildingOffice2Icon,
  UsersIcon,
  CurrencyDollarIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

export default function PropertyManagement() {
  const { ref, isVisible } = useInView(0.3);

  const items = [
    {
      image: "/images/reno4.jpg",
      icon: BuildingOffice2Icon,
      title: "טיפול מלא בביורוקרטיה",
      subtitle: "הפקדות, חשבוניות ודיווחים לשלטונות",
    },
    {
      image: "/images/reno4.jpg",
      icon: UsersIcon,
      title: "ניהול תמחור דינמי",
      subtitle: "לפי ביקוש ואירועים בעיר",
    },
    {
      image: "/images/danube.jpg",
      icon: CurrencyDollarIcon,
      title: "שירותי ניקיון, כניסה",
      subtitle: "אחזקה שוטפת ותמיכה טכנית",
    },
    {
      image: "/images/parliament.jpg",
      icon: HomeModernIcon,
      title: "שירות לקוחות 24/7",
      subtitle: "וטיפול בדיירים",
    },
    {
      image: "/images/reno4.jpg",
      icon: BuildingOffice2Icon,
      title: "ניהול פרופילים",
      subtitle: "בפלטפורמות ההשכרה",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-zinc-900 text-white text-center py-24 px-4 sm:px-6 overflow-hidden"
    >
      <div className="relative mb-10">
        <div className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold text-white/10 leading-none">
          PROPERTY MANAGEMENT
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-extrabold mt-[-2rem] relative z-10">
          PROPERTY MANAGEMENT
        </h2>
      </div>

      <p className="text-lg mt-4 max-w-3xl mx-auto">
        השקעה בראש שקט – אנחנו דואגים להכול, אתם נהנים מהתשואה.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16 max-w-7xl mx-auto">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image src={item.image} alt="property" fill className="object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
                <Icon className="h-12 w-12 text-white mb-3" />
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-orange-400 text-md mt-1">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
