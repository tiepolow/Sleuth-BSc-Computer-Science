/*

Officer: 7311170
CaseNum: 403-2-94082356-7311170

Case 403 - Cornered - stage 3

We have Shiffman cornered at Gates Bank and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside Gates Bank

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of Gates Bank.
Draw a Brown rectangle covering Gates Bank for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  fill()  - Use r,g,b values between 0 and 255.
  rect()
  mouseX
  mouseY

*/

var img;

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
    
      //Write your code below here ...
    fill(165,42,42);
    if (mouseX > 1908 && mouseX < 2038 && mouseY > 1026 && mouseY < 1144) 
    {
    rect(1908, 1026, 130, 122);
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

