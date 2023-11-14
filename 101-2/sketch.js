/*

Officer: 7311170
CaseNum: 101-2-21800613-7311170

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Magenta filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Gold filled
rectangle around him.

Identify the man in the striped top by drawing a Medium Blue filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    //Anna Magenta
    fill(255,0,255, 100);
	rect(910, 245, 190, 400);

    //heavy-set man in the fishing overalls by drawing a Gold filled
	fill(255,215,0, 100);
	rect(1205, 250 , 290, 320);
    
    //striped top by drawing a Medium Blue filled
	fill(0,0,205, 100);
	rect(60, 343, 181 ,460);



	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();

}
