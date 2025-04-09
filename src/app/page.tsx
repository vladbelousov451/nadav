import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  BuildingOffice2Icon,
  HomeModernIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IRM Real Estate</title>
      </Head>

      {/* Navbar */}
      <nav className="relative px-4 sm:px-10 py-5 bg-black text-base">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-4 text-sm sm:text-base">
            <Link href="#">בלוג ומאמרים</Link>
            <Link href="#">האקדמיה</Link>
            <Link href="#">הפרויקטים שלנו</Link>
          </div>
          <div className="flex gap-4 text-sm sm:text-base mt-2 sm:mt-0">
            <Link href="#">ליווי משקיעים</Link>
            <Link href="#">אודות וצוות</Link>
            <Link href="#">בית</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
  className="h-[70vh] sm:h-[90vh] flex flex-col items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Budapest_Hungarian_Parliament_%2831363963556%29.jpg/1280px-Budapest_Hungarian_Parliament_%2831363963556%29.jpg")',
  }}
>
  <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold">
    אודות החברה שלנו
  </h1>
  <a
    href="#contact"
    className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition"
  >
    דברו איתנו
  </a>
</div>

      {/* Investments Section */}
      <section className="bg-zinc-900 py-16 sm:py-24 md:py-32 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="relative mb-10">
          <div className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold text-white/10 leading-none">
            INVESTMENTS
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-extrabold mt-[-2rem] sm:mt-[-3rem] z-10 relative drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
            INVESTMENTS
          </h2>
        </div>

        <h3 className="text-xl sm:text-2xl mt-4">השקעות נדל"ן בהתאמה אישית</h3>
        <p className="text-sm sm:text-lg mt-4">
          אנו מתמחים באיתור ובביצוע עסקאות נדל"ן במגוון אסטרטגיות, ביניהן:
        </p>
        <p className="text-sm sm:text-base mt-2 max-w-3xl mx-auto">
          כל השקעה מותאמת אישית לפרופיל המשקיע, תוך תכנון מקצועי לביצוע ובניית אסטרטגיה מסודרת.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {[
            {
              image: "/images/presale.jpg",
              icon: BuildingOffice2Icon,
              title: "השקעות בפרויקטים חדשים",
              subtitle: "Presale",
            },
            {
              image: "/images/parliament.jpg",
              icon: CurrencyDollarIcon,
              title: "עסקאות להגדלת ההון",
              subtitle: "Flip",
            },
            {
              image: "/images/neighborhood.jpg",
              icon: HomeModernIcon,
              title: "דירות לפיצול והשבחה",
              subtitle: "Apartament",
            },
          ].map((item, index) => {
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
                  {item.subtitle && (
                    <p className="text-orange-400 text-xl mt-1">{item.subtitle}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Renovations Section */}
      <section className="bg-black-400 text-white text-center py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="relative mb-10">
          <div className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold text-white/10 leading-none">
            RENOVATIONS
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-extrabold mt-[-2rem] sm:mt-[-3rem] z-10 relative drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
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
          {[
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
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={item.image}
                  alt="renovation"
                  fill
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
                  <Icon className="h-12 w-12 text-white mb-3" />
                  <p className="text-lg text-white font-semibold">{item.title}</p>
                  <p className="text-orange-400 text-md mt-1">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Property Management Section */}
<section className="bg-zinc-900 text-white text-center py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
  <div className="relative mb-10">
    <div className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold text-white/10 leading-none ">
      PROPERTY MANAGEMENT
    </div>
    <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-extrabold mt-[-2rem] sm:mt-[-3rem] z-10 relative drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
      PROPERTY MANAGEMENT
    </h2>
  </div>

  <p className="text-lg mt-4 max-w-3xl mx-auto">
    השקעה בראש שקט – אנחנו דואגים להכול, אתם נהנים מהתשואה.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16 max-w-7xl mx-auto">
    {[
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
    ].map((item, index) => {
      const Icon = item.icon;
      return (
        <div
          key={index}
          className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={item.image}
            alt="property-management"
            fill
            className="object-cover opacity-40"
          />
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
</section>


      {/* Team Section */}
      <section className="bg-black text-white text-center py-24 px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-16">הכירו את הצוות שלנו</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["/images/nadav.png", "/images/ido.jpeg", "/images/yehonatan.png"].map(
            (src, index) => (
              <div
                key={index}
                className="relative w-full h-[300px] sm:h-[400px] rounded overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt="team"
                  fill
                  className="object-cover z-0"
                />
              </div>
            )
          )}
        </div>
      </section>
      {/* Contact Us Section */}
<section 
id="contact"
className="bg-black text-white py-20 px-4 sm:px-6 text-center">
  <h2 className="text-4xl sm:text-5xl font-extrabold mb-10">צור קשר</h2>
  <p className="max-w-2xl mx-auto text-lg mb-10">
    מלאו את הטופס ונחזור אליכם בהקדם האפשרי.
  </p>
  <form className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-right">
    <input
      type="text"
      placeholder="שם מלא"
      className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-1"
    />
    <input
      type="email"
      placeholder="דוא\ל"
      className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-1"
    />
    <input
      type="tel"
      placeholder="טלפון"
      className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-2"
    />
    <textarea
      rows={5}
      placeholder="הודעה"
      className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-2 resize-none"
    />
    <button
      type="submit"
      className="bg-orange-500 hover:bg-orange-600 transition text-white font-bold py-3 px-6 rounded col-span-2"
    >
      שלח הודעה
    </button>
  </form>
</section>

    </div>
  );
}
