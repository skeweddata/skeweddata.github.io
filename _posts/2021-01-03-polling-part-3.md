---
title:  Political Polling Part 3&#58; Turnout
tags:
  - Polling
  - draft
preface_text: >-
  This post is part of a series on political polling. To start 
  at the beginning, click 
  <a href="../../../2020/12/24/polling-part-0.html">here</a>.
  The code used to generate the charts in this post can be found
  <a href="https://github.com/AndrewRook/polling_simulator/blob/main/3_turnout.ipynb">here</a>.
---

Previously in this series I 
[discussed](../../../2020/12/28/polling-part-1.html) 
the concept of statistical sampling, and how even the perfectly
constructed poll will produce a distribution of possible results
due to the random chance of who happens to respond. Those are
so-called "random errors", and they're relatively easy to predict
and quantify. Now let's talk about other kinds of errors, ones
that pollsters spend the bulk of their time worrying about.  

<!--more-->

These errors come when an assumption that the pollster has made
turns out to be wrong, usually because candidate preference ends
up being correlated in an unexpected way[^education]. One way
this can happen is with voter turnout, which is well known
to be correlated with age (among other potential factors).
 
To demonstrate, let's set up another election, again with
a million potential voters, but this time we'll change
both candidate preference and turnout likelihood by age:

| Age Group | Turnout Likelihood | Candidate Preference (Dem-Rep) |
|:---------:|:------------------:|:------------------------------:|
| 18-30     | 30%                | 80%-20%                        | 
| 30-50     | 50%                | 60%-40%                        |
| 50-65     | 60%                | 40%-60%                        |
| 65+       | 90%                | 25%-75%                        |
{: .table .table-striped .table-bordered}

Powered by the high turnout in the 65+ age group, these demographics result in 
about a four point victory for the Republican candidate:

![election results](/images/2021-01-03-polling-part-3/actual_election.png)

But, because of how many more _potential_ voters are in the younger
demographics — which skew heavily democratic — naively polling a
random 1000 of them will make it look like a slam dunk victory for 
the Democrat:

![naive poll](/images/2021-01-03-polling-part-3/naive_poll.png)  

[^education]:
    For instance, in 2016 candidate preference was unexpectedly 
    correlated with education, contributing to the systematic
    shift between state polls and the final result.