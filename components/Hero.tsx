
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { JUSTICE_QUOTES } from '../constants';

const Hero: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 8000);
  }, [quoteIndex, isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % JUSTICE_QUOTES.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev === 0 ? JUSTICE_QUOTES.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">
      {/* Arka Plan Modern Katmanları */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(51,65,85,0.4),transparent_40%)]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-900/50 to-transparent skew-x-[-6deg] translate-x-32 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Sol Taraf: Metin İçeriği */}
          <div className="lg:col-span-7 space-y-10">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <span className="text-gold font-bold text-[10px] tracking-[0.6em] uppercase block mb-6 drop-shadow-sm">
                Antalya Hukuk & Danışmanlık
              </span>
              <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.05] tracking-tight">
                Adaletin <span className="italic text-slate-500">Modern</span> <br/>
                Yüzü ile <span className="text-gold-gradient">Tanışın.</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-xl border-l-2 border-gold pl-8 animate-in fade-in slide-in-from-left-8 duration-1000 [animation-delay:200ms]">
              Mesa Hukuk, geleneksel güven prensiplerini modern teknoloji ve stratejik akıl ile birleştirerek müvekkillerine prestijli çözümler sunar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-in fade-in slide-in-from-left-8 duration-1000 [animation-delay:400ms]">
              <button 
                onClick={() => scrollToSection('iletisim')}
                className="px-10 py-5 bg-gold-gradient text-slate-900 font-bold text-xs tracking-[0.3em] uppercase hover:brightness-110 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all rounded-sm"
              >
                Randevu Al
              </button>
              <button 
                onClick={() => scrollToSection('hakkimizda')}
                className="px-10 py-5 border border-white/10 text-white font-bold text-xs tracking-[0.3em] uppercase hover:bg-white/5 hover:border-white/20 transition-all rounded-sm backdrop-blur-sm"
              >
                Vizyonumuz
              </button>
            </div>
          </div>

          {/* Sağ Taraf: Görsel ve Özlü Söz Karuseli */}
          <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative rounded-sm overflow-hidden aspect-[4/5] shadow-[0_40px_100px_rgba(0,0,0,0.5)] group border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Hukuk Ofisi" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>

              {/* Overlay: Özlü Söz Kutusu (Rafine Edilmiş Açık Ton) */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="bg-[#fafaf9]/95 backdrop-blur-xl p-8 md:p-10 rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden group/quote border border-gold/10">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-gold font-bold text-[9px] tracking-[0.5em] uppercase">
                        Hukuk Felsefesi
                      </span>
                      <div className="w-6 h-0.5 bg-gold/30"></div>
                    </div>
                    <div className="flex gap-3">
                       <button onClick={handlePrev} className="p-2 bg-slate-100 hover:bg-gold hover:text-white text-slate-500 transition-all rounded-sm"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg></button>
                       <button onClick={handleNext} className="p-2 bg-slate-100 hover:bg-gold hover:text-white text-slate-500 transition-all rounded-sm"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg></button>
                    </div>
                  </div>

                  <div className={`min-h-[120px] flex items-center transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                    <p className="text-slate-800 font-serif italic text-xl md:text-2xl leading-relaxed">
                      "{JUSTICE_QUOTES[quoteIndex]}"
                    </p>
                  </div>

                  {/* Navigasyon Çizgileri - Daha Zarif */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100/50">
                    <div 
                      className="h-full bg-gold-gradient transition-all duration-1000 ease-in-out" 
                      style={{ width: `${((quoteIndex + 1) / JUSTICE_QUOTES.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Aşağı Kaydır İşareti */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 hover:opacity-100 transition-all cursor-pointer" onClick={() => scrollToSection('hakkimizda')}>
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white">Keşfet</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
