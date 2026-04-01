---
title: "Connecting Duhem's Law of Cognitive Complementarity to metrology"
publish_date: 2026-01-04
published: true
tags: epistemetrics
---

I've previously written about my interest in Nicholas Rescher's epistemetrics in [[Duhem's Law of Cognitive Complementarity]]. I've been continuing my exploration into the mystical lands of mathematics and have found a way to connect the law to metrology. Hope you enjoy reading! :)

Nicholas Rescher formalizes Duhem's Law of Cognitive Complementarity in the first chapter of Epistemetrics as the following inequality:

$$ s \times d <= c $$

Where $s$ stands for security, $d$ for detail and $c$ just left as an unnamed constant in the book. I have personally come to understand c as a "knowledge budget", or just "knowledge". 

Knowledge from the perspective of Duhem's law is the product of security and detail for a given claim.

Unfortunately, while Rescher was happy to give some examples of Duhem's Law, he was never able to _quantify_ his qualitative statements:

> We estimate the height of the tree at around 25 feet. We are quite sure that the tree is 25 ± 5 feet
> high. We are virtually certain that its height is 25 ± 10 feet. But we can be completely and absolutely sure that its height is between 1 inch and 100 yards. Of this we are “completely sure” in the sense that we are “absolutely certain,” “certain beyond the shadow of a doubt,” “as certain as we can be of anything in the world,” “so sure that I would be willing to stake my life on it,” and the like.

And later in the same chapter, he seems to confuse security for something that reads more like the _scope_ of a claim rather than the _security_ of a claim. This was the core difficulty for me to tease apart since I ever read it, that scope and security are likely not the same thing:

> Duhem emphasized that this relationship has important implications for the standing of the exact sciences where, after all, we always aim at the maximum of achievable universality, precision, and exactness. 
> Thus in physics when we make the assertion, “The melting point of lead is 327.7 degrees Celsius,” we are claiming that all pieces of (pure) lead will unfailingly melt at exactly this temperature. We certainly do not mean to assert that most pieces of (pure) lead will probably melt at somewhere around this temperature.

In this example for instance, he uses detail to both mean the *detail* of a measurement ($327.7\degree C$) versus the _scope_ of the applicability of a claim (what pieces of lead it does and does not apply to, and how the measurement changes depending on the sample of lead it is applied to).

While scope and detail are likely related, I drop the interpretation of _scope_ to focus exclusively on the detail of a measurement.

## Connecting to metrology

This is where things get more interesting. I've tried connecting it to many different ideas over the years, but I have not been able to iterate quickly and my math skills were always quite lacking. I had an  intuition that security was related to Shannon entropy, but I never really got my ideas off the ground and the connection with entropy didn't really go anywhere. This was prior to having access to Claude Opus which has been tremendously helpful, although relying on LLMs to perform symbolic math is not something I trust completely, hence my reaching out to other people and my active and ongoing efforts to seriously brush up my math skills on mathacademy (I recently passed Math Foundations I! Yay.)

The core insight was connecting DLoCC to metrology using the mean value theorem, and once you do that a bunch of interesting things fall out quickly. Note, math is my weakness and these findings were initiated by Claude Opus, I've since studied the basics more deeply so that I understand what Opus said, and I believe the following to be correct. I've expanded the math to be very explicit mostly for myself, but the explication shouldn't hurt you as a reader either way :)

I define $f(\mu)$ as the peak of a Probability Density Function (PDF), which is the maximum density value, and $f(\xi)$ as the density at a point $\xi \in [a, b]$, which necessarily holds $f(\xi) \leq f(\mu)$. Last, $\Delta = |a - b|$, the width of the claim window.

The mean value theorem for integrals guarantees that there exists a $\xi \in [a, b]$ such that $f(\xi) \times \Delta = s$ exactly, where $s$ is our security. And since $f(\xi) \leq f(\mu)$, it follows that $s \leq f(\mu) \times \Delta$:

$$s = f(\xi) \times \Delta \leq f(\mu) \times \Delta$$
Next, we can define detail as the reciprocal of the claim window $d = 1/\Delta$. The smaller the claim window, the higher the detail. The larger the claim window, the lower the detail. This is what Rescher defined $d$ but formalized. Putting everything together:

$$s \times d \leq f(\mu) = c$$
This connects Duhem's Law of Cognitive Complementarity to metrology, and it's where the fun can begin.

Given this framing, a clean ontology falls out:

1. Security $s$ is the probability that a given claim is correct
2. Detail $d$ is the reciprocal of the width of the claim window
3. Knowledge or the knowledge budget $c$ is the product of security times detail
4. The knowledge budget can be _spent_ to increase detail at the cost of security, and vice-versa.

This gives us a language to speak of measurements in terms of _knowledge_. None of the math is new, but the math is wearing a new hat in the way it is connecting metrology with Rescher's epistemetrics/epistemology.

This allows us to do some really fun stuff:

For a Gaussian source with standard deviation $\sigma$, this gives 

$$c = \frac{1}{\sigma\sqrt{2\pi}}$$
And the language affords us to speak about what claims we can and cannot make; any claim where $s \times d \leq c$ is *within budget* and any claim where $s \times d > c$ is _overdrawn_.

I hope you start seeing the utility of the framework at this point. As I sad a few sentences ago, the value isn't in this being groundbreaking or meaningful math, it's in connecting epistemology with the science of measurement (and statistics), where we can start building up a language making claims about knowledge.

## The tree example revisited

Let's go back to Rescher's tree example. We need to know how good our eyes are at estimating tree heights. Normally, I would prefer metric units but because the example uses feet, I'll let it slide for this time.

Let's say $\sigma = 5ft$, just a reasonable guess for eyeballing the tree height using our eyes. This is not grounded in a real-world study of how well our eyes do, but for a real example you can of course work with a verified sigma.

This gives us the knowledge budget:

$$c = \frac{1}{\sigma\sqrt{2\pi}} = \frac{1}{5 \times 2.507} \approx 0.080 \mathrm{ft}^{-1}$$
Now we can revisit the claims Rescher made, and ground his qualitative examples quantitatively:


| claim                 | $\Delta$ (feet) | detail $d \mathrm\;{ft}^{-1}$ | $s \times d$ budget | Max affordable security $s$ | Rescher's description             |
| --------------------- | --------------- | ----------------------------- | ------------------- | --------------------------- | --------------------------------- |
| "$25 \pm 5 ft$"       | 10              | 0.10                          | 0.080               | 0.80                        | "quite sure"                      |
| "$25 \pm 10ft$"       | 20              | 0.05                          | 0.080               | 1.00 (capped)               | "virtually certain"               |
| "1 inch to 100 yards" | ~300            | 0.003                         | 0.080               | 1.00 (trivially)            | "absolutely certain"              |
| "exactly 25.0 feet"   | ~0.1            | 10.0                          | 0.080               | 0.008                       | not a claim you should/could make |

As you can see, the budget is fixed at $0.080\mathrm{ft}^{-1}$, and it's up to you to choose how to spend it. If you want a higher security, you can pay for it with detail. If you want more detail, you need to have a good measurement instrument (or repeat your measurements enough times, which we can go into in a later post). In this case you cannot have great detail *and* great security. If you have an amazing and super precise instrument, then the knowledge budget gets much greater and you _can_ spend it on much higher detail, but not in this case, our eyes are good but they're not science-grade measurement equipment.

## A unit of knowledge

I don't know about you, but when I first saw the result that a measurement with a given instrument gives $0.080\mathrm{ft}^{-1}$ _knowledge_, my brain started hurting. What in the world is that?!

We know the math, so we understand that it's a knowledge budget, but the reciprocal of a meter is somehow _knowledge_? That just doesn't sit right with me on an intuitive level. Luckily, we as humans have the ability to introduce units or notation wherever we please.

I've been thinking a lot about an appropriate unit and I'm still internally debating between two which are both super funny and awful puns while being great at representing a unit for _knowledge_:

1. The "duh" for Duhem.
2. The "wit", since it connects cleanly to "bit"

While "duh" is funny, I think $wit$ is the clear winner because:

1. The analogy and contrast with Shannon knowledge is clean $\text{bit} : \text{Shannon Entropy} :: \text{wit} : \text{Rescher-duhem knowledge}$.
2. Wit is well-known as a word related to knowledge; *"being witty"*, *"she is known for her sharp wit"*
3. It's less obtuse than "duh" which is a better fit for scientific and engineering context, while still allowing for funny misuse where it's appropriate which is important to me: "The measurement tool is not sufficiently *witty* for our use-cases", etcetc. YMMV.

I digress, here goes:

$1\mathrm{wit} = 1\ [\text{measurement unit}]^{-1}$ of knowledge budget

This turns our eyeballs into an instrument that produce $0.080\mathrm{wit}_\mathrm{ft}$ per measurement. Clean! And this affords something unusual, it now becomes trivial to compare knowledge produced for a single measurement for different devices for the same purpose:

| Instrument          | measurement uncertainty $\sigma$ | knowledge $c$ per measurement   |
| ------------------- | -------------------------------- | ------------------------------- |
| Your eyes           | $5ft$                            | $0.080\mathrm{wit}_\mathrm{ft}$ |
| A tape measure      | $0.03ft$                         | $13.3 \mathrm{wit}_\mathrm{ft}$ |
| A laser rangefinder | $0.003ft$                        | $133 \mathrm{wit}_\mathrm{ft}$  |

Note: $\sigma$ is estimated, not taken from a formal study or paper.

Your eyes produce more 0.080 wits of knowledge per measurement. A tape measure produces about 166x more knowledge about the same tree once used, a laser rangefinder produces 1,660x more (if you figure out how to use it to measure a tree). This matches our intuition perfectly, but we can now put numbers to the amount of *knowledge* generated per given measurement for a given measurement instrument, incredibly interesting!

Or even more curiously, for measurement devices that measure in completely different dimensions:

| Instrument              | Measures    | measurement uncertainty $\sigma$ | knowledge $c$ per measurement          |
| ----------------------- | ----------- | -------------------------------- | -------------------------------------- |
| Your eyes (tree height) | Height      | $5 ft$                           | $0.080\mathrm{wit}_\mathrm{ft}$        |
| A kitchen thermometer   | Temperature | $1\degree F$                     | $0.399\mathrm{wit}_\mathrm{\degree F}$ |
| A bathroom scale        | Weight      | $0.5lb$                          | $0.399\mathrm{wit}_\mathrm{lb}$        |

While you cannot compare numbers in different dimensions, you _can_ use this to get a good idea of how well an instrument performs in producing knowledge for a given domain. 

For instance, you are likely familiar with fMRI machines, while they're among the best we have for producing knowledge on what's going on in our brain, each voxel averages roughly 5 milllion neurons with a temporal resolution of ~1-2 seconds. While the events they're trying to measure actually happen at the scale of milliseconds across _individual_ neurons. In wit terms, the knowledge budget for an fMRI relative to the complexity of the brain is actually low.

Using an fMRI to measure brain activity is like flying over a city at night and looking at which neighborhoods have their lights on. You can see broad patterns or activity, but can't tell what any individual is doing.

Using DLoCC and our wit units, we can put numbers to this analogy (this is a very rough estimate, again, the numbers are not taken from a particular study, they're just a rough ballpark estimate which is fine for the example I'm making here):

- An fMRI voxel is roughly $2\mathrm{mm}$ across, so $\sigma \approx 2\mathrm{mm}$
- $c_{\text{fMRI}} = \frac{1}{2 \times \sqrt{2\pi}} \approx 0.20 \; \mathrm{wit}_\mathrm{mm}$
- An individual neuron is roughly $0.02\mathrm{mm}$, so $\sigma \approx 0.02\mathrm{mm}$
- $c_{\text{needed}} = \frac{1}{0.02 \times \sqrt{2\pi}} \approx 20 \; \mathrm{wit}_\mathrm{mm}$
- Ratio: fMRI produces $100\times$ less spatial knowledge than single-neuron resolution would require

The city-at-night analogy:

- A satellite at night can distinguish neighbourhoods of roughly $500\mathrm{m}$, so $\sigma \approx 500\mathrm{m}$
- $c_{\text{satellite}} = \frac{1}{500 \times \sqrt{2\pi}} \approx 0.0008 \; \mathrm{wit}_\mathrm{m}$
- An individual person occupies roughly $1\mathrm{m}$, so $\sigma \approx 1\mathrm{m}$
- $c_{\text{needed}} = \frac{1}{1 \times \sqrt{2\pi}} \approx 0.40 \; \mathrm{wit}_\mathrm{m}$
- Ratio: the satellite produces $500\times$ less knowledge than you'd need to see individuals

The analogy works, they're in the same order of magnitude and this illustrates the point that I wanted to make. The unit of knowledge is _useful_ to quantify these kinds of things while remaining interpretable in terms that anyone can understand, an fMRI produces very little knowledge in millimeters, while a tape measure produces quite a lot of knowledge for meters. The language that this framework affords us to use has applications all across the board.

It's just metrology or statistics math with a different hat on, but it's a really easy-to-understand hat, and I love hats that are easy to understand.

![[WhatsApp Image 2026-04-01 at 22.53.38.jpeg]]

Like the above image, where my cat Pineapple is wearing a little strawberry hat, epistemology is much more interesting when we decorate the complexities with a nice hat.

## Conclusion

We've gone over Duhem's Law of cognitive complementarity and used the mean value theorem of integrals to ground Rescher's qualitative ideas into a quantitative framework based in metrology to ground questions about measurement in a much more rigorous and quantitative format.

On top of that, we've defined _wit_ as the unit of knowledge, as an homage to Claude Shannon's definition of information which has inspired me since the moment I learned about it in computer science classes during my studies.

I believe this is a beautiful result, and I'm excited to write and share more about it in the future. I've been working on applying it to a variety of different fields, most connected to signal processing and Machine Learning, but in theory its applicability is wide.

What do you get out of it?

In the next post(s), I'll share more about my experimentation with the framework and dive deeper into the math. I've applied it to a wide array of different fields from image processing to hallucination detection in LLMs, and the results are promising. Stay tuned :)