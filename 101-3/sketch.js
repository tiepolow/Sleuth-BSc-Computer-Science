/*

Officer: 7311170
CaseNum: 101-3-61025925-7311170

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Sea Green filled rectangle with a Dark Orchid outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Cornflower Blue filled
rectangle with a Green outline around him.

Identify the man reading the newspaper by drawing a Medium Spring Green filled rectangle
with a Sea Green outline around him.

Identify the woman with the dog by drawing a Goldenrod filled rectangle with a
Tomato outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...

    //Anna by drawing a Sea Green filled rectangle with a Dark Orchid outline
    fill(46,139,87, 100)
	stroke(153,50,204)
	rect(85, 140, 125, 260)

    //man with the monocle smoking the cigar by drawing a Cornflower Blue filled
    //rectangle with a Green outline
	fill(100,149,237, 100)
	stroke(0,128,0)
	rect(1260, 330, 260, 350)

    //man reading the newspaper by drawing a Medium Spring Green filled rectangle
    //with a Sea Green
	fill(0,250,154, 100)
	stroke(46,139,87)
	rect(620, 201, 170, 330)

    //woman with the dog by drawing a Goldenrod filled rectangle with a
    //Tomato outline
	fill(218,165,32, 100)
	stroke(255,99,71)
	rect(1650, 140, 190, 400)


	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
