---
title:  NFTs, Attribution, and GitHub
tags:
  - Blockchain
  - Coding
  - Rants
---

Recently, at least in the internet channels I frequent, it's been difficult to avoid
news about stuff going on with cryptocurrency and, especially, NFTs. Most of what I've seen
tends to be about ongoing [speculative](https://decrypt.co/60971/beeples-nft-artwork-sells-for-60-3-million-in-christies-auction)
[mania](https://abcnews.go.com/Business/wireStory/twitter-ceo-jack-dorsey-sells-nft-tweet-29m-76616884)
for [digital](https://www.msn.com/en-us/news/technology/edward-snowdens-nft-sold-for-2455-million-at-auction-for-charity/ar-BB1fKsiv) 
[certificates](https://www.marketwatch.com/story/what-is-nba-top-shot-everything-you-need-to-know-about-the-digital-asset-with-over-230-million-in-transactions-11614287023)
of 
kinda-sorta-maybe-ownership (weird), the 
[serious environmental cost of cryptocurrency mining](https://decrypt.co/4218/dont-dismiss-bitcoins-environmental-impact)
(alarming), or people who accidentally gained — and the lost — 
[huge](https://www.theguardian.com/uk-news/2021/jan/14/man-newport-council-50m-helps-find-bitcoins-landfill-james-howells) 
[fortunes](https://www.bloomberg.com/news/newsletters/2021-01-12/money-stuff-don-t-forget-your-bitcoins) 
(amusing, mostly). Nothing
seems to be making a particularly good case for why the blockchain is actually going to be
actually, you know, _useful_ for everyday people[^koolaid]. So I was intrigued when I came
across [a thinkpiece](https://www.drorpoleg.com/nfts-and-the-future-of-work/) claiming to
connect NFTs to the _very future of work_, something that obviously would impact a substantial
amount of the adult population. 

<!--more-->

You can read the whole thing at the link above (and I recommend you do), but basically
the article makes three main claims to build a case for the blockchain-ization of work.

### Claim #1: Wouldn't it be great if we paid people based on their direct impact on their company's success?
This is one of those ideas that seems really right, like "obviously this is how it should work" right, when you
first hear it[^communist]. But when I think about it a little it loses some of it's appeal: not only
does it encourage competition between employees instead of collaboration, I'm honestly not convinced
that it actually leads to better outcomes for the business. 

At my job I was intimately involved in building a model with an 8-figure incremental value to the
business, something hard to define as anything other than "direct company impact". But I spent
my first ~18 months at the company on a team that was about as far away from the profit-centers as possible. Should I have gotten lower pay while
on that non-critical team? If that had actually happened I would have pretty quickly started polishing
up the ol' resume, and would have been gone long before I could work on the highly impactful
project. Would that have been good for the company? Similarly, I recently spent ~6
months building out a vision and roadmap for a project that ultimately had to be shelved due
to headcount constraints. All that work led to essentially nothing — should I only have been
paid for half of that year of work? 

It's probably obvious that I think the answer to those questions is a solid "no!" But I'll give this one the 
benefit of the doubt — maybe the author is referring to something
less related to the results of the projects and more around the impact of employees
relative to the roles they're in, or maybe there's an implicit assumption that companies 
should already be hyper-focusing on their core projects in such a way that
everyone is doing business-critical work[^intent]. Moving on!

### Claim #2: We already have the ability to do that in software thanks to version control
Assume we are willing to stipulate to Claim #1, the big problem with implementing it is
one of measurement: how do you figure out who contributed what to a project? The author
points to the coding community as one place that's figured that out already, thanks to 
version control (VC). For anyone less familiar with the wooly world of software engineering,
VC systems allow developers to permanently track granular changes they make to
their code, and then share those changes with collaborators to ensure that everyone is working
off of a consistent and up-to-date codebase[^revert]. The most popular VC implementation
is currently Git which, in combination with platforms like GitHub and GitLab, enables
many developers to efficiently develop, share, and collaborate on their code by syncing their
edits in a shared online space (called a "repository"). 

Because VC only works when developers frequently register ("check-in") their code updates, a Git repository
does indeed contain a fairly granular record of exactly who contributed which lines of code at what time.
But what the article misses, however, is that number of commits (and lines of code added/removed, which are also easily 
tracked) are actually pretty crummy metrics for measuring the value of a contributor. 
[This](https://softwareengineering.stackexchange.com/questions/194582/how-can-one-measure-contributions-to-a-project) 
[is](https://hackernoon.com/measure-a-developers-impact-e2e18593ac79) 
[not](https://www.reddit.com/r/git/comments/f42c55/whats_the_best_way_to_measure_source_code/) 
[news](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2018/EECS-2018-174.pdf). 

### Claim #3: Soon we'll be able to do this for any kind of work thanks to Machine Learning<sup>TM</sup> 

[^koolaid]:
   I am aware that by this statement alone I have probably doomed myself to the unending
   ire of crypto-bros. 
   
[^communist]:
   Assuming you're a capitalist, I imagine a socialist would not be quite so excited.
   
[^intent]:
   The piece does say that the contributions to measure are the "ideas that end up being used by the company"
   rather than a specific dollar profit value,
   although I've found that the likelihood your idea will be valuable to the company is often
   more correlated with your proximity to leadership of the profit centers than the actual quality of the thought
   itself.
   
[^revert]:
   It also lets you quickly _revert_ your codebase back to how it looked at a given moment
   in time, which is supremely useful for those inevitable times when you make an innocuous-looking
   change which somehow breaks literally everything.