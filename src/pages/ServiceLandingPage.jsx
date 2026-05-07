import { useParams, Link } from 'react-router-dom';
import { ALL_SERVICES, CONTACT_INFO, FAQS } from '../utils/data';
import useSEO from '../hooks/useSEO';
import SchemaMarkup from '../components/Common/SchemaMarkup';
import { CheckCircle2, ArrowRight, MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';

const ServiceLandingPage = () => {
  const { slug } = useParams();
  
  // Mapping slugs to service IDs or finding by partial match
  const service = ALL_SERVICES.find(s => slug.includes(s.id.split('-')[0])) || ALL_SERVICES[0];
  
  const pageTitle = `${service.name} Agent & Consultant in Bhiwandi | Swaraj Enterprises`;
  const pageDesc = `Looking for ${service.name} in Bhiwandi? Swaraj Enterprises is the best ${service.name} consultant in Thane & Bhiwandi. We provide fast, reliable, and expert assistance for all government documentations. Call us for ${service.name} today.`;
  const pageKeywords = `${service.name} Bhiwandi, ${service.name} Agent Bhiwandi, ${service.name} Consultant near me, ${service.name} Registration Thane, Swaraj Enterprises Online Services, ${service.name} process Maharashtra`;

  useSEO({
    title: pageTitle,
    description: pageDesc,
    keywords: pageKeywords,
    canonical: `https://swarajenterprises.in/${slug}`
  });

  const serviceFaqs = FAQS.filter(f => f.cat === service.category.toLowerCase() || slug.includes(f.cat)).slice(0, 4);

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      <SchemaMarkup 
        type="Service" 
        data={{
          "serviceType": service.name,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Swaraj Enterprises"
          },
          "areaServed": {
            "@type": "City",
            "name": "Bhiwandi"
          }
        }} 
      />

      {/* Hero Section */}
      <section className="bg-secondary-bg py-20 lg:py-32 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-primary-accent" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">SERVICE EXPERTS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary-text mb-8 leading-tight">
                {service.name} <span className="text-primary-accent">Bhiwandi.</span>
              </h1>
              <p className="text-secondary-text text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                Expert assistance for {service.name} in Bhiwandi and surrounding areas. 
                Swaraj Enterprises ensures 100% legal compliance and fast processing.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`https://wa.me/91${CONTACT_INFO.primaryPhone}`} className="btn-primary flex items-center gap-3">
                  CONSULT ON WHATSAPP <MessageCircle size={18} />
                </a>
                <Link to="/contact" className="btn-outline">CONTACT US</Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-border-color">
                <h3 className="text-2xl font-heading font-extrabold mb-8">Service Overview</h3>
                <ul className="space-y-6">
                  {service.features?.map((f, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 bg-primary-accent/10 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-primary-accent" />
                      </div>
                      <span className="text-primary-text font-bold text-sm md:text-base">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-border-color grid grid-cols-2 gap-8">
                   <div>
                      <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest mb-1">Processing Time</p>
                      <p className="text-primary-text font-bold">{service.processingTime}</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-extrabold text-muted-text uppercase tracking-widest mb-1">Initial Price</p>
                      <p className="text-primary-text font-bold">{service.price}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container py-24">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <h2 className="mb-10 tracking-tighter">Everything You Need to Know About <span className="text-primary-accent">{service.name}</span></h2>
            <div className="prose prose-lg max-w-none text-secondary-text leading-relaxed">
              <p className="mb-6">
                In today's complex regulatory environment, obtaining a <strong>{service.name} in Bhiwandi</strong> 
                requires professional expertise. At Swaraj Enterprises, we simplify the entire process from 
                documentation to final approval.
              </p>
              <h4 className="text-primary-text font-extrabold text-2xl mt-12 mb-6">Required Documents</h4>
              <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                 {service.documents?.map((doc, i) => (
                   <li key={i} className="flex items-center gap-3 bg-secondary-bg p-4 rounded-xl border border-border-color">
                     <ShieldCheck size={18} className="text-primary-accent" />
                     <span className="text-sm font-bold text-primary-text">{doc}</span>
                   </li>
                 ))}
              </ul>
              <h4 className="text-primary-text font-extrabold text-2xl mt-12 mb-6">Why Choose Swaraj Enterprises for {service.name}?</h4>
              <p className="mb-8">
                Based in Bhiwandi, Maharashtra, we have served over 5,000+ satisfied clients. 
                Our local expertise and direct relationships with administrative offices ensure 
                that your <strong>{service.name}</strong> is processed without any hurdles.
              </p>
            </div>

            {/* FAQs */}
            <div className="mt-20">
               <h3 className="text-3xl font-heading font-extrabold mb-10">Frequently Asked Questions</h3>
               <div className="space-y-6">
                  {serviceFaqs.map((faq, i) => (
                    <div key={i} className="p-8 bg-white border border-border-color rounded-2xl hover:border-primary-accent/30 transition-all">
                       <h5 className="text-lg font-extrabold text-primary-text mb-4">Q: {faq.q}</h5>
                       <p className="text-secondary-text leading-relaxed">A: {faq.a}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="p-8 bg-primary-accent rounded-3xl text-white shadow-2xl">
                 <h4 className="text-2xl font-heading font-extrabold mb-6">Apply Now</h4>
                 <p className="text-white/80 mb-8 leading-relaxed">Submit your details and our senior partner will contact you shortly.</p>
                 <Link to="/contact" className="w-full py-5 bg-white text-primary-accent rounded-xl font-extrabold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-secondary-bg transition-all shadow-xl">
                   START APPLICATION <ArrowRight size={18} />
                 </Link>
              </div>

              <div className="p-8 border border-border-color rounded-3xl bg-white">
                 <h4 className="text-lg font-heading font-extrabold mb-6">Office Details</h4>
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <MapPin className="text-primary-accent shrink-0" size={20} />
                       <p className="text-xs font-bold text-secondary-text leading-relaxed">{CONTACT_INFO.address}</p>
                    </div>
                    <div className="flex gap-4">
                       <Clock className="text-primary-accent shrink-0" size={20} />
                       <p className="text-xs font-bold text-secondary-text uppercase tracking-widest">{CONTACT_INFO.workingHours}</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Areas */}
      <section className="bg-secondary-bg py-20">
         <div className="section-container text-center">
            <h4 className="text-lg font-heading font-extrabold mb-8 uppercase tracking-widest">Proudly Serving Bhiwandi & Nearby Areas</h4>
            <div className="flex flex-wrap justify-center gap-4">
               {['Bhiwandi City', 'Kalyan', 'Dombivli', 'Thane', 'Ulhasnagar', 'Shahapur', 'Padgha', 'Mankoli', 'Kasheli'].map(area => (
                 <span key={area} className="px-6 py-3 bg-white border border-border-color rounded-full text-[10px] font-extrabold uppercase tracking-widest text-muted-text">
                   {area}
                 </span>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServiceLandingPage;
