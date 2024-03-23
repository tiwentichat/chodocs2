import { inBrowser, useRoute } from 'vitepress'
import type { useData, EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { nextTick, onMounted, watch } from 'vue'
import busuanzi from 'busuanzi.pure.js'
import mediumZoom from 'medium-zoom'
import { registerAnalytics, siteIds, trackPageview } from './plugins/baidutongji'
import googleAnalytics from './plugins/googleAnalytics'

import { h, watch } from 'vue'
import './styles/main.css'
import './styles/global.css'
import './styles/demo.css'
import './styles/utils.css'
import './styles/vars.css'
import 'uno.css'

if (inBrowser)
  import('./plugins/pwa')

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ router }: EnhanceAppContext) {
    googleAnalytics({
      id: 'G-0F3DLK5BSG',
    })
    if (inBrowser) {
      registerAnalytics(siteIds)

      window.addEventListener('hashchange', () => {
        const { href: url } = window.location
        trackPageview(siteIds, url)
      })

      router.onAfterRouteChanged = (to) => {
        trackPageview(siteIds, to)
        busuanzi.fetch()
      }
    }
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // Should there be a new?
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props, {
      /**
       * 相关插槽
       * https://vitepress.dev/guide/extending-default-theme#layout-slots
       * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
       */
      'nav-bar-title-after': () => h(MNavVisitor),
      'doc-after': () => h(MDocFooter),
      'aside-bottom': () => h(MAsideSponsors)
    })
  },
