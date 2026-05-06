import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        y: options.y || 50,
        opacity: options.opacity || 0,
        scale: options.scale || 0.95,
      },
      {
        scrollTrigger: {
          trigger: el,
          start: options.start || 'top 80%',
          toggleActions: options.toggleActions || 'play none none reverse',
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: options.duration || 0.8,
        ease: options.ease || 'power3.out',
        delay: options.delay || 0,
        stagger: options.stagger || 0,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [options]);

  return ref;
};
