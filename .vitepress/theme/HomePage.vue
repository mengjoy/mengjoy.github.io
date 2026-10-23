<script setup lang="ts">
import SkillRadar from './SkillRadar.vue'

// 首页 features 卡片（与之前首页一致，整张卡片可点）
const features = [
  { title: '分类', details: '按分类浏览全部文章', link: '/posts/', linkText: '浏览分类' },
  { title: '文章', details: '技术笔记与踩坑记录', link: '/posts/', linkText: '阅读文章' },
  { title: '简介', details: '关于我与联系方式', link: '/about/', linkText: '关于我' }
]
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <header class="hero">
      <h1 class="name">mengjoy</h1>
      <p class="text">个人网站</p>
      <p class="tagline">记录技术与生活</p>
      <div class="actions">
        <a class="btn brand" href="/posts/">文章列表</a>
        <a class="btn alt" href="/about/">关于我</a>
      </div>
    </header>

    <!-- Features -->
    <section class="features">
      <a v-for="f in features" :key="f.title" class="card" :href="f.link">
        <h3>{{ f.title }}</h3>
        <p>{{ f.details }}</p>
        <span class="more">{{ f.linkText }} →</span>
      </a>
    </section>

    <!-- 技能树（雷达图） -->
    <section class="skills">
      <h2>技能树</h2>
      <p class="skills-sub">雷达图按各技能方向下的文章数量自动统计生成，轴越长代表该方向文章越多。</p>
      <SkillRadar />
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 980px;
  margin: 0 auto;
  padding: 24px 24px 64px;
}
.hero {
  text-align: center;
  padding: 48px 0 24px;
}
.name {
  font-size: 52px;
  font-weight: 800;
  letter-spacing: -1px;
  margin: 0;
}
.text {
  font-size: 28px;
  font-weight: 700;
  margin: 8px 0 0;
}
.tagline {
  color: var(--vp-c-text-2);
  font-size: 16px;
  margin: 8px 0 0;
}
.actions {
  margin-top: 24px;
  display: flex;
  gap: 12px;
  justify-content: center;
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}
.btn.brand {
  background: var(--vp-c-brand-1);
  color: #fff;
}
.btn.brand:hover {
  background: var(--vp-c-brand-2);
}
.btn.alt {
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}
.btn.alt:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 40px 0;
}
.card {
  display: block;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.2s;
}
.card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}
.card h3 {
  margin: 0 0 8px;
  font-size: 18px;
}
.card p {
  margin: 0 0 12px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}
.more {
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 600;
}

.skills {
  margin-top: 56px;
  text-align: center;
}
.skills h2 {
  font-size: 26px;
  margin: 0 0 4px;
}
.skills-sub {
  color: var(--vp-c-text-2);
  font-size: 14px;
  margin: 0 0 16px;
}
</style>
