import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { generateWhatsAppLink } from '../utils/helpers';
import { Calendar, Clock, User, Phone, Briefcase, ArrowRight, MessageCircle } from 'lucide-react';
import { ALL_SERVICES } from '../utils/data';

const inputClass = 'w-full rounded-xl border border-border-color bg-secondary-bg px-5 py-4 text-primary-text text-sm md:text-base placeholder:text-muted-text/50 transition-all focus:outline-none focus:border-primary-accent focus:bg-white shadow-sm';

const Appointment = () => {
  const location = useLocation();
  const passedServiceId = location.state?.selectedServiceId;
  const initialService = passedServiceId ? ALL_SERVICES.find(s => s.id === passedServiceId)?.name || '' : '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
    date: '',
    time: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Swaraj Enterprises, I'd like to schedule a consultation.\n\n👤 *Client:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n⚖️ *Service:* ${formData.service}\n📅 *Date:* ${formData.date}\n⏰ *Time:* ${formData.time}\n\nPlease let me know if this slot is available.`;
    window.open(generateWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      <div className="section-container pt-32 lg:pt-40">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-primary-accent" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">
              SCHEDULE A SESSION
            </span>
            <div className="w-10 h-[2px] bg-primary-accent" />
          </div>
          <h1 className="mb-8">
            Book <span className="text-primary-accent">Appointment.</span>
          </h1>
          <p className="text-secondary-text text-base md:text-lg max-w-2xl leading-relaxed mx-auto">
            Schedule a high-priority consultation with our legal experts. 
            Select your preferred time and we'll confirm via WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-border-color rounded-2xl md:rounded-premium p-8 md:p-16 shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary-text flex items-center gap-3">
                    <User size={14} className="text-primary-accent"/> Full Name *
                  </label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="RAMESH PATIL" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary-text flex items-center gap-3">
                    <Phone size={14} className="text-primary-accent"/> Phone Number *
                  </label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary-text flex items-center gap-3">
                  <Briefcase size={14} className="text-primary-accent"/> Service Required *
                </label>
                <select required name="service" value={formData.service} onChange={handleChange} className={`${inputClass} appearance-none`}>
                  <option value="" disabled>SELECT A SERVICE</option>
                  {ALL_SERVICES.map((service) => (
                    <option key={service.id} value={service.name} className="text-primary-text">
                      {service.name.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary-text flex items-center gap-3">
                    <Calendar size={14} className="text-primary-accent"/> Preferred Date *
                  </label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className={inputClass} />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary-text flex items-center gap-3">
                    <Clock size={14} className="text-primary-accent"/> Preferred Time *
                  </label>
                  <input required type="time" name="time" value={formData.time} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div className="pt-8">
                <button type="submit" className="btn-primary w-full py-6 flex items-center justify-center gap-4 text-[11px] tracking-[0.3em] shadow-xl">
                  REQUEST APPOINTMENT <ArrowRight size={20} />
                </button>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 border-t border-border-color/50 pt-8">
                   <MessageCircle size={16} className="text-primary-accent" />
                   <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-[0.2em] text-center">
                     Official Confirmation will be sent via WhatsApp
                   </p>
                </div>
              </div>
            </form>
          </div>

          {/* Security Note */}
          <div className="mt-12 flex items-center gap-6 p-8 bg-secondary-bg border border-border-color rounded-2xl">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-accent shrink-0 shadow-sm border border-border-color">
              <Briefcase size={22} />
            </div>
            <p className="text-sm md:text-base text-secondary-text leading-relaxed">
              All consultations are conducted under strict corporate confidentiality protocols. 
              Your data is protected and used only for internal scheduling purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
