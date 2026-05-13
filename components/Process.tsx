import React from 'react';
import { motion } from "motion/react";
import { Target, Map, Zap, TrendingUp } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "1. Diagnóstico",
      description: "Analizamos tu situación real, tu propuesta, tu competencia y la calidad actual de tus canales.",
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "2. Plan estratégico",
      description: "Definimos objetivos medibles, posicionamiento, mensajes y canales prioritarios.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "3. Implementación",
      description: "Producimos contenidos, activamos campañas, coordinamos equipos y cuidamos la coherencia de la marca en cada punto de contacto.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "4. Optimización",
      description: "Monitoreamos datos, evaluamos resultados y mejoramos continuamente.",
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-50 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Nuestro Enfoque</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-gray-900 text-center">
            Conocé nuestro método de trabajo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Un método de trabajo para comunicar con resultados, integrando estrategia, ejecución y análisis en un proceso de trabajo claro que ordena la comunicación de tu empresa, optimiza cada canal y permite tomar decisiones basadas en datos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;