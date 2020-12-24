---
layout: defaults/page
permalink: index.html
narrow: true
title: Hi there!
---
This is my personal website. All opinions in it are my own[^opinions].

[^opinions] Unless you're so persuaded by my arguments that you want to parrot them
yourself, in which case they can be yours too.

## Recent Posts

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}


