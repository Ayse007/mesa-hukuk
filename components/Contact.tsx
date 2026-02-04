
import React from 'react';
import BookingSystem from './BookingSystem';

const Contact: React.FC = () => {
  return (
    <section id="iletisim" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col">
            <div className="inline-block self-start px-5 py-2 bg-gold/10 text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6 md:mb-8 rounded-sm">
              İletişim Merkezi
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-10 text-slate-900 leading-tight">
              Antalya Ofisimizle <br/><span className="italic text-slate-400">Bağlantı Kurun.</span>
            </h2>
            <p className="text-slate-600 mb-10 md:mb-16 text-base md:text-lg leading-relaxed font-light">
              Mesa Hukuk & Danışmanlık, Antalya'nın merkezi noktalarından Soğuksu Mahallesi'nde müvekkillerini kabul etmektedir. Profesyonel randevu sistemimiz üzerinden uygun saati seçebilirsiniz.
            </p>

            <div className="space-y-8 md:space-y-12 mb-12 lg:mb-0">
              {[
                { 
                  label: 'Ofis Adresi', 
                  val: 'Soğuksu Mah., Kazım Karabekir Cd. No: 45, Muratpaşa / Antalya', 
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  )
                },
                { 
                  label: 'Doğrudan Hat', 
                  val: '+90 (242) 555 07 07', 
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  )
                },
                { 
                  label: 'Resmi E-posta', 
                  val: 'emrahsurun@mesahukuk.com', 
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 md:gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-sm shadow-sm flex items-center justify-center text-slate-300 group-hover:text-gold group-hover:shadow-xl group-hover:border-gold/30 transition-all flex-shrink-0 border border-slate-100">
                    <svg className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      {item.icon}
                    </svg>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-slate-900 uppercase text-[9px] md:text-[10px] tracking-[0.2em] mb-1 md:mb-2">{item.label}</h4>
                    <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-[280px]">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gold/5 rounded-sm blur-2xl -z-10"></div>
            <BookingSystem />
            <div className="mt-8 flex items-center gap-3 text-[9px] text-slate-400 uppercase tracking-[0.2em] justify-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
              7/24 Aktif Online Randevu Portalı
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
