import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ALL_SERVICES } from '../../utils/data';
import useScrollReveal from '../../hooks/useScrollReveal';

const ServiceCard = ({ service, idx }) => {
  return (
    <div
      className="premium-card flex flex-col h-full bg-white group reveal-up"
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary-bg rounded-xl flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary-accent/20">
          <CheckCircle2 size={24} className="md:w-7 md:h-7" />
        </div>
        <div className="text-primary-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 hidden md:block">
          <ArrowRight size={20} />
        </div>
      </div>

      <div className="mb-8">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted-text group-hover:text-primary-accent transition-colors">
          {service.category}
        </span>
        <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary-text mt-2 mb-4 tracking-tight group-hover:text-primary-accent transition-colors leading-tight">
          {service.name}
        </h3>
        <p className="text-sm md:text-base text-secondary-text leading-relaxed line-clamp-3 group-hover:text-primary-text transition-colors">
          {service.description}
        </p>
      </div>

      <div className="mt-auto pt-6 border-t border-border-color flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-muted-text uppercase tracking-widest">Pricing From</span>
          <span className="text-sm md:text-base font-extrabold text-primary-text uppercase tracking-widest">{service.price}</span>
        </div>
        <Link
          to="/services"
          className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-accent hover:text-hover-red transition-all flex items-center gap-2 group/link"
        >
          DETAILS
          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const ServicesRow = () => {
  useScrollReveal();
  const popular = ALL_SERVICES.slice(0, 6);

  return (
    <section className="section-container bg-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-center lg:text-left reveal-up">
          <div className="max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-10 h-[2px] bg-primary-accent" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="mb-6">
              Integrated <span className="text-primary-accent">Business</span> <br className="hidden md:block" />
              & Legal Solutions.
            </h2>
            <p className="text-secondary-text text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              High-precision consultancy across 29+ specialized sectors, designed 
              to empower modern enterprises with legal integrity.
            </p>
          </div>
          
          <Link
            to="/services"
            className="btn-outline w-full sm:w-auto text-[10px] uppercase tracking-widest px-10 shrink-0 hover:bg-secondary-bg transition-colors"
          >
            EXPLORE ALL SERVICES
          </Link>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {popular.map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx} />
          ))}
        </div>

        {/* Mobile-First Banner */}
        <div className="mt-16 md:mt-24 bg-secondary-bg/50 rounded-2xl md:rounded-premium p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 border border-border-color shadow-sm reveal-up">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-border-color rounded-full mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-primary-accent animate-pulse" />
              <span className="text-[9px] font-bold text-primary-text uppercase tracking-widest">Priority Advisory</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-primary-text mb-4 tracking-tight">
              Bespoke Corporate Advisory
            </h3>
            <p className="text-secondary-text text-sm md:text-base leading-relaxed">
              Tailored solutions for complex business needs. Connect with our senior 
              legal consultants for a strategic roadmap that guarantees compliance.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-primary w-full sm:w-auto text-[11px] uppercase tracking-widest py-5 shadow-lg hover:shadow-primary-accent/30 transition-shadow"
          >
            REQUEST CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesRow;
