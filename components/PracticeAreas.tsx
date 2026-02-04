
import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../constants';
import { PracticeArea } from '../types';

const PracticeAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const closeModal = () => setSelectedArea(null);

  const navigateToBooking = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeModal();
    const contactSection = document.getElementById('iletisim');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadPDF = (e: React.MouseEvent, area: PracticeArea) => {
    e.stopPropagation();
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const subFieldsHtml = area.subFields.map(f => `<li>${f}</li>`).join('');

    printWindow.document.write(`
      <html>
        <head>
          <title>${area.title} - Bilgi Föyü</title>
          <style>
            body { font-family: 'Times New Roman', serif; padding: 50px; line-height: 1.6; color: #1a202c; }
            .header { text-align: center; border-bottom: 2px solid #DAA520; padding-bottom: 20px; margin-bottom: 40px; }
            .logo { font-size: 24px; font-weight: bold; letter-spacing: 0.2em; color: #0f172a; }
            .subtitle { font-size: 10px; color: #DAA520; text-transform: uppercase; letter-spacing: 0.3em; }
            h1 { font-size: 28px; color: #0f172a; margin-top: 0; }
            .section-title { font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; color: #DAA520; margin-top: 30px; margin-bottom: 10px; border-left: 3px solid #DAA520; padding-left: 10px; }
            .content { font-size: 14px; margin-bottom: 20px; }
            ul { font-size: 14px; margin-left: 20px; }
            li { margin-bottom: 5px; }
            .footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 10px; color: #64748b; text-align: center; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">MESA HUKUK</div>
            <div class="subtitle">Danışmanlık Hizmetleri</div>
          </div>
          <h1>${area.title}</h1>
          <div class="section-title">Hizmet Tanımı</div>
          <div class="content">${area.longDescription}</div>
          <div class="section-title">Uzmanlık Kapsamı</div>
          <ul>${subFieldsHtml}</ul>
          <div class="footer">
            Mesa Hukuk & Danışmanlık | Antalya<br/>
            Bu belge bilgilendirme amaçlıdır ve profesyonel hukuki tavsiye yerine geçmez.
          </div>
          <script>
            window.onload = function() { window.print(); window.close(); };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <section id="hizmetler" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L19 8.18v7.64L12 19.32l-7-3.5V8.18l7-4z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold text-[10px] tracking-[0.4em] uppercase block mb-4">Uzmanlıklar</span>
            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">Müvekkillerimiz İçin <br/><span className="italic text-slate-400">Kesin Çözümler.</span></h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed border-l border-slate-200 pl-6">
            Antalya bölgesindeki karmaşık hukuki süreçlerinizi, yerel tecrübe ve global standartlarla yönetiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRACTICE_AREAS.map((area) => (
            <div 
              key={area.id} 
              onClick={() => setSelectedArea(area)}
              className="group bg-white border border-slate-100 rounded-sm hover:border-gold hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 cursor-pointer flex flex-col h-full overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 saturate-[1.1] group-hover:saturate-150" 
                />
                {/* Daha hafif ve renk geçişli overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                
                {/* İkon Rozeti */}
                <div className="absolute bottom-4 left-6 w-12 h-12 bg-white rounded-sm shadow-xl flex items-center justify-center text-slate-900 group-hover:bg-gold transition-colors duration-500">
                  <div className="scale-75 group-hover:scale-90 transition-transform">{area.icon}</div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-3 group-hover:text-gold transition-colors">
                  {area.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-6 flex-1">
                  {area.description}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-50 group-hover:border-gold/20 flex items-center justify-between">
                  <span className="text-[9px] font-bold tracking-widest text-gold uppercase">Detayları İncele</span>
                  <svg className="w-3.5 h-3.5 text-gold transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Detay Modalı */}
      {selectedArea && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={closeModal}></div>
          <div className="relative w-full max-w-3xl bg-white rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col">
            <div className="grid md:grid-cols-12 overflow-y-auto">
              {/* Sol Taraf: İkon ve Başlık Alanı */}
              <div className="md:col-span-4 bg-slate-50 p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-100">
                <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-900 mb-8 border border-gold/20">
                  {selectedArea.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">{selectedArea.title}</h4>
                <div className="w-12 h-1 bg-gold mx-auto"></div>
              </div>

              {/* Sağ Taraf: Detaylı İçerik */}
              <div className="md:col-span-8 p-12 relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="space-y-10">
                  <div>
                    <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold mb-4">Hizmet Tanımı</h5>
                    <p className="text-slate-600 text-sm leading-relaxed font-light italic">
                      "{selectedArea.longDescription}"
                    </p>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold mb-6">Uzmanlık Alt Başlıkları</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedArea.subFields.map((field, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                          {field}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button 
                      onClick={(e) => navigateToBooking(e)}
                      className="flex-1 py-4 bg-slate-950 text-white font-bold rounded-sm hover:bg-gold hover:text-slate-950 transition-all text-[10px] tracking-widest uppercase shadow-xl"
                    >
                      Hemen Randevu Al
                    </button>
                    <button 
                      onClick={(e) => handleDownloadPDF(e, selectedArea)}
                      className="px-8 py-4 border border-slate-200 text-slate-600 hover:border-gold hover:text-gold transition-all text-[10px] tracking-widest uppercase flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Bilgi Föyü (PDF)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PracticeAreas;
