---
layout: defaults/page
permalink: index.html
narrow: true
---
## Hi There!
---
Welcome to _Skewed_, a blog about data, statistics, and not taking things
at face value. All opinions in it are my
own[^opinions].  
<br />

[^opinions]:
    Unless you like them so much that you want to adopt them
    for yourself, in which case they can be yours too.

# Recent Posts

{% for post in site.posts limit:3 %}
{% unless post.tags contains "draft" %}
{% include components/post-card.html %}
{% endunless %}
{% endfor %}
