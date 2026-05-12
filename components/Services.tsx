import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Palette, Video, Megaphone, Radio, Briefcase, Users, Calendar, Layout } from 'lucide-react';

const serviceCategories = [
  {
    title: "Branding",
    icon: <Palette size={28} />,
    items: ["Identidad visual", "Manual de marca", "Rediseño de marca", "Tono, propósito y posicionamiento"],
  },
  {
    title: "Contenido",
    icon: <Video size={28} />,
    items: ["Estrategias de contenido", "Producción y planificación mensual", "Coordinación audiovisual", "Storytelling y guiones", "Videos y fotografía"],
  },
  {
    title: "Publicidad Digital",
    icon: <Megaphone size={28} />,
    items: ["Meta Ads", "Google Ads", "LinkedIn Ads", "TikTok Ads", "Campañas de performance", "Reportes y optimizaciones"],
  },
  {
    title: "Medios Tradicionales",
    icon: <Radio size={28} />,
    items: ["Radio", "Diarios y portales digitales", "Cartelería en vía pública", "Publicidad en eventos", "Gestión integral"],
  },
  {
    title: "Consultoría PYMEs",
    icon: <Briefcase size={28} />,
    items: ["Diagnóstico", "Auditoría", "Acompañamiento estratégico", "Plan de acción personalizado", "Gestión de redes"],
  },
  {
    title: "Capacitaciones",
    icon: <Users size={28} />,
    items: ["Marketing digital", "Comunicación y contenido", "Buenas prácticas (IG/LinkedIn)", "Branding interno"],
  },
  {
    title: "Eventos Corporativos",
    icon: <Calendar size={28} />,
    items: ["Cobertura de eventos", "Merchandising y kits", "Activaciones internas", "Coordinación audiovisual"],
  },
  {
    title: "Diseño y Web",
    icon: <Layout size={28} />,
    items: ["Piezas digitales y packaging", "Señalética", "Landing Pages", "Optimizaciones y Analytics"],
  },
];

type ServiceStickyCardProps = {
  i: number;
  service: typeof serviceCategories[0];
  progress: any;
  range: [number, number];
  targetScale: number;
};

const ServiceStickyCard = ({ i, service, progress, range, targetScale }: ServiceStickyCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const total = serviceCategories.length;

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 200}px)`,
        }}
        className="relative -top-1/4 origin-top overflow-hidden rounded-2xl sm:rounded-3xl
                   w-full max-w-[340px] h-[300px]
                   sm:max-w-[560px] sm:h-[320px]
                   lg:max-w-[780px] lg:h-[360px]
                   bg-white border border-[#FF4500]/20 shadow-sm"
      >
        {/* Barra naranja superior */}
        <div className="h-[3px] w-full bg-[#FF4500]" />

        <div className="h-full w-full flex flex-col p-6 sm:p-8 lg:p-10 pt-5 sm:pt-6 lg:pt-7">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#FF4500' + '18', color: '#FF4500' }}
            >
              {service.icon}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#FF4500' }}>
                {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mt-0.5">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Items */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {service.items.map((item, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="services" className="scroll-mt-32">
      {/* Título — fuera del contenedor sticky */}
      <div className="py-16 bg-white text-center">
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Servicios
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
          Soluciones integrales para cada etapa de tu negocio.
        </p>
      </div>

      {/* Contenedor sticky */}
      <div
        ref={container}
        className="relative flex flex-col items-center bg-gray-100
                   pt-[5vh] pb-[60vh]
                   sm:pt-[8vh] sm:pb-[70vh]
                   lg:pt-[10vh] lg:pb-[80vh]"
      >
        {serviceCategories.map((service, i) => {
          const targetScale = Math.max(0.7, 1 - (serviceCategories.length - i - 1) * 0.05);
          return (
            <ServiceStickyCard
              key={i}
              i={i}
              service={service}
              progress={scrollYProgress}
              range={[i / serviceCategories.length, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
