import React, { useEffect, useRef } from "react";
import { ArrowRight } from 'lucide-react';



const Hero: React.FC = () => {
  useEffect(() => {
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

  const animateNumber = (
    el: HTMLElement,
    to: number,
    duration: number,
    format: (n: number) => string
  ) => {
    const start = performance.now();

    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const v = Math.round(to * easeOut(p));
      el.textContent = format(v);
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  // ✅ animar counts
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const to = parseInt(el.dataset.count || "0", 10);
    animateNumber(el, to, 1100, (n) => n.toLocaleString("es-AR"));
  });

  // ✅ animar money (formato compacto k/M)
  document.querySelectorAll<HTMLElement>("[data-money]").forEach((el) => {
    const to = parseInt(el.dataset.money || "0", 10);
    animateNumber(el, to, 1200, (n) => {
      if (to >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".", ",") + "M";
      if (to >= 1_000) return (n / 1_000).toFixed(1).replace(".", ",") + "k";
      return n.toLocaleString("es-AR");
    });
  });
}, []);

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up max-w-4xl mx-auto">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-gray-900">
              Marketing y comunicación <span className="text-primary"> para empresas.</span>
 <br/>
              
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                  No se trata de hacer más, sino de hacer mejor.    
              </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-transparent border border-gray-300 rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                Agendar una reunión
              </a>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Hero;