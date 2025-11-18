import { Menu, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: "#home", label: "ראשי" },
    { href: "#about", label: "אודות" },
    { href: "#services", label: "שירותים" },
    { href: "#testimonials", label: "המלצות" },
    { href: "#gallery", label: "גלריה" },
    { href: "#contact", label: "יצירת קשר" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-white/80 backdrop-blur border-b border-neutral-200" : "bg-transparent"}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3" dir="rtl" aria-label="ניווט ראשי">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-300 to-amber-200 border border-white/60 shadow" aria-hidden="true" />
          <span className="font-semibold text-neutral-900">MANOS</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-neutral-700">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:text-neutral-900 transition-colors">
              {it.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full hover:bg-neutral-100">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 rounded-full hover:bg-neutral-100">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">לתיאום</a>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-neutral-100" onClick={() => setOpen(!open)} aria-label="פתיחת תפריט">
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white" dir="rtl">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {items.map((it) => (
              <a key={it.href} href={it.href} className="py-2" onClick={() => setOpen(false)}>
                {it.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full hover:bg-neutral-100">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 rounded-full hover:bg-neutral-100">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
