## Website Performance Optimization portfolio project

1- How to run application:

Open index.html in Chrome Browser.  Other browser such as firefox and Edge have not been tested.

2- Optimizations:

In order to improve performance on PageSpeed Insights, the following optimizations were made (based on Evaluation Rubric).

Dev Code is located in src/
Production Code is in dest/

Critical Rendering Path for index.html
    1. Removed unneed font family request
    2. Added media query to print style sheet.
    3. Relocated Render blocking css request to end of page load.
    4. Add async request to google.analytics
    
    
Framerate for pizza.html
    1. Compressed and Resized pizzeria.jpg to 270px width 
    2. Reduced color depth of pizza.png
    3. Replaced querySelectors with getElementbyId
    4. Used requestAnimationFrame to call updatePositions()
    5. Removed window.scrollTop in favor of simplier calculation
    6. Used translateX instead of requesting syle.left.
    
Computation Efficiency for Pizza.html
    1. Replace changePizzaSizes code with optimized code from video lecture
    2. Swapped querySelectorAll for getElementsByClassName

Build Tools
    1. Images were optimized using grunt-image
    2. css files were optimized using grunt-contrib-cssmin
    3. html files were optimized using grunt-contrib-htmlmin
    
   Development tools:
   Created batch files to launch python local html server, ngrok, and chrome

Comments
    1. Comments have been included in /src documents, but are stripped out during optimizations (dest/).
    2. Most original comments have been left intact from original authors.

Documentation
    1. You're reading the README...
