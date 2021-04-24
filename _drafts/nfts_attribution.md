---
title:  NFTs, Attribution, and Git
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
the article makes three main claims to build a case for the blockchain-ization of work:

1. Wouldn't it be great if we paid people based on their direct impact on their company's success?
2. We already have the ability to do that in software thanks to version control.
3. Soon we'll be able to do this for any kind of work thanks to Machine Learning<sup>TM</sup>. 

{% include components/post_image.html 
    src="/images/nfts_attribution/ml_meme.jpg" 
    alt="Machine Learning, Blockchain, and Big Data"
    credit="<a href='https://imgflip.com/i/2ed05j'>imgflip</a>"
%}

I originally wrote a detailed breakdown of each claim, but honestly it was pretty negative
and felt kind of yucky. Suffice it to say I was not a fan of the piece.

## Git is a Blockchain

Regardless of my feelings about the article, reading it put version control and the blockchain together in my head.
Specifically, I started to think about the specific combination of the Git version control software with the online
platforms that host those repositories (e.g. GitHub, GitLab)[^git]. The article is interested in the possibility of adding
a blockchain-based payment mechanism on top of Git[^implementation], but while I was trying to figure out what that actually
would mean I realized that Git **itself** is basically a blockchain[^first].

{% include components/post_image.html 
    src="/images/nfts_attribution/git_blockchain.jpg" 
    alt="Git is a blockchain"
    credit="<a href='https://imgflip.com/i/56xed4'>imgflip</a>"
%}

Think about it! The commit history is a distributed immutable chain of transactions[^merkle]. Code review is a 
combination of proof-of-work (the contribution) and proof-of-stake (the reviewer's approval). A Git repository is
obviously not a spendable currency but that's ok, lots of stuff on the blockchain isn't (e.g. NFTs).

Ok, ok, it's not _exactly_ the same thing as Bitcoin or an NBA Top Shot NFT: 
* In practice Git projects are highly centralized around one or a few core maintainers who approve changes, rather than relying on a (hopefully large) pool
of peers working to make and verify approvals. 
* Determining whether or not new commits should be added to the official version of the codebase is almost always at least partially a manual
process, unlike "normal" blockchains where this task is fully automated.
* The less we talk about how often developers need to go back through the commit history and modify it (to remove large files clogging up the repository 
or — worse — credentials) the better[^bfg].  

But it's pretty damn close, close enough to be a nice way to break in the concept
behind blockchains and show the potential behind NFTs — it worked on me!

To be clear, I'm far from the first person to have this thought


[^koolaid]:
    Yes, I am aware that not everyone agrees with this statement, you can spare me the Twitter spam. 
    
[^git]:
    For the sake of brevity I'm going to assume a basic level of understanding of how Git and its online platforms
    work. If you're unfamiliar with Git or version control in general, the basic gist is that each developer works
    on a local copy of a shared codebase, makes a bunch of changes ("commits"), then uploads them to the platform
    and asks to join their changes to the "official" version of the codebase (a "pull request"). Other developers
    can review the proposed contribution and, if approved, the changes get added ("merged") to the official codebase
    and propagated to the other developers. For more information, check [here](https://guides.github.com/introduction/git-handbook/).

[^implementation]:
    As to how this would be implemented the article doesn't get into more detail than "NFTs and smart contracts". Maybe
    mint an NFT for each commit? Or have a license that makes blockchain contracts which freeze the contributor list
    for a given version of the package? I don't know, I'm not a blockchain expert.
    
[^first]:
    To be clear, I'm far from the first person to have had this thought.
    
[^merkle]:
    in fact both Git and Bitcoin use the 
    [same algorithm](https://en.wikipedia.org/wiki/Merkle_tree) to verify their transaction histories.
    
[^bfg]:
    So often a [dedicated open-source tool exists explicitly for this purpose](https://rtyley.github.io/bfg-repo-cleaner/).