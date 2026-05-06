/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg:          '#020617',
        purpleBg:        '#0f172a',
        brandPrimary:    '#ff5e6c',   // Coral Pink
        brandSecondary:  '#feb300',   // Sleuthe Yellow
        brandAccent:     '#ffaaab',   // Pink Leaf
        brandSurface:    '#fff5d7',   // Ragin Beige
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 20% 0%, rgba(255,94,108,0.2), transparent 55%),' +
          'radial-gradient(ellipse 60% 50% at 80% 100%, rgba(255,170,171,0.14), transparent 55%),' +
          'linear-gradient(180deg, #020617 0%, #0a1628 60%, #020617 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'gradient':    'gradientShift 5s linear infinite',
        'float':       'float 14s ease-in-out infinite',
        'pulse-slow':  'pulse 3s ease-in-out infinite',
        'fade-up':     'fadeUp 0.6s ease-out both',
        'spin-slow':   'spinSlow 20s linear infinite',
        'slide-down':  'slideInDown 0.4s ease-out both',
      },
      keyframes: {
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%':   { transform: 'translate(0,0) scale(1) rotate(0deg)',       opacity: '0.45' },
          '33%':  { transform: 'translate(28px,-46px) scale(1.12) rotate(8deg)', opacity: '0.75' },
          '66%':  { transform: 'translate(-18px,18px) scale(0.9) rotate(-6deg)', opacity: '0.55' },
          '100%': { transform: 'translate(0,0) scale(1) rotate(0deg)',       opacity: '0.45' },
        },
        fadeUp: {
          from: { transform: 'translateY(24px)', opacity: '0' },
          to:   { transform: 'translateY(0)',    opacity: '1' },
        },
        slideInDown: {
          from: { transform: 'translateY(-16px)', opacity: '0' },
          to:   { transform: 'translateY(0)',     opacity: '1' },
        },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(255,94,108,0.4)',
        'glow-accent':  '0 0 30px rgba(255,170,171,0.4)',
        'glow-gold':    '0 0 30px rgba(254,179,0,0.4)',
      },
    },
  },
  plugins: [],
};
