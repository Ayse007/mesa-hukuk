
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="ekip" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold font-bold text-[10px] tracking-[0.5em] uppercase block mb-6">Uzman Kadromuz</span>
          <h2 className="text-5xl font-serif text-slate-900">Adaletin <span className="italic text-slate-400">Tecrübeli Elleri.</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {TEAM.map((lawyer) => (
            <div key={lawyer.id} className="group text-center w-full max-w-[380px]">
              <div className="relative mb-10 overflow-hidden rounded-sm aspect-[4/5] shadow-xl border border-slate-100">
                <img 
                  src={lawyer.image} 
                  alt={lawyer.name} 
                  className="w-full h-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  onError={(e) => {
                    // Fallback for missing image
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                   <div className="text-left w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-xs text-slate-300 leading-relaxed italic line-clamp-3 mb-6 font-light">"{lawyer.bio}"</p>
                      <div className="flex gap-4">
                        <a href={`mailto:${lawyer.email}`} className="p-2 bg-gold/20 hover:bg-gold transition-colors text-gold hover:text-slate-900 rounded-sm">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </a>
                        <a href={`tel:${lawyer.phone}`} className="p-2 bg-white/10 hover:bg-white transition-colors text-white hover:text-slate-900 rounded-sm">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        </a>
                      </div>
                   </div>
                </div>
              </div>
              
              <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">{lawyer.name}</h4>
              
              <div className="flex justify-center mb-4">
                <span className="inline-block px-4 py-1.5 bg-slate-50 text-slate-500 text-[9px] font-bold uppercase tracking-[0.15em] rounded-full border border-slate-100 shadow-sm group-hover:border-gold/30 group-hover:bg-white transition-all duration-500">
                  {lawyer.specialization}
                </span>
              </div>
              
              <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em]">{lawyer.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
