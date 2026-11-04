---
title: 'When Models Edit Too Much: On the Fidelity of Minimal Code Edits'
authors:
  - tongyao
  - weihern
  - min
author_notes: [Equal Contribution, Equal Contribution, Corresponding Author]
# Anthology specifies October only; day defaults to the first of the month.
date: '2026-10-01'
publishDate: '2026-11-03T00:00:00Z'
doi: '10.18653/2026.emnlp-main.2092'
publication_types: ['paper-conference']
publication: 'In *Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP 2026)*'
publication_short: 'In *EMNLP 2026*'
abstract: "Large language models (LLMs) are increasingly used to edit existing code, but correctness alone is not enough: useful repairs should also be minimal, reviewable, and faithful to the original implementation. We study over-editing, the tendency of a model to rewrite code beyond what is required to fix a bug. We construct an evaluation framework from 400 BigCodeBench problems by injecting controlled AST-level corruptions into reference solutions, giving each repair task a known minimal patch. Across frontier LLMs, over-editing is widespread even among strong models like GPT-5.5: high Pass@1 can coexist with unnecessarily large edits and added cognitive complexity. A preservation instruction substantially reduces this behavior, lowering average excess Levenshtein distance from 0.195 to 0.131, reducing added cognitive complexity by 26.6%, and increasing Pass@1 by 2.3 points. However, these gains do not simply follow from a larger reasoning budget or larger models. We next ask whether minimal editing can be learned directly during post-training. We observe that supervised fine-tuning overfits to seen corruption patterns, whereas reinforcement learning gives the best out-of-domain edit-fidelity and performance-retention trade-off. These results position edit fidelity as a distinct axis of code-repair quality and show that it can be measured and learned."
summary: 'LLM code repairs often pass the tests while rewriting far more code than needed. We measure this over-editing on a benchmark with known minimal patches and show that reinforcement learning can teach models to edit minimally.'
tags: ['Code Repair', 'Code Generation', 'Large Language Models', 'Reinforcement Learning', 'Evaluation']
featured: true
links:
  - name: ACL Anthology
    url: 'https://aclanthology.org/2026.emnlp-main.2092/'
  - name: arXiv
    url: 'https://arxiv.org/abs/2609.04061'
url_pdf: 'https://aclanthology.org/2026.emnlp-main.2092.pdf'
url_code: 'https://github.com/nreHieW/over-editing'
image:
  caption: 'Every patch passes the tests, but edit fidelity varies widely.'
  focal_point: 'Smart'
  preview_only: false
projects: ['llms-for-code']
---
