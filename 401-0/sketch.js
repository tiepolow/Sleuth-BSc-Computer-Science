/*

Officer: 7311170
CaseNum: 401-0-95671252-7311170

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- When arsenic goes above 0.28, decrement opioids by 0.02
	- If nerveGas goes above 0.48, try increasing opioids by 0.05
	- When amanitaMushrooms goes above 0.54, decrement sodiumBicarbonate by 0.03
	- When arsenic goes above 0.36, try increasing sodiumBicarbonate by 0.05
	- If amanitaMushrooms goes above 0.63, reduce antibodies by 0.02
	- If nerveGas dips below 0.74, increment antibodies by 0.04


Your conditional statements should consider the following poisons:

	- arsenic
	- nerveGas
	- amanitaMushrooms


Your conditional statements should modify the following antidotes:

	- opioids
	- sodiumBicarbonate
	- antibodies


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var arsenic;
var nerveGas;
var amanitaMushrooms;


//Declare the antidote variables
var opioids;
var sodiumBicarbonate;
var antibodies;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	arsenic = 0.5;
	nerveGas = 0.5;
	amanitaMushrooms = 0.5;
	opioids = 0.5;
	sodiumBicarbonate = 0.5;
	antibodies = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
   
    if(arsenic > 0.28){
		opioids -= 0.02;
	}
    
    if (nerveGas > 0.48){
        opioids += 0.05;
    }
    if (amanitaMushrooms > 0.54){
        sodiumBicarbonate -= 0.03;
    }
    if (arsenic > 0.36) {
        sodiumBicarbonate +=0.05;
    }
    if (amanitaMushrooms > 0.63){
        antibodies -= 0.02;
    }
    if (nerveGas < 0.74){
        antibodies +=0.04;
    }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	arsenic = nextValue(graphs[0],arsenic);
	nerveGas = nextValue(graphs[1],nerveGas);
	amanitaMushrooms = nextValue(graphs[2],amanitaMushrooms);


	opioids = constrain(opioids, 0, 1);
	sodiumBicarbonate = constrain(sodiumBicarbonate, 0, 1);
	antibodies = constrain(antibodies, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('arsenic: ' + nf(arsenic,1,2), 20,20);
	fill(colors[1]);
	text('nerveGas: ' + nf(nerveGas,1,2), 20,40);
	fill(colors[2]);
	text('amanitaMushrooms: ' + nf(amanitaMushrooms,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(opioids,50,'opioids');
	drawBar(sodiumBicarbonate,200,'sodiumBicarbonate');
	drawBar(antibodies,350,'antibodies');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
