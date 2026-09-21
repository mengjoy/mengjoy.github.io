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

// 只拷贝构建产物到根目录（不碰 .git / node_modules / 源码）
const skip = new Set(['.git', 'node_modules', '.vitepress', 'package.json', 'package-lock.json', 'scripts'])
for (const entry of fs.readdirSync(dist)) {
  if (skip.has(entry)) continue
  const src = path.join(dist, entry)
  const dest = path.join(root, entry)
  fs.cpSync(src, dest, { recursive: true, force: true })
}
console.log('已同步构建产物到仓库根目录 ✅')

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
