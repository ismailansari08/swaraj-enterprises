import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Star, MousePointer2, ChevronDown } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

/* ─── Image sequence config (Preserved) ─── */
const TOTAL_FRAMES = 107;
const FRAME_INTERVAL_MS = 80;
const BASE_PATH = '/hero animation/4cf5228c58afd23b2c2ca1266988fe8f (online-video-cutter.com)_';

const getFrameSrc = (i) =>
  encodeURI(`${BASE_PATH}${String(i).padStart(3, '0')}.jpg`);

const Hero = () => {
  useScrollReveal();
  const containerRef = useRef(null);
  const frameRef = useRef(0);
  const intervalRef = useRef(null);
  const imgARef = useRef(null);
  const imgBRef = useRef(null);
  const activeLayerRef = useRef('a');
  const parallaxRef = useRef(null);

  /* ── Preload + sequence playback ── */
  useEffect(() => {
    let preloadPromises = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const promise = new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = getFrameSrc(i);
      });
      preloadPromises.push(promise);
    }

    const advanceFrame = () => {
      frameRef.current = (frameRef.current + 1) % TOTAL_FRAMES;
      const src = getFrameSrc(frameRef.current);
      const next = activeLayerRef.current === 'a' ? imgBRef.current : imgARef.current;
      const curr = activeLayerRef.current === 'a' ? imgARef.current : imgBRef.current;

      if (!next || !curr) return;

      next.src = src;
      next.style.opacity = '1';
      curr.style.opacity = '0';
      activeLayerRef.current = activeLayerRef.current === 'a' ? 'b' : 'a';
    };

    if (imgARef.current) imgARef.current.src = getFrameSrc(0);

    const startAnimation = async () => {
      await Promise.all(preloadPromises);
      intervalRef.current = setInterval(advanceFrame, FRAME_INTERVAL_MS);
    };
    startAnimation();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  /* ── GSAP entrance + Parallax ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.fromTo('.hero-label', { opacity: 0, x: -30 }, { opacity: 1, x: 0, delay: 0.2 })
        .fromTo('.hero-title', { opacity: 0, y: 60 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo('.hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=1')
        .fromTo('.hero-actions', { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=1')
        .fromTo('.hero-visual', { opacity: 0, scale: 0.9, rotate: -2 }, { opacity: 1, scale: 1, rotate: 0, duration: 1.8 }, '-=1.4');

      // Parallax effect on mouse move
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to(parallaxRef.current, {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth'
    });
  };

  return (
    <div ref={containerRef} className="relative min-h-[100dvh] flex items-center bg-white pt-24 md:pt-32 pb-12 overflow-hidden">
      {/* Background Soft Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gradient-to-l from-secondary-bg/80 to-transparent transform skew-x-12 translate-x-1/4" />
      </div>

      <div className="relative z-10 container mx-auto px-5 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Visual Mobile (Shown only on small screens first) */}
          <div className="hero-visual relative lg:hidden w-full max-w-sm mx-auto mb-12">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-border-color shadow-2xl z-10 bg-white">
                <img ref={imgARef} alt="" className="w-full h-full object-cover transition-opacity duration-500" />
                <img ref={imgBRef} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-accent/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary-bg rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="hero-label inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.5em] text-primary-accent">
                ESTABLISHED 2015
              </span>
            </div>

            <h1 className="hero-title mb-8 leading-[1.05]">
              Architects of <br />
              <span className="text-primary-accent">Legal</span> Precision.
            </h1>

            <p className="hero-desc text-base md:text-xl text-secondary-text leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Swaraj Enterprises delivers world-class business consultancy 
              with an uncompromising commitment to legal excellence and 
              corporate transparency.
            </p>

            <div className="hero-actions flex flex-col sm:flex-row flex-wrap gap-5 justify-center lg:justify-start">
              <Link to="/services" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 group shadow-xl hover:shadow-primary-accent/20 transition-all">
                EXPLORE SERVICES
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
              </Link>
              <Link to="/contact" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm border-2">
                FREE CONSULTATION
              </Link>
            </div>

            {/* Trusted By */}
            <div className="hero-desc mt-16 md:mt-20 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start opacity-80">
              <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-secondary-bg border-4 border-white flex items-center justify-center text-[10px] font-extrabold shadow-md transform hover:-translate-y-1 transition-transform cursor-pointer">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-primary-accent text-primary-accent" />)}
                </div>
                <div className="text-[9px] font-bold text-muted-text tracking-[0.2em] uppercase">
                  TRUSTED BY 5,000+ CORPORATE ENTITIES
                </div>
              </div>
            </div>
          </div>

          {/* Visual Desktop (Hidden on mobile) */}
          <div className="hero-visual relative hidden lg:block" ref={parallaxRef}>
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 rounded-[4rem] overflow-hidden border border-border-color shadow-2xl z-10 bg-white">
                <img ref={imgARef} alt="" className="w-full h-full object-cover transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform duration-1000" />
                <img ref={imgBRef} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform duration-1000" />
              </div>
              
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary-accent/10 rounded-full blur-[80px] animate-pulse-soft" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-bg rounded-full blur-[100px]" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-12 -right-12 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-border-color flex flex-col items-center animate-float">
                <div className="w-12 h-12 bg-primary-accent/10 rounded-2xl flex items-center justify-center mb-4">
                   <Star size={24} className="text-primary-accent fill-primary-accent" />
                </div>
                <div className="text-2xl font-heading font-extrabold text-primary-text mb-1 tracking-tight">10+ YEARS</div>
                <p className="text-[9px] font-bold text-muted-text uppercase tracking-widest">
                  LEGACY OF EXCELLENCE
                </p>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-8 -left-8 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-primary-text rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group cursor-pointer transition-all hover:bottom-10"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-text group-hover:text-primary-accent transition-colors">
          Discovery
        </span>
        <div className="w-10 h-10 border border-border-color rounded-full flex items-center justify-center group-hover:border-primary-accent transition-colors">
          <ChevronDown size={18} className="text-muted-text group-hover:text-primary-accent animate-bounce" />
        </div>
      </button>
    </div>
  );
};

export default Hero;
