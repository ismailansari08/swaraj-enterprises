import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../../utils/data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = NAV_LINKS.filter(l => l.label !== 'Book');

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 border-b border-slate-200/70 shadow-[0_8px_48px_rgba(15,23,42,0.12)]'
          : 'py-5'
      }`}
      style={{
        background: isScrolled
          ? 'rgba(2,6,23,0.95)'  /* darkBg glass */
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
      }}

    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Swaraj Enterprises – Home"
        >
          {/* Brand mark */}
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brandPrimary to-brandAccent shadow-[0_0_20px_rgba(255,94,108,0.45)] transition-transform group-hover:scale-110">
            <span className="text-base font-heading font-black text-white leading-none">S</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-heading font-extrabold text-base leading-tight text-slate-100 group-hover:text-gradient transition-colors">
              Swaraj Enterprises
            </p>

            <p className="text-[10px] uppercase tracking-widest text-brandAccent/70">& Legal Solutions</p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-250 ${
                location.pathname === link.href
                  ? 'text-brandPrimary bg-brandPrimary/10'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-3 rounded-full bg-brandPrimary" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA + call */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:+91${CONTACT_INFO.primaryPhone}`}
            className="flex items-center gap-1.5 text-sm text-slate-700 hover:text-brandPrimary transition-colors"
            aria-label={`Call us at ${CONTACT_INFO.primaryPhone}`}
          >
            <Phone size={14} />
            <span className="font-medium">{CONTACT_INFO.primaryPhone}</span>
          </a>
          <Link to="/appointment" className="btn-premium text-sm px-6 py-2.5 inline-flex items-center gap-2">
            Book Appointment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/70 bg-white text-slate-950 backdrop-blur-sm transition-all hover:bg-slate-100"
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-400 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      style={{ background: 'rgba(2,6,23,0.96)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}

      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                location.pathname === link.href
                  ? 'bg-brandPrimary/15 text-brandPrimary border border-brandPrimary/20'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 border border-transparent'
              }`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}

          <hr className="hr-glow my-2" />

          <a
            href={`tel:+91${CONTACT_INFO.primaryPhone}`}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:text-brandPrimary transition-colors"
          >
            <Phone size={16} />
            <span>+91 {CONTACT_INFO.primaryPhone}</span>
          </a>

          <Link to="/appointment" className="btn-premium mt-2 text-center text-sm py-3">
            Book Free Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
