import plugin from 'tailwindcss/plugin'
import type { Config, PluginAPI } from 'tailwindcss/types/config'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    plugin(function ({
      addUtilities,
    }: {
      addUtilities: PluginAPI['addUtilities']
    }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 3.5px 3px rgba(0, 0, 0, 0.4)',
        },
      })
    }),
  ],
  theme: {
    extend: {
      colors: {
        background: '#302238',
        'background-hover': '#211527',
        primary: '#BD89FF',
        secondary: '#FF9A3E',
        tertiary: '#EF4A72',
      },
    },
  },
} satisfies Config
