export default function About() {
  return (
    <section id="about" className="py-20 bg-white" dir="rtl" aria-label="אודות">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">אודות MANOS</h2>
            <p className="text-neutral-700 leading-8">
              זה לא רק עיסוי — זה מקום לעצור, להקשיב, ולהתחבר לעצמך. כל טיפול מתחיל בהקשבה אמיתית לגוף ולנפש, בשילוב ידע מקצועי עם מגע אינטואיטיבי, ובאבחון אישי שמאפשר להתאים את הטיפול המדויק ביותר עבורך.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-neutral-800">
              <li className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">טיפולים מותאמים אישית</li>
              <li className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">אווירה אינטימית וביתית</li>
              <li className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">מגע מרפא בתחילת כל טיפול</li>
              <li className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">שילוב כלים: רקמות עמוק, כוסות רוח ועוד</li>
            </ul>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-rose-100 via-amber-50 to-rose-50 border border-neutral-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
