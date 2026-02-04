
import React, { useState, useEffect } from 'react';
import { TEAM, generateMockSlots } from '../constants';
import { AppointmentSlot, Lawyer } from '../types';

const BookingSystem: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedLawyer] = useState<Lawyer>(TEAM[0]);
  const [selectedSlot, setSelectedSlot] = useState<AppointmentSlot | null>(null);
  const [slots, setSlots] = useState<AppointmentSlot[]>([]);
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setSlots(generateMockSlots());
  }, []);

  const handleNextStep = () => setStep(prev => prev + 1);
  const handlePrevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call and confirmation email trigger
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.1)] text-center border-t-4 border-gold animate-in fade-in duration-700">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6 glow-gold">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">Randevunuz Onaylandı</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto text-sm md:text-base font-light">
          Sayın {formData.fullName}, {selectedSlot?.date} tarihinde saat {selectedSlot?.time} için {selectedLawyer.name} ile randevunuz oluşturulmuştur.
        </p>
        <button 
          onClick={() => { setIsSuccess(false); setStep(1); setSelectedSlot(null); setFormData({ fullName: '', email: '', phone: '', notes: '' }); }}
          className="px-10 py-4 bg-slate-900 text-gold font-bold rounded-sm hover:bg-gold hover:text-slate-900 transition-all uppercase text-[10px] tracking-[0.3em] shadow-xl"
        >
          Yeni Randevu
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 min-h-[500px] lg:min-h-[600px] flex flex-col">
      {/* Header Stepper */}
      <div className="bg-slate-950 p-6 flex justify-center md:justify-between items-center gap-4">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
              step === s 
                ? 'bg-gold-gradient text-slate-950 scale-110 shadow-[0_0_15px_rgba(250,204,21,0.5)]' 
                : step > s 
                  ? 'bg-gold/20 text-gold' 
                  : 'bg-slate-800 text-slate-500'
            }`}>
              {s}
            </div>
            {s < 2 && <div className={`hidden md:block w-8 lg:w-12 h-0.5 rounded-full transition-all duration-700 ${step > s ? 'bg-gold' : 'bg-slate-800'}`}></div>}
          </div>
        ))}
      </div>

      <div className="flex-1 p-6 md:p-12 overflow-y-auto">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 p-4 bg-slate-50 rounded-sm border border-slate-100">
              <img src={selectedLawyer.image} alt={selectedLawyer.name} className="w-16 h-16 rounded-full object-cover grayscale border-2 border-gold/20" />
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-serif font-bold text-slate-900">{selectedLawyer.name}</h4>
                <p className="text-[9px] text-gold font-bold uppercase tracking-widest">{selectedLawyer.title}</p>
              </div>
            </div>
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">Zaman Dilimi</h4>
            <p className="text-slate-500 text-sm mb-8 font-light">Lütfen takvim üzerinden size en uygun saati belirleyin.</p>
            <div className="max-h-[350px] overflow-y-auto pr-2 space-y-8 scrollbar-hide">
              {Array.from(new Set(slots.map(s => s.date))).map(date => (
                <div key={date}>
                  <p className="text-[10px] font-bold text-slate-400 mb-4 border-b border-slate-100 pb-2 uppercase tracking-[0.3em]">{date}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {slots.filter(s => s.date === date).map(slot => {
                      const isSelected = selectedSlot?.id === slot.id;
                      return (
                        <button
                          key={slot.id}
                          disabled={!slot.isAvailable}
                          onClick={() => { setSelectedSlot(slot); handleNextStep(); }}
                          className={`py-3 text-[11px] font-bold rounded-sm border transition-all duration-500 ${
                            !slot.isAvailable 
                              ? 'bg-slate-50 border-slate-50 text-slate-300 cursor-not-allowed' 
                              : isSelected
                                ? 'bg-gold-gradient border-gold text-slate-950 shadow-xl scale-105'
                                : 'hover:border-gold hover:text-gold border-slate-200 text-slate-600 bg-white'
                          }`}
                        >
                          {slot.time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">Onay ve İletişim</h4>
            <p className="text-slate-500 text-sm mb-8 font-light">Son bir adım kaldı. Bilgilerinizi kontrol edin.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-sm mb-8 grid grid-cols-2 gap-8 shadow-inner">
                <div className="border-r border-slate-200 pr-4">
                  <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-2">Avukat</p>
                  <p className="text-sm font-bold text-slate-900">{selectedLawyer.name}</p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-2">Randevu</p>
                  <p className="text-sm font-bold text-gold">{selectedSlot?.date} / {selectedSlot?.time}</p>
                </div>
              </div>

              <input 
                required
                type="text" 
                placeholder="Adınız Soyadınız"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:border-gold focus:bg-white text-sm transition-all placeholder:text-slate-400"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  required
                  type="email" 
                  placeholder="E-posta Adresiniz"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:border-gold focus:bg-white text-sm transition-all placeholder:text-slate-400"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  required
                  type="tel" 
                  placeholder="Telefon Numaranız"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:border-gold focus:bg-white text-sm transition-all placeholder:text-slate-400"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <textarea 
                placeholder="Hukuki uyuşmazlığınız hakkında kısa bir not bırakın..."
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:border-gold focus:bg-white text-sm transition-all h-28 placeholder:text-slate-400"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              ></textarea>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-slate-950 text-gold font-bold rounded-sm hover:bg-gold hover:text-slate-950 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)] disabled:opacity-50 text-[10px] tracking-[0.4em] uppercase"
              >
                {isSubmitting ? 'İŞLEM YAPILIYOR...' : 'RANDEVUYU TAMAMLA'}
              </button>
            </form>
            <button onClick={handlePrevStep} className="mt-8 text-slate-400 hover:text-slate-950 text-[10px] flex items-center gap-2 font-bold uppercase tracking-[0.3em] transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
              Geri Dön
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSystem;
