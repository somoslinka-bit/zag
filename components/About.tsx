import React from 'react';
import { motion } from "motion/react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Somos un equipo de profesionales con experiencia real y visión estratégica.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Acompañamos a empresas y pymes que venden servicios o soluciones a medida a ordenar, profesionalizar y potenciar su comunicación, alineando cada acción a objetivos comerciales concretos.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <img
              src="/Whisk_bbda4d8f425e4b6b45d406b75ecdbc90dr.jpeg"
              alt="Equipo ZAG"
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
              <p className="text-primary font-bold text-xl mb-2">Nuestro ADN</p>
              <p className="text-sm text-gray-600">Pasión por transformar negocios a través de estrategias digitales efectivas.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;