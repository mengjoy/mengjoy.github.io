import { defineConfig } from 'vitepress'

// 个人网站配置：分类/文章/简介，内容全部来自 markdown
// 用户型 GitHub Pages（*.github.io）根路径即站点根，base 用默认的 '/'
export default defineConfig({
  title: '个人网站',
  description: '前端开发者的个人网站：分类、文章、简介',
  lang: 'zh-CN',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mengjoy' }
    ],
    footer: {
      message: '用 VitePress 搭建 · 内容由 markdown 驱动',
      copyright: 'Copyright © 2026 mengjoy'
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    outline: { label: '目录' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换浅色',
    darkModeSwitchTitle: '切换深色'
  }
})
