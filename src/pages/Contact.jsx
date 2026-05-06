import { useEffect, useState } from 'react';
import { generateWhatsAppLink } from '../utils/helpers';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../utils/data';

const inputClass = 'w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white placeholder-slate-500 backdrop-blur-sm transition-all focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary focus:bg-white/[0.08]';

const contactDetails = [
  { icon: MapPin,  color: '#ff5e6c', label: 'Our Office',       value: CONTACT_INFO.address,                                     href: null },
  { icon: Phone,   color: '#ffaaab', label: 'Call / WhatsApp',  value: `+91 ${CONTACT_INFO.primaryPhone}  •  +91 ${CONTACT_INFO.secondaryPhone}`, href: `tel:+91${CONTACT_INFO.primaryPhone}` },
  { icon: Mail,    color: '#feb300', label: 'Email',            value: CONTACT_INFO.email,                                       href: `mailto:${CONTACT_INFO.email}` },
  { icon: Clock,   color: '#fff5d7', label: 'Working Hours',    value: CONTACT_INFO.workingHours,                                href: null },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const msg = `🔔 *New Website Inquiry*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Service:* ${form.service || 'N/A'}\n*Message:* ${form.message}`;
    window.open(generateWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/3 h-80 w-80 rounded-full bg-brandPrimary/7 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-5 inline-flex">Contact Us</span>
          <h1 className="mt-5 text-5xl md:text-6xl font-heading font-extrabold text-slate-950">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">Fast replies via WhatsApp — we're here Mon–Sat, 9 AM–7 PM.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Info cards + map */}
          <div className="flex flex-col gap-4">
            {contactDetails.map((d, i) => {
              const Icon = d.icon;
              const card = (
                <div className="group flex items-start gap-5 rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]" style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.2)' }}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110" style={{ background: `${d.color}18`, border: `1px solid ${d.color}35` }}>
                    <Icon size={20} style={{ color: d.color }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{d.label}</p>
                    <p className="text-slate-200 text-sm leading-relaxed">{d.value}</p>
                  </div>
                </div>
              );
              return d.href ? <a key={i} href={d.href}>{card}</a> : <div key={i}>{card}</div>;
            })}
            <div className="rounded-[1.5rem] border border-white/8 overflow-hidden" style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.25)' }}>
              <div className="flex items-center gap-2 px-6 py-4 bg-white/[0.04] border-b border-white/8">
                <MapPin size={14} className="text-brandPrimary" />
                <span className="text-sm font-semibold text-white">Google Maps</span>
              </div>
              <iframe title="Swaraj Enterprises Location" src={CONTACT_INFO.googleMapsEmbed} className="w-full border-0" style={{ height: '240px' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* Form */}
          <div className="relative rounded-[2rem] border border-white/8 bg-white/[0.04] p-8 md:p-10 backdrop-blur-md" style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}>
            <div className="absolute inset-x-0 top-0 h-32 rounded-t-[2rem] bg-gradient-to-b from-brandPrimary/8 to-transparent pointer-events-none" />
            <h2 className="text-2xl font-heading font-bold text-slate-950 mb-1">Send us a Message</h2>
            <p className="text-slate-600 text-sm mb-7">Opens WhatsApp with your details pre-filled.</p>

            {sent ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <CheckCircle size={56} className="text-green-400" />
                <p className="text-xl font-heading font-bold text-slate-950">Message sent!</p>
                <p className="text-slate-600">WhatsApp is open — we'll reply shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input id="c-name" required type="text" name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Ramesh Patil" />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                    <input id="c-phone" required type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-service" className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                  <input id="c-service" type="text" name="service" value={form.service} onChange={handleChange} className={inputClass} placeholder="e.g. GST Registration, Property Deed..." />
                </div>
                <div>
                  <label htmlFor="c-message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                  <textarea id="c-message" required name="message" value={form.message} onChange={handleChange} rows={5} className={inputClass} placeholder="Tell us about your requirement..." />
                </div>
                <button type="submit" className="btn-premium w-full py-4 inline-flex items-center justify-center gap-2 text-base">
                  <MessageCircle size={18} /> Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
