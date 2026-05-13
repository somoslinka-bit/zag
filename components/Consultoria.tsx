import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ScrollSplitCard } from "@/components/ui/scroll-split-card";

export default function Consultoria() {
  const cards = [
    {
      title: "Empresas y pymes en crecimiento",
      description:
        "Ordenamos prioridades, definimos foco y armamos un plan claro para sostener el crecimiento.",
      bgColor: "#e8e8e8",
      textColor: "#111111",
    },
    {
      title: "Emprendedores que buscan ordenar su estrategia",
      description:
        "Aterrizamos tu propuesta, clarificamos el mensaje y estructuramos un camino de acción.",
      bgColor: "#1a3a4a",
      textColor: "#ffffff",
    },
    {
      title: "Profesionales que quieren escalar su marca personal",
      description:
        "Mejoramos posicionamiento, comunicación y oferta para crecer con consistencia.",
      bgColor: "#1c1c1c",
      textColor: "#ffffff",
    },
  ];

  return (
    <section id="consultoria" className="scroll-mt-32">
      {/* Header */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Consultoría
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Consultorías Estratégicas 1:1
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Sesiones personalizadas para dueños de empresas, emprendedores y
              profesionales que buscan ordenar su estrategia, mejorar su
              comunicación y escalar sus resultados.
            </p>
            <div className="mt-10">
              <Link
                to="/consultoria"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-white font-semibold shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-primary/90"
              >
                Conocé cómo trabajamos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll split */}
      <ScrollSplitCard cards={cards} />
    </section>
  );
}
