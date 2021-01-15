---
title:  Lies, Damn Lies, and NFL Next Gen Stats Powered by AWS
tags:
  - NFL
  - Transparency
---

I like to imagine that at some point in 2017 the NFL execs gathered
around a long mahogany table in their <del>fancy clubhouse</del> 
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
have enough analysts to work with just the box-score stats[^analysts]."

"Well the owners are getting pissed off about throwing away all that
money," the exec spat back, "at least when we launched the thing they
could bask [in all the publicity](https://www.forbes.com/sites/jasonbelzer/2014/07/31/nfl-partners-with-zebra-technologies-to-provide-next-generation-player-tracking/?sh=12c3c4755598)
about how modern and forward-thinking the league was."

"You know," 





I like to imagine the AWS Account Manager for the NFL sitting down with
Cloud Engineering sometime in 2017. "This isn't great", they say with
confusion, "The league is storing all of their player-tracking data
on S3, but they aren't doing anything with it. They're not spinning up
instances to analyze it, setting up APIs for public access, or doing
anything else we can charge them for. Hell, we can't even take 
advantage of our [opaque data transfer costs](https://www.lastweekinaws.com/blog/understanding-data-transfer-in-aws/)
because nobody's even touching the data!"

"Well what do you expect", a particularly football-savvy engineer
replies, "the NFL barely
has any idea what to do with the stats they already _have_. Teams
are just now starting to catch on to the fact that they should
be punting way less often, a fact that has been widely known in 
the analytical community 
[for well over a decade](https://www.footballoutsiders.com/stat-analysis/2012/aggressiveness-index-2011)."
Hell, there are barely even enough analysts on the teams to work with 
box-score stats[^analysts]!"


[^analysts]:
    [The best estimate I could find](https://www.espn.com/nfl/story/_/id/29939438/2020-nfl-analytics-survey-which-teams-most-least-analytically-inclined)
    indicates that there are ~3 analysts per team, which in my experience
    is the bare minimum to turn around simple ad hoc analyses and maintain 1-2
    ongoing projects. And that's assuming there's at least _some_ infrastructure
    support around them so they don't have to do things like manage their
    own databases or stand up their own deployment servers. 