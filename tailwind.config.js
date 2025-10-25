/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00adf5',
        'deep-charcoal': '#1a1a1a',
        'accent-blue': '#0095d9',
        'light-blue': '#33bdff',
        'true-black': '#0a0a0a',
        'pure-white': '#ffffff',
      },
      fontFamily: {
        'display': ['Druk', 'Impact', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Druk', 'Impact', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontSize: {
        'h1': '72px',
        'h2': '48px',
        'h3': '32px',
        'h4': '24px',
        'body-lg': '20px',
        'body': '18px',
        'body-sm': '16px',
        'caption': '14px',
        'tiny': '12px',
      },
      lineHeight: {
        'display': '1.1',
        'body': '1.6',
        'compact': '1.4',
      },
      boxShadow: {
        'blue-glow': '0 10px 40px rgba(0, 173, 245, 0.3)',
        'blue-glow-lg': '0 20px 60px rgba(0, 173, 245, 0.4)',
        'cyan-glow': '0 10px 30px rgba(51, 189, 255, 0.3)',
      },
      transitionTimingFunction: {
        'out-quick': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #00adf5 0%, #33bdff 100%)',
        'velocity-trail': 'linear-gradient(135deg, #00adf5 0%, #33bdff 100%)',
      },
    },
  },
  plugins: [],
}
