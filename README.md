# TAROTJS

## About

### Beginnings

This project stems from a few different aspirations and interestests... I've been interested in coding the mechanics of a deck of cards using javascript for a while now. In an effort to find some code or tutorials that already accomplished the thing that I wanted to do, I came across Walter Guevara's website, "*That Software Dude*, he has [an article](https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript) talking about exactly what I was looking for; how to code a deck of cards in javascript.

Since I didn't just want to replicate and type the code that Guevara put together verbatim, I thought it would be interesting to use Tarot instead, since it does share similarities with regular playing cards. [The Internet Sacred Text Archive](https://www.sacred-texts.com/tarot/pkt/tarot0.htm) has a similar javascript-based spread, but it is fairly limited and was written almost a quarter of a century ago. It's just really old javascript and it doesn't even read like a modern js file.

I have also seen projects using [E Kelen](https://github.com/ekelen)'s "[tarot-api](https://github.com/ekelen/tarot-api)," but it might be useful to expand on that work, or make something entirely self-contained.

Special thanks to [Luciella Elisabeth Scarlett](https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0) for cleaning up the scans from [Wikipedia](https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot).

You can play a demo of the app [HERE](https://berkough.itch.io/tarotjs). 

### tweesrc/ and tarot.html

This will most likely become the main source going forward, though you'll see the remnants of me trying to build my vision of this application using several different workflows... While it might be cleaner to start a brand new source tree with all new code, I've decided that doesn't suit my lifestyle, or the time that I have to devote to coding each day, so the project will shift from the old workflow to the new one as I cannibalize the javascript that I like and port into the *tweesrc* directory.

So, how does it work? Well, it's written in [Twee](https://twinery.org/cookbook/terms/terms_twee.html) using [Snowman 2.0.2](https://videlais.github.io/snowman/#/) story format. The twee code is then compiled with [Tweego](https://www.motoslave.net/tweego/).

Because I'm using Snowman 2.0.2, I will be converting everything to [jQuery](https://jquery.com/). Yes, it's still around, and honestly, I don't see the issue using it on a stand-alone product. It's not going to be interacting with any apis or web services. So whatever the security issues were or are with jQuery, they don't appy here.

I've played around with a bunch of different workflows, and I like the [Twine](https://twinery.org) commandline route for the types of webapps and games that I want to build. There are some weird workarounds that have to be done, but I think it's worth it to be able to package everything into a single html file. A single HTML file will be much easier to use to create a progressive web app, or a PWA when everything is feature complete. I think PWAs will still be a viable distribution model in the future.

Compiling with Tweego is super easy. Effectively all you have to do is give Tweego an output file (in this case it is the *tarot.html* file in the base directory) and point it to the *tweesrc/* directory. Your *storydata.twee* file will tell Tweego what to do next in terms of however you have your directories recusrively, because all it *storydata.twee* has to do is direct Tweego where to go for the first tw-passage.

There are a bunch of options that you can toggle with Tweego, but I haven't needed to really use any of them. However, if anyone knows of flags that I should be using, let me know.

This workflow will also allow me to add different spreads much more easily to the app. It also means that anyone who is interested in adding their own spreads, they can do so without having to re-write a lot of the code... At least, that's one of the goals going foward. Theoretically, if you weren't compfortable with using Tweego or a commandline environment, you can simply take the *tarot.html* file and load it into the Twine editor and add your custom spread that way.

## TODO

### Features to Impement

- Reversals.
- Screenshots.
- Summary of Card Meanings.
- Spread Template.
- Full Book.

### Misc Improvements

- **UI** (*This is constantly improving.*)
