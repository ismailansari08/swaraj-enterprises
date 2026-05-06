import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GlassCard from '../components/Common/GlassCard';
import { generateWhatsAppLink } from '../utils/helpers';
import { Calendar, Clock, User, Phone, Briefcase } from 'lucide-react';
import { ALL_SERVICES } from '../utils/data';

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
    const message = `Hello, I want to book an appointment.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service Required:* ${formData.service}\n*Preferred Date:* ${formData.date}\n*Preferred Time:* ${formData.time}\n\nPlease confirm availability.`;
    window.open(generateWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center">
        <GlassCard className="w-full max-w-2xl p-8 md:p-12" hover={false}>
          <div className="text-center mb-10">
            <h1 className="text-4xl font-heading font-bold mb-4 text-white">Book an <span className="text-gradient">Appointment</span></h1>
            <p className="text-slate-400">Schedule a free consultation with our experts. Fill out the details below and we will confirm via WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2 flex items-center gap-2"><User size={16}/> Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brandPrimary/50 focus:ring-4 focus:ring-brandPrimary/20 transition-all backdrop-blur-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2 flex items-center gap-2"><Phone size={16}/> Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brandPrimary/50 focus:ring-4 focus:ring-brandPrimary/20 transition-all backdrop-blur-sm" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2 flex items-center gap-2"><Briefcase size={16}/> Service Required</label>
              <select required name="service" value={formData.service} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-brandPrimary/50 focus:ring-4 focus:ring-brandPrimary/20 transition-all backdrop-blur-sm">
                <option value="" disabled className="text-slate-400">Select a service</option>
                {ALL_SERVICES.map((service) => (
                  <option key={service.id} value={service.name} className="text-slate-100">
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2 flex items-center gap-2"><Calendar size={16}/> Preferred Date</label>
                <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brandPrimary/50 focus:ring-4 focus:ring-brandPrimary/20 transition-all backdrop-blur-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2 flex items-center gap-2"><Clock size={16}/> Preferred Time</label>
                <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brandPrimary/50 focus:ring-4 focus:ring-brandPrimary/20 transition-all backdrop-blur-sm" />
              </div>
            </div>

            <button type="submit" className="w-full btn-premium mt-8 text-sm font-bold py-4">
              Request Appointment
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default Appointment;

