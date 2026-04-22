import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Consultoria from "./components/Consultoria";
import ConsultoriaPage from "./pages/ConsultoriaPage";


// ── Página principal (Home) ──────────────────────────────────────────────────
const Home: React.FC = () => (
  <div className="min-h-screen transition-colors duration-300 bg-light">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Process />
      <Services />
      <Consultoria />
      <WhyUs />
      <Marquee />
      <Contact />
    </main>
    <Footer />

    {/* WhatsApp Floating Button */}
    <a
      href="https://wa.me/5492494606868"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      WhatsApp
    </a>
  </div>
);

// ── App raíz con Router ──────────────────────────────────────────────────────
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Preloader solo en la carga inicial */}
      <Preloader isLoading={isLoading} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultoria" element={<ConsultoriaPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;