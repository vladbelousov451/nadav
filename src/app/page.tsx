import Image from "next/image";
import Link from "next/link";
import { BuildingOffice2Icon, HomeModernIcon, CurrencyDollarIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="relative px-10 pt-3 pb-10 bg-black text-white text-base">
        <div className="flex justify-between items-center">
          {/* Right Links */}
          <div className="flex gap-4">
            <Link href="#">בלוג ומאמרים</Link>
            <Link href="#">האקדמיה</Link>
            <Link href="#">הפרויקטים שלנו</Link>
          </div>

          {/* Left Links */}
          <div className="flex gap-4">
            <Link href="#">ליווי משקיעים</Link>
            <Link href="#">אודות וצוות</Link>
            <Link href="#">בית</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="h-[90vh] flex items-center justify-center text-6xl font-bold bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Budapest_Hungarian_Parliament_%2831363963556%29.jpg/1280px-Budapest_Hungarian_Parliament_%2831363963556%29.jpg")',
        }}
      >
        <h1 className="text-shadow-md p-6 rounded">אודות החברה שלנו</h1>
      </div>

      {/* Investments Section */}
      
      <section className="bg-zinc-900 py-32 px-6 text-center">
      <h2 className="text-[5rem] font-extrabold leading-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">INVESTMENTS</h2>
        <h3 className="text-2xl mt-4">השקעות נדל"ן בהתאמה אישית</h3>
        <p className="text-lg mt-4">אנו מתמחים באיתור ובביצוע עסקאות נדל"ן במגוון אסטרטגיות, ביניהן:</p>
        <p className="text-base mt-2 max-w-3xl mx-auto">
          כל השקעה מותאמת אישית לפרופיל המשקיע, תוך תכנון מקצועי לביצוע ובניית אסטרטגיה מסודרת.
        </p>
        <p> </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      {
        image: "/images/presale.jpg",
        icon: BuildingOffice2Icon,
        title: "השקעות בפרויקטים חדשים",
        subtitle: "Presale",
      },
      {
        image: "/images/presale.jpg",
        icon: CurrencyDollarIcon,
        title: "עסקאות להגדלת ההון",
        subtitle: "Flip",
      },
      {
        image: "/images/presale.jpg",
        icon: HomeModernIcon,
        title: "דירות לפיצול והשבחה",
        subtitle: "Apartament",
      },
    ].map((item, index) => {
      const Icon = item.icon;
      return (
        <div
          key={index}
          className="relative w-full aspect-[4/4] rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={item.image}
            alt={`investment-${index}`}
            fill
            className="object-cover opacity-50"
          />

          <div className="absolute inset-0   bg-gradient-to-t from-black/50 to-transparent z-10" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
            <Icon className="h-12 w-12 text-white  mb-3" />
            <p className="text-lg text-white font-semibold">{item.title}</p>
            {item.subtitle && (
              <p className="text-orange-400  text-xl mt-1">{item.subtitle}</p>
            )}
          </div>
        </div>
      );
    })}
  </div>
</section>


      {/* Renovations Section */}
      <section className="bg-black text-white text-center py-32 px-6">
  <h2 className="text-[5rem] font-extrabold leading-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
    RENOVATIONS
  </h2>
  <h3 className="text-2xl mt-6">שיפוץ והשבחת נכסים</h3>
  <p className="text-lg mt-6 max-w-4xl mx-auto">
    לאחר איחוד הנכס, אנו מבצעים תהליך השבחה מקיף בהתאמה לייעוד הנכס ולדרישות המשקיע.
  </p>
  <p className="text-base mt-4 max-w-3xl mx-auto">
    ניהול ואחזקה נכסים מנוהלים מעל 250 נכסים בבודפשט, כולל דירות להשכרה לטווח קצר ב־AIRBNB
  </p>

  {/* Card Grid */}
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
          className="relative w-full aspect-[4/4] rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={item.image}
            alt="renovation"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 to-transparent z-10" />
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


      {/* Team Section */}
      <section className="bg-zinc-900 text-white text-center py-28 px-4">
        <h2 className="text-5xl font-extrabold mb-16">הכירו את הצוות שלנו</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["/images/nadav.png", "/images/nadav.png", "/images/nadav.png"].map((src, index) => (
            <div key={index} className="relative w-full h-[400px] rounded overflow-hidden shadow-lg">
              <Image src={src} alt="team" layout="fill" objectFit="cover" className="z-0" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}