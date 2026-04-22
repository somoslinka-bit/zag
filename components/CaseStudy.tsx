import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-white dark:bg-[#18181b] border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Featured Case Study</span>
          <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow"></div>
          <div className="text-2xl font-display font-bold text-gray-900 dark:text-white">01 / 04</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group cursor-pointer">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlk7sNrAW4Y7j40lwtBZUC3U2a4XHTyW3tD9oqo3IO6WEcDu9pgZoWv7rW_NrwhFTALWtDUNfuESl5KtcZba5quaudE1Etb2HNzvu2K2sAfOtDY8jx9B-BZhHV4kEkTNSXr1j9oNa8b-nHp56mbCmd_CU-WSzBGJWYzk6qQ_xXj3d5lL2EinJ32-1rRwRK81Bu7_IBI9IxXLBf94_e1ktsKOQTdfOgQ_Do3yJICNSAveP5-v9fW2i8cLQYwExO3jNs3RFzNdMSR90" 
                alt="Dashboard UI" 
                className="w-full object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white z-20">
                <div className="flex gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium border border-white/10">Fintech</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium border border-white/10">Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl lg:text-5xl font-display font-bold leading-tight text-gray-900 dark:text-white">
              Scaling user acquisition for FinTech startup
            </h3>
            
            <div className="grid grid-cols-2 gap-8 py-6 border-y border-gray-100 dark:border-gray-800">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">+210%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Monthly Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">-45%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Cost Per Acquisition</div>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We implemented a full-funnel strategy focusing on high-intent keywords and personalized nurturing sequences. The result was a dramatic decrease in CAC while scaling volume efficiently across multiple channels.
            </p>

            <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
              Read full case study 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;