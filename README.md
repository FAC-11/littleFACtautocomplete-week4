# Colourcompleter :rainbow:

## What we decided to make

We decided to build a colour picker app so that developers can easily find the specific hexcode for colours they like. Our project had to meet the following criteria:

- [x] Dynamically give autocomplete suggestions
- [x] Use a large data file to search/filter from but maintain speed
- [ ] Back-end testing using tape and basic front-end testing
- [ ] Host our site on Heroku

Not all goals were met during the allotted time and we'll try to explain why in this readme. 

## Our approach
* **Modularisation**: we wrote down the structure of our folders and the files that should be contained within them to get a sense of how they link together and what functions each should contain.
![File Architecture](https://files.gitter.im/foundersandcoders/Team-AmAlConYah/I6si/IMG_1665.JPG)
* **Software Architecture**: we laid out on a whiteboard what the experience of using our site should involve with the paths and connections to each aspect drawn out.
![Software Architecture Flowchart](https://files.gitter.im/foundersandcoders/Team-AmAlConYah/cHyx/node_littleFACt.png)
![Software Diagram](https://files.gitter.im/foundersandcoders/Team-AmAlConYah/7HFX/Untitled-Diagram.jpg)
* **Divide & Conquer**: once we had an idea of how things should flow, we decided how to split up tasks and begin.

## "It works! How did we do that??"

We divided up tasks into front end and back end with a pair taking on each side and us switching up roles after the first day. We had a few issues: 

1. We had problems in initial system planning as it was difficult to get our head round the flow of the system. However, after a little after hours reading, we were better able to understand how to modularise our code well. As planning time increased, time required to refactor/modularise code decreased.

1. We initially wanted to build an app intended to help grandmothers remember the names of their grandchildren using autocomplete. However, we struggled to find a large enough file with peoples names. We then pivoted idea towards a colour picker app (for which we found a medium-size object). It would have been wiser to search for large objects before deciding on the autocomplete theme. 

1. We experienced a large **API crisis**. A 'mime error' kept occuring when reading the .css file which meant that the api was responding with `Content-Type: text/html` when it should respond with `Content-Type: text/css` . 

1. On the front end we kept making small mistakes like defining functions but not calling them or not having the precise syntax correct for event handlers. For example, `event.target.value`.

1. To create our response object on the back end we used includes() method inside a filter() function: includes() checks whether user input is part of any of the colours names from our library and filter() creates a new array with all the objects from our library that match the user input string. To make includes() compare actual values we used toLowerCase() method.

1. We kind of succeeded with building the function that created the response object to the XHR request, but we spent ages trying to figure out why our page didn’t load plain index.html. And the lesson we learnt is that we should be attentive to our small mistakes, like typos or closing if functions with else statements. 

## Good links
* [Collaborative readMe](https://hackmd.io/)! Props go to @astroash for sharing this and making this our most beautiful readme yet. :heart_eyes:
* [includes()] (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
* [Why do we need modules] (http://requirejs.org/docs/why.html)

Final shoutout to @mineshmshah for providing chocolate when we most needed it. :chocolate_bar:



