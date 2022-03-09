import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: false,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {}
  },
  plugins: [formsPlugin]
})
