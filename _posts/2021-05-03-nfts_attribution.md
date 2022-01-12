---
title:  NFTs, Attribution, and Git
tags:
  - Blockchain
  - Coding
  - Rants
preface_text: >-
  Update 2022-01-12: After ~six months of thinking about it, reading
  about it, and actually putting a (very) small amount of money into
  cryptocurrencies, my opinion on the value of blockchain-based NFTs
  has soured substantially. There's no reason that a non-blockchain
  platform couldn't produce something with the same functionality
  at substantially lower cost and environmental impact. In fact,
  that's how much of crypto actually works today --- <a href=' https://support.axieinfinity.com/hc/en-us/articles/4404703037851-Banned-Axies-Appealing-an-Account-Ban'>Sky Mavis
  controls which Axies you're allowed to use</a>,
  and <a href=' https://moxie.org/2022/01/07/web3-first-impressions.html'>OpenSea functions as a centralized clearinghouse for whether an
  NFT is tradeable</a>. <br><br>It
  might be necessary to use crypto as the mechanism to bring about
  this mode of digital ownership (I'm not quite as swayed by arguments
  that we shouldn't have any kind of scarcity in digital goods, as
  scarcity is still the most efficient way I know of to provide financial
  recompense to creators), due to the sheer amount of money in the
  space that would not be available otherwise, but NFTs increasingly
  seem to me like a stepping stone on that path rather than the endgame.
---

Recently, at least in the internet channels I frequent, it's been difficult to avoid
news about stuff going on with cryptocurrency and, especially, NFTs[^NFTs]. Most of what I've seen
tends to be about ongoing speculative
[mania](https://abcnews.go.com/Business/wireStory/twitter-ceo-jack-dorsey-sells-nft-tweet-29m-76616884)
[for](https://decrypt.co/60971/beeples-nft-artwork-sells-for-60-3-million-in-christies-auction) 
[digital](https://www.msn.com/en-us/news/technology/edward-snowdens-nft-sold-for-2455-million-at-auction-for-charity/ar-BB1fKsiv) 
[certificates](https://www.marketwatch.com/story/what-is-nba-top-shot-everything-you-need-to-know-about-the-digital-asset-with-over-230-million-in-transactions-11614287023)
of 
kinda-sorta-maybe-ownership (weird), the 
[serious environmental cost of cryptocurrency mining](https://decrypt.co/4218/dont-dismiss-bitcoins-environmental-impact)
(alarming), or people who accidentally gained — and then lost — 
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
    caption="The article doesn't explictly mention big data, but I'd say it's pretty heavily implied."
    credit="<a href='https://imgflip.com/i/2ed05j'>imgflip</a>"
%}

I originally wrote a detailed breakdown of each claim, but honestly it was pretty negative
and felt kind of yucky. Suffice it to say I was not a fan of the piece.

## Git is a Blockchain

Regardless of my feelings about the article, reading it put version control and the blockchain together in my head.
Specifically, I started to think about the combination of the Git version control software with the online
platforms that host those repositories (e.g. GitHub, GitLab)[^git]. The article is interested in the possibility of adding
a blockchain-based payment mechanism on top of Git[^implementation], but while I was trying to figure out what that actually
would mean I realized that Git **itself** is basically a blockchain of NFTs.

Think about it! The commit history is a distributed immutable chain of transactions[^merkle]. Each commit is non-fungible as
the code it refers to is distinct from the other commits. Code review is a 
combination of proof-of-work (the contribution) and proof-of-stake (the reviewer's approval). A Git repository is
obviously not a spendable currency but that's ok, lots of stuff on the blockchain isn't (e.g. NFTs).

{% include components/post_image.html 
    src="/images/nfts_attribution/git_blockchain.jpg" 
    alt="Git is a blockchain"
    caption="I'm going to have to start putting 'blockchain developer' on my resume."
    credit="<a href='https://imgflip.com/i/56xed4'>imgflip</a>"
%}

Ok, ok, it's not _exactly_ the same thing as Bitcoin, an NBA Top Shot NFT, or anything else that's commonly considered
as being on the blockchain: 
* In practice Git projects are highly centralized around one or a few core maintainers who approve changes, rather than relying on a (hopefully large) pool
of peers working to make and verify approvals[^private].
* Determining whether or not new commits should be added to the official version of the codebase is almost always a manual
process, unlike "normal" blockchains where this task is fully automated.
* The less we talk about how often developers need to go back through the commit history and modify it (to remove large files clogging up the repository 
or — worse — exposed credentials) the better[^bfg].  

But it's pretty damn close! An analogy doesn't have to be perfect to be useful; black holes are technically neither
[black](https://www.forbes.com/sites/startswithabang/2019/07/10/sorry-black-holes-arent-actually-black/?sh=2f9d11995c02) 
nor [holes](https://en.wikipedia.org/wiki/Gravitational_singularity), but that name is more than enough to let a layperson 
draw a pretty accurate picture of what they are.

{% include components/post_image.html 
    src="/images/nfts_attribution/black_holes.jpg" 
    alt="Black holes are neither black nor holes. Discuss"
    caption="Obligatory."
    credit="<a href='https://imgflip.com/i/57e0o2'>imgflip</a>"
%}

To be clear, I'm [far](https://www.thoughtworks.com/insights/blog/blockchain-under-hood) 
[from](https://www.reddit.com/r/git/comments/7pgemg/can_git_be_turned_into_a_blockchainlike_system/) 
[the](https://stackoverflow.com/questions/46192377/why-is-git-not-considered-a-block-chain) 
[first](https://news.ycombinator.com/item?id=15860027) 
[person](https://medium.com/@shemnon/is-a-git-repository-a-blockchain-35cb1cd2c491) 
to notice this similarity. But all the references I found discussing this were from 2018 or earlier, before the current
wave of speculation and interest and especially the rise of NFTs — the piece of blockchain technology most similar to how distributed
version control works. I don't understand why nobody is talking about this now, using this
to pull in folks who are familiar with software engineering but may be skeptical of NFTs[^vc].  

## NFTs as Digital Ownership

Furthermore, the interaction between the commit history stored by Git and the online platforms to host those repositories
is really interesting. Because the mechanism for creating new commits is separate from the platforms that host the code
for everyone to view, the core information governing attribution is extremely portable.
Don't like that Microsoft bought GitHub? Migrate to GitLab! Collaborators don't like GitLab? Try out Bitbucket! This is
a pretty powerful idea — by virtue of being in a distributed transaction history, your code contributions are resilient to
platform failure.

NFTs work similarly — the blockchain makes ownership of a particular NFT permanent and easy to verify. Combined with a
platform to validate ownership and provide access, they are basically
a way to enjoy the same rights with digital goods as you have with physical things, which is 
[a](https://www.consumerreports.org/consumerist/that-amazon-video-you-bought-you-may-not-actually-be-able-to-watch-it/) 
[very](https://arstechnica.com/information-technology/2013/12/cant-stream-that-christmas-movie-you-bought-on-amazon-blame-disney/) 
[real](https://www.nytimes.com/2009/07/18/technology/companies/18amazon.html) 
[problem](https://arstechnica.com/tech-policy/2021/04/apple-faces-class-action-lawsuit-over-its-definition-of-the-word-buy/) 
as more and more of our lives move online. 
To me **this** is the core value proposition of NFTs, not buying some token representing a collectible as a flex 
of your crypto-cred. 

Imagine that instead of buying a license to an eBook from Amazon, one that you have incredibly limited rights over, what you
actually purchased was a freshly minted NFT corresponding to the eBook. Instantly you have the ability to re-sell that eBook,
either transferring it directly yourself or via a trusted intermediary platform. It also greatly limits Amazon's ability to 
remove your ability to read the book — they can't revoke the token they gave you, and even if they kick you off of their platform entirely
you can take your NFT somewhere else to validate your license and let you read the book. No longer do companies control both
the distribution of licenses and the access to the content, which blunts lock-in and gives the customer more power.

But this is far more pedestrian and — dare I say it — _boring_ than breathless prose about the latest person to drop a fortune on a reference
to a jpeg, or everyone and their grandmother trying to make a quick buck from an NFT[^metaverse]. It also relies on the presence of centralized gatekeepers to convert
the licenses to actual content,
which is anathema to the crypto-anarchists who tend to dominate the discussion about the utility of the technology. Oh, and not to mention that what discussion
there _is_ tends not to be particularly accessible[^example]. That's a shame, because it makes NFTs 
seem like a joke to anyone who isn't already convinced of their value proposition. The crypto community could do a lot better
in terms of actually making crypto more mainstream if they focused less on these extreme examples of decentralized finance
and put together some business plans that would make sense even to people who don't want to nerd out about 
[virtual land](https://www.reuters.com/business/metaverse-bet-crypto-rich-investors-snap-up-virtual-real-estate-2021-04-19/)
or put their money into something with volatility so high it 
[draws comparisons to a lottery](https://www.businesstimes.com.sg/wealth-investing/the-bitcoin-lottery).
 

[^NFTs]:
    If you're not already familiar with NFTs, 
    [here is an overview](https://decrypt.co/resources/non-fungible-tokens-nfts-explained-guide-learn-blockchain).

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
    
[^merkle]:
    in fact both Git and Bitcoin use the 
    [same algorithm](https://en.wikipedia.org/wiki/Merkle_tree) to verify their transaction histories.
    
[^private]:
    There are also private code repositories, which are even more restrictive in that the transaction history is non-public.   
 
[^bfg]:
    So often a [dedicated open-source tool exists explicitly for this purpose](https://rtyley.github.io/bfg-repo-cleaner/).

[^vc]:
    And also to pitch your new blockchain startup to potential investors! "Well you know how Git, the thing that led to the
    current [Cambrian Explosion](https://en.wikipedia.org/wiki/Cambrian_explosion) of software?
    Yeah, we're building on the same underlying technology."

[^metaverse]:
    Companies selling
    digital property are the closest thing to my vision for NFTs that you see publicized, with just
    enough "we're building the metaverse!" hype to get articles published. But unless you read
    a bunch of sci-fi the idea of people living in a digital universe isn't particularly compelling.

[^example]:
    For example, [this post](https://medium.com/the-challenge/state-of-the-metaverse-2021-9f032fed655b) from earlier
    this year, which hits explicitly on the importance of severing the connection between ownership and access. However,
    the author does so
    amidst stories about video games, a plea for an "Omniverse", and wild claims about AI. None of it is wrong
    or particularly misguided (well, except perhaps for the AI part), but it's not exactly the easiest thing for someone to 
    engage with unless they're already
    pretty far down the blockchain rabbit hole.
