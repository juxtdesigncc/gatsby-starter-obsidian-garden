# Premature Abstraction

Confused about or frustrated by premature abstraction? Want to know how to avoid it? In this article, we’ll walk through what premature abstraction is, how to recognize it, and how to evade it before it causes problems in your code.

For those of you not familiar with premature abstraction, this term refers to adding abstractions to your code before it’s actually necessary, and before you fully understand the problem space and all the possible variations.

It’s easy to provide the definition of “premature abstraction.” It’s much harder to truly know when an abstraction is truly premature or when it’s just smart planning.

![](https://miro.medium.com/max/1400/0*unkzWhHVFgTtEtUz)

## When is Premature Abstraction Most Common?

The cycle usually starts off innocuous and righteous: You’re solving a large problem (e.g., a new feature) and find that many of its smaller sub-problems have things in common — duplicate code. You add an abstraction.

As you continue to work the larger problem and reach for your new abstraction, you modify it to accommodate the slight variation. Repeat. More time passes. Repeat.

Eventually, you start to find that all the variations the abstraction needs to support starts become unwieldy. The abstraction itself is now complex, hard to follow, and brittle. It tries to do too much for too many disparate scenarios.

This can happen relatively quickly, or it could take months or even years to start causing grief. Either way, abstractions can have an ironic effect of making things harder to maintain.

Some of the most common cases of premature optimization happen with “helper/utility” functions and with Views/Components. If you find your abstraction has to check numerous possible input cases, this is a good sign that the abstraction was premature, or at least that it has outgrown its original purpose and should be disbanded.

Data structures can suffer from this too, but you also don’t want them to end up as monolithic God objects that know too much.

Another case is a little sneakier: bringing in complex libraries or patterns. In the JavaScript world, libraries like Redux, RxJS, NgRx, etc., are very useful but come at a cost. Particularly for newcomers, it’s easy to use these libraries in ways that do more harm than good. We’re actually big fans of all of them, but have found that the temptation by many to bring them in too early or without proper knowledge/training has led to unfortunate outcomes.

Recognizing an abstraction as premature is more art than science, and admittedly, it’s very subjective.

## The True Cost of the Wrong Abstractions

It’s somewhat of a paradox, but abstractions can simultaneously increase and decrease the complexity of code — even if you choose the right abstraction at the right time.

When the right abstractions are added at the right time, it can make it easier to fix bugs in code that is commonly reused, as well as to make it easier for someone to quickly understand what the process of a particular code path looks like without needing to understand the nitty-gritty details. For example, when I’m scanning some code and come across fetchUser() I don’t always need to know how the User is in fact fetched.

At the same time, even with the right abstraction, this indirection means the developer who does have to change some of that underlying abstracted behavior has to dig deeper, search further, and untangle compounded abstractions on top of abstractions. Admittedly, this is actually normal to some extent.

However, when the abstraction was premature or otherwise poorly executed, these problems are much worse.

If your app doesn’t have solid testing in place, abstractions are even riskier. Any change to that abstraction can have unknown consequences, so you’d be wise to avoid using lots of them in code that isn’t tested. You don’t have to shun them altogether, just avoid them.

## Instead of Abstractions

When in doubt, duplicate code. The cost of a bad abstraction is much, much higher than the cost of dealing with duplicate code. There’s even seemingly conflicting advice, like “don’t repeat yourself” (aka D.R.Y.), where you’re encouraged to add an abstraction, such as a function, instead of writing duplicate code.

The ideal lies somewhere in the middle between the two. It’s TOTALLY OKAY to repeat yourself! In fact, we take the stance that you should repeat yourself by default. Abstract it away once it’s very clear that the code you wrote is in fact needs to be used multiple times and that any variations you need to support aren’t significant.

Allocate time for code reviews, and only later refactor to tease out clear cases where nearly identical code paths or data structures can be reused.

If you abstract too early or too aggressively, it’s easy to create overly restrictive abstractions (where you’ll have to work around them later) or overly general abstractions (where you’ll have difficulty maintaining them).

Of course, some things are by definition abstractions, and are unavoidable even from the start; e.g., you (usually) don’t want your JavaScript app querying your database directly. But even in cases such as these, you can keep your initial abstractions to a minimum.

## Conclusion

Above all, remember why we create abstractions to begin with: to make it easier to reuse code, fix bugs in a single place, and to hide implementation details.

Abstractions are necessary, and they’re all around us. They’re not evil!

The goal is working towards that seemingly impossible balance of just enough abstractions, introduced at just the right time.

At This Dot Labs, we help software architects and developers think through problems like the costs of premature abstraction and craft expert, seamless solutions. Need help? Email us directly at [hi@thisdot.co](mailto:hi@thisdot.co).

This article was written by Jay Phelps, a Google Developer Expert and mentor at This Dot Labs.

## Reference

- https://medium.com/@thisdotmedia/the-cost-of-premature-abstraction-b5d71ffd6400
