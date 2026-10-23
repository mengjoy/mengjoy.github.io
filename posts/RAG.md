---
title: RAG
date: 2026-10-14
categories:
  - RAG
tags:
  - RAG
description: RAG学习
---
## RAG开发（retrieval-argumented generation 检索增强生成）一个完整的流水线包含的步骤。
> local document -> unstruncted loader -> text -> text chunks -> embedding（将文本转为向量）-> 存入向量数据库
> QUERY -> embedding（将搜索关键词转为向量） -> QUERY VECTOR -> 对比向量数据库中与生成的这个query vector得相似度（返回）
> 根据prompt template 将检索出来的语料结合，返回一个prompt 给llm
> 这样就会得到一个更为准确得答案

### 知识更新 & 知识检索
中间涉及到【文件解析】【文件切割】【知识检索】【知识rerank（不一定用）】

### RAG主要解决了什么问题？
- 解决了幻觉问题：llm有幻觉，她通过搜索相似的内容，并拼接在prompt中会让回答更加准确一些。
- 解决信息不是最新的问题：她大多回答会取决于训练数据的时效性
- 解决了从头训练或者微调，直接为大模型接了个外机知识库
但其实现在很少用了，1. 上下文窗口已经很大了，幻觉和性能瓶颈有很多问题，比如对于文档的读取，切片等等处理有瓶颈。2.维护成本比较高，准确率需要引进更多的技术解决。
agent多了更多的新内容，比如工具调用等等又快又能减少一些额外开发。
但对于海量动态数据以及数据隐私的场景，rag还是核心技术。


