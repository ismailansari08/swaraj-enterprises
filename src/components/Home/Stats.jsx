import { useRef, useEffect, useState } from 'react';
import { Users, Briefcase, UserCheck, Layers, History, TrendingUp } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const statItems = [
  { label: 'CLIENTS SERVED',    end: 5000,  suffix: '+', icon: Users },
  { label: 'CASES RESOLVED',   end: 1200,  suffix: '+', icon: Briefcase },
  { label: 'EXPERT ADVISORS',  end: 50,    suffix: '+', icon: UserCheck },
  { label: 'SERVICE VERTICALS', end: 29,    suffix: '+', icon: Layers },
  { label: 'YEARS LEGACY', end: 10,    suffix: '+', icon: History },
  { label: 'SUCCESS RATE',     end: 99,    suffix: '%', icon: TrendingUp },
];

const useCountUp = (end, duration = 3000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 5);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const StatCard = ({ item, started, idx }) => {
  const count = useCountUp(item.end, 3000, started);
  const Icon = item.icon;

  return (
    <div 
      className="flex flex-col items-center justify-center p-12 md:p-16 border-border-color bg-white hover:bg-secondary-bg/20 transition-all duration-700 group reveal-up relative overflow-hidden"
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      {/* Ultra-Premium Glass Gradient Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),_rgba(230,0,18,0.03)_0%,_transparent_60%)] pointer-events-none" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

      {/* Background Icon Watermark */}
      <div className="absolute -right-6 -bottom-6 opacity-[0.02] group-hover:opacity-[0.06] group-hover:text-primary-accent transition-all duration-1000 pointer-events-none transform group-hover:scale-150 group-hover:-rotate-12 transition-transform">
        <Icon size={180} strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Icon Container */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-primary-accent blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
          <div className="relative w-16 h-16 bg-secondary-bg rounded-2xl flex items-center justify-center text-primary-accent border border-border-color/50 group-hover:bg-primary-accent group-hover:text-white group-hover:border-primary-accent transition-all duration-500 transform group-hover:-translate-y-3 group-hover:rotate-[360deg] shadow-sm">
            <Icon size={24} strokeWidth={2} />
          </div>
        </div>

        <div className="relative mb-6">
          <div className="flex items-baseline justify-center">
            <span className="text-5xl md:text-7xl font-heading font-extrabold text-primary-text tracking-tighter group-hover:scale-105 transition-transform duration-700">
              {count}
            </span>
            <span className="text-2xl md:text-3xl font-heading font-bold text-primary-accent ml-1 opacity-80 group-hover:opacity-100 transition-opacity">
              {item.suffix}
            </span>
          </div>
          {/* Animated Accent Line */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-border-color group-hover:bg-primary-accent group-hover:w-full transition-all duration-700 rounded-full shadow-[0_0_15px_rgba(230,0,18,0)] group-hover:shadow-[0_0_15px_rgba(230,0,18,0.4)]" />
        </div>

        <div className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.4em] text-muted-text group-hover:text-primary-text transition-colors text-center px-4 leading-relaxed mt-6 relative">
          <span className="relative z-10">{item.label}</span>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary-accent/30 group-hover:w-1/2 transition-all duration-700" />
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  useScrollReveal();
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white border-y border-border-color overflow-hidden relative">
      {/* Background Micro-Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 divide-y sm:divide-y-0 lg:divide-x border-x border-border-color/30">
        {statItems.map((item, idx) => (
          <StatCard key={item.label} item={item} started={started} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
