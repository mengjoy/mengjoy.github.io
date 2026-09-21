---
title: 用 VitePress 搭个人网站
date: 2026-09-21
categories:
  - 技术
tags:
  - VitePress
  - 前端
description: 记录如何用 VitePress 搭一个只靠 markdown 更新的极简个人网站。
---

# 用 VitePress 搭个人网站

这是一篇示例文章，用来验证"写 markdown → 自动出现在文章列表和分类页"的链路。

## 为什么选 VitePress

- 写 **markdown** 就能更新内容，不用碰 HTML
- 分类、标签、归档页自动生成
- 构建产物是纯静态，直接丢 GitHub Pages 就能上线

## 怎么写一篇新文章

1. 在 `posts/` 目录下新建一个 `.md` 文件
2. 在最上面写好前置信息（标题、日期、分类）
3. 本地 `npm run dev` 预览，满意了 `npm run build` 提交即可

> 就这么简单，不花哨，但该有的都有。
