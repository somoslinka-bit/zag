import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50 scroll-mt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              ¿Estás listo para ordenar tu comunicación?
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8">
              Agendemos una reunión y empecemos a trabajar en tus objetivos.
            </p>
          
            
            <a href="#" className="inline-flex items-center gap-2 text-green-500 hover:text-green-600 font-medium transition-colors">
              <MessageCircle size={20} />
              Hablemos
            </a>
          </div>

          <form className="space-y-6 relative z-10 max-w-2xl mx-auto border-t border-gray-100 pt-12">
             <div className="text-center mb-8">
               <p className="text-sm uppercase tracking-widest text-gray-500">O envíanos un mensaje directo</p>
             </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Nombre"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 font-light"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 font-light"
                />
              </div>
            </div>

            <div className="space-y-2">
              <textarea 
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-gray-900 font-light"
              ></textarea>
            </div>

            <button 
              type="button"
              className="w-full bg-black text-white font-bold py-5 rounded-xl transition-all hover:opacity-90"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;