# TAROTJS

## About

### Beginnings

For my dev log and more minutia regarding the updates to this repository, make sure you visit [my itch.io page](https://berkough.itch.io/) OR visit my personal blog. I'm not always writing about web development on there, so [peruse at your own risk](https://www.berkough.com).

This project stems from a few different aspirations and interestests... I've been interested in coding the mechanics of a deck of cards using javascript for a while now. In an effort to find some code or tutorials that already accomplished the thing that I wanted to do, I came across Walter Guevara's website, "*That Software Dude*," he has [an article](https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript) talking about exactly what I was looking for: how to code a deck of cards in javascript.

Since I didn't want to simply replicate and type the code that Guevara put together verbatim, I thought it would be interesting to use Tarot instead, since it does share similarities with regular playing cards, but presents its own challenges. [The Internet Sacred Text Archive](https://www.sacred-texts.com/tarot/pkt/tarot0.htm) has a similar javascript-based tarot spread, but it is fairly limited and was written almost a quarter of a century ago. It's just really old javascript and it doesn't even read like a modern js file. For anyone looking to code in ES5 or newer it's not very useful.

I have also seen projects using [E Kelen's "tarot-api,"](https://github.com/ekelen/tarot-api) but it might be useful to expand on that work, or make something entirely self-contained.

Special thanks to [Luciella Elisabeth Scarlett](https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0) for cleaning up the scans from [Wikipedia](https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot), and also special thanks to Dr. Yoav Ben-Dov for his [CBD Tarot de Marseille](https://www.cbdtarot.com).

You can play a demo of the app [HERE](https://berkough.itch.io/tarotjs).

### tweesrc/ and tarot.html

This is the main source going forward, though you'll see the remnants of me trying to build my vision of this application using several different workflows... While it might be cleaner to start a brand new source tree with all new code, I've decided that doesn't suit my lifestyle, or the time that I have to devote to coding each day, so the project has just shifted from the old workflow to the new one as I cannibalize the javascript that I like and port or copy it into the *tweesrc* directory.

So, how does it work? Well, it's written in [Twee](https://twinery.org/cookbook/terms/terms_twee.html) using the [Snowman 2.0.2](https://videlais.github.io/snowman/#/) story format. The twee code is then compiled with [Tweego](https://www.motoslave.net/tweego/).

Because I'm using Snowman 2.0.2, I will be converting everything to [jQuery](https://jquery.com/) syntax. Yes, it's still around, and honestly, I don't see the issue using it on a stand-alone product, or in this case a single self-contained html file. It's not going to be interacting with any apis or web services. So whatever the security issues were, or are, with jQuery, they don't really appy here. Perhaps in the future I'll have the app query an AI to return a spread reading. If there are any security issues at that time, they can be addressed.

I've played around with a bunch of different workflows, and I like the [Twine](https://twinery.org) commandline route for the types of webapps and games that I want to build. There are some weird workarounds that have to be done, but I think it's worth it to be able to package everything into a single html file, which will be much easier to use to create a progressive web app (PWA) when everything is feature complete. I think PWAs will still be a viable distribution model in the future. Especially considering [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap). I may or may not include binary builds in this repository in the future.

Compiling with Tweego is super easy. Effectively all you have to do is give Tweego an output file (in this case it is the *tarot.html* file in the base directory) and point it to the *tweesrc/* directory. Your *storydata.twee* file will tell Tweego what to do next in terms of however you have your directories set up recusrively, because all *storydata.twee* has to do is direct Tweego where to go for the first tw-passage, they all organically link from there, and if one passage doesn't link to the other it still lives in the code. Which is both a gift and a curse; generally you don't need to actually do the thing that will produce the error, the program just won't run. On the other hand you usually don't know where the error is, but it's most likely in whatever you've recently changed. So save early and save often, or just leave the autosave on and check the output at regular intervals.

There are a bunch of options that you can toggle with Tweego, but I haven't needed to really use any of them--though, I will probably start employing custom head elements once this project goes full PWA. However, if anyone knows of other flags that I should be using, please let me know.

This workflow will also allow me to add different spreads much more easily to the app (at least in theory). Anyone who is interested in adding their own spreads, they can do so without having to re-write a lot of the code... Alternatively, if you want to describe a spread for me, I'm happy to add it to the code. At least, that's one of the goals going foward. Theoretically, if you weren't compfortable with using Tweego or a commandline environment, you can simply take the *tarot.html* file and load it into the Twine editor and add your custom spread that way.

## TODO

### Features to Impement

- Full Book - ~~All Card Meanings.~~
  - 2024-10-24: As of today all the card meanings are in there from A. E. Waite's *Pictorial Key to the Tarot* (sourced from [Sacred Texts](https://sacred-texts.com/tarot/pkt/index.htm)). But I am going in and editing each of the card descriptions where I see fit. Generally speaking there will just be external links to an explanation of the thing that I think needs explaining. Minimal changes to the actual langauge of the text are being made, mainly spelling choices, for example: "show" instead of "shew". I have not yet finished updating all of the cards or implementing my own personal edits.
- Reversals.
  - I would like to implement a random element (probably in the *drawACardM* function, or as a separate function that occurs when drawing a card) that will reverse the card for those who want reversals.
- Screenshots.
- [ x ] Deck Selection - R-W-S or CBD Marseille.
  - 2024-11-08: You now can select a deck type before you do your reading. Shout out to Dr. Yoav Ben-Dov for his [CBD Tarot de Marseille](https://www.cbdtarot.com) card images.
- Summary of Card Meanings.
- Spread Template.
- Manual Spreads.
- Icons (Material, Font Awesome, etc.).
- Jumpers (?)
  - These are the cards that just shoot out of the deck when you're shuffling...
- 
