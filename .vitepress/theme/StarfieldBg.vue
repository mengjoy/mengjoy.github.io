<template>
  <!-- 全站固定背景层：深空渐变 + Canvas 动态星点。
       pointer-events:none 保证不挡任何点击；z-index 由全局样式压在内容之下。 -->
  <div class="starfield">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let raf = 0
let stars: {
  x: number
  y: number
  z: number // 深度 0.2~1，越大越近、越大、越快
  r: number
  a: number // 闪烁相位
  tw: number // 闪烁速度
}[] = []
let w = 0
let h = 0
let dpr = 1
let running = true

function resize() {
  const c = canvasRef.value
  if (!c) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  w = window.innerWidth
  h = window.innerHeight
  c.width = w * dpr
  c.height = h * dpr
  c.style.width = w + 'px'
  c.style.height = h + 'px'
  ctx = c.getContext('2d')
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  initStars()
}

function initStars() {
  // 密度随屏幕面积自适应，控制总量避免低端机卡顿
  const raw = Math.round((w * h) / 8000)
  const n = Math.max(90, Math.min(240, raw))
  stars = []
  for (let i = 0; i < n; i++) {
    const z = Math.random() * 0.8 + 0.2
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      z,
      r: z * 1.5 + 0.3,
      a: Math.random() * Math.PI * 2,
      tw: Math.random() * 0.02 + 0.006
    })
  }
}

function draw() {
  if (!ctx) return
  ctx.clearRect(0, 0, w, h)
  for (const s of stars) {
    // 缓慢向下漂移，落到底部回到顶部（模拟宇宙视角下的流动）
    s.y += s.z * 0.12
    if (s.y > h + 2) {
      s.y = -2
      s.x = Math.random() * w
    }
    s.a += s.tw
    const alpha = 0.35 + Math.abs(Math.sin(s.a)) * 0.65 * s.z
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    // 近处偏白蓝、远处偏冷蓝，营造层次
    ctx.fillStyle = `rgba(205, 222, 255, ${alpha.toFixed(3)})`
    ctx.fill()
  }
  raf = requestAnimationFrame(draw)
}

function onVisibility() {
  if (document.hidden) {
    cancelAnimationFrame(raf)
    running = false
  } else if (!running) {
    running = true
    draw()
  }
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  document.addEventListener('visibilitychange', onVisibility)
  draw()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
  document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<style scoped>
.starfield {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 60% 50% at 18% 12%, rgba(70, 92, 180, 0.30), transparent 60%),
    radial-gradient(ellipse 55% 45% at 82% 82%, rgba(130, 70, 175, 0.26), transparent 60%),
    linear-gradient(165deg, #05060f 0%, #0a0e23 45%, #070a18 100%);
}
canvas {
  display: block;
}
</style>
