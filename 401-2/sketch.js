/*

Officer: 7311170
CaseNum: 401-2-79076276-7311170

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If ricin goes above 0.34 or warfarin goes above 0.3, whilst at the same time, insecticide goes above 0.58, try decreasing antivenom by 0.04
	- When snake_venom dips below 0.75 or botulinium dips below 0.51, increment antivenom by 0.02
	- If snake_venom goes above 0.39 and warfarin goes above 0.54, try decreasing insulin by 0.05
	- If ricin dips below 0.75, or on the other hand, sarin goes above 0.31 and botulinium dips below 0.58, try increasing insulin by 0.05
	- When either warfarin dips below 0.41, sarin goes above 0.63, or perhaps ricin goes above 0.28, decrement antitoxin by 0.01
	- When snake_venom goes above 0.59 or insecticide goes above 0.58, increase antitoxin by 0.02
	- When warfarin goes above 0.56 or ricin dips below 0.55, decrease protamine by 0.05
	- If botulinium dips below 0.43, whilst at the same time, snake_venom dips below 0.46 or sarin dips below 0.64, increase protamine by 0.02


Your conditional statements should consider the following poisons:

	- ricin
	- sarin
	- botulinium
	- snake_venom
	- insecticide
	- warfarin


Your conditional statements should modify the following antidotes:

	- antivenom
	- insulin
	- antitoxin
	- protamine


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var ricin;
var sarin;
var botulinium;
var snake_venom;
var insecticide;
var warfarin;


//Declare the antidote variables
var antivenom;
var insulin;
var antitoxin;
var protamine;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	ricin = 0.5;
	sarin = 0.5;
	botulinium = 0.5;
	snake_venom = 0.5;
	insecticide = 0.5;
	warfarin = 0.5;
	antivenom = 0.5;
	insulin = 0.5;
	antitoxin = 0.5;
	protamine = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

    if((ricin > 0.34 || warfarin > 0.3) && insecticide > 0.58){
        antivenom -= 0.04;
    }
    if(snake_venom < 0.75 || botulinium < 0.51){
        antivenom += 0.02;
    }
    if(snake_venom > 0.39 && warfarin > 0.54){
        insulin -= 0.05;
    }
    if((ricin < 0.75) || (sarin > 0.31 && botulinium < 0.58)){
        insulin += 0.05;
    }
    if (warfarin < 0.41 || sarin > 0.63 || ricin > 0.28) {
        antitoxin -= 0.01;
    }
    if (snake_venom > 0.59 || insecticide > 0.58) {
        antitoxin += 0.02;
    }
    if(warfarin > 0.56 || ricin < 0.55){
        protamine -= 0.05;
    }
    if (botulinium < 0.43 && (snake_venom < 0.46 || sarin <0.64)){
        protamine += 0.02;
    }
    


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	ricin = nextValue(graphs[0],ricin);
	sarin = nextValue(graphs[1],sarin);
	botulinium = nextValue(graphs[2],botulinium);
	snake_venom = nextValue(graphs[3],snake_venom);
	insecticide = nextValue(graphs[4],insecticide);
	warfarin = nextValue(graphs[5],warfarin);


	antivenom = constrain(antivenom, 0, 1);
	insulin = constrain(insulin, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	protamine = constrain(protamine, 0, 1);


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
	text('ricin: ' + nf(ricin,1,2), 20,20);
	fill(colors[1]);
	text('sarin: ' + nf(sarin,1,2), 20,40);
	fill(colors[2]);
	text('botulinium: ' + nf(botulinium,1,2), 20,60);
	fill(colors[3]);
	text('snake_venom: ' + nf(snake_venom,1,2), 20,80);
	fill(colors[4]);
	text('insecticide: ' + nf(insecticide,1,2), 20,100);
	fill(colors[5]);
	text('warfarin: ' + nf(warfarin,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(antivenom,50,'antivenom');
	drawBar(insulin,200,'insulin');
	drawBar(antitoxin,350,'antitoxin');
	drawBar(protamine,500,'protamine');


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
