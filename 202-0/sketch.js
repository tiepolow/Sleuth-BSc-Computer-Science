/*

Officer: 7311170
CaseNum: 202-0-37373249-7311170

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Medium Turquoise text (see https://www.w3.org/TR/css3-iccprof#numerical). 
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(534,640);
//   textFont(letterFont);
//   textSize(30);
}

function draw()
{
	background(255);

	fill(238,130,238);
//   text("in", 314,356);
	fill(30,144,255);
//   text("?", 220,226);
	fill(106,90,205);
//   text("harp.", 285,428);
//   text("lovely", 64,30);
//   text("hear", 118,392);
	fill(255,255,0);
//   text("few", 336,158);
	fill(75,0,130);
//   text("the", 453,90);
	fill(0,255,255);
//   text("since", 177,292);
//   text("You", 17,90);
	fill(176,224,230);
//   text("I", 166,356);
	fill(240,128,128);
//   text("moment", 83,124);
	fill(220,20,60);
//   text("Daisy,", 140,30);
	fill(186,85,211);
//   text("It", 18,356);
//   text("From", 388,90);
	fill(128,0,128);
//   text("in", 290,90);
//   text("only", 25,325);
	fill(65,105,225);
//   text("are", 69,90);
	fill(0,0,255);
//   text("green", 334,325);
//   text("day", 234,90);
	fill(144,238,144);
//   text("x", 75,548);
	fill(255,69,0);
//   text("that", 173,124);
	fill(127,255,0);
//   text("like", 308,392);
	fill(250,128,114);
//   text("be", 349,226);
	fill(0,100,0);
//   text("saw", 267,124);
	fill(0,250,154);
//   text("and", 84,488);
//   text("I", 81,392);
	fill(222,184,135);
//   text("of", 190,428);
//   text("uiet", 417,356);
	fill(255,215,0);
//   text("darling,", 243,325);
//   text("Ever", 107,292);
//   text("May", 419,188);
	fill(238,130,238);
//   text("from", 200,158);
	fill(0,0,205);
//   text("alive", 188,257);
	fill(238,232,170);
//   text("make", 18,226);
	fill(255,99,71);
//   text("when", 96,356);
//   text("Oh", 17,30);
	fill(0,100,0);
//   text("your", 392,257);
//   text("s", 466,158);
//   text("music", 124,428);
	fill(0,128,0);
//   text("rson", 135,257);
	fill(25,25,112);
//   text("bles", 23,428);
	fill(184,134,11);
//   text("of", 146,325);
	fill(173,216,230);
//   text("voice", 239,392);
	fill(0,0,139);
//   text("you", 82,188);
//   text("confession", 100,226);
//   text("lovely", 374,124);
	fill(255,127,80);
//   text("that", 24,392);
	fill(107,142,35);
//   text("eyes.", 415,325);
//   text("I", 478,188);
	fill(123,104,238);
//   text("face,", 22,158);
	fill(135,206,250);
//   text("last", 288,292);
	fill(127,255,212);
//   text("q", 402,356);
	fill(255,165,0);
//   text("the", 231,428);
	fill(153,50,204);
//   text("I", 230,124);
	fill(34,139,34);
//   text("I", 405,292);
//   text("love.", 356,188);
//   text("my", 201,188);
	fill(32,178,170);
//   text("were", 130,188);
//   text("am", 349,257);
//   text("sed", 67,428);
	fill(0,0,128);
//   text("that", 25,188);
	fill(219,112,147);
//   text("my", 121,90);
	fill(139,69,19);
//   text("true", 298,188);
	fill(244,164,96);
//   text("the", 396,226);
	fill(165,42,42);
//   text("your", 187,325);
	fill(233,150,122);
//   text("knew", 131,158);
	fill(0,0,205);
//   text("our", 245,292);
	fill(127,255,0);
//   text("I", 312,257);
//   text("luckiest", 17,257);
//   text("your", 318,124);
	fill(34,139,34);
//   text("st", 49,124);
	fill(250,128,114);
//   text("fir", 19,124);
	fill(255,127,80);
//   text("must", 291,226);
	fill(199,21,133);
//   text("sunny", 166,90);
//   text("I", 254,226);
	fill(100,149,237);
//   text("think", 79,325);
	fill(127,255,212);
//   text("the", 365,392);
//   text("al", 246,356);
	fill(255,140,0);
//   text("am", 203,356);
	fill(128,128,0);
//   text("Bob", 17,548);
//   text("one", 262,356);
	fill(32,178,170);
//   text("kisses,", 137,488);
	fill(100,149,237);
//   text("your", 183,392);
	fill(50,205,50);
//   text("one", 246,188);
	fill(72,209,204);
    text("date", 338,292);
	fill(250,128,114);
//   text("can", 442,292);
	fill(72,209,204);
    text("second", 398,158);
    text("a", 72,226);
    text("April", 324,90);
	fill(127,255,212);
//   text("I", 94,158);
	fill(107,142,35);
//   text("pe", 109,257);
	fill(205,133,63);
//   text("that", 255,257);
//   text("Love", 17,488);
	fill(65,105,225);
//   text("is", 63,356);
	fill(72,209,204);
    text("chosen", 24,292);
	fill(244,164,96);
//   text("those", 264,158);
//   text("the", 348,356);



}
