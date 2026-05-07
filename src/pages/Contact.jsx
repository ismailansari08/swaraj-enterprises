
import { useState, useRef, useMemo } from 'react';
import { CONTACT_INFO } from '../utils/data';

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle2,
  Globe,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

import useScrollReveal from '../hooks/useScrollReveal';

const ContactInfoCard = ({ icon: Icon, title, value, sub, delay }) => (
  <div className="premium-card group reveal-up" style={{ transitionDelay: delay }}>
    <div className="flex items-start gap-8">
      <div className="w-16 h-16 bg-secondary-bg rounded-2xl flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-white transition-all duration-500 shadow-sm shrink-0 transform group-hover:-translate-y-2">
        <Icon size={28} />
      </div>
      <div>
        <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest mb-2">{title}</p>
        <h4 className="text-xl md:text-2xl font-heading font-extrabold text-primary-text mb-2 tracking-tight group-hover:text-primary-accent transition-colors">
          {value}
        </h4>
        <p className="text-sm font-bold text-secondary-text">{sub}</p>
      </div>
    </div>
  </div>
);

const normalizePhoneForWaMe = (phone) => String(phone || '').replace(/\D/g, '');

const Contact = () => {
  // Enable scroll reveal so .reveal-up/.reveal-left don't stay hidden
  useScrollReveal();

  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success
  const [formError, setFormError] = useState('');
  const [submittedAt, setSubmittedAt] = useState(null);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (formStatus !== 'idle') return;

    setFormStatus('submitting');

    // Demo behavior (no backend configured). Keeps UX realistic.
    setTimeout(() => {
      // If you later wire a real API call, replace this block with fetch/axios.
      setFormStatus('success');
      setSubmittedAt(Date.now());

      if (formRef.current) {
        formRef.current.reset();
      }

      setTimeout(() => {
        setFormStatus('idle');
        setSubmittedAt(null);
      }, 5000);
    }, 2000);
  };

  const safeEmbedSrc = useMemo(() => {
    const embed = CONTACT_INFO?.googleMapsEmbed;
    return typeof embed === 'string' ? embed : '';
  }, []);

  const safeAddressLine = CONTACT_INFO?.address?.split(',')?.[0] || 'Office Address';

  const waNumber = normalizePhoneForWaMe(CONTACT_INFO?.primaryPhone);
  const secondaryWaNumber = normalizePhoneForWaMe(CONTACT_INFO?.secondaryPhone);

  const mapHasEmbed = Boolean(safeEmbedSrc);
  const waHref = waNumber ? `https://wa.me/${waNumber}` : (secondaryWaNumber ? `https://wa.me/${secondaryWaNumber}` : '#');



  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      {/* Header */}
      <section className="bg-secondary-bg/50 border-b border-border-color py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-[0.03]" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-8 reveal-up">
            <div className="w-10 h-[2px] bg-primary-accent" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">GET IN TOUCH</span>
            <div className="w-10 h-[2px] bg-primary-accent" />
          </div>
          <h1 className="mb-10 reveal-up" style={{ transitionDelay: '100ms' }}>
            Connect with <span className="text-primary-accent">Experts.</span>
          </h1>
          <p className="text-secondary-text text-base md:text-xl max-w-2xl mx-auto leading-relaxed reveal-up" style={{ transitionDelay: '200ms' }}>
            Have a complex legal requirement? Our senior partners are ready to assist you with precision and integrity.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-24">
          <ContactInfoCard
            icon={Phone}
            title="OFFICE HOTLINE"
            value={`+91 ${CONTACT_INFO?.primaryPhone || ''}`}
            sub="Available 10:00 AM - 07:00 PM"
            delay="0ms"
          />

          <ContactInfoCard
            icon={Mail}
            title="OFFICIAL EMAIL"
            value={CONTACT_INFO?.email || ''}
            sub="Average Response Time: 2 Hours"
            delay="100ms"
          />

          <ContactInfoCard
            icon={MapPin}
            title="HEADQUARTERS"
            value="Bhiwandi, Thane"
            sub={safeAddressLine}
            delay="200ms"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 reveal-left">
            <div className="bg-white border-2 border-border-color rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 shadow-2xl relative group">
              <div className="absolute top-0 right-0 p-12 text-primary-accent/5 pointer-events-none group-focus-within:text-primary-accent/10 transition-all duration-500">
                <Send size={120} />
              </div>

              <h2 className="text-3xl font-heading font-extrabold tracking-tight mb-12">Submit an Inquiry</h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="contact-full-name" className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest ml-4">
                      Full Name
                    </label>
                    <input
                      id="contact-full-name"
                      name="fullName"
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-secondary-bg/50 border-2 border-border-color focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/30 rounded-2xl py-6 px-8 text-primary-text font-bold transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="contact-email" className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest ml-4">
                      Corporate Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      required
                      type="email"
                      placeholder="john@company.com"
                      className="w-full bg-secondary-bg/50 border-2 border-border-color focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/30 rounded-2xl py-6 px-8 text-primary-text font-bold transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="contact-phone" className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest ml-4">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      required
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full bg-secondary-bg/50 border-2 border-border-color focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/30 rounded-2xl py-6 px-8 text-primary-text font-bold transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="contact-service" className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest ml-4">
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      defaultValue="PAN Card Services"
                      className="w-full bg-secondary-bg/50 border-2 border-border-color focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/30 rounded-2xl py-6 px-8 text-primary-text font-bold transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="PAN Card Services">PAN Card Services</option>
                      <option value="GST Registration">GST Registration</option>
                      <option value="Passport Assistance">Passport Assistance</option>
                      <option value="Legal Documentation">Legal Documentation</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="contact-message" className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest ml-4">
                    Brief Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="4"
                    placeholder="How can we help you today?"
                    className="w-full bg-secondary-bg/50 border-2 border-border-color focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/30 rounded-2xl py-6 px-8 text-primary-text font-bold transition-all outline-none resize-none"
                  />
                </div>

                {formError && (
                  <div role="alert" className="px-6 py-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-sm font-bold">
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  aria-busy={formStatus === 'submitting'}
                  className={`btn-primary w-full py-8 text-[11px] tracking-[0.3em] font-extrabold flex items-center justify-center gap-4 ${
                    formStatus !== 'idle' ? 'opacity-70 pointer-events-none' : 'shimmer-effect'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      SEND MESSAGE <Send size={18} />
                    </>
                  )}
                  {formStatus === 'submitting' && <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />}
                  {formStatus === 'success' && (
                    <>
                      MESSAGE SENT <CheckCircle2 size={18} />
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="rounded-[20px] border border-primary-accent/20 bg-primary-accent/5 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                        <CheckCircle2 size={22} />
                      </div>
                      <div>
                        <p className="font-extrabold text-primary-text">Thanks! Your inquiry has been received.</p>
                        <p className="text-sm font-bold text-secondary-text mt-1">
                          Our team will respond during working hours: {CONTACT_INFO?.workingHours || 'Mon-Sat: 9:00 AM - 7:00 PM'}.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Social & Maps Sidebar */}
          <div className="lg:col-span-5 reveal-up" style={{ transitionDelay: '300ms' }}>
            <div className="space-y-10">
              {/* Map Card */}
              <div className="bg-secondary-bg rounded-[3rem] p-4 border border-border-color shadow-xl relative group overflow-hidden">
                <div className="absolute top-8 left-8 z-10">
                  <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl border border-border-color shadow-lg flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-extrabold text-primary-text uppercase tracking-widest">Office Live Now</span>
                  </div>
                </div>

                {mapHasEmbed ? (
                  <iframe
                    src={safeEmbedSrc}
                    className="w-full h-[400px] rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-1000 border border-border-color"
                    loading="lazy"

                  />
                ) : (
                  <div className="mt-16 p-10 text-center">
                    <p className="text-[12px] font-extrabold text-primary-text uppercase tracking-widest">
                      Map Unavailable
                    </p>
                    <p className="text-sm font-bold text-secondary-text mt-2">
                      Please use the address below to visit us.
                    </p>
                    <div className="mt-6 inline-flex items-center justify-center px-8 py-4 bg-white border border-border-color rounded-2xl">
                      <MapPin size={18} className="text-primary-accent mr-3" />
                      <span className="text-sm font-extrabold text-primary-text">{safeAddressLine}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* Trust Badges */}
              <div className="p-10 border-2 border-border-color rounded-[3rem] bg-white">
                <h4 className="text-[10px] font-extrabold text-primary-text uppercase tracking-[0.4em] mb-10 text-center">TRUST & COMPLIANCE</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-bg flex items-center justify-center text-primary-accent">
                      <ShieldCheck size={28} />
                    </div>
                    <span className="text-[9px] font-extrabold text-muted-text uppercase tracking-widest">ISO 9001 CERTIFIED</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-bg flex items-center justify-center text-primary-accent">
                      <Clock size={28} />
                    </div>
                    <span className="text-[9px] font-extrabold text-muted-text uppercase tracking-widest">99.9% RESPONSE RATE</span>
                  </div>
                </div>
              </div>

              {/* Support Button */}
              <a
                href={waNumber ? `https://wa.me/${waNumber}` : '#'}
                className="flex items-center justify-between p-10 bg-[#25D366] text-white rounded-[3rem] shadow-2xl hover:bg-[#128C7E] transition-all group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-white/70 uppercase tracking-widest mb-1">Direct Assistance</p>
                    <p className="font-heading font-extrabold text-2xl tracking-tight">WhatsApp Support</p>
                  </div>
                </div>
                <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Reach */}
      <section className="section-container bg-texture opacity-[0.05] border-t border-border-color">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <Globe className="text-primary-accent" size={40} />
            <div>
              <h4 className="text-xl font-heading font-extrabold tracking-tight">Global Connectivity</h4>
              <p className="text-muted-text text-sm font-bold uppercase tracking-widest">Serving Clients across India & UAE</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Bhiwandi', 'Thane', 'Mumbai', 'Kalyan', 'Pune'].map((city) => (
              <span
                key={city}
                className="px-6 py-3 bg-white border border-border-color rounded-xl text-[10px] font-extrabold uppercase tracking-widest text-primary-text"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

