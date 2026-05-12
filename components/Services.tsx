import React from 'react';
import { Palette, Video, Megaphone, Radio, Briefcase, Users, Calendar, Layout, ChevronDown } from 'lucide-react';
import { Expandable, ExpandableContent, ExpandableTrigger } from '@/components/ui/expandable';
import { cn } from '@/lib/utils';

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => (
            <Expandable key={index} expandDirection="vertical">
              {({ isExpanded }) => (
                <div
                  className={cn(
                    "rounded-2xl transition-all duration-300",
                    isExpanded
                      ? "bg-gray-900 shadow-xl"
                      : "bg-gray-50 shadow-sm hover:shadow-md"
                  )}
                >
                  <ExpandableTrigger>
                    <div className="p-6 lg:p-8 select-none">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors",
                          isExpanded ? "bg-white/10 text-white" : "bg-white text-primary"
                        )}
                      >
                        {category.icon}
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          className={cn(
                            "text-xl font-bold transition-colors",
                            isExpanded ? "text-white" : "text-gray-900"
                          )}
                        >
                          {category.title}
                        </h3>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 flex-shrink-0 transition-all duration-300",
                            isExpanded ? "rotate-180 text-white" : "text-gray-400"
                          )}
                        />
                      </div>
                    </div>
                  </ExpandableTrigger>

                  <ExpandableContent preset="slide-up">
                    <div className="px-6 lg:px-8 pb-6 pt-1 border-t border-white/10">
                      <ul className="space-y-2.5 mt-3">
                        {category.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-white/75">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ExpandableContent>
                </div>
              )}
            </Expandable>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
