/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#7852a9',
        'deep-charcoal': '#1a1a1a',
        'accent-pink': '#ff3366',
        'light-purple': '#9b7bb5',
        'true-black': '#0a0a0a',
        'pure-white': '#ffffff',
      },
      fontFamily: {
        'display': ['Druk Wide', 'Impact', 'sans-serif'],
        'body': ['Inter Variable', 'Inter', 'sans-serif'],
        'accent': ['Monument Extended', 'Arial Black', 'sans-serif'],
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
        'purple-glow': '0 10px 40px rgba(120, 82, 169, 0.3)',
        'purple-glow-lg': '0 20px 60px rgba(120, 82, 169, 0.4)',
        'mint-glow': '0 10px 30px rgba(0, 255, 136, 0.3)',
      },
      transitionTimingFunction: {
        'out-quick': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #7852a9 0%, #9b7bb5 100%)',
        'velocity-trail': 'linear-gradient(135deg, #7852a9 0%, #ff3366 100%)',
      },
    },
  },
  plugins: [],
}
