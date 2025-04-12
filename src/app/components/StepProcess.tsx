export default function StepProcess() {
    return (
      <section className="relative py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Step Number Circle */}
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 rounded-full border-4 border-orange-400 flex items-center justify-center text-5xl font-bold text-white relative z-10">
              1
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-400 z-0" />
          </div>
  
          {/* Step Content Box */}
          <div className="border-r-4 border-orange-400 pr-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">בחינה כלכלית</h3>
            <p className="text-sm text-white leading-loose max-w-xl">
              תיאור תהליך הכנה כלכלית: הצפוי בלינק לדוגמא, חישוב עלויות, הכנת תקציב, קביעת מסגרת
              מימון, בדיקת ריביות, ועוד.
            </p>
          </div>
        </div>
      </section>
    );
  }
  