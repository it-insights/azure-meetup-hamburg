// @unocss-include

import {
  defineConfig,
  presetUno,
  presetWebFonts,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-base': 'bg-white dark:bg-black',
    'border-base': 'border-gray-200 dark:border-gray-800',
    'font-base': 'font-roboto text-black dark:text-white',
  },
  safelist: [
    'line-clamp-2',
    'line-clamp-3',
  ],
  presets: [
    presetAttributify(),
    presetUno({
      dark: 'class',
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Roboto',
        serif: 'PT Serif',
        roboto: [
          {
            name: 'Roboto',
            weights: ['300', '400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
