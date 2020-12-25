---
title:  Political Polling Part 0&#58; Introduction
tags:
  - Polling
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

After mulling it over, I realized that part of my problem was that I
only had a superficial understanding of how polls actually worked. The
issue is that, other than the headline numbers, polls release very few 

[^twitter]:
    In hindsight, this was the moment where I really should have
    put the computer down and done something more productive with my time. 
