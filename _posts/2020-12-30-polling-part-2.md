---
title:  Political Polling Part 2&#58; Demographics
tags:
  - Polling
  - draft
preface_text: >-
  This post is part of a series on political polling. To start 
  at the beginning, click 
  <a href="../../../2020/12/24/polling-part-0.html">here</a>.
  The code used to generate the charts in this post can be found
  <a href="https://github.com/AndrewRook/polling_simulator/blob/main/2_demographics.ipynb">here</a>.
---

In the [previous post](../../../2020/12/28/polling-part-1.html) I
simulated an electorate as though every person in it was essentially
the same. That was useful to show the effects of
statistical sampling, but the real world works differently: different
demographic groups vary in their candidate preference, turnout likelihood,
and even in how they interact with polls.

<!--more-->

For example, it's a pretty well known phenomenon that older people,
all else being equal, tend to support Republican candidates more than
Democrats. You could imagine that shift might look something like
this:

![voting preference by age](/images/2020-12-30-polling-part-2/age_distribution.png)

It's also true that younger people generally are less likely to vote,
which might look like this:

![turnout_by_age](/images/2020-12-30-polling-part-2/age_distribution_voting.png)

(Discuss how pollsters use less granular demographics groups)

Demographic differences matter for polls. On one hand, when properly
accounted for, they can result in more accurate polls. On the other
hand, if you don't correctly consider the demographics of the
population, you can get polls that are systematically wrong. I'll
dive into some examples of this in the next posts.  