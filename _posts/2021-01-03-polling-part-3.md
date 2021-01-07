---
title:  Political Polling Part 3&#58; Turnout
tags:
  - Polling
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
demographics — which skew heavily Democratic — naively polling any
random thousand of them will make it look like a slam dunk victory for 
the Democrat:

![naive poll](/images/2021-01-03-polling-part-3/naive_poll.png)  

You can see that not only does the Democrat have a clear lead 
in the polls, but that lead is so large that not once in 500
polls is the Republican ahead. If you were to publish these
results you'd wind up looking pretty stupid come election night.

Fortunately, turnout is the systematic error that is easiest
to control for[^easy]. The simplest way is to just ask respondents
how likely they are to vote, and then build a mapping between 
responses ("absolutely certain", "not likely at all", etc) to 
probabilities. Then you can just weight each response by the 
turnout probability, and then your poll will be properly calibrated:

![turnout weighted poll](/images/2021-01-03-polling-part-3/turnout_weighted_poll.png)

One of the really neat[^scary] things about turnout modeling is that you 
can usually go back and check how good your model was. In many cases
information about whether or not someone voted in an election is
[publicly available](https://www.findlaw.com/voting/how-u-s--elections-work/what-information-is-public-from-your-voting-record.html),
at least to certain groups such as political campaigns. You can then
join this data to your polling results, and determine whether or not
the turnout likelihood you attributed to each respondent matched their
actual behavior.

Unfortunately, a turnout model is not the only thing a pollster
can get wrong. In addition to turnout, a good pollster must also
keep track of who is even responding to their calls. I'll discuss
that next.

[^education]:
    For instance, in 2016 candidate preference was unexpectedly 
    correlated with education, contributing to the systematic
    shift between state polls and the final result.
    
[^easy]:
    At least, easiest in my opinion.
    
[^scary]:
    or terrifying, depending on your perspective. To me it's a bit
    of both.