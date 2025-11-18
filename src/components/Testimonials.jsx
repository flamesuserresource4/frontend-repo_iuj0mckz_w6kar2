const quotes = [
  {
    name: "נועה",
    text: "הרגשתי הקלה אמיתית כבר אחרי הטיפול הראשון. אווירה רגועה ומקצועית מאוד.",
  },
  { name: "עידו", text: "טיפול מדויק ואכפתי. סוף סוף מישהו באמת מקשיב לגוף שלי." },
  {
    name: "מורן",
    text: "עברתי כמה טיפולים שונים — השילוב בין המגע הרגיש והידע המקצועי פשוט מושלם.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white" dir="rtl" aria-label="המלצות">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-neutral-900 mb-8">לקוחות מספרים</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
              <blockquote className="text-neutral-800 leading-7">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-neutral-600">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
