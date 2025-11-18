const items = [
  "עיסוי רפואי לבעיות גב, צוואר, כתפיים ונפש",
  "עיסוי למניעת מתחים ושיפור זרימת הדם",
  "עיסוי משולב: רקמות עמוק, כוסות רוח, עיסוי לנשים בהריון, נרות הופי",
  "מגע מרפא בתחילת כל טיפול",
  "סדרות טיפולים וכרטיסיות במחירים נוחים",
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-50" dir="rtl" aria-label="שירותים">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-neutral-900 mb-6">שירותים</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((text, i) => (
            <div key={i} className="rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm">
              <p className="text-neutral-800 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
