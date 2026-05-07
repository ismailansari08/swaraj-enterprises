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
        className={i < rating ? 'text-primary-accent' : 'text-muted-text'}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const featured = TESTIMONIALS[active];
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  const go = useCallback((dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(i => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
      setAnimating(false);
    }, 200);
  }, [animating]);

  useEffect(() => {
    intervalRef.current = setInterval(() => go(1), 6000);
    return () => clearInterval(intervalRef.current);
  }, [go]);

  const manualGo = (dir) => {
    clearInterval(intervalRef.current);
    go(dir);
    intervalRef.current = setInterval(() => go(1), 6000);
  };

  return (
    <section className="section-container bg-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-10 h-[2px] bg-primary-accent" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">
                CLIENT VERDICTS
              </span>
            </div>
            <h2 className="mb-6">
              A Legacy of <span className="text-primary-accent">Trust</span> <br className="hidden md:block" />
              and Excellence.
            </h2>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="text-center lg:text-right">
              <div className="text-2xl md:text-3xl font-heading font-extrabold text-primary-text">{avg}/5.0</div>
              <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-muted-text">
                AVERAGE RATING
              </div>
            </div>
            <div className="w-[1px] h-12 bg-border-color" />
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-heading font-extrabold text-primary-text">{TESTIMONIALS.length}+</div>
              <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-muted-text">
                CLIENT REVIEWS
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Main Featured Testimonial */}
          <div className="lg:col-span-8">
            <div className="h-full bg-white border border-border-color rounded-2xl md:rounded-premium p-8 md:p-16 flex flex-col relative group transition-all duration-500 hover:shadow-soft-hover">
              <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-secondary-bg w-20 h-20 md:w-32 md:h-32 pointer-events-none group-hover:text-primary-accent/5 transition-colors" />
              
              <div className="mb-8">
                <StarRow rating={featured.rating} size={20} />
              </div>

              <p className={`text-xl md:text-3xl font-heading font-extrabold text-primary-text leading-relaxed mb-12 transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
                "{featured.text}"
              </p>

              <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-10 border-t border-border-color">
                <div className={`flex items-center gap-4 transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  <div className="w-14 h-14 bg-secondary-bg border border-border-color rounded-xl flex items-center justify-center font-heading font-extrabold text-xl text-primary-accent">
                    {featured.name[0]}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary-text text-lg tracking-tight">{featured.name}</h4>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted-text">
                      {featured.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => manualGo(-1)}
                    className="w-14 h-14 border border-border-color rounded-xl flex items-center justify-center text-primary-text hover:bg-primary-accent hover:border-primary-accent hover:text-white transition-all shadow-sm active:scale-90"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => manualGo(1)}
                    className="w-14 h-14 border border-border-color rounded-xl flex items-center justify-center text-primary-text hover:bg-primary-accent hover:border-primary-accent hover:text-white transition-all shadow-sm active:scale-90"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-primary-accent rounded-2xl md:rounded-premium p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative shadow-lg">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-4 leading-tight">
                  Join 5,000+ Happy Clients
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                  Experience the pinnacle of legal consultancy. Our strategic 
                  advisory ensures your business is always protected.
                </p>
              </div>
              <Link
                to="/contact"
                className="relative z-10 w-full py-5 bg-white text-primary-accent font-extrabold text-[11px] uppercase tracking-widest rounded-xl text-center hover:bg-secondary-bg transition-all active:scale-95 shadow-md"
              >
                REQUEST CASE STUDY
              </Link>
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>

            <div className="bg-white border border-border-color rounded-2xl md:rounded-premium p-8 hover:shadow-soft transition-all group">
              <h4 className="text-[10px] font-extrabold text-primary-text uppercase tracking-[0.3em] mb-4">
                RECENT SUCCESS
              </h4>
              <p className="text-secondary-text text-sm leading-relaxed mb-6">
                Successfully navigated complex property dispute for a major logistics 
                enterprise in Thane district, ensuring zero business downtime.
              </p>
              <div className="flex items-center gap-2 text-primary-accent font-extrabold text-[10px] uppercase tracking-[0.2em] cursor-pointer hover:gap-4 transition-all">
                LEARN MORE <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
