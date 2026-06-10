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
      className="sticky top-0 w-full flex items-center justify-center px-3 sm:px-6 lg:px-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 60}px)`,
        }}
        className="relative -top-1/4 origin-top overflow-hidden rounded-2xl sm:rounded-3xl
                   w-full max-w-6xl h-[140px] sm:h-[150px] lg:h-[160px]
                   bg-white border border-gray-900/10 shadow-md"
      >
        <div className="h-[3px] w-full bg-gray-900" />

        <div className="h-full flex items-center gap-5 sm:gap-7 px-7 sm:px-12 lg:px-16">
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#FF4500' + '14', color: '#FF4500' }}
          >
            {service.icon}
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#FF4500' }}>
              {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mt-0.5">
              {service.title}
            </h3>
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
      <div className="pt-16 pb-8 bg-gray-100 text-center">
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Servicios
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light px-6 text-center">
          Soluciones integrales para cada etapa<br className="sm:hidden" /> de tu negocio.
        </p>
      </div>

      {/* Contenedor sticky */}
      <div
        ref={container}
        className="relative flex flex-col items-center bg-gray-100
                   pt-0 pb-[35vh]
                   sm:pb-[45vh]
                   lg:pb-[55vh]"
      >
        {serviceCategories.map((service, i) => {
          const targetScale = Math.max(0.92, 1 - (serviceCategories.length - i - 1) * 0.02);
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
