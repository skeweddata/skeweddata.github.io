---
title: Checksum Your Data Processing
tags:
  - Data Analysis
  - Rants
---

This year I volunteered to manage the fall fundraiser for my kids' Girl Scout troop.
The girls sell snacks and magazines to their family and friends, and then get a cut of the
proceeds. They also can earn patches and little trinkets based on how many items they sell.
The Girl Scouts use the volunteer managers as a free last-mile distribution network, which
means that I spent the better part of my morning today going through bags of tchotchkes
and packaging them up for the 20+ girls in the troop based on what they earned. 

This is fiddly work. The patches are small and easily miscounted or mislaid, and there
are more than 15 different kinds of rewards which makes it easy to accidentally skip over
one. And mistakes are painful — I'm on the hook if anything is missing[^money] — so it's
important to get it right. So I borrowed something from my data analysis bag of tricks
and used a checksum.

<!--more-->

## What's a Checksum?
A checksum is a piece of information that is derived from some data you care a lot about and want
to ensure is accurate. The checksum is usually much smaller than the original
data (to reduce bandwidth/storage burdens), and is generated via a process that can be easily (and cheaply) repeated by an average user.
Then, whenever someone wants to check if the data is unchanged, they can recompute
the checksum and see if they match[^matching]. 

Whether or not you knew the term, you've almost certainly encountered a checksum before.
They're very useful and show up in lots of settings:

* Software packages downloadable from the internet often use checksums based on a hash of
  package itself to help users guard against hacked or corrupted downloads.
* Similarly, checksums can be used for files to monitor data corruption due to
  aging hard disks (so-called 'bit rot').
* Simple single-digit checksums (called 'check digits') are used in lots of places to detect
  mistakes in user input, including:
   * UPC barcodes
   * International Standard Book Numbers (ISBNs)
   * credit cards[^creditcards]
   
In my case, I treated the total number of reward items each girl was supposed to get as the checksum,
and after I picked out the specific rewards added them all up and compared to the expected total.
If they matched, then I can be fairly confident I did everything right.
(Sure, it's possible that I might have one too few of item X and one too many of item Y and the
checksum would still match, but a) that's not particularly likely, and b) in that situation it's
relatively unlikely that I would make compensating additional mistakes such that I used up all the allocated
rewards and wasn't missing anything.)
   

## How to Use Checksums when Processing Data
When you're transforming data it's often difficult to tell if what you did was right, both in the sense
of the intent matching the execution (ie no bugs in your code) as well as the sense of whether
the transformation is appropriate for the dataset (ie your assumptions about the data are accurate).
Datasets can be large and errors may not be readily apparent from just looking at a few records, and 
it's not usually straightforward to write automated unit tests on a data transformation[^tests].

One thing you can do, however, is identify a property of your input data that you expect to
be unchanged (or changed in a predictable way) after applying the transformation. Or in other words a checksum,
where instead of validating that data hasn't become corrupted or mis-entered you're validating
that your understanding of the data and the logic you just applied to it was reasonable. A common
example of this is when I have to join two tables together, where I expect all the records in
table A to match those in table B exactly once. Here I use the length of table A as my checksum,
and validate the checksum against the length of the joined table.

You can use checksums to validate lots of data processing steps. In fact you've probably already used them without thinking about it.
If you've ever calculated the length of a dataset and compared it to the number of distinct values in a column
to confirm that the column values are unique, or checked that no records were dropped in an groupby+sum by comparing the sum of the groups
 to the global sum of the column, then congrats! You've used a checksum.

## Towards Hypothesis-Driven Data Processing
Checksums are a core component of my broader strategy for validating my data transformations through
hypothesis testing. I like to think of my analysis as a series of tiny experiments. Before I do a transformation to
my data (especially a more complex one), I step back and I generate a hypothesis: what should this
data look like after the transformation, given what I know about it already and my assumptions
about what the data represents? Then I do the transformation, and test the hypothesis. If it doesn't
match, then I dig in and figure out what's wrong. Did I mess up the logic of the transformation?
Or is my understanding of the data incorrect?

This approach enables me to catch issues with my data processing quickly and (relatively) efficiently — especially
compared to waiting until my analysis is complete and only checking the final charts/tables for reasonableness —
and I often learn new things about my dataset in the process. It keeps me connected to my data and gives me confidence
in my results.

[^money]:
    The rewards themselves aren't worth much so any financial penalties for messing up
    would be minimal. However, most of the rewards are custom made for the fundraiser, so it's
    not certain that it would even be _possible_ to replace something lost or damaged. 

[^matching]:
    A subtle-but-important wrinkle here is that ensuring the recomputed checksum matches
    is not a **guarantee** that the data is unchanged. In order to fully validate that they
    match would require a checksum functionally as large as the original data. This would eliminate the
    benefits of a checksum as a portable and inexpensive validation tool. In practice checksums
    strike a balance between complexity and the quality of the validation based on their intended use-case.

[^creditcards]:
    Credit card numbers are actually not as random as you might expect. In addition to the final
    digit being a check digit, the first number is the network your card is on (e.g. VISA/Mastercard),
    and the next several digits are a unique identifier for your bank. If you've ever wondered how
    a website knew that you were using a Mastercard even before you finished entering your credit card
    number when buying something, now you know! 

[^tests]:
    Unit tests are great when you can do them, but they're often not feasible for data work. Many data
    analyses are ad hoc and will likely not be repeated, so writing an automated test suite is less
    valuable. Even for projects where the processing steps are likely to be reused there is often
    limited pre-existing support for testing harnesses — you're most likely going to need to figure out how
    to set up, populate, and tear down a testing database on your own. And finally, there are some key things
    you'd like to test that just aren't very conducive to unit tests, such as whether or not the tables
    still exist in your database or if column definitions have been modified. 