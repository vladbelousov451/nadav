"use client";

import {
  CurrencyDollarIcon,
  HandThumbUpIcon,
  ArrowPathRoundedSquareIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: CurrencyDollarIcon,
    title: "צמיחה כלכלית",
    description:
      "בודפשט, מרכז הכלכלי והתרבותי של הונגריה, מציגה צמיחה מתמדת בכלכלה ובתיירות. מאז שהונגריה הצטרפה לאיחוד האירופי, הערך הנדל״ני עלה משמעותית.",
  },
  {
    icon: HandThumbUpIcon,
    title: "נדל״ן משתלם",
    description:
      "העיר מציעה תמחור נוח להשקעות, תשואות מפוארות, עלייה בביקוש לדירות, ומשיכה בקרב צעירים ומשקיעים זרים.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: "תיירות פורחת",
    description:
      "התיירות בבודפשט בשיא: תיירים מכל העולם נוהרים לבקר בעיר, דבר שמעלה את ערך הדירות המושכרות לטווח קצר.",
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    title: "תמריצי מס",
    description:
      "בזכות חוקי המס המקומיים, בודפשט מציעה תנאים מסחריים נוחים, כולל מס רווחי הון נוח ומנגנוני פטור לעסקים.",
  },
];

export default function WhyInvest() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-10 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-14">
        למה להשקיע בבודפשט?
      </h2>

      <div className="bg-zinc-900 border border-orange-500 rounded-xl shadow-xl py-10 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <Icon className="h-10 w-10 mx-auto text-orange-400" />
                <h3 className="text-xl font-bold text-orange-400">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
