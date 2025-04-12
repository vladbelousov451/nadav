"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import {
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

export default function Investments() {
  const { ref, isVisible } = useInView(0.3);

  const data = [
    {
      image: "/images/appartament-1.jpg",
      icon: BuildingOffice2Icon,
      title: "השקעות בפרויקטים חדשים",
      subtitle: "Presale",
    },
    {
      image: "/images/appartament-2.jpg",
      icon: CurrencyDollarIcon,
      title: "עסקאות להגדלת ההון",
      subtitle: "Flip",
    },
    {
      image: "/images/appartament-3.jpg",
      icon: HomeModernIcon,
      title: "דירות לפיצול והשבחה",
      subtitle: "Apartament",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-zinc-900 text-white py-24 px-4 sm:px-6 text-center overflow-hidden"
    >
      <div className="relative mb-10">
        <div className="text-[10vw] text-white/10 font-extrabold leading-none">
          INVESTMENTS
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-extrabold mt-[-2rem] relative z-10">
          INVESTMENTS
        </h2>
      </div>

      <h3 className="text-xl sm:text-2xl mt-4">
        השקעות נדל&quot;ן בהתאמה אישית
      </h3>
      <p className="text-sm sm:text-lg mt-4">
        אנו מתמחים באיתור ובביצוע עסקאות נדל&quot;ן במגוון אסטרטגיות, ביניהן:
      </p>
      <p className="text-sm sm:text-base mt-2 max-w-3xl mx-auto">
        כל השקעה מותאמת אישית לפרופיל המשקיע, תוך תכנון מקצועי לביצוע ובניית אסטרטגיה מסודרת.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={item.image}
                alt={`investment-${index}`}
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
                <Icon className="h-12 w-12 text-white mb-3" />
                <p className="text-lg text-white font-semibold">{item.title}</p>
                <p className="text-orange-400 text-xl mt-1">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
