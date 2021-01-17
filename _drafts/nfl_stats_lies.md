---
title:  Lies, Damn Lies, and NFL Next Gen Stats Powered by AWS
tags:
  - NFL
  - Transparency
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

## The NFL Has No Idea What to do with Its Player-Tracking Data
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

## Black Boxes are Bad

However, if the league really wants to see returns on what I assume must be a 
multi-million dollar investment this isn't going to be enough. Partnering
with AWS helps close some of the gaps inherent with
player tracking data — the engineering challenges around working
with larger datasets, the more advanced modeling techniques needed
for such complex data — but that's not going to be sufficient. 
Before these stats can become commonplace, the
NFL will need to dramatically up its transparency across several dimensions:
1. Player tracking data needs to be made publicly available.
2. The methodology behind the Next Gen metrics must be documented — more than a [1-2 sentence
   summary](https://nextgenstats.nfl.com/glossary).
3. Outputs need to be accessible on a play-by-play level in a machine-readable format.
4. Model outputs should be intuitively useful and correspond to real-world concepts.

The first three items are necessary to allow for independent validation of the models — right
now we have no guarantee that the stats we're seeing are accurate. Take the
[Next Gen Stats commercial starring running back Christian McCaffrey](https://www.youtube.com/watch?v=bGqoSBSh1hA&feature=emb_title).
At one point the
commercial shows McCaffrey looking at what appears to be a clear path to the end zone,
while at the same time an on-screen graphic indicates that the probability of scoring
is only 14.2%:

![McCaffrey screenshot](/images/nfl_stats_lies/mccaffrey.png){: width="100%"}
_Credit: [Amazon Web Services via YouTube](https://www.youtube.com/watch?v=bGqoSBSh1hA&feature=emb_title)_

Maybe that's right! The linebacker trying to chase him down might have a better angle than it looks
like from this angle, or maybe there's 3 defenders bearing down on McCaffrey just off screen[^methodology]. But
we have way too little information to tell. 



[^2017]:
    I'm guessing this conversation happened around this time, since 
    this is the first year either AWS or machine-learning are mentioned
    in 
    [the official Next Gen Stats timeline](https://operations.nfl.com/gameday/technology/nfl-next-gen-stats/).

[^meetings]:
    For one, it probably involved at least _two_ meetings.

[^analysts]:
    [The best estimate I could find](https://www.espn.com/nfl/story/_/id/29939438/2020-nfl-analytics-survey-which-teams-most-least-analytically-inclined)
    indicates that there are ~3 analysts per team, which in my experience
    is the bare minimum to turn around simple ad hoc analyses and maintain 1-2
    ongoing projects. And that's assuming there's at least _some_ infrastructure
    support around them so they don't have to do things like manage their
    own databases or stand up their own deployment servers. 
    
[^download]:
    Not to mention the fact that the stats can't be downloaded without
    scraping the site. Ugh.
    
[^kaggle]:
    [Kaggle](https://www.kaggle.com/) is a website that hosts machine learning competitions,
    Usually sponsored by companies who put up prizes for the best
    models. If you remember the [Netflix Prize](https://en.wikipedia.org/wiki/Netflix_Prize)
    contest from the late 2000s, it's challenges like that. Interestingly,
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
    
[^methodology]:
    There are also several higher-level questions that relate more to how the model was built. 
    Does it consider the specific skills of McCaffrey, or is it the probability assigned to a
    generic running back? Is the probability at that moment in time or at the start of the play?
    Does it consider the positions of the players or also their speed and directions? Does it
    take into account how well the Panthers have been running the ball so far in the game?