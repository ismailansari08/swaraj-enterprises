import { useEffect, useRef } from 'react';

const VantaBirdsBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    let checkInterval = null;
    let attempts = 0;

    const initVanta = () => {
      if (window.VANTA?.BIRDS && vantaRef.current && !vantaEffect.current) {
        try {
          vantaEffect.current = window.VANTA.BIRDS({
            el: vantaRef.current,
            backgroundColor: 0x07192f,
            backgroundAlpha: 1,
            color1: 0xff0000,
            color2: 0x00d1ff,
            colorMode: 'varianceGradient',
            quantity: 5,
            birdSize: 1,
            wingSpan: 30,
            speedLimit: 5,
            separation: 20,
            alignment: 20,
            cohesion: 20,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
          });
          if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
          }
        } catch (error) {
          console.error('Vanta initialization failed:', error);
        }
      }
    };

    initVanta();

    if (!window.VANTA?.BIRDS) {
      checkInterval = window.setInterval(() => {
        attempts += 1;
        initVanta();
        if (attempts >= 20 && checkInterval) {
          clearInterval(checkInterval);
          checkInterval = null;
        }
      }, 250);
    }

    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return <div id="vanta-bg" ref={vantaRef} className="fixed inset-0 -z-20 pointer-events-none" />;
};

export default VantaBirdsBackground;
