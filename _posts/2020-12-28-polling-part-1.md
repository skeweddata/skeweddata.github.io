---
title:  Political Polling Part 1&#58; Sampling
tags:
  - Polling
  - draft
preface_text: >-
  This post is part of a series on political polling. To start 
  at the beginning, click 
  <a href="../../../2020/12/24/polling-part-0.html">here</a>.
---

The central idea that underpins all polling is the concept of statistical sampling,
which may sound intimidating
but for our purposes really boils down to two things:

<!--more-->

1. Surveying a small fraction of the total electorate can accurately reflect
the preferences of the overall population.
2. The polling results you get will be less precise the smaller your
sample is.

That first point — whether or not your polls are 
predictive of actual election results — is something that I'll
cover in depth in future posts. But here I'll talk about that
second point: even the most accurate poll has uncertainty associated
with it, just because you've only polled a tiny fraction of the
full electorate.

To illustrate this, let's generate an example electorate. We'll keep
it simple: a single population of 1 million potential voters, with
a _slight_ preference for a Democratic candidate over a Republican, 
50.2%–49.8%. Additionally, each person in this electorate has a
70% chance of actually voting in the election. 500 simulations of
an election with these parameters look like this:

![election_results](/images/2020-12-28-polling-part-1/election_results.png)

Zooming in just to the region around the simulation results shows
that there is actually a distribution of outcomes:

![election_results_zoomed](/images/2020-12-28-polling-part-1/election_results_zoomed.png)

The vote margin varies due to sampling randomness, as in each simulation — like in reality — every
voter has a less than 100% chance of actually voting. But with a million potential voters
the electorate this distribution is really small: about 0.1% on either side
of the actual result. Now let's run five polls, each of 1000 random members of this
electorate, and record the results:

| Poll | Democrat | Republican |
|:----:|:--------:|:----------:|
|  1   |<span style="color: red">0.507</span>|<span style="color: green">0.493</span>|
|  2   |<span style="color: red">0.533</span>|<span style="color: green">0.467</span>|
|  3   |<span style="color: green">0.494</span>|<span style="color: red">0.506</span>|
|  4   |<span style="color: red">0.473</span>|<span style="color: green">0.527</span>|
|  5   |<span style="color: green">0.489</span>|<span style="color: red">0.511</span>|
{: .table .table-striped .table-bordered}

We know from how we set up the simulation that the Democrat is going
to win the election with a margin of about 0.4%, and yet of these
five polls the Republican is ahead in three of them, in one case by
over 5%[^democrat]. What gives?


[^democrat]:
    If you look closely you'll notice there's also a poll in this sample where the _Democrat_ is the one
    winning by more than 5%, but I focused on the polls with the Republican
    in the lead since the public cares way more about polling
    errors that suggest the wrong winner.