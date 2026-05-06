import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/data';

const StarRow = ({ rating, size = 16 }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={size}
        fill={i < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={2}
        className={i < rating ? 'text-amber-400' : 'text-slate-600'}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const featured = TESTIMONIALS[active];
  const secondary = TESTIMONIALS.filter((_, i) => i !== active).slice(0, 3);
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  const go = useCallback((dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(i => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
      setAnimating(false);
    }, 220);
  }, [animating]);

  // Auto-rotate
  useEffect(() => {
    intervalRef.current = setInterval(() => go(1), 5500);
    return () => clearInterval(intervalRef.current);
  }, [go]);

  const resetInterval = (dir) => {
    clearInterval(intervalRef.current);
    go(dir);
    intervalRef.current = setInterval(() => go(1), 5500);
  };

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 h-80 w-80 rounded-full bg-brandPrimary/7 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brandAccent/7 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="section-label">Client Reviews</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-heading font-extrabold text-slate-950 leading-tight">
              5,000+ businesses{' '}
              <span className="text-gradient">trust us</span>
            </h2>
            <p className="mt-3 text-slate-600 text-lg">
              Fast, accurate, and personal — here's what our clients say.
            </p>
          </div>

          {/* Summary badges */}
          <div className="flex gap-4 flex-wrap">
            <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-6 py-4 text-center backdrop-blur-sm">
              <p className="text-4xl font-heading font-extrabold text-white">{TESTIMONIALS.length}+</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">Reviews</p>
            </div>
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/8 px-6 py-4 text-center backdrop-blur-sm">
              <p className="text-4xl font-heading font-extrabold text-amber-400">{avg}</p>
              <StarRow rating={Math.round(avg)} size={14} />
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">Avg rating</p>
            </div>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.85fr]">
          {/* Featured card */}
          <div
            className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-md overflow-hidden transition-all duration-300"
            style={{ boxShadow: '0 30px 90px rgba(0,0,0,0.35)', opacity: animating ? 0 : 1 }}
          >
            {/* Glow */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brandAccent/12 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full gap-6">
              <StarRow rating={featured.rating} size={20} />

              <Quote size={48} className="text-brandAccent/20" />

              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed flex-1">
                "{featured.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brandPrimary to-brandAccent text-white font-heading font-bold text-lg">
                    {featured.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white">{featured.name}</p>
                    <p className="text-sm text-slate-400">{featured.location}</p>
                  </div>
                </div>
                <span className="rounded-full border border-brandAccent/25 bg-brandAccent/12 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brandAccent">
                  {featured.service}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => resetInterval(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white hover:bg-white/15 hover:border-brandPrimary/40 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                {/* Dots */}
                <div className="flex gap-2 flex-1 justify-center">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { clearInterval(intervalRef.current); setActive(i); intervalRef.current = setInterval(() => go(1), 5500); }}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className="rounded-full transition-all duration-300"
                      style={{
                        height: '6px',
                        width: i === active ? '28px' : '6px',
                        background: i === active ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={() => resetInterval(1)}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white hover:bg-white/15 hover:border-brandPrimary/40 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Secondary stack */}
          <div className="flex flex-col gap-4">
            {secondary.map((t, idx) => (
              <div
                key={idx}
                className="group flex flex-col gap-3 rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-brandPrimary/20 cursor-pointer"
                style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.22)' }}
                onClick={() => { clearInterval(intervalRef.current); setActive(TESTIMONIALS.indexOf(t)); }}
              >
                <StarRow rating={t.rating} size={14} />
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">"{t.text}"</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/8">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 flex items-center justify-center rounded-full bg-gradient-to-br from-brandPrimary/60 to-brandAccent/60 text-white text-xs font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">{t.name}</p>
                      <p className="text-[10px] text-slate-500">{t.location}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest rounded-full border border-brandAccent/20 bg-brandAccent/8 px-2 py-0.5 text-brandAccent">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 rounded-[2rem] border border-brandAccent/20 bg-gradient-to-r from-brandPrimary/8 via-brandAccent/6 to-transparent p-8 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brandAccent mb-2">Join 5,000+ happy clients</p>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-950">
              Get the same fast, reliable support.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link to="/contact" className="btn-premium inline-flex items-center gap-2 text-sm px-7 py-3.5">
              Book Free Consult <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-ghost inline-flex items-center gap-2 text-sm px-7 py-3.5">
              All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
