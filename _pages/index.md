---
layout: defaults/page
permalink: index.html
narrow: true
title: Hi there!
---
This is my personal website. All opinions in it are my
own[^opinions].  
<br />

[^opinions]:
    Unless you love my opinions so much that you want to parrot them
    yourself, in which case they can be yours too.

# Recent Posts

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}


