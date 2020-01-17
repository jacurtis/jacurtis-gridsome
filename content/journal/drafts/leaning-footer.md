---
title: Your Awesome Title
slug: url-slug-for-browser
date: 2020-01-07
published: false
tags: ['VS Code', 'Linux']
series: false
canonical_url: false
description: "An exciting spoiler or introduction to get people's attention."
---

How to create a footer that always stays on the bottom. There are different kinds of footers you can build. The most common type is a standard footer that just sits at the end of the html document. I like to call this the "Flow Footer" because it just goes with the flow. If the HTML document is short, then it just sits up there awkwardly halfway up the page. If the HTML document is long, then it sits patiently at the bottom of the long document. This is how most people make footers. It just goes with the flow and does whatever the document does.

### 1. The Flow Footer

The Flow Footer is easy to make, you basically just add a footer div to the bottom of your document. That's it! This is why it is so easy and most people do this. It is honestly fine 95% of the time. Most HTML documents are longer than the initial viewport, so the footer is usually below the fold somewhere and flows naturally. The time the Flow Footer sucks is when the page is short, because it just lingers awkwardly in the middle of the page.

### 2. The Fixed Footer

To solve this, some people go to one extreme, the Fixed Footer. The fixed footer is a footer that is always attached to the bottom of the page. It is usually positioned absolutely to the bottom edges of the screen. This solves the problem of pulling the footer down, but now the footer is always visible, even if content flows beneath it. Sure you can scroll, but the footer is just sitting on top, always fixed to the bottom. I have seen this done well a few times, and some sites pull it off. But generally it is just hideous and should never be used. I particularly hate the Fixed Footer on mobile. I have seen some sites that have a fixed upper navigation, and a fixed footer. While this might be somewhat usable on desktop, on mobile it means you are reading content through a tiny window between two fixed elements. It's horrible.

### 3. The Sticky Footer

So for many years, the solution was a hybrid between the Flow Footer and the Fixed Footer. I call this the Sticky Footer. This method of footer usually relied on Javascript to essentially take a Flow Footer, and if it was floating awkardly in the middle, the javascript would pull the footer down to the bottom. This usually worked by having the Javascript detect the window height of the viewport, compare it to the height of the document, and if the docu

### 4. The Leaning Footer