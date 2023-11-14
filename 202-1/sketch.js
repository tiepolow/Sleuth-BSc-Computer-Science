/*

Officer: 7311170
CaseNum: 202-1-73974543-7311170

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Blue filled text with a Dark Orchid outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(686,555);
    textFont(letterFont);
    textSize(37);
}

function draw()
{
	background(255);

	fill(0,0,205);
	stroke(199,21,133);
//   text("at", 520,244);
//   text("to", 619,281);
	fill(218,165,32);
	stroke(0,139,139);
//   text("small", 59,281);
	fill(139,0,139);
	stroke(154,205,50);
//   text("side,", 590,244);
	fill(244,164,96);
	stroke(75,0,130);
//   text("For", 9,392);
	fill(255,165,0);
	stroke(0,191,255);
//   text("I", 573,157);
	fill(222,184,135);
	stroke(128,0,0);
//   text("on", 342,318);
	fill(139,69,19);
	stroke(0,250,154);
//   text("kissed", 161,157);
	fill(210,105,30);
	stroke(0,255,255);
//   text("the", 75,198);
	fill(32,178,170);
	stroke(46,139,87);
//   text("desolate.", 236,281);
	fill(0,250,154);
	stroke(0,128,0);
//   text("can", 292,198);
	fill(34,139,34);
	stroke(255,69,0);
//   text("ever", 43,392);
	fill(165,42,42);
	stroke(124,252,0);
//   text("my", 552,244);
	fill(0,206,209);
	stroke(139,69,19);
//   text("we", 625,198);
	fill(220,20,60);
	stroke(46,139,87);
//   text("Even", 190,244);
	fill(0,206,209);
	stroke(75,0,130);
//   text("?", 235,157);
	fill(240,128,128);
	stroke(32,178,170);
//   text("you", 478,244);
	fill(30,144,255);
	stroke(0,206,209);
//   text("Bob,", 124,37);
	fill(186,85,211);
	stroke(0,255,255);
//   text("do", 512,281);
	fill(240,230,140);
	stroke(32,178,170);
//   text("it", 650,111);
	fill(255,0,255);
	stroke(107,142,35);
//   text("havi", 135,111);
	fill(34,139,34);
	stroke(128,0,128);
//   text("of", 442,198);
	fill(135,206,250);
	stroke(0,0,128);
//   text("you", 205,111);
	fill(139,0,139);
	stroke(0,139,139);
//   text("this", 11,281);
	fill(255,105,180);
	stroke(0,250,154);
//   text("How", 429,111);
	fill(173,255,47);
	stroke(154,205,50);
//   text("we", 72,157);
	fill(128,128,0);
	stroke(0,0,128);
//   text("have", 565,281);
	fill(128,0,128);
	stroke(46,139,87);
//   text("longer", 443,281);
	fill(100,149,237);
	stroke(0,100,0);
//   text("town", 118,281);
	fill(220,20,60);
	stroke(255,140,0);
//   text("Daisy", 9,466);
	fill(65,105,225);
	stroke(255,0,0);
//   text("darling", 50,37);
	fill(238,130,238);
	stroke(0,191,255);
//   text("I", 272,198);
	fill(255,105,180);
	stroke(165,42,42);
//   text("ink", 358,198);
	fill(255,0,255);
	stroke(0,191,255);
//   text("I", 59,111);
	fill(199,21,133);
	stroke(148,0,211);
//   text("around", 247,111);
	fill(124,252,0);
	stroke(0,191,255);
//   text("you", 404,157);
	fill(0,128,0);
	stroke(46,139,87);
//   text("without", 391,244);
	fill(173,216,230);
	stroke(255,0,0);
//   text("s", 426,318);
	fill(127,255,0);
	stroke(255,140,0);
//   text("stare", 593,157);
	fill(128,128,0);
	stroke(165,42,42);
//   text("My", 9,37);
	fill(184,134,11);
	stroke(255,140,0);
//   text("will", 584,198);
	fill(219,112,147);
	stroke(128,128,0);
//   text("months", 540,111);
	fill(218,112,214);
	stroke(0,139,139);
//   text("How", 335,281);
	fill(0,0,255);
	stroke(148,0,211);
//   text("the", 270,244);
	fill(255,69,0);
	stroke(0,250,154);
//   text("your", 374,318);
	fill(25,25,112);
	stroke(255,165,0);
//   text("I'm", 219,318);
	fill(65,105,225);
	stroke(218,165,32);
//   text("last", 112,157);
	fill(127,255,212);
	stroke(0,139,139);
//   text("long", 276,157);
	fill(255,165,0);
	stroke(154,205,50);
//   text("you.", 474,198);
	fill(240,230,140);
	stroke(0,250,154);
//   text("When", 520,198);
	fill(106,90,205);
	stroke(128,0,128);
//   text("How", 9,111);
	fill(255,69,0);
	stroke(127,255,0);
//   text("?", 198,318);
	fill(127,255,0);
	stroke(128,128,0);
//   text("th", 336,198);
	fill(135,206,250);
	stroke(165,42,42);
//   text("the", 322,111);
	fill(135,206,235);
	stroke(0,100,0);
//   text("feels", 177,281);
	fill(244,164,96);
	stroke(139,0,0);
//   text("I", 545,281);
	fill(153,50,204);
	stroke(107,142,35);
//   text("wift", 439,318);
	fill(50,205,50);
	stroke(255,215,0);
//   text("be", 11,244);
	fill(34,139,34);
	stroke(0,191,255);
//   text("ng", 173,111);
	fill(255,255,0);
	stroke(184,134,11);
//   text("only", 394,198);
	stroke(32,178,170);
//   text("is", 624,111);
	fill(184,134,11);
	stroke(127,255,0);
//   text("arms.", 508,157);
	fill(244,164,96);
	stroke(124,252,0);
//   text("and", 228,198);
	fill(0,250,154);
	stroke(255,0,255);
//   text("in", 246,244);
	stroke(199,21,133);
//   text("my", 470,157);
	fill(176,224,230);
	stroke(255,255,0);
//   text("this", 75,318);
	fill(178,34,34);
	stroke(128,128,0);
//   text("to", 324,157);
	fill(127,255,212);
	stroke(0,100,0);
//   text("longing", 123,318);
	fill(160,82,45);
	stroke(255,140,0);
//   text("I", 256,157);
	fill(218,165,32);
	stroke(124,252,0);
//   text("much", 385,281);
	fill(25,25,112);
	stroke(0,191,255);
//   text("x", 73,466);
	fill(153,50,204);
	stroke(50,205,50);
//   text("miss", 79,111);
	fill(176,224,230);
	stroke(184,134,11);
//   text("in", 446,157);
	fill(50,205,50);
	stroke(0,0,255);
//   text("return.", 494,318);
	fill(128,128,0);
	stroke(0,0,205);
//   text("sky,", 175,198);
	fill(75,0,130);
	stroke(255,0,0);
//   text("many", 479,111);
	fill(107,142,35);
	stroke(154,205,50);
//   text("since", 12,157);
	fill(0,0,205);
	stroke(0,0,128);
//   text("night", 117,198);
	fill(72,209,204);
	stroke(0,100,0);
//   text("?", 169,244);
	fill(0,250,154);
	stroke(25,25,112);
//   text("spring,", 312,244);
	fill(0,0,205);
	stroke(0,206,209);
//   text("yours,", 95,392);
	fill(72,209,204);
	stroke(0,191,255);
//   text("again", 109,244);
	fill(0,0,255);
	stroke(153,50,204);
    text("up", 12,198);
    text("united", 42,244);
    text("at", 43,198);
	fill(144,238,144);
	stroke(50,205,50);
//   text("banking", 260,318);
	fill(0,0,255);
	stroke(153,50,204);
    text("store", 9,318);
    text("hold", 356,157);
	fill(178,34,34);
	stroke(107,142,35);
//   text("place.", 364,111);



}
