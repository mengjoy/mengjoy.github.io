---
title: vite一篇文章总结
date: 2026-10-14
categories:
  - vite
tags:
  - vite
description:  vite学习
---

# Vite是什么？
> 是个打包工具，和webpack一样是个打包工具。webpack出现是解决怎么才能将代码搞成浏览器能用的，vite解决的其实更多是开发阶段如何快速启动。

# 为什么出现？
- 1.没有模块系统
> ESmodule 在2015年才被标准化，以前node出现的commonjs浏览器无法识别，require（commonjs）和import，这种放到script里面运行不了，因为需要将代码中的模块化转成esmodule

- 2.很多语法胎心，浏览器无法直接识别，需要转义成兼容代码
> es6+，ts，jsx，vue这种浏览器都是无法识别的，需要转成可识别的代码

- 3.依赖太多，手动处理会很麻烦
> 很多npm包都会互相引用，比如lodash在很多包里面都有，他们的依赖关系会很复杂，浏览器不会自动解析这些依赖，靠用script引用管理加载顺序，很可能导致全局变量污染问题。

# 做了什么？
- webpack
> 根据入口构建依赖图，loader转译任意资源（css/图片等资源），通过plugin处理（压缩优化，tree-shaking（将未使用的代码丢弃），code spliting，缓存哈希等等）最后输出bundle（将所有资源合并成一个文件/多个文件,大多为js文件，减少网络请求？？）。
- vite
> 在dev和production是不一样的处理方式,在dev是它采用esm模式，很多代码无需打包，而且会对依赖预构建，然后按需编译，根据route编译当前的页面。而在production环境下，则和webpack一样，要进行构建依赖图等过程（所以在production下，其实两个都一样）。vite在dev时采用esbuild快速编译，在production时rollup负责构建时的深度优化。

其实不管是什么工具，他们做的事情都是将很多资源转译为浏览器可识别的代码，会对打包产物进行优化，比如压缩，根据入口进行code slitinng，还有如何让资源更小等等优化方式。