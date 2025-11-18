import Spline from '@splinetool/react-spline';

export default function Hero({ onBook }) {
  return (
    <section id="home" className="relative min-h-[92vh] grid place-items-center overflow-hidden" dir="rtl" aria-label="אזור פתיחה">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mUyP14KSGymYtadq/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-neutral-200/60 p-8 shadow-xl">
          <p className="text-sm tracking-wide text-neutral-600 mb-2">סטודיו לעיסוי רפואי</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 leading-tight mb-4">
            MANOS — מקום לעצור, להקשיב ולהתחבר לעצמך
          </h1>
          <p className="text-neutral-700 text-lg mb-6">
            סטודיו אינטימי ונעים לעיסוי רפואי מקצועי לנשים ולגברים. טיפולים מותאמים אישית להקלה על כאבים, הפחתת מתחים וחיזוק הקשר גוף-נפש.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" onClick={onBook} className="px-5 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">לתיאום טיפול</a>
            <a href="#services" className="px-5 py-3 rounded-full bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50 transition-colors">לשירותים</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
    </section>
  );
}
