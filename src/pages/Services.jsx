import { useState, useMemo } from 'react';
import { ALL_SERVICES } from '../utils/data';
import { Search, ArrowRight, ChevronRight, CheckCircle2, Shield, Clock, Zap } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import SchemaMarkup from '../components/Common/SchemaMarkup';
import useScrollReveal from '../hooks/useScrollReveal';
import CategoryTabs from '../components/Common/CategoryTabs';


const ServiceCard = ({ service, idx }) => {
  return (
    <div 
      className="premium-card group reveal-up relative overflow-hidden"
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-accent/5 rounded-full blur-3xl group-hover:bg-primary-accent/10 transition-all duration-700" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-white transition-all duration-500 shadow-sm transform group-hover:-translate-y-1">
            <Shield size={28} />
          </div>
          <span className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest bg-secondary-bg px-4 py-2 rounded-full border border-border-color/50">
            {service.category}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary-text mb-4 leading-tight group-hover:text-primary-accent transition-colors">
          {service.name}
        </h3>
        
        <p className="text-secondary-text text-sm mb-8 line-clamp-2 leading-relaxed">
          Professional assistance for {service.name} with 100% legal compliance and speed.
        </p>

        <ul className="space-y-4 mb-10">
          {service.features?.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-primary-text">
              <CheckCircle2 size={14} className="text-primary-accent" />
              {f}
            </li>
          ))}
        </ul>

        <div className="pt-8 border-t border-border-color flex items-center justify-between">
           <div className="flex flex-col">
              <span className="text-[9px] font-extrabold text-muted-text uppercase tracking-widest mb-1">Processing Time</span>
              <span className="text-xs font-bold text-primary-text flex items-center gap-1">
                 <Clock size={12} className="text-primary-accent" /> {service.processingTime}
              </span>
           </div>
           <button className="w-12 h-12 rounded-xl bg-secondary-bg flex items-center justify-center text-primary-text group-hover:bg-primary-accent group-hover:text-white transition-all transform group-hover:translate-x-2">
              <ArrowRight size={20} />
           </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  useScrollReveal();
  useSEO({
    title: 'Expert Legal & Government Services Bhiwandi | Swaraj Enterprises',
    description: 'Explore our 29+ professional services including PAN Card, Passport, GST, Food Licence, and Company Registration. Premium legal consultancy in Bhiwandi.',
    keywords: 'Legal Services Bhiwandi, PAN Card Office, GST Consultant Thane, Government Registration Services',
  });

  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...new Set(ALL_SERVICES.map(s => s.category))];

  const filtered = useMemo(() => {
    return ALL_SERVICES.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                           s.category.toLowerCase().includes(search.toLowerCase());
      const matchesTab = activeTab === 'All' || s.category === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [search, activeTab]);

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      <SchemaMarkup type="Service" data={{ "serviceType": "Legal & Government Consultancy" }} />
      
      {/* Header Section */}
      <section className="bg-secondary-bg/50 border-b border-border-color relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-[0.03]" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-8 reveal-up">
            <div className="w-10 h-[2px] bg-primary-accent" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">SERVICE DIRECTORY</span>
            <div className="w-10 h-[2px] bg-primary-accent" />
          </div>
          <h1 className="mb-10 reveal-up" style={{ transitionDelay: '100ms' }}>
            Precision <span className="text-primary-accent">Solutions.</span>
          </h1>
          <p className="text-secondary-text text-base md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed reveal-up" style={{ transitionDelay: '200ms' }}>
            Browse our comprehensive suite of 29+ government and legal services 
            designed for modern enterprises and individual needs.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative group reveal-up" style={{ transitionDelay: '300ms' }}>
            <div className="absolute inset-0 bg-primary-accent/10 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="relative flex items-center bg-white border-2 border-border-color group-focus-within:border-primary-accent rounded-3xl p-2 pl-8 transition-all shadow-xl">
              <Search className="text-muted-text group-focus-within:text-primary-accent transition-colors shrink-0" size={24} />
              <input 
                type="text" 
                placeholder="Search for PAN, GST, Passport, etc..." 
                className="w-full bg-transparent border-none focus:ring-0 text-lg font-medium text-primary-text placeholder:text-muted-text p-6"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="hidden md:flex items-center gap-3 px-8 py-5 bg-primary-accent text-white rounded-2xl text-[10px] font-extrabold uppercase tracking-widest hover:bg-hover-red transition-all">
                FIND SERVICE <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <CategoryTabs
        categories={categories}
        activeTab={activeTab}
        onChange={setActiveTab}
      />


      {/* Results Grid */}
      <section className="section-container">
        <div className="flex items-center justify-between mb-16">
           <h2 className="text-3xl font-heading font-extrabold tracking-tight">
             {activeTab} <span className="text-primary-accent">Services</span>
           </h2>
           <span className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest bg-secondary-bg px-5 py-3 rounded-xl border border-border-color">
             {filtered.length} RESULTS FOUND
           </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filtered.map((service, idx) => (
              <ServiceCard key={service.id} service={service} idx={idx} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center reveal-up">
             <div className="w-24 h-24 bg-secondary-bg rounded-full flex items-center justify-center mx-auto mb-10">
                <Search size={40} className="text-muted-text" />
             </div>
             <h3 className="text-2xl font-heading font-extrabold mb-4">No services found.</h3>
             <p className="text-secondary-text mb-12">Try searching with different keywords or browse categories.</p>
             <button 
               onClick={() => {setSearch(''); setActiveTab('All');}}
               className="btn-outline"
             >
               RESET FILTERS
             </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="section-container pt-0">
        <div className="bg-primary-accent rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden">
           {/* Decorative circles */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
           
           <div className="relative z-10">
              <h2 className="text-white mb-8">Can't find what you need?</h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                Our senior partners handle complex legal documentations 
                that may not be listed here. Contact us for a custom consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <button className="px-10 py-5 bg-white text-primary-accent rounded-2xl text-[11px] font-extrabold uppercase tracking-widest hover:bg-secondary-bg transition-all shadow-xl">
                   GET CUSTOM QUOTE
                 </button>
                 <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl text-[11px] font-extrabold uppercase tracking-widest hover:bg-white/10 transition-all">
                   CHAT ON WHATSAPP
                 </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
