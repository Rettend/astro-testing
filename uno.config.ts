import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWind,
  transformerDirectives,
  presetAttributify,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'i-logo': 'i-logos-astro w-6em h-6em transform transition-800' },
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [
    presetUno(),
    presetWind(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAttributify(),
  ],
  theme: {
    colors: {
      background: '#1F2937',
      text: '#fff',
      primary: '#FF5700',
      secondary: '#FF9500',
    }
  },
  preflights: [
    {
      getCSS: ({ theme }) => {
        const t = theme as any

        return `
          body {
            background: ${t.colors.background};
            color: ${t.colors.text};
          }

          html, body {
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
          }
        `
      },
    },
  ],
})
