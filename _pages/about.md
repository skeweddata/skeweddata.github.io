---
layout: defaults/page
permalink: about.html
narrow: true
title: {% highlight bash %}whoami{% endhighlight %}
---

## What is it?

{% include components/intro.md %}

## Examples

Here's some quick examples of what it can do.

### Code Highlighting

{% highlight javascript %}
var modulePattern = (function() {
    // your module code goes here
    var sum = 0 ;

    return {
        add:function() {
            sum = sum + 1;
            return sum;
        },
        reset:function() {
            return sum = 0;
        }
    }
}());
{% endhighlight %}
