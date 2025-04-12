"use client";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative bg-zinc-900 text-white py-24 px-4 sm:px-6 text-center overflow-hidden"
    >
      {/* Watermark Background Text */}
      <div className="absolute text-[20vw] text-white/5 font-extrabold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        CONTACT
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">בואו נדבר</h2>
        <p className="text-lg mb-12 text-zinc-300">השאירו פרטים ונחזור אליכם בהקדם</p>

        <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-right items-end">
          <input
            type="text"
            placeholder="שם מלא"
            className="w-full px-4 py-3 border border-white text-white bg-transparent rounded transition focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="tel"
            placeholder="טלפון"
            className="w-full px-4 py-3 border border-white text-white bg-transparent rounded transition focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="מייל"
            className="w-full px-4 py-3 border border-white text-white bg-transparent rounded transition focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-3 rounded transition w-full"
          >
            חזרו אלי
          </button>
        </form>
      </div>
    </section>
  );
}
