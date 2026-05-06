import { useRef, useEffect, useState } from 'react';
import { Users, ShieldCheck, Briefcase, Clock4, TrendingUp, Award } from 'lucide-react';

const statItems = [
  { label: 'Happy Clients',    end: 5000,  suffix: '+', icon: Users,       color: '#ffaaab', glow: 'rgba(255,170,171,0.25)' },
  { label: 'Cases Resolved',   end: 1200,  suffix: '+', icon: ShieldCheck,  color: '#ff5e6c', glow: 'rgba(255,94,108,0.25)' },
  { label: 'Expert Advisors',  end: 50,    suffix: '+', icon: Briefcase,    color: '#feb300', glow: 'rgba(254,179,0,0.25)' },
  { label: 'Services Offered', end: 29,    suffix: '+', icon: Award,        color: '#fff5d7', glow: 'rgba(255,245,215,0.25)' },
  { label: 'Years Experience', end: 10,    suffix: '+', icon: Clock4,       color: '#ffb3c0', glow: 'rgba(255,179,192,0.25)' },
  { label: 'Success Rate',     end: 99,    suffix: '%', icon: TrendingUp,   color: '#ff7b8a', glow: 'rgba(255,123,138,0.25)' },
];

const useCountUp = (end, duration = 2200, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const StatCard = ({ item, started }) => {
  const count = useCountUp(item.end, 2000, started);
  const Icon = item.icon;

  return (
    <div
      className="group relative flex flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-white/8 bg-white/[0.04] p-8 text-center backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2"
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.28)' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.75rem]"
        style={{ background: `radial-gradient(circle at center, ${item.glow} 0%, transparent 70%)` }}
      />
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
      >
        <Icon size={24} style={{ color: item.color }} />
      </div>
      <div className="relative">
        <p
          className="text-5xl font-heading font-extrabold leading-none"
          style={{
            background: `linear-gradient(135deg, ${item.color}, white)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {count}{item.suffix}
        </p>
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-300">
        {item.label}
      </p>
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
      />
    </div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-brandPrimary/30 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brandPrimary/6 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-14">
          <span className="section-label">By the numbers</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-heading font-extrabold text-slate-100">
            Trusted across <span className="text-gradient">Maharashtra</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto">
            Over a decade of reliable legal and business services — these numbers speak for themselves.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {statItems.map((item) => (
            <StatCard key={item.label} item={item} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

