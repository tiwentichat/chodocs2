import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { generateSitemap as sitemap } from 'sitemap-ts'
import { description, docsVersion, github, keywords, name, site } from './meta'
import { genFeed } from './plugins/genFeed'
import { pwa } from './plugins/pwa'
import sidebar from './sidebar'
import socialLinks from './link'
import algolia from './algolia'

export default withPwa(defineConfig({
  pwa,
  outDir: '../dist',
  title: name,
  description,
  appearance: 'dark',
  lastUpdated: true,
  useWebFonts: false,
  markdown: {
    lineNumbers: true,
  },
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
  themeConfig: {
    logo: './chodocs-logo.svg',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '最后一次更新于',
    footer: {
      message: `祝你拿到称心如意的Offer！`,
      copyright: `<a target="_blank" href="https://getoffer.help">GetOffer.Help</a> | 版权所有 © ${new Date().getFullYear()} `,
    },
    
    // algolia搜索
    search: {
      provider: 'algolia',
      options: algolia,
    },
    sidebar,
    socialLinks,
  },
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'keywords', content: keywords }],
    ['meta', { name: 'author', content: 'Choi Yang' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'apple-mobile-web-app-title', content: name }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/chodocs-logo.svg', color: '#06f' }],
    ['meta', { name: 'theme-color', content: '#06f' }],

    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/icons/apple-touch-icon.png' }],

    // webfont
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    // og
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: site }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    // analytics
    ['script', { 'async': '', 'defer': '', 'data-website-id': `${process.env.UMAMI_WEBSITE_ID || ''}`, 'src': `${process.env.UMAMI_ENDPOINT || ''}` }],
  ],
  async buildEnd(siteConfig) {
    await sitemap({ hostname: 'https://getoffer.help/' })
    await genFeed(siteConfig)
  },
}))
