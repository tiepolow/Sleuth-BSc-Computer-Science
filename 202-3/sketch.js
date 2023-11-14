/*

Officer: 7311170
CaseNum: 202-3-10099729-7311170

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Spring Green filled text with a Magenta outline in Diggity font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(522,559);
	textSize(31);
}

function draw()
{
	background(255);

	fill(255,255,0);
	stroke(165,42,42);
	textFont(Ballpointprint);
//   text("?", 451,167);
	fill(244,164,96);
	stroke(32,178,170);
//   text("take", 270,305);
	fill(238,130,238);
	stroke(0,191,255);
	textFont(Diggity);
//   text("much", 74,305);
	fill(255,127,80);
	stroke(0,0,255);
	textFont(Melissa);
//   text("I'm", 362,273);
	fill(240,230,140);
	stroke(255,0,255);
	textFont(Diggity);
//   text("relationship", 266,236);
	fill(147,112,219);
	stroke(128,0,128);
	textFont(Ballpointprint);
//   text("Are", 192,167);
	fill(250,128,114);
	stroke(128,128,0);
	textFont(Melissa);
//   text("no", 75,93);
	fill(0,255,127);
	stroke(148,0,211);
//   text("you", 166,131);
	fill(255,127,80);
	stroke(46,139,87);
//   text("so,", 425,131);
	fill(178,34,34);
//   text("Is", 195,236);
	push();
	fill(0,250,154);
	stroke(0,250,154);
	textFont(Diggity);
//   text("so", 120,273);
	pop();
	fill(255,165,0);
	textFont(Ballpointprint);
//   text("l", 101,93);
	fill(255,0,255);
	stroke(0,128,0);
	textFont(Melissa);
//   text("ing", 82,31);
	push();
	fill(0,139,139);
	stroke(0,206,209);
//   text("sometimes.", 259,273);
	pop();
	fill(0,100,0);
	stroke(0,206,209);
	textFont(RonsFont);
//   text("continual", 315,93);
	fill(238,130,238);
	stroke(153,50,204);
	textFont(Diggity);
//   text("Forever", 11,404);
	push();
	fill(219,112,147);
	stroke(32,178,170);
//   text("not", 397,273);
	pop();
	stroke(0,0,205);
	textFont(RonsFont);
//   text("The", 358,305);
	fill(0,0,255);
	stroke(153,50,204);
	textFont(Melissa);
//   text("should", 131,202);
	fill(233,150,122);
	textFont(Ballpointprint);
//   text("onger", 106,93);
	push();
	fill(255,127,80);
	stroke(0,128,128);
//   text("?", 350,131);
	pop();
	fill(255,165,0);
	stroke(34,139,34);
//   text("can", 26,93);
	push();
	fill(124,252,0);
	textFont(RonsFont);
//   text("avoiding", 299,167);
	pop();
	stroke(0,191,255);
//   text("hort", 209,131);
	fill(160,82,45);
	stroke(148,0,211);
	textFont(Diggity);
//   text("these", 248,93);
	fill(123,104,238);
	stroke(0,128,128);
	textFont(RonsFont);
//   text("me", 404,167);
	fill(219,112,147);
	stroke(0,255,127);
	textFont(Ballpointprint);
//   text("You", 20,273);
	fill(139,0,0);
	stroke(148,0,211);
	textFont(Diggity);
//   text("x", 71,466);
	fill(255,99,71);
	stroke(127,255,0);
	textFont(Ballpointprint);
//   text("s", 200,131);
	fill(127,255,0);
	stroke(0,0,128);
	textFont(RonsFont);
//   text("can", 13,167);
	fill(0,255,127);
	stroke(255,0,255);
	textFont(Diggity);
    text("safe", 384,236);
	fill(255,105,180);
	stroke(0,0,255);
//   text("and", 434,202);
	fill(0,255,127);
	stroke(148,0,211);
	textFont(Melissa);
//   text("of", 264,131);
	push();
	fill(50,205,50);
	stroke(255,165,0);
//   text("money", 290,131);
	pop();
	stroke(255,0,255);
	textFont(Diggity);
    text("break", 364,202);
	fill(34,139,34);
	stroke(0,100,0);
	textFont(Ballpointprint);
//   text("sort", 18,236);
	push();
	fill(255,105,180);
	stroke(255,255,0);
	textFont(RonsFont);
//   text("this", 69,236);
	pop();
	fill(205,133,63);
	stroke(210,105,30);
//   text("yours,", 100,404);
	fill(30,144,255);
	stroke(127,255,0);
//   text("delays.", 17,131);
	fill(219,112,147);
	stroke(153,50,204);
	textFont(Diggity);
//   text("I", 201,305);
	fill(139,69,19);
	stroke(0,0,128);
	textFont(Melissa);
//   text("go", 189,202);
	push();
	fill(0,0,255);
	stroke(255,215,0);
	textFont(RonsFont);
//   text("can", 216,305);
	pop();
	fill(255,0,0);
//   text("Perh", 11,202);
	fill(65,105,225);
	stroke(255,215,0);
	textFont(RonsFont);
//   text("Bob,", 112,31);
	fill(0,250,154);
	stroke(25,25,112);
	textFont(Diggity);
//   text("?", 334,305);
	fill(222,184,135);
	stroke(139,0,139);
	textFont(Ballpointprint);
//   text("send", 67,167);
	fill(107,142,35);
	stroke(0,255,127);
	textFont(Diggity);
//   text("out.", 147,236);
	fill(123,104,238);
	stroke(128,128,0);
	textFont(Melissa);
//   text("aps", 49,202);
	fill(255,215,0);
	stroke(107,142,35);
	textFont(Diggity);
//  text("we", 88,202);
	fill(0,255,127);
	stroke(255,0,255);
    text("ignore", 181,93);
    text("cash", 135,167);
	fill(30,144,255);
	stroke(165,42,42);
	textFont(RonsFont);
//   text("away", 216,202);
	push();
	fill(128,128,0);
	stroke(210,105,30);
//   text("silence.", 62,342);
	pop();
	fill(0,0,139);
	stroke(154,205,50);
	textFont(Ballpointprint);
//   text("our", 222,236);
	push();
	fill(255,165,0);
	stroke(255,140,0);
	textFont(RonsFont);
//   text("I", 459,131);
	pop();
	fill(32,178,170);
	stroke(0,191,255);
//   text("you", 250,167);
	fill(255,69,0);
	stroke(178,34,34);
	textFont(Melissa);
//   text("Daisy", 17,466);
	fill(139,0,0);
	stroke(32,178,170);
//   text("darl", 51,31);
	fill(250,128,114);
	stroke(0,255,255);
	textFont(RonsFont);
//   text("how", 17,305);
	fill(139,0,0);
	stroke(255,140,0);
	textFont(Ballpointprint);
//   text("sure", 441,273);
	fill(139,0,139);
	stroke(255,215,0);
//   text("guarded", 153,273);
	fill(128,128,0);
	stroke(46,139,87);
	textFont(Melissa);
//   text("My", 17,31);
	push();
	fill(173,216,230);
	stroke(139,69,19);
	textFont(Diggity);
//   text("a", 339,202);
	pop();
	fill(222,184,135);
	stroke(0,0,255);
	textFont(Diggity);
//   text("are", 73,273);
	fill(128,0,128);
	stroke(127,255,0);
	textFont(Melissa);
//   text("all", 124,236);
	fill(65,105,225);
	stroke(124,252,0);
	textFont(RonsFont);
//   text("Are", 108,131);
	fill(32,178,170);
	stroke(255,215,0);
	textFont(Diggity);
//   text("I", 11,93);
	fill(205,133,63);
	stroke(0,0,139);
	textFont(Ballpointprint);
//   text("for", 289,202);
	fill(186,85,211);
	stroke(154,205,50);
//   text("more", 136,305);
	push();
	fill(138,43,226);
	stroke(75,0,130);
	textFont(Diggity);
//   text("the", 16,342);
	pop();
	fill(0,191,255);
	stroke(178,34,34);
	textFont(RonsFont);
//   text("If", 384,131);
	fill(176,224,230);
	stroke(0,255,255);
	textFont(Diggity);
//   text("secrets,", 405,305);
	stroke(220,20,60);
	textFont(RonsFont);
//   text("?", 441,236);



}
