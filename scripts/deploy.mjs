// 部署脚本：把 VitePress 构建产物(.vitepress/dist) 同步到仓库根目录，
// 然后 git 提交。不自动 push，远程推送由你手动确认。
//
// 用法：
//   npm run build      # 先构建
//   npm run deploy     # 再执行本脚本（拷贝 + 提交）
//   npm run deploy -- -m "更新文章"   # 自定义提交信息

import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const root = process.cwd()
const dist = path.join(root, '.vitepress', 'dist')

if (!fs.existsSync(dist)) {
  console.error('未找到 .vitepress/dist，请先运行 npm run build')
  process.exit(1)
}

// 把构建产物里的 *.html（除 index.html / 404.html）转成 <name>/index.html 目录形态。
// 原因：VitePress 的 cleanUrls 只改链接形态(/about/)，物理文件仍是 about.html；
// 而 GitHub Pages 等静态托管访问 /about/ 时找的是 about/index.html，否则 404。
function htmlToDirForm(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      htmlToDirForm(full)
    } else if (entry.name.endsWith('.html') && entry.name !== 'index.html' && entry.name !== '404.html') {
      const name = entry.name.replace(/\.html$/, '')
      const targetDir = path.join(dir, name)
      fs.mkdirSync(targetDir, { recursive: true })
      fs.renameSync(full, path.join(targetDir, 'index.html'))
    }
  }
}
htmlToDirForm(dist)
console.log('已将页面转为目录形态(about/ index.html) ✅')

// 只拷贝构建产物到根目录（不碰 .git / node_modules / 源码）
const skip = new Set(['.git', 'node_modules', '.vitepress', 'package.json', 'package-lock.json', 'scripts'])
for (const entry of fs.readdirSync(dist)) {
  if (skip.has(entry)) continue
  const src = path.join(dist, entry)
  const dest = path.join(root, entry)
  fs.cpSync(src, dest, { recursive: true, force: true })
}
console.log('已同步构建产物到仓库根目录 ✅')

// 关键：GitHub Pages 默认会用 Jekyll 处理仓库。必须加 .nojekyll 关闭它，
// 否则 Jekyll 不认识 VitePress 产物，会生成一个空的默认站点（正是你线上看到的现象）。
fs.writeFileSync(path.join(root, '.nojekyll'), '')
console.log('已写入 .nojekyll（关闭 Jekyll）✅')

// 解析提交信息
const idx = process.argv.indexOf('-m')
const msg = idx !== -1 ? process.argv[idx + 1] : `site update: ${new Date().toISOString().slice(0, 10)}`

try {
  execSync('git add -A', { stdio: 'inherit' })
  execSync(`git commit -m "${msg}"`, { stdio: 'inherit' })
  console.log(`已提交（未推送）。需要上线请运行：git push origin main`)
} catch (e) {
  console.log('提交步骤跳过（可能无改动或需先处理冲突）。构建产物已就位，可手动提交。')
}
