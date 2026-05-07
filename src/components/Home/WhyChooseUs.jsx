import { CheckCircle2, ShieldCheck, Zap, Globe, Award, TrendingUp, Users } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const features = [
  {
    icon: ShieldCheck,
    title: 'Absolute Integrity',
    desc: 'Upholding the highest ethical standards in every legal framework and consultation process we execute.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Award,
    title: 'Expert Precision',
    desc: 'Our team delivers meticulous document verification and registration services with zero-margin error.',
    color: 'bg-red-50 text-primary-accent'
  },
  {
    icon: Zap,
    title: 'Rapid Turnaround',
    desc: 'Leveraging digital optimization to ensure your business compliance is handled with unmatched speed.',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    desc: 'Tailored legal strategies designed to protect and empower your specific business vision and goals.',
    color: 'bg-green-50 text-green-600'
  }
];

const WhyChooseUs = () => {
  useScrollReveal();

  return (
    <section className="section-container bg-secondary-bg/20 border-y border-border-color relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-bg rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content */}
          <div className="lg:col-span-5 reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-primary-accent" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">
                WHY SWARAJ
              </span>
            </div>
            <h2 className="mb-8 leading-tight">
              A Legacy of <br />
              <span className="text-primary-accent">Trust</span> & Excellence.
            </h2>
            <p className="text-secondary-text text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Since 2015, Swaraj Enterprises has been the gold standard for legal 
              consultancy in the region. We don't just provide services; we build 
              legal fortresses for your business.
            </p>

            <div className="space-y-6">
              {[
                'Government Approved Agency',
                'ISO 9001:2015 Certified Processes',
                'Secure & Encrypted Data Handling',
                'Senior Legal Experts (15+ Years Exp)'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-6 h-6 rounded-full bg-white border border-border-color flex items-center justify-center group-hover:border-primary-accent transition-colors shadow-sm">
                    <CheckCircle2 size={14} className="text-primary-accent" />
                  </div>
                  <span className="text-sm font-extrabold text-primary-text tracking-tight uppercase group-hover:text-primary-accent transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div
                    key={idx}
                    className="group p-10 bg-white border border-border-color rounded-2xl md:rounded-premium hover:border-primary-accent/20 hover:shadow-2xl hover:shadow-primary-accent/5 transition-all duration-500 reveal-up"
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-primary-text mb-4 tracking-tight group-hover:text-primary-accent transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-sm md:text-base text-secondary-text leading-relaxed group-hover:text-primary-text transition-colors">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
