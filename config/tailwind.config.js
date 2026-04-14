/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './app/views/**/*.{erb,html}',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],

  // Safelist ensures these classes are ALWAYS included in the compiled CSS,
  // even if Tailwind's scanner doesn't detect them (e.g. inside SVGs or dynamic usage).
  safelist: [
    'text-primary',
    'text-primary-dark',
    'bg-primary',
    'bg-primary-dark',
    'ring-primary',
    'border-primary',
    'focus:ring-primary',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5A5F',
          dark: '#FF385C',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
