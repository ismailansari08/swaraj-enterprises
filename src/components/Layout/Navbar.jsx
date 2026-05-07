import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, MessageSquare, Globe, Shield } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/data';

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/documents", label: "Docs" },
  { href: "/fees", label: "Fees" },
  { href: "/blog", label: "Articles" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      {/* Dynamic Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[200] pointer-events-none">
        <div 
          className="h-full bg-primary-accent shadow-[0_0_15px_rgba(230,0,18,0.5)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header 
        className={`fixed top-0 left-0 w-full z-[150] transition-all duration-700 ${
          scrolled 
            ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-border-color/50 shadow-xl' 
            : 'py-6 md:py-10 bg-transparent'
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="group flex items-center gap-4 relative z-[160]">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-accent blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-primary-accent text-white flex items-center justify-center rounded-2xl group-hover:rotate-[360deg] transition-all duration-1000 shadow-lg">
                <Shield size={24} strokeWidth={2.5} className="md:w-6 md:h-6 w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-extrabold text-xl md:text-2xl leading-none tracking-tighter transition-colors ${scrolled ? 'text-primary-text' : 'text-primary-text'}`}>
                SWARAJ
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-primary-accent font-extrabold whitespace-nowrap">
                ENTERPRISES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 relative group overflow-hidden rounded-xl ${
                  location.pathname === link.href ? 'text-primary-accent bg-primary-accent/5' : 'text-primary-text hover:text-primary-accent'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary-accent transition-transform duration-500 transform ${location.pathname === link.href ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`} />
              </Link>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href={`tel:+91${CONTACT_INFO.primaryPhone}`} 
              className={`hidden sm:flex items-center gap-3 px-6 py-3 rounded-2xl border-2 border-border-color transition-all duration-500 group hover:border-primary-accent ${scrolled ? 'bg-white' : 'bg-white/50 backdrop-blur-md'}`}
            >
              <div className="w-8 h-8 rounded-xl bg-primary-accent/5 flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-white transition-all">
                <Phone size={14} />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-text">GET HELP</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-[160] ${
                isOpen ? 'bg-primary-accent text-white rotate-90' : 'bg-primary-accent/5 text-primary-text hover:bg-primary-accent/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className={`fixed inset-0 z-[155] lg:hidden transition-all duration-700 ease-out ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}>
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-primary-text/40 backdrop-blur-md transition-opacity duration-700"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Drawer Content */}
          <div className={`absolute top-0 right-0 w-[85%] sm:w-[70%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-700 ease-out flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
             <div className="flex-1 pt-32 px-10 overflow-y-auto custom-scrollbar">
                <div className="space-y-4 mb-16">
                  {NAV_LINKS.map((link, idx) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="group flex items-center justify-between py-5 border-b border-border-color/50"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <span className={`text-2xl font-heading font-extrabold tracking-tight transition-colors ${
                        location.pathname === link.href ? 'text-primary-accent' : 'text-primary-text group-hover:text-primary-accent'
                      }`}>
                        {link.label}
                      </span>
                      <ChevronRight size={20} className={`transition-all ${
                        location.pathname === link.href ? 'text-primary-accent translate-x-1' : 'text-muted-text group-hover:text-primary-accent group-hover:translate-x-1'
                      }`} />
                    </Link>
                  ))}
                </div>

                {/* Quick Contacts */}
                <div className="space-y-8">
                   <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-[0.4em]">CONNECT NOW</p>
                   <div className="grid grid-cols-2 gap-4">
                      <a href={`tel:+91${CONTACT_INFO.primaryPhone}`} className="p-6 bg-secondary-bg rounded-3xl flex flex-col items-center gap-4 group">
                         <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-white transition-all shadow-sm">
                            <Phone size={20} />
                         </div>
                         <span className="text-[9px] font-extrabold text-primary-text uppercase tracking-widest">CALL</span>
                      </a>
                      <a href={`https://wa.me/91${CONTACT_INFO.primaryPhone}`} className="p-6 bg-secondary-bg rounded-3xl flex flex-col items-center gap-4 group">
                         <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-white transition-all shadow-sm">
                            <MessageSquare size={20} />
                         </div>
                         <span className="text-[9px] font-extrabold text-primary-text uppercase tracking-widest">WHATSAPP</span>
                      </a>
                   </div>
                </div>
             </div>

             {/* Footer Area */}
             <div className="p-10 bg-secondary-bg border-t border-border-color flex items-center justify-between">
                <div className="flex gap-4">
                   {[Globe, Shield].map((Icon, i) => (
                     <div key={i} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-muted-text">
                        <Icon size={14} />
                     </div>
                   ))}
                </div>
                <span className="text-[9px] font-extrabold text-muted-text uppercase tracking-widest">SWARAJ ENTERPRISES © 2024</span>
             </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
