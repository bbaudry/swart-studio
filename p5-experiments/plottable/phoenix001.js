function savesvg() {
    save("phoenix001.svg");
}

function savepng() {
    save("phoenix001.png");
}

var fSize = 17
var bowie
var xoff,xinc
var steps = 10
var xstep = actualwidth/steps
var ystep = actualheight/steps

function preload() {
    bowie = loadFont("../fonts/1CAMBam_Stick_9.ttf");
    sourcecode = loadStrings('phoenix001.js');
}

function draw() {
    background(0,0,0)
    noFill()
    xoff=0.0
    xinc=0.005
    stroke(0,0,100)
    rect(leftmargin,topmargin,actualwidth,actualheight)
    grid()
    drawgrid()
    noLoop()
}

var grille=[]
function grid(){
    var x,y
    for(i=0;i<steps;i++){
        x=leftmargin+i*xstep+noise(xoff)*xstep;xoff+=xinc
        for(j=0;j<steps;j++){
            y=topmargin+j*ystep+random(xoff)*ystep;xoff+=xinc
            grille.push({x:x,y:y})
        }
    }
}

function drawgrid(){
    var x,y
    for(i=0;i<grille.length;i++){
        x=grille[i].x
        y=grille[i].y
//        ellipse(x,y,5,5)
    }

    var x1,y1,x2,y2,x3,y3,x4,y4
    var i1,i2,i3,i4
    i1=Math.floor(random(steps-2));console.log(i1)
    i2=i1+Math.floor(random(steps-2))*steps
    x1=grille[i2].x
    y1=grille[i2].y
    ellipse(x1,y1,5,5)
    i2=Math.floor(random(i1+1,steps-1));console.log(i2)
    i2+=Math.floor(random(steps-1))*steps
    x2=grille[i2].x
    y2=grille[i2].y
    ellipse(x2,y2,5,5)
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