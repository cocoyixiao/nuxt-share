export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://easytuan.gitee.io/node-elm-api/public/flexible.js' },
    ],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/restApi': {
      target: 'https//api.isoyu.com/api/',
      changeOrigin: true,
      pathRewrite: {
        '^/restApi': '/'
      }
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-seo-meta',
    '@nuxtjs/axios', // 不需要加入proxy
    '@nuxtjs/router'
  ],
  seoMeta: {
    title: 'SEO Meta Demo',
    description: 'SEO Description'
  },
  build: {
    postcss: {
      plugins: {
        // Disable `postcss-url`
        'postcss-url': false,
        // Add some plugins
        'postcss-px2rem': {
          remUnit: 37.5
        }
      }
    }
  }
}
