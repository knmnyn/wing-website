---
title: 'LLMs for Code: Faithful and Minimal Code Editing'
summary: 'We study whether LLM code repairs stay minimal and faithful to the original program, rather than only whether they pass the tests, and how models can be trained to edit code minimally.'
tags: ['Code Generation', 'Code Repair', 'Large Language Models', 'Reinforcement Learning']
year: 2026
# Project page creation date; each publication retains its own publication date.
date: '2026-11-03'
featured: true
# WING contributors; full author lists appear in the associated publications.
authors: ['tongyao', 'weihern', 'min']
image:
  caption: 'Frontier models under generic vs. explicit preservation prompts.'
  focal_point: 'Smart'
  preview_only: false
links:
  - name: 'Paper'
    url: 'https://arxiv.org/abs/2609.04061'
  - name: 'Code & Data'
    url: 'https://github.com/nreHieW/over-editing'
---

LLMs are increasingly asked to edit code that already exists, not just to write it from scratch. There, correctness alone is not enough: a good repair should also be minimal, reviewable, and faithful to the original implementation. This project looks beyond whether generated code passes the tests and asks how faithfully models edit what is already there.

In [When Models Edit Too Much: On the Fidelity of Minimal Code Edits]({{< relref "/publication/zhu-etal-2026-over-editing" >}}) (EMNLP 2026), we study **over-editing**: repairs that pass the tests but change far more code than the bug requires. We build a benchmark from 400 BigCodeBench problems with injected AST-level corruptions, so that the minimal patch is known by construction, and score repairs on Pass@1, excess edit distance, and added cognitive complexity. Over-editing is widespread even among frontier models, a single preservation instruction helps substantially, and reinforcement learning teaches minimal editing that generalizes out of domain better than supervised fine-tuning. The [over-editing repository](https://github.com/nreHieW/over-editing) provides the benchmark, evaluation, and training code.
