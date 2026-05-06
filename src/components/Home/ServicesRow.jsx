import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ArrowUpRight } from 'lucide-react';
import { ALL_SERVICES } from '../../utils/data';

const categoryColors = {
  'GST & Tax':            { bg: 'rgba(255,94,108,0.12)',  border: 'rgba(255,94,108,0.25)',  text: '#ff8d9d' },
  'Business Registrations':{ bg: 'rgba(254,179,0,0.12)', border: 'rgba(254,179,0,0.25)',  text: '#fbbf24' },
  'Property & Legal':     { bg: 'rgba(255,170,171,0.12)',  border: 'rgba(255,170,171,0.25)',  text: '#ffb3c0' },
  'Government Documents': { bg: 'rgba(255,245,215,0.12)', border: 'rgba(255,245,215,0.25)', text: '#fff5d7' },
  'Licenses & Permits':   { bg: 'rgba(255,123,138,0.12)', border: 'rgba(255,123,138,0.25)', text: '#ff7b8a' },
  'Logistics & Online':   { bg: 'rgba(255,94,108,0.12)',  border: 'rgba(255,94,108,0.25)',  text: '#ff8d9d' },
};

const ServiceCard = ({ service, idx }) => {
  const colors = categoryColors[service.category] || categoryColors['GST & Tax'];

  return (
    <div
      className="group relative flex flex-col gap-5 rounded-[1.75rem] border bg-white/[0.04] p-7 backdrop-blur-sm
                 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.07] overflow-hidden"
      style={{
        borderColor: 'rgba(255,255,255,0.08)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        animationDelay: `${idx * 80}ms`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.75rem]"
        style={{ boxShadow: `inset 0 0 0 1px ${colors.border}, 0 0 60px ${colors.bg}` }}
      />
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex h-13 w-13 items-center justify-center rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
        >
          <Zap size={22} style={{ color: colors.text }} />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-brandPrimary/40 shrink-0">
          <ArrowUpRight size={16} className="text-brandPrimary" />
        </div>
      </div>
      <div className="text-sm font-bold tracking-wide" style={{ color: colors.text }}>
        {service.price}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-heading font-bold text-slate-100 mb-2 leading-tight group-hover:text-gradient transition-all duration-300">
          {service.name}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{service.description}</p>
      </div>
      <ul className="flex flex-col gap-1.5">
        {service.features.slice(0, 3).map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: colors.text }} />
            {f}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between pt-4 border-t border-white/8">
        <span
          className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
          style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
        >
          {service.category}
        </span>
        <Link
          to="/services"
          className="text-xs font-semibold text-slate-400 hover:text-brandPrimary transition-colors flex items-center gap-1 group/link"
        >
          Learn more
          <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const ServicesRow = () => {
  const popular = ALL_SERVICES.slice(0, 6);

  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brandPrimary/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brandAccent/8 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="section-label mb-5 inline-flex">Popular Services</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-100 leading-tight mt-4">
              Everything your business needs, <span className="text-gradient">under one roof</span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg leading-relaxed">
              Fast approvals, transparent pricing, and expert guidance — from GST to property deeds.
            </p>
          </div>
          <Link
            to="/services"
            className="btn-ghost inline-flex items-center gap-2 shrink-0 text-sm"
          >
            View all 29+ services
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {popular.map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx} />
          ))}
        </div>
        <div className="mt-12 rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-slate-100 font-heading font-bold text-xl">Not sure which service you need?</p>
            <p className="text-slate-400 mt-1">Talk to our expert — free 15-minute consultation, no commitment.</p>
          </div>
          <Link to="/contact" className="btn-premium shrink-0 inline-flex items-center gap-2 text-sm">
            Get Free Advice <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesRow;

