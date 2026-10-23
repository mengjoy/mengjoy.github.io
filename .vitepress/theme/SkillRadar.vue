<script setup lang="ts">
// =============================================================
// 技能数据：按你自己的内容/项目经验给每个技能一个 0~100 的熟练度即可。
// 想加减技能，直接增删下面数组里的条目，图形会自动重排。
// =============================================================
const skills = [
  { name: '前端框架', value: 90 },   // Vue2/3、Element UI
  { name: '构建工具', value: 82 },   // Vite、vue-cli、Webpack
  { name: 'JS / TS', value: 85 },   // 6 年前端主力语言
  { name: '数据可视化', value: 72 }, // ECharts
  { name: '算法与数据结构', value: 68 }, // 自学 + 刷题
  { name: 'Python', value: 60 },    // 1 年，会用未深究底层
  { name: '云与部署', value: 58 },  // AWS 使用层面、GitHub Pages
  { name: 'AI 应用', value: 62 }    // Agent / 模型接入调试
]

// ---- 雷达图几何计算（纯函数，SSR 也能直接渲染）----
const W = 500
const H = 420
const cx = W / 2
const cy = H / 2 - 5
const radius = 140
const levels = 5
const N = skills.length

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

// 数据多边形（技能多边形）
const dataPoly = skills
  .map((s, i) => pointAt(i, (radius * s.value) / 100).join(','))
  .join(' ')

// 数据点 + 标签（带文字对齐，避免边缘被裁切）
const points = skills.map((s, i) => {
  const [x, y] = pointAt(i, (radius * s.value) / 100)
  const [lx, ly] = pointAt(i, radius + 24)
  const cos = Math.cos(angleOf(i))
  let anchor: 'start' | 'middle' | 'end' = 'middle'
  if (cos > 0.3) anchor = 'start'
  else if (cos < -0.3) anchor = 'end'
  return { x, y, lx, ly, anchor, name: s.name, value: s.value }
})
</script>

<template>
  <div class="radar-wrap">
    <svg :viewBox="`0 0 ${W} ${H}`" class="radar" role="img" aria-label="技能雷达图">
      <!-- 同心网格 -->
      <polygon v-for="(p, i) in gridPolys" :key="'g' + i" :points="p" class="grid" />
      <!-- 轴线 -->
      <line v-for="(a, i) in axes" :key="'a' + i" :x1="a.x1" :y1="a.y1" :x2="a.x2" :y2="a.y2" class="axis" />
      <!-- 技能多边形 -->
      <polygon :points="dataPoly" class="data" />
      <!-- 数据点 + 标签 + 数值 -->
      <g v-for="(p, i) in points" :key="'p' + i">
        <circle :cx="p.x" :cy="p.y" r="3.5" class="dot" />
        <text :x="p.lx" :y="p.ly" :text-anchor="p.anchor" class="label">{{ p.name }}</text>
        <text :x="p.lx" :y="p.ly + 15" :text-anchor="p.anchor" class="value">{{ p.value }}</text>
      </g>
    </svg>
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
</style>
