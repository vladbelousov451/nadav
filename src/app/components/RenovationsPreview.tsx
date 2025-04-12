"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import {
  BuildingOffice2Icon,
  HomeModernIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Renovations() {
  const { ref, isVisible } = useInView(0.3);

  const items = [
    {
      image: "/images/reno4.jpg",
      icon: HomeModernIcon,
      title: "יצירת בידול ויתרון בשוק",
      subtitle: "באמצעות עיצוב בחומרים איכותיים",
    },
    {
      image: "/images/reno4.jpg",
      icon: BuildingOffice2Icon,
      title: "התמחות בנכסים יוקרתיים,",
      subtitle: "דירות לחיילים ודירות לפיצול",
    },
    {
      image: "/images/reno4.jpg",
      icon: CurrencyDollarIcon,
      title: "תכנון ממוקד להשבחת ערך",
      subtitle: "הנכס ומיצוי הפוטנציאל שבו",
    },
    {
      image: "/images/reno4.jpg",
      icon: UsersIcon,
      title: "צוות מומחים הכולל אדריכלים,",
      subtitle: "מעצבי פנים, חשמלאים ושמאים",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-black text-white text-center py-32 px-6 overflow-hidden"
    >
      <div className="relative mb-10">
        <div className="text-[10vw] text-white/10 font-extrabold leading-none">
          RENOVATIONS
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-extrabold mt-[-2rem] relative z-10">
          RENOVATIONS
        </h2>
      </div>

      <h3 className="text-xl sm:text-2xl mt-6">שיפוץ והשבחת נכסים</h3>
      <p className="text-sm sm:text-lg mt-6 max-w-4xl mx-auto">
        לאחר איחוד הנכס, אנו מבצעים תהליך השבחה מקיף בהתאמה לייעוד הנכס ולדרישות המשקיע.
      </p>
      <p className="text-sm sm:text-base mt-4 max-w-3xl mx-auto">
        ניהול ואחזקה נכסים מנוהלים מעל 250 נכסים בבודפשט, כולל דירות להשכרה לטווח קצר ב־AIRBNB
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image src={item.image} alt="renovation" fill className="object-cover opacity-40" />
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
