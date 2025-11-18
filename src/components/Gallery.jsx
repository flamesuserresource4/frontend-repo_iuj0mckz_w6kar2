export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-neutral-50" dir="rtl" aria-label="גלריה">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-neutral-900 mb-6">גלריה</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-rose-100 via-amber-50 to-rose-50 border border-neutral-200" />
          ))}
        </div>
      </div>
    </section>
  );
}
