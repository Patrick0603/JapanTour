import { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ExpandingCardsSection from './sections/ExpandingCardsSection';
import AboutSection from './sections/AboutSection';
import IncludedSection from './sections/IncludedSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-[#0A0A0A] min-h-screen max-md:cursor-auto md:cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ExpandingCardsSection />
        <AboutSection />
        <IncludedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
