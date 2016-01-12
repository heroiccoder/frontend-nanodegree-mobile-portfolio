## Website Performance Optimization portfolio project

How to run the application
--------------------------

In order to run the first part of the project open dist/index.html with a javascript capable browser. For the second part of the project open views/pizza.html (do not open dist/views/pizza.html that one is there only to keep the link valid).

Run grunt task
--------------
To run grunt tasks you can just "grunt" in the main directory. You should have all dependencies installed! Remember they are listed in package.json

Optimizations - First Part
--------------------------

To optimize index.html I used google pagespeed insights and pagespeed on chrome developer tools. They are probably the same application but insights does give more information about whatever it notices.

Using chrome developer tools I got optimized versions of my images. I also used GIMP to scale the pizza image used on the website because the browser was loading a much bigger picture than necessary. 

I minified css and js. I re ordered the scripts so as to minimize the critical rendering path. I also included width and height on the images per pagespeed suggestion.

Finally, per reviewer suggestion, I created a grunt task to automate minifying, replacing the css/js files with their minified version and copying everything to a dist folder. HTML is also minified and automatically corrected to use production version of css/js files.

Optimizations - Second Part

1. Change queryselector with "getElementById" and "getElementsByClassName" because they are faster.
2. In changePizzaSizes moved out of the loop dx and newwidth. I also moved the selector out of the loop. There is no need to query it so many times inside the loop.
3. Moved this assignment var pizzasDiv = document.getElementById("randomPizzas") out of the loop in order to prevent querying the dom in every iteration.
4. in updatePositions I moved the dom query out of the loop. This is done before the loop: var scrollTop=(document.body.scrollTop / 1250);
5. inside '''document.addEventListener('DOMContentLoaded', function() {'''
   I calculate the amount of rows in order to not create 200 which are too many.