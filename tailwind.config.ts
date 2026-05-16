import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'forest-deep': '#1d3023',
        'forest':      '#506054',
        'moss':        '#9ba781',
        'pewter':      '#afc1cb',
        'earth':       '#341c12',
        'rust':        '#b94a26',
        'rust-deep':   '#9a3d20',
        'teal':        '#2d6a6e',
        'ivory':       '#f4efe6',
        'ivory-2':     '#ece6d9',
        'cream':       '#f1ebde',
      },
      fontFamily: {
        sans: ['Mona Sans', 'Manrope', 'Helvetica Neue', 'sans-serif'],
        display: ['Mona Sans', 'Manrope', 'Helvetica Neue', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
