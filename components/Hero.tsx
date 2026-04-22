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

{/* Metric cards (sin glow) + animaciones */}
<div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
  <style>{`
    @keyframes drawLine {
      from { stroke-dashoffset: 140; }
      to { stroke-dashoffset: 0; }
    }
    .sparkline {
      stroke-dasharray: 140;
      stroke-dashoffset: 140;
      animation: drawLine 1.1s cubic-bezier(.22,1,.36,1) forwards;
    }
    .sparkline--d2 { animation-delay: .12s; }
    .sparkline--d3 { animation-delay: .22s; }
  `}</style>

  {/* Card 1 */}
  <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="p-6">
      <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
        Clientes satisfechos
      </p>

      <div className="mt-2 flex items-end justify-between gap-4">
        <div>
          {/* Número con animación */}
          <span
            className="text-3xl font-bold text-gray-900 tabular-nums"
            data-count="120"
          >
            0
          </span>
          <span className="text-3xl font-bold text-gray-900">+</span>
          <p className="text-sm text-gray-600 font-light">Proyectos y cuentas</p>
        </div>

        {/* Sparkline */}
        <svg viewBox="0 0 120 44" className="h-10 w-28">
          <defs>
            <linearGradient id="m1" x1="0" x2="1">
              <stop offset="0" stopColor="rgb(249 115 22)" stopOpacity="0.10" />
              <stop offset="1" stopColor="rgb(249 115 22)" stopOpacity="0.28" />
            </linearGradient>
          </defs>

          <path
            d="M2 34 C 18 30, 22 18, 36 20 C 50 22, 56 36, 72 30 C 88 24, 96 10, 118 8"
            fill="none"
            stroke="rgb(249 115 22)"
            strokeWidth="3"
            strokeLinecap="round"
            className="sparkline"
          />
          <path
            d="M2 44 L2 34 C 18 30, 22 18, 36 20 C 50 22, 56 36, 72 30 C 88 24, 96 10, 118 8 L118 44 Z"
            fill="url(#m1)"
          />
        </svg>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="p-6">
      <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
        Leads calificados
      </p>

      <div className="mt-2 flex items-end justify-between gap-4">
        <div>
          <span
            className="text-3xl font-bold text-gray-900 tabular-nums"
            data-count="3400"
          >
            0
          </span>
          <span className="text-3xl font-bold text-gray-900">+</span>
          <p className="text-sm text-gray-600 font-light">Últimos 12 meses</p>
        </div>

        <svg viewBox="0 0 120 44" className="h-10 w-28">
          <defs>
            <linearGradient id="m2" x1="0" x2="1">
              <stop offset="0" stopColor="rgb(249 115 22)" stopOpacity="0.10" />
              <stop offset="1" stopColor="rgb(249 115 22)" stopOpacity="0.28" />
            </linearGradient>
          </defs>

          <path
            d="M2 30 C 18 34, 28 18, 42 22 C 56 26, 58 38, 74 28 C 90 18, 98 20, 118 12"
            fill="none"
            stroke="rgb(249 115 22)"
            strokeWidth="3"
            strokeLinecap="round"
            className="sparkline sparkline--d2"
          />
          <path
            d="M2 44 L2 30 C 18 34, 28 18, 42 22 C 56 26, 58 38, 74 28 C 90 18, 98 20, 118 12 L118 44 Z"
            fill="url(#m2)"
          />
        </svg>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="p-6">
      <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
        Presupuesto gestionado
      </p>

      <div className="mt-2 flex items-end justify-between gap-4">
        <div>
          {/* Si querés animar moneda, lo hacemos en el próximo paso */}
          <p className="text-3xl font-bold text-gray-900 tabular-nums">
            US$ <span data-money="1200000">0</span>
          </p>
          <p className="text-sm text-gray-600 font-light">Inversión optimizada</p>
        </div>

        <svg viewBox="0 0 120 44" className="h-10 w-28">
          <defs>
            <linearGradient id="m3" x1="0" x2="1">
              <stop offset="0" stopColor="rgb(249 115 22)" stopOpacity="0.10" />
              <stop offset="1" stopColor="rgb(249 115 22)" stopOpacity="0.28" />
            </linearGradient>
          </defs>

          <path
            d="M2 36 C 18 30, 26 32, 40 26 C 54 20, 58 28, 72 22 C 86 16, 96 18, 118 6"
            fill="none"
            stroke="rgb(249 115 22)"
            strokeWidth="3"
            strokeLinecap="round"
            className="sparkline sparkline--d3"
          />
          <path
            d="M2 44 L2 36 C 18 30, 26 32, 40 26 C 54 20, 58 28, 72 22 C 86 16, 96 18, 118 6 L118 44 Z"
            fill="url(#m3)"
          />
        </svg>
      </div>
    </div>
  </div>
</div>



        </div>
      </div>
    </div>
  );
};

export default Hero;