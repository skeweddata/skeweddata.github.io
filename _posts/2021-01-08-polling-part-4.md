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
  <a href="https://github.com/AndrewRook/polling_simulator/blob/main/5_obfuscated_demographics">here</a>.
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

### 2. Check For Trends Against More Demographics

### 3. Include Data About Contacting Respondents 

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