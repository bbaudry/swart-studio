var echelle = 1
var w = 1200 * echelle
var h = 900 * echelle
var padding = 0
var rightmargin = 0.95 * w
var leftmargin = 0.05 * w
var topmargin = 0.05 * h
var bottommargin = 0.7 * h
var actualwidth = rightmargin - leftmargin
var actualheight = bottommargin - topmargin
var cnv, pos, speed

function setup() {
    cnv =   createCanvas(windowWidth, windowHeight);
    w = windowWidth
    h = windowHeight
    centerCanvas;
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    background(0,0,0);
    pos={x:w/2,y:h/2}
    speed=7
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    cnv.position(x, y);
}

function draw(){
    background(0,0,0);
    fill(50,100,100)
    ellipse(pos.x,pos.y,200,200)
}

function keyPressed() {
    if(keyCode === RIGHT_ARROW ){pos.x+=speed}
    if(keyCode === LEFT_ARROW ){pos.x-=speed}
    if(keyCode === DOWN_ARROW ){pos.y+=speed}
    if(keyCode === UP_ARROW){pos.y-=speed}
    
  }
  

