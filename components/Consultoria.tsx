import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Consultoria() {
  const audiences = [
    {
      title: "Empresas y pymes en crecimiento",
      description:
        "Ordenamos prioridades, definimos foco y armamos un plan claro para sostener el crecimiento.",
    },
    {
      title: "Emprendedores que buscan ordenar su estrategia",
      description:
        "Aterrizamos tu propuesta, clarificamos el mensaje y estructuramos un camino de acción.",
    },
    {
      title: "Profesionales que quieren escalar su marca personal",
      description:
        "Mejoramos posicionamiento, comunicación y oferta para crecer con consistencia.",
    },
  ];

  return (
    <section id="consultoria" className="py-24 bg-gray-50 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
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
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-light">
            A través de encuentros uno a uno analizamos tu situación actual,
            detectamos oportunidades de crecimiento y definimos un plan de acción
            claro para avanzar.
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <span className="font-bold text-lg">{index + 1}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}