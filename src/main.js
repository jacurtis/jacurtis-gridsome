// This is the main.js file. Import global CSS and scripts here
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/styles.scss'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Adobe Fonts (aka TypeKit) Script
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/okq6dhr.css'
  })
}
