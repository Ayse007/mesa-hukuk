
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold font-bold text-[10px] tracking-[0.5em] uppercase block mb-6">Müvekkil Deneyimleri</span>
          <h2 className="text-5xl font-serif text-white">Güvenle <span className="italic text-slate-400">Temsil Ediyoruz.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/5 border border-white/10 p-10 rounded-sm hover:bg-white/[0.08] transition-all duration-500 group">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full border border-white/10 group-hover:border-gold/30 transition-all duration-500">
                  <img 
                    src={t.avatar} 
                    alt={t.clientName} 
                    className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 object-cover" 
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">{t.clientName}</h4>
                  <p className="text-gold text-[10px] font-medium tracking-widest uppercase">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
