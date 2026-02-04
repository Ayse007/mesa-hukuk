
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Counter from './components/Counter';
import FAQ from './components/FAQ';
import Sitemap from './components/Sitemap';
import Vekalet from './components/Vekalet';

const AboutSection: React.FC = () => (
  <section id="hakkimizda" className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
        <div className="relative">
          <span className="text-gold font-bold text-[10px] tracking-[0.5em] uppercase block mb-6">Mesa Vizyonu</span>
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-10 leading-tight">
            Geleneksel Güven, <br/><span className="italic text-slate-400">Modern Yaklaşım.</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
            Mesa Hukuk & Danışmanlık, dürüstlük ve şeffaflık ilkelerinden ödün vermeden, müvekkillerine en yüksek standartlarda hukuki destek sağlamaktadır. Amacımız, sadece dava kazanmak değil, müvekkillerimizin hukuki güvenliğini kalıcı olarak tesis etmektir.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-widest">Sarsılmaz Şeffaflık</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Sürecin her aşamasında müvekkillerimizi en ince ayrıntısına kadar bilgilendiriyoruz.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-widest">Stratejik Akıl</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Karmaşık hukuki sorunları basit, hızlı ve etkili çözümlere dönüştürüyoruz.</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
            alt="Adalet" 
            className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute -bottom-10 -right-10 bg-slate-900 p-10 hidden md:block border border-gold/20 shadow-2xl">
            <div className="text-5xl font-serif text-gold font-bold mb-2">
               <Counter target={15} suffix="+" />
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Yıllık Tecrübe</div>
          </div>
        </div>
      </div>

      {/* Sayaçlar (Counters) - Animasyonlu Versiyon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 border-t border-slate-100">
        {[
          { label: 'Başarılı Dava', val: 1200, suffix: '+' },
          { label: 'Mutlu Müvekkil', val: 500, suffix: '+' },
          { label: 'Uzman Avukat', val: 8, suffix: '' },
          { label: 'Hukuki Alan', val: 12, suffix: '' }
        ].map((stat, idx) => (
          <div key={idx} className="text-center group">
            <div className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-2 group-hover:text-gold transition-colors duration-500">
              <Counter target={stat.val} suffix={stat.suffix} />
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

type ViewState = 'home' | 'sitemap' | 'vekalet';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  const handleNavigate = (sectionId: string) => {
    setView('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleVekaletClick = () => {
    setView('vekalet');
  };

  useEffect(() => {
    if (view !== 'home') {
      window.scrollTo(0, 0);
    }
  }, [view]);

  if (view === 'sitemap') {
    return <Sitemap onNavigate={handleNavigate} onClose={() => setView('home')} />;
  }

  if (view === 'vekalet') {
    return <Vekalet onNavigateHome={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-gold selection:text-slate-950">
      <Navbar onVekaletClick={handleVekaletClick} />
      <Hero />
      <AboutSection />
      <PracticeAreas />
      <CaseStudies />
      <Team />
      <FAQ />
      <Testimonials />
      <AIConsultant />
      <Contact />
      <Footer onSitemapClick={() => setView('sitemap')} onVekaletClick={handleVekaletClick} />
    </div>
  );
};

export default App;
