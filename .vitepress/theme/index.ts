import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PostList from './PostList.vue'

// 在默认主题基础上，注册一个 <PostList /> 组件。
// 这样在任意 markdown 里写 <PostList /> 就能自动列出 posts/ 下所有文章（按分类聚合）。
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
  }
} satisfies Theme
