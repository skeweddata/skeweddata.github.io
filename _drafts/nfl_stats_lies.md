---
title:  Lies, Damn Lies, and NFL Next Gen Stats Powered by AWS
tags:
  - Football
  - Transparency
  - Rants
---

I like to imagine that at some point in 2017[^2017] the NFL execs gathered
around a long mahogany table in their <del>secret clubhouse</del> 
NYC headquarters. They took a break from their important discussions
about how to downplay the connection between football and CTE
or the best ways to sucker cash-strapped municipalities into funding
new stadium development, to grill the middle manager who was in charge of
their data. "Hey nerd!" I presume they opened, "Why the hell have we
been paying all this money for the last three years for these stupid 
RFID chips? Teams are barely using it!" 

<!--more-->

"True," the nervous middle manager, who'd only been given this job because
they'd taken a stats class once in college, replied, "but most teams' analytics
departments didn't even exist 5 years ago, and even now they barely 
have enough analysts to work with just the box-score stats[^analysts].
We'd probably see faster progress if we made the data public–"

"Public? PUBLIC?!" The exec spat back. "If we let just anyone
use this data, think of how fast we'd be inundated with a bunch
of know-it-all amateurs figuring out how to run teams better. 
No, we need to keep this in house — I know, I've seen all those
flashy AWS commercials, let's have them do it! [They want to 
broadcast our games so badly](https://www.cbssports.com/nfl/news/amazon-wins-huge-bidding-war-to-stream-thursday-night-football-games-in-2017/) 
we'll force 'em to throw in some of that fancy 'machine learning' I keep
hearing about as part of the deal."

And thus, NFL Next Gen Stats Powered by AWS was born.

## The NFL Has No Idea What to do With Its Player-Tracking Data
I'm sure the decision to outsource the NFL's player-tracking data
to AWS wasn't made in this rash manner[^meetings]. I don't really
think that the league considers statistics to be second-class
citizens, or that analysts on most teams aren't managing to do
**something** with the player-tracking data. But nonetheless it
seems pretty obvious to me that the NFL is almost totally clueless about what
to do with its investment:
* Before its partnership with AWS, player-tracking stats were almost
  non-existent, except for the occasional trivialities like how fast
  a player was running.
* Even today "Next Gen Stats" seems to be mostly commercials for AWS, a couple
  of overlays during the broadcasts, and a [website](https://nextgenstats.nfl.com/)
  with a small number of highly aggregated stats with limited provenance[^download].
* The league has 
  [started](https://www.kaggle.com/c/nfl-big-data-bowl-2020) 
  [sponsoring](https://www.kaggle.com/c/nfl-impact-detection) 
  [Kaggle](https://www.kaggle.com/c/nfl-playing-surface-analytics) 
  competitions[^kaggle] in an effort to crowdsource useful player-tracking stats,
  albeit with carefully
  controlled samples of player-tracking data under restrictive terms[^terms].
* Even ostensible partners like ESPN don't seem to have access to the raw data.

To be clear, I don't think this is particularly surprising: the
player tracking data is a totally different world from the box
score stats everyone is used to up to this point, and it's going
to take a long time before everyone gets comfortable with it. I'm
actually very impressed by the humility of the league, both in
reaching out to AWS for help and putting up those Kaggle contests[^college].

## Black Boxes Are Bad

Those insipid Next Gen Stats ads have been all over NFL broadcasts this season.
They're all pretty annoying to me, a blend of forced slang and
random numbers recited at high velocity[^feet]. But for this post I'll focus on [one 
featuring Panthers running back Christian McCaffrey](https://www.youtube.com/watch?v=bGqoSBSh1hA&feature=emb_title),
which includes a clip of him running towards an apparently open end zone while an
on-screen graphic indicates his "Touchdown Probability" is only 14.2%:

![McCaffrey screenshot]({{ "/images/nfl_stats_lies/mccaffrey.png" | absolute_url }}){: width="100%"}
_Credit: [Amazon Web Services via YouTube](https://www.youtube.com/watch?v=bGqoSBSh1hA&feature=emb_title)_

"How could those odds be so low?" you may ask, or perhaps (for the more pedantic) you may wish to inquire
whether is really accurate to that extra 0.2% level. Well, here's an explanation: The odds are low
because they were made up by the AWS and/or NFL marketing departments, and they threw in the extra decimal
place because it makes the stat sound more authoritative. To make it a little more legit they confirmed with a
couple of co-workers that the number seemed about right, ballpark, should be fine.

This is probably — almost certainly — not what happened! There is, most likely, an actual honest-to-goodness
machine learning model making these predictions. There's a decent chance it was properly built and tested[^methodology]. 
There could be more information that the model has access to that, were we to have it too, would make the prediction 
seem more reasonable — the linebacker trying to chase McCaffrey down might have a 
better angle than it looks like in the commercial, or maybe there are 3 defenders bearing down on
him from just off screen. 

But you can't prove that! There's no published information (that I'm aware of) on the existence or methodology of
a Next Gen Stats touchdown probability model. The input player tracking data aren't available, so you 
can't even build your own model to check to see if you also get something close to 14% probability for this play.
Again, I don't actually believe the NFL is faking these stats, don't take the 
preceding paragraph literally, yadda yadda I don't want to be sued yadda yadda. My point, however, is that 
given the information available the two scenarios are functionally indistinguishable. 


## You Can't Protect Your Valuable Data IP and Advertise It Too 
Look, if the NFL wants to keep its player-tracking data private for whatever reason, it's totally
their right to do so. Even if it stunts the development of transformational statistics
that will both improve teams' ability to evaluate players and strategize for game day as well
as give viewers new and exciting ways to understand the game, as I believe that decision does, it's
their data and therefore their call.

But you can't then throw out random nuggets from those stats and expect much in the way
of returns on that investment. I mean, it's cool I guess that DK Metcalf 
[can reach speeds of 22 miles per hour](https://twitter.com/NextGenStats/status/1320537210475683840), 
but it's
plainly obvious that he is absolutely hauling ass if you just, like, 
[watch the replay yourself](https://www.youtube.com/watch?v=dKTorclPR40). Similarly, does a fan _really_ gain
that much from knowing that [some defensive coaches like to line up their players to look like smiley faces while
others prefer sad faces](https://twitter.com/NextGenStats/status/1351995519405596679)?

I believe that there's a world out there where regular fans talk coherently about "advanced" stats
like Completion Percentage Above Expectation and Wide Receiver Average Separation, a world where 
everyone's understanding of the game — fans, coaches, players, and executives — is deeper and more
nuanced. Unfortunately, I don't think you get there by jealously guarding your data, doling it out in
rare, small doses in the hopes that people won't think to ask any deeper questions about what it means
or where it comes from.  


[^2017]:
    I'm guessing this conversation happened around this time, since 
    this is the first year either AWS or machine learning are mentioned
    in 
    [the official Next Gen Stats timeline](https://operations.nfl.com/gameday/technology/nfl-next-gen-stats/).

[^meetings]:
    For one, it probably involved at least _two_ meetings.

[^analysts]:
    [The best estimate I could find](https://www.espn.com/nfl/story/_/id/29939438/2020-nfl-analytics-survey-which-teams-most-least-analytically-inclined)
    indicates that there are ~3 analysts per team, which in my personal experience
    is the bare minimum to turn around simple ad hoc analyses and maintain 1-2
    ongoing projects. And that's assuming there's at least _some_ infrastructure
    support around them so they don't have to do things like manage their
    own databases or stand up their own deployment servers. 
    
[^download]:
    Not to mention the fact that the stats can't be downloaded without
    scraping the site, [which people have actually resorted to](https://arxiv.org/abs/1906.03339)!  
    
[^kaggle]:
    [Kaggle](https://www.kaggle.com/) is a website that hosts machine learning competitions,
    Usually sponsored by companies who put up prizes for the best
    models. If you remember the [Netflix Prize](https://en.wikipedia.org/wiki/Netflix_Prize)
    contest from the late 2000s, it's mostly challenges like that. Interestingly,
    the NFL competitions work somewhat differently than a "normal"
    Kaggle contest: rather than giving teams a specific objective
    (e.g. "build a model to most accurately predict X outcome),
    most of the NFL's competitions have open questions like 
    ["Help evaluate defensive performance on passing plays"](https://www.kaggle.com/c/nfl-big-data-bowl-2021/overview).
    
[^terms]:
    For example, the [most recent competition](https://www.kaggle.com/c/nfl-big-data-bowl-2021/rules)
    explicitly that the data is only for "non-commercial purposes only, including for participating in 
    the Competition and on Kaggle.com forums, and for academic research 
    and education," and that you "agree not to transmit, duplicate, publish, 
    redistribute or otherwise provide or make available the Competition Data 
    to any party not participating in the Competition."
    
[^college]:
    Although using volunteer labor under the guise of educational
    pursuit and the possibility of a future large reward really
    seems more like a college football thing. 
    
[^feet]:
    Also an odd digression about feet, [courtesy of Deshaun Watson](https://www.youtube.com/watch?v=Ayk3zTrs58A).

[^methodology]:
    Not only do you have to make sure that you have a proper testing set to validate that the model outputs correct
    probabilities overall, but you'd really want to also check that the model works well for the particular set of
    inputs (down, distance, player locations, etc) used in the commercial.