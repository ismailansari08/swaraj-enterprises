import { useEffect, useState, useMemo } from 'react';
import { Search, Filter, Check, ArrowRight, Clock } from 'lucide-react';
import { ALL_SERVICES, getAllCategories } from '../utils/data';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const categoryColors = {
  'GST & Tax':             { text: '#ff8d9d', bg: 'rgba(255,94,108,0.12)',  border: 'rgba(255,94,108,0.25)'  },
  'Business Registrations':{ text: '#fbbf24', bg: 'rgba(254,179,0,0.12)',  border: 'rgba(254,179,0,0.25)'  },
  'Property & Legal':      { text: '#ffb3c0', bg: 'rgba(255,170,171,0.12)',  border: 'rgba(255,170,171,0.25)'  },
  'Government Documents':  { text: '#fff5d7', bg: 'rgba(255,245,215,0.12)', border: 'rgba(255,245,215,0.25)' },
  'Licenses & Permits':    { text: '#ff7b8a', bg: 'rgba(255,123,138,0.12)', border: 'rgba(255,123,138,0.25)' },
  'Logistics & Online':    { text: '#ff8d9d', bg: 'rgba(255,94,108,0.12)',  border: 'rgba(255,94,108,0.25)'  },
};
const defaultColor = categoryColors['GST & Tax'];

const ServiceIcon = ({ name, color }) => {
  const IconComponent = Icons[name] || Icons.CheckCircle;
  return <IconComponent size={22} style={{ color }} />;
};

const ServiceCard = ({ service }) => {
  const c = categoryColors[service.category] || defaultColor;
  return (
    <div
      className="group relative flex flex-col gap-5 rounded-[1.75rem] border bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.07] overflow-hidden"
      style={{ borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
    >
      {/* Hover glow border */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.75rem]"
        style={{ boxShadow: `inset 0 0 0 1px ${c.border}, 0 0 60px ${c.bg}` }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex h-13 w-13 items-center justify-center rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: c.bg, border: `1px solid ${c.border}` }}
        >
          <ServiceIcon name={service.icon} color={c.text} />
        </div>
        <div className="text-right">
          <p className="font-bold text-base" style={{ color: c.text }}>{service.price}</p>
          <div className="flex items-center gap-1 mt-1 justify-end">
            <Clock size={11} className="text-slate-500" />
            <span className="text-[11px] text-slate-500">{service.processingTime}</span>
          </div>
        </div>
      </div>

      {/* Title + desc */}
      <div className="flex-1">
        <h3 className="text-xl font-heading font-bold text-slate-950 mb-2 leading-tight group-hover:text-gradient transition-all duration-300">
          {service.name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
      </div>

      {/* Features */}
      <div className="border-t border-white/8 pt-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Key Features</p>
        <ul className="grid grid-cols-2 gap-y-1.5 gap-x-2">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
              <Check size={11} style={{ color: c.text }} className="shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Category badge */}
      <span
        className="self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
        style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
      >
        {service.category}
      </span>

      {/* CTAs */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/8">
        <Link
          to="/documents"
          state={{ selectedServiceId: service.id }}
          className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-all"
        >
          View Docs
        </Link>
        <Link
          to="/appointment"
          state={{ selectedServiceId: service.id }}
          className="flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold text-white transition-all hover:opacity-90 hover:shadow-[0_0_20px_rgba(255,94,108,0.3)]"
          style={{ background: `linear-gradient(135deg, ${c.text}, rgba(255,94,108,0.7))` }}
        >
          Book Now <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...getAllCategories()];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = useMemo(() =>
    ALL_SERVICES.filter(s => {
      const q = searchTerm.toLowerCase();
      return (
        (s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) &&
        (selectedCategory === 'All' || s.category === selectedCategory)
      );
    }),
    [searchTerm, selectedCategory]
  );

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brandPrimary/7 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brandAccent/7 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label mb-5 inline-flex">All 29+ Services</span>
          <h1 className="mt-5 text-5xl md:text-6xl font-heading font-extrabold text-slate-950">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Comprehensive legal, registration, and compliance solutions — one trusted team for everything.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-5">
          {/* Search */}
          <div className="relative group">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within:text-brandPrimary transition-colors" />
            <input
              id="service-search"
              type="text"
              placeholder="Search services — 'GST Registration', 'PAN Card', 'Marriage Registration'..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-11 pr-4 text-white placeholder-slate-500 backdrop-blur-md shadow-lg transition-all focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors text-xs font-medium"
              >
                Clear ×
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => {
              const isActive = selectedCategory === cat;
              const c = categoryColors[cat] || defaultColor;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 border ${
                    isActive ? 'text-white' : 'text-slate-400 bg-white/[0.04] border-white/8 hover:bg-white/[0.08] hover:text-white'
                  }`}
                  style={isActive ? { background: c.bg, borderColor: c.border, color: c.text } : {}}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Results count */}
          <p className="text-center text-sm text-slate-500">
            Showing <span className="text-white font-semibold">{filtered.length}</span> of{' '}
            <span className="text-white font-semibold">{ALL_SERVICES.length}</span> services
          </p>
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 flex flex-col items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
              <Filter size={36} className="text-slate-500" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">No services found</h3>
            <p className="text-slate-400">Try adjusting your search or filter.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="btn-ghost px-6 py-2.5 text-sm mt-2"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((service, idx) => (
              <ServiceCard key={service.id} service={service} idx={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
