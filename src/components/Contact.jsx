export default function Contact({ phone, whatsapp }) {
  return (
    <section id="contact" className="py-20 bg-white" dir="rtl" aria-label="יצירת קשר">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">יצירת קשר</h2>
            <p className="text-neutral-700 mb-6">לשאלות, תיאום טיפול או התייעצות — נשמח לשוחח.</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`tel:${phone}`} className="px-5 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">התקשרו עכשיו</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50">WhatsApp</a>
            </div>

            <form className="mt-8 grid grid-cols-1 gap-4">
              <input type="text" placeholder="שם מלא" className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-800" />
              <input type="tel" placeholder="טלפון" className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-800" />
              <textarea placeholder="איך נוכל לעזור?" rows="4" className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-800" />
              <button type="submit" className="px-5 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 w-max">שליחה</button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-medium text-neutral-900 mb-3">איפה אנחנו?</h3>
            <p className="text-neutral-700 mb-4">חולון</p>
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-neutral-200">
              <iframe
                title="מפת גוגל MANOS"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent('Holon, Israel')}&output=embed`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
