
import React from 'react';
import { PRACTICE_AREAS } from '../constants';
import Logo from './Logo';

interface SitemapProps {
  onNavigate: (sectionId: string) => void;
  onClose: () => void;
}

const Sitemap: React.FC<SitemapProps> = ({ onNavigate, onClose }) => {
  const sections = [
    {
      title: "Kurumsal",
      links: [
        { label: "Ana Sayfa", id: "hero" },
        { label: "Hakkımızda", id: "hakkimizda" },
        { label: "Vizyonumuz", id: "hakkimizda" },
        { label: "Ekibimiz", id: "ekip" },
      ]
    },
    {
      title: "Hizmet Alanlarımız",
      links: PRACTICE_AREAS.map(area => ({ label: area.title, id: "hizmetler" }))
    },
    {
      title: "Bilgi Merkezi",
      links: [
        { label: "Emsal Kararlar", id: "emsal-kararlar" },
        { label: "Sıkça Sorulan Sorular", id: "sss" },
        { label: "Müvekkil Yorumları", id: "testimonials" },
        { label: "AI Hukuk Asistanı", id: "ai-consultant" },
      ]
    },
    {
      title: "İletişim & Randevu",
      links: [
        { label: "Online Randevu", id: "iletisim" },
        { label: "Ofis Adresimiz", id: "iletisim" },
        { label: "İletişim Formu", id: "iletisim" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-500 pb-20">
      {/* Sitemap Header */}
      <header className="py-8 border-b border-slate-100 mb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo lightMode={false} />
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-gold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Ana Sayfaya Dön
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-gold font-bold text-[10px] tracking-[0.5em] uppercase block mb-4">Navigasyon Rehberi</span>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900">Site <span className="italic text-slate-400">Haritası.</span></h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold"></div>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-900">{section.title}</h2>
              </div>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button 
                      onClick={() => onNavigate(link.id)}
                      className="text-slate-500 hover:text-gold text-sm font-light transition-all hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Links Integration */}
        <div className="mt-24 pt-16 border-t border-slate-100 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-4">Yasal Bilgilendirmeler</h3>
            <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <span className="cursor-default">KVKK</span>
              <span className="cursor-default">GİZLİLİK</span>
              <span className="cursor-default">ETİK KURALLAR</span>
              <span className="cursor-default">KULLANIM KOŞULLARI</span>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
            <p className="text-xs text-slate-500 leading-relaxed italic">
              "Bu site haritası, müvekkillerimizin aradıkları bilgiye en kısa sürede ulaşmalarını sağlamak ve dijital erişilebilirliğimizi artırmak amacıyla hazırlanmıştır."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
