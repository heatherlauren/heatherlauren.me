---
layout: post
title:  "@supports – The Coolest CSS Feature You're Not Using"
date:   2016-11-11
categories: ['tech']
tags: CSS
excerpt: With feature detection now native in CSS, it's time to take your progressive enhancement to the next level.
image:
   feature: feature-query
---

Grid, scroll snap – hell, depending on who you ask, even flexbox: CSS is chock-full of cool features that, unfortunately, just aren't quite ready to be used in production yet. Or are they? I recently had the privilege of watching [Rachel Andrew](https://rachelandrew.co.uk/) speak about a few of these new and upcoming features at [ffconf](https://2016.ffconf.org/), but the highlight of the talk for me was being introduced to something that might seem pretty unimpressive at first glance – feature queries. They might not be something as visually impressive as [CSS Shapes](http://www.webdesignerdepot.com/2015/03/how-to-get-started-with-css-shapes/) or as obviously useful as [sticky positioning](https://developer.mozilla.org/en/docs/Web/CSS/position#Sticky_positioning), but they will allow you to use cutting edge features like them a lot faster than you might think.

Feature queries bring the ability to detect whether a user's browser supports a particular feature to native CSS. While we've been able to do relatively painless feature detection through [Modernizr](https://modernizr.com/) for a long time now, being able to move away from reliance on a JavaScript library like Modernizr brings a number of benefits. No matter how small Modernizr itself may be, removing the requirement for a script to download, execute and complete before CSS can be applied will always result in a performance boost. Similarly, working solely in CSS eliminates the chance JavaScript-based feature detection has of failing to execute – if your CSS loads, your CSS feature detection is going to load too.

The benefits of feature detection in general are clear. A lot of front-end developers may roll their eyes at the term 'progressive enhancement' these days, but the fundamental principle of supplementing the user's experience as their technological capabilities allow will always be solid. Through using feature detection, you can easily provide a cutting-edge experience for the small percentage of users whose browsers offer support, and a robust experience for those whose don't; even better, as users upgrade from the latter group to the former, they'll automatically be served the enhanced features.

So, how does native CSS feature detection work? The syntax is essentially borrowed from CSS3's well-established [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), so shouldn't be too unfamiliar. Let's take a look at an example:

{% highlight scss %}
.main {
  display: flex;
}

@supports (display: grid) {
  .main {
    display: grid;
  }
}
{% endhighlight %}
If the user's browser supports grid, the code will run and overwrite the styling above it; if it doesn't, it'll be ignored and the initial styling applied.

You can chain feature queries:

{% highlight scss %}
@supports (display: grid) and (position: sticky) {
  // do something
}
{% endhighlight %}


{% highlight scss %}
@supports (display: grid) or (position: sticky) {
  // do something
}
{% endhighlight %}


{% highlight scss %}
@supports (display: grid) and (position: sticky) or (shape-outside: circle()) {
  // do something
}
{% endhighlight %}

And you can also use them to check if a browser _doesn't_ support a feature:

{% highlight scss %}
@supports not (display: grid) {
  // do something
}
{% endhighlight %}

It might, therefore, seem obvious to do something like this:

{% highlight scss %}
@supports (display: grid) {
  // do something
}
@supports not (display: grid) {
  // do something else
}
{% endhighlight %}

In fact, I use this very pattern in the source code for this blog:

{% highlight scss %}
@supports (display: grid) {
  .blog-layout {
    // grid-based layout
  }
}

@supports not (display: grid) {
  .blog-layout {
    // fallback layout
  }
}
{% endhighlight %}

However, you should be careful with this. Feature queries have good support, but aren't universally supported - most obviously in IE.

<figure>
  <img alt="Feature query compatibility table, showing a lack of support in Internet Explorer" src="/assets/images/feature-queries-compatibility.jpeg">
</figure>
<figcaption>
  <a href="http://caniuse.com/#feat=css-featurequeries">http://caniuse.com/#feat=css-featurequeries</a>
</figcaption>

That means that if you're visiting this blog in IE, you're not going to be served the grid-based layout _or_ the fallback, and the page isn't going to work. That's a situation you certainly want to avoid for true progressive enhancement, which you can do through ensuring you provide a non-`@supports` based fallback:

{% highlight scss %}
.blog-layout {
  // fallback layout
}

@supports (display: grid) {
  .blog-layout {
    // grid-based layout
  }
}
{% endhighlight %}

If support for older browsers is important in your project, you may come up against another compatibility issue. In most cases, a lack of support for feature queries in old browsers won't be a problem – if the user's browser doesn't support them, it probably won't support the feature you're testing against either. However – most commonly in Safari, due to its late implementation of feature queries – you can occasionally run into an issue where feature queries aren't supported, but the feature you're testing with them is. In this case, despite having browser support, the feature won't be applied as the entire block of code contained within the feature query will be ignored.

This probably isn't going to cause you a lot of problems. If the code doesn't run, it just means that the older browser gets the same experience as any other older browser that don't support the feature. It's also increasingly rare – the majority of the time, you're going to be using `@supports` with newer CSS features like grid or sticky positioning, whose implementation is predated by feature queries in all browsers. Just bear it in mind if you ever find yourself missing a feature in a browser you know supports it.

And that's feature queries! More of a workhorse than a show pony, they're nonetheless a boon not just for developers eager to exploit the capabilities of cutting-edge CSS, but for their users who need a robust experience too.
