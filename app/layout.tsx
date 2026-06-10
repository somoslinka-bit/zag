import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zag Consultora | Marketing Estratégico en Tandil',
  description: 'Zag Consultora es una agencia de marketing estratégico para empresas y pymes de Tandil. Branding, contenido, publicidad digital, consultoría y más.',
  metadataBase: new URL('https://zag-delta.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zag Consultora | Marketing Estratégico en Tandil',
    description: 'Agencia de marketing estratégico para empresas y pymes de Tandil. Branding, contenido, publicidad digital y consultoría.',
    url: 'https://zag-delta.vercel.app/',
    siteName: 'Zag Consultora',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zag Consultora | Marketing Estratégico en Tandil',
    description: 'Agencia de marketing estratégico para empresas y pymes de Tandil.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/LogoZAG - Editado.png',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Zag Consultora',
      url: 'https://zag-delta.vercel.app/',
      logo: 'https://zag-delta.vercel.app/LogoZAG%20-%20Editado.png',
      description: 'Agencia de marketing estratégico para empresas y pymes.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tandil',
        addressRegion: 'Buenos Aires',
        addressCountry: 'AR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+54-9-2494-60-6868',
        contactType: 'customer service',
        email: 'Zagconsultora@gmail.com',
      },
    },
    {
      '@type': 'WebSite',
      name: 'Zag Consultora',
      url: 'https://zag-delta.vercel.app/',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FF4500" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="antialiased selection:bg-primary selection:text-white">
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1002449379453412');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1002449379453412&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
