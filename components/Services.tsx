import React from 'react';
import { Palette, Video, Megaphone, Radio, Briefcase, Users, Calendar, Layout } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Branding",
      icon: <Palette size={24} />,
      items: ["Identidad visual", "Manual de marca", "Rediseño de marca", "Tono, propósito y posicionamiento"]
    },
    {
      title: "Contenido",
      icon: <Video size={24} />,
      items: ["Estrategias de contenido", "Producción y planificación mensual", "Coordinación de equipos audiovisuales", "Storytelling y guiones", "Videos, fotografía, institucional"]
    },
    {
      title: "Publicidad Digital",
      icon: <Megaphone size={24} />,
      items: ["Meta Ads", "Google Ads", "LinkedIn Ads", "TikTok Ads", "Campañas de performance", "Reportes y optimizaciones"]
    },
    {
      title: "Medios Tradicionales",
      icon: <Radio size={24} />,
      items: ["Radio", "Diarios y portales digitales", "Cartelería en vía pública", "Publicidad en eventos", "Gestión integral"]
    },
    {
      title: "Consultoría PYMEs",
      icon: <Briefcase size={24} />,
      items: ["Diagnóstico", "Auditoría", "Acompañamiento estratégico", "Plan de acción personalizado", "Gestión de redes"]
    },
    {
      title: "Capacitaciones",
      icon: <Users size={24} />,
      items: ["Marketing digital", "Comunicación y contenido", "Buenas prácticas (IG/LinkedIn)", "Branding interno"]
    },
    {
      title: "Eventos Corporativos",
      icon: <Calendar size={24} />,
      items: ["Cobertura de eventos", "Merchandising y kits", "Activaciones internas", "Coordinación audiovisual"]
    },
    {
      title: "Diseño y Web",
      icon: <Layout size={24} />,
      items: ["Piezas digitales y packaging", "Señalética", "Landing Pages (Diseño/Redacción)", "Optimizaciones y Analytics"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Soluciones integrales para cada etapa de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 p-8 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-0 text-gray-900 group-hover:text-white">{category.title}</h3>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;