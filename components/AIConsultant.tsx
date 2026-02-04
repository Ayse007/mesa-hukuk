
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getLegalAssistantResponse } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Mesa Hukuk dijital dünyasına hoş geldiniz. Ben yapay zeka asistanınız. Hukuki süreçleriniz hakkında genel bir bilgilendirme ister misiniz?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = await getLegalAssistantResponse([...messages, userMessage]);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <section id="ai-consultant" className="pt-20 pb-40 bg-[#020617] text-white relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] animate-pulse [animation-delay:2s]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <span className="text-gold font-bold text-[10px] tracking-[0.5em] uppercase block mb-6 drop-shadow-sm">İnovatif Yaklaşım</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
              Geleceği <span className="text-gold-gradient">Teknolojiyle</span>, <br/><span className="italic opacity-80">Adaleti Bilgiyle</span> Tasarlıyoruz.
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed font-light border-l border-gold pl-8">
              Mesa Hukuk, yapay zeka entegrasyonu ile müvekkillerine 7/24 ön bilgilendirme 
              sağlayan Türkiye'nin öncü hukuk bürolarından biridir.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 border border-white/5 bg-white/[0.03] backdrop-blur-md rounded-sm hover:border-gold/20 transition-all group">
                <div className="text-gold-gradient font-bold text-lg mb-3 group-hover:scale-105 transition-transform origin-left">01 // Hızlı Analiz</div>
                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-widest">Davalarınız hakkında ilk hukuki değerlendirmeyi anında alın.</p>
              </div>
              <div className="p-8 border border-white/5 bg-white/[0.03] backdrop-blur-md rounded-sm hover:border-gold/20 transition-all group">
                <div className="text-gold-gradient font-bold text-lg mb-3 group-hover:scale-105 transition-transform origin-left">02 // Güvenlik</div>
                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-widest">Tüm dijital etkileşimleriniz uçtan uca şifreleme ile korunur.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-gold/10 to-blue-500/20 rounded-sm blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-sm overflow-hidden flex flex-col h-[650px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] bg-[#030712]/90 backdrop-blur-2xl">
              <div className="p-6 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-gold rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)] animate-pulse"></div>
                  <span className="font-bold text-[10px] tracking-[0.4em] uppercase text-white/60">MESA AI SYSTEM V2.5</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-6 rounded-sm text-sm leading-relaxed shadow-xl ${
                      msg.role === 'user' 
                        ? 'bg-gold-gradient text-slate-950 font-bold' 
                        : 'bg-white/[0.05] text-slate-300 border border-white/10 font-light backdrop-blur-sm'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/[0.05] p-5 rounded-sm flex gap-3 border border-white/10">
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 bg-black/40 border-t border-white/10 backdrop-blur-md">
                <div className="relative flex gap-4">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Hukuki bir soru sorun..."
                    className="flex-1 bg-white/[0.05] border border-white/10 rounded-sm py-4 px-6 focus:border-gold/50 focus:ring-1 focus:ring-gold/20 outline-none text-sm transition-all placeholder:text-slate-600"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isTyping || !input.trim()}
                    className="p-4 bg-gold-gradient text-slate-900 rounded-sm hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all shadow-xl shadow-gold/10 flex items-center justify-center"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                <p className="text-[9px] text-center mt-6 text-slate-600 uppercase tracking-[0.3em] font-medium">Bu servis bilgilendirme amaçlıdır ve avukat tavsiyesi değildir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
