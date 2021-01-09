---
layout: defaults/page
permalink: index.html
narrow: true
title: Hi There!
---
This is my personal website and blog. All opinions in it are my
own[^opinions].  
<br />

[^opinions]:
    Unless you like them so much that you want to adopt them
    as your own, in which case they can be yours too.

# Recent Posts

{% for post in site.posts limit:3 %}
<h2>{{ post.tags }}</h2>
{% unless post.tags contains "draft" %}
{% include components/post-card.html %}
{% endunless %}
{% endfor %}


