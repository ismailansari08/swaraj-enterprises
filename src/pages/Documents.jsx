import { useState, useMemo } from 'react';
import { ALL_SERVICES } from '../utils/data';
import { FileText, Search, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Download, ExternalLink, ChevronRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import SchemaMarkup from '../components/Common/SchemaMarkup';
import useScrollReveal from '../hooks/useScrollReveal';

const Documents = () => {
  useScrollReveal();
  useSEO({
    title: 'Document Readiness Checker | Swaraj Enterprises Bhiwandi',
    description: 'Verify your documents before application. Our automated checker ensures you have everything needed for PAN, GST, Passport, and other legal services.',
    keywords: 'Document Checklist Bhiwandi, PAN Card Documents, GST Required Documents, Passport Checklist',
  });

  const [selectedService, setSelectedService] = useState(ALL_SERVICES[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      <SchemaMarkup type="Service" data={{ "name": "Document Verification Service" }} />

      {/* Header */}
      <section className="bg-secondary-bg/30 border-b border-border-color py-20 md:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
             <div className="inline-flex items-center gap-3 mb-8 reveal-up">
                <div className="w-10 h-[2px] bg-primary-accent" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">COMPLIANCE ENGINE</span>
             </div>
             <h1 className="mb-10 reveal-up" style={{ transitionDelay: '100ms' }}>
               Document <span className="text-primary-accent">Readiness.</span>
             </h1>
             <p className="text-secondary-text text-base md:text-xl leading-relaxed mb-12 reveal-up" style={{ transitionDelay: '200ms' }}>
               Avoid application rejections by verifying your documents beforehand. 
               Select your service below to see the mandatory checklist approved by our experts.
             </p>
          </div>
        </div>
      </section>

      {/* Interactive Checker */}
      <section className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Sidebar - Service Selector */}
          <div className="lg:col-span-4 reveal-left">
            <div className="sticky top-32">
              <div className="relative mb-8 group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-text group-focus-within:text-primary-accent transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Find your service..." 
                  className="w-full bg-secondary-bg border-2 border-border-color focus:border-primary-accent rounded-2xl py-5 pl-16 pr-6 text-sm font-bold tracking-wide outline-none transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="max-h-[500px] overflow-y-auto custom-scrollbar border border-border-color rounded-[2rem] bg-white divide-y divide-border-color/50 shadow-xl">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left p-8 transition-all flex items-center justify-between group ${
                      selectedService.id === service.id 
                        ? 'bg-primary-accent text-white' 
                        : 'hover:bg-secondary-bg text-primary-text'
                    }`}
                  >
                    <div className="flex flex-col">
                       <span className="text-[9px] font-extrabold uppercase tracking-widest mb-1 opacity-60">Category: {service.category}</span>
                       <span className="font-heading font-extrabold text-lg tracking-tight leading-none">{service.name}</span>
                    </div>
                    <ChevronRight size={20} className={`transition-transform ${selectedService.id === service.id ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Checklist */}
          <div className="lg:col-span-8 reveal-up" style={{ transitionDelay: '300ms' }}>
            {selectedService && (
              <div className="animate-fade-up">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                   <div>
                      <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
                        {selectedService.name} <span className="text-primary-accent">Checklist</span>
                      </h2>
                      <div className="flex items-center gap-6">
                         <div className="flex items-center gap-2 text-[10px] font-extrabold text-muted-text uppercase tracking-widest">
                            <ShieldCheck size={14} className="text-green-500" /> GOVERNMENT VERIFIED
                         </div>
                         <div className="flex items-center gap-2 text-[10px] font-extrabold text-muted-text uppercase tracking-widest">
                            <FileText size={14} className="text-primary-accent" /> {selectedService.documents?.length} DOCUMENTS REQUIRED
                         </div>
                      </div>
                   </div>
                   <button className="btn-primary !px-8 flex items-center gap-3 shimmer-effect">
                      BOOK NOW <ArrowRight size={16} />
                   </button>
                </div>

                <div className="bg-secondary-bg/50 border border-border-color rounded-[3rem] p-10 md:p-16 mb-12">
                   <div className="grid md:grid-cols-2 gap-8">
                      {selectedService.documents?.map((doc, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-border-color shadow-sm hover:shadow-lg hover:border-primary-accent/20 transition-all flex items-start gap-5 group">
                           <div className="mt-1 w-6 h-6 bg-primary-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary-accent group-hover:text-white transition-all">
                              <CheckCircle2 size={14} className="text-primary-accent group-hover:text-white" />
                           </div>
                           <p className="text-sm md:text-base font-bold text-primary-text leading-snug">{doc}</p>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Important Notes */}
                <div className="p-10 bg-primary-accent/5 rounded-[2.5rem] border border-primary-accent/10 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 text-primary-accent/10">
                      <AlertCircle size={100} />
                   </div>
                   <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6 text-primary-accent">
                         <AlertCircle size={24} />
                         <h4 className="text-xl font-heading font-extrabold tracking-tight">Important Submission Notes</h4>
                      </div>
                      <ul className="space-y-4">
                         <li className="text-secondary-text text-sm md:text-base flex items-start gap-4">
                            <div className="w-1.5 h-1.5 bg-primary-accent rounded-full mt-2.5 shrink-0" />
                            All documents must be self-attested unless specified otherwise.
                         </li>
                         <li className="text-secondary-text text-sm md:text-base flex items-start gap-4">
                            <div className="w-1.5 h-1.5 bg-primary-accent rounded-full mt-2.5 shrink-0" />
                            Digital copies must be in high-resolution PDF or JPEG format.
                         </li>
                         <li className="text-secondary-text text-sm md:text-base flex items-start gap-4">
                            <div className="w-1.5 h-1.5 bg-primary-accent rounded-full mt-2.5 shrink-0" />
                            Mobile number must be linked with Aadhar for OTP verification.
                         </li>
                      </ul>
                   </div>
                </div>
                
                {/* Secondary Actions */}
                <div className="mt-16 grid sm:grid-cols-2 gap-8">
                   <a href="#" className="flex items-center justify-between p-8 bg-white border-2 border-border-color rounded-[2rem] hover:border-primary-accent hover:shadow-xl transition-all group">
                      <div className="flex items-center gap-5">
                         <div className="w-12 h-12 bg-secondary-bg rounded-xl flex items-center justify-center text-primary-text group-hover:bg-primary-accent group-hover:text-white transition-all">
                            <Download size={24} />
                         </div>
                         <div>
                            <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest mb-1">Downloadable</p>
                            <p className="font-heading font-extrabold text-lg tracking-tight">Offline Forms</p>
                         </div>
                      </div>
                      <ExternalLink size={20} className="text-muted-text" />
                   </a>
                   <a href="#" className="flex items-center justify-between p-8 bg-white border-2 border-border-color rounded-[2rem] hover:border-primary-accent hover:shadow-xl transition-all group">
                      <div className="flex items-center gap-5">
                         <div className="w-12 h-12 bg-secondary-bg rounded-xl flex items-center justify-center text-primary-text group-hover:bg-primary-accent group-hover:text-white transition-all">
                            <ShieldCheck size={24} />
                         </div>
                         <div>
                            <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest mb-1">Verify Here</p>
                            <p className="font-heading font-extrabold text-lg tracking-tight">Document Validity</p>
                         </div>
                      </div>
                      <ExternalLink size={20} className="text-muted-text" />
                   </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;
