import DefaultTheme from 'vitepress/theme'
import MyHome from './components/MyHome.vue'
import MyLink from './components/MyLink.vue'
import './style/custom.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyHome', MyHome)
    app.component('MyLink', MyLink)
  },
}
