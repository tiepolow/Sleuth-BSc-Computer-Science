/*
The case of the Python Syndicate
Stage 2


Officer: 7311170
CaseNum: 301-1-90494220-7311170

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Pawel Karpinski

- The variables for Pawel Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Pawel Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Pawel Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Pawel Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var adaLovelaceImg;
var robbieKrayImg;
var annaKarpinskiImg;
var pawelKarpinskiImg;
var countessHamiltonImg;
var bonesKarpinskiImg;


var pawelKarpinskiXPosition = 115;
var pawelKarpinskiYPosition = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	adaLovelaceImg = loadImage("ada.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawelKarpinskiImg, pawelKarpinskiXPosition, pawelKarpinskiYPosition);

	image(adaLovelaceImg, pawelKarpinskiXPosition, pawelKarpinskiYPosition -269);
	image(robbieKrayImg, pawelKarpinskiXPosition +293, pawelKarpinskiYPosition -269); //408, 40
	image(annaKarpinskiImg, pawelKarpinskiXPosition +586, pawelKarpinskiYPosition -269);//701, 40 ??
	image(countessHamiltonImg, pawelKarpinskiXPosition +293, pawelKarpinskiYPosition); //408, 309
	image(bonesKarpinskiImg, pawelKarpinskiXPosition +586, pawelKarpinskiYPosition); //701, 309

}