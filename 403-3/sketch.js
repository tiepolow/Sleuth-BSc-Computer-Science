/*

Officer: 7311170
CaseNum: 403-3-36354580-7311170

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Mullenweg Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 82 meters from Norbert's Weiner Stand then alert local police by drawing a Olive circle around it with a radius of 82 pixels.
- if Shiffman is in Gates Department Store then the neighbourhood watch must be notified by drawing a Indigo rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a MediumPurple rectangle covering the area between Gates Avenue, Ada Avenue, Mullenweg Street and Leodorf Way.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

var NorbertX = 715;
var NorbertY = 500;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    
    // - if Shiffman is within 82 meters from Norbert's Weiner Stand then alert local police by drawing a Olive circle around it with a radius of 82 pixels. 
    // Position: 715, 500
    
    // Check if thief is within range
    var distancetoNorbert = dist(mouseX, mouseY, NorbertX, NorbertY);
    
    if (distancetoNorbert <82)
    {
        fill(128,128,0); // Olive color
        noStroke();
        ellipse(NorbertX, NorbertY, 164,164); // Radis is 82, so diameter is 164
    }
     
    //- if Shiffman is in Gates Department Store then the neighbourhood watch must be notified by drawing a Indigo rectangle around it.
    // position:
        
    
    else if (mouseX > 2100 && mouseX < 2250 && mouseY > 344 && mouseY < 424) 
    {
        fill(75,0,130); //Indigo color
        rect(2100, 344, 160, 80);
    }
    
    //- if Shiffman is in neither position, a global alert must be issued by drawing a MediumPurple rectangle covering the area between Gates Avenue, Ada Avenue, Mullenweg Street and Leodorf Way.
    
    else 
    {
        fill(147,112,219); //Medium Purple
        rect(165, 308, 285, 465);
    }
    

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}
