---
date: 2022-01-07
tags:
  - Lighthouse
  - SEO
---

# Cumulative Layout Score

Have you ever been reading an article online when something suddenly changes on the page? Without warning, the text moves, and you've lost your place. Or even worse: you're about to tap a link or a button, but in the instant before your finger lands—BOOM—the link moves, and you end up clicking something else!

Most of the time these kinds of experiences are just annoying, but in some cases, they can cause real damage.
A screencast illustrating how layout instability can negatively affect users.

Unexpected movement of page content usually happens because resources are loaded asynchronously or DOM elements get dynamically added to the page above existing content. The culprit might be an image or video with unknown dimensions, a font that renders larger or smaller than its fallback, or a third-party ad or widget that dynamically resizes itself.

What makes this issue even more problematic is that how a site functions in development is often quite different from how users experience it. Personalized or third-party content often doesn't behave the same in development as it does in production, test images are often already in the developer's browser cache, and API calls that run locally are often so fast that the delay isn't noticeable.

The Cumulative Layout Shift (CLS) metric helps you address this problem by measuring how often it's occurring for real users.

## What is CLS?

CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page.

A layout shift occurs any time a visible element changes its position from one rendered frame to the next. (See below for details on how individual layout shift scores are calculated.)

A burst of layout shifts, known as a session window, is when one or more individual layout shifts occur in rapid succession with less than 1-second in between each shift and a maximum of 5 seconds for the total window duration.

The largest burst is the session window with the maximum cumulative score of all layout shifts within that window.
Example of session windows. Blue bars represent the scores of each individual layout shift.

## Caution

Previously CLS measured the sum total of all individual layout shift scores that occurred during the entire lifespan of the page. To see which tools still provide the ability to benchmark against the original implementation, check out Evolving Cumulative Layout Shift in web tooling.

## What is a good CLS score?

To provide a good user experience, sites should strive to have a CLS score of 0.1 or less. To ensure you're hitting this target for most of your users, a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices.

![Good CLS values are under 0.1, poor values are greater than 0.25 and anything in between needs improvement](https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/9mWVASbWDLzdBUpVcjE1.svg)

> To learn more about the research and methodology behind this recommendation, see: Defining the Core Web Vitals metrics thresholds

## Layout shifts in detail

Layout shifts are defined by the Layout Instability API, which reports layout-shift entries any time an element that is visible within the viewport changes its start position (for example, its top and left position in the default writing mode) between two frames. Such elements are considered unstable elements.

Note that layout shifts only occur when existing elements change their start position. If a new element is added to the DOM or an existing element changes size, it doesn't count as a layout shift—as long as the change doesn't cause other visible elements to change their start position.

## Layout shift score

To calculate the layout shift score, the browser looks at the viewport size and the movement of unstable elements in the viewport between two rendered frames. The layout shift score is a product of two measures of that movement: the impact fraction and the distance fraction (both defined below).

> layout shift score = impact fraction \* distance fraction

## Impact fraction

The impact fraction measures how unstable elements impact the viewport area between two frames.

The union of the visible areas of all unstable elements for the previous frame and the current frame—as a fraction of the total area of the viewport—is the impact fraction for the current frame.

Impact fraction example with one _unstable element_

In the image above there's an element that takes up half of the viewport in one frame. Then, in the next frame, the element shifts down by 25% of the viewport height. The red, dotted rectangle indicates the union of the element's visible area in both frames, which, in this case, is 75% of the total viewport, so its impact fraction is 0.75.

## Reference

- https://web.dev/cls/
