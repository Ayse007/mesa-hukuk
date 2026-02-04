
import React, { useState } from 'react';
import Logo from './Logo';
import { PRACTICE_AREAS } from '../constants';

type ModalType = 'kvkk' | 'rules' | 'privacy' | 'tos' | null;

interface FooterProps {
  onSitemapClick?: () => void;
  onVekaletClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSitemapClick, onVekaletClick }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const closeModal = () => setActiveModal(null);

  const legalContent = {
    kvkk: {
      title: "KVKK Aydınlatma Metni",
      body: `Mesa Hukuk & Danışmanlık olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla, kişisel verileriniz aşağıda açıklanan kapsamda ve mevzuat tarafından emredilen sınırlar çerçevesinde işlenebilecektir.`
    },
    rules: {
      title: "Mesleki Kurallar ve Etik",
      body: `Hukuk büromuz, Türkiye Barolar Birliği tarafından belirlenen "Avukatlık Meslek Kuralları"na ve 1136 sayılı Avukatlık Kanunu'na tam uyum içinde faaliyet göstermektedir.`
    },
    privacy: {
      title: "Gizlilik Politikası",
      body: `Mesa Hukuk olarak ziyaretçilerimizin gizliliğine önem veriyoruz. Sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için çerezler kullanmaktadır.`
    },
    tos: {
      title: "Kullanım Koşulları",
      body: `Bu web sitesine erişerek belirtilen yasal koşulları kabul etmiş sayılırsınız. Sitedeki metinler, logolar ve tasarımlar Mesa Hukuk'a aittir, izinsiz kopyalanamaz.`
    }
  };

  return (
    <footer className="bg-[#0a0f1a] pt-24 pb-12 text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Sütun 1: Logo ve Hakkımızda */}
          <div className="space-y-8">
            <Logo lightMode={true} className="h-10" />
            <p className="text-slate-400 text-sm leading-relaxed font-light pr-4">
              Mesa Hukuk & Danışmanlık, dürüstlük ve şeffaflık ilkelerinden ödün vermeden, müvekkillerine en yüksek standartlarda profesyonel hukuki destek sağlamaktadır.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-slate-900 transition-all duration-300 group">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current opacity-70 group-hover:opacity-100"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Sütun 2: Hızlı Linkler */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold border-b border-gold/20 pb-4">Menü</h4>
            <ul className="space-y-4">
              {[
                { name: 'Hakkımızda', id: 'hakkimizda' },
                { name: 'Hizmetlerimiz', id: 'hizmetler' },
                { name: 'Ekibimiz', id: 'ekip' },
                { name: 'Sıkça Sorulan Sorular', id: 'sss' },
                { name: 'İletişim', id: 'iletisim' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-white text-sm font-light flex items-center gap-2 group transition-all"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/30 group-hover:bg-gold rounded-full transition-all"></span>
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={onVekaletClick}
                  className="text-slate-400 hover:text-white text-sm font-light flex items-center gap-2 group transition-all"
                >
                  <span className="w-1.5 h-1.5 bg-gold/30 group-hover:bg-gold rounded-full transition-all"></span>
                  Vekalet Bilgileri
                </button>
              </li>
            </ul>
          </div>

          {/* Sütun 3: Çalışma Alanları */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold border-b border-gold/20 pb-4">Hizmet Alanları</h4>
            <ul className="space-y-4">
              {PRACTICE_AREAS.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <button 
                    onClick={() => scrollToSection('hizmetler')}
                    className="text-slate-400 hover:text-white text-sm font-light flex items-center gap-2 group transition-all text-left"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/30 group-hover:bg-gold rounded-full transition-all"></span>
                    {area.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 4: İletişim Bilgileri */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold border-b border-gold/20 pb-4">İletişim</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-gold/10 text-gold rounded-sm group-hover:bg-gold group-hover:text-slate-950 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-1">Adres</p>
                  <p className="text-xs text-slate-400 leading-relaxed">Soğuksu Mah., Kazım Karabekir Cd. No: 45, Muratpaşa / Antalya</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-gold/10 text-gold rounded-sm group-hover:bg-gold group-hover:text-slate-950 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-1">Telefon</p>
                  <a href="tel:+902425550707" className="text-sm font-bold text-white hover:text-gold transition-colors">+90 (242) 555 07 07</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-gold/10 text-gold rounded-sm group-hover:bg-gold group-hover:text-slate-950 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-1">E-posta</p>
                  <a href="mailto:emrahsurun@mesahukuk.com" className="text-sm font-bold text-white hover:text-gold transition-colors">emrahsurun@mesahukuk.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi Barı */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-[11px] font-medium tracking-wide">
            © {new Date().getFullYear()} Mesa Hukuk Bürosu. Tüm Hakları Saklıdır.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <button onClick={() => setActiveModal('kvkk')} className="hover:text-gold transition-colors">KVKK</button>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-gold transition-colors">Gizlilik</button>
            <button onClick={() => setActiveModal('tos')} className="hover:text-gold transition-colors">Kullanım</button>
            <button onClick={() => setActiveModal('rules')} className="hover:text-gold transition-colors">Etik</button>
            <button onClick={onSitemapClick} className="text-gold">Site Haritası</button>
          </div>

          <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest flex items-center gap-2">
            Design & Build by <span className="text-gold opacity-60">Gemini</span>
          </div>
        </div>
      </div>

      {/* Legal Modallar */}
      {activeModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8 text-slate-900">
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-2">
                    {legalContent[activeModal].title}
                  </h3>
                  <div className="w-12 h-1 bg-gold"></div>
                </div>
                <button onClick={closeModal} className="text-slate-400 hover:text-slate-950 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <p className="text-slate-600 leading-relaxed whitespace-pre-wrap font-light text-sm mb-10">
                {legalContent[activeModal].body}
              </p>
              <button 
                onClick={closeModal}
                className="w-full py-4 bg-slate-950 text-gold text-[10px] font-bold tracking-widest uppercase hover:bg-gold hover:text-slate-950 transition-all rounded-sm"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
