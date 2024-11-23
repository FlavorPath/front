import { defineConfig } from '@pandacss/dev';
import { textStyles } from './src/styles/commonStyle/textStyle';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
    },
    tokens: {
      colors: {
        primary: {
          main: { value: '#ff8700' },
          hover: { value: '#ff870078' },
        },
        secondary: {
          red: { value: '#ff0000' },
          black: { value: '#000' },
        },
        background: {
          base: { value: '#f3f3f3' },
          lightgray: { value: '#ebebeb' },
          gray: { value: '#d9d9d9' },
        },
      },
      fontWeights: {
        light: { value: '300' },
        medium: { value: '500' },
        bold: { value: '700' },
      },
      spacing: {
        full: { value: '30px' },
        half: { value: '15px' },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
