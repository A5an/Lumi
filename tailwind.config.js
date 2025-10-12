/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: 'var(--container-pad)',
        sm: 'var(--container-pad-sm)',
        lg: 'var(--container-pad-lg)',
        xl: 'var(--container-pad-xl)',
        '2xl': 'var(--container-pad-2xl)'
      }
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        muted: 'var(--color-muted)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        ring: 'var(--color-ring)'
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
        btn: 'var(--shadow-btn)'
      },
      borderRadius: {
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        pill: '9999px'
      },
      screens: {
        'xs': '480px'
      },
      transitionTimingFunction: {
        'hero': 'var(--ease-hero)',
        'hover': 'var(--ease-hover)'
      }
    }
  },
  plugins: []
};
