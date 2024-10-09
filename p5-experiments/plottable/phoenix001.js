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
    drawgrid(0)
    drawgrid(1)
    drawgrid(2)
    drawgrid(3)
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
    //        ellipse(x,y,5,5)
        }
    }
}

function drawgrid(off){
    var x1,y1,x2,y2,x3,y3,x4,y4
    var i1,i2,i3,i4,j1,j2,j3,j4
    var rad=17
    j1=Math.floor(random(steps-2))
    i1=off 
    x1=grille[i1+j1*steps].x
    y1=grille[i1+j1*steps].y
    //fill(0,100,100);ellipse(x1,y1,rad,rad)
    j2=Math.floor(random(j1+1,steps-1))
    i2=off    
    x2=grille[i2+j2*steps].x
    y2=grille[i2+j2*steps].y
    //fill(50,100,100);ellipse(x2,y2,rad,rad)
    j3=Math.floor(random(j1+1,steps-1))
    i3=Math.floor(random(i1+1,steps-1))    
    x3=grille[i3+j3*steps].x
    y3=grille[i3+j3*steps].y
    //fill(180,100,100);ellipse(x3,y3,rad,rad)
    j4=j1
    i4=Math.floor(random(i2+1,steps-1))    
    x4=grille[i4+j4*steps].x
    y4=grille[i4+j4*steps].y
    //fill(210,100,100);ellipse(x4,y4,rad,rad)
    noFill()
    stroke(0,0,100);quad(x1,y1,x2,y2,x3,y3,x4,y4)
}
/* 
    i1=Math.floor(random(steps-2));console.log("i1: "+i1)
    j1=0//Math.floor(random(steps-2))    
    x1=grille[i1+j1*steps].x
    y1=grille[i1+j1*steps].y
    fill(0,100,100);ellipse(x1,y1,rad,rad)
    i2=i1//Math.floor(random(i1+1,steps-1));console.log("i2: "+i2)
    j2=Math.floor(random(steps-2))    
    x2=grille[i2+j2*steps].x
    y2=grille[i2+j2*steps].y
    fill(50,100,100);ellipse(x2,y2,rad,rad)
    i3=Math.floor(random(i1+1,steps-1));console.log(i3)
    j3=j2//Math.floor(random(j1+1,steps-1))    
    x3=grille[i3+j3*steps].x
    y3=grille[i3+j3*steps].y
    //fill(180,100,100);ellipse(x3,y3,rad,rad)
    i4=i1//Math.floor(random(steps-2));console.log(i4)
    j4=Math.floor(random(j2+1,steps-1))    
    x4=grille[i4+j4*steps].x
    y4=grille[i4+j4*steps].y
    //fill(210,100,100);ellipse(x4,y4,rad,rad)
*/
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