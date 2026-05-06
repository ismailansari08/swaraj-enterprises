import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setVisible(scrolled > 400);
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // SVG circle params
  const r = 20;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-40 h-12 w-12 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandPrimary group ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Circular progress ring */}
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox="0 0 48 48"
        width="48"
        height="48"
        aria-hidden="true"
      >
        {/* Track */}
        <circle cx="24" cy="24" r={r} fill="none" strokeWidth="2.5" stroke="rgba(255,255,255,0.1)" />
        {/* Progress */}
        <circle
          cx="24" cy="24" r={r}
          fill="none"
          strokeWidth="2.5"
          stroke="url(#scrollGrad)"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.15s linear' }}
        />
        <defs>
          <linearGradient id="scrollGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5e6c" />
            <stop offset="100%" stopColor="#ffaaab" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glass background + icon */}
      <span className="absolute inset-1.5 flex items-center justify-center rounded-full border border-white/15 bg-white/8 backdrop-blur-md transition-all duration-300 group-hover:bg-white/18 group-hover:border-brandPrimary/40 group-hover:shadow-[0_0_20px_rgba(255,94,108,0.3)]">
        <ArrowUp size={16} className="text-slate-700 group-hover:text-brandPrimary transition-colors group-hover:-translate-y-0.5 duration-300" />
      </span>
    </button>
  );
};

export default ScrollToTop;
