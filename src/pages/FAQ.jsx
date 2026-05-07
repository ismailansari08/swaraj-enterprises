import { useState, useMemo } from 'react';
import { FAQS, CONTACT_INFO } from '../utils/data';
import { Plus, Minus, Search, HelpCircle, MessageCircle, ChevronRight, ArrowRight, Shield } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import SchemaMarkup from '../components/Common/SchemaMarkup';
import useScrollReveal from '../hooks/useScrollReveal';

const FAQItem = ({ faq, isOpen, toggle, idx }) => {
  return (
    <div 
      className={`premium-card !p-0 overflow-hidden transition-all duration-500 reveal-up ${
        isOpen ? 'border-primary-accent shadow-2xl' : 'hover:border-primary-accent/30'
      }`}
      style={{ transitionDelay: `${idx * 50}ms` }}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-8 md:p-10 text-left group"
      >
        <div className="flex items-center gap-6">
           <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'bg-primary-accent text-white' : 'bg-secondary-bg text-primary-accent group-hover:bg-primary-accent/10'}`}>
              <HelpCircle size={22} />
           </div>
           <h3 className={`text-lg md:text-xl font-heading font-extrabold tracking-tight transition-colors ${isOpen ? 'text-primary-accent' : 'text-primary-text'}`}>
             {faq.q}
           </h3>
        </div>
        <div className={`shrink-0 w-10 h-10 rounded-full border-2 border-border-color flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-180 border-primary-accent bg-primary-accent text-white' : 'group-hover:border-primary-accent group-hover:text-primary-accent'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <div 
        className={`transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 md:px-10 pb-10 md:pb-12 pt-0 ml-18 md:ml-20">
          <div className="w-full h-px bg-border-color mb-8" />
          <p className="text-secondary-text text-base md:text-lg leading-relaxed max-w-4xl">
            {faq.a}
          </p>
          <div className="mt-10 flex items-center gap-6">
             <span className="text-[9px] font-extrabold text-muted-text uppercase tracking-widest bg-secondary-bg px-4 py-2 rounded-lg border border-border-color">
                CATEGORY: {faq.cat.toUpperCase()}
             </span>
             <button className="text-[10px] font-extrabold text-primary-accent uppercase tracking-widest hover:translate-x-2 transition-transform flex items-center gap-2">
                WAS THIS HELPFUL? <ChevronRight size={14} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  useScrollReveal();
  useSEO({
    title: 'Frequently Asked Questions | Swaraj Enterprises Support',
    description: 'Get answers to common queries regarding PAN Card, Passport, GST Registration, and more. Swaraj Enterprises expert support center.',
    keywords: 'Legal FAQ Bhiwandi, PAN Card Help, GST Support Bhiwandi, Government Service Queries',
  });

  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filtered = useMemo(() => {
    return FAQS.filter(f => 
      f.q.toLowerCase().includes(search.toLowerCase()) || 
      f.a.toLowerCase().includes(search.toLowerCase()) ||
      f.cat.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      <SchemaMarkup type="FAQPage" data={{
        "mainEntity": FAQS.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }} />

      {/* Header */}
      <section className="bg-secondary-bg/50 border-b border-border-color py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-[0.03]" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-8 reveal-up">
            <div className="w-10 h-[2px] bg-primary-accent" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">SUPPORT CENTER</span>
            <div className="w-10 h-[2px] bg-primary-accent" />
          </div>
          <h1 className="mb-10 reveal-up" style={{ transitionDelay: '100ms' }}>
            Helpful <span className="text-primary-accent">Answers.</span>
          </h1>
          <p className="text-secondary-text text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-16 reveal-up" style={{ transitionDelay: '200ms' }}>
            Find quick answers to common questions about our services, processes, 
            and documentation requirements.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative group reveal-up" style={{ transitionDelay: '300ms' }}>
            <div className="absolute inset-0 bg-primary-accent/10 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="relative flex items-center bg-white border-2 border-border-color group-focus-within:border-primary-accent rounded-[2.5rem] p-2 pl-8 transition-all shadow-xl">
              <Search className="text-muted-text group-focus-within:text-primary-accent transition-colors" size={24} />
              <input 
                type="text" 
                placeholder="Search your question here..." 
                className="w-full bg-transparent border-none focus:ring-0 text-lg font-medium text-primary-text placeholder:text-muted-text p-6"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-container">
        <div className="grid lg:grid-cols-12 gap-20">
           <div className="lg:col-span-8 space-y-6">
              {filtered.length > 0 ? (
                filtered.map((faq, i) => (
                  <FAQItem 
                    key={i} 
                    faq={faq} 
                    idx={i}
                    isOpen={openIndex === i} 
                    toggle={() => setOpenIndex(openIndex === i ? null : i)} 
                  />
                ))
              ) : (
                <div className="py-24 text-center bg-secondary-bg/50 rounded-[3rem] border border-dashed border-border-color">
                   <Shield size={64} className="text-muted-text mx-auto mb-6 opacity-50" />
                   <h3 className="text-2xl font-heading font-extrabold mb-4">No results found.</h3>
                   <p className="text-secondary-text mb-10">Please try searching with different keywords.</p>
                   <button onClick={() => setSearch('')} className="btn-outline">CLEAR SEARCH</button>
                </div>
              )}
           </div>

           <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
                 <div className="p-10 bg-primary-accent rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                       <MessageCircle size={100} />
                    </div>
                    <div className="relative z-10">
                       <h4 className="text-2xl font-heading font-extrabold mb-6 leading-tight">Still have questions?</h4>
                       <p className="text-white/80 mb-10 leading-relaxed">
                          Can't find the answer you're looking for? Please chat with our friendly team.
                       </p>
                       <a href={`https://wa.me/91${CONTACT_INFO.primaryPhone}`} className="w-full py-5 bg-white text-primary-accent rounded-2xl font-extrabold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-secondary-bg transition-all shadow-xl">
                          CHAT ON WHATSAPP <ArrowRight size={18} />
                       </a>
                    </div>
                 </div>

                 <div className="p-10 border border-border-color rounded-[3rem] bg-white">
                    <h4 className="text-lg font-heading font-extrabold mb-8 uppercase tracking-widest">Legal Topics</h4>
                    <div className="flex flex-wrap gap-3">
                       {['PAN Card', 'GST', 'Passport', 'Shop Act', 'ITR', 'Trade Mark', 'Digital Signature'].map(topic => (
                         <button key={topic} onClick={() => setSearch(topic)} className="px-5 py-3 bg-secondary-bg hover:bg-primary-accent hover:text-white rounded-xl text-[10px] font-extrabold uppercase tracking-widest transition-all">
                            {topic}
                         </button>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
