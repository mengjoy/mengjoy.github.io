import { defineConfig } from 'vitepress'

// 个人网站配置：分类/文章/简介，内容全部来自 markdown
// 用户型 GitHub Pages（*.github.io）根路径即站点根，base 用默认的 '/'
export default defineConfig({
  title: '个人网站',
  description: '前端开发者的个人网站：分类、文章、简介',
  lang: 'zh-CN',
  lastUpdated: true,
  // 关键：生成 /about/ -> about/index.html 这种目录形态，
  // 否则 GitHub Pages 等静态托管访问 /about/ 会 404
  cleanUrls: true,

  // 环境 workaround：本机 Node 被注入了 safe-delete shim，
  // 构建时清空 dist 会触发它调 genie-trash 失败、导致 build 中断。
  // 关闭 emptyOutDir，改为直接覆盖；旧产物由 deploy 脚本清理。
  vite: {
    build: {
      emptyOutDir: false
    }
  },

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
    lastUpdated: { text: '最近更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换浅色',
    darkModeSwitchTitle: '切换深色'
  }
})
