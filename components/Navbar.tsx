
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  onVekaletClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onVekaletClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl py-3 shadow-2xl shadow-slate-900/5 border-b border-slate-100' 
        : 'bg-slate-950/0 py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
           <Logo lightMode={!isScrolled} />
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          <a 
            href="#hakkimizda" 
            onClick={(e) => scrollToSection(e, 'hakkimizda')} 
            className={`transition-colors hover:text-gold ${isScrolled ? 'text-slate-600' : 'text-white'}`}
          >
            Hakkımızda
          </a>
          <a 
            href="#hizmetler" 
            onClick={(e) => scrollToSection(e, 'hizmetler')} 
            className={`transition-colors hover:text-gold ${isScrolled ? 'text-slate-600' : 'text-white'}`}
          >
            Hizmetler
          </a>
          <button 
            onClick={onVekaletClick}
            className={`transition-colors font-bold uppercase tracking-[0.2em] hover:text-gold ${isScrolled ? 'text-slate-600' : 'text-white'}`}
          >
            Vekalet Bilgileri
          </button>
          <a 
            href="#iletisim" 
            onClick={(e) => scrollToSection(e, 'iletisim')} 
            className={`px-8 py-3 rounded-sm transition-all duration-500 border border-transparent shadow-xl font-bold uppercase tracking-[0.2em] ${
              isScrolled 
                ? 'bg-slate-950 text-gold hover:bg-gold hover:text-slate-950' 
                : 'bg-gold-gradient text-slate-900 hover:bg-white'
            }`}
          >
            Randevu Al
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
