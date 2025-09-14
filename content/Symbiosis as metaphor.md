> [!NOTE] This article has been adapted from my Substack
> I initially [started out writing on Substack](https://laurabrekelmans.substack.com/p/symbiosis-as-metaphor-part-1), but I feel more at home posting on a site that I can control, and where I can add JavaScript and HTML however I please.
> I want to follow up on this idea at a later stage, which is why I am posting this on the Living Language Labs site now.

The natural world is endlessly fascinating. It seems like no matter how much we explore or how much we learn, there is always so much more to learn, see, explore or even just observe.

Something equally as diverse as nature itself, is the field of biology. It's a field rich with insight into the world of complexity.

One of those great insights is the concept of _symbiosis_; the study of relationships between living organisms. Despite its ubiquity, symbiosis is unfortunately not well understood, despite its remarkable simplicity and elegance.

To most people, symbiosis ends at an understanding of mutualism on the one side - where both organisms benefit from the relationship - and parasitism on the other - where one party benefits, and the other is harmed..

My greater goal is to develop a formal notation for symbiosis, the reasons of which I will share in another article. For this article however, it is my goal to teach you just a *tiny* bit more about this wonderful mini-language of relationships, and how it can help you make better sense of the world around you.

## A short introduction to "proper" symbiosis

For background, let's start with a short overview of a "contemporary" understanding of symbiosis. First, a proper definition:

> Symbiosis is any close and long-term biological interaction between two organisms of a different species.

This is the definition as given by the [Oxford dictionary of English](https://www.oed.com/dictionary/symbiosis_n?tl=true). I think it's reasonable to slightly modify the definition to say "between two _or more_ organisms of a different species", but other than that. I believe it's pretty clear. Put in simpler terms, symbiosis is where organisms of different species live together closely for a long time, and possibly even depend on one another.

Next, there are different _kinds_ of symbiosis. The two most well-known kinds of symbiosis are mutualism and parasitism, but there are more, all of them quite reasonable and easy to understand.

### Mutualistic symbiosis — Organism A +⇔+ Organism B

Mutualism is where both organisms benefit from the relationship. Think of humans and cats/dogs, bees and flowering plants or [cleaner shrimp and various kinds of fish](https://www.youtube.com/watch?v=L_oIISbcOiU).

Mutualism is great! It's a clear 1+1=3 situation. Both of the organisms benefit and everybody's better off together.

### Parasitic symbiosis — Parasite +⇔- Organism B

Parasitism is where one organism benefits, and the other is hurt by the relationship. Many of the organisms in this category are aptly named _parasites_, so you are likely familiar. There are many parasites, many of which you probably don't like. For mammals there are leeches, mosquitoes, botflies, all kinds of worms and much more. Sometimes fungi act as parasites towards trees, leeching resources off of their host.

Parasitism exists for a simple reason. If you can get away with stealing resources from another organism? Why not just do it? Evolution doesn't really care about morality or ethics.

### Commensalist symbiosis — Organism A +⇐ Organism B

Commensalism is a slightly less known kind of symbiosis in which one organism benefits, but the other isn't particularly affected in either a negative or positive manner. Commensalism is very common, and like the other kinds of symbiosis, it occurs all over the place.

A simple example is how birds make nests in trees. It doesn't really benefit the tree, but doesn't negatively affect it either. Regardless, the bird most definitely benefits.

### Ammensalist symbiosis — Organism A -⇐ Organism B

This is probably the least known kind of symbiosis, **ammensalism**. This is where one organism is negatively affected by another, but the other organism isn't affected much at all. The simplest example is an elephant stepping on a bunch of flowers or insects. The flowers and insects die or are greatly injured, whereas the elephant is just taking a morning stroll through the park.

### Synnecrotic symbiosis — Organism A -⇔- Organism B

There is one last kind of symbiosis that is incredibly poorly known, even within biological circles, that for the sake of completeness I'll include here nonetheless.

This kind of symbiosis is also sometimes known as **antagonistic symbiosis**.

It’s a relationship where _both organisms affect one another negatively_. Probably the most well-known example of this is where a plant releases poisonous or otherwise harmful chemicals into its neighbourhood to stifle competition for resources. However, this also costs the harmful plant a lot of resources. It's a lose-lose kind of relationship.

The reason this kind of symbiosis is poorly known is due to it being evolutionarily unstable. It's easier for other organisms to outcompete organisms that are in a mutually antagonistic relationship.

Everything taken together, the different kinds of symbiosis are just names for how organisms relate to one another.

## Symbiosis as metaphor

While symbiosis is a fascinating enough idea in biology on its own, it is obviously applicable in many more situations than in _just_ studying the living relationships between _species_. I don't know about you, but when I see those examples about relationships between different organisms, I can't _help_ but start applying these ideas to everyday situations that are not so related to biology.

For instance, friendships. Great, right?!

When looked at from the lens of symbiosis, friendships are clearly mutualistic symbiosis. You make each other laugh, share stories, help each other and much, much more. In other words, both parties benefit greatly.

Or how about you and your workplace? The working relationships is often _meant_ to be mutualistic. You trade in your time and expertise for money and stability. Despite that, not all working relationships are mutualistic. Some are more exploitative, and some are borderline parasitic.

But hey, we learned about a lot of different kinds of symbioses, didn't we? How about _antagonistic_ symbiosis? If you're in the business world, this is already an important lesson for you. Going into an all-out war with a direct competitor of yours is unlikely to benefit you in the longer term. Most likely, you'll just be outcompeted by a third party.

These are just a few examples, the possibilities are of course endless. How about you and your houseplants? Or how do you relate with your local community? What kinds of relationships come to mind for you? I'd love to hear about it!

As mentioned earlier, this article is meant to explore symbiosis as a language of relationships. There's no reason to limit ourselves just to living things. For instance, [a recent article](https://theconversation.com/your-smartphone-is-a-parasite-according-to-evolution-256795) discussed the idea that we are in a _parasitic relationship_ with our smartphones. Smartphones aren't organisms at all!
## Introducing the notation

I already showed a sneak-peek of the notation in the previous section. It's fairly self-explanatory so far.

We have arrows that show there's a relationship between two organisms, and the plus, minus or lack of a symbol shows how the relationship affects the organism.

Arrows shows the existence of a relationship between two organsisms, and the `+`, `-` or lack of a symbol shows the effect of the relationship. What's great about the notation is that it's so intuitive, *you don't even need to remember the difficult words* like synnecrotic symbiosis or ammensalist symbiosis. All you need to know is that symbiosis is about relationships between two! Yay, simplicity!

Grab a pen and a notebook, some post-its or an iPad with a fancy stylus and play around with the notation. Bonus points for creativity like writing on glass, in sand or using watercolor. Here's the full notation for you to play around with:

**Positive symbiosis** (mutualism and commensalism  
A +⇔+ B  
A +⇐ B  
A ⇒+ B

**Negative symbiosis** (parasitism and ammensalism)  
A -⇔- B  
A -⇐ B  
A ⇒- B

**No symbiosis**  
A | B

I added the "no symbiosis" notation too. At first it might seem a little bit strange to have "no" symbiosis being part of the notation for symbiosis, but you can look at it as having a similar function as 0. Sometimes two things don't really have a meaningful relation at all, sometimes that's perfectly ok. Sometimes it's not.

One of the important reasons for using precise notation is to create some space for you to think about relationships and what they mean to you. Or maybe relationships between things in your immediate environment. The "no relationship" symbol can be quite meaningful, for instance, wouldn't you find it notable if someone wrote this down: "Me | My grandfather"?

Maybe you noticed two people in your friend group don't get along very well. What does that do for the rest of the friend group? What other relationships contribute to this dynamic?

Of course, the notation is just a starting point. If you're working on pen and paper, feel free to experiment! How about you and your best friend?

Is that _really_ just a A +⇔+ B relationship? Maybe it's an A +++⇔+++ B relationship?

Try it out and share what you came up with :)
## The music of symbiosis

This was a short introduction to symbiotic thinking. You’ve been introduced to the different kinds of symbiosis and you’ve _hopefully_ similarly been introduced to a notation to write down relationships between different things, based on the ideas of symbiosis.

I hope you'll really take a moment, to sit down and think about one or more relationships that came to mind while reading this short article on symbiosis.

Notation exists to create a shared language between many people. Think of music notation, it allows us to listen to music created by amazing composers hundreds of years ago, even if there are no recordings of any of them ever playing!

Perhaps there's a music to symbiosis too, what song will you play?