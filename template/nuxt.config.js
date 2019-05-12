const path = require('path')
require('dotenv').config()

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | undefined.properties',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Blog' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /**
   * ENV Vars
   */
  env: {},
  /**
   * Axios config
   */
  axios: {
    baseURL: process.env.API_URL
  },
  /*
   ** Load global CSS
   */
  css: ['@/assets/css/tailwind.css'],
  /*
   ** Load nuxt modules
   */
  modules: ['nuxt-purgecss'],
  /*
   ** PurgeCSS
   ** https://github.com/Developmint/nuxt-purgecss
   */
  purgeCSS: {},
  /**
   * Polyfills
   */
  polyfill: {
    features: [
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window
      },
      {
        require: 'resize-observer-polyfill',
        detect: () => 'ResizeObserver' in window
      }
    ]
  },
  /*
   ** This option is given directly to the vue-router Router constructor
   */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  plugins: [
    '~plugins/bowser.client.js',
    '~plugins/rcomps.client.js',
    '~plugins/lazysizes.client.js',
    '~plugins/portals.js'
  ],
  /*
   ** Build configuration
   */
  build: {
    splitChunks: {
      layouts: true
    },

    /*
     ** PostCSS setup
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        'postcss-url': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false
        }
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },
    /*
+    ** Extract CSS
+    */
    extractCSS: true,
    /*
     ** Run ESLint on save
     */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
