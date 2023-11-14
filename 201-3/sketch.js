/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 7311170
CaseNum: 201-3-40695234-7311170

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    
    beginShape()
    vertex(408, 277)
    vertex(400, 341)
    vertex(438, 378)
    vertex(396, 485)
    vertex(413, 505)
    vertex(444, 473)
    vertex(480, 370)
    vertex(772, 464)
    vertex(789, 365)
    vertex(724, 307)
    vertex(547, 256)
    vertex(569, 207)
    vertex(508,151)
    vertex(493, 183)
    vertex(532, 216)
    vertex(493, 237)
    vertex(469, 230)
    vertex(408, 277)
       
    endShape();
    

    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
