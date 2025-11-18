import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact phone="050-2070236" whatsapp="https://wa.link/4kf0xk" />
      </main>
      <footer className="py-10 text-center text-neutral-600 border-t" dir="rtl">
        <p>© {new Date().getFullYear()} MANOS — כל הזכויות שמורות</p>
      </footer>
    </div>
  );
}

export default App;