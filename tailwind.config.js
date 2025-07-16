/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F4F1E9',
          100: '#E8E3D3',
          200: '#D1C7A7',
          300: '#B1D182',
          400: '#688F4E',
          500: '#2B463C',
          600: '#1F332B',
          700: '#1A2A23',
          800: '#151F1C',
          900: '#0F1514',
        },
        accent: {
          50: '#FDF6E9',
          100: '#FAEDD3',
          200: '#F6DBA7',
          300: '#F1C97B',
          400: '#ECB64F',
          500: '#E8A423',
          600: '#C88A1D',
          700: '#A87317',
          800: '#885C11',
          900: '#67450B',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
