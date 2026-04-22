import React from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white dark:bg-white dark:text-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none">
        <Quote size={320} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8">Client Stories</h2>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-600 dark:border-gray-300 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-gray-600 dark:border-gray-300 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed">
              "Zag Consultora didn't just run ads for us; they completely restructured our acquisition funnel. The attention to detail and data analysis is unmatched."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Marcus Chen" 
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <div className="font-bold text-lg">Marcus Chen</div>
                <div className="text-gray-400 dark:text-gray-600 text-sm">CMO, TechFlow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;