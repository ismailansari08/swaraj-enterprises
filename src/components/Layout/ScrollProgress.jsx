import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
        className="fixed top-0 left-0 z-[60] h-[3px] origin-left transition-transform duration-100"
        style={{
          width: '100%',
          transform: `scaleX(${progress / 100})`,
          background: 'linear-gradient(90deg, #ff5e6c, #ffaaab, #feb300)',
          boxShadow: '0 0 12px rgba(255,94,108,0.7), 0 0 24px rgba(255,170,171,0.4)',
        }}
      />

      {/* Glowing tip */}
      <div
        className="fixed top-0 z-[61] h-[3px] w-6 rounded-full pointer-events-none"
        style={{
          left: `calc(${progress}% - 24px)`,
          background: '#feb300',
          boxShadow: '0 0 10px 3px rgba(254,179,0,0.9)',
          transition: 'left 100ms linear',
          opacity: progress > 1 && progress < 99 ? 1 : 0,
        }}
      />
    </>
  );
};

export default ScrollProgress;
