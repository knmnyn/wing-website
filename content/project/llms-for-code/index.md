---
title: 'LLMs for Code: Faithful Editing and Cost-Efficient Program Search'
summary: 'We study how large language models modify and search over code: whether their repairs stay minimal and faithful to the original program, and how lightweight and frontier models can be coordinated to evolve programs for scientific discovery.'
tags: ['Code Generation', 'Code Repair', 'Large Language Models', 'Reinforcement Learning', 'Scientific Discovery']
year: 2026
# Project page creation date; each publication retains its own publication date.
date: '2026-11-03'
featured: true
# WING contributors; full author lists appear in the associated publications.
authors: ['tongyao', 'weihern', 'haminhhieu', 'long', 'min']
image:
  caption: 'Frontier models under generic vs. explicit preservation prompts.'
  focal_point: 'Smart'
  preview_only: false
links:
  - name: 'Over-Editing Paper'
    url: 'https://arxiv.org/abs/2609.04061'
  - name: 'Over-Editing Code & Data'
    url: 'https://github.com/nreHieW/over-editing'
  - name: 'SpecEvo Paper'
    url: 'https://arxiv.org/abs/2610.28706'
  - name: 'SpecEvo Code'
    url: 'https://github.com/langkhachhoha/SpecEvo'
---

LLMs now routinely write and rewrite code, both as coding assistants that repair existing programs and as search operators that propose candidate programs for open-ended scientific problems. This project looks beyond whether the generated code is correct, asking how faithfully models edit what is already there and how cheaply they can search for good programs.

In [When Models Edit Too Much: On the Fidelity of Minimal Code Edits]({{< relref "/publication/zhu-etal-2026-over-editing" >}}) (EMNLP 2026), we study **over-editing**: repairs that pass the tests but change far more code than the bug requires. We build a benchmark from 400 BigCodeBench problems with injected AST-level corruptions, so that the minimal patch is known by construction, and score repairs on Pass@1, excess edit distance, and added cognitive complexity. Over-editing is widespread even among frontier models, a single preservation instruction helps substantially, and reinforcement learning teaches minimal editing that generalizes out of domain better than supervised fine-tuning. The [over-editing repository](https://github.com/nreHieW/over-editing) provides the benchmark, evaluation, and training code.

In [SpecEvo: Speculative Evolution with Large Language Models for Cost-Efficient Scientific Discovery]({{< relref "/publication/hieu-etal-2026-specevo" >}}) (arXiv preprint), we turn to LLM-driven evolutionary program search. **SpecEvo** lets parallel lightweight Speculators propose programs, an Advisor distill the search trajectory into reusable guidance, and a frontier Navigator intervene only at sparse checkpoints. Across 176 tasks in mathematical discovery, systems and combinatorial optimization, and equation discovery, it is competitive with frontier-model baselines at up to 80% lower API cost. The [SpecEvo repository](https://github.com/langkhachhoha/SpecEvo) provides the implementation.
