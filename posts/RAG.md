---
title: RAG
date: 2026-10-14
categories:
  - RAG
tags:
  - RAG
description: RAG学习
---
## RAG开发（retrieval-argumented generation 检索增强生成）
> local document -> unstruncted loader -> text -> text chunks -> embedding（将文本转为向量）-> 存入向量数据库
> QUERY -> embedding（将搜索关键词转为向量） -> QUERY VECTOR -> 对比向量数据库中与生成的这个query vector得相似度（返回）
> 根据prompt template 将检索出来的语料结合，返回一个prompt 给llm
> 这样就会得到一个更为准确得答案

### 知识更新 & 知识检索
中间涉及到【文件解析】【文件切割】【知识检索】【知识rerank（不一定用）】
> 

