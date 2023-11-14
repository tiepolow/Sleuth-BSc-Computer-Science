/*
The case of the slippery Minsky brothers
Stage 4: Gates Memorial Art Museum

Officer: 7311170
CaseNum: 302-3-51368747-7311170

Darn it ! All three Minskys have broken out of the county jail. I told you they were slippery. Word has it that they are planning their biggest heist yet. Tonight they plan to steal multiple priceless artworks from the Gates Memorial Art Museum. I’ve assembled you a team. Head down to the Museum and stop them.

- Edit spotlight1 by adding x and y properties initialised to your location (NB. you're the detective). 
- Also add endX and endY properties initialised to one of the Minsky's location (NB. they're the burglars).
- Initialise the other two spotlights, creating all of the required properties. 
- Each spotlight should point to a different Minsky.
- Make each of the spotlights move perfectly from you towards their respective Minsky by incrementing/decrementing the x and y properties of the object using:

 "+=" or "+"
 "-=" or "-"

- If you get everything correct then the three spotlights will move from you to each of the Minskys and stop over them.

*/


//the variables for the spotlight objects
var spotlight1;
var spotlight2;
var spotlight3;

// other variables, you don't need to change these
var img, spotlight_image;


function preload()
{
	img = loadImage('scene.png');
	spotlight_image = loadImage('spotlight.png')
}

function setup()
{
	createCanvas(img.width, img.height);

	    // Initialize the first spotlight to point to brother 1
    spotlight1 = {
        image: spotlight_image,
        x: 200,        // Detective's location
        y: 454,
        endX: 155,    // Brother 1's location
        endY: 640,
    };

    // Initialize the second spotlight to point to brother 2
    spotlight2 = {
        image: spotlight_image,
        x: 200,        // Detective's location
        y: 454,
        endX: 363,    // Brother 2's location
        endY: 303,
    };

    // Initialize the third spotlight to point to brother 3
    spotlight3 = {
        image: spotlight_image,
        x: 200,        // Detective's location
        y: 454,
        endX: 755,    // Brother 3's location
        endY: 127,
    };
}


function draw()
{
	image(img, 0, 0);

	// alter the properties x and y of the objects below to animate the spotlights

    // Move spotlight1
    if (spotlight1.x < spotlight1.endX) {
        spotlight1.x += 1;  // Move to the right
    } else if (spotlight1.x > spotlight1.endX) {
        spotlight1.x -= 1;  // Move to the left
    }

    if (spotlight1.y < spotlight1.endY) {
        spotlight1.y += 1;  // Move down
    } else if (spotlight1.y > spotlight1.endY) {
        spotlight1.y -= 1;  // Move up
    }

    // Move spotlight2
    if (spotlight2.x < spotlight2.endX) {
        spotlight2.x += 1;  // Move to the right
    } else if (spotlight2.x > spotlight2.endX) {
        spotlight2.x -= 1;  // Move to the left
    }

    if (spotlight2.y < spotlight2.endY) {
        spotlight2.y += 1;  // Move down
    } else if (spotlight2.y > spotlight2.endY) {
        spotlight2.y -= 1;  // Move up
    }

    // Move spotlight3
    if (spotlight3.x < spotlight3.endX) {
        spotlight3.x += 1;  // Move to the right
    } else if (spotlight3.x > spotlight3.endX) {
        spotlight3.x -= 1;  // Move to the left
    }

    if (spotlight3.y < spotlight3.endY) {
        spotlight3.y += 1;  // Move down
    } else if (spotlight3.y > spotlight3.endY) {
        spotlight3.y -= 1;  // Move up
    }


	////////// DO NOT CHANGE ANYTHING BELOW /////////////

	var spotlights = [spotlight1, spotlight2, spotlight3];
	var spotlightSize = 300;

	blendMode(BLEND);
	background(30);

	for (var i = 0; i < spotlights.length; i++)
	{
		var spotlight = spotlights[i];
		//stop the spotlight if it's near enough to endx and endy
        if(spotlight)
        {
            //stop the spotlight if it goes off of the screen

			if(spotlight.x !== undefined){
            	spotlight.x = min(spotlight.x, 960);
				spotlight.x = max(spotlight.x, 0);
			}

			if(spotlight.y !== undefined){
            	spotlight.y = min(spotlight.y, 945);
            	spotlight.y = max(spotlight.y, 0);
			}


			if(spotlight.x !== undefined && spotlight.y !== undefined &&
			spotlight.endX !== undefined && spotlight.endY !== undefined
			){
				if (abs(spotlight.endX - spotlight.x) < 50
							&& abs(spotlight.endY - spotlight.y) < 50)
				{
					spotlight.x = spotlight.endX;
					spotlight.y = spotlight.endY;
				}
			}
      
			let _x = spotlight.x || 0;
			let _y = spotlight.y || 0;

            image(spotlight.image, _x-spotlightSize/2,
                    _y-spotlightSize/2, spotlightSize, spotlightSize);
        }
	}

	blendMode(DARKEST);
	image(img, 0, 0);

	////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
