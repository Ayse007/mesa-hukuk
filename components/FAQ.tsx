
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Dekoratif Arka Plan */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/50 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold font-bold text-[10px] tracking-[0.5em] uppercase block mb-6">Bilgi Merkezi</span>
          <h2 className="text-5xl font-serif text-slate-900 mb-6">Sıkça Sorulan <br/><span className="italic text-slate-400">Sorular.</span></h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            Hukuki süreçler hakkında merak ettiğiniz temel konuları sizin için derledik. Daha detaylı bilgi için ofisimizle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq) => (
            <div 
              key={faq.id} 
              className={`bg-white border rounded-sm transition-all duration-500 overflow-hidden ${
                openId === faq.id ? 'border-gold shadow-xl' : 'border-slate-100 hover:border-gold/30'
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-gold uppercase tracking-widest">{faq.category}</span>
                  <span className={`text-lg font-serif font-bold transition-colors ${
                    openId === faq.id ? 'text-slate-950' : 'text-slate-700 group-hover:text-gold'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`flex-shrink-0 ml-6 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                  openId === faq.id ? 'bg-gold border-gold text-slate-900 rotate-180' : 'border-slate-100 text-slate-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openId === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 md:px-12 md:pb-12 border-t border-slate-50 pt-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-px h-12 bg-gold/30 hidden md:block mt-1"></div>
                    <p className="text-slate-600 leading-relaxed text-sm font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 p-1 bg-white border border-slate-100 rounded-full pr-6 shadow-sm">
            <div className="w-10 h-10 bg-slate-900 text-gold rounded-full flex items-center justify-center font-bold text-lg">?</div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
              Aradığınız cevabı bulamadınız mı? <a href="#iletisim" className="text-gold hover:underline ml-1">Bize yazın.</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
