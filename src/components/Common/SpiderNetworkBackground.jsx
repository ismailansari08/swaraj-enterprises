import { useEffect } from 'react';

const SpiderNetworkBackground = () => {
  useEffect(() => {
    // 1. Double render check
    if (document.getElementById('spider-network-bg')) return;

    // 2. Canvas creation
    const canvas = document.createElement('canvas');
    canvas.id = 'spider-network-bg';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1; 
      pointer-events: none;
      background: transparent;
    `;
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    
    // THEME CONFIG: Light Gray for White Theme
    const THEME_RGB = '200, 200, 200'; 
    const isMobile = window.innerWidth < 768;
    const NUM = isMobile ? 12 : 25; // Drastically reduce on mobile for performance
    const MAX_DIST = isMobile ? 120 : 200;
    const MOUSE_DIST = isMobile ? 80 : 120;

    let mouse = { x: -999, y: -999, active: false };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; });
    window.addEventListener('mouseleave', () => { mouse.active = false; });
    window.addEventListener('touchmove', e => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; mouse.active = true; }, { passive: true });

    // Node definition
    const nodes = Array.from({ length: NUM }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.4),
      vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.4),
      r: Math.random() * 1.5 + 0.5,
      z: 0.2 + Math.random() * 0.8,
      pulse: Math.random() * Math.PI * 2,
    }));

    // DRAW LINE: Glow logic
    function drawLine(x1, y1, x2, y2, alpha, z) {
      const w = 0.5 + z * 0.8;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      // Outer glow
      ctx.strokeStyle = `rgba(${THEME_RGB}, ${alpha * 0.15})`;
      ctx.lineWidth = w * 3;
      ctx.stroke();
      // Inner core
      ctx.strokeStyle = `rgba(${THEME_RGB}, ${alpha * 0.6})`;
      ctx.lineWidth = w * 0.5;
      ctx.stroke();
    }

    // DRAW NODE: Glowing stars
    function drawNode(x, y, r, alpha, z) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r * 4 * z);
      g.addColorStop(0, `rgba(${THEME_RGB}, ${alpha * 0.4})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.beginPath();
      ctx.arc(x, y, r * 4 * z, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${THEME_RGB}, ${alpha})`;
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n, i) => {
        n.x += n.vx;
        n.y += n.vy;

        // Bounce logic
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const limit = MAX_DIST * ((n.z + m.z) / 2);

          if (dist < limit) {
            const alpha = (1 - dist / limit) * n.z * m.z;
            drawLine(n.x, n.y, m.x, m.y, alpha, (n.z + m.z) / 2);
          }
        }

        // Mouse interaction
        if (mouse.active) {
          const dx = n.x - mouse.x, dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_DIST) {
            const alpha = (1 - dist / MOUSE_DIST) * 0.8;
            drawLine(n.x, n.y, mouse.x, mouse.y, alpha, n.z);
            // Subtle attraction
            n.x += (mouse.x - n.x) * 0.01;
            n.y += (mouse.y - n.y) * 0.01;
          }
        }

        drawNode(n.x, n.y, n.r, n.z * 0.8, n.z);
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      const el = document.getElementById('spider-network-bg');
      if (el) el.remove(); // Clean up the canvas element
      window.removeEventListener('resize', resize);
    };
  }, []);

  return null;
};

export default SpiderNetworkBackground;
