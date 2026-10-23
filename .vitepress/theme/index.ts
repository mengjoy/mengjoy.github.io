import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PostList from './PostList.vue'
import HomePage from './HomePage.vue'

// 在默认主题基础上注册自定义组件：
// - <PostList /> 自动列出 posts/ 下所有文章（按分类聚合）
// - <HomePage /> 首页（hero + features + 技能雷达图）
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.component('HomePage', HomePage)
  }
} satisfies Theme
