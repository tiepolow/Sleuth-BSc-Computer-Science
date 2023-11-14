/*

Officer: 7311170
CaseNum: 401-3-75015457-7311170

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If alcohol goes above 0.66, arsenic dips below 0.39, and also formaldehyde dips below 0.72, decrease protamine by 0.04
	- When mercury goes above 0.68 or amanita_mushrooms goes above 0.27, whilst at the same time, hemlock dips below 0.33, raise protamine by 0.05
	- When either ricin goes above 0.47, formaldehyde dips below 0.55, alcohol goes above 0.5, or perhaps mercury goes above 0.46, decrement ethanol by 0.04
	- When either hemlock dips below 0.41, strychnine dips below 0.69, or perhaps arsenic goes above 0.31, increment ethanol by 0.05
	- If ricin dips below 0.47 or arsenic dips below 0.35, whilst at the same time, alcohol dips below 0.65, decrease insulin by 0.03
	- When strychnine goes above 0.25 and formaldehyde dips below 0.39, or on the other hand, mercury dips below 0.7 or hemlock goes above 0.69, increase insulin by 0.05
	- When hemlock goes above 0.33 and arsenic dips below 0.46, or on the other hand, formaldehyde goes above 0.39 and ricin goes above 0.49, try decreasing betaBlocker by 0.01
	- When either amanita_mushrooms goes above 0.74, mercury goes above 0.29, alcohol dips below 0.4, or perhaps strychnine goes above 0.33, increase betaBlocker by 0.01
	- When formaldehyde goes above 0.34 and amanita_mushrooms goes above 0.67, whilst at the same time, alcohol dips below 0.44 or strychnine dips below 0.74, reduce Sodium_Bicarbonate by 0.02
	- If mercury dips below 0.65 or ricin goes above 0.42, or on the other hand, arsenic dips below 0.36 and hemlock goes above 0.64, increase Sodium_Bicarbonate by 0.01


Your conditional statements should consider the following poisons:

	- strychnine
	- hemlock
	- amanita_mushrooms
	- mercury
	- alcohol
	- formaldehyde
	- ricin
	- arsenic


Your conditional statements should modify the following antidotes:

	- protamine
	- ethanol
	- insulin
	- betaBlocker
	- Sodium_Bicarbonate


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
var strychnine;
var hemlock;
var amanita_mushrooms;
var mercury;
var alcohol;
var formaldehyde;
var ricin;
var arsenic;


//Declare the antidote variables
var protamine;
var ethanol;
var insulin;
var betaBlocker;
var Sodium_Bicarbonate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	strychnine = 0.5;
	hemlock = 0.5;
	amanita_mushrooms = 0.5;
	mercury = 0.5;
	alcohol = 0.5;
	formaldehyde = 0.5;
	ricin = 0.5;
	arsenic = 0.5;
	protamine = 0.5;
	ethanol = 0.5;
	insulin = 0.5;
	betaBlocker = 0.5;
	Sodium_Bicarbonate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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

// If alcohol goes above 0.66, arsenic dips below 0.39, and also formaldehyde dips below 0.72, decrease protamine by 0.04
  if (alcohol > 0.66 && arsenic < 0.39 && formaldehyde < 0.72) {
    protamine -= 0.04;
  }

  // When mercury goes above 0.68 or amanita_mushrooms goes above 0.27, whilst at the same time, hemlock dips below 0.33, raise protamine by 0.05
  if ((mercury > 0.68 || amanita_mushrooms > 0.27) && hemlock < 0.33) {
    protamine += 0.05;
  }

  // When either ricin goes above 0.47, formaldehyde dips below 0.55, alcohol goes above 0.5, or perhaps mercury goes above 0.46, decrement ethanol by 0.04
  if (ricin > 0.47 || formaldehyde < 0.55 || alcohol > 0.5 || mercury > 0.46) {
    ethanol -= 0.04;
  }

  // When either hemlock dips below 0.41, strychnine dips below 0.69, or perhaps arsenic goes above 0.31, increment ethanol by 0.05
  if (hemlock < 0.41 || strychnine < 0.69 || arsenic > 0.31) {
    ethanol += 0.05;
  }

  // If ricin dips below 0.47 or arsenic dips below 0.35, whilst at the same time, alcohol dips below 0.65, decrease insulin by 0.03 **
  if ((ricin < 0.47 || arsenic < 0.35) && alcohol < 0.65) {
    insulin -= 0.03;
  }

  // When strychnine goes above 0.25 and formaldehyde dips below 0.39, or on the other hand, mercury dips below 0.7 or hemlock goes above 0.69, increase insulin by 0.05
  if ((strychnine > 0.25 && formaldehyde < 0.39) || (mercury < 0.7 || hemlock > 0.69)) {
    insulin += 0.05;
  }

  // When hemlock goes above 0.33 and arsenic dips below 0.46, or on the other hand, formaldehyde goes above 0.39 and ricin goes above 0.49, try decreasing betaBlocker by 0.01
  if ((hemlock > 0.33 && arsenic < 0.46) || (formaldehyde > 0.39 && ricin > 0.49)) {
    betaBlocker -= 0.01;
  }

  // When either amanita_mushrooms goes above 0.74, mercury goes above 0.29, alcohol dips below 0.4, or perhaps strychnine goes above 0.33, increase betaBlocker by 0.01
  if (amanita_mushrooms > 0.74 || mercury > 0.29 || alcohol < 0.4 || strychnine > 0.33) {
    betaBlocker += 0.01;
  }

  // When formaldehyde goes above 0.34 and amanita_mushrooms goes above 0.67, whilst at the same time, alcohol dips below 0.44 or strychnine dips below 0.74, reduce Sodium_Bicarbonate by 0.02
  if (formaldehyde > 0.34 && amanita_mushrooms > 0.67 && (alcohol < 0.44 || strychnine < 0.74)) {
    Sodium_Bicarbonate -= 0.02;
  }

  // If mercury dips below 0.65 or ricin goes above 0.42, or on the other hand, arsenic dips below 0.36 and hemlock goes above 0.64, increase Sodium_Bicarbonate by 0.01
  if ((mercury < 0.65 || ricin > 0.42) || (arsenic < 0.36 && hemlock > 0.64)) {
    Sodium_Bicarbonate += 0.01;
  }



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	strychnine = nextValue(graphs[0],strychnine);
	hemlock = nextValue(graphs[1],hemlock);
	amanita_mushrooms = nextValue(graphs[2],amanita_mushrooms);
	mercury = nextValue(graphs[3],mercury);
	alcohol = nextValue(graphs[4],alcohol);
	formaldehyde = nextValue(graphs[5],formaldehyde);
	ricin = nextValue(graphs[6],ricin);
	arsenic = nextValue(graphs[7],arsenic);


	protamine = constrain(protamine, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	insulin = constrain(insulin, 0, 1);
	betaBlocker = constrain(betaBlocker, 0, 1);
	Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('strychnine: ' + nf(strychnine,1,2), 20,20);
	fill(colors[1]);
	text('hemlock: ' + nf(hemlock,1,2), 20,40);
	fill(colors[2]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,60);
	fill(colors[3]);
	text('mercury: ' + nf(mercury,1,2), 20,80);
	fill(colors[4]);
	text('alcohol: ' + nf(alcohol,1,2), 20,100);
	fill(colors[5]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,120);
	fill(colors[6]);
	text('ricin: ' + nf(ricin,1,2), 20,140);
	fill(colors[7]);
	text('arsenic: ' + nf(arsenic,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(protamine,50,'protamine');
	drawBar(ethanol,200,'ethanol');
	drawBar(insulin,350,'insulin');
	drawBar(betaBlocker,500,'betaBlocker');
	drawBar(Sodium_Bicarbonate,650,'Sodium_Bicarbonate');


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
