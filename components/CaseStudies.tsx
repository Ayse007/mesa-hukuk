
import React, { useState, useMemo } from 'react';
import { CASE_STUDIES } from '../constants';

const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');

  // Benzersiz kategorileri al
  const categories = useMemo(() => {
    const cats = CASE_STUDIES.map(study => study.category);
    return ['Tümü', ...Array.from(new Set(cats))];
  }, []);

  // Filtrelenmiş davaları hesapla
  const filteredStudies = useMemo(() => {
    if (activeCategory === 'Tümü') return CASE_STUDIES;
    return CASE_STUDIES.filter(study => study.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="emsal-kararlar" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold text-[10px] tracking-[0.5em] uppercase block mb-6">Başarı Hikayeleri</span>
            <h2 className="text-5xl font-serif text-slate-900 leading-tight">
              Emsal Teşkil Eden <br/>
              <span className="italic text-slate-400">Hukuki Zaferler.</span>
            </h2>
          </div>
        </div>

        {/* Filtreleme Menüsü */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-200 pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-full border ${
                activeCategory === category
                  ? 'bg-slate-900 text-gold border-slate-900 shadow-lg'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-gold hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 transition-all duration-500">
          {filteredStudies.map((study) => (
            <div 
              key={study.id} 
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100 flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute top-6 left-6 bg-slate-900/90 text-gold text-[9px] font-bold py-1 px-3 tracking-widest uppercase backdrop-blur-md">
                  {study.category}
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 group-hover:text-gold transition-colors">
                  {study.title}
                </h3>
                <div className="space-y-4 mb-8 flex-1">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Sorun</h4>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">{study.challenge}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-50">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">Sonuç</h4>
                    <p className="text-slate-800 text-sm font-medium italic">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-20 bg-white border border-dashed border-slate-200 rounded-sm">
            <p className="text-slate-400 font-serif italic text-lg">Bu kategoride henüz bir kayıt bulunmamaktadır.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
