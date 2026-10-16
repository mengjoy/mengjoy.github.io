<script setup lang="ts">
import { computed } from 'vue'

// 用 ?raw 读取 posts/ 下 markdown 的原文，自己解析 frontmatter。
// 这样不依赖 VitePress 内部对 frontmatter 的导出方式，最稳。
const raws = import.meta.glob('/posts/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

interface Post {
  title: string
  date: string
  categories: string[]
  tags: string[]
  url: string
}

// 轻量 frontmatter 解析：支持 `key: 值`、行内数组 `[a, b]`、块列表 `- 项`
function parseFrontmatter(raw: string): Record<string, any> {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return {}
  const data: Record<string, any> = {}
  let curKey: string | null = null
  for (const line of m[1].split(/\r?\n/)) {
    const li = line.match(/^\s*-\s+(.*)$/)
    if (li && curKey) {
      if (!Array.isArray(data[curKey])) data[curKey] = []
      data[curKey].push(li[1].trim().replace(/^["']|["']$/g, ''))
      continue
    }
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (kv) {
      curKey = kv[1]
      const val = kv[2].trim()
      const arr = val.match(/^\[(.*)\]$/)
      if (arr) {
        data[curKey] = arr[1].split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
        curKey = null
      } else if (val === '') {
        data[curKey] = []
      } else {
        data[curKey] = val.replace(/^["']|["']$/g, '')
        curKey = null
      }
    }
  }
  return data
}

const allPosts = computed<Post[]>(() => {
  return Object.entries(raws)
    .map(([path, raw]: [string, string]) => {
      const fm = parseFrontmatter(raw || '')
      const name = path.split('/').pop()!.replace(/\.md$/, '')
      return {
        title: fm.title || name,
        date: fm.date || '',
        categories: fm.categories || ['未分类'],
        tags: fm.tags || [],
        // cleanUrls:true 下文章页生成为 /posts/<name>/index.html，链接用目录形式
        url: `/posts/${name}/`
      }
    })
    .filter((p) => p.date) // 没有 date 的（如列表页本身）不参与
    .sort((a, b) => (a.date < b.date ? 1 : -1))
})

// 全部分类（去重，按出现顺序）
const categories = computed<string[]>(() => {
  const seen = new Set<string>()
  const list: string[] = []
  for (const p of allPosts.value) {
    for (const c of p.categories) {
      if (!seen.has(c)) {
        seen.add(c)
        list.push(c)
      }
    }
  }
  return list
})

// 按分类聚合（静态渲染，全部展示；导航条用锚点跳转到对应分类区块）
const grouped = computed<[string, Post[]][]>(() => {
  const map = new Map<string, Post[]>()
  for (const p of allPosts.value) {
    for (const c of p.categories) {
      if (!map.has(c)) map.set(c, [])
      map.get(c)!.push(p)
    }
  }
  return [...map.entries()]
})

// 分类锚点：跳到 /posts/#分类名 区块（完全静态，无需 JS）
function catAnchor(cat: string) {
  return `#${cat}`
}

function fmt(date: string) {
  return date ? date.slice(0, 10) : ''
}
</script>

<template>
  <!-- 分类导航条：点分类即锚点跳转到对应区块 -->
  <nav class="cat-nav">
    <a href="/posts/">全部</a>
    <a
      v-for="c in categories"
      :key="c"
      :href="catAnchor(c)"
    >{{ c }}</a>
  </nav>

  <p v-if="allPosts.length === 0" class="empty">还没有文章，在 <code>posts/</code> 目录新建一个带 <code>date</code> 的 markdown 试试。</p>

  <div v-for="[cat, list] in grouped" :key="cat" class="cat-block">
    <h2 :id="cat" class="cat-title">
      <a :href="catAnchor(cat)" class="cat-anchor">{{ cat }}</a>
      <span class="cat-count">{{ list.length }}</span>
    </h2>
    <ul class="post-list">
      <li v-for="p in list" :key="p.url" class="post-item">
        <a :href="p.url" class="post-link">{{ p.title }}</a>
        <span class="post-date">{{ fmt(p.date) }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.cat-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 1.5rem;
}
.cat-nav a {
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: all 0.2s;
}
.cat-nav a:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.cat-block {
  margin: 1.5rem 0;
}
.cat-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-left: 4px solid var(--vp-c-brand-1, #3b82f6);
  padding-left: 0.6rem;
  scroll-margin-top: 80px; /* 锚点跳转时为固定导航栏留白 */
}
.cat-anchor {
  color: inherit;
  text-decoration: none;
}
.cat-count {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-default-soft);
  border-radius: 999px;
  padding: 0 0.5rem;
}
.post-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
}
.post-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem 0;
  border-bottom: 1px dashed var(--vp-c-divider);
}
.post-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 500;
}
.post-link:hover {
  color: var(--vp-c-brand-1);
}
.post-date {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}
.empty {
  color: var(--vp-c-text-2);
}
</style>
