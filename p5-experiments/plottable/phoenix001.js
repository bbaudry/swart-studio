function savesvg() {
    save("phoenix001.svg");
}

function savepng() {
    save("phoenix001.png");
}

var fSize = 17
var bowie
function preload() {
    bowie = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('phoenix001.js');
}

function draw() {
    background(0,0,0)
    noFill()
    stroke(0,0,100)
    rect(leftmargin,topmargin,actualwidth,actualheight)
    grid()
    noLoop()
}

var grille=[]

function grid(){
    var steps = 10
    var xstep = actualwidth/steps
    var ystep = actualheight/steps
    var x,y
    for(i=0;i<steps;i++){
        x=leftmargin+i*xstep+random(0.3)*xstep
        for(j=0;j<steps;j++){
            y=topmargin+j*ystep+random(0.3)*ystep
            ellipse(x,y,5,5)
        }
    }
}

function showcredits(posx, posy) {
    textFont(bowie)
    textSize(fSize);
    stroke(0,0,100)
    fill(0,0,100)
    var c = "al.my.re [noline 004). 20 September 2024"
    text(c, posx, posy)
    c = "p5.js :: random() :: juicy-gcode"
    text(c, posx, posy+fSize)
    c = "pour alice"
    text(c, posx, posy+2*fSize)

}