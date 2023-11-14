/*

Officer: 7311170
CaseNum: 403-1-16493012-7311170

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Torvald's House.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 102 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 102 pixels of Torvald's House - draw a DarkSalmon ellipse with a radius of 102 around it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  fill()  - Use r,g,b values between 0 and 255.
  ellipse()
  dist()
  mouseX
  mouseY
  width
  height


*/

var img;

var torvaldsX = 343;
var torvaldsY = 160;

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
    
//    // Calculate the distance between Shiffman and Torvald's House
//    var distanceToTorvalds = dist(mouseX, mouseY, torvaldsX, torvaldsY);
//
//    // Check if Shiffman is within 102 pixels of Torvald's House
//    if (distanceToTorvalds < 102)
//    {
//        fill(233, 150, 122); // DarkSalmon color
//        noStroke();
//        ellipse(mouseX, mouseY, 204, 204); // Radius is 102, so diameter is 204
//    }
    
    var distanceToTorvalds = dist(mouseX, mouseY, torvaldsX, torvaldsY);
    
    // Check if Shiffman is within 102 pixels of Torvald's House
    if (distanceToTorvalds < 102) 
    {
        fill(233, 150, 122); // DarkSalmon color
        noStroke();
        ellipse(torvaldsX, torvaldsY, 204, 204); // Radius is 102, so diameter is 204
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
    
