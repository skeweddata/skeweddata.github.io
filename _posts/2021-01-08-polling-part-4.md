---
title:  Political Polling Part 4&#58; The Tricky Stuff
tags:
  - Polling
  - draft
preface_text: >-
  This post is part of a series on political polling. To start 
  at the beginning, click 
  <a href="../../../2020/12/24/polling-part-0.html">here</a>.
  The code used to generate the charts in this post can be found
  <a href="https://github.com/AndrewRook/polling_simulator/blob/main/5_obfuscated_demographics.ipynb">here</a>
  and <a href="https://github.com/AndrewRook/polling_simulator/blob/main/6_advanced_techniques.ipynb">here</a>.
---

A big problem, possibly the biggest problem in political polling,
is that you can't guarantee what demographics will be correlated
with the candidates, or how voters will turn out at the ballot box
or even pick up the phone to respond to a poll. 

<!--more-->

For example, one of the likely reasons 2016 presidential polls 
were off in several key states was the [increase in correlation 
between candidate preference and education](https://www.nytimes.com/2017/05/31/upshot/a-2016-review-why-key-state-polls-were-wrong-about-trump.html).
This change, coupled with a longstanding trend of more educated voters
being more likely to respond to polls, led to an overestimate of
Hilary Clinton's victory chances. More recently, 
[early](https://fivethirtyeight.com/features/could-social-alienation-among-some-trump-supporters-help-explain-why-polls-underestimated-trump-again/) 
[reads](https://www.vox.com/policy-and-politics/2020/11/10/21551766/election-polls-results-wrong-david-shor) 
on Donald Trump's 2020 overperformance in the midwest are suggesting it was
increasing Trump support among people who are socially isolated[^isolated]
and therefore uninterested in responding to polls.

To get a better sense of how this could happen, we can simulate
an electorate similar to the midwest in 2016, where education and
response rate are both correlated with candidate choice:

<table class="table table-striped table-bordered">
<thead>
  <th style="text-aligh: center">Age Group</th>
  <th style="text-aligh: center">Education</th>
  <th style="text-aligh: center">Response Likelihood</th>
  <th style="text-aligh: center">Candidate Preference (Dem-Rep)</th>
</thead>
<tbody>
  <tr>
    <td rowspan="3" style="vertical-align:middle">18-30</td>
    <td>High School</td>
    <td>10%</td>
    <td>62%-38%</td>
  </tr>
  <tr>
    <td>College</td>
    <td>50%</td>
    <td>75%-25%</td>
  </tr>
  <tr>
    <td>Postgraduate</td>
    <td>50%</td>
    <td>88%-12%</td>
  </tr>
  
  <tr>
    <td rowspan="3" style="vertical-align:middle">30-50</td>
    <td>High School</td>
    <td>10%</td>
    <td>32%-68%</td>
  </tr>
  <tr>
    <td>College</td>
    <td>50%</td>
    <td>55%-45%</td>
  </tr>
  <tr>
    <td>Postgraduate</td>
    <td>50%</td>
    <td>78%-22%</td>
  </tr>
  
  <tr>
    <td rowspan="3" style="vertical-align:middle">50-65</td>
    <td>High School</td>
    <td>10%</td>
    <td>10%-90%</td>
  </tr>
  <tr>
    <td>College</td>
    <td>50%</td>
    <td>40%-60%</td>
  </tr>
  <tr>
    <td>Postgraduate</td>
    <td>50%</td>
    <td>70%-30%</td>
  </tr>
  
  <tr>
    <td rowspan="3" style="vertical-align:middle">65+</td>
    <td>High School</td>
    <td>10%</td>
    <td>0%-100%</td>
  </tr>
  <tr>
    <td>College</td>
    <td>50%</td>
    <td>25%-75%</td>
  </tr>
  <tr>
    <td>Postgraduate</td>
    <td>50%</td>
    <td>62%-38%</td>
  </tr>
</tbody>
</table>

We'll leave turnout at 50% for every group: while in reality
this would also be correlated with these demographics, keeping it
constant makes the problem simpler to understand. 

These demographics result in a small victory for the Republican
candidate:

![election results](/images/2021-01-08-polling-part-4/election_results.png)

But, unlike in [past](../../../2020/12/28/polling-part-1.html) 
[posts](../../../2021/01/03/polling-part-3.html), 
we'll pretend that we don't have
an omniscient view of the important demographics and, like
in 2016, we'll ignore education. As
promised, even after doing the demographic weighting discussed
[in the last post](../../../2021/01/03/polling-part-3.html) the
results are still seriously off:

![poll with incorrect demographics](/images/2021-01-08-polling-part-4/poll_assumed_demographic.png)

This poll overstates the Democratic vote-share by close to 10 points,
and is so far off that if a campaign or PAC were to treat these results
as accurate it would likely lead them to make bad decisions[^decisions].

## How Can We Fix This?

Up to this point, I feel pretty confident that the techniques I've
been describing in this series have been reasonably close to what
pollsters are actually doing: in doing my research for this I found
multiple explainers on high level strategies for handling response
rates and turnout likelihood, and the ideas discussed so far are not
so complicated or esoteric that it would be challenging for a pollster
to implement them. From here, however, I'm flying pretty blind: I'm 
going to suggest a couple of things that I think would be helpful,
but they depend on details about how polls work that I do not
know well. Furthermore, I have very little idea about how novel
they are. For all I know they are already in common use.

### 1. Vary Survey Strategy
If pollsters make multiple polls of the same race, then generally
seem to use the same polling strategy each time: the number of
respondents is very similar poll-to-poll, as are the questions
asked[^ipsos]. On the one had this is a good idea, as it makes
the results between polls directly comparable to each other. But
on the other hand if one of your polls has a faulty assumption,
then that problem will propagate to **all** of your polls.

If carefully thought out, I believe occasionally varying 
your survey strategy would be a useful way to gain confidence
that the assumptions you're making are valid. Basically, if
you have the "correct" view of the important factors influencing
voting patterns, changing the details of your mehodology should
produce approximately the same result. For example: 

* A poll using a different contact method, e.g. if you've been 
  calling respondents on the phone, try a poll done by mail instead.
* A poll where you vary the order of the questions, or only
  ask a subset of the questions, or even a poll where instead of
  only asking about politics you start by asking questions on
  a totally different topic.
* A mega-poll with triple the respondents, or one where you work
  much harder than normal to get your response rate up.
* A poll that offers a significant cash incentive for completion. 

The downsides to changing methodologies is that it increases the
chances for you to make a mistake in analyzing your data: there's
just more choices you'll need to make in trying to figure out
the results from a variety of polls. Varying polling types can
also cost more, both in time spent building the new polls out
but also in that they may cost more to execute (especially if
you run a larger poll, or try harder to followup with respondents). 

### 2. Check For Trends Against Unused Demographics
If you have additional demographic information about your poll
respondents beyond what you use to weight for turnout and response
rate, you can check the raw responses to see if candidate preference
is correlated with any of the "extraneous" demographics. For instance,
going back to the simulated example above, plotting candidate 
preference versus education would have shown a correlation, indicating
that in future polls we should consider weighting by that demographic
as well.

The challenges with this idea are twofold:
1. There is a chance of a false correlation, especially if you try
   to correlate many different demographic segmentations with
   candidate preference. Therefore you would need to be very careful
   to ensure that you were actually finding a real electoral signal,
   rather than just getting lucky with random noise. 
2. Gathering lots of demographic information is difficult. Asking
   poll respondents about demographics costs money, and adding too
   many questions will bloat survey times and may lead to people
   giving up before completing the poll. In some cases it may be
   possible to link respondents to demographics separately from
   poll questions (e.g. pulling public-records data), but getting
   that data can be expensive (and sometimes 
   [shady](https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal)).
   

### 3. Include Data About Contacting Respondents 
If your poll attempts to contact respondents multiple times,
the data just on how long it takes to get a response could be
useful. If there is a relationship between candidate preference
and the number of contact attempts **within a demographic group**,
then that indicates you probably can't extrapolate the voting
preferences of your poll respondents to the broader population. 
Here's what that looks like in my simulations, looking at just
the 30-50 year old age group when using 5 contact attempts:

![Voter preference by number of contact attempts](/images/2021-01-08-polling-part-4/preference_by_contacts.png)

You can see how the candidate preference shifts from Democrat to
Republican as you go from one to five contact attempts. 

This approach depends on knowing how people react to multiple contact
attempts: my simulator assumes that they have a flat chance of responding
to a given contact attempt, but in reality that may not be the right
model. Additionally, if there is a group of people who _never_ respond
to polls, there's nothing this method will do to help you understand
if their preferences meaningfully differ from the respondents.

## Where Do Polls Go From Here?
Polling seems pretty straightforward on the surface — randomly
mash the buttons on a phone and then ask whoever answers who
they're going to vote for! — but there's far more to it, and
it's getting harder. Response rates are down, more and more of
our lives revolve around cell phones and the internet instead of
landlines, and significant swaths of the electorate are re-aligning
themselves in surprising ways. Underestimating Trump twice in a row
should provoke a lot of soul-searching among pollsters, especially
since the early indications are that these issues are going to get
worse instead of better. I don't think the "tried-and-true" techniques
that pollsters have used for the last several decades are going to work
as well anymore; the ones that want to stay relevant are going to have
to get increasingly clever — and careful — with their techniques.

[^isolated]:
    Or it could be that Trump supporters are growing more isolated, 
    exactly what is causing what here is not totally clear to me.
    
[^decisions]:
    For instance, cancelling candidate appearances in the state,
    eliminating ad spend, and/or shifting get-out-the-vote efforts.
    
[^ipsos]:
    For example, between September and November 2020 Ipsos 
    ran six polls of the 2020 presidential race in Wisconsin
    (tracked by [fivethirtyeight](https://projects.fivethirtyeight.com/polls/president-general/wisconsin/).
    All of these polls use nearly identical numbers of respondents,
    the same questions, the same demographic sampling, and the 
    same turnout models.