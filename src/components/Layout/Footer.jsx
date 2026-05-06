import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/data';

const quickLinks = [
  { label: 'All Services',        href: '/services' },
  { label: 'Required Documents',  href: '/documents' },
  { label: 'Fee Structure',       href: '/fees' },
  { label: 'FAQs',                href: '/faq' },
  { label: 'Articles',            href: '/blog' },
  { label: 'Book Appointment',    href: '/appointment' },
];

const legalLinks = [
  { label: 'Privacy Policy',  href: '#' },
  { label: 'Terms of Service',href: '#' },
  { label: 'Refund Policy',   href: '#' },
];

const socials = [
  {
    label: 'WhatsApp',
    href: `https://wa.me/91${CONTACT_INFO.secondaryPhone}`,
    color: '#25d366',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 mt-24">
      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[800px] rounded-full bg-brandPrimary/5 blur-3xl pointer-events-none" />

      {/* CTA Banner */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 -mt-1 pt-16">
        <div
          className="rounded-[2rem] border border-slate-200/70 p-10 mb-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,94,108,0.16), rgba(255,170,171,0.12), rgba(254,179,0,0.10))',
            backdropFilter: 'blur(24px)',
            boxShadow: '0 40px 120px rgba(15,23,42,0.08)',
          }}
        >
          {/* Decorative ring */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-brandPrimary/15 opacity-60" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-brandAccent/15 opacity-60" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-brandAccent mb-3">Free Consultation</p>
              <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-950 leading-tight">
                Need help choosing the right service?
              </h3>
              <p className="mt-3 text-slate-600">
                Talk to our expert team — we'll walk you through the right solution for your situation, completely free.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link to="/contact" className="btn-premium inline-flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/91${CONTACT_INFO.secondaryPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2"
              >
                <MessageCircle size={16} className="text-green-400" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brandPrimary to-brandAccent shadow-[0_0_20px_rgba(255,94,108,0.4)]">
                <span className="text-lg font-heading font-black text-white">S</span>
              </div>
              <div>
                <p className="font-heading font-extrabold text-base text-slate-950">Swaraj Enterprises</p>
                <p className="text-[10px] uppercase tracking-widest text-brandAccent/70">& Legal Solutions</p>
              </div>
            </Link>

            <p className="text-slate-600 mb-6 max-w-sm leading-relaxed text-sm">
              Your trusted partner for all legal and business compliance needs across Maharashtra. Fast, reliable, and transparent since 2015.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-700">
                <MapPin size={15} className="text-brandAccent mt-0.5 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Phone size={15} className="text-brandPrimary shrink-0" />
                <a href={`tel:+91${CONTACT_INFO.primaryPhone}`} className="hover:text-brandPrimary transition-colors">
                  +91 {CONTACT_INFO.primaryPhone} / {CONTACT_INFO.secondaryPhone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Mail size={15} className="text-brandSecondary shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brandSecondary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Clock size={15} className="text-brandAccent shrink-0" />
                <span>{CONTACT_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-widest text-slate-950 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-brandPrimary transition-colors"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-widest text-slate-950 mb-5">Legal</h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-brandPrimary transition-colors"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-heading font-bold uppercase tracking-widest text-slate-950 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect on ${s.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:scale-110"
                  style={{ color: s.color }}
                >
                  {s.icon}
                </a>
              ))}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                aria-label="Email us"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brandSecondary transition-all hover:scale-110"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:+91${CONTACT_INFO.primaryPhone}`}
                aria-label="Call us"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brandPrimary transition-all hover:scale-110"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {year} {CONTACT_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-500">
            Website made by Ismail Ansari • Built with ❤️ for Bhiwandi businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
