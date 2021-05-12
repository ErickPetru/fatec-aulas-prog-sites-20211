export default {
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Exemplos para Aulas',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: '#369'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://i18n.nuxtjs.org/
    'nuxt-i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // i18n module configuration: https://i18n.nuxtjs.org/options-reference
  i18n: {
    lazy: true,
    detectBrowserLanguage: {
      cookieKey: 'i18n-locale',
    },
    strategy: 'no_prefix',
    defaultLocale: 'en',
    langDir: 'lang',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.js'
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        name: 'Português',
        file: 'pt.js'
      }
    ],
    vueI18n: {
      fallbackLocale: 'en',
      dateTimeFormats: {
        en: {
          date: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          },

          dateTime: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
          }
        },

        pt: {
          date: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          },

          dateTime: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: 'numeric',
            minute: 'numeric'
          }
        }
      },
      numberFormats: {
        en: {
          integer: { maximumFractionDigits: 0 },
          float: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
          currency: { style: 'currency', currency: 'USD' }
        },
        pt: {
          integer: { maximumFractionDigits: 0 },
          float: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
          currency: { style: 'currency', currency: 'BRL' }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
