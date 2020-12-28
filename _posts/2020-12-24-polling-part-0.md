---
title:  Political Polling Part 0&#58; Introduction
tags:
  - Polling
  - draft
---

In the aftermath of the 2020 elections, I was confused.

<!--more-->

As a data scientist,
my main portal to understanding to what was happening in the race
were models. I devoured articles about the 538 model, read blog posts on 
the Economist's version, and in the waning days of the campaign
even waded into Twitter to see people argue about the nitty-gritty
details of their respective models[^twitter].

Then the election happened. Even after waiting a week to ensure
that votes had been fully tabulated in the key swing states, 
it was clear that polling had been _weird_. In some states, most
notably Georgia and Arizona (differences of 0.2% and 2.3%, respectively), polls had been almost spot-on. In
others, such as Wisconsin (difference of 7.8%),
they had been seriously off. But there were general trends too, both
in terms of which states seemed to have the largest errors (the midwest)
but also in that _all_ of the deviations, even including the states
where polls were close, were towards Trump. 

Unsurprisingly, there was a lot of (digital) ink spilled on
the accuracy --- or lack thereof --- of the polls. Initial
takes in the media tended to [focus exclusively on the "misses"](https://www.washingtonpost.com/opinions/2020/11/04/henry-olsen-polling-industry-failure/),
attempting to paint a picture of
[wildly flawed polls](https://www.nbcboston.com/news/politics/decision-2020/why-were-polls-so-wrong-in-the-2020-election-we-asked-some-pollsters/2224815/)
and an [industry-wide failure](https://www.washingtonpost.com/opinions/2020/11/04/henry-olsen-polling-industry-failure/). This
then prompted counter-takes from the more data-diven outfits,
saying that, actually, [the polls overall were roughly in line
with historical trends](https://fivethirtyeight.com/features/the-polls-werent-great-but-thats-pretty-normal/). After a couple weeks a more detailed
explanation — polling misses as a function of coupling between
social mistrust and Trump support — [started to circulate](https://www.vox.com/policy-and-politics/2020/11/10/21551766/election-polls-results-wrong-david-shor).

None of these explanations were particularly satisfying to me,
however. On one hand, the polls were obviously better than nothing,
especially in some of the southern states. On the other hand, in 
every single swing state the polls were all wrong in the same
direction. The concept of social trust is interesting, but
to me it doesn't explain why the shifts would be so different
between states. (It is also hard to square that hypothesis
with the [high accuracy of the 2018 midterm
polls](https://www.cnn.com/2018/11/19/politics/2018-midterm-elections-good-year-polls/index.html), unless you also want to posit that this phenomenon
is restricted to voters who only like to vote when Trump is
on the ballot.)

After mulling it over, I realized that part of my problem was that the polling aggregators
I was following are largely agnostic to what assumptions pollsters are making --- and they 
have to make a _lot_ of assumptions[^agnostic]. If I wanted to really build hypotheses about
what happened in the polling, I'd need to understand way more about how individual pollsters
operate.

Unfortunately, that's pretty hard to do! Pollsters are very circumspect with exactly how they
survey people, considering information about how they choose things like likely voter models or
demographics to segment by to be their proprietary "secret sauce"[^secret]. Poll data for upcoming elections is generally released only in 
pre-aggregated form, **after** it has been processed[^poll_details]. And while there is
[a repository for detailed historical polling information](https://ropercenter.cornell.edu/), it isn't
open access[^roper].

Without access to actual data, I figured the best way to get a feeling for the practice and pitfalls of
polling would be to simulate it, which in addition to providing the raw data necessary to analyze also 
has the benefit of also showing the ground truth reality. So I put together a 
[small Python library](https://github.com/AndrewRook/polling_simulator) with
several methods (or at least my best understanding of them) for sampling, weighting, and aggregating polls.
I then tried those methods out on simulated electorates to get a sense for the core strategies to avoid
bias and obtain accurate results. In future posts I'll go through how polls work, common problems which can
cause them to be inaccurate, and potential ways to control for those biases. 

[^twitter]:
    In hindsight, this was the moment where I really should have
    put the computer down and done something more productive with my time. 

[^agnostic]:
    They don't totally ignore how pollsters work: 538, for example, rates individual pollsters based on 
    whether they adhere to established best-practices like using live-caller polls and 
    adjusts for their historical partisan lean. But these are relatively crude measures.

[^secret]:
    For example, Emerson had all of one sentence to say about its methodology in 
    [a poll of the 2020 Senate runoffs in Georgia](https://emersonpolling.reportablenews.com/pr/georgia-2020-incumbent-republicans-with-slight-advantages-in-senate-run-offs).

[^poll_details]:
    For example, [this SurveyUSA poll](http://www.surveyusa.com/client/PollReport.aspx?g=bbb4e7fb-04c1-4b0f-b0b4-dbdb743cae4e)
    of the 2020 Senate runoffs in Georgia has breakouts by several different demographics, but does not provide
    details about sampling and weighting beyond naming the company that provided the sample and which demographics
    were used in the weighting. Even how they model turnout is unclear: despite providing the breakouts
    for their turnout question, there isn't a clear mapping between the fraction of participants who provided
    each answer and the actual number of voters considered to be likely to vote. 

[^roper]:
    The rate for their lowest tier of membership, as of December 2020, was $2,815. I find it really unfortunate that a research center at an Ivy League university can't figure out a way
    to enable any form of free access, or even just affordable access, for individuals without the financial
    backing of a large company or school. To contrast this, consider Astronomy, where right now I can [access
    reams of science-quality data across the entire electromagnetic spectrum](https://archive.stsci.edu/access-mast-data) 
    with nothing more than a free account (at most!). 