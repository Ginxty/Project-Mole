
Squash-a-Bug
================

running code for a Single Page Application using web Development skills.

## Purpose

This is a HTML5 / JS / CSS (Single Page Application) developed with Sublime Text and Chrome.

It was created to showcase my skills after completing the teaching portion of the Web Development training; using all the skills I've developed over the two weeks to create a simple but solid game from the ground up.

## Functionality

This is a simple application that displays a single page with instructions, start and reset buttons. Along with the gameboard, a timer and a scoring system. 

## Implementation

The functionality has been implemented using the following features:

* Sublime Text
* Twitter Bootstrap 4
* Javascript through Jquery
* semantic HTML5
* HTML5 audio
* well-structured CSS
* minimalist design


### Building

I began the process with sketches of the site, I knew I wanted a whack-a-mole type game, so I added a grid; I knew I wanted a start and reset button, with a scoring system and timer; so I added them too; with a large title at the top. It started looking like a structured site. I then broke it up into what it's skeleton would be, a 9-3 bootstrap row is what I landed on in the end.

I started with the framework, bootstrap. I created the row with two columns and populated one with my 4x4 grid in css (a ul with 16 lis). After that I began to focus on mechanics; I needed a randomly generated number to corrispond to a location on my grid. I did this by using math.random along with eq and my list numbers. to make something appear on that tile I used a class, in this case "mole", this then allowed me to add the class onto the random tile, showing my red cross icon, this was all within a for loop with a timeout so it ran infinately. I then needed the class to be removed on clicking it. this took a while, trying different methods, but I landed on using event.target on the ul. this was the one that worked because by just isolating an li, it actually allowed any li to remove the class from the mole (ruining the one main mechanic of the game). after the click fix I created a scoring system, where each hit was worth 150 points; this was acheived using another 'on click' function, with a parseInt'ed score that added 150 onto the score part of my html.

I then ran into the problem of, if the 'mole show' function runs a finite amount of times, the the score, theoretically, will be the same each time a player runs the game. to solve this I settled on a timer system countdown, so the player can see how much time they have, to increase 'gameyness'. this was created using a timeout function that then removes all the tiles after 30 seconds and shows 'game over' on the screen.

after this I started adding extra features, I reused my 'mole' code and scoring code to create 'good moles' that deduct points if hit. I also left them to stay on the scree nrather that timing them out; it actually added to the experiecne a bit more, making the game harder over time, by reducting the area you can click without deducting points. another feature added was sound cues. I added these through HTML, linking them through javascript to trigger when you hit a 'good mole' and when the game is over.

then I began to finalise my styling, going for a monochrome pallet with a red accent on the start button. it keeps it simple and clean. I placed 4 circuit board png assets on the page to add to the techy theme of Squash-a-bug. after a bit of boostrap polish, removing gutters and alignment etc, the game was done. And I'm really happy with it.



### Running

only locally for now...


## site

all stored locally for now...