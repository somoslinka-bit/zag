'use client'

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  Target,
  Map,
  Zap,
  TrendingUp,
  CheckCircle2,
  Users,
  Briefcase,
  Star,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const ConsultoriaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const steps = [
    {
      icon: <Target className="w-8 h-8" />,
      number: "01",
      title: "Diagnóstico inicial",
      description:
        "Analizamos en profundidad tu situación actual: propuesta de valor, competencia, canales de comunicación, audiencias y posicionamiento. Identificamos brechas y oportunidades concretas.",
      duration: "Sesión 1",
    },
    {
      icon: <Map className="w-8 h-8" />,
      number: "02",
      title: "Plan estratégico",
      description:
        "Definimos objetivos medibles, posicionamiento diferenciado, mensajes clave y canales prioritarios. Todo ordenado en un plan de acción claro con plazos y responsables.",
      duration: "Sesión 2",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "03",
      title: "Implementación guiada",
      description:
        "Te acompañamos en la ejecución: producción de contenidos, activación de campañas, coordinación de equipos y cuidado de la coherencia de marca en cada punto de contacto.",
      duration: "Sesiones 3–5",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "04",
      title: "Medición y optimización",
      description:
        "Monitoreamos los datos, evaluamos resultados frente a los objetivos y hacemos los ajustes necesarios para maximizar el retorno de tu inversión.",
      duration: "Sesión final",
    },
  ];

  const audiences = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Empresas y PYMEs en crecimiento",
      description:
        "Ordenamos prioridades, definimos foco y armamos un plan claro para sostener y acelerar el crecimiento.",
      tags: ["Estrategia", "Comunicación", "Crecimiento"],
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Emprendedores que buscan ordenar su estrategia",
      description:
        "Aterrizamos tu propuesta, clarificamos el mensaje y estructuramos un camino de acción efectivo.",
      tags: ["Posicionamiento", "Plan de acción", "Foco"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Profesionales que quieren escalar su marca personal",
      description:
        "Mejoramos tu posicionamiento, comunicación y oferta para crecer con consistencia y autoridad.",
      tags: ["Marca personal", "Autoridad", "Escalabilidad"],
    },
  ];

  const benefits = [
    "Claridad total sobre tu propuesta de valor y diferenciación",
    "Un plan de marketing y comunicación listo para ejecutar",
    "Identificación de los canales con mayor potencial para tu negocio",
    "Mensajes que conectan con tu audiencia ideal",
    "Métricas claras para medir el éxito de cada acción",
    "Acompañamiento experto durante todo el proceso",
    "Soporte entre sesiones vía WhatsApp o email",
  ];

  const faqs = [
    {
      q: "¿Cuántas sesiones incluye el proceso de consultoría?",
      a: "El proceso completo incluye entre 4 y 6 sesiones, dependiendo de las necesidades del proyecto. Cada sesión dura aproximadamente 90 minutos y tiene objetivos específicos.",
    },
    {
      q: "¿Puedo contratar solo una sesión de diagnóstico?",
      a: "Sí. Ofrecemos una sesión de diagnóstico individual para quienes quieren un primer análisis y recomendaciones puntuales antes de comprometerse con un proceso completo.",
    },
    {
      q: "¿Las sesiones son presenciales o virtuales?",
      a: "Trabajamos en formato virtual (Zoom o Meet).",
    },
    {
      q: "¿Cuánto tiempo lleva ver resultados?",
      a: "Los resultados estratégicos (claridad, plan organizado, mensajes definidos) son inmediatos. Los resultados de negocio dependen de la ejecución, pero la mayoría de nuestros clientes ven mejoras en los primeros 90 días de aplicación del plan.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-white">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-32" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-10 font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Consultoría Estratégica 1:1
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-gray-900 mb-8">
              Sesiones personalizadas para{" "}
              <span className="text-primary">crecer con estrategia.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl font-light leading-relaxed mb-10">
              Trabaja uno a uno con nuestro equipo para ordenar tu estrategia de
              marketing, mejorar tu comunicación y construir un plan de acción
              claro con resultados medibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-consultoria"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-sm hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
              >
                Agendar una sesión
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center justify-center px-8 py-4 text-gray-900 border border-gray-300 font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                Ver cómo trabajamos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Para quién es
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              ¿A quién está destinado este servicio?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light mb-6 flex-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Nuestro método
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              ¿Cómo trabajamos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Un proceso estructurado en 4 etapas que va desde el análisis hasta
              la medición de resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative bg-gray-50 p-8 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 group"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gray-200 group-hover:bg-gray-700 z-10" />
                )}

                <div className="text-5xl font-black text-gray-100 group-hover:text-white/10 transition-colors mb-4 leading-none">
                  {step.number}
                </div>

                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-white/10 group-hover:text-white transition-colors">
                  {step.icon}
                </div>

                <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary group-hover:text-white/70 mb-2 transition-colors">
                  {step.duration}
                </span>
                <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Lo que obtenés
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Al final del proceso te entregamos un plan de acción
              </h2>
            </div>

            <div className="grid gap-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-light">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Preguntas frecuentes
            </span>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.q}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="contact-consultoria"
        className="py-24 bg-gray-50 scroll-mt-32"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-10 lg:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Empezá hoy
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                ¿Listo para ordenar tu estrategia?
              </h2>
              <p className="text-gray-600 text-xl font-light mb-10 max-w-2xl mx-auto">
                Agendá una reunión gratuita de 30 minutos y
                descubrí cómo podemos ayudarte a crecer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5492494606868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5492494606868"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-xl hover:scale-110 transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <Footer />
    </>
  );
};

export default ConsultoriaPage;
