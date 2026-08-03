import ConsultoriaPage from '@/views/ConsultoriaPage'

export const metadata = {
  title: 'Consultoría Estratégica | Zag Consultora',
  description: 'Sesiones personalizadas 1:1 para ordenar tu estrategia de marketing y comunicación. Diagnóstico, plan de acción y acompañamiento.',
  alternates: {
    canonical: '/consultoria',
  },
  openGraph: {
    title: 'Consultoría Estratégica | Zag Consultora',
    description: 'Sesiones personalizadas 1:1 para ordenar tu estrategia de marketing y comunicación. Diagnóstico, plan de acción y acompañamiento.',
    url: 'https://zagconsultora.com/consultoria',
    siteName: 'Zag Consultora',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function Consultoria() {
  return <ConsultoriaPage />
}
