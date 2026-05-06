import { ShieldCheck, Zap, MessageSquare, Clock, ThumbsUp, Layers } from 'lucide-react';

const REASONS = [
  {
    icon: ShieldCheck,
    color: '#ff5e6c',
    glow: 'rgba(255,94,108,0.2)',
    title: 'Legal Accuracy',
    desc: '100% error-free documentation with full legal backing on every submission.',
  },
  {
    icon: Layers,
    color: '#ffaaab',
    glow: 'rgba(255,170,171,0.2)',
    title: 'One-Stop Solution',
    desc: '29+ services under one roof — save time, money, and multiple agency visits.',
  },
  {
    icon: MessageSquare,
    color: '#feb300',
    glow: 'rgba(254,179,0,0.2)',
    title: '24/7 WhatsApp Support',
    desc: 'Emergency assistance anytime — even on weekends and public holidays.',
  },
  {
    icon: Zap,
    color: '#ff7b8a',
    glow: 'rgba(255,123,138,0.2)',
    title: 'Fast Turnaround',
    desc: 'Most services completed in 3–7 days. Urgent cases handled on priority.',
  },
  {
    icon: ThumbsUp,
    color: '#fff5d7',
    glow: 'rgba(255,245,215,0.25)',
    title: '99% Approval Rate',
    desc: 'Our expertise and thorough document checks ensure near-perfect approval outcomes.',
  },
  {
    icon: Clock,
    color: '#ffb3c0',
    glow: 'rgba(255,179,192,0.2)',
    title: '10+ Years Experience',
    desc: 'A decade of serving 5,000+ businesses across Bhiwandi, Thane, and Maharashtra.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brandPrimary/8 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-brandAccent/8 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-label">Why Choose Us</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-heading font-extrabold text-slate-100 leading-tight">
            A complete legal partner for <span className="text-gradient">every business stage</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            From registrations and tax filings to property and labour compliance — fast, reliable, transparent.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col gap-5 rounded-[1.75rem] border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.07]"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.75rem]"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${item.glow} 0%, transparent 65%)`,
                    boxShadow: `inset 0 0 0 1px ${item.color}28`,
                  }}
                />
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <Icon size={24} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-100 mb-2 group-hover:text-gradient transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
                <div
                  className="h-px w-12 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['10+ Years in Bhiwandi', 'High Court Practice', 'Transparent Pricing', 'No Hidden Charges'].map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-3.5 text-sm text-slate-200 font-medium backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brandAccent" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

