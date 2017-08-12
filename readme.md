Responsive Spotify Widget
-------------------------
*A simple widget to embed music into your blog posts.*
![In Action!](https://github.com/DoomPatrol/responsive-spotify-widget/blob/master/embed-gif.gif)

Ever miss the good old days of Myspace where you could see what people were listening to? Well, you're in luck because now you can embed music on every page of your site.

The widget itself is very simple and is based off of Spotify's existing [embeddable play button](https://developer.spotify.com/technologies/widgets/spotify-play-button/)  so no external API's are required and it should work with almost any CMS, templating language, or as embedded HTML.

----------


Requirements
-------------------

- Font Awesome
- jQuery :scream:


Getting Started
---------
Getting started is really easy. You can either choose to clone the repo and take the code you need or go to the files and copy and paste into your existing code. If you are just embedding the HTML, make sure to add in embed URI (see Usage) in whichever widget size you choose to use.

If you are going to be using a CMS or templating language, your development process is going to differ. The general process is as follows:
1. Copy/Clone the HTML, CSS, & JS files into your project
2. Declare the embed URI (!!!SPOTIFY_EMBED_URI in the HTML) as a variable in whatever language you are building the widget in.
3. Declare the blurb (if you want it) as a variable in whatever language you are building the widget in.
4. That's it!

Usage
---------
Once you are have the code, all you need to do is copy the embed URI from Spotify for any song, album, or playlist. To do this, all you need to do is:

 1. Find the item you want to embed
 2. Right click on it
 3. Click Share
 4. Then click copy URI embed code

After you have the code, just copy it in your preferred CMS or template language and it will embed once you publish!


![enter image description here](https://github.com/DoomPatrol/responsive-spotify-widget/blob/master/copy-uri.gif)

Editing the Code
---------
If you want to change the colors, position, etc. the CSS is very short and straight forward. All of the JS is in jQuery and could easily be ported/changed to any flavor of JavaScript that you prefer.
