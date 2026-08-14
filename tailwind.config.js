/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--c-primary-50) / <alpha-value>)',
          100: 'rgb(var(--c-primary-100) / <alpha-value>)',
          200: 'rgb(var(--c-primary-200) / <alpha-value>)',
          600: 'rgb(var(--c-primary-600) / <alpha-value>)',
          700: 'rgb(var(--c-primary-700) / <alpha-value>)',
          800: 'rgb(var(--c-primary-800) / <alpha-value>)',
          900: 'rgb(var(--c-primary-900) / <alpha-value>)',
        },
        /* ProEDC navy, derived from the deep-blue facets of the brand logo */
        navy: {
          50: '#F5FAFF',
          100: '#E8F1FA',
          200: '#D9E8F5',
          300: '#A9C2DB',
          400: '#7C97B5',
          500: '#5D6B82',
          600: '#3D4E6B',
          700: '#24344F',
          800: '#142642',
          900: '#091A33',
          950: '#061226',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
