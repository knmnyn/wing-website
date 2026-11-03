---
title: 'Context Window Scheduling for Efficient LLM Pretraining'
summary: 'Longer pretraining context windows are not always better. We study how to schedule the context window during LLM pretraining to balance long-context capability with training efficiency.'
tags: ['Large Language Models', 'Pretraining', 'Long Context', 'Efficiency']
year: 2025
# Project page creation date; each publication retains its own publication date.
date: '2026-11-03'
featured: true
# WING contributors; full author lists appear in the associated publications.
authors: ['tongyao', 'qian', 'min']
image:
  caption: 'Context window scheduling (ours) versus constant long-context pretraining and continual long-context pretraining.'
  focal_point: 'Smart'
  preview_only: false
links:
  - name: 'Paper'
    url: 'https://papers.nips.cc/paper_files/paper/2025/hash/b837547467ea02deebdc9677d7f5a0be-Abstract-Conference.html'
  - name: 'arXiv'
    url: 'https://arxiv.org/abs/2503.15450'
  - name: 'Code'
    url: 'https://github.com/sail-sg/SkyLadder'
  - name: 'Slides'
    url: 'https://docs.google.com/presentation/d/1Uot7hQRRBAxFsppVDUpMEMpw_H6bcruNIf3eMmdFqeY/edit?usp=sharing'
---

Recent advances in LLM pretraining have featured ever-expanding context windows to process longer sequences. Long context windows are costly to train with, however, and it is not obvious that every token should be trained at the full window length. This project, carried out with collaborators at Sea AI Lab, studies how the context window itself should be scheduled during pretraining.

In [SkyLadder: Better and Faster Pretraining via Context Window Scheduling]({{< relref "/publication/skyladder-2025" >}}) (NeurIPS 2025), a pilot study shows that under a fixed token budget, models pretrained with shorter context windows consistently outperform their long-context counterparts. Motivated by this, **SkyLadder** implements a simple short-to-long context window transition during pretraining. Pretraining 1B-parameter models (up to 32K context) and 3B-parameter models (8K context) on 100B tokens, SkyLadder yields consistent gains of up to 3.7% on common benchmarks and matches or exceeds baseline results on long-context tasks, while training up to 22% faster than the baselines. The [SkyLadder repository](https://github.com/sail-sg/SkyLadder) provides the pretraining code.
