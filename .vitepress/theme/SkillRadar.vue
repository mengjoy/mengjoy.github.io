<script setup lang="ts">
// =============================================================
// 技能雷达图（按文章数量自动归类，无需手动给技能赋值）
// 原理：读取 posts/ 下所有文章的 frontmatter categories，
//       通过 categoryMap 把文章的「细分类」映射到「技能大类」，
//       统计每个技能大类的文章数 —— 文章数越多，该轴越长。
// 调整归类：只改下面 categoryMap；新增技能维度：在文章里加对应分类即可。
// =============================================================

// 文章细分类 → 技能大类（按需增删/修改；未列出的细分类会直接当作轴名）
const categoryMap: Record<string, string> = {
  Vue: '前端框架',
  vite: '构建工具',
  Agent: 'AI 应用',
  RAG: 'AI 应用',
  算法与数据结构: '算法与数据结构'
}

// 读取 posts 原文（与 PostList 一致的稳定解析方式，避免 VitePress frontmatter 导出坑）
const raws = import.meta.glob('/posts/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

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

// 统计每个技能大类的文章数（取每篇文章的第一个分类做映射）
const skillCounts: Record<string, number> = {}
for (const raw of Object.values(raws)) {
  const fm = parseFrontmatter(raw || '')
  const cats = fm.categories
  if (!Array.isArray(cats) || cats.length === 0) continue
  const skill = categoryMap[cats[0]] ?? cats[0]
  skillCounts[skill] = (skillCounts[skill] ?? 0) + 1
}

// 转数组、过滤 0 篇、按文章数降序
const skills = Object.entries(skillCounts)
  .map(([name, count]) => ({ name, count }))
  .sort((a, b) => b.count - a.count)
  .filter((s) => s.count > 0)

// 以「文章数最多的大类」为满圈，其余按比例缩放，保证少量文章也能看出分布
const maxCount = Math.max(...skills.map((s) => s.count), 1)

// ---- 雷达图几何计算（纯函数，SSR 也能直接渲染）----
const W = 500
const H = 420
const cx = W / 2
const cy = H / 2 - 5
const radius = 140
const levels = 5
const N = Math.max(skills.length, 1)

const angleOf = (i: number) => ((-90 + (360 / N) * i) * Math.PI) / 180
function pointAt(i: number, r: number): [number, number] {
  const a = angleOf(i)
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
}

// 同心网格多边形
const gridPolys = Array.from({ length: levels }, (_, l) => {
  const r = (radius * (l + 1)) / levels
  return skills.map((_, i) => pointAt(i, r).join(',')).join(' ')
})

// 轴线
const axes = skills.map((_, i) => {
  const [x, y] = pointAt(i, radius)
  return { x1: cx, y1: cy, x2: x, y2: y }
})

// 数据多边形：轴长 = (该大类文章数 / 最多文章数) × 半径
const dataPoly = skills
  .map((s, i) => pointAt(i, (radius * s.count) / maxCount).join(','))
  .join(' ')

// 数据点 + 标签（带文字对齐，避免边缘被裁切）
const points = skills.map((s, i) => {
  const [x, y] = pointAt(i, (radius * s.count) / maxCount)
  const [lx, ly] = pointAt(i, radius + 24)
  const cos = Math.cos(angleOf(i))
  let anchor: 'start' | 'middle' | 'end' = 'middle'
  if (cos > 0.3) anchor = 'start'
  else if (cos < -0.3) anchor = 'end'
  return { x, y, lx, ly, anchor, name: s.name, count: s.count }
})
</script>

<template>
  <div class="radar-wrap">
    <svg
      v-if="skills.length"
      :viewBox="`0 0 ${W} ${H}`"
      class="radar"
      role="img"
      aria-label="技能雷达图（按文章数自动统计）"
    >
      <!-- 同心网格 -->
      <polygon v-for="(p, i) in gridPolys" :key="'g' + i" :points="p" class="grid" />
      <!-- 轴线 -->
      <line v-for="(a, i) in axes" :key="'a' + i" :x1="a.x1" :y1="a.y1" :x2="a.x2" :y2="a.y2" class="axis" />
      <!-- 技能多边形 -->
      <polygon :points="dataPoly" class="data" />
      <!-- 数据点 + 标签 + 文章数 -->
      <g v-for="(p, i) in points" :key="'p' + i">
        <circle :cx="p.x" :cy="p.y" r="3.5" class="dot" />
        <text :x="p.lx" :y="p.ly" :text-anchor="p.anchor" class="label">{{ p.name }}</text>
        <text :x="p.lx" :y="p.ly + 15" :text-anchor="p.anchor" class="value">{{ p.count }} 篇</text>
      </g>
    </svg>
    <p v-else class="empty">
      还没有带分类的文章，在 <code>posts/</code> 文章里填好 <code>categories</code> 即可自动统计。
    </p>
  </div>
</template>

<style scoped>
.radar-wrap {
  display: flex;
  justify-content: center;
}
.radar {
  width: 100%;
  max-width: 480px;
  height: auto;
}
.grid {
  fill: none;
  stroke: var(--vp-c-divider);
  stroke-width: 1;
}
.axis {
  stroke: var(--vp-c-divider);
  stroke-width: 1;
}
.data {
  fill: var(--vp-c-brand-1);
  fill-opacity: 0.18;
  stroke: var(--vp-c-brand-1);
  stroke-width: 2;
  stroke-linejoin: round;
}
.dot {
  fill: var(--vp-c-brand-1);
}
.label {
  fill: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 600;
}
.value {
  fill: var(--vp-c-text-2);
  font-size: 11px;
}
.empty {
  color: var(--vp-c-text-2);
  text-align: center;
}
</style>
