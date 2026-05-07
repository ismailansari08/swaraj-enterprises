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
      className={`fixed bottom-28 right-6 z-40 h-14 w-14 transition-all duration-500 focus:outline-none group ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Circular progress ring */}
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox="0 0 48 48"
        width="56"
        height="56"
        aria-hidden="true"
      >
        {/* Track */}
        <circle cx="24" cy="24" r={r} fill="none" strokeWidth="2" stroke="rgba(0,0,0,0.05)" />
        {/* Progress */}
        <circle
          cx="24" cy="24" r={r}
          fill="none"
          strokeWidth="2.5"
          stroke="#E60012"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
      </svg>

      {/* Glass background + icon */}
      <span className="absolute inset-2 flex items-center justify-center rounded-full border border-border-color bg-white/90 backdrop-blur-md shadow-xl transition-all duration-300 group-hover:bg-primary-accent group-hover:border-primary-accent group-hover:shadow-primary-accent/30">
        <ArrowUp size={20} className="text-primary-text group-hover:text-white transition-all duration-300 group-hover:-translate-y-1" />
      </span>
    </button>
  );
};

export default ScrollToTop;
