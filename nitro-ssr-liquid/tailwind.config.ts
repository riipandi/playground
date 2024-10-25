import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./server/**/*!(*.stories|*.spec|*.test).{ts,tsx,liquid}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: [...fontFamily.mono],
      },
      colors: {
        /* https://uxplanet.org/alternatives-to-using-pure-black-000000-for-text-and-backgrounds-54ef0e733cdb */
        black: '#0A0A0A',
        brand: colors.indigo,
      },
    },
  },
  plugins: [],
} satisfies Config
