/*
The case of the Python Syndicate
Stage 3


Officer: 7311170
CaseNum: 301-2-11109288-7311170

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Robbie Kray has been declared and initialised
- Position each mugshot relative to Robbie Kray
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Robbie Kray object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Robbie Kray 
- Do not add any additional commands

*/

var photoBoard;
var bonesKarpinskiImage;
var robbieKrayImage;
var pawelKarpinskiImage;
var cecilKarpinskiImage;
var countessHamiltonImage;
var rockyKrayImage;

var robbieKrayObject;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	rockyKrayImage = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbieKrayObject = {
		x: 408,
		y: 40,
		image: robbieKrayImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbieKrayObject.image, robbieKrayObject.x, robbieKrayObject.y);

	image(bonesKarpinskiImage, robbieKrayObject.x -293, robbieKrayObject.y ); //115, 40
	image(pawelKarpinskiImage, robbieKrayObject.x +293, robbieKrayObject.y); //701, 40
	image(cecilKarpinskiImage, robbieKrayObject.x -293, robbieKrayObject.y +269); //115, 309
	image(countessHamiltonImage, robbieKrayObject.x , robbieKrayObject.y +269 ); //408, 309
	image(rockyKrayImage, robbieKrayObject.x +293, robbieKrayObject.y +269); //701, 309

}