import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | IRM Real Estate</title>
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">הפרויקטים שלנו</h1>
        <p className="text-lg max-w-xl mx-auto">
          כאן תמצאו את כל המידע על הפרויקטים שהחברה מבצעת בבעלותה או בניהולה, כולל תמונות, מיקומים ופרטי יצירת קשר.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-zinc-800 rounded shadow p-6">
              <h3 className="text-xl font-bold mb-2">פרויקט #{id}</h3>
              <p className="text-sm text-zinc-300">פרויקט למגורים במיקום מרכזי בבודפשט.</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
