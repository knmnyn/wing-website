---
title: 'Cost-Efficient LLM-Driven Scientific Discovery'
summary: 'We study how to coordinate lightweight and frontier LLMs in evolutionary search for scientific discovery, matching frontier-model performance at a fraction of the API cost.'
tags: ['Scientific Discovery', 'Evolutionary Search', 'Large Language Models', 'AI4Science']
year: 2026
# Project page creation date; each publication retains its own publication date.
date: '2026-11-03'
featured: true
# WING contributors; full author lists appear in the associated publications.
authors: ['haminhhieu', 'tongyao', 'long', 'min']
image:
  caption: 'Top: performance versus API cost on mathematical discovery. Bottom: equation discovery error over 500 evaluations.'
  focal_point: 'Smart'
  preview_only: false
links:
  - name: 'SpecEvo Paper'
    url: 'https://arxiv.org/abs/2610.28706'
  - name: 'SpecEvo Code'
    url: 'https://github.com/langkhachhoha/SpecEvo'
---

LLM-driven evolutionary search has become a powerful tool for scientific discovery: models repeatedly propose candidate solutions, which are evaluated and refined over many iterations. Relying on frontier models for every step is expensive, while lightweight models alone often stall. This project studies how to coordinate models of different strengths so that discovery stays both effective and affordable.

In [SpecEvo: Speculative Evolution with Large Language Models for Cost-Efficient Scientific Discovery]({{< relref "/publication/hieu-etal-2026-specevo" >}}) (arXiv preprint), we explore with lightweight models and consolidate with frontier reasoning. **SpecEvo** lets parallel lightweight Speculators propose candidates, an Advisor distill the search trajectory into reusable guidance, and a frontier Navigator intervene only at sparse checkpoints, so that model coordination adapts as the search progresses. Across 176 tasks in mathematical discovery, systems and combinatorial optimization, and equation discovery, it is competitive with frontier-model baselines at up to 80% lower API cost. The [SpecEvo repository](https://github.com/langkhachhoha/SpecEvo) provides the implementation.
