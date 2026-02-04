
import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", lightMode = true }) => {
  // Metalik altın tonu: #DAA520 (Goldenrod)
  const metallicGold = "#DAA520";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Logo Icon Box */}
      <div 
        className={`w-11 h-11 flex items-center justify-center rounded-sm border shadow-lg transition-all duration-500 ${
          lightMode 
            ? 'bg-white/5 border-white/10' 
            : 'bg-slate-900 border-slate-800'
        }`}
        style={{ borderColor: lightMode ? `${metallicGold}50` : `${metallicGold}30` }}
      >
        <span 
          className="font-serif text-2xl font-bold"
          style={{ color: metallicGold }}
        >
          M
        </span>
      </div>

      {/* Decorative Vertical Line */}
      <div 
        className="w-px h-8 opacity-60"
        style={{ backgroundColor: metallicGold }}
      ></div>

      {/* Text Content */}
      <div className="flex flex-col leading-none">
        <span 
          className={`text-2xl font-serif font-bold tracking-[0.15em] transition-colors duration-500 ${
            lightMode ? 'text-white' : 'text-slate-950'
          }`}
        >
          MESA
        </span>
        <span 
          className="text-[7px] tracking-[0.4em] font-bold uppercase mt-1"
          style={{ color: metallicGold }}
        >
          Hukuk & Danışmanlık
        </span>
      </div>
    </div>
  );
};

export default Logo;
