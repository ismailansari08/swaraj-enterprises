import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, ChevronRight, Globe, 
  MessageSquare, Share2, Shield, Heart, ArrowUpRight
} from 'lucide-react';
import { CONTACT_INFO, ALL_SERVICES } from '../../utils/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/' },
      { label: 'Our Mission', href: '/' },
      { label: 'Core Values', href: '/' },
      { label: 'Partner with Us', href: '/contact' },
    ],
    services: ALL_SERVICES.slice(0, 4).map(s => ({ label: s.name, href: `/services` })),
    support: [
      { label: 'Help Center', href: '/faq' },
      { label: 'Documents Guide', href: '/documents' },
      { label: 'Pricing Transparency', href: '/fees' },
      { label: 'Contact Support', href: '/contact' },
    ]
  };

  return (
    <footer className="bg-white pt-24 md:pt-32 relative overflow-hidden border-t border-border-color">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary-bg/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-4 mb-10 group">
              <div className="w-12 h-12 bg-primary-accent text-white flex items-center justify-center rounded-2xl group-hover:rotate-[360deg] transition-all duration-1000 shadow-lg shadow-primary-accent/20">
                <Shield size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl leading-none tracking-tighter text-primary-text">SWARAJ</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary-accent font-extrabold">ENTERPRISES</span>
              </div>
            </Link>
            <p className="text-secondary-text text-base leading-relaxed mb-10 max-w-sm">
              Premium government and legal consultancy since 2015. We bridge the gap 
              between complex regulations and seamless business execution.
            </p>
            <div className="flex gap-4">
               {[Globe, MessageSquare, Share2].map((Icon, i) => (
                 <button key={i} className="w-12 h-12 rounded-xl bg-secondary-bg flex items-center justify-center text-muted-text hover:bg-primary-accent hover:text-white transition-all shadow-sm">
                    <Icon size={18} />
                 </button>
               ))}
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
             <div>
                <h4 className="text-[10px] font-extrabold text-primary-text uppercase tracking-[0.4em] mb-10">COMPANY</h4>
                <ul className="space-y-5">
                   {footerLinks.company.map(link => (
                     <li key={link.label}>
                       <Link to={link.href} className="text-sm font-bold text-muted-text hover:text-primary-accent transition-all flex items-center gap-2 group">
                          <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-accent" />
                          {link.label}
                       </Link>
                     </li>
                   ))}
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] font-extrabold text-primary-text uppercase tracking-[0.4em] mb-10">SOLUTIONS</h4>
                <ul className="space-y-5">
                   {footerLinks.services.map(link => (
                     <li key={link.label}>
                       <Link to={link.href} className="text-sm font-bold text-muted-text hover:text-primary-accent transition-all flex items-center gap-2 group">
                          <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-accent" />
                          {link.label}
                       </Link>
                     </li>
                   ))}
                </ul>
             </div>
             <div className="hidden md:block">
                <h4 className="text-[10px] font-extrabold text-primary-text uppercase tracking-[0.4em] mb-10">RESOURCES</h4>
                <ul className="space-y-5">
                   {footerLinks.support.map(link => (
                     <li key={link.label}>
                       <Link to={link.href} className="text-sm font-bold text-muted-text hover:text-primary-accent transition-all flex items-center gap-2 group">
                          <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-accent" />
                          {link.label}
                       </Link>
                     </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Contact Focus */}
          <div className="lg:col-span-3">
             <div className="bg-primary-text rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                   <Phone size={80} />
                </div>
                <div className="relative z-10">
                   <h4 className="text-xl font-heading font-extrabold mb-6">Need expert advice?</h4>
                   <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-10">Available Mon-Sat</p>
                   <a 
                     href={`tel:+91${CONTACT_INFO.primaryPhone}`} 
                     className="w-full py-5 bg-primary-accent text-white rounded-2xl font-extrabold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-hover-red transition-all shadow-xl shadow-primary-accent/20"
                   >
                     CALL PARTNER <ArrowUpRight size={16} />
                   </a>
                </div>
             </div>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16 border-t border-border-color">
           <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-secondary-bg flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-white transition-all shadow-sm">
                 <Mail size={20} />
              </div>
              <div>
                 <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest mb-1">Send an Email</p>
                 <p className="text-sm font-bold text-primary-text">{CONTACT_INFO.email}</p>
              </div>
           </div>
           <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-secondary-bg flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-white transition-all shadow-sm">
                 <MapPin size={20} />
              </div>
              <div>
                 <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest mb-1">Our Location</p>
                 <p className="text-sm font-bold text-primary-text">Bhiwandi, Maharashtra</p>
              </div>
           </div>
           <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-secondary-bg flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-white transition-all shadow-sm">
                 <MessageSquare size={20} />
              </div>
              <div>
                 <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest mb-1">WhatsApp Support</p>
                 <p className="text-sm font-bold text-primary-text">Live Chat Active</p>
              </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-12 border-t border-border-color flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 text-muted-text">
            <span className="text-[10px] font-extrabold uppercase tracking-widest">
              © {currentYear} Swaraj Enterprises & Legal Solutions. All Rights Reserved.
            </span>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 text-muted-text group cursor-pointer">
              <span className="text-[10px] font-extrabold uppercase tracking-widest group-hover:text-primary-accent transition-colors">Privacy Policy</span>
            </div>
            <div className="flex items-center gap-3 text-muted-text group cursor-pointer">
              <span className="text-[10px] font-extrabold uppercase tracking-widest group-hover:text-primary-accent transition-colors">Terms of Service</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[10px] font-extrabold text-muted-text uppercase tracking-widest">
              Made with <Heart size={10} className="text-primary-accent animate-pulse" /> for Legal Excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
