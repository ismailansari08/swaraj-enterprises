import { useState, useMemo } from 'react';
import { ALL_SERVICES, CONTACT_INFO } from '../utils/data';
import { Check, Info, ArrowRight, MessageCircle, CreditCard, ShieldCheck, Zap, Globe } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import SchemaMarkup from '../components/Common/SchemaMarkup';
import useScrollReveal from '../hooks/useScrollReveal';
import CategoryTabs from '../components/Common/CategoryTabs';


const FeeCard = ({ service, idx }) => {
  return (
    <div 
      className="premium-card bg-white reveal-up group relative overflow-hidden flex flex-col h-full"
      style={{ transitionDelay: `${idx * 50}ms` }}
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-accent/5 rounded-full blur-3xl group-hover:bg-primary-accent/10 transition-all duration-700 -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
           <span className="text-[9px] font-extrabold text-primary-accent uppercase tracking-widest bg-primary-accent/10 px-4 py-2 rounded-lg">
             {service.category}
           </span>
           <div className="w-10 h-10 bg-secondary-bg rounded-xl flex items-center justify-center text-muted-text group-hover:bg-primary-accent group-hover:text-white transition-all shadow-sm">
             <CreditCard size={18} />
           </div>
        </div>

        <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary-text mb-2 tracking-tight group-hover:text-primary-accent transition-colors">
          {service.name}
        </h3>
        <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest mb-8">Service Reference: #{service.id.toUpperCase()}</p>
        
        <div className="mb-10 p-6 bg-secondary-bg/50 rounded-2xl border border-border-color/50 group-hover:border-primary-accent/30 transition-all">
           <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-heading font-extrabold text-primary-text">{service.price}</span>
              <span className="text-xs font-bold text-muted-text">/ Starting from</span>
           </div>
           <p className="text-[10px] font-bold text-muted-text uppercase tracking-widest leading-relaxed">
             *Final quote may vary based on specific document complexities.
           </p>
        </div>

        <ul className="space-y-4 mb-10 flex-grow">
          {['Government Fees Included', 'Professional Consultation', 'Document Verification', 'Express Processing'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-primary-text">
              <Check size={14} className="text-primary-accent" />
              {item}
            </li>
          ))}
        </ul>

        <button className="btn-primary w-full !rounded-2xl flex items-center justify-center gap-3 shimmer-effect">
          INQUIRE NOW <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

const Fees = () => {
  useScrollReveal();
  useSEO({
    title: 'Transparent Pricing & Fees | Swaraj Enterprises Bhiwandi',
    description: 'Check our professional service fees for PAN, GST, Passport, and Legal Documentation. 100% transparent pricing with no hidden costs.',
    keywords: 'Legal Service Fees Bhiwandi, PAN Card Price, GST Registration Cost, Passport Fees Thane',
  });

  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', ...new Set(ALL_SERVICES.map(s => s.category))];

  const filtered = useMemo(() => {
    return activeTab === 'All' ? ALL_SERVICES : ALL_SERVICES.filter(s => s.category === activeTab);
  }, [activeTab]);

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      <SchemaMarkup type="Service" data={{ "name": "Financial Advisory & Pricing" }} />

      {/* Header */}
      <section className="bg-secondary-bg/50 border-b border-border-color py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-[0.03]" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-8 reveal-up">
            <div className="w-10 h-[2px] bg-primary-accent" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">FEE STRUCTURE</span>
            <div className="w-10 h-[2px] bg-primary-accent" />
          </div>
          <h1 className="mb-10 reveal-up" style={{ transitionDelay: '100ms' }}>
            Transparent <span className="text-primary-accent">Pricing.</span>
          </h1>
          <p className="text-secondary-text text-base md:text-xl max-w-2xl mx-auto leading-relaxed reveal-up" style={{ transitionDelay: '200ms' }}>
            We believe in complete transparency. No hidden charges, no surprises. 
            All our professional fees are benchmarked against industry standards.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-b border-border-color bg-white">
         <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {[
              { icon: ShieldCheck, label: 'SAFE PAYMENTS' },
              { icon: Zap, label: 'INSTANT QUOTES' },
              { icon: Globe, label: 'LOCAL BENCHMARKS' },
              { icon: Info, label: 'NO HIDDEN COST' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                 <div className="w-12 h-12 rounded-full bg-secondary-bg flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-white transition-all shadow-sm">
                    <item.icon size={20} />
                 </div>
                 <span className="text-[9px] font-extrabold text-muted-text uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
         </div>
      </section>

      {/* Filter Tabs */}
      <CategoryTabs
        categories={categories}
        activeTab={activeTab}
        onChange={setActiveTab}
      />


      {/* Fees Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {filtered.map((service, idx) => (
            <FeeCard key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="section-container pt-0">
         <div className="bg-secondary-bg rounded-[3rem] p-12 md:p-24 border border-border-color relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary-accent)_0%,_transparent_70%)] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-1000" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-8">Need a <span className="text-primary-accent">Custom Quote</span> for bulk filings?</h2>
                  <p className="text-secondary-text text-lg leading-relaxed max-w-lg mb-10">
                    We offer special pricing for corporate entities, startup packages, and 
                    monthly compliance retainerships.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <a href={`tel:+91${CONTACT_INFO.primaryPhone}`} className="btn-primary flex items-center gap-3">
                       CALL FOR BULK QUOTE <ArrowRight size={18} />
                    </a>
                    <button className="btn-outline">DOWNLOAD FULL PRICE LIST</button>
                  </div>
               </div>
               <div className="hidden lg:flex justify-center">
                  <div className="w-80 h-80 bg-white p-10 rounded-full border-4 border-dashed border-border-color flex flex-center items-center justify-center animate-float shadow-xl">
                     <div className="text-center">
                        <MessageCircle size={64} className="text-primary-accent mx-auto mb-6" />
                        <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest">Chat with us</p>
                        <p className="font-heading font-extrabold text-2xl text-primary-text">Instant Quote</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Fees;
