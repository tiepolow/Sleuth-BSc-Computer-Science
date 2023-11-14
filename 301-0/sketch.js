/*
The case of the Python Syndicate
Stage 1

Officer: 7311170
CaseNum: 301-0-80751330-7311170

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var cecilKarpinskiImg; //done
var adaLovelaceImg; // done
var robbieKrayImg; //done
var annaKarpinskiImg; //done
var bonesKarpinskiImg;// done
var pawelKarpinskiImg; //done



//declare your new variables below
var adaLovelaceXPos = 408;
var adaLovelaceYPos = 40;

var cecilKarpinskiXPos= 115;
var cecilKarpinskiYPos= 40;

var robbieKrayXPos= 701;
var robbieKrayYPos= 40;

var annaKarpinskiXPos= 115;
var annaKarpinskiYPos= 309;

var bonesKarpinskiXPos= 408;
var bonesKarpinskiYPos= 309;

var pawelKarpinskiXPos= 701;
var pawelKarpinskiYPos= 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	adaLovelaceImg = loadImage("ada.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(adaLovelaceImg, adaLovelaceXPos, adaLovelaceYPos);

	image(cecilKarpinskiImg, cecilKarpinskiXPos, cecilKarpinskiYPos); // done
	image(robbieKrayImg, robbieKrayXPos, robbieKrayYPos); //done
	image(annaKarpinskiImg, annaKarpinskiXPos, annaKarpinskiYPos); //done
	image(bonesKarpinskiImg, bonesKarpinskiXPos, bonesKarpinskiYPos); //done
	image(pawelKarpinskiImg, pawelKarpinskiXPos, pawelKarpinskiYPos);//done

}