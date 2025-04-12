"use client";

import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    title: "בחינה כלכלית",
    description:
      "הצפוי בלינקד לדוגמא, חישוב עלויות, הכנת תקציב, קביעת מסגרת מימון, בדיקת ריביות, ועוד.",
  },
  {
    number: 2,
    title: "איתור הנכס",
    description:
      "בדיקת אזור, תקציב, סוג הנכס המתאים ביותר בהתאם ליעדים שלך.",
  },
  {
    number: 3,
    title: "בדיקה משפטית",
    description:
      "עורך דין מוודא תקינות מסמכים, זכויות בעלות וחוזה מול המוכר.",
  },
  {
    number: 4,
    title: "בדיקה משפטית",
    description:
      "עורך דין מוודא תקינות מסמכים, זכויות בעלות וחוזה מול המוכר.",
  },
  {
    number: 5,
    title: "בדיקה משפטית",
    description:
      "עורך דין מוודא תקינות מסמכים, זכויות בעלות וחוזה מול המוכר.",
  },
];

export default function StepZigzag() {
  return (
    <section className="bg-zinc-900 py-32 px-4 sm:px-10 text-white overflow-hidden relative">
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-20">
        התהליך שתעברו לקניית דירה
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const isLeft = step.number % 2 !== 0;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="relative z-10 mb-32">
              {/* Vertical line connector */}
              {!isLast && (
                <div
                  className={cn(
                    "absolute w-1 bg-orange-400 h-28",
                    isLeft ? "left-[64px] sm:left-[128px]" : "right-[64px] sm:right-[128px]",
                    "top-[132px] sm:top-[140px] z-0"
                  )}
                />
              )}

              <div
                className={cn(
                  "flex flex-col sm:flex-row items-center justify-between gap-6",
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                )}
              >
                <div className="flex flex-col items-center gap-4 text-right max-w-md">
                  {/* Number circle with watermark */}
                  <div className="relative z-10">
                    <div className="w-32 h-32 rounded-full border-4 border-orange-400 flex items-center justify-center text-5xl font-bold text-orange-300 relative bg-black">
                      {step.number}
                      <div className="absolute inset-0 rounded-full bg-orange-400 opacity-10" />
                    </div>
                  </div>

                  {/* Step Text */}
                  <div
                    className={cn(
                      "mt-6 sm:mt-0 p-6 border-t-4 sm:border-t-0 sm:border-r-4 border-orange-400 text-right",
                      isLeft ? "sm:ml-4" : "sm:mr-4"
                    )}
                  >
                    <h3 className="text-2xl font-bold text-orange-400 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-200">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
