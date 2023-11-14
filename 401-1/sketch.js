/*

Officer: 7311170
CaseNum: 401-1-61645762-7311170

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If chlorine goes above 0.73, decrement methylene by 0.04
	- When snakeVenom goes above 0.29 and novichok dips below 0.37, raise methylene by 0.03
	- When chlorine goes above 0.6 and snakeVenom goes above 0.68, reduce antivenom by 0.02
	- If formaldehyde goes above 0.28 or novichok dips below 0.72, increment antivenom by 0.03
	- If novichok dips below 0.3 or snakeVenom goes above 0.74, decrease CalciumGluconate by 0.01
	- If chlorine dips below 0.57 or formaldehyde dips below 0.5, increase CalciumGluconate by 0.05
	- If snakeVenom dips below 0.44 or chlorine goes above 0.65, reduce Beta_Blocker by 0.05
	- If novichok goes above 0.61 and formaldehyde goes above 0.37, raise Beta_Blocker by 0.04


Your conditional statements should consider the following poisons:

	- snakeVenom
	- chlorine
	- formaldehyde
	- novichok


Your conditional statements should modify the following antidotes:

	- methylene
	- antivenom
	- CalciumGluconate
	- Beta_Blocker


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var snakeVenom;
var chlorine;
var formaldehyde;
var novichok;


//Declare the antidote variables
var methylene;
var antivenom;
var CalciumGluconate;
var Beta_Blocker;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	snakeVenom = 0.5;
	chlorine = 0.5;
	formaldehyde = 0.5;
	novichok = 0.5;
	methylene = 0.5;
	antivenom = 0.5;
	CalciumGluconate = 0.5;
	Beta_Blocker = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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
    
    if(chlorine > 0.73){
        methylene -= 0.04;
    }
    if(snakeVenom > 0.29 && novichok < 0.37 ){
        methylene += 0.03;
    }
    if(chlorine > 0.6 && snakeVenom > 0.68){
        antivenom -= 0.02;
    }
    if(formaldehyde > 0.28 || novichok < 0.72){
        antivenom += 0.03;
    }
    if(novichok < 0.3 || snakeVenom > 0.74){
        CalciumGluconate -= 0.01;
    }
    if (chlorine < 0.57 || formaldehyde < 0.5){
        CalciumGluconate += 0.05;
    }
    if (snakeVenom < 0.44 || chlorine > 0.65){
        Beta_Blocker -= 0.05;
    }
    if (novichok > 0.61 && formaldehyde > 0.37){
        Beta_Blocker += 0.04;
    }
    
    
    
    



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	snakeVenom = nextValue(graphs[0],snakeVenom);
	chlorine = nextValue(graphs[1],chlorine);
	formaldehyde = nextValue(graphs[2],formaldehyde);
	novichok = nextValue(graphs[3],novichok);


	methylene = constrain(methylene, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	CalciumGluconate = constrain(CalciumGluconate, 0, 1);
	Beta_Blocker = constrain(Beta_Blocker, 0, 1);


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
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,20);
	fill(colors[1]);
	text('chlorine: ' + nf(chlorine,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);
	fill(colors[3]);
	text('novichok: ' + nf(novichok,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(antivenom,200,'antivenom');
	drawBar(CalciumGluconate,350,'CalciumGluconate');
	drawBar(Beta_Blocker,500,'Beta_Blocker');


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
