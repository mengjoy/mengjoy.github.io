import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import PostList from './PostList.vue'
import HomePage from './HomePage.vue'
import StarfieldBg from './StarfieldBg.vue'
import './style.css'

// 在默认主题基础上：
// - 通过 layout-top 插槽注入全站固定的 Canvas 星空背景层
// - 注册自定义组件：<PostList /> 文章列表、<HomePage /> 首页
export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, {}, {
    'layout-top': () => h(StarfieldBg)
  }),
  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.component('HomePage', HomePage)
  }
} satisfies Theme
