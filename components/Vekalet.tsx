
import React, { useState } from 'react';
import Logo from './Logo';

interface VekaletProps {
  onNavigateHome: () => void;
}

const Vekalet: React.FC<VekaletProps> = ({ onNavigateHome }) => {
  const [copied, setCopied] = useState(false);

  const vekaletMetni = `Vekalet Bilgileri:
Avukat: Emrah SÜRÜN
Baro: Antalya Barosu
Sicil No: 3256
Adres: Soğuksu Mah., Kazım Karabekir Cd. No: 45, Muratpaşa / Antalya
Vergi Dairesi: Üçkapılar V.D.
Vergi No: 1234567890`;

  const handleCopy = () => {
    navigator.clipboard.writeText(vekaletMetni);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-500">
      {/* Header */}
      <header className="py-6 border-b border-slate-100 bg-slate-50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div onClick={onNavigateHome} className="cursor-pointer">
            <Logo lightMode={false} />
          </div>
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-gold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Ana Sayfaya Dön
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-16">
          <span className="text-gold font-bold text-[10px] tracking-[0.5em] uppercase block mb-4">Resmi Bilgiler</span>
          <h1 className="text-5xl font-serif text-slate-900 mb-6">Vekaletname <span className="italic text-slate-400">Bilgileri.</span></h1>
          <p className="text-slate-500 text-lg leading-relaxed font-light">
            Noterliklerde vekaletname düzenletirken aşağıdaki bilgileri kullanabilirsiniz. Boşanma, tanıma ve tenfiz gibi özel yetki gerektiren davalar için lütfen avukatınızla önceden iletişime geçiniz.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Ana Bilgi Kartı */}
          <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -mr-16 -mt-16 rounded-full group-hover:bg-gold/10 transition-colors"></div>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Avukat Bilgileri</h3>
                  <p className="text-xl font-serif font-bold text-slate-900">Av. Emrah SÜRÜN</p>
                  <p className="text-sm text-slate-500 mt-1">Antalya Barosu - Sicil: 3256</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Vergi Bilgileri</h3>
                  <p className="text-sm font-medium text-slate-800">Üçkapılar Vergi Dairesi</p>
                  <p className="text-sm text-slate-500 mt-1">V.N: 1234567890</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Ofis Adresi</h3>
                  <p className="text-sm leading-relaxed text-slate-800">
                    Soğuksu Mah., Kazım Karabekir Cd. No: 45, <br/>
                    Muratpaşa / Antalya
                  </p>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={handleCopy}
                    className={`flex items-center gap-3 px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all ${
                      copied ? 'bg-green-500 text-white' : 'bg-slate-900 text-gold hover:bg-gold hover:text-slate-900'
                    }`}
                  >
                    {copied ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        Kopyalandı
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                        Bilgileri Kopyala
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Uyarılar Bölümü */}
          <div className="bg-white border-l-4 border-gold p-8 shadow-sm">
            <h4 className="text-lg font-serif font-bold text-slate-900 mb-4">Dikkat Edilmesi Gereken Hususlar</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-light leading-relaxed">
              <li className="flex gap-4">
                <span className="text-gold font-bold">01.</span>
                <span>Vekaletname düzenletirken noterliğe **kimlik** (Nüfus Cüzdanı, Ehliyet veya Pasaport) ile gidilmesi zorunludur.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-bold">02.</span>
                <span>Boşanma davaları için çıkarılacak vekaletnamelerde **"Boşanma Davası Açmaya Yetkili"** ibaresi bulunmalı ve noterliğe **2 adet vesikalık fotoğraf** ile gidilmelidir.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-bold">03.</span>
                <span>Şirket adına vekaletname çıkarılacaksa; imza sirküleri ve şirket kaşesinin yanınızda bulunması gerekmektedir.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-bold">04.</span>
                <span>Gayrimenkul satış veya alım yetkisi içeren vekaletnamelerde taşınmazın detaylı bilgilerinin (Ada, Parsel vb.) belirtilmesi gerekebilir.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-bold">Mesa Hukuk & Danışmanlık | Antalya</p>
        </div>
      </footer>
    </div>
  );
};

export default Vekalet;
