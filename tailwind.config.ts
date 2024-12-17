// tailwind.config.ts
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MalvenRegular', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
