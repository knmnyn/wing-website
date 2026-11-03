---
title: 'When Models Edit Too Much: On the Fidelity of Minimal Code Edits'
authors:
  - tongyao
  - weihern
  - min
author_notes: [Equal Contribution, Equal Contribution, Corresponding Author]
# EMNLP 2026 was held in October; day defaults to the first of the month.
date: '2026-10-01'
publishDate: '2026-11-03T00:00:00Z'
publication_types: ['paper-conference']
publication: 'In *Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP 2026)*'
publication_short: 'In *EMNLP 2026*'
abstract: >-
  LLMs are increasingly asked to edit code that already exists, and correctness alone is not enough there: a good repair should also be minimal, reviewable, and faithful to the original implementation. We study over-editing, a functionally correct repair that changes more code than the minimal fix requires.
  Measuring it requires knowing what the minimal repair is, so we build a benchmark where it is known by construction: starting from 400 BigCodeBench problems, we inject localized AST-level corruptions into each reference solution, so that the minimal repair is exactly the reversal of the injected corruption. Every repair is scored on Pass@1, excess Levenshtein distance (tokens changed beyond the minimal patch), and added cognitive complexity.
  Over-editing is widespread among frontier LLMs, including strong models such as GPT-5.5, where high Pass@1 can coexist with unnecessarily large edits. A single preservation instruction reduces excess edits and modestly improves Pass@1, while neither reasoning nor model scale reliably improves edit fidelity.
  For training, supervised fine-tuning overfits to the corruption patterns it sees, whereas reinforcement learning gives the best trade-off between out-of-domain edit fidelity and retained general coding performance. Edit fidelity is thus a distinct axis of code-repair quality that can be both measured and learned.
summary: 'LLM code repairs often pass the tests while rewriting far more code than needed. We measure this over-editing on a benchmark with known minimal patches and show that reinforcement learning can teach models to edit minimally.'
tags: ['Code Repair', 'Code Generation', 'Large Language Models', 'Reinforcement Learning', 'Evaluation']
featured: true
links:
  - name: arXiv
    url: 'https://arxiv.org/abs/2609.04061'
url_pdf: 'https://arxiv.org/pdf/2609.04061'
url_code: 'https://github.com/nreHieW/over-editing'
image:
  caption: 'Every patch passes the tests, but edit fidelity varies widely.'
  focal_point: 'Smart'
  preview_only: false
projects: ['llms-for-code']
---
