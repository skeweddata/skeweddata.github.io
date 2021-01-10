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

To get a better sense of how this could happen, we can generate
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
    <td rowspan="3" vertical-align="middle">30-50</td>
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
    <td rowspan="3" vertical-align="middle">50-65</td>
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
    <td rowspan="3" vertical-align="middle">65+</td>
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


[^isolated]:
    Or it could be that Trump supporters are growing more isolated, 
    exactly what is causing what here is not totally clear to me.