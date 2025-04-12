"use client";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-4 sm:px-6 text-center"
    >
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
  );
}
