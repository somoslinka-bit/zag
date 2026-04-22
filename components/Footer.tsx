import React from 'react';
import { Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="h-10 w-auto">
              <img 
                src="/LogoZAG.png" 
                alt="Logo ZAG" 
                className="h-full w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "LogoZAG.png"; }}
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ayudamos a empresas a navegar el paisaje digital con precisión y creatividad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Mapa del sitio</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Quiénes Somos</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Servicios</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Estrategia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contenido</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Publicidad Digital</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Diseño</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Contacto</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-primary" />
                <span>Tandil,Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>Zagconsultora@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+54 9 2494 60-6868</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Zag Consultora. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900">Política de Privacidad</a>
            <a href="#" className="hover:text-gray-900">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;