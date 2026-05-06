import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, ShieldCheck, Clock, FileText, CheckCircle, Star } from 'lucide-react';

/* ─── Image sequence config ─────────────────────────────────────────────── */
const TOTAL_FRAMES = 107;
const FRAME_INTERVAL_MS = 80; // ~12.5 fps → smooth playback
const BASE_PATH = '/hero animation/4cf5228c58afd23b2c2ca1266988fe8f (online-video-cutter.com)_';

const getFrameSrc = (i) =>
  encodeURI(`${BASE_PATH}${String(i).padStart(3, '0')}.jpg`);

/* ─── Component ─────────────────────────────────────────────────────────── */
const Hero = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(0);
  const intervalRef = useRef(null);
  const loadedFramesRef = useRef(0);
  const totalLoadedRef = useRef(0);

  // Two canvas layers for crossfade — avoids React re-render on every frame
  const imgARef = useRef(null);
  const imgBRef = useRef(null);
  const activeLayerRef = useRef('a'); // which img is currently visible

  /* ── Preload + sequence playback ─────────────────────────────────────── */
  useEffect(() => {
    let preloadPromises = [];
    
    // Preload all frames with promises
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const promise = new Promise((resolve, reject) => {
        const img = new window.Image();
        img.onload = () => {
          loadedFramesRef.current++;
          totalLoadedRef.current++;
          console.log(`Loaded frame ${i}/${TOTAL_FRAMES} (${Math.round((loadedFramesRef.current / TOTAL_FRAMES)*100)}%)`);
          resolve(img);
        };
        img.onerror = (e) => {
          console.error(`Failed to load frame ${i}:`, getFrameSrc(i), e);
          totalLoadedRef.current++;
          resolve(null); // continue even if failed
        };
        img.src = getFrameSrc(i);
        preloadPromises.push(promise);
      });
    }

    const advanceFrame = () => {
      frameRef.current = (frameRef.current + 1) % TOTAL_FRAMES;
      console.log('Advancing to frame:', frameRef.current);
      const src = getFrameSrc(frameRef.current);
      const next = activeLayerRef.current === 'a' ? imgBRef.current : imgARef.current;
      const curr = activeLayerRef.current === 'a' ? imgARef.current : imgBRef.current;

      if (!next || !curr) return;

      next.src = src;
      next.style.opacity = '1';
      curr.style.opacity = '0';
      activeLayerRef.current = activeLayerRef.current === 'a' ? 'b' : 'a';
    };

    // Set initial frame after mount
    if (imgARef.current) imgARef.current.src = getFrameSrc(0);

    // Start animation after preloads (or partial)
    const startAnimation = async () => {
      await Promise.all(preloadPromises);
      console.log(`Preload complete: ${totalLoadedRef.current}/${TOTAL_FRAMES} frames loaded. Starting animation.`);
      intervalRef.current = setInterval(advanceFrame, FRAME_INTERVAL_MS);
    };
    startAnimation();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  /* ── GSAP entrance animations ────────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-badge',
        { y: 24, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75, delay: 0.3 }
      )
      .fromTo('.hero-word',
        { y: 55, opacity: 0, rotateX: -25 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.85, stagger: 0.1 },
        '-=0.4'
      )
      .fromTo('.hero-sub',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75 },
        '-=0.45'
      )
      .fromTo('.hero-cta',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75 },
        '-=0.55'
      )
      .fromTo('.hero-stat',
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12 },
        '-=0.5'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '99%', label: 'Approval Rate' },
    { value: '29+', label: 'Services' },
    { value: '10+', label: 'Years Exp.' },
    { value: '5K+', label: 'Businesses' },
  ];

  const pills = [
    { icon: <ShieldCheck size={15} />, text: '100% Secure' },
    { icon: <Clock size={15} />, text: 'Fast Processing' },
    { icon: <FileText size={15} />, text: 'Expert Drafting' },
    { icon: <CheckCircle size={15} />, text: 'High Success Rate' },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-end pb-20 pt-24 overflow-hidden"
    >
      {/* ── Image sequence – two layers crossfade ── */}
      <img
        ref={imgARef}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 1, transition: `opacity ${FRAME_INTERVAL_MS * 1.5}ms ease-in-out`, zIndex: 0 }}
      />
      <img
        ref={imgBRef}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0, transition: `opacity ${FRAME_INTERVAL_MS * 1.5}ms ease-in-out`, zIndex: 0 }}
      />

      {/* ── Layered overlays for readability ── */}
      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" style={{ zIndex: 1 }} />
      {/* Dark bottom gradient */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          zIndex: 2,
          height: '85%',
          background: 'linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.8) 40%, transparent 85%)',
        }}
      />

      {/* Top subtle brand colour bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            'radial-gradient(ellipse 70% 50% at 20% 0%, rgba(255,94,108,0.18) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 80% 100%, rgba(254,179,0,0.12) 0%, transparent 60%)',
        }}
      />

      {/* ── Floating colour orbs ── */}
      <div className="absolute left-[-4rem] top-20 h-56 w-56 rounded-full bg-brandPrimary/20 blur-3xl floating-orb pointer-events-none" style={{ zIndex: 3 }} />
      <div className="absolute right-[-3rem] top-36 h-48 w-48 rounded-full bg-brandSecondary/15 blur-3xl floating-orb floating-orb-delayed pointer-events-none" style={{ zIndex: 3 }} />
      <div className="absolute left-1/2 bottom-32 h-36 w-36 -translate-x-1/2 rounded-full bg-brandAccent/15 blur-3xl floating-orb pointer-events-none" style={{ zIndex: 3 }} />

      {/* ── Content ── */}
      <div className="container mx-auto px-6 lg:px-16 relative" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">

          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-brandAccent border border-brandAccent/30 bg-brandAccent/10 backdrop-blur-sm shadow-[0_0_30px_rgba(255,170,171,0.15)]">
            <Star size={13} className="fill-brandAccent" />
            Trusted by 5,000+ businesses across Maharashtra
            <span className="h-2 w-2 rounded-full bg-brandAccent animate-pulse ml-1" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-heading font-extrabold tracking-tight leading-[1.08]">
          <span className="hero-word block text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
              Legal services that
            </span>
            <span className="hero-word block text-gradient drop-shadow-[0_4px_40px_rgba(255,94,108,0.4)]">
              protect &amp; accelerate
            </span>
            <span className="hero-word block text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]">
              your business.
            </span>

          </h1>

          {/* Sub-headline */}
          <p className="hero-sub max-w-2xl text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            From GST registration to property deeds and compliance — we handle every legal step with{' '}
            <span className="text-brandPrimary font-medium">transparent pricing</span>,{' '}
            <span className="text-brandAccent font-medium">fast turnaround</span>, and{' '}
            <span className="text-brandSecondary font-medium">expert guidance</span>.
          </p>

          {/* Feature pills */}
          <div className="hero-sub flex flex-wrap justify-center gap-3">
            {pills.map((p, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/8 backdrop-blur-sm px-4 py-1.5 text-sm text-slate-200"
              >
                <span className="text-brandPrimary">{p.icon}</span>
                {p.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-cta flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              className="btn-premium inline-flex items-center gap-2 px-9 py-4 text-base group font-semibold"
            >
              Explore Services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/90 backdrop-blur-sm px-9 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:bg-white hover:border-brandPrimary/40 hover:shadow-[0_0_24px_rgba(255,94,108,0.12)]"
            >
              Free Consultation
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl hero-cta">
            {stats.map((s, i) => (
              <div
                key={i}
                className="hero-stat rounded-2xl border border-white/10 bg-white/6 backdrop-blur-md px-6 py-5 flex flex-col items-center gap-1 transition-all duration-300 hover:bg-white/10 hover:border-brandPrimary/30 hover:shadow-[0_0_20px_rgba(255,94,108,0.12)]"
              >
                <p className="text-3xl md:text-4xl font-heading font-extrabold text-gradient leading-none">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-slate-600 font-medium mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
