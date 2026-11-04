---
title: 'When Does Mixing Help? Analyzing Query Embedding Interpolation in Multilingual Dense Retrieval'
authors:
- tongyao
- chaoming
- min
date: '2026-07-01'
publishDate: '2026-07-27T00:00:00Z'
publication_types:
- paper-conference
publication: '*Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*'
abstract: 'This paper presents a ratio-controlled study of mixed-language querying on mMARCO, building mixed queries as interpolations of monolingual embeddings. With BGE-M3, an optimal mixing ratio outperforms the best monolingual endpoint in 88 of 105 cases, and the gains show a clear asymmetry driven by English dominance: mixing helps for non-English document indices, while indices containing English are best served by pure English queries.'
summary: 'An ACL 2026 analysis of query embedding interpolation for multilingual dense retrieval.'
doi: 10.18653/v1/2026.acl-long.1455
links:
- name: ACL Anthology
  url: https://aclanthology.org/2026.acl-long.1455/
- name: arXiv
  url: https://arxiv.org/abs/2606.13537
url_pdf: https://aclanthology.org/2026.acl-long.1455.pdf
url_code: https://github.com/tongyao-zhu/query-embedding-mix
featured: true
image:
  caption: 'Two parallel query translations are encoded, interpolated at mixing ratio λ, and L2-normalized before retrieval.'
  focal_point: 'Smart'
  preview_only: false
projects: ['code-mixed-retrieval']
---
