---
title: 'Code-Mixed and Multilingual Information Retrieval'
summary: 'Multilingual users often mix languages in their search queries, yet dense retrievers are usually evaluated on monolingual ones. We study how mixed-language queries behave in multilingual dense retrieval, and when mixing helps or hurts.'
tags: ['Information Retrieval', 'Dense Retrieval', 'Multilingual', 'Code-Mixing']
year: 2026
# Project page creation date; each publication retains its own publication date.
date: '2026-11-03'
featured: true
# WING contributors; full author lists appear in the associated publications.
authors: ['tongyao', 'chaoming', 'min']
image:
  caption: 'Monolingual, word-mixed, and embedding-mixed query representations retrieving from a shared document corpus.'
  focal_point: 'Smart'
  preview_only: false
links:
  - name: 'Paper'
    url: 'https://aclanthology.org/2026.acl-long.1455/'
  - name: 'Code'
    url: 'https://github.com/tongyao-zhu/query-embedding-mix'
  - name: 'Word-Mix Queries'
    url: 'https://huggingface.co/datasets/hcm777/query-embedding-mix-word-mix'
---

Multilingual users often mix languages in real search queries, but dense retrievers are usually evaluated on monolingual ones. This project studies retrieval with code-mixed and mixed-language queries: what happens when the query representation itself is mixed, and when combining languages in a query actually helps retrieval.

In [When Does Mixing Help? Analyzing Query Embedding Interpolation in Multilingual Dense Retrieval]({{< relref "/publication/zhu-etal-2026-mixing" >}}) (ACL 2026, oral), we run a ratio-controlled study of mixed-language querying on mMARCO. Given two parallel query translations, we encode both, interpolate their embeddings at a controlled mixing ratio, and retrieve with the normalized mixture. Across 35 language pairs, each with three document-language settings, the best mixed query embedding from BGE-M3 beats the better monolingual endpoint in 88 of 105 settings. The gains are asymmetric and driven by English dominance: mixing helps for non-English document indices, while indices containing English are best served by pure English queries. After controlling for English dominance, larger typological distance between the two languages is associated with smaller mixing gains. The [query-embedding-mix repository](https://github.com/tongyao-zhu/query-embedding-mix) provides the code and result tables, and the word-mixed query sets are released on [Hugging Face](https://huggingface.co/datasets/hcm777/query-embedding-mix-word-mix).
