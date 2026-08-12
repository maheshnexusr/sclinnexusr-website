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
        /* SclinNexus navy, derived from the dark facets of the brand logo */
        navy: {
          50: '#F3F6F8',
          100: '#E5EBEF',
          200: '#C8D4DC',
          300: '#A2B5C1',
          400: '#74909F',
          500: '#52707F',
          600: '#3E5665',
          700: '#2F4350',
          800: '#22333F',
          900: '#1A2831',
          950: '#111B22',
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
