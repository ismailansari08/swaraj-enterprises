/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg':       '#FFFFFF',
        'secondary-bg':     '#F8F8F8',
        'card-bg':          '#FFFFFF',
        'primary-accent':   '#E60012', 
        'hover-red':        '#FF2D2D',
        'primary-text':     '#111111',
        'secondary-text':   '#666666',
        'muted-text':       '#999999',
        'border-color':     '#E5E5E5',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'premium': '12px',
      },
      animation: {
        'fade-up':     'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in':     'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to:   { transform: 'translateY(0)',    opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-hover': '0 20px 40px -4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
