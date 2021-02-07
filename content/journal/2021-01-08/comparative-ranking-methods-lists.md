---
title: Using Comparative Ranking Method to Order Lists
slug: comparative-ranking-methods-lists
date: 2021-01-08
published: true
tags: ['Data Science', 'Lists']
series: false
canonical_url: false
description: "Making a simple ordered list is easy when you are ranking three items. As soon as you are required to rank 50, 100, or 1,000 items then the task becomes more complicated. Here are four simple ranking methods you can use to rank groups of data."
---

Imagine that I gave you a list of 50 ice cream flavors and asked you to rank them from best to worst. This would actually be slightly tricky because of the sheer volume of data that you need to list. How do you definitively rank flavors 21 ahead of 22 and so on? This problem is easy when the list is simplified. For example, choosing between Chocolate, Vanilla, and Strawberry you could probably make a list of first, second, third in less than a second.

So how would you accomplish the more complex version of ranking every Ben and Jerry's Flavor (54 flavors are currently produced as of this writing)? As silly as it seem, this is actually a fairly good skill to have since there are many times you would need to rank a large pool of data. 

Imagine if you had to rank 40 employees for performance reviews, knowing that the bottom five will be terminated and the top 15 will receive bonuses scaled by their rank. Now all of a sudden creating an accurate list is important, but how would you accomplish such a herculean task?

I was recently confronted with this type of task and I discovered that several well-thought-out algoritms (or techniques) exist for doing this. You can even use these for comparison shopping, simplifying your work, or paying employees.

## Arbitrary Ranking

This is what we discussed in the first example at the top of this piece. What is the best ice cream flavor between Chocolate, Vanilla, and Strawberry. For me I would rank them as:

1. Vanilla  
2. Chocolate  
3. Strawberry   

The problem with this ranking is that it is entirely arbitrary. This means that it is my opinion. Your list could be entirely different and that would be ok. This is a simple opinion based off of no data whatsoever.

![Gelato Flavors](./images/gelato-flavors.jpg)

As a data scientest I hate anything arbitrary. We don't make decisions off arbitrary data, we make decisions off defined data. So the arbitrary ranking is mostly useless, unless I simply want to know what ice cream to bring to your birthday party and want the list so that I can get an alternative in case the store is out of your higher picks.

Another weakness of this ranking method is when working with large data sets. In small data pools (less than ten) this type of ranking is adequate because there are usually discernable differences between each item that makes ranking easier. You can also digest and sort all the data points in your head. But what about ranking 100 items or 1,000? This becomes overwhelming.

Largely this is useless, but it is worth pointing out because many people consider it "just the way you rank things." No, there are better ways to do this, as outlined below.

## Straight Ranking

This method is the most simple and straightforward statistical method for ranking. It is best used to rank quantitatively based on a single factor. For example ranking students in a class based on test scores. This is pure quantitative data, ranking them is easy. The top score is at the top of the list, the wost score is at the bottom. Everyone in between is ranked according to score.

A Straight Ranking of students in a classroom might look like this:

1. Jane Doe: 100%
2. John Doe: 99%
3. Eric Smith: 97%
4. Herbert Curtis: 94%

...................................................................

49. Gretchen Watson: 62%
50. Jeff Dread: 54%

Where **Straight Ranking** fails is when working items where more than one data point contributes to how an item in the list is ranked. In the above example we can easily rank the classmates because we simply want to know their test scores. Someone who scored 100% obviously did better than someone who scored 92%. There is a single data point for measurement and this is where **straight ranking** is ideal. It is easy and effective for an infinitely large data pool as long as only one data point is relevant.

A weakness of **straight ranking** is encountered when you have a tie. For example how do you rank two students that both scored a 92% on the test? How do you break a tie?

One alternative is to recognize the tie. So for example lets say that in the list above, both _John Doe_ and _Eric Smith_ scored a 99% on the test. We could give them both 2nd place. In this case I would generally skip the third rank and maintain _Herbert Curtis_ as 4th place. This maintains the integrity of the list. Because if 5 people tied for 2nd, then the next person shouldn't get third place, they weren't the "third best", they were technically 7th place.

So the list would look like this:


1. John Doe: 100%


2. John Doe: 99%


2. Person C: 99%


2. Person D: 99%


2. Person E: 99%


2. Person F: 99%


7. Herbert Curtis: 94%


...................................................................


49. Gretchen Watson: 62%


50. Jeff Dread: 54%


_**Formatting Note:** Because these blog posts are written in Markdown, extra line breaks were needed in this list to get it to format numbers in the desired order._

Another way to handle ties is to identify a tie-breaking data point. In the example we are using right now, we could use the previous test scores to break ties. So if _John Doe_ scored a 99% on this test, and a 98% on the previous test, then that might rank them above _Person C_ who scored a 99% on this test, but only a 96% on the previous test. In this case we could actually rank _John Doe_ as 2nd, but _Person C_ as 3rd, because there is a defined tie-breaker.

You would NOT want to mix quantitative and qualitative data when breaking a tie. If the primary ranking factor is quantitative, then we wouldn't want to break a tie with "best handwriting", "favorite haircolor", or something qualitative.

![Stadium for Basketball that Use Straight Ranking](./images/stadium.jpg)

A real world example of straight ranking is seen in sports. Every sport requires you to rank the players or team within a sport. For example, ranking teams in a basketball game is easy, the team with the most goals at the end of the game (a defined regulation amount of time) simply wins the game. Teams can be ranked based off how many total games they won at the end of the season. This is a perfect **straight ranking** system.

It is possible to have ties where multiple teams won 20 games and lost 2 throughout the season. So the leagues will usually have a way to break a tie. A common way to break that tie is by considering the alternative factor of _"score differential"_. Score differential is usually the amount of points scored in a game that the team won by. So if a team won a game with 20 more points that the other team, than that might break up a tie with a team that only won by 2 points over their opponent. These differentials are added up season-long and that differential is used to break ties. It is a good system that works at straight ranking. This is nearly undisputable. If a team feels like they should be higher, the league can simply say, you didn't win as many games as the higher teams and/or you didn't win by as many points. Simple.

## Alternative Ranking

This method attempts to take the **straight ranking** method and simplify the ranking to work with larger data sets. It is also helpful when determining rankings for closely aligned items. For example when ranking employee performance, you most likely have a lot of VERY GOOD employees. So it is hard to rank them, they are all VERY GOOD, and the differences are much smaller between them, making it hard to rank them.

The **alternative ranking** system is good for these cases. This system relies on the fact that you brain is very effective at determining differences between two _alternatives_. The brain is also very good at finding the "best" and "worst" from a list, while ignoring everything else. 

Here is a real world example. Let's say I want you to rank fruit from sweetest to least sweet. Given a list of 10 items it would take you a while to try to jumble the list around into the appropriate order. The task might even feel overwhelming for a lot of people. But instead let's say I don't need you to create the ranking list, I only need you to look at the options and tell me the MOST sweet and the LEAST sweet fruit on the list. This is something the average person could do easily and quickly. They wouldn't feel overwhelmed, it would be "easy" and they could come up with a determination in a second or two.

![Selection of Fruit to Rank at Grocery Store](./images/fruit-selection.jpg)

This is often called the **Paradox of Choice**. Studies have shown that the more choices a human is given, the harder they struggle at making a decision. In fact there is even a breaking point where humans simply become overwhelmed, and that breaking point for most people is around eight. Eight or more items will overload the brain and make any decisions between a group taxing on the individual. When a decision is made, most people will regret or second-guess their decision infinitely if the group is too large (above 8-10 items). This is the paradox of choice. We are happier with our choices when the selection group is smaller. We are more confident and more consistent.

The **alternative ranking** plays off this phenomenon by having you start by simply choosing the best and worst from the list. These become the first and last items on your list. Then you return to the remaining group and again choose the best from the remaining group, which becomes the second best ranked item. Afterward you choose the worst from the remaining group, which becomes second last on the list. You wittle down the list until you eventually get to the middle. The alternative ranking method is usually better at cleaning up the middle area because you continue to simply find the best or worst item within the remaining group. The list then builds itself from the edges (top and bottom), towards the middle.

## Paired Comparisons

The **paired comparison** method ranks each item, one-on-one against every other item. Whichever item is considered most favorable in the matchup is given a "point". After every item has been compared to every other item, the points are added up and a straight ranking is made from the points (the most points are considered most favorable).

For example let's say you have a list:

- Vanilla
- Chocolate
- Strawberry
- Caramel

You compare vanilla to chocolate, let's say that vanilla wins... it gets a point. Vanilla is now compared to Strawberry, let's say strawberry wins, Strawberry gets a point. Vanilla vs Caramel goes to Vanilla. At the end of the first round, Vanilla has 2 points, Strawberry has 1, and the others have zero. Now you compared Chocolate to Strawberry, then to Caramel, etc. The points are added and the item with the most points is the overall "best" item. It ranks better against more items than any other items.

This is generally considered to be the most "fair" since every item has gone "head-to-head" against every other item. This overcomes the problem known as an _elevation set_, because it forces the accessor to compare every item with every other item for a more balanced comparison.

## Forced Distribution Method

This is the distribution method used to rank kids at school if your school follows the "bell curve". The goal of this method is to simplify the ranking of items that might be similarly ranked. This relies on the fact that when ranking items you will generally have a few extremes that are very well ranked and very low ranked on the edges, plus a large group in the middle that are similar and indistinguishable.

Most commonly 5 ranking groups are selected. In school we use the letters A, B, C, D, F. Sometimes a simplified 3 group model is used above average, average, and below average.

As the name implies you are forcing a distribution in this method with a certain number of slots in each category. Within that category items are usually not ranked. This is effective with large data sets, but can often be discriminatory with small data sets.

The **forced distribution method** is not a good method if you need definitive list for the group. This means that it is not recommended to use the **forced distribution method** if you need a 1st, 2nd, 3rd, 4th list of each item in the list. Instead this method is used to _group_ items into appropriate categories. If ranking employees maybe the top group all get 10% raises, the 2nd group gets 7% raises, the middle group gets 5% raises, the 4th group gets 3% raises and the bottom group gets 1.5% raises (to meet inflation).

![Employee Performance Reviews](./images/employee-performance.jpg)

The downside of this method is due largely to the nature of categorization. The "best" employee in the 2nd group and the "worst" employee in the 1st group will be very close in performance but receieve very different bonuses. Likewise, the "worst" employee in the 1st group and the "best" employee in the 1st group will both receive the same bonus, even though the "worst" employee almost fell into the second category and the "best" employee was the all-star of the company. These are known problems with this ranking and must be weighed against the benefits of its simplicity.

One solution to the categorization problem is to create more categories. This creates a smaller differential between the top and bottom of each group. But this increases the complexity and is often not worth it. It is best to remember that **forced distribution** is a commonly used and easy method to group items. But it should not be considered a definitive listing method.

## Conventional Rating / Graphic Rating / Likert Scales

This is one of the most popular forms of professional ranking because it is considered to be fair and easy to rank by humans. It is also a good way to rank because it takes subjective/qualitative data and makes it quantitative. Furthermore it can also be adapted to take into account multiple accessors (people performing the rankings) and multiple criteria.

The way this works, you generally create several categories to determine ranking. If we are ranking employees we might choose categories like punctuality, professionalism, workload, quality. Then each employee is given a rating for each category (such as 1-5) for how they performed in each category. Finally the points will be added up across all categories for each employee and then a straight ranking is applied to the data set using these total point sums.

Multiple accessors can be used to make this ranking even more fair. Employee totals are simply added up for each accessor and then those totals are ranked. This takes into account an accessor that favors a certain item.

### Up Next: Computer Ranking Algorithms

Now all of these ranking techniques listed above are designed for humans to do the ranking. But since I often talk about algorithms and computer science on this blog, I wanted to clarify that different techniques and algorithms should be used when computers are the ones doing the ranking. I plan to follow up in future posts regarding these algorithms to cover them as well.