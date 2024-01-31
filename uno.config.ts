import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWind,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      title: 'text-2xl font-bold m-5 p-2',
      link: 'text-primary hover:text-secondary transition underline',
    },
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
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
    },
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
